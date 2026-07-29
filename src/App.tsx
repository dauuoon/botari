import { useEffect, useMemo, useRef, useState } from 'react';
import { Header } from './components/Header';
import { GeneratedImageLoadingPanel } from './components/GeneratedImageLoadingPanel';
import { GeneratedImagePanel } from './components/GeneratedImagePanel';
import { HistoryGalleryPanel } from './components/HistoryGalleryPanel';
import { ThreeDAssetPanel } from './components/ThreeDAssetPanel';
import type { ThreeDAssetViewerHandle } from './components/ThreeDAssetViewer';
import { Sidebar } from './components/Sidebar';
import { ResultPanel } from './components/ResultPanel';
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
  sourceSet?: 'tiger_01' | 'tiger_03';
};

type EditableImageState = {
  character: string;
  style: string;
  prompt: string;
  backgroundEnabled: boolean;
  poseLabel: string;
  sourceSet?: 'tiger_01' | 'tiger_03';
  imageSrc?: string;
};

// Resolve generated image path from selected character/style to static assets under public/assets/generated
const styleIdToFolderSuffix: Record<string, string> = {
  traditional: 'basic',
  hanji: 'paper',
  ceramic: 'ceramics',
  clay: 'clay',
  felt: 'wool',
  plush: 'plush',
  knit: 'knitting',
  neon: 'neon',
  gameart: 'game',
};

function resolveCharacterValueFromLabel(label: string): string | null {
  const hit = characterOptions.find((c) => c.label === label);
  return hit?.value ?? null;
}

function resolveStyleIdFromLabel(label: string): string | null {
  const hit = botariStyles.find((s) => s.label === label);
  return hit?.id ?? null;
}

