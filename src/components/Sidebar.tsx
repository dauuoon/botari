import { asset } from '../lib/asset';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { botariStyles, characterOptions } from '../data/botariData';
import { CharacterSelector } from './CharacterSelector';
import { StyleSelector } from './StyleSelector';

type SidebarProps = {
  promptPrefix: string;
  prompt: string;
  onPromptChange: (value: string) => void;
  selectedCharacter: string;
  selectedCharacterLabel: string;
  isCharacterOpen: boolean;
  onCharacterToggle: () => void;
  onCharacterSelect: (value: string) => void;
  selectedStyle: string;
  onStyleSelect: (value: string) => void;
  onGenerate: () => void;
  canGenerate: boolean;
  isStyleLocked?: boolean;
};

export function Sidebar({
  promptPrefix,
  prompt,
  onPromptChange,
  selectedCharacter,
  selectedCharacterLabel,
  isCharacterOpen,
  onCharacterToggle,
  onCharacterSelect,
  selectedStyle,
  onStyleSelect,
  onGenerate,
  canGenerate,
  isStyleLocked = false,
}: SidebarProps) {
  const promptInputRef = useRef<HTMLTextAreaElement | null>(null);
  const [isPromptModalOpen, setPromptModalOpen] = useState(false);
  const selectedCharacterOption = characterOptions.find((option) => option.value === selectedCharacter);
  const composedPrefix = promptPrefix || '';
  const prefixBoxRef = useRef<HTMLDivElement | null>(null);
  const [prefixTail, setPrefixTail] = useState<string>(composedPrefix);

  // Compute tail text that fits the box width with leading ellipsis
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
      // Prefer the computed CSS font shorthand if available
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

      // Binary search for max suffix length that fits with manual leading ellipsis
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

      // Heuristic: if there is a closing parenthesis near the end, try aligning start at its matching '('
      const suffix = best.slice(1); // without leading ellipsis
      const closeIdx = suffix.lastIndexOf(')');
      if (closeIdx !== -1) {
        const globalStart = full.length - suffix.length;
        const scanStart = Math.max(0, globalStart - 200); // limit scan window
        const before = full.slice(scanStart, globalStart + closeIdx + 1);
        const openRel = before.lastIndexOf('(');
        if (openRel !== -1) {
          const newStartGlobal = scanStart + openRel;
          const alt = '…' + full.slice(newStartGlobal);
          if (fits(alt)) {
            setPrefixTail(alt);
            return;
          }
        }
      }

      setPrefixTail(best);
    };

    compute();
    const onResize = () => compute();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [composedPrefix]);

  // 단일 입력 -> 두 박스 분리로 단순화되어, 기존 오버레이/경계 제어 로직 제거

  return (
    <aside className="sidebar">
      <div className="section-block">
        <div className="section-header">
          <div className="section-title-row">
            <img src={asset('assets/icons/character-section.svg')} alt="" aria-hidden="true" className="section-title-icon" />
            <h2 className="section-title">생성 개체 <span className="section-asterisk">*</span></h2>
          </div>
        </div>
        <CharacterSelector
          options={characterOptions}
          selectedValue={selectedCharacter}
          selectedLabel={selectedCharacterLabel}
          defaultLabel="생성 개체 선택"
          selectedThumbnail={selectedCharacterOption?.thumbnail ?? ''}
          isOpen={isCharacterOpen}
          onToggle={onCharacterToggle}
          onSelect={onCharacterSelect}
        />
      </div>

      <div className="section-block">
        <div className="section-header section-header--with-hint">
          <div className="section-title-row">
            <img src={asset('assets/icons/style-section.svg')} alt="" aria-hidden="true" className="section-title-icon" />
            <h2 className="section-title">스타일 <span className="section-asterisk">*</span></h2>
          </div>
          {isStyleLocked ? (
            <span className="section-hint section-hint--warning">전통민화를 먼저 생성 후 스타일을 사용할 수 있습니다.</span>
          ) : null}
        </div>
        <StyleSelector
          options={botariStyles}
          selectedValue={selectedStyle}
          onSelect={onStyleSelect}
          locked={isStyleLocked}
          allowedId="traditional"
          lockedMessage="전통민화를 먼저 생성 후 스타일을 사용할 수 있습니다."
        />
      </div>

      <div className="sidebar-prompt-actions">
        <div className="section-block section-block--prompt">
          <div className="section-header section-header--with-hint">
            <div className="section-title-row">
              <img src={asset('assets/icons/prompt-section.svg')} alt="" aria-hidden="true" className="section-title-icon" />
              <h2 className="section-title">프롬프트</h2>
            </div>
            <span className="section-hint">선택한 생성 개체 프롬프트는 자동 입력됩니다.</span>
          </div>
          {/* 자동 입력 프롬프트(읽기 전용) */}
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

          {/* 사용자 입력 프롬프트 */}
          <div className="prompt-card">
            <textarea
              ref={promptInputRef}
              value={prompt}
              onChange={(event) => onPromptChange(event.target.value)}
              className="prompt-input"
              style={{ fontSize: '14px', lineHeight: 1.45 }}
              placeholder="생성할 이미지의 추가 설명을 입력하세요."
            />
          </div>
        </div>

        <button type="button" className="generate-cta" onClick={onGenerate} disabled={!canGenerate}>
          <img src={asset('assets/icons/generate.svg')} alt="" aria-hidden="true" className="generate-cta-icon" />
          생성하기
        </button>

        {isPromptModalOpen ? (
          <div className="prompt-modal" role="dialog" aria-modal="true" aria-label="전체 프롬프트">
            <div className="prompt-modal__backdrop" onClick={() => setPromptModalOpen(false)} />
            <div className="prompt-modal__card">
              <div className="prompt-modal__header">
                <h3 className="prompt-modal__title">전체 프롬프트</h3>
                <button type="button" className="prompt-modal__close" aria-label="닫기" onClick={() => setPromptModalOpen(false)}>✕</button>
              </div>
              <div className="prompt-modal__body">
                <pre className="prompt-modal__text">{[prompt.trim(), promptPrefix.trim()].filter(Boolean).join('\n')}</pre>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </aside>
  );
}
