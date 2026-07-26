import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { botariStyles } from '../data/botariData';
import { StyleSelector } from './StyleSelector';
import { asset } from '../lib/asset';

type ImageEditBarProps = {
  isOpen: boolean;
  onClose: () => void;
  currentCharacterPromptTemplate?: string;
  currentStyleId?: string;
  onSubmit?: (payload: {
    tab: 'keep' | 'character';
    styleId?: string;
    backgroundEnabled: boolean;
    characterType?: '2-short' | '2-tall' | '4';
    pose?: 'none' | 't' | 'a';
    userPrompt: string;
  }) => void;
};

export function ImageEditBar({ isOpen, onClose, currentCharacterPromptTemplate = '', currentStyleId = '', onSubmit }: ImageEditBarProps) {
  const [activeTab, setActiveTab] = useState<'keep' | 'character'>('keep');
  const [selectedStyle, setSelectedStyle] = useState<string>(currentStyleId);
  const [backgroundEnabled, setBackgroundEnabled] = useState<boolean>(true);
  const [characterType, setCharacterType] = useState<'2-short' | '2-tall' | '4' | undefined>(undefined);
  const [pose, setPose] = useState<'none' | 't' | 'a' | undefined>('none');
  const [userPrompt, setUserPrompt] = useState<string>('');

  const allowedStyleIds = useMemo(() => {
    if (activeTab === 'keep') {
      return ['hanji', 'ceramic', 'clay', 'felt', 'plush', 'knit'];
    }
    return ['hanji', 'ceramic', 'clay', 'felt', 'plush', 'knit', 'neon', 'gameart'];
  }, [activeTab]);

  const styleOptions = useMemo(() => botariStyles.filter((s) => allowedStyleIds.includes(s.id)), [allowedStyleIds]);

  // Prompt prefix (auto) = character + selected style prompt templates
  const selectedStylePromptTemplate = useMemo(() => botariStyles.find((s) => s.id === selectedStyle)?.promptTemplate || '', [selectedStyle]);
  const composedPrefix = useMemo(
    () => [currentCharacterPromptTemplate, selectedStylePromptTemplate].filter(Boolean).join('\n'),
    [currentCharacterPromptTemplate, selectedStylePromptTemplate]
  );

  // Tail fit for prefix like Sidebar
  const prefixBoxRef = useRef<HTMLDivElement | null>(null);
  const [prefixTail, setPrefixTail] = useState<string>(composedPrefix);
  useLayoutEffect(() => {
    const el = prefixBoxRef.current;
    if (!el) {
      setPrefixTail(composedPrefix);
      return;
    }
    const compute = () => {
      const width = el.clientWidth;
      if (!width) {
        setPrefixTail(composedPrefix);
        return;
      }
      const style = window.getComputedStyle(el);
      const font = style.font || `${style.fontStyle || 'normal'} ${style.fontVariant || 'normal'} ${style.fontWeight || '400'} ${style.fontSize || '12px'}/${style.lineHeight || 'normal'} ${style.fontFamily || 'sans-serif'}`;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        setPrefixTail(composedPrefix);
        return;
      }
      ctx.font = font;
      const full = composedPrefix.replace(/\s+/g, ' ').trim();
      if (!full) {
        setPrefixTail('');
        return;
      }
      const fits = (text: string) => ctx.measureText(text).width <= width;
      let lo = 1, hi = full.length, best = full;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        const candidate = '…' + full.slice(-mid);
        if (fits(candidate)) {
          best = candidate;
          lo = mid + 1;
        } else {
          hi = mid - 1;
        }
      }
      setPrefixTail(best);
    };
    compute();
    const onResize = () => compute();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [composedPrefix]);

  const [isPromptModalOpen, setPromptModalOpen] = useState(false);

  // 탭 전환 시 기본값 적용: 민화유지=배경 ON, 캐릭터화=배경 OFF + 포즈는 T포즈 기본
  useEffect(() => {
    if (activeTab === 'keep') {
      setBackgroundEnabled(true);
      setPose('none');
    } else {
      setBackgroundEnabled(false);
      setPose('t');
    }
  }, [activeTab]);

  const modeClass = activeTab === 'character' ? ' mode-character' : '';
  return (
    <aside
      className={`image-edit-bar${isOpen ? ' is-open' : ''}${modeClass}`}
      role="dialog"
      aria-label="이미지 편집 바"
      aria-hidden={!isOpen}
    >
      <div className="image-edit-bar__header">
        <h3 className="image-edit-bar__title">이미지 편집</h3>
        <button type="button" className="image-edit-bar__close" aria-label="닫기" onClick={onClose}>
          ✕
        </button>
      </div>
      <div className="image-edit-bar__body">
        <div className="editbar-content">
          {/* Tabs */}
          <div className="editbar-tablist" role="tablist" aria-label="편집 모드">
            <button type="button" role="tab" aria-selected={activeTab === 'keep'} className={`editbar-tab${activeTab === 'keep' ? ' is-active' : ''}`} onClick={() => setActiveTab('keep')}>민화유지</button>
            <button type="button" role="tab" aria-selected={activeTab === 'character'} className={`editbar-tab${activeTab === 'character' ? ' is-active' : ''}`} onClick={() => setActiveTab('character')}>캐릭터화</button>
          </div>

          {/* Style selector */}
          <div className="section-block">
            <div className="section-header">
              <div className="section-title-row">
                <img src={asset('assets/icons/style-section.svg')} alt="" aria-hidden="true" className="section-title-icon" />
                <h3 className="section-title">스타일</h3>
              </div>
            </div>
            <StyleSelector options={styleOptions} selectedValue={selectedStyle} onSelect={setSelectedStyle} locked={false} />
          </div>

          {/* Background toggle */}
          <div className="section-block">
            <div className="section-header">
              <div className="section-title-row">
                <img src={asset('assets/icons/character-section.svg')} alt="" aria-hidden="true" className="section-title-icon" />
                <h3 className="section-title">배경요소 <span className="section-hint" style={{ marginLeft: 6 }}>(ON/OFF)</span></h3>
              </div>
              <button
                type="button"
                className={`editbar-switch${backgroundEnabled ? ' is-on' : ''}`}
                aria-label="배경요소 전환"
                aria-pressed={backgroundEnabled}
                onClick={() => setBackgroundEnabled(!backgroundEnabled)}
              >
                <span className="editbar-switch-thumb" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Character-only options */}
          {activeTab === 'character' ? (
            <>
              <div className="section-block">
                <div className="section-header">
                  <div className="section-title-row">
                    <img src={asset('assets/icons/character-section.svg')} alt="" aria-hidden="true" className="section-title-icon" />
                    <h3 className="section-title">유형</h3>
                  </div>
                </div>
                <div className="editbar-segment">
                  {[
                    { id: '2-short', label: '2족(단신)' },
                    { id: '2-tall', label: '2족(장신)' },
                    { id: '4', label: '4족' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      className={`editbar-segbtn${characterType === opt.id ? ' is-selected' : ''}`}
                      onClick={() => setCharacterType(opt.id as any)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="section-block">
                <div className="section-header">
                  <div className="section-title-row">
                    <img src={asset('assets/icons/character-section.svg')} alt="" aria-hidden="true" className="section-title-icon" />
                    <h3 className="section-title">포즈</h3>
                  </div>
                </div>
                <div className="editbar-segment editbar-segment--cols2">
                  {[
                    { id: 'none', label: '포즈없음' },
                    { id: 't', label: 'T포즈' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      className={`editbar-segbtn${pose === opt.id ? ' is-selected' : ''}`}
                      onClick={() => setPose(opt.id as any)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : null}
        </div>

        {/* Prompt and CTA anchored at bottom like sidebar */}
        <div className="sidebar-prompt-actions">
          <div className="section-block section-block--prompt">
            <div className="section-header section-header--with-hint compact">
              <div className="section-title-row">
                <img src={asset('assets/icons/prompt-section.svg')} alt="" aria-hidden="true" className="section-title-icon" />
                <h3 className="section-title">프롬프트</h3>
              </div>
              <span className="section-hint">선택한 생성 개체 프롬프트는 자동 입력됩니다.</span>
            </div>
            {composedPrefix ? (
              <div className="prompt-prefix-card" aria-label="자동 입력 프롬프트">
                <div ref={prefixBoxRef} className="prompt-prefix-text" title={composedPrefix}>{prefixTail}</div>
                <button
                  type="button"
                  className="prompt-prefix-expand"
                  aria-label="전체 프롬프트 열기"
                  onClick={() => setPromptModalOpen(true)}
                >
                  <img src={asset('assets/icons/expand.svg')} alt="" aria-hidden="true" />
                </button>
              </div>
            ) : null}

            <div className="prompt-card">
              <textarea
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
                className="prompt-input"
                style={{ fontSize: '14px', lineHeight: 1.45 }}
                placeholder="생성할 이미지의 추가 설명을 입력하세요."
              />
            </div>
          </div>

          <button
            type="button"
            className="generate-cta"
            onClick={() => {
              onSubmit?.({
                tab: activeTab,
                styleId: selectedStyle || undefined,
                backgroundEnabled,
                characterType,
                pose,
                userPrompt,
              });
            }}
          >
            <img src={asset('assets/icons/generate.svg')} alt="" aria-hidden="true" className="generate-cta-icon" />
            수정하기
          </button>
        </div>
      </div>

      {isPromptModalOpen ? (
        <div className="prompt-modal" role="dialog" aria-modal="true" aria-label="전체 프롬프트">
          <div className="prompt-modal__backdrop" onClick={() => setPromptModalOpen(false)} />
          <div className="prompt-modal__card">
            <div className="prompt-modal__header">
              <h3 className="prompt-modal__title">전체 프롬프트</h3>
              <button type="button" className="prompt-modal__close" aria-label="닫기" onClick={() => setPromptModalOpen(false)}>✕</button>
            </div>
            <div className="prompt-modal__body">
              <pre className="prompt-modal__text">{[userPrompt.trim(), composedPrefix.trim()].filter(Boolean).join('\n')}</pre>
            </div>
          </div>
        </div>
      ) : null}
    </aside>
  );
}

export default ImageEditBar;
