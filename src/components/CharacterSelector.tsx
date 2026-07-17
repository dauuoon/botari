type CharacterOption = {
  value: string;
  label: string;
  thumbnail: string;
};

type CharacterSelectorProps = {
  options: CharacterOption[];
  selectedValue: string;
  selectedLabel: string;
  defaultLabel: string;
  selectedThumbnail: string;
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (value: string) => void;
  showTrigger?: boolean;
  allowDeselect?: boolean;
  inlineLabel?: string;
};

export function CharacterSelector({
  options,
  selectedValue,
  selectedLabel,
  defaultLabel,
  selectedThumbnail,
  isOpen,
  onToggle,
  onSelect,
  showTrigger = true,
  allowDeselect = false,
  inlineLabel = '캐릭터 선택 옵션',
}: CharacterSelectorProps) {
  const triggerLabel = selectedLabel || defaultLabel;
  const hasSelection = Boolean(selectedValue);
  const isInlineList = !showTrigger;
  const shouldShowMenu = showTrigger ? isOpen : true;

  return (
    <div className="dropdown-shell">
      {showTrigger ? (
        <button type="button" className={`dropdown-trigger${hasSelection ? ' is-selected' : ''}${!hasSelection ? ' is-empty' : ''}`} onClick={onToggle} aria-expanded={isOpen}>
          <span className="character-trigger-content">
            {selectedThumbnail ? <img src={selectedThumbnail} alt="" aria-hidden="true" className="character-trigger-thumb" /> : null}
            <span>{triggerLabel}</span>
          </span>
          <img src="/assets/icons/chevron-down.svg" alt="" aria-hidden="true" className={`dropdown-chevron${isOpen ? ' is-open' : ''}`} />
        </button>
      ) : null}
      {shouldShowMenu ? (
        <div className={`dropdown-menu${isInlineList ? ' dropdown-menu--inline' : ''}`} role="listbox" aria-label={inlineLabel}>
          {options.map((option) => {
            const isSelected = selectedValue === option.value;

            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                className={`dropdown-option${isSelected ? ' is-selected' : ''}`}
                onClick={() => onSelect(isSelected && allowDeselect ? '' : option.value)}
              >
                <img src={option.thumbnail} alt="" aria-hidden="true" className="dropdown-option-thumb" />
                <span>{option.label}</span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
