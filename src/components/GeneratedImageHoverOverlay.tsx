import { asset } from '../lib/asset';
import type { EditMode } from './GeneratedImageEditModal';

type GeneratedImageHoverOverlayProps = {
  isBackgroundElementsEnabled: boolean;
  isRefining: boolean;
  isPoseApplied: boolean;
  onOpenEditMode: (mode: EditMode) => void;
  onGeneratePose: () => void;
  onToggleBackgroundElements: () => void;
};

export function GeneratedImageHoverOverlay({
  isBackgroundElementsEnabled,
  isRefining,
  isPoseApplied,
  onOpenEditMode,
  onGeneratePose,
  onToggleBackgroundElements,
}: GeneratedImageHoverOverlayProps) {
  return (
    <div className={`generated-image-hover-overlay${isRefining ? ' is-refining' : ''}`} aria-hidden={false}>
      <div className="generated-image-hover-overlay__shade" />
      {isRefining ? (
        <div className="generated-image-hover-overlay__loading" aria-label="배경 요소 적용 중">
          <div className="generated-image-hover-overlay__loading-symbol" aria-hidden="true">
            <img src={asset('assets/logo/symbol.svg')} alt="" />
          </div>
        </div>
      ) : null}
      <div className="generated-image-hover-overlay__panel">
        <div className="generated-image-hover-overlay__groups">
          <div className="generated-image-hover-overlay__group generated-image-hover-overlay__group--edit">
            <span className="generated-image-hover-overlay__group-label">편집</span>
            <span className="generated-image-hover-overlay__divider" aria-hidden="true">|</span>
            <button type="button" className="generated-image-hover-overlay__chip" onClick={() => onOpenEditMode('character')}>
              <img src={asset('assets/icons/character-section.svg')} alt="" aria-hidden="true" className="generated-image-hover-overlay__chip-icon" />
              캐릭터
            </button>
            <button type="button" className="generated-image-hover-overlay__chip" onClick={() => onOpenEditMode('style')}>
              <img src={asset('assets/icons/style-section.svg')} alt="" aria-hidden="true" className="generated-image-hover-overlay__chip-icon" />
              스타일
            </button>
            <button type="button" className="generated-image-hover-overlay__chip" onClick={() => onOpenEditMode('prompt')}>
              <img src={asset('assets/icons/prompt-section.svg')} alt="" aria-hidden="true" className="generated-image-hover-overlay__chip-icon" />
              프롬프트
            </button>
          </div>
          <div className="generated-image-hover-overlay__group generated-image-hover-overlay__group--option">
            <span className="generated-image-hover-overlay__group-label">옵션</span>
            <span className="generated-image-hover-overlay__divider" aria-hidden="true">|</span>
            <button
              type="button"
              className={`generated-image-hover-overlay__chip generated-image-hover-overlay__chip--pose${isPoseApplied ? ' is-active' : ''}`}
              disabled={isPoseApplied}
              aria-disabled={isPoseApplied}
              onClick={onGeneratePose}
            >
              <img src={asset('assets/icons/pose.svg')} alt="" aria-hidden="true" className="generated-image-hover-overlay__chip-icon" />
              포즈
            </button>
          </div>
          <div className="generated-image-hover-overlay__group generated-image-hover-overlay__group--toggle">
            <span className="generated-image-hover-overlay__group-label">배경요소</span>
            <span className="generated-image-hover-overlay__divider" aria-hidden="true">|</span>
            <button
              type="button"
              className={`generated-image-hover-overlay__switch${isBackgroundElementsEnabled ? ' is-on' : ''}`}
              aria-label="배경요소 토글"
              onClick={onToggleBackgroundElements}
            >
              <span className="generated-image-hover-overlay__switch-thumb" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}