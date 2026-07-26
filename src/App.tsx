import { useEffect, useMemo, useRef, useState } from 'react';
import { Header } from './components/Header';
import { GeneratedImageLoadingPanel } from './components/GeneratedImageLoadingPanel';
import { GeneratedImagePanel } from './components/GeneratedImagePanel';
import { HistoryGalleryPanel } from './components/HistoryGalleryPanel';
import { ThreeDAssetPanel } from './components/ThreeDAssetPanel';
import type { ThreeDAssetViewerHandle } from './components/ThreeDAssetViewer';
import { Sidebar } from './components/Sidebar';
import { ResultPanel } from './components/ResultPanel';
import { ImageEditBar } from './components/ImageEditBar';
import { botariStyles, characterOptions } from './data/botariData';
import type { EditValues } from './components/GeneratedImageEditModal';
import { asset } from './lib/asset';

type GenerationStatus = 'idle' | 'loading' | 'generated';
type AssetGenerationStatus = 'idle' | 'loading' | 'generated';
type HistoryItem = {
  id: number;
  title: string;
  kind: '2D 이미지' | '3D 에셋';
  thumbnail: string;
  imageSrc: string;
  prompt: string;
  createdAt: number;
  metadataItems: Array<{ label: string; value: string }>;
  variant: 'base' | 'background-on' | 'background-off' | 'pose' | 'edit' | 'edit-prompt' | '3d';
};

type EditableImageState = {
  character: string;
  style: string;
  prompt: string;
  backgroundEnabled: boolean;
  poseLabel: string;
};

const BASE_2D_IMAGE_SRC = asset('assets/generated/2d-completed.jpg');
const BACKGROUND_OFF_IMAGE_SRC = asset('assets/generated/2d-completed-remove.jpg');
const EDIT_2D_IMAGE_SRC = asset('assets/generated/2d-completed-3dstyle.jpg');
const PROMPT_EDIT_2D_IMAGE_SRC = asset('assets/generated/2d-completed-3dstyle-acc.jpg');
const POSE_2D_IMAGE_SRC = asset('assets/generated/2d-completed-3dstyle.jpg');

const getGeneratedImageSrc = (variant: HistoryItem['variant']) => {
  if (variant === 'background-off') {
    return BACKGROUND_OFF_IMAGE_SRC;
  }

  if (variant === 'pose') {
    return POSE_2D_IMAGE_SRC;
  }

  if (variant === 'edit') {
    return EDIT_2D_IMAGE_SRC;
  }

  if (variant === 'edit-prompt') {
    return PROMPT_EDIT_2D_IMAGE_SRC;
  }

  return BASE_2D_IMAGE_SRC;
};

