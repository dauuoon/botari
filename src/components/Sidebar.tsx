import { asset } from '../lib/asset';
import { useEffect, useRef } from 'react';
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
  const selectedCharacterOption = characterOptions.find((option) => option.value === selectedCharacter);
  const selectedCharacterCount = selectedCharacter ? '1/1' : '0/1';
  const selectedStyleCount = selectedStyle ? '1/1' : '0/1';
  const overlayPrompt = promptPrefix ? `${promptPrefix}\n\n` : '';
  const composedPrefix = overlayPrompt;
  const prefixLen = composedPrefix.length;
  const fullPromptValue = composedPrefix + prompt;

  useEffect(() => {
    if (!promptPrefix) return;
    const input = promptInputRef.current;
    const overlay = prefixOverlayRef.current;
    if (!input) return;
    requestAnimationFrame(() => {
      input.focus({ preventScroll: true });
      const end = input.value.length;
      input.setSelectionRange(end, end);
      requestAnimationFrame(() => {
        input.scrollTop = input.scrollHeight;
        if (overlay) overlay.style.transform = `translateY(-${input.scrollTop}px)`;
      });
    });
  }, [promptPrefix]);

  useEffect(() => {
    const input = promptInputRef.current;
    const overlay = prefixOverlayRef.current;
    if (!input || !overlay) return;
    const handleScroll = () => {
      overlay.style.transform = `translateY(-${input.scrollTop}px)`;
    };
    input.addEventListener('scroll', handleScroll);
    return () => input.removeEventListener('scroll', handleScroll);
  }, []);

  const enforceCaretBoundary = (el: HTMLTextAreaElement) => {
    const start = el.selectionStart ?? 0;
    const end = el.selectionEnd ?? 0;
    if (start < prefixLen || end < prefixLen) {
      el.setSelectionRange(prefixLen, prefixLen);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (!promptPrefix) return;
    const el = e.currentTarget;
    const start = el.selectionStart ?? 0;
    const end = el.selectionEnd ?? 0;
    const atPrefix = start <= prefixLen || end <= prefixLen;
    const blockedKeys = ['Backspace', 'Delete'];
    if (atPrefix && (blockedKeys.includes(e.key) || (e.key.length === 1 && !e.metaKey && !e.ctrlKey))) {
      e.preventDefault();
      enforceCaretBoundary(el);
    }
  };

  const handleSelect: React.ReactEventHandler<HTMLTextAreaElement> = (e) => {
    if (!promptPrefix) return;
    enforceCaretBoundary(e.currentTarget);
  };

  const handlePaste: React.ClipboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (!promptPrefix) return;
    const el = e.currentTarget;
    const start = el.selectionStart ?? 0;
    if (start < prefixLen) {
      e.preventDefault();
      const pasteText = e.clipboardData.getData('text');
      const current = el.value;
      const after = current.slice(prefixLen);
      const next = composedPrefix + pasteText + after;
      onPromptChange(pasteText + after);
      requestAnimationFrame(() => {
        el.value = next;
        el.setSelectionRange(next.length, next.length);
        const overlay = prefixOverlayRef.current;
        if (overlay) overlay.style.transform = `translateY(-${el.scrollTop}px)`;
      });
    }
  };

  return (
    <aside className="sidebar">
      <div className="section-block">
        <div className="section-header">
          <div className="section-title-row">
            <img src={asset('assets/icons/character-section.svg')} alt="" aria-hidden="true" className="section-title-icon" />
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
            <img src={asset('assets/icons/style-section.svg')} alt="" aria-hidden="true" className="section-title-icon" />
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
              <img src={asset('assets/icons/prompt-section.svg')} alt="" aria-hidden="true" className="section-title-icon" />
              <h2 className="section-title">프롬프트</h2>
            </div>
            <span className="section-hint">선택한 캐릭터, 스타일의 프롬프트는 자동 입력됩니다.</span>
          </div>
          <div className="prompt-card prompt-card--editor">
            {promptPrefix ? (
              <div className="prompt-card__overlay-shell">
                <div ref={prefixOverlayRef} className="prompt-card__overlay-mirror">
                  <span className="prompt-mirror-prefix">{composedPrefix}</span>
                  <span className="prompt-mirror-user">{prompt}</span>
                </div>
                <textarea
                  ref={promptInputRef}
                  value={fullPromptValue}
                  onChange={(e) => {
                    const v = e.target.value;
                    const userPart = v.slice(Math.min(prefixLen, v.length));
                    onPromptChange(userPart);
                    const overlay = prefixOverlayRef.current;
                    if (overlay) overlay.style.transform = `translateY(-${e.currentTarget.scrollTop}px)`;
                  }}
                  onKeyDown={handleKeyDown}
                  onSelect={handleSelect}
                  onPaste={handlePaste}
                  onFocus={(e) => {
                    const input = e.currentTarget;
                    requestAnimationFrame(() => {
                      const end = input.value.length;
                      if (input.selectionStart !== end || input.selectionEnd !== end) {
                        input.setSelectionRange(end, end);
                      }
                      input.scrollTop = input.scrollHeight;
                      const overlay = prefixOverlayRef.current;
                      if (overlay) overlay.style.transform = `translateY(-${input.scrollTop}px)`;
                    });
                  }}
                  className="prompt-input prompt-input--prefix"
                  style={{ fontSize: '14px', lineHeight: 1.45, color: 'transparent', caretColor: '#fff' }}
                />
              </div>
            ) : (
              <textarea
                ref={promptInputRef}
                value={prompt}
                onChange={(event) => onPromptChange(event.target.value)}
                className="prompt-input"
                style={{ fontSize: '14px', lineHeight: 1.45 }}
                placeholder="생성할 이미지에 상세한 특징을 입력하세요."
              />
            )}
          </div>
        </div>

        <button type="button" className="generate-cta" onClick={onGenerate} disabled={!canGenerate}>
          <img src={asset('assets/icons/generate.svg')} alt="" aria-hidden="true" className="generate-cta-icon" />
          생성하기
        </button>
      </div>
    </aside>
  );
}
