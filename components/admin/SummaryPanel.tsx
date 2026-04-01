import React from 'react';
import { SummaryItem } from '../../types';

interface SummaryPanelProps {
  title: string;
  items: SummaryItem[];
  loading?: boolean;
  showProgress?: boolean;
}

const getPercent = (value: string): number | null => {
  if (!value.endsWith('%')) {
    return null;
  }

  const parsed = Number(value.replace('%', '').trim());
  return Number.isNaN(parsed) ? null : Math.max(0, Math.min(100, parsed));
};

const SummaryPanel: React.FC<SummaryPanelProps> = ({ title, items, loading = false, showProgress = false }) => {
  if (loading) {
    return (
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md shadow-black/5">
        <div className="mb-5 h-6 w-40 animate-pulse rounded bg-gray-200" />
        <div className="space-y-4">
          {[1, 2, 3].map((skeleton) => (
            <div key={skeleton}>
              <div className="h-3 w-44 animate-pulse rounded bg-gray-200" />
              <div className="mt-2 h-2.5 w-full animate-pulse rounded-full bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md shadow-black/5">
      <h3 className="editorial-text text-2xl font-light text-gray-900">{title}</h3>
      {items.length === 0 ? (
        <p className="mt-4 text-sm text-gray-500">No summary data available.</p>
      ) : (
        <ul className="mt-5 space-y-4">
          {items.map((item) => {
            const statusClass =
              item.status === 'completed' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700';
            const percentage = showProgress ? getPercent(item.value) : null;

            return (
              <li key={item.id}>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm text-gray-700">{item.title}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-900">{item.value}</span>
                    <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${statusClass}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
                {percentage !== null && (
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full rounded-full bg-maroon" style={{ width: `${percentage}%` }} />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SummaryPanel;
