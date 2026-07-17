import { asset } from '../lib/asset';
import type { StyleOption } from '../data/botariData';

type StyleSelectorProps = {
  options: StyleOption[];
  selectedValue: string;
  onSelect: (value: string) => void;
};

export function StyleSelector({ options, selectedValue, onSelect }: StyleSelectorProps) {
  return (
    <div className="style-grid">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          className={`style-tile tone-${option.tone}${selectedValue === option.id ? ' is-selected' : ''}`}
          onClick={() => onSelect(selectedValue === option.id ? '' : option.id)}
          aria-pressed={selectedValue === option.id}
          aria-label={option.label}
        >
          <img src={option.thumbnail} alt="" aria-hidden="true" className="style-tile-image" />
          {selectedValue === option.id ? <img src={asset('assets/icons/check.svg')} alt="" aria-hidden="true" className="style-tile-check" /> : null}
          <span className="style-tile-label">{option.label}</span>
        </button>
      ))}
    </div>
  );
}
