import { IconButton } from './IconButton';

type GeneratedImageLoadingPanelProps = {
  title: string;
};

export function GeneratedImageLoadingPanel({ title }: GeneratedImageLoadingPanelProps) {
  return (
    <section className="result-panel">
      <header className="result-panel-header">
        <h2 className="result-panel-title">{title}</h2>
        <div className="result-panel-actions">
          <IconButton ariaLabel={`${title} 크게 보기`} icon="expand" imageClassName="icon-button__image--panel" />
        </div>
      </header>
      <div className="result-panel-body result-panel-body--loading">
        <div className="generated-loading-stage" aria-label="이미지 생성 중">
          <div className="generated-loading-halo" aria-hidden="true" />
          <div className="generated-loading-symbol-frame" aria-hidden="true">
            <img className="generated-loading-symbol" src="/assets/logo/symbol.svg" alt="" />
          </div>
          <p className="generated-loading-title">···한국의 미를 그려내는 중입니다···</p>
        </div>
      </div>
    </section>
  );
}
