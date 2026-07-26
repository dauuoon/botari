import { asset } from '../lib/asset';
import type { StyleOption } from '../data/botariData';

type StyleSelectorProps = {
  options: StyleOption[];
  selectedValue: string;
  onSelect: (value: string) => void;
  locked?: boolean; // when true, only allowedId is selectable
  allowedId?: string; // e.g., 'traditional'
  lockedMessage?: string; // tooltip for locked items
};

export function StyleSelector({ options, selectedValue, onSelect, locked = false, allowedId, lockedMessage }: StyleSelectorProps) {
  return (
    <div className="style-grid">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          className={`style-tile tone-${option.tone}${selectedValue === option.id ? ' is-selected' : ''}`}
          onClick={() => {
            const isLocked = locked && option.id !== allowedId;
            if (isLocked) return; // block selection when locked
            onSelect(selectedValue === option.id ? '' : option.id);
          }}
          aria-pressed={selectedValue === option.id}
          aria-disabled={locked && option.id !== allowedId}
          aria-label={option.label}
          title={locked && option.id !== allowedId ? (lockedMessage || '') : undefined}
        >
          <img src={option.thumbnail} alt="" aria-hidden="true" className="style-tile-image" />
          {selectedValue === option.id ? <img src={asset('assets/icons/check.svg')} alt="" aria-hidden="true" className="style-tile-check" /> : null}
          <span className="style-tile-label">{option.label}</span>
        </button>
      ))}
    </div>
  );
}
