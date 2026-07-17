import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { AutoScrollImageSlider } from '../components';

export default function HomePage() {
  const [slideCount, setSlideCount] = useState<number | null>(null);

  useEffect(() => {
    let alive = true;
    fetch('/assets/slide/manifest.json')
      .then((r) => r.json())
      .then((list: string[]) => {
        if (alive) setSlideCount(list.length);
      })
      .catch(() => {
        if (alive) setSlideCount(null);
      });
    return () => {
      alive = false;
    };
  }, []);
  return (
    <div className="app-shell">
      <Header />
      <main className="landing-main">
        <section className="landing-hero" aria-label="보따리 소개">
          <div className="landing-headline" aria-label="타이틀">
            <div className="landing-symbol" aria-hidden="true" />
            <h1 className="landing-title">
              <span className="landing-title-line landing-title-strong">
                {slideCount ? (
                  <>
                    <span className="landing-title-count">총 {slideCount}장</span> 한국의 아름다움을 그려내다
                  </>
                ) : (
                  '한국의 아름다움을 그려내다'
                )}
              </span>
              <span className="landing-title-line landing-title-light">한국 전통민화 이미지 생성 AI</span>
            </h1>
          </div>
          <div className="landing-slider">
            <AutoScrollImageSlider />
          </div>
          <div className="landing-subtitle" aria-label="라이브 안내">
            <span className="live-indicator" aria-hidden="true">
              <span className="live-dot" />
            </span>
            <span className="live-text">실시간으로 생성되고 있는 이미지입니다.</span>
          </div>
        </section>
      </main>
    </div>
  );
}
