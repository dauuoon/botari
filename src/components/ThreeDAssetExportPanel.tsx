import { asset } from '../lib/asset';
import { useState } from 'react';

type ThreeDAssetExportPanelProps = {
  onAction: (action: 'format' | 'download') => void;
};

const exportOptions = ['GLB'] as const;

export function ThreeDAssetExportPanel({ onAction }: ThreeDAssetExportPanelProps) {
  const [selectedFormat, setSelectedFormat] = useState<(typeof exportOptions)[number]>('GLB');
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => setOpenMenu(false);

  const selectFormat = (format: (typeof exportOptions)[number]) => {
    setSelectedFormat(format);
    closeMenu();
    onAction('format');
  };

  const handleDownload = () => {
    closeMenu();
    onAction('download');
  };

  return (
    <div className="generated-image-actions three-d-asset-export" aria-label="3D 에셋 추출">
      <p className="generated-image-actions-title">3D 에셋 추출</p>
      <div className="generated-image-actions-controls">
        <div className="generated-image-control-group">
          <button type="button" className={`generated-image-control${openMenu ? ' is-open' : ''}`} onClick={() => setOpenMenu((current) => !current)}>
            <span>{selectedFormat}</span>
            <span className="generated-image-control-chevron" aria-hidden="true">
              ▾
            </span>
          </button>
          {openMenu ? (
            <div className="generated-image-control-menu" role="menu" aria-label="3D 포맷 선택">
              {exportOptions.map((format) => (
                <button key={format} type="button" className={`generated-image-control-menu-item${selectedFormat === format ? ' is-selected' : ''}`} onClick={() => selectFormat(format)}>
                  {format}
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <button type="button" className="generated-image-download" onClick={handleDownload} aria-label="3D 에셋 다운로드">
          <img src={asset('assets/icons/download.svg')} alt="" aria-hidden="true" />
        </button>
      </div>
      <p className="generated-image-actions-hint">SIZE: 18.2MB</p>
    </div>
  );
}