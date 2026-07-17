import { useEffect, useRef, useState } from 'react';
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
}: SidebarProps) {
  const promptInputRef = useRef<HTMLTextAreaElement | null>(null);
  const prefixOverlayRef = useRef<HTMLDivElement | null>(null);
  const [prefixPadding, setPrefixPadding] = useState(0);
  const selectedCharacterOption = characterOptions.find((option) => option.value === selectedCharacter);
  const selectedCharacterCount = selectedCharacter ? '1/1' : '0/1';
  const selectedStyleCount = selectedStyle ? '1/1' : '0/1';
  const overlayPrompt = promptPrefix ? `${promptPrefix}\n` : '';

  useEffect(() => {
    const overlay = prefixOverlayRef.current;

    if (!promptPrefix || !overlay) {
      setPrefixPadding(0);
      return;
    }

    const updatePadding = () => {
      setPrefixPadding(overlay.offsetHeight);
    };

    updatePadding();

    const resizeObserver = new ResizeObserver(updatePadding);
    resizeObserver.observe(overlay);

    return () => {
      resizeObserver.disconnect();
    };
  }, [promptPrefix]);

  useEffect(() => {
    if (!promptPrefix) {
      return;
    }

    const input = promptInputRef.current;
    if (!input) {
      return;
    }

    window.requestAnimationFrame(() => {
      input.focus({ preventScroll: true });
      const nextCaretPosition = input.value.length;
      input.setSelectionRange(nextCaretPosition, nextCaretPosition);
      window.requestAnimationFrame(() => {
        input.scrollTop = input.scrollHeight;
      });
    });
  }, [promptPrefix]);

  return (
    <aside className="sidebar">
      <div className="section-block">
        <div className="section-header">
          <div className="section-title-row">
            <img src="/assets/icons/character-section.svg" alt="" aria-hidden="true" className="section-title-icon" />
            <h2 className="section-title">캐릭터 <span className="section-asterisk">*</span></h2>
          </div>
          <span className="section-count">{selectedCharacterCount}</span>
        </div>
        <CharacterSelector
          options={characterOptions}
          selectedValue={selectedCharacter}
          selectedLabel={selectedCharacterLabel}
          defaultLabel="생성 캐릭터 선택"
          selectedThumbnail={selectedCharacterOption?.thumbnail ?? ''}
          isOpen={isCharacterOpen}
          onToggle={onCharacterToggle}
          onSelect={onCharacterSelect}
        />
      </div>

      <div className="section-block">
        <div className="section-header">
          <div className="section-title-row">
            <img src="/assets/icons/style-section.svg" alt="" aria-hidden="true" className="section-title-icon" />
            <h2 className="section-title">스타일 <span className="section-asterisk">*</span></h2>
          </div>
          <span className="section-count">{selectedStyleCount}</span>
        </div>
        <StyleSelector options={botariStyles} selectedValue={selectedStyle} onSelect={onStyleSelect} />
      </div>

      <div className="sidebar-prompt-actions">
        <div className="section-block section-block--prompt">
          <div className="section-header compact section-header--with-hint">
            <div className="section-title-row">
              <img src="/assets/icons/prompt-section.svg" alt="" aria-hidden="true" className="section-title-icon" />
              <h2 className="section-title">프롬프트</h2>
            </div>
            <span className="section-hint">선택한 캐릭터, 스타일의 프롬프트는 자동 입력됩니다.</span>
          </div>
          <div className="prompt-card prompt-card--editor">
            {promptPrefix ? (
              <div className="prompt-card__overlay-shell">
                <div ref={prefixOverlayRef} className="prompt-card__overlay-text">{overlayPrompt}</div>
                <textarea
                  ref={promptInputRef}
                  value={prompt}
                  onChange={(event) => onPromptChange(event.target.value)}
                  onFocus={(event) => {
                    const input = event.currentTarget;
                    window.requestAnimationFrame(() => {
                      const caretPosition = input.value.length;
                      input.setSelectionRange(caretPosition, caretPosition);
                      input.scrollTop = input.scrollHeight;
                    });
                  }}
                  className="prompt-input prompt-input--prefix"
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.6,
                    paddingTop: `${Math.max(prefixPadding + 24, 52)}px`,
                  }}
                  placeholder="추가로 강조하고 싶은 내용을 입력하세요."
                />
              </div>
            ) : (
              <textarea
                ref={promptInputRef}
                value={prompt}
                onChange={(event) => onPromptChange(event.target.value)}
                className="prompt-input"
                style={{ fontSize: '14px', lineHeight: 1.6 }}
                placeholder="생성할 이미지에 상세한 특징을 입력하세요."
              />
            )}
          </div>
        </div>

        <button type="button" className="generate-cta" onClick={onGenerate} disabled={!canGenerate}>
          <img src="/assets/icons/generate.svg" alt="" aria-hidden="true" className="generate-cta-icon" />
          생성하기
        </button>
      </div>
    </aside>
  );
}