function resolveGeneratedImageUrl(
  charLabel: string,
  styleLabel: string,
  opts?: { sourceSet?: 'tiger_01' | 'tiger_03'; backgroundEnabled?: boolean }
): string | null {
  const charValue = resolveCharacterValueFromLabel(charLabel);
  const styleId = resolveStyleIdFromLabel(styleLabel);
  if (!charValue || !styleId) return null;
  const styleSuffix = styleIdToFolderSuffix[styleId];
  if (!styleSuffix) return null;

  // Special handling for tiger sets
  if (charValue === 'tiger') {
    const sourceSet: 'tiger_01' | 'tiger_03' = opts?.sourceSet ?? 'tiger_01';
    // Special-case: tiger_03 + wool (felt) + background toggle variants
    if (sourceSet === 'tiger_03' && styleSuffix === 'wool' && typeof opts?.backgroundEnabled === 'boolean') {
      const file = opts.backgroundEnabled ? 'tiger_wool_backon_03.png' : 'tiger_wool_backoff_03.png';
      return asset(`assets/generated/tiger/tiger_03/tiger_wool/${file}`);
    }
    const baseName = `tiger_${styleSuffix}`;
    const suffix = sourceSet === 'tiger_03' ? '_03.png' : '_01.png';
    return asset(`assets/generated/tiger/${sourceSet}/${baseName}/${baseName}${suffix}`);
  }

  const baseName = `${charValue}_${styleSuffix}`;
  return asset(`assets/generated/${charValue}/${baseName}/${baseName}_01.png`);
}

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
  const [isSidebarEditMode, setIsSidebarEditMode] = useState(false);
  const [editActiveTab, setEditActiveTab] = useState<'keep' | 'character'>('keep');
  const [isEditRefining, setIsEditRefining] = useState(false);
  const [lastTigerSourceSet, setLastTigerSourceSet] = useState<'tiger_01' | 'tiger_03' | null>(null);
  const [haetaeSeqIndex, setHaetaeSeqIndex] = useState(0);
  const [haetaeNextFollowUpSet, setHaetaeNextFollowUpSet] = useState<'haetae_01' | 'haetae_02' | null>(null);
  const generationTimerRef = useRef<number | null>(null);
  const assetGenerationTimerRef = useRef<number | null>(null);
  const editImageTimerRef = useRef<number | null>(null);
  const editHistoryTimerRef = useRef<number | null>(null);
  const historyIdRef = useRef(1);
  const threeDViewerRef = useRef<ThreeDAssetViewerHandle | null>(null);
  const defaultModelGlbUrl = asset('assets/generated/duck-example.glb');

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

  const pushGeneratedHistoryItem = (
    state: EditableImageState,
    variant: HistoryItem['variant'],
    overrideImageSrc?: string,
  ) => {
    const resolved = overrideImageSrc || resolveGeneratedImageUrl(state.character, state.style, { sourceSet: state.sourceSet });
    const imageSrc = resolved || asset('assets/generated/2d-completed.jpg');
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
      sourceSet: state.sourceSet,
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
    let sourceSet: 'tiger_01' | 'tiger_03' | undefined = undefined;
    if (selectedCharacterLabel === '호랑이') {
      // 랜덤으로 tiger_01 / tiger_03 선택
      const pool: Array<'tiger_01' | 'tiger_03'> = ['tiger_01', 'tiger_03'];
      const next = pool[Math.floor(Math.random() * pool.length)];
      sourceSet = next;
      setLastTigerSourceSet(next);
    }
    // Haetae: 첫 생성 시 무작위 세트의 -1, 바로 다음 생성은 같은 세트의 -2
    let haetaeOverrideImage: string | undefined;
    if (selectedCharacterLabel === '해태') {
      let set: 'haetae_01' | 'haetae_02';
      let idx: 0 | 1;
      if (haetaeNextFollowUpSet) {
        set = haetaeNextFollowUpSet;
        idx = 1; // second image in same set
        setHaetaeNextFollowUpSet(null);
      } else {
        set = Math.random() < 0.5 ? 'haetae_01' : 'haetae_02';
        idx = 0; // first image
        setHaetaeNextFollowUpSet(set);
      }
      const setNum = set === 'haetae_01' ? '01' : '02';
      haetaeOverrideImage = asset(`assets/generated/haetae/${set}/haetae_basic/haetae_basic_${setNum}-${idx + 1}.png`);
      setHaetaeSeqIndex(idx);
    }
    const baseImage = haetaeOverrideImage
      || resolveGeneratedImageUrl(selectedCharacterLabel || '-', selectedStyleLabel, { sourceSet })
      || asset('assets/generated/2d-completed.jpg');
    const nextGeneratedImage = {
      imageSrc: baseImage,
      prompt: fullPrompt,
      metadataItems: buildMetadataItems({
        character: selectedCharacterLabel || '-',
        style: selectedStyleLabel,
        prompt: fullPrompt || '-',
        backgroundEnabled: true,
        poseLabel: '기본',
        sourceSet,
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
          sourceSet,
        },
        'base',
        haetaeOverrideImage,
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
  const conversionPreviewImage = (generationStatus === 'loading' || isEditRefining) ? null : (selected2dHistoryItem ?? latest2dHistoryItem);
  const canConvertTo3D = Boolean(latest2dHistoryItem) && generationStatus !== 'loading' && assetGenerationStatus !== 'loading';
  const isSelectedThreeDAsset = selectedHistoryItem?.kind === '3D 에셋';
  const computedModelGlbUrl = useMemo(() => {
    const ref = selected2dDetailItem?.imageSrc || latest2dHistoryItem?.imageSrc || '';
    if (ref.includes('assets/generated/haetae/haetae_01/')) {
      return asset('assets/generated/haetae/haetae_01/haetae_3D/haetae_3D_01.glb');
    }
    if (ref.includes('assets/generated/haetae/haetae_02/')) {
      return asset('assets/generated/haetae/haetae_02/haetae_3D/haetae_3D_02.glb');
    }
    if (ref.includes('assets/generated/dragon/')) {
      return asset('assets/generated/dragon/dragon_3D/dragon_3D_01.glb');
    }
    return defaultModelGlbUrl;
  }, [selected2dDetailItem?.imageSrc, latest2dHistoryItem?.imageSrc]);
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
    // Special rule: Tiger tiger_01 lacks background variants; keep original image.
    let override: string | undefined;
    const currentItem = selected2dDetailItem;
    if (snapshot.character === '호랑이') {
      const set = currentItem?.sourceSet ?? snapshot.sourceSet;
      if (set !== 'tiger_03') {
        // No background variants: keep the current image
        override = currentItem?.imageSrc;
      } else if (snapshot.style === '양모펠트') {
        // tiger_03 + wool has backon/backoff
        override = resolveGeneratedImageUrl(snapshot.character, snapshot.style, { sourceSet: 'tiger_03', backgroundEnabled: nextEnabled }) || currentItem?.imageSrc;
      }
    }

    pushGeneratedHistoryItem({ ...snapshot, backgroundEnabled: nextEnabled, sourceSet: currentItem?.sourceSet ?? snapshot.sourceSet }, nextEnabled ? 'background-on' : 'background-off', override);
    setNotice(`배경요소를 ${nextEnabled ? 'ON' : 'OFF'} 상태로 다시 생성했습니다.`);
  };

  const handleGeneratePose = (snapshot: EditableImageState) => {
    pushGeneratedHistoryItem({ ...snapshot, poseLabel: '포즈 적용', sourceSet: selected2dDetailItem?.sourceSet ?? snapshot.sourceSet }, 'pose');
    setNotice('포즈 이미지를 새로 생성했습니다.');
  };

  const handleApplyEdit = (values: EditValues, snapshot: EditableImageState, overrideImageSrc?: string) => {
    // Show loading panel immediately
    setGenerationStatus('loading');
    setNotice('이미지 수정 중입니다. 잠시만 기다려 주세요.');
    setSelectedHistoryId(null);

    if (editImageTimerRef.current) {
      window.clearTimeout(editImageTimerRef.current);
      editImageTimerRef.current = null;
    }
    if (editHistoryTimerRef.current) {
      window.clearTimeout(editHistoryTimerRef.current);
      editHistoryTimerRef.current = null;
    }

    const MIN_EDIT_LOADING_MS = 5000;
    const editStartAt = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();

    const nextCharacter = values.character
      ? characterOptions.find((opt) => opt.value === values.character)?.label || snapshot.character
      : snapshot.character;
    const nextStyle = values.style
      ? botariStyles.find((opt) => opt.id === values.style)?.label || snapshot.style
      : snapshot.style;
    const nextPrompt = values.prompt || snapshot.prompt;

    const isPromptChanged = Boolean(values.prompt && values.prompt.trim() && values.prompt !== snapshot.prompt);
    const nextVariant: HistoryItem['variant'] = isPromptChanged ? 'edit-prompt' : 'edit';

    const effectiveSrc = (
      overrideImageSrc
      || resolveGeneratedImageUrl(nextCharacter, nextStyle, { sourceSet: selected2dDetailItem?.sourceSet ?? snapshot.sourceSet })
      || snapshot.imageSrc
      || asset('assets/generated/2d-completed.jpg')
    );

    const HISTORY_REVEAL_DELAY_MS = 3000;

    try {
      // eslint-disable-next-line no-console
      console.log('[Timing][Edit] before img load at', (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now());
    } catch {}

    const img = new Image();
    img.onload = () => {
      try {
        // eslint-disable-next-line no-console
        console.log('[Timing][Edit] img.onload at', (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now());
      } catch {}

      const now = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
      const elapsed = now - editStartAt;
      const remain = Math.max(0, MIN_EDIT_LOADING_MS - elapsed);

      editImageTimerRef.current = window.setTimeout(() => {
        setGeneratedImage({
          imageSrc: effectiveSrc,
          prompt: nextPrompt,
          metadataItems: buildMetadataItems({
            character: nextCharacter,
            style: nextStyle,
            prompt: nextPrompt,
            backgroundEnabled: snapshot.backgroundEnabled,
            poseLabel: snapshot.poseLabel,
            sourceSet: selected2dDetailItem?.sourceSet ?? snapshot.sourceSet,
          }),
        });
        setGenerationStatus('generated');
        setIsEditRefining(false);

        editHistoryTimerRef.current = window.setTimeout(() => {
          try {
            // eslint-disable-next-line no-console
            console.log('[Timing][Edit] push history at', (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now());
          } catch {}
          pushGeneratedHistoryItem(
            {
              character: nextCharacter,
              style: nextStyle,
              prompt: nextPrompt,
              backgroundEnabled: snapshot.backgroundEnabled,
              poseLabel: snapshot.poseLabel,
              sourceSet: selected2dDetailItem?.sourceSet ?? snapshot.sourceSet,
            },
            nextVariant,
            effectiveSrc,
          );
          setNotice('2차 편집이 적용되었습니다.');
        }, HISTORY_REVEAL_DELAY_MS);
      }, remain);
    };

    img.onerror = () => {
      try {
        // eslint-disable-next-line no-console
        console.log('[Timing][Edit] img.onerror at', (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now());
      } catch {}

      const now = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
      const elapsed = now - editStartAt;
      const remain = Math.max(0, MIN_EDIT_LOADING_MS - elapsed);

      editImageTimerRef.current = window.setTimeout(() => {
        setGenerationStatus('generated');
        setIsEditRefining(false);
        editHistoryTimerRef.current = window.setTimeout(() => {
          try {
            // eslint-disable-next-line no-console
            console.log('[Timing][Edit] push history (error path) at', (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now());
          } catch {}
          pushGeneratedHistoryItem(
            {
              character: nextCharacter,
              style: nextStyle,
              prompt: nextPrompt,
              backgroundEnabled: snapshot.backgroundEnabled,
              poseLabel: snapshot.poseLabel,
              sourceSet: selected2dDetailItem?.sourceSet ?? snapshot.sourceSet,
            },
            nextVariant,
            snapshot.imageSrc || effectiveSrc,
          );
          setNotice('이미지 로드에 실패하여 이전 이미지를 유지했습니다.');
        }, HISTORY_REVEAL_DELAY_MS);
      }, remain);
    };

    img.src = effectiveSrc || '';
  };

  useEffect(() => {
    return () => {
      if (generationTimerRef.current) {
        window.clearTimeout(generationTimerRef.current);
      }
      if (assetGenerationTimerRef.current) {
        window.clearTimeout(assetGenerationTimerRef.current);
      }
      if (editImageTimerRef.current) {
        window.clearTimeout(editImageTimerRef.current);
      }
      if (editHistoryTimerRef.current) {
        window.clearTimeout(editHistoryTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        {/* ImageEditBar removed; using Sidebar edit mode */}
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
            if (!isSidebarEditMode) {
              if (value && value !== 'traditional') return;
              setSelectedStyle(value);
            } else {
              // edit mode: allow all except traditional
              if (value === 'traditional') return;
              setSelectedStyle(value);
            }
          }}
          onGenerate={handleGenerate}
          canGenerate={Boolean(selectedCharacter && selectedStyle)}
          isStyleLocked={!isSidebarEditMode}
          mode={isSidebarEditMode ? 'edit' : 'generate'}
          editActiveTab={editActiveTab}
          onChangeEditTab={setEditActiveTab}
          onExitEdit={() => setIsSidebarEditMode(false)}
          onEditSubmit={({ tab, styleId, backgroundEnabled, userPrompt, characterType, pose }) => {
            const chosenStyleId = styleId || selectedStyle;
            const stylePrompt = botariStyles.find((s) => s.id === chosenStyleId)?.promptTemplate || '';
            const prefix = [selectedCharacterPromptTemplate, stylePrompt].filter(Boolean).join('\n');
            const fullPrompt = [userPrompt.trim(), prefix.trim()].filter(Boolean).join('\n');

            let overrideImageSrc: string | undefined;
            if ((selectedCharacterLabel === '해태') && tab === 'keep') {
              const currentSrc = selected2dDetailItem?.imageSrc || displayedGeneratedImage?.imageSrc || '';
              const set: 'haetae_01' | 'haetae_02' = currentSrc.includes('/haetae_02/') ? 'haetae_02' : 'haetae_01';
              const styleIdLocal = chosenStyleId || selectedStyle;
              const styleSuffix = (styleIdLocal && (styleIdToFolderSuffix as any)[styleIdLocal]) || 'basic';
              const setNum = set === 'haetae_01' ? '01' : '02';
              if (styleSuffix === 'basic') {
                overrideImageSrc = asset(`assets/generated/haetae/${set}/haetae_basic/haetae_basic_${setNum}-1.png`);
              } else if (styleSuffix === 'clay') {
                overrideImageSrc = asset(`assets/generated/haetae/${set}/haetae_clay/haetae_clay_${setNum}.png`);
              } else {
                overrideImageSrc = currentSrc || overrideImageSrc;
              }
            }

            if ((selectedCharacterLabel === '해태') && tab === 'character') {
              const currentSrc = selected2dDetailItem?.imageSrc || displayedGeneratedImage?.imageSrc || '';
              const set: 'haetae_01' | 'haetae_02' = currentSrc.includes('/haetae_02/') ? 'haetae_02' : 'haetae_01';
              const setNum = set === 'haetae_01' ? '01' : '02';
              const base = `assets/generated/haetae/${set}/haetae_character`;
              const t = characterType || '4';
              const p = pose || 'default';
              if (t === '4') {
                overrideImageSrc = asset(`${base}/4foot/haetae_character_4foot_${setNum}.png`);
              } else if (t === '2-short') {
                if (p === 't') {
                  overrideImageSrc = set === 'haetae_01'
                    ? asset(`${base}/2foot/short/tpose/haetae_character_2foot_short_t_${setNum}.png`)
                    : asset(`${base}/2foot/short/haetae_character_2foot_short_t_${setNum}.png`);
                } else {
                  overrideImageSrc = asset(`${base}/2foot/short/haetae_character_2foot_short_${setNum}.png`);
                }
              } else if (t === '2-tall') {
                if (p === 't') {
                  overrideImageSrc = set === 'haetae_01'
                    ? asset(`${base}/2foot/tall/tpose/haetae_character_2foot_tall_t_${setNum}.png`)
                    : asset(`${base}/2foot/tall/haetae_character_2foot_tall_t_${setNum}.png`);
                } else {
                  overrideImageSrc = asset(`${base}/2foot/tall/haetae_character_2foot_tall_${setNum}.png`);
                }
              } else {
                overrideImageSrc = asset(`${base}/4foot/haetae_character_4foot_${setNum}.png`);
              }
            }

            handleApplyEdit(
              { character: selectedCharacter, style: chosenStyleId, prompt: fullPrompt },
              {
                character: selectedCharacterLabel || '-',
                style: botariStyles.find((opt) => opt.id === selectedStyle)?.label || '-',
                prompt: displayedGeneratedImage?.prompt || '',
                backgroundEnabled: backgroundEnabled,
                poseLabel: '기본',
                imageSrc: displayedGeneratedImage?.imageSrc,
              },
              overrideImageSrc,
            );
          }}
        />
        <section className="workspace" aria-label="이미지 생성 결과 영역">
          {isHistoryGalleryOpen ? (
            <HistoryGalleryPanel
              items={historyItems}
              selectedHistoryId={selectedHistoryId}
              onClose={handleToggleHistoryGallery}
              onSelectItem={handleSelectHistoryItem}
              isOpen={isHistoryGalleryOpen}
              modelUrl={computedModelGlbUrl}
            />
          ) : (
            <>
              <div
                className={`workspace-grid${
                  !(
                    generationStatus === 'loading' || assetGenerationStatus === 'loading'
                  ) && (displayedGeneratedImage || isSelectedThreeDAsset)
                    ? ' is-generated'
                    : ''
                }`}
              >
                {generationStatus === 'loading' ? (
                  <GeneratedImageLoadingPanel title="2D 이미지" />
                ) : displayedGeneratedImage ? (
                  <GeneratedImagePanel
                    title={selected2dDetailItem?.kind ?? '2D 이미지'}
                    imageSrc={displayedGeneratedImage.imageSrc}
                    fallbackImageSrc={selected2dHistoryItem?.imageSrc ?? latest2dHistoryItem?.imageSrc ?? undefined}
                    prompt={displayedGeneratedImage.prompt}
                    metadataItems={displayedGeneratedImage.metadataItems}
                    onAction={(action) => {
                      setNotice(`임시 ${action} 이벤트가 실행되었습니다.`);
                    }}
                    onApplyEdit={handleApplyEdit}
                    onGeneratePose={handleGeneratePose}
                    onToggleBackgroundElements={handleBackgroundElementsToggle}
                    onToggleEditBar={() => {
                      setIsSidebarEditMode(true);
                      setEditActiveTab('keep');
                    }}
                    allowSecondaryEdit={Boolean(selected2dDetailItem)}
                    isPoseApplied={selected2dDetailItem?.variant === 'pose'}
                    initialBackgroundElementsEnabled={selected2dDetailItem?.variant !== 'background-off'}
                    onRefineStatusChange={setIsEditRefining}
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
                    modelUrl={computedModelGlbUrl}
                    referenceImageSrc={conversionPreviewImage?.imageSrc ?? asset('assets/icons/result-empty.svg')}
                    onAction={async (action) => {
                      if (action === 'download') {
                        setNotice('3D 에셋(.glb) 다운로드를 시작합니다.');
                        await downloadFile(computedModelGlbUrl, 'botari-3d-asset.glb');
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
                        <img
                          src={item.thumbnail}
                          alt=""
                          aria-hidden="true"
                          className={`history-thumb history-thumb--${item.variant}`}
                          style={isEditRefining && item.variant === 'base' ? { visibility: 'hidden' } : undefined}
                        />
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
