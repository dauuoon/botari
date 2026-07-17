type IconButtonProps = {
  ariaLabel: string;
  icon: 'gear' | 'bell' | 'profile' | 'expand' | 'close' | 'generate' | 'chevronDown' | 'history' | 'chevronUpDouble' | 'home';
  active?: boolean;
  onClick?: () => void;
  className?: string;
  imageClassName?: string;
};

const iconSourceMap: Record<IconButtonProps['icon'], string> = {
  gear: '/assets/icons/gear.svg',
  bell: '/assets/icons/bell.svg',
  profile: '/assets/icons/profile.svg',
  expand: '/assets/icons/expand.svg',
  close: '/assets/icons/close.svg',
  generate: '/assets/icons/generate.svg',
  chevronDown: '/assets/icons/chevron-down.svg',
  history: '/assets/icons/history.svg',
  chevronUpDouble: '/assets/icons/chevron-up-double.svg',
  home: '/assets/icons/home.svg',
};

export function IconButton({ ariaLabel, icon, active = false, onClick, className, imageClassName }: IconButtonProps) {
  return (
    <button type="button" className={`icon-button${active ? ' is-active' : ''}${className ? ` ${className}` : ''}`} aria-label={ariaLabel} onClick={onClick}>
      <img src={iconSourceMap[icon]} alt="" aria-hidden="true" className={`icon-button__image${imageClassName ? ` ${imageClassName}` : ''}`} />
    </button>
  );
}
