import { asset } from '../lib/asset';
import { ThreeDAssetViewer } from './ThreeDAssetViewer';
import { ThreeDAssetInfo } from './ThreeDAssetInfo';
import { ThreeDAssetExportPanel } from './ThreeDAssetExportPanel';
import { IconButton } from './IconButton';

type MetadataItem = {
  label: string;
  value: string;
};

type ThreeDAssetPanelProps = {
  title: string;
  emptyLabel: string;
  onGenerateClick?: () => void;
  isGenerateDisabled?: boolean;
  hasAsset: boolean;
  wireframe: boolean;
  onWireframeChange: (nextEnabled: boolean) => void;
  skeleton: boolean;
  onSkeletonChange: (nextEnabled: boolean) => void;
  skeletonAvailable?: boolean;
  onSkeletonSupportChange?: (available: boolean) => void;
  modelUrl?: string;
  referenceImageSrc: string;
  onAction: (action: 'format' | 'download') => void;
};

export function ThreeDAssetPanel({
  title,
  emptyLabel,
  onGenerateClick,
  isGenerateDisabled = false,
  hasAsset,
  wireframe,
  onWireframeChange,
  skeleton,
  onSkeletonChange,
  referenceImageSrc,
  onAction,
  skeletonAvailable = true,
  onSkeletonSupportChange,
  modelUrl,
}: ThreeDAssetPanelProps) {
  const actionLabel = '+ 변환하기';
  const hasPreviewThumbnail = referenceImageSrc !== asset('assets/icons/result-empty.svg');

  return (
    <section className="result-panel result-panel--three-d">
      <header className="result-panel-header">
        <h2 className="result-panel-title">{title}</h2>
        <div className="result-panel-actions">
          <IconButton ariaLabel={`${title} 크게 보기`} icon="expand" imageClassName="icon-button__image--panel" />
        </div>
      </header>

      {hasAsset ? (
        <div className="result-panel-body result-panel-body--three-d">
          <div className="three-d-asset-stage">
            <ThreeDAssetViewer wireframe={wireframe} skeleton={skeleton} onSkeletonSupportChange={onSkeletonSupportChange} modelUrl={modelUrl} />
            <div className="three-d-asset-stage__wireframe">
              <span className="three-d-asset-stage__wireframe-label">Wireframe</span>
              <button
                type="button"
                className={`three-d-asset-stage__wireframe-switch${wireframe ? ' is-on' : ''}`}
                aria-label="와이어프레임 전환"
                aria-pressed={wireframe}
                onClick={() => onWireframeChange(!wireframe)}
              >
                <span className="three-d-asset-stage__wireframe-thumb" aria-hidden="true" />
              </button>
            </div>
            <div className="three-d-asset-stage__wireframe three-d-asset-stage__wireframe--secondary">
              <span className="three-d-asset-stage__wireframe-label">Skeleton</span>
              <button
                type="button"
                className={`three-d-asset-stage__wireframe-switch${skeleton ? ' is-on' : ''}${!skeletonAvailable ? ' is-disabled' : ''}`}
                aria-label="스켈레톤 전환"
                aria-pressed={skeleton}
                onClick={() => skeletonAvailable && onSkeletonChange(!skeleton)}
                disabled={!skeletonAvailable}
                title={skeletonAvailable ? undefined : '이 모델에는 스켈레톤이 없습니다'}
              >
                <span className="three-d-asset-stage__wireframe-thumb" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="three-d-asset-footer">
            <ThreeDAssetInfo referenceImageSrc={referenceImageSrc} />
            <ThreeDAssetExportPanel onAction={onAction} />
          </div>
        </div>
      ) : (
        <div className="result-panel-body">
          <div className="empty-state">
            <img
              src={referenceImageSrc}
              alt=""
              aria-hidden="true"
              className={hasPreviewThumbnail ? 'empty-visual empty-visual--three-d' : 'empty-mark empty-mark--three-d'}
            />
            <p className="empty-copy">{emptyLabel}</p>
            <button type="button" className="empty-generate" aria-label={`${title} 생성하기`} onClick={onGenerateClick} disabled={isGenerateDisabled || !onGenerateClick}>
              {actionLabel}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}