import { useEffect, useRef, useState } from 'react';
import { IconButton } from './IconButton';
import { GeneratedImageMetadata } from './GeneratedImageMetadata';
import { GeneratedImageEditModal, type EditMode, type EditValues } from './GeneratedImageEditModal';
import { GeneratedImageHoverOverlay } from './GeneratedImageHoverOverlay';
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
  prompt: string;
  metadataItems: Array<{ label: string; value: string }>;
  onAction: (action: 'size' | 'format' | 'download') => void;
  onApplyEdit: (values: EditValues, snapshot: ImageSnapshot) => void;
  onGeneratePose: (snapshot: ImageSnapshot) => void;
  onToggleBackgroundElements: (nextEnabled: boolean, snapshot: ImageSnapshot) => void;
  allowSecondaryEdit?: boolean;
  isPoseApplied?: boolean;
  initialBackgroundElementsEnabled?: boolean;
};

const REFINE_DELAY_MS = 2600;

const getMetadataValue = (items: Array<{ label: string; value: string }>, label: string) => items.find((item) => item.label === label)?.value ?? '';

export function GeneratedImagePanel({
  title,
  imageSrc,
  prompt,
  metadataItems,
  onAction,
  onApplyEdit,
  onGeneratePose,
  onToggleBackgroundElements,
  allowSecondaryEdit = true,
  isPoseApplied = false,
  initialBackgroundElementsEnabled = true,
}: GeneratedImagePanelProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isRefining, setIsRefining] = useState(false);
  const [isBackgroundElementsEnabled, setIsBackgroundElementsEnabled] = useState(initialBackgroundElementsEnabled);
  const [poseLabel, setPoseLabel] = useState('기본');
  const [activeEditMode, setActiveEditMode] = useState<EditMode | null>(null);
  const refinementTimerRef = useRef<number | null>(null);

  const currentCharacter = getMetadataValue(metadataItems, '캐릭터');
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

  const beginRefinement = (onComplete: () => void) => {
    if (refinementTimerRef.current) {
      window.clearTimeout(refinementTimerRef.current);
    }

    setIsRefining(true);

    refinementTimerRef.current = window.setTimeout(() => {
      setIsRefining(false);
      onComplete();
    }, REFINE_DELAY_MS);
  };

  const handleOpenEditMode = (mode: EditMode) => {
    setActiveEditMode(mode);
  };

  const handleApplyEdit = (values: EditValues) => {
    const snapshot = buildSnapshot();
    setActiveEditMode(null);
    beginRefinement(() => onApplyEdit(values, snapshot));
  };

  const toggleBackgroundElements = () => {
    const nextEnabled = !isBackgroundElementsEnabled;
    const snapshot = buildSnapshot(nextEnabled);

    setIsBackgroundElementsEnabled(nextEnabled);
    setActiveEditMode(null);
    beginRefinement(() => onToggleBackgroundElements(nextEnabled, snapshot));
  };

  const handleGeneratePose = () => {
    const snapshot = buildSnapshot();

    setActiveEditMode(null);
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
            <img key={imageSrc} src={imageSrc} alt="생성된 2D 이미지" className="generated-image generated-image--reveal" />
            {allowSecondaryEdit && (isHovered || isRefining) ? (
              <GeneratedImageHoverOverlay
                isBackgroundElementsEnabled={isBackgroundElementsEnabled}
                isRefining={isRefining}
                isPoseApplied={isPoseApplied}
                onOpenEditMode={handleOpenEditMode}
                onGeneratePose={handleGeneratePose}
                onToggleBackgroundElements={toggleBackgroundElements}
              />
            ) : null}
            {allowSecondaryEdit && activeEditMode ? (
              <GeneratedImageEditModal
                isOpen
                initialMode={activeEditMode}
                currentValues={{
                  character: currentCharacter,
                  style: currentStyle,
                  prompt: currentPrompt,
                }}
                onClose={() => setActiveEditMode(null)}
                onSubmit={handleApplyEdit}
              />
            ) : null}
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
