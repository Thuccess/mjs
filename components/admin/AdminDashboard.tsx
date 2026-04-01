import React, { useEffect, useState } from 'react';
import {
  ADMIN_ACTIVITY,
  ADMIN_KPIS,
  FEE_STATUS_SUMMARY,
  RESULTS_OVERVIEW_SUMMARY,
  UPCOMING_EVENTS_SUMMARY,
} from '../../constants/admin';
import ActivityList from './ActivityList';
import KpiCard from './KpiCard';
import QuickActions from './QuickActions';
import SummaryPanel from './SummaryPanel';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 700);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-maroon">Admin</span>
            <h1 className="editorial-text mt-2 text-3xl font-light text-gray-900 sm:text-4xl lg:text-5xl">Dashboard</h1>
            <p className="mt-2 max-w-2xl text-sm text-gray-600 sm:text-base">
              Monitor school operations and perform quick actions from one place.
            </p>
          </div>
          <button
            type="button"
            onClick={onLogout}
            className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-black transition-all hover:border-gray-400 hover:bg-gray-50"
          >
            Logout
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {(loading ? [undefined, undefined, undefined, undefined] : ADMIN_KPIS).map((item, index) => (
            <KpiCard key={item?.id ?? `kpi-skeleton-${index}`} item={item} loading={loading} />
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ActivityList items={ADMIN_ACTIVITY} loading={loading} />
          </div>
          <div>
            <QuickActions loading={loading} />
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <SummaryPanel title="Fee Status Summary" items={FEE_STATUS_SUMMARY} loading={loading} showProgress />
          <SummaryPanel title="Upcoming Events" items={UPCOMING_EVENTS_SUMMARY} loading={loading} />
          <SummaryPanel title="Results Overview" items={RESULTS_OVERVIEW_SUMMARY} loading={loading} />
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
