import React from 'react';
import { AdminKPI } from '../../types';

interface KpiCardProps {
  item?: AdminKPI;
  loading?: boolean;
}

const KpiCard: React.FC<KpiCardProps> = ({ item, loading = false }) => {
  if (loading) {
    return (
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md shadow-black/5">
        <div className="h-3 w-28 animate-pulse rounded bg-gray-200" />
        <div className="mt-4 h-8 w-20 animate-pulse rounded bg-gray-200" />
        <div className="mt-5 h-5 w-16 animate-pulse rounded-full bg-gray-200" />
      </div>
    );
  }

  if (!item) {
    return (
      <div className="rounded-2xl border border-gray-100 bg-white p-6 text-sm text-gray-500 shadow-md shadow-black/5">
        No KPI data available.
      </div>
    );
  }

  const statusClass =
    item.status === 'completed' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700';

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md shadow-black/5">
      <p className="text-xs font-bold uppercase tracking-widest text-gray-500">{item.label}</p>
      <p className="editorial-text mt-3 text-3xl font-light text-gray-900">{item.value}</p>
      <span className={`mt-4 inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${statusClass}`}>
        {item.status}
      </span>
    </div>
  );
};

export default KpiCard;
