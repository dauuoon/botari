import { useEffect, useRef, useState } from 'react';
import { IconButton } from './IconButton';
import { GeneratedImageMetadata } from './GeneratedImageMetadata';
import type { EditValues } from './GeneratedImageEditModal';
import { ImageActionPanel } from './ImageActionPanel';

type ImageSnapshot = {
  imageSrc: string;
  prompt: string;
  metadataItems: Array<{ label: string; value: string }>;
  backgroundEnabled: boolean;
  poseLabel: string;
  character: string;
  style: string;
};

type GeneratedImagePanelProps = {
  title: string;
  imageSrc: string;
  fallbackImageSrc?: string;
  prompt: string;
  metadataItems: Array<{ label: string; value: string }>;
  onAction: (action: 'size' | 'format' | 'download') => void;
  onApplyEdit: (values: EditValues, snapshot: ImageSnapshot) => void;
  onGeneratePose: (snapshot: ImageSnapshot) => void;
  onToggleBackgroundElements: (nextEnabled: boolean, snapshot: ImageSnapshot) => void;
  onToggleEditBar?: () => void;
  allowSecondaryEdit?: boolean;
  isPoseApplied?: boolean;
  initialBackgroundElementsEnabled?: boolean;
};

const REFINE_DELAY_MS = 2600;

const getMetadataValue = (items: Array<{ label: string; value: string }>, label: string) => items.find((item) => item.label === label)?.value ?? '';

export function GeneratedImagePanel({
  title,
  imageSrc,
  fallbackImageSrc,
  prompt,
  metadataItems,
  onAction,
  onApplyEdit,
  onGeneratePose,
  onToggleBackgroundElements,
  onToggleEditBar,
  allowSecondaryEdit = true,
  isPoseApplied = false,
  initialBackgroundElementsEnabled = true,
}: GeneratedImagePanelProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isRefining, setIsRefining] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(imageSrc);
  const [isBackgroundElementsEnabled, setIsBackgroundElementsEnabled] = useState(initialBackgroundElementsEnabled);
  const [poseLabel, setPoseLabel] = useState('기본');
  // Legacy modal edit mode removed; using slide-in edit bar instead
  const refinementTimerRef = useRef<number | null>(null);

  const currentCharacter = getMetadataValue(metadataItems, '생성 개체');
  const currentStyle = getMetadataValue(metadataItems, '스타일');
  const currentPrompt = prompt;

  const buildSnapshot = (backgroundEnabled = isBackgroundElementsEnabled): ImageSnapshot => ({
    imageSrc,
    metadataItems,
    backgroundEnabled,
    poseLabel,
    character: currentCharacter,
    style: currentStyle,
    prompt: currentPrompt,
  });

  const beginRefinement = (onComplete: () => void, delayMs: number = REFINE_DELAY_MS) => {
    if (refinementTimerRef.current) {
      window.clearTimeout(refinementTimerRef.current);
    }

    setIsRefining(true);

    refinementTimerRef.current = window.setTimeout(() => {
      setIsRefining(false);
      onComplete();
    }, delayMs);
  };

  // const handleOpenEditMode = (mode: EditMode) => {};

  const handleApplyEdit = (values: EditValues) => {
    const snapshot = buildSnapshot();
    // 편집(수정하기)일 때 로딩 시간을 5초 추가
    beginRefinement(() => onApplyEdit(values, snapshot), REFINE_DELAY_MS + 5000);
  };

  const toggleBackgroundElements = () => {
    const nextEnabled = !isBackgroundElementsEnabled;
    const snapshot = buildSnapshot(nextEnabled);

    setIsBackgroundElementsEnabled(nextEnabled);
    beginRefinement(() => onToggleBackgroundElements(nextEnabled, snapshot));
  };

  const handleGeneratePose = () => {
    const snapshot = buildSnapshot();
    setPoseLabel('포즈 적용');
    beginRefinement(() => onGeneratePose(snapshot));
  };

  useEffect(() => {
    setIsBackgroundElementsEnabled(initialBackgroundElementsEnabled);
    setPoseLabel(isPoseApplied ? '포즈 적용' : '기본');

    return () => {
      if (refinementTimerRef.current) {
        window.clearTimeout(refinementTimerRef.current);
      }
    };
  }, [imageSrc, initialBackgroundElementsEnabled, isPoseApplied]);

  // Ensure displayed image updates when parent passes a new imageSrc
  useEffect(() => {
    setCurrentSrc(imageSrc);
  }, [imageSrc]);

  return (
    <section className="result-panel">
      <header className="result-panel-header">
        <h2 className="result-panel-title">{title}</h2>
        <div className="result-panel-actions">
          <IconButton ariaLabel={`${title} 크게 보기`} icon="expand" imageClassName="icon-button__image--panel" />
        </div>
      </header>
      <div className="result-panel-body result-panel-body--generated">
        <div className="generated-image-shell">
          <div
            className={`generated-image-preview generated-image-preview--reveal${isHovered ? ' is-hovered' : ''}${isRefining ? ' is-refining' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              key={currentSrc}
              src={currentSrc}
              alt="생성된 2D 이미지"
              className="generated-image generated-image--reveal"
              onError={() => {
                if (fallbackImageSrc && currentSrc !== fallbackImageSrc) {
                  setCurrentSrc(fallbackImageSrc);
                }
              }}
            />
            {/* Floating edit button for 2nd edit */}
            {allowSecondaryEdit ? (
              <button
                type="button"
                className="floating-edit-button"
                aria-label="이미지 편집"
                onClick={() => {
                  if (onToggleEditBar) onToggleEditBar();
                }}
              >
                <span className="material-symbols-outlined floating-edit-icon" aria-hidden="true">draw</span>
                이미지 편집
              </button>
            ) : null}
            {/* Legacy 2nd edit modal removed in favor of slide-in edit bar */}
          </div>
          <div className="generated-image-footer generated-image-footer--reveal">
            <GeneratedImageMetadata items={metadataItems} />
            <ImageActionPanel imageSrc={imageSrc} onAction={onAction} />
          </div>
        </div>
      </div>
    </section>
  );
}
