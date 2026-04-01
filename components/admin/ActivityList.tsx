import React from 'react';
import { ActivityItem } from '../../types';

interface ActivityListProps {
  items: ActivityItem[];
  loading?: boolean;
}

const ActivityList: React.FC<ActivityListProps> = ({ items, loading = false }) => {
  if (loading) {
    return (
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md shadow-black/5">
        <div className="mb-5 h-6 w-40 animate-pulse rounded bg-gray-200" />
        <div className="space-y-4">
          {[1, 2, 3].map((skeleton) => (
            <div key={skeleton} className="rounded-xl border border-gray-100 p-4">
              <div className="h-3 w-48 animate-pulse rounded bg-gray-200" />
              <div className="mt-3 h-3 w-24 animate-pulse rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md shadow-black/5">
      <h3 className="editorial-text text-2xl font-light text-gray-900">Recent Activity</h3>
      {items.length === 0 ? (
        <p className="mt-4 text-sm text-gray-500">No recent activity yet.</p>
      ) : (
        <ul className="mt-5 space-y-4">
          {items.map((item) => {
            const statusClass =
              item.status === 'completed' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700';

            return (
              <li key={item.id} className="rounded-xl border border-gray-100 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-medium text-gray-900">{item.label}</p>
                  <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${statusClass}`}>
                    {item.status}
                  </span>
                </div>
                <p className="mt-2 text-xs text-gray-500">{item.timestamp}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ActivityList;
