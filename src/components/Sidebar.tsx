import { asset } from '../lib/asset';
import ReactDOM from 'react-dom';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
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
  isStyleLocked?: boolean;
  // Edit mode extensions
  mode?: 'generate' | 'edit';
  editActiveTab?: 'keep' | 'character';
  onChangeEditTab?: (tab: 'keep' | 'character') => void;
  onEditSubmit?: (payload: { tab: 'keep' | 'character'; styleId?: string; backgroundEnabled: boolean; userPrompt: string; characterType?: '4' | '2-short' | '2-tall'; pose?: 't' | 'default' }) => void;
  onExitEdit?: () => void;
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
  isStyleLocked = false,
  mode = 'generate',
  editActiveTab = 'keep',
  onChangeEditTab,
  onEditSubmit,
  onExitEdit,
}: SidebarProps) {
  const promptInputRef = useRef<HTMLTextAreaElement | null>(null);
  const [isPromptModalOpen, setPromptModalOpen] = useState(false);
  const selectedCharacterOption = characterOptions.find((option) => option.value === selectedCharacter);
  const composedPrefix = promptPrefix || '';
  const prefixBoxRef = useRef<HTMLDivElement | null>(null);
  const [prefixTail, setPrefixTail] = useState<string>(composedPrefix);

  // Compute tail text that fits the box width with leading ellipsis
  useLayoutEffect(() => {
    const el = prefixBoxRef.current;
    if (!el) {
      setPrefixTail(composedPrefix);
      return;
    }
    const compute = () => {
      const width = el.clientWidth;
      if (!width) {
        setPrefixTail(composedPrefix);
        return;
      }
      const style = window.getComputedStyle(el);
      // Prefer the computed CSS font shorthand if available
      const font = style.font || `${style.fontStyle || 'normal'} ${style.fontVariant || 'normal'} ${style.fontWeight || '400'} ${style.fontSize || '12px'}/${style.lineHeight || 'normal'} ${style.fontFamily || 'sans-serif'}`;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        setPrefixTail(composedPrefix);
        return;
      }
      ctx.font = font;

      const full = composedPrefix.replace(/\s+/g, ' ').trim();
      if (!full) {
        setPrefixTail('');
        return;
      }

      const fits = (text: string) => ctx.measureText(text).width <= width;

      // Binary search for max suffix length that fits with manual leading ellipsis
      let lo = 1, hi = full.length, best = full;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        const candidate = '…' + full.slice(-mid);
        if (fits(candidate)) {
          best = candidate;
          lo = mid + 1;
        } else {
          hi = mid - 1;
        }
      }

      // Heuristic: if there is a closing parenthesis near the end, try aligning start at its matching '('
      const suffix = best.slice(1); // without leading ellipsis
      const closeIdx = suffix.lastIndexOf(')');
      if (closeIdx !== -1) {
        const globalStart = full.length - suffix.length;
        const scanStart = Math.max(0, globalStart - 200); // limit scan window
        const before = full.slice(scanStart, globalStart + closeIdx + 1);
        const openRel = before.lastIndexOf('(');
        if (openRel !== -1) {
          const newStartGlobal = scanStart + openRel;
          const alt = '…' + full.slice(newStartGlobal);
          if (fits(alt)) {
            setPrefixTail(alt);
            return;
          }
        }
      }

      setPrefixTail(best);
    };

    compute();
    const onResize = () => compute();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [composedPrefix]);

  // 단일 입력 -> 두 박스 분리로 단순화되어, 기존 오버레이/경계 제어 로직 제거

  const [backgroundEnabled, setBackgroundEnabled] = useState<boolean>(true);

  const isEdit = mode === 'edit';
  const [editCharacterType, setEditCharacterType] = useState<'4' | '2-short' | '2-tall'>('4');
  const [editCharacterPose, setEditCharacterPose] = useState<'default' | 't'>('default');

  // 4족 선택 시 포즈는 자동으로 '포즈없음'으로 강제, T포즈 비활성화
  useEffect(() => {
    if (editCharacterType === '4' && editCharacterPose !== 'default') {
      setEditCharacterPose('default');
    }
  }, [editCharacterType, editCharacterPose]);

  return (
    <aside className={`sidebar${isEdit ? ' sidebar--edit' : ''}`}>
      {isEdit ? (
        <>
          <div className="editbar-header">
            <h2 className="editbar-title">이미지편집</h2>
            <button type="button" className="editbar-close" aria-label="편집 닫기" onClick={() => onExitEdit?.()}>✕</button>
          </div>
          <div className="editbar-tablist" role="tablist" aria-label="편집 모드">
            <button type="button" role="tab" aria-selected={editActiveTab === 'keep'} className={`editbar-tab${editActiveTab === 'keep' ? ' is-active' : ''}`} onClick={() => onChangeEditTab?.('keep')}>민화유지</button>
            <button type="button" role="tab" aria-selected={editActiveTab === 'character'} className={`editbar-tab${editActiveTab === 'character' ? ' is-active' : ''}`} onClick={() => onChangeEditTab?.('character')}>캐릭터화</button>
          </div>
        </>
      ) : null}

      {/* 편집 모드에서 프롬프트는 하단 고정 영역로 이동 (CTA와 함께) */}
      <div className="section-block">
        <div className="section-header">
          <div className="section-title-row">
            <img src={asset('assets/icons/character-section.svg')} alt="" aria-hidden="true" className="section-title-icon" />
            <h2 className="section-title">생성 개체 <span className="section-asterisk">*</span></h2>
          </div>
        </div>
        <CharacterSelector
          options={characterOptions}
          selectedValue={selectedCharacter}
          selectedLabel={selectedCharacterLabel}
          defaultLabel="생성 개체 선택"
          selectedThumbnail={selectedCharacterOption?.thumbnail ?? ''}
          isOpen={isEdit ? false : isCharacterOpen}
          onToggle={isEdit ? () => {} : onCharacterToggle}
          onSelect={isEdit ? () => {} : onCharacterSelect}
        />
      </div>

      {/* 1) 메인 스타일 헤더: generate=전통민화 선택, edit/keep=전통민화(그레이 비활성 타일), edit/character=캐릭터화(그레이 비활성 타일) */}
      {(!isEdit || isEdit) ? (
      <div className="section-block">
        <div className="section-header">
          <div className="section-title-row">
            <img src={asset('assets/icons/style-section.svg')} alt="" aria-hidden="true" className="section-title-icon" />
            {!isEdit ? (
              <h2 className="section-title">전통민화 <span className="section-asterisk">*</span></h2>
            ) : editActiveTab === 'keep' ? (
              <h2 className="section-title">전통민화 <span className="section-asterisk">*</span></h2>
            ) : (
              <h2 className="section-title">캐릭터화 <span className="section-asterisk">*</span></h2>
            )}
          </div>
        </div>
        {!isEdit ? (
          <StyleSelector
            options={botariStyles.filter((s) => s.id === 'traditional')}
            selectedValue={selectedStyle}
            onSelect={onStyleSelect}
            locked={false}
          />
        ) : editActiveTab === 'keep' ? (
          <div className="style-grid">
            <button type="button" className="style-tile tone-neutral" aria-disabled title="편집 모드에서는 전통민화 선택이 비활성화됩니다.">
              <img src={botariStyles.find((s) => s.id === 'traditional')?.thumbnail || asset('assets/icons/style-disabled.svg')} alt="" aria-hidden="true" className="style-tile-image" />
              <span className="style-tile-label">전통민화</span>
            </button>
          </div>
        ) : (
          <div className="style-grid">
            <button type="button" className="style-tile tone-neutral" aria-disabled title="편집 모드에서 캐릭터화는 아직 선택할 수 없습니다.">
              <img src={asset('assets/styles/10.png')} alt="" aria-hidden="true" className="style-tile-image" />
              <span className="style-tile-label">캐릭터화</span>
            </button>
          </div>
        )}
      </div>
      ) : null}

      {/* 2) 하위 분류: generate=비활성 안내, edit=활성(단, 전통민화는 비활성) */}
      <div className="section-block">
        <div className="section-header section-header--with-hint">
          <div className="section-title-row">
            <img src={asset('assets/icons/style-section.svg')} alt="" aria-hidden="true" className="section-title-icon" />
            <h2 className="section-title">스타일</h2>
          </div>
          {!isEdit ? (
            <span className="section-hint section-hint--warning">2차 편집에서 사용 가능합니다.</span>
          ) : null}
        </div>
        {!isEdit ? (
          <StyleSelector
            options={botariStyles.filter((s) => s.id !== 'traditional')}
            selectedValue={''}
            onSelect={() => { /* no-op when locked */ }}
            locked={true}
            allowedId="traditional" /* 모든 항목을 잠그기 위해 존재하지 않는 id로 비교 */
            lockedMessage="2차 편집에서 사용 가능합니다."
          />
        ) : (
          <StyleSelector
            options={botariStyles.filter((s) => {
              if (s.id === 'traditional') return false;
              if (editActiveTab === 'keep' && (s.id === 'neon' || s.id === 'gameart')) return false; // 민화유지 탭에서는 네온/게임아트 제외
              return true;
            })}
            selectedValue={selectedStyle}
            onSelect={(v) => {
              if (v === 'traditional') return; // 전통민화는 비활성
              if (editActiveTab === 'keep' && (v === 'neon' || v === 'gameart')) return; // 민화유지 탭에서 선택 차단
              onStyleSelect(v);
            }}
            locked={false}
          />
        )}
      </div>

      {/* 배경요소 토글: 편집 모드에서만 노출 */}
      {isEdit ? (
        <div className="section-block">
          <div className="section-header">
            <div className="section-title-row">
              <img src={asset('assets/icons/character-section.svg')} alt="" aria-hidden="true" className="section-title-icon" />
              <h3 className="section-title">배경요소 <span className="section-hint" style={{ marginLeft: 6 }}>(ON/OFF)</span></h3>
            </div>
            <button
              type="button"
              className={`editbar-switch${backgroundEnabled ? ' is-on' : ''}`}
              aria-label="배경요소 전환"
              aria-pressed={backgroundEnabled}
              onClick={() => setBackgroundEnabled(!backgroundEnabled)}
            >
              <span className="editbar-switch-thumb" aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}

      {/* 캐릭터화 탭 전용: 배경요소 다음에 캐릭터 유형/포즈 */}
      {isEdit && editActiveTab === 'character' ? (
        <>
          <div className="section-block">
            <div className="section-header">
              <div className="section-title-row">
                <img src={asset('assets/icons/character-section.svg')} alt="" aria-hidden="true" className="section-title-icon" />
                <h3 className="section-title">캐릭터 유형</h3>
              </div>
            </div>
            <div className="segmented">
              <button type="button" className={`segmented-item${editCharacterType === '2-short' ? ' is-active' : ''}`} onClick={() => setEditCharacterType('2-short')}>2족(단신)</button>
              <button type="button" className={`segmented-item${editCharacterType === '2-tall' ? ' is-active' : ''}`} onClick={() => setEditCharacterType('2-tall')}>2족(장신)</button>
              <button type="button" className={`segmented-item${editCharacterType === '4' ? ' is-active' : ''}`} onClick={() => setEditCharacterType('4')}>4족</button>
            </div>
          </div>
          <div className="section-block">
            <div className="section-header">
              <div className="section-title-row">
                <img src={asset('assets/icons/character-section.svg')} alt="" aria-hidden="true" className="section-title-icon" />
                <h3 className="section-title">캐릭터 포즈</h3>
              </div>
            </div>
            <div className="segmented segmented--two">
              <button
                type="button"
                className={`segmented-item${editCharacterPose === 'default' ? ' is-active' : ''}`}
                onClick={() => setEditCharacterPose('default')}
              >
                포즈없음
              </button>
              <button
                type="button"
                className={`segmented-item${editCharacterPose === 't' ? ' is-active' : ''}${editCharacterType === '4' ? ' is-disabled' : ''}`}
                onClick={() => {
                  if (editCharacterType === '4') return; // 4족일 때 T포즈 클릭 방지
                  setEditCharacterPose('t');
                }}
                disabled={editCharacterType === '4'}
                aria-disabled={editCharacterType === '4'}
                title={editCharacterType === '4' ? '4족에서는 T포즈를 사용할 수 없습니다.' : undefined}
              >
                T포즈
              </button>
            </div>
          </div>
        </>
      ) : null}

      {!isEdit ? (
        <div className={`sidebar-prompt-actions${composedPrefix ? ' has-prefix' : ''}`}>
          <div className="section-block section-block--prompt">
            <div className="section-header section-header--with-hint">
              <div className="section-title-row">
                <img src={asset('assets/icons/prompt-section.svg')} alt="" aria-hidden="true" className="section-title-icon" />
                <h2 className="section-title">프롬프트</h2>
              </div>
              <span className="section-hint">선택한 생성 개체 프롬프트는 자동 입력됩니다.</span>
            </div>
            {composedPrefix ? (
              <div className="prompt-prefix-card" aria-label="자동 입력 프롬프트">
                <div ref={prefixBoxRef} className="prompt-prefix-text" title={composedPrefix}>{prefixTail}</div>
                <button
                  type="button"
                  className="prompt-prefix-expand"
                  aria-label="전체 프롬프트 열기"
                  onClick={() => setPromptModalOpen(true)}
                >
                  <img src={asset('assets/icons/expand.svg')} alt="" aria-hidden="true" />
                </button>
              </div>
            ) : null}
            <div className="prompt-card">
              <textarea
                ref={promptInputRef}
                value={prompt}
                onChange={(event) => onPromptChange(event.target.value)}
                className="prompt-input"
                style={{ fontSize: '14px', lineHeight: 1.45 }}
                placeholder="생성할 이미지의 추가 설명을 입력하세요."
              />
            </div>
          </div>
          <button type="button" className="generate-cta" onClick={onGenerate} disabled={!canGenerate}>
            <img src={asset('assets/icons/generate.svg')} alt="" aria-hidden="true" className="generate-cta-icon" />
            생성하기
          </button>
        </div>
      ) : (
        <div className={`sidebar-prompt-actions${composedPrefix ? ' has-prefix' : ''}`}>
          <div className="section-block section-block--prompt">
            <div className="section-header section-header--with-hint">
              <div className="section-title-row">
                <img src={asset('assets/icons/prompt-section.svg')} alt="" aria-hidden="true" className="section-title-icon" />
                <h2 className="section-title">프롬프트</h2>
              </div>
              <span className="section-hint">선택한 생성 개체 프롬프트는 자동 입력됩니다.</span>
            </div>
            {composedPrefix ? (
              <div className="prompt-prefix-card" aria-label="자동 입력 프롬프트">
                <div ref={prefixBoxRef} className="prompt-prefix-text" title={composedPrefix}>{prefixTail}</div>
                <button
                  type="button"
                  className="prompt-prefix-expand"
                  aria-label="전체 프롬프트 열기"
                  onClick={() => setPromptModalOpen(true)}
                >
                  <img src={asset('assets/icons/expand.svg')} alt="" aria-hidden="true" />
                </button>
              </div>
            ) : null}
            <div className="prompt-card">
              <textarea
                ref={promptInputRef}
                value={prompt}
                onChange={(event) => onPromptChange(event.target.value)}
                className="prompt-input"
                style={{ fontSize: '14px', lineHeight: 1.45 }}
                placeholder="수정할 이미지의 설명을 입력하세요."
              />
            </div>
          </div>
          <button
            type="button"
            className="generate-cta"
            onClick={() => {
              const sanitizedStyle = (editActiveTab === 'keep' && (selectedStyle === 'neon' || selectedStyle === 'gameart')) ? '' : selectedStyle;
              onEditSubmit?.({ tab: editActiveTab, styleId: sanitizedStyle, backgroundEnabled, userPrompt: prompt, characterType: editCharacterType, pose: editCharacterPose });
            }}
          >
            <img src={asset('assets/icons/generate.svg')} alt="" aria-hidden="true" className="generate-cta-icon" />
            수정하기
          </button>
        </div>
      )}

        {isPromptModalOpen
          ? ReactDOM.createPortal(
              (
                <div className="prompt-modal" role="dialog" aria-modal="true" aria-label="전체 프롬프트">
                  <div className="prompt-modal__backdrop" onClick={() => setPromptModalOpen(false)} />
                  <div className="prompt-modal__card">
                    <div className="prompt-modal__header">
                      <h3 className="prompt-modal__title">전체 프롬프트</h3>
                      <button type="button" className="prompt-modal__close" aria-label="닫기" onClick={() => setPromptModalOpen(false)}>✕</button>
                    </div>
                    <div className="prompt-modal__body">
                      <pre className="prompt-modal__text">{[prompt.trim(), promptPrefix.trim()].filter(Boolean).join('\n')}</pre>
                    </div>
                  </div>
                </div>
              ),
              document.body
            )
          : null}
    </aside>
  );
}