export default function App() {
  const [prompt, setPrompt] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');
  const [isCharacterOpen, setIsCharacterOpen] = useState(false);
  const [notice, setNotice] = useState('');
  const [generationStatus, setGenerationStatus] = useState<GenerationStatus>('idle');
  const [generatedImage, setGeneratedImage] = useState<{ imageSrc: string; prompt: string; metadataItems: Array<{ label: string; value: string }> } | null>(null);
  const [historyItems, setHistoryItems] = useState<HistoryItem[]>([]);
  const [selectedHistoryId, setSelectedHistoryId] = useState<number | null>(null);
  const [isHistoryGalleryOpen, setIsHistoryGalleryOpen] = useState(false);
  const [isWireframeEnabled, setIsWireframeEnabled] = useState(false);
  const [isSkeletonEnabled, setIsSkeletonEnabled] = useState(false);
  const [assetGenerationStatus, setAssetGenerationStatus] = useState<AssetGenerationStatus>('idle');
  const [isSkeletonAvailable, setIsSkeletonAvailable] = useState<boolean>(true);
  const [isImageEditBarOpen, setIsImageEditBarOpen] = useState(false);
  const generationTimerRef = useRef<number | null>(null);
  const assetGenerationTimerRef = useRef<number | null>(null);
  const historyIdRef = useRef(1);
  const threeDViewerRef = useRef<ThreeDAssetViewerHandle | null>(null);
  const modelGlbUrl = asset('assets/generated/duck-example.glb');

  const downloadFile = async (url: string, filename: string) => {
    try {
      const res = await fetch(url, { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const blob = await res.blob();
      const objectUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = objectUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(objectUrl);
    } catch (e) {
      setNotice('다운로드 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
    }
  };

  const buildMetadataItems = (state: EditableImageState) => [
    { label: '생성 개체', value: state.character || '-' },
    { label: '스타일', value: state.style || '-' },
    { label: '프롬프트', value: state.prompt || '-' },
  ];

  const pushGeneratedHistoryItem = (state: EditableImageState, variant: HistoryItem['variant']) => {
    const imageSrc = getGeneratedImageSrc(variant);
    const nextHistoryItem: HistoryItem = {
      id: historyIdRef.current++,
      title: '2D 이미지',
      kind: '2D 이미지',
      thumbnail: imageSrc,
      imageSrc,
      prompt: state.prompt,
      createdAt: Date.now(),
      metadataItems: buildMetadataItems(state),
      variant,
    };

    setHistoryItems((current) => [nextHistoryItem, ...current]);
    setSelectedHistoryId(nextHistoryItem.id);
    setGenerationStatus('generated');
    setGeneratedImage({
      imageSrc: nextHistoryItem.imageSrc,
      prompt: nextHistoryItem.prompt,
      metadataItems: nextHistoryItem.metadataItems,
    });
  };

  const selectedCharacterLabel = useMemo(
    () => characterOptions.find((option) => option.value === selectedCharacter)?.label ?? '',
    [selectedCharacter],
  );
  const selectedCharacterPromptTemplate = useMemo(
    () => characterOptions.find((option) => option.value === selectedCharacter)?.promptTemplate ?? '',
    [selectedCharacter],
  );
  const selectedStylePromptTemplate = useMemo(
    () => botariStyles.find((option) => option.id === selectedStyle)?.promptTemplate ?? '',
    [selectedStyle],
  );
  const promptPrefix = useMemo(
    () => [selectedCharacterPromptTemplate, selectedStylePromptTemplate].filter(Boolean).join('\n'),
    [selectedCharacterPromptTemplate, selectedStylePromptTemplate],
  );
  const composePrompt = (prefix: string, userPrompt: string) => [userPrompt.trim(), prefix.trim()].filter(Boolean).join('\n');

  const handleGenerate = () => {
    if (generationTimerRef.current) {
      window.clearTimeout(generationTimerRef.current);
    }

    const selectedStyleLabel = botariStyles.find((option) => option.id === selectedStyle)?.label ?? '-';
    const fullPrompt = composePrompt(promptPrefix, prompt);
    const nextGeneratedImage = {
      imageSrc: BASE_2D_IMAGE_SRC,
      prompt: fullPrompt,
      metadataItems: buildMetadataItems({
        character: selectedCharacterLabel || '-',
        style: selectedStyleLabel,
        prompt: fullPrompt || '-',
        backgroundEnabled: true,
        poseLabel: '기본',
      }),
    };

    setGenerationStatus('loading');
    setGeneratedImage(nextGeneratedImage);
    setNotice('이미지 생성 중입니다. 잠시만 기다려 주세요.');

    generationTimerRef.current = window.setTimeout(() => {
      pushGeneratedHistoryItem(
        {
          character: selectedCharacterLabel || '-',
          style: selectedStyleLabel,
          prompt: fullPrompt,
          backgroundEnabled: true,
          poseLabel: '기본',
        },
        'base',
      );
      setNotice(`임시 생성 이벤트가 실행되었습니다. 프롬프트: ${fullPrompt}`);
    }, 8000);
  };

  const handleEmptyStateGenerate = () => {
    if (!selectedCharacter) {
      setIsCharacterOpen(true);
      setNotice('생성 개체를 먼저 선택해 주세요.');
      return;
    }

    if (!selectedStyle) {
      setNotice('스타일을 선택해 주세요.');
      return;
    }

    handleGenerate();
  };

  const handleGenerateAsset = () => {
    if (assetGenerationTimerRef.current) {
      window.clearTimeout(assetGenerationTimerRef.current);
    }

    setAssetGenerationStatus('loading');
    setNotice('3D 에셋으로 변환 중입니다. 잠시만 기다려 주세요.');

    assetGenerationTimerRef.current = window.setTimeout(() => {
      setHistoryItems((current) => {
        const source2d = current.find((it) => it.kind === '2D 이미지') ?? null;
        const nextHistoryItem: HistoryItem = {
          id: historyIdRef.current++,
          title: '3D 에셋',
          kind: '3D 에셋',
          // 원본 2D 이미지가 있으면 그 이미지를 썸네일로 사용해 가독성 향상
          thumbnail: source2d?.imageSrc ?? asset('assets/styles/character3d.svg'),
          imageSrc: asset('assets/styles/character3d.svg'),
          prompt: '3D 에셋 히스토리',
          createdAt: Date.now(),
          metadataItems: [
            { label: '유형', value: '3D 에셋' },
            { label: '상태', value: '변환 완료' },
            { label: '프롬프트', value: '3D 에셋 히스토리' },
            { label: '원본 2D', value: source2d ? `#${source2d.id}` : '-' },
          ],
          variant: '3d',
        };

        setSelectedHistoryId(nextHistoryItem.id);
        setAssetGenerationStatus('generated');
        setNotice('3D 에셋이 히스토리에 추가되었습니다.');
        // 추가 후 캔버스 렌더를 기다렸다가 스냅샷 캡처 (재시도 포함)
        const SNAPSHOT_INITIAL_DELAY = 420; // 최초 대기 시간(ms)
        const SNAPSHOT_MAX_ATTEMPTS = 12;   // 재시도 횟수 증가
        const SNAPSHOT_INTERVAL = 160;      // 재시도 간격(ms)

        const attemptCapture = (remaining: number) => {
          // 뷰어 준비 전이면 대기 후 재시도
          if (!threeDViewerRef.current?.isReady()) {
            if (remaining > 0) {
              window.setTimeout(() => attemptCapture(remaining - 1), SNAPSHOT_INTERVAL);
            }
            return;
          }

          const dataUrl = threeDViewerRef.current?.captureSnapshot() ?? null;
          if (dataUrl) {
            setHistoryItems((cur) =>
              cur.map((it) => (it.id === nextHistoryItem.id ? { ...it, thumbnail: dataUrl, imageSrc: dataUrl } : it)),
            );
          } else if (remaining > 0) {
            window.setTimeout(() => attemptCapture(remaining - 1), SNAPSHOT_INTERVAL);
          }
        };

        window.setTimeout(() => attemptCapture(SNAPSHOT_MAX_ATTEMPTS), SNAPSHOT_INITIAL_DELAY);

        return [nextHistoryItem, ...current];
      });
    }, 8000);
  };

  const selectedHistoryItem = historyItems.find((item) => item.id === selectedHistoryId) ?? null;
  const latest2dHistoryItem = historyItems.find((item) => item.kind === '2D 이미지') ?? null;
  const selected2dHistoryItem = selectedHistoryItem?.kind === '2D 이미지' ? selectedHistoryItem : null;
  const selected2dDetailItem = selectedHistoryItem?.kind === '3D 에셋' ? selected2dHistoryItem ?? latest2dHistoryItem : selectedHistoryItem;
  const displayedGeneratedImage = selected2dDetailItem
    ? {
        imageSrc: selected2dDetailItem.imageSrc,
        prompt: selected2dDetailItem.prompt,
        metadataItems: selected2dDetailItem.metadataItems,
      }
    : generatedImage;
  const conversionPreviewImage = generationStatus === 'loading' ? null : selected2dHistoryItem ?? latest2dHistoryItem;
  const canConvertTo3D = Boolean(latest2dHistoryItem) && generationStatus !== 'loading' && assetGenerationStatus !== 'loading';
  const isSelectedThreeDAsset = selectedHistoryItem?.kind === '3D 에셋';
  const groupedHistoryItems = useMemo(() => {
    const sortedItems = [...historyItems].sort((left, right) => right.createdAt - left.createdAt);
    const groups = new Map<string, HistoryItem[]>();

    sortedItems.forEach((item) => {
      const date = new Date(item.createdAt);
      const groupKey = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
      const groupItems = groups.get(groupKey) ?? [];

      groupItems.push(item);
      groups.set(groupKey, groupItems);
    });

    return Array.from(groups.entries()).map(([dateLabel, items]) => ({ dateLabel, items }));
  }, [historyItems]);

  const handleToggleHistoryGallery = () => {
    setIsHistoryGalleryOpen((current) => !current);
  };

  const handleSelectHistoryItem = (itemId: number) => {
    setSelectedHistoryId(itemId);
    setIsHistoryGalleryOpen(false);
    setNotice('선택한 히스토리 이미지로 이동했습니다.');
  };

  const handleBackgroundElementsToggle = (nextEnabled: boolean, snapshot: EditableImageState) => {
    pushGeneratedHistoryItem({ ...snapshot, backgroundEnabled: nextEnabled }, nextEnabled ? 'background-on' : 'background-off');
    setNotice(`배경요소를 ${nextEnabled ? 'ON' : 'OFF'} 상태로 다시 생성했습니다.`);
  };

  const handleGeneratePose = (snapshot: EditableImageState) => {
    pushGeneratedHistoryItem({ ...snapshot, poseLabel: '포즈 적용' }, 'pose');
    setNotice('포즈 이미지를 새로 생성했습니다.');
  };

  const handleApplyEdit = (values: EditValues, snapshot: EditableImageState) => {
    const nextCharacter = values.character
      ? characterOptions.find((opt) => opt.value === values.character)?.label || snapshot.character
      : snapshot.character;
    const nextStyle = values.style
      ? botariStyles.find((opt) => opt.id === values.style)?.label || snapshot.style
      : snapshot.style;
    const nextPrompt = values.prompt || snapshot.prompt;

    // 프롬프트가 변경되었으면 edit-prompt 이미지 사용
    const isPromptChanged = Boolean(values.prompt && values.prompt.trim() && values.prompt !== snapshot.prompt);
    const nextVariant: HistoryItem['variant'] = isPromptChanged ? 'edit-prompt' : 'edit';

    pushGeneratedHistoryItem(
      {
        character: nextCharacter,
        style: nextStyle,
        prompt: nextPrompt,
        backgroundEnabled: snapshot.backgroundEnabled,
        poseLabel: snapshot.poseLabel,
      },
      nextVariant,
    );
    setNotice('2차 편집이 적용되었습니다.');
  };

  useEffect(() => {
    return () => {
      if (generationTimerRef.current) {
        window.clearTimeout(generationTimerRef.current);
      }
      if (assetGenerationTimerRef.current) {
        window.clearTimeout(assetGenerationTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <ImageEditBar
          isOpen={isImageEditBarOpen}
          onClose={() => setIsImageEditBarOpen(false)}
          currentCharacterPromptTemplate={selectedCharacterPromptTemplate}
          currentStyleId={selectedStyle}
          onSubmit={({ styleId, userPrompt }) => {
            const chosenStyleId = styleId || selectedStyle;
            const stylePrompt = botariStyles.find((s) => s.id === chosenStyleId)?.promptTemplate || '';
            const prefix = [selectedCharacterPromptTemplate, stylePrompt].filter(Boolean).join('\n');
            const fullPrompt = [userPrompt.trim(), prefix.trim()].filter(Boolean).join('\n');
            handleApplyEdit({ character: selectedCharacter, style: chosenStyleId, prompt: fullPrompt }, {
              character: selectedCharacterLabel || '-',
              style: botariStyles.find((opt) => opt.id === selectedStyle)?.label || '-',
              prompt: displayedGeneratedImage?.prompt || '',
              backgroundEnabled: true,
              poseLabel: '기본',
            });
            // 제출 후에도 편집 바는 계속 열린 상태 유지
            setIsImageEditBarOpen(true);
          }}
        />
        <Sidebar
          promptPrefix={promptPrefix}
          prompt={prompt}
          onPromptChange={setPrompt}
          selectedCharacter={selectedCharacter}
          selectedCharacterLabel={selectedCharacterLabel}
          isCharacterOpen={isCharacterOpen}
          onCharacterToggle={() => setIsCharacterOpen((current) => !current)}
          onCharacterSelect={(value) => {
            setSelectedCharacter(value);
            setIsCharacterOpen(false);
            // Force 'traditional' style selection before first image is generated
            const hasFirst2D = Boolean(historyItems.find((it) => it.kind === '2D 이미지'));
            if (!hasFirst2D) {
              setSelectedStyle('traditional');
            }
          }}
          selectedStyle={selectedStyle}
          onStyleSelect={(value) => {
            // Sidebar에서는 전통민화만 선택 가능(2차 편집에서만 다른 스타일 변경 가능)
            if (value && value !== 'traditional') return;
            setSelectedStyle(value);
          }}
          onGenerate={handleGenerate}
          canGenerate={Boolean(selectedCharacter && selectedStyle)}
          // 사이드바는 항상 잠금: 전통민화만 활성화, 다른 스타일은 2차 편집 모달에서만 변경 가능
          isStyleLocked={true}
        />
        <section className="workspace" aria-label="이미지 생성 결과 영역">
          {isHistoryGalleryOpen ? (
            <HistoryGalleryPanel
              items={historyItems}
              selectedHistoryId={selectedHistoryId}
              onClose={handleToggleHistoryGallery}
              onSelectItem={handleSelectHistoryItem}
              isOpen={isHistoryGalleryOpen}
            />
          ) : (
            <>
              <div className="workspace-grid">
                {generationStatus === 'loading' ? (
                  <GeneratedImageLoadingPanel title="2D 이미지" />
                ) : displayedGeneratedImage ? (
                  <GeneratedImagePanel
                    title={selected2dDetailItem?.kind ?? '2D 이미지'}
                    imageSrc={displayedGeneratedImage.imageSrc}
                    prompt={displayedGeneratedImage.prompt}
                    metadataItems={displayedGeneratedImage.metadataItems}
                    onAction={(action) => {
                      setNotice(`임시 ${action} 이벤트가 실행되었습니다.`);
                    }}
                    onApplyEdit={handleApplyEdit}
                    onGeneratePose={handleGeneratePose}
                    onToggleBackgroundElements={handleBackgroundElementsToggle}
                    onToggleEditBar={() => setIsImageEditBarOpen((v) => !v)}
                    allowSecondaryEdit={Boolean(selected2dDetailItem)}
                    isPoseApplied={selected2dDetailItem?.variant === 'pose'}
                    initialBackgroundElementsEnabled={selected2dDetailItem?.variant === 'background-off' ? false : true}
                  />
                ) : (
                  <ResultPanel title="2D 이미지" emptyLabel="생성된 2D 이미지가 없습니다." onGenerateClick={handleEmptyStateGenerate} />
                )}
                {assetGenerationStatus === 'loading' ? (
                  <GeneratedImageLoadingPanel title="3D 에셋" />
                ) : (
                  <ThreeDAssetPanel
                    title="3D 에셋"
                    emptyLabel={conversionPreviewImage ? '생성된 이미지를\n3D 에셋으로 변환 가능합니다.' : '변환된 3D 에셋이 없습니다.'}
                    hasAsset={isSelectedThreeDAsset}
                    onGenerateClick={handleGenerateAsset}
                    isGenerateDisabled={!canConvertTo3D}
                    wireframe={isWireframeEnabled}
                    onWireframeChange={setIsWireframeEnabled}
                    skeleton={isSkeletonEnabled}
                    onSkeletonChange={setIsSkeletonEnabled}
                    skeletonAvailable={isSkeletonAvailable}
                    onSkeletonSupportChange={setIsSkeletonAvailable}
                    modelUrl={modelGlbUrl}
                    referenceImageSrc={conversionPreviewImage?.imageSrc ?? asset('assets/icons/result-empty.svg')}
                    onAction={async (action) => {
                      if (action === 'download') {
                        setNotice('3D 에셋(.glb) 다운로드를 시작합니다.');
                        await downloadFile(modelGlbUrl, 'botari-3d-asset.glb');
                        setNotice('3D 에셋 다운로드가 완료되었습니다.');
                      } else {
                        setNotice('3D 포맷 옵션이 선택되었습니다.');
                      }
                    }}
                    viewerRef={threeDViewerRef}
                  />
                )}
              </div>
              <div className="history-bar" aria-label="생성 히스토리">
                <button type="button" className="history-button" aria-label="히스토리 열기" onClick={handleToggleHistoryGallery} aria-expanded={isHistoryGalleryOpen}>
                  <img src={asset('assets/icons/history.svg')} alt="" aria-hidden="true" className="history-icon" />
                  히스토리
                </button>
                {historyItems.length > 0 ? (
                  <div className="history-list">
                    {[...historyItems].reverse().map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        className={`history-item${selectedHistoryId === item.id ? ' is-selected' : ''}`}
                        onClick={() => {
                          setSelectedHistoryId(item.id);
                          setNotice(`${item.kind} 히스토리를 선택했습니다.`);
                        }}
                        aria-label={`${item.kind} 선택`}
                      >
                        <img src={item.thumbnail} alt="" aria-hidden="true" className={`history-thumb history-thumb--${item.variant}`} />
                      </button>
                    ))}
                  </div>
                ) : null}
                <button type="button" className="scroll-top-button" aria-label="상단으로 이동" onClick={handleToggleHistoryGallery} aria-expanded={isHistoryGalleryOpen}>
                  <img src={asset('assets/icons/chevron-up-double.svg')} alt="" aria-hidden="true" className="scroll-top-icon" />
                </button>
              </div>
            </>
          )}
        </section>
      </main>
    </div>
  );
}
