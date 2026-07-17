import { useEffect, useMemo, useState } from 'react';
import { asset } from '../lib/asset';

export function AutoScrollImageSlider() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    let isMounted = true;
    fetch(`${import.meta.env.BASE_URL}assets/slide/manifest.json`)
      .then((res) => res.json())
      .then((list: string[]) => {
        if (isMounted) {
          // 절대 경로로 변환
          setImages(list.map((name) => asset(`assets/slide/${name}`)));
        }
      })
      .catch(() => {
        // 실패 시 아무것도 렌더링하지 않음
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const loopList = useMemo(() => images.concat(images), [images]);

  if (!images.length) return null;

  return (
    <div className="slider-shell" aria-label="작품 미리보기 슬라이드">
      <div className="slider-track">
        {loopList.map((src, idx) => (
          <div className="slider-item" key={`${src}-${idx}`}>
            <img className="slider-image" src={src} alt="" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}
