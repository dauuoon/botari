import { useEffect, useState } from 'react';
import { asset } from '../lib/asset';
import { Header } from '../components/Header';
import { AutoScrollImageSlider } from '../components';

export default function HomePage() {
  return (
    <div className="app-shell">
      <Header />
      <main className="landing-main">
        <section
          className="landing-hero"
          aria-label="보따리 소개"
          style={{
            ['--landing-bg-url' as any]: `url(${asset('assets/logo/back.png')})`,
            ['--landing-symbol-url' as any]: `url(${asset('assets/logo/symbol.svg')})`,
          }}
        >
          <div className="landing-headline" aria-label="타이틀">
            <div className="landing-symbol" aria-hidden="true" />
            <h1 className="landing-title">
              <span className="landing-title-line landing-title-strong">한국의 아름다움을 그려내다</span>
              <span className="landing-title-line landing-title-light">한국 전통민화 이미지 생성 AI</span>
            </h1>
            <div className="landing-cta-wrap" aria-label="생성 바로가기">
              <a
                href={import.meta.env.BASE_URL || '/'}
                className="landing-cta-button"
                aria-label="이미지 생성 메인으로 이동"
              >
                생성하러가기
              </a>
            </div>
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
