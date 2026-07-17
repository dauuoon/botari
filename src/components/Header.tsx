import { IconButton } from './IconButton';
import { Logo } from './Logo';

export function Header() {
  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <header className="header">
      <div className="brand-block">
        <Logo onClick={handleLogoClick} />
      </div>
      <div className="header-actions" aria-label="상단 바로가기">
        <IconButton ariaLabel="설정 열기" icon="gear" imageClassName="icon-button__image--header" />
        <IconButton ariaLabel="홈으로 이동" icon="home" imageClassName="icon-button__image--header" onClick={() => (window.location.href = '/home')} />
        <IconButton ariaLabel="계정 메뉴 열기" icon="profile" active imageClassName="icon-button__image--header" />
      </div>
    </header>
  );
}
