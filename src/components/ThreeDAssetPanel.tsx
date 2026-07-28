import { asset } from '../lib/asset';
import { ThreeDAssetViewer, ThreeDAssetViewerHandle } from './ThreeDAssetViewer';
import { ThreeDAssetInfo } from './ThreeDAssetInfo';
import { ThreeDAssetExportPanel } from './ThreeDAssetExportPanel';
import { IconButton } from './IconButton';
import { useState } from 'react';

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
  viewerRef?: React.Ref<ThreeDAssetViewerHandle>;
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
  viewerRef,
}: ThreeDAssetPanelProps) {
  const actionLabel = '+ 변환하기';
  const hasPreviewThumbnail = referenceImageSrc !== asset('assets/icons/result-empty.svg');
  const [polygonCount, setPolygonCount] = useState<number | null>(null);
  const [isAutoRigging, setIsAutoRigging] = useState(false);
  const isRiggingDisabled = isAutoRigging || skeleton || !skeletonAvailable;

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
            <ThreeDAssetViewer
              ref={viewerRef}
              wireframe={wireframe}
              skeleton={skeleton}
              onSkeletonSupportChange={onSkeletonSupportChange}
              modelUrl={modelUrl}
              onMeshStats={({ polygonCount }) => setPolygonCount(polygonCount)}
            />
            {isAutoRigging ? (
              <div className="three-d-asset-stage__loading" role="status" aria-live="polite">
                <div className="three-d-asset-stage__loading-inner">
                  <div className="three-d-asset-stage__loading-text">···자동 리깅 중···</div>
                  <div className="three-d-asset-stage__loading-bar" aria-hidden="true">
                    <span className="three-d-asset-stage__loading-bar-fill" />
                  </div>
                </div>
              </div>
            ) : null}
            <div className="three-d-asset-stage__wireframe three-d-asset-stage__wireframe--secondary">
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
            {/* 중앙 CTA: 자동 리깅 */}
            {!skeleton ? (
              <div className="three-d-asset-stage__rigging-cta">
                <button
                  type="button"
                  className={`auto-rigging-button auto-rigging-button--large${isRiggingDisabled ? ' is-disabled' : ''}`}
                  aria-label={isRiggingDisabled ? '자동 리깅 (비활성화)' : '자동 리깅 수행'}
                  aria-disabled={isRiggingDisabled}
                  title={!skeletonAvailable ? '스켈레톤 미지원 모델입니다' : undefined}
                  onClick={() => {
                    if (isRiggingDisabled) return;
                    setIsAutoRigging(true);
                    window.setTimeout(() => {
                      setIsAutoRigging(false);
                      onSkeletonChange(true);
                    }, 20000);
                  }}
                >
                  <span className="material-symbols-outlined auto-rigging-icon" aria-hidden="true">polyline</span>
                  <span className="auto-rigging-label">자동 리깅</span>
                </button>
              </div>
            ) : null}
          </div>

          <div className="three-d-asset-footer">
            <ThreeDAssetInfo referenceImageSrc={referenceImageSrc} polygonCount={polygonCount ?? undefined} />
            <ThreeDAssetExportPanel onAction={onAction} modelUrl={modelUrl} />
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