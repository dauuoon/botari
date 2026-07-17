import { IconButton } from './IconButton';

type ResultPanelProps = {
  title: string;
  emptyLabel: string;
  onGenerateClick?: () => void;
  isGenerateDisabled?: boolean;
  emptyVisualSrc?: string;
  emptyVisualAlt?: string;
};

export function ResultPanel({ title, emptyLabel, onGenerateClick, isGenerateDisabled = false, emptyVisualSrc, emptyVisualAlt = '' }: ResultPanelProps) {
  const actionLabel = title === '3D 에셋' ? '+ 변환하기' : '+ 생성하기';

  return (
    <section className="result-panel">
      <header className="result-panel-header">
        <h2 className="result-panel-title">{title}</h2>
        <div className="result-panel-actions">
          <IconButton ariaLabel={`${title} 크게 보기`} icon="expand" imageClassName="icon-button__image--panel" />
        </div>
      </header>
      <div className="result-panel-body">
        <div className="empty-state">
          {emptyVisualSrc ? (
            <img src={emptyVisualSrc} alt={emptyVisualAlt} aria-hidden="true" className="empty-visual" />
          ) : (
            <img src="/assets/icons/result-empty.svg" alt="" aria-hidden="true" className="empty-mark" />
          )}
          <p className="empty-copy">{emptyLabel}</p>
          <button type="button" className="empty-generate" aria-label={`${title} 생성하기`} onClick={onGenerateClick} disabled={isGenerateDisabled || !onGenerateClick}>
            {actionLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
