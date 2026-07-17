import { useEffect, useMemo, useState } from 'react';
import { botariStyles, characterOptions } from '../data/botariData';
import { CharacterSelector } from './CharacterSelector';
import { StyleSelector } from './StyleSelector';

export type EditMode = 'character' | 'style' | 'prompt';

export type EditValues = {
  character: string;
  style: string;
  prompt: string;
};

type GeneratedImageEditModalProps = {
  isOpen: boolean;
  initialMode: EditMode;
  currentValues: EditValues;
  onClose: () => void;
  onSubmit: (values: EditValues) => void;
};

export function GeneratedImageEditModal({ isOpen, initialMode, currentValues, onClose, onSubmit }: GeneratedImageEditModalProps) {
  const [activeMode, setActiveMode] = useState<EditMode>(initialMode);
  const [selectedCharacter, setSelectedCharacter] = useState(currentValues.character);
  const [selectedStyle, setSelectedStyle] = useState(currentValues.style);
  const [prompt, setPrompt] = useState(currentValues.prompt);
  const selectedCharacterOption = useMemo(
    () => characterOptions.find((option) => option.value === selectedCharacter),
    [selectedCharacter],
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setActiveMode(initialMode);
    setSelectedCharacter(currentValues.character);
    setSelectedStyle(currentValues.style);
    setPrompt(currentValues.prompt);
  }, [currentValues.character, currentValues.prompt, currentValues.style, initialMode, isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="generated-image-edit-modal" role="dialog" aria-modal="true" aria-label="2차 편집 모달">
      <div className="generated-image-edit-modal__backdrop" onClick={onClose} />
      <div className="generated-image-edit-modal__card">
        <header className="generated-image-edit-modal__header">
          <div>
            <p className="generated-image-edit-modal__eyebrow">2차 편집</p>
          </div>
          <button type="button" className="generated-image-edit-modal__close" onClick={onClose} aria-label="닫기">
            ×
          </button>
        </header>

        <div className="generated-image-edit-modal__tabs" role="tablist" aria-label="편집 항목 선택">
          <button type="button" className={`generated-image-edit-modal__tab${activeMode === 'character' ? ' is-active' : ''}`} onClick={() => setActiveMode('character')}>
            캐릭터
          </button>
          <button type="button" className={`generated-image-edit-modal__tab${activeMode === 'style' ? ' is-active' : ''}`} onClick={() => setActiveMode('style')}>
            스타일
          </button>
          <button type="button" className={`generated-image-edit-modal__tab${activeMode === 'prompt' ? ' is-active' : ''}`} onClick={() => setActiveMode('prompt')}>
            프롬프트
          </button>
        </div>

        <div className="generated-image-edit-modal__body">
          {activeMode === 'character' ? (
            <section className="generated-image-edit-modal__section">
              <div className="generated-image-edit-modal__section-head">
                <img src="/assets/icons/character-section.svg" alt="" aria-hidden="true" className="generated-image-edit-modal__section-icon" />
                <span>캐릭터</span>
              </div>
              <CharacterSelector
                options={characterOptions}
                selectedValue={selectedCharacter}
                selectedLabel={selectedCharacterOption?.label ?? ''}
                defaultLabel="캐릭터 선택"
                selectedThumbnail={selectedCharacterOption?.thumbnail ?? ''}
                isOpen
                onToggle={() => undefined}
                onSelect={(value) => setSelectedCharacter(value)}
                showTrigger={false}
                allowDeselect
                inlineLabel="캐릭터 선택 리스트"
              />
            </section>
          ) : null}

          {activeMode === 'style' ? (
            <section className="generated-image-edit-modal__section">
              <div className="generated-image-edit-modal__section-head">
                <img src="/assets/icons/style-section.svg" alt="" aria-hidden="true" className="generated-image-edit-modal__section-icon" />
                <span>스타일</span>
              </div>
              <StyleSelector options={botariStyles} selectedValue={selectedStyle} onSelect={setSelectedStyle} />
            </section>
          ) : null}

          {activeMode === 'prompt' ? (
            <section className="generated-image-edit-modal__section">
              <div className="generated-image-edit-modal__section-head">
                <img src="/assets/icons/prompt-section.svg" alt="" aria-hidden="true" className="generated-image-edit-modal__section-icon" />
                <span>프롬프트</span>
              </div>
              <label className="generated-image-edit-modal__prompt-card">
                <span className="sr-only">프롬프트 입력</span>
                <textarea
                  value={prompt}
                  onChange={(event) => setPrompt(event.target.value)}
                  className="generated-image-edit-modal__prompt-input"
                  placeholder="수정할 내용을 입력하세요."
                />
              </label>
            </section>
          ) : null}
        </div>

        <footer className="generated-image-edit-modal__footer">
          <button
            type="button"
            className="generated-image-edit-modal__submit"
            onClick={() => onSubmit({ character: selectedCharacter, style: selectedStyle, prompt })}
          >
            수정하기
          </button>
        </footer>
      </div>
    </div>
  );
}