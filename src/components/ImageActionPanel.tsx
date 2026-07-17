import { useMemo, useState } from 'react';

type ImageActionPanelProps = {
  imageSrc: string;
  onAction: (action: 'size' | 'format' | 'download') => void;
};

const sizeOptions = [1, 2, 3, 4];
const formatOptions = ['JPEG', 'PNG', 'SVG'] as const;

export function ImageActionPanel({ imageSrc, onAction }: ImageActionPanelProps) {
  const [selectedSize, setSelectedSize] = useState(1);
  const [selectedFormat, setSelectedFormat] = useState<(typeof formatOptions)[number]>('JPEG');
  const [openMenu, setOpenMenu] = useState<'size' | 'format' | null>(null);

  const computedSize = useMemo(() => 1024 * selectedSize, [selectedSize]);

  const closeMenu = () => setOpenMenu(null);

  const downloadGeneratedImage = async () => {
    const fileNameBase = `botari-2d-${computedSize}x${computedSize}`;

    const imageResponse = await fetch(imageSrc);
    const imageBlob = await imageResponse.blob();

    if (selectedFormat === 'SVG') {
      const reader = new FileReader();
      const svgDataUrl = await new Promise<string>((resolve, reject) => {
        reader.onload = () => resolve(String(reader.result));
        reader.onerror = () => reject(new Error('이미지 변환에 실패했습니다.'));
        reader.readAsDataURL(imageBlob);
      });

      const svgText = `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="${computedSize}" height="${computedSize}" viewBox="0 0 ${computedSize} ${computedSize}"><image href="${svgDataUrl}" width="${computedSize}" height="${computedSize}" preserveAspectRatio="none" /></svg>`;
      const svgBlob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' });
      const svgUrl = URL.createObjectURL(svgBlob);
      const anchor = document.createElement('a');
      anchor.href = svgUrl;
      anchor.download = `${fileNameBase}.svg`;
      anchor.click();
      URL.revokeObjectURL(svgUrl);
      onAction('download');
      return;
    }

    const objectUrl = URL.createObjectURL(imageBlob);
    const image = await new Promise<HTMLImageElement>((resolve, reject) => {
      const nextImage = new Image();
      nextImage.onload = () => resolve(nextImage);
      nextImage.onerror = () => reject(new Error('이미지 다운로드에 실패했습니다.'));
      nextImage.src = objectUrl;
    });

    const canvas = document.createElement('canvas');
    canvas.width = computedSize;
    canvas.height = computedSize;
    const context = canvas.getContext('2d');

    if (!context) {
      throw new Error('캔버스 컨텍스트를 가져오지 못했습니다.');
    }

    context.drawImage(image, 0, 0, computedSize, computedSize);

    const mimeType = selectedFormat === 'PNG' ? 'image/png' : 'image/jpeg';
    const exportedBlob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob((nextBlob) => {
        if (!nextBlob) {
          reject(new Error('파일 변환에 실패했습니다.'));
          return;
        }

        resolve(nextBlob);
      }, mimeType, 0.92);
    });

    const exportedUrl = URL.createObjectURL(exportedBlob);
    const anchor = document.createElement('a');
    anchor.href = exportedUrl;
    anchor.download = `${fileNameBase}.${selectedFormat.toLowerCase() === 'jpeg' ? 'jpg' : selectedFormat.toLowerCase()}`;
    anchor.click();
    URL.revokeObjectURL(exportedUrl);
    URL.revokeObjectURL(objectUrl);
    onAction('download');
  };

  const selectSize = (size: number) => {
    setSelectedSize(size);
    closeMenu();
    onAction('size');
  };

  const selectFormat = (format: (typeof formatOptions)[number]) => {
    setSelectedFormat(format);
    closeMenu();
    onAction('format');
  };

  return (
    <div className="generated-image-actions" aria-label="2D 이미지 추출">
      <p className="generated-image-actions-title">2D 이미지 추출</p>
      <div className="generated-image-actions-controls">
        <div className="generated-image-control-group">
          <button type="button" className={`generated-image-control${openMenu === 'size' ? ' is-open' : ''}`} onClick={() => setOpenMenu((current) => (current === 'size' ? null : 'size'))}>
            <span>{selectedSize}x</span>
            <span className="generated-image-control-chevron" aria-hidden="true">▾</span>
          </button>
          {openMenu === 'size' ? (
            <div className="generated-image-control-menu" role="menu" aria-label="사이즈 선택">
              {sizeOptions.map((size) => (
                <button key={size} type="button" className={`generated-image-control-menu-item${selectedSize === size ? ' is-selected' : ''}`} onClick={() => selectSize(size)}>
                  {size}x
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <div className="generated-image-control-group">
          <button type="button" className={`generated-image-control${openMenu === 'format' ? ' is-open' : ''}`} onClick={() => setOpenMenu((current) => (current === 'format' ? null : 'format'))}>
            <span>{selectedFormat}</span>
            <span className="generated-image-control-chevron" aria-hidden="true">▾</span>
          </button>
          {openMenu === 'format' ? (
            <div className="generated-image-control-menu" role="menu" aria-label="포맷 선택">
              {formatOptions.map((format) => (
                <button key={format} type="button" className={`generated-image-control-menu-item${selectedFormat === format ? ' is-selected' : ''}`} onClick={() => selectFormat(format)}>
                  {format}
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <button type="button" className="generated-image-download" onClick={downloadGeneratedImage} aria-label="이미지 다운로드">
          <img src="/assets/icons/download.svg" alt="" aria-hidden="true" />
        </button>
      </div>
      <p className="generated-image-actions-hint">사이즈: 1024 x 1024</p>
    </div>
  );
}
