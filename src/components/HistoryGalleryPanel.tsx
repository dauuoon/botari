import { useMemo } from 'react';

type HistoryGalleryItem = {
  id: number;
  title: string;
  kind: '2D 이미지' | '3D 에셋';
  thumbnail: string;
  createdAt: number;
  variant: 'base' | 'background-on' | 'background-off' | 'pose' | 'edit' | 'edit-prompt' | '3d';
};

type HistoryGalleryPanelProps = {
  items: HistoryGalleryItem[];
  selectedHistoryId: number | null;
  onClose: () => void;
  onSelectItem: (itemId: number) => void;
  isOpen: boolean;
};

type HistoryGroup = {
  dateLabel: string;
  items: HistoryGalleryItem[];
};

const formatDateLabel = (timestamp: number) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
};

export function HistoryGalleryPanel({ items, selectedHistoryId, onClose, onSelectItem, isOpen }: HistoryGalleryPanelProps) {
  const groupedItems = useMemo<HistoryGroup[]>(() => {
    const sortedItems = [...items].sort((left, right) => right.createdAt - left.createdAt);
    const groups = new Map<string, HistoryGalleryItem[]>();

    sortedItems.forEach((item) => {
      const dateLabel = formatDateLabel(item.createdAt);
      const nextItems = groups.get(dateLabel) ?? [];

      nextItems.push(item);
      groups.set(dateLabel, nextItems);
    });

    return Array.from(groups.entries()).map(([dateLabel, grouped]) => ({ dateLabel, items: grouped }));
  }, [items]);

  return (
    <div className={`history-gallery-panel${isOpen ? ' is-open' : ''}`} aria-label="히스토리 목록 화면">
      <header className="history-gallery-panel__header">
        <div className="history-gallery-panel__title-block">
          <h2 className="history-gallery-panel__title">히스토리 ({items.length})</h2>
        </div>
        <button type="button" className="scroll-top-button scroll-top-button--rotated" aria-label="히스토리 닫기" onClick={onClose}>
          <img src="/assets/icons/chevron-up-double.svg" alt="" aria-hidden="true" className="scroll-top-icon" />
        </button>
      </header>

      <div className="history-gallery-panel__body">
        {groupedItems.length > 0 ? (
          groupedItems.map((group) => (
            <section key={group.dateLabel} className="history-gallery-group">
              <div className="history-gallery-group__header">
                <span className="history-gallery-group__date">{group.dateLabel}</span>
                <span className="history-gallery-group__rule" aria-hidden="true" />
              </div>
              <div className="history-gallery-grid">
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`history-gallery-card${selectedHistoryId === item.id ? ' is-selected' : ''}`}
                    onClick={() => onSelectItem(item.id)}
                    aria-label={`${item.kind} ${group.dateLabel} 선택`}
                  >
                    <img src={item.thumbnail} alt="" aria-hidden="true" className={`history-gallery-card__image history-gallery-card__image--${item.variant}`} />
                  </button>
                ))}
              </div>
            </section>
          ))
        ) : (
          <div className="history-gallery-empty">
            <p className="history-gallery-empty__title">히스토리 내역이 없습니다.</p>
            <p className="history-gallery-empty__text">2D 또는 3D 이미지를 생성하면 여기에 목록으로 표시됩니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
