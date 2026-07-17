import { asset } from '../lib/asset';
type IconButtonProps = {
  ariaLabel: string;
  icon: 'gear' | 'bell' | 'profile' | 'expand' | 'close' | 'generate' | 'chevronDown' | 'history' | 'chevronUpDouble' | 'home';
  active?: boolean;
  onClick?: () => void;
  className?: string;
  imageClassName?: string;
};

const iconSourceMap: Record<IconButtonProps['icon'], string> = {
  gear: asset('assets/icons/gear.svg'),
  bell: asset('assets/icons/bell.svg'),
  profile: asset('assets/icons/profile.svg'),
  expand: asset('assets/icons/expand.svg'),
  close: asset('assets/icons/close.svg'),
  generate: asset('assets/icons/generate.svg'),
  chevronDown: asset('assets/icons/chevron-down.svg'),
  history: asset('assets/icons/history.svg'),
  chevronUpDouble: asset('assets/icons/chevron-up-double.svg'),
  home: asset('assets/icons/home.svg'),
};

export function IconButton({ ariaLabel, icon, active = false, onClick, className, imageClassName }: IconButtonProps) {
  return (
    <button type="button" className={`icon-button${active ? ' is-active' : ''}${className ? ` ${className}` : ''}`} aria-label={ariaLabel} onClick={onClick}>
      <img src={iconSourceMap[icon]} alt="" aria-hidden="true" className={`icon-button__image${imageClassName ? ` ${imageClassName}` : ''}`} />
    </button>
  );
}
