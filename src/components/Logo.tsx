import { asset } from '../lib/asset';
type LogoProps = {
  onClick?: () => void;
};

export function Logo({ onClick }: LogoProps) {
  return (
    <button type="button" className="logo" aria-label="Botari 홈 새로고침" onClick={onClick}>
      <img src={asset('assets/logo/botari-logo.svg')} alt="" className="logo-mark" aria-hidden="true" />
      <div className="logo-copy">
        <span className="logo-version">0.1</span>
        <span className="logo-subtitle">Korean Heritage Asset Generator</span>
      </div>
    </button>
  );
}
