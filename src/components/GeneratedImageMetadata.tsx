type MetadataItem = {
  label: string;
  value: string;
};

type GeneratedImageMetadataProps = {
  items: MetadataItem[];
  title?: string;
};

export function GeneratedImageMetadata({ items, title = '2D 이미지 정보' }: GeneratedImageMetadataProps) {
  return (
    <div className="generated-image-metadata" aria-label={title}>
      <p className="generated-image-metadata-title">{title}</p>
      <dl className="generated-image-metadata-list">
        {items.map((item) => (
          <div key={item.label} className="generated-image-metadata-row">
            <dt>{item.label}</dt>
            {item.label === '프롬프트' ? (
              <dd className="generated-image-metadata-value">
                <span className="prompt-tooltip-shell">
                  <button type="button" className="prompt-tooltip-trigger" aria-label="프롬프트 전문 보기">
                    <span className="prompt-tooltip-trigger-mark" aria-hidden="true">i</span>
                  </button>
                  <div className="prompt-tooltip" role="tooltip" aria-label="사용한 프롬프트 전문">
                    <p className="prompt-tooltip-title">사용한 프롬프트</p>
                    <pre className="prompt-tooltip-body">{item.value}</pre>
                  </div>
                </span>
              </dd>
            ) : (
              <dd>{item.value}</dd>
            )}
          </div>
        ))}
      </dl>
    </div>
  );
}
