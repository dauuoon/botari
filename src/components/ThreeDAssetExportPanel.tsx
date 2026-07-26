import { asset } from '../lib/asset';
import { useEffect, useState } from 'react';

type ThreeDAssetExportPanelProps = {
  onAction: (action: 'format' | 'download') => void;
  modelUrl?: string;
};

const exportOptions = ['GLB'] as const;

export function ThreeDAssetExportPanel({ onAction, modelUrl }: ThreeDAssetExportPanelProps) {
  const [selectedFormat, setSelectedFormat] = useState<(typeof exportOptions)[number]>('GLB');
  const [openMenu, setOpenMenu] = useState(false);
  const [sizeLabel, setSizeLabel] = useState<string>('—');

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

  useEffect(() => {
    let aborted = false;
    const formatBytes = (bytes: number) => {
      if (!Number.isFinite(bytes) || bytes < 0) return '—';
      const units = ['B', 'KB', 'MB', 'GB'];
      let i = 0;
      let n = bytes;
      while (n >= 1024 && i < units.length - 1) {
        n /= 1024;
        i++;
      }
      const fixed = i === 0 ? n.toFixed(0) : n.toFixed(1);
      return `${fixed}${units[i]}`;
    };

    const loadSize = async () => {
      if (!modelUrl) {
        setSizeLabel('—');
        return;
      }
      try {
        // Try HEAD first to read Content-Length
        const head = await fetch(modelUrl, { method: 'HEAD' });
        const len = head.headers.get('content-length');
        if (!aborted && len) {
          setSizeLabel(formatBytes(parseInt(len, 10)));
          return;
        }
      } catch {
        // ignore and fallback to GET
      }

      try {
        const res = await fetch(modelUrl, { cache: 'no-store' });
        const blob = await res.blob();
        if (!aborted) setSizeLabel(formatBytes(blob.size));
      } catch {
        if (!aborted) setSizeLabel('—');
      }
    };

    loadSize();
    return () => {
      aborted = true;
    };
  }, [modelUrl]);

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
      <p className="generated-image-actions-hint">SIZE: {sizeLabel}</p>
    </div>
  );
}