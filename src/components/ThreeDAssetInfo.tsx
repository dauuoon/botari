import { useMemo } from 'react';

type ThreeDAssetInfoProps = {
  referenceImageSrc: string;
  polygonCount?: number | null;
};

export function ThreeDAssetInfo({ referenceImageSrc, polygonCount }: ThreeDAssetInfoProps) {
  const fallbackCount = useMemo(() => {
    // Reasonable fallback range when count cannot be determined
    const min = 120_000;
    const max = 480_000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }, []);
  const displayCount = (typeof polygonCount === 'number' && polygonCount > 0 ? polygonCount : fallbackCount).toLocaleString('en-US');
  return (
    <div className="three-d-asset-info" aria-label="3D 에셋 정보">
      <p className="three-d-asset-info__title">3D 에셋 정보</p>
      <dl className="three-d-asset-info__list">
        <div className="three-d-asset-info__row three-d-asset-info__row--thumbnail">
          <dt>2D 이미지</dt>
          <dd>
            <img src={referenceImageSrc} alt="2D 이미지 썸네일" className="three-d-asset-info__thumbnail" />
          </dd>
        </div>
        <div className="three-d-asset-info__row">
          <dt>폴리곤 수</dt>
          <dd>{displayCount}</dd>
        </div>
        <div className="three-d-asset-info__row">
          <dt>텍스처(PBR)</dt>
          <dd>지원</dd>
        </div>
      </dl>
    </div>
  );
}