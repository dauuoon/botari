type ThreeDAssetInfoProps = {
  referenceImageSrc: string;
};

export function ThreeDAssetInfo({ referenceImageSrc }: ThreeDAssetInfoProps) {
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
          <dd>285,073</dd>
        </div>
        <div className="three-d-asset-info__row">
          <dt>텍스처(PBR)</dt>
          <dd>지원</dd>
        </div>
      </dl>
    </div>
  );
}