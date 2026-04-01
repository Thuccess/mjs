import { ActivityItem, AdminKPI, SummaryItem } from '../types';

export const ADMIN_KPIS: AdminKPI[] = [
  { id: 'kpi-1', label: 'Total Students', value: '1,248', status: 'completed' },
  { id: 'kpi-2', label: 'Attendance Rate', value: '94%', status: 'completed' },
  { id: 'kpi-3', label: 'Fee Collection', value: '82%', status: 'pending' },
  { id: 'kpi-4', label: 'Announcements', value: '7', status: 'completed' },
];

export const ADMIN_ACTIVITY: ActivityItem[] = [
  { id: 'act-1', label: 'Results uploaded for P7 mock exam', timestamp: '2026-03-31 10:20', status: 'completed' },
  { id: 'act-2', label: 'New student registered in P4', timestamp: '2026-03-31 09:05', status: 'completed' },
  { id: 'act-3', label: 'Term 2 fee reminder drafted', timestamp: '2026-03-30 16:40', status: 'pending' },
  { id: 'act-4', label: 'Sports day event published', timestamp: '2026-03-30 14:12', status: 'completed' },
];

export const FEE_STATUS_SUMMARY: SummaryItem[] = [
  { id: 'fee-1', title: 'Paid in full', value: '68%', status: 'completed' },
  { id: 'fee-2', title: 'Partial payments', value: '24%', status: 'pending' },
  { id: 'fee-3', title: 'Outstanding', value: '8%', status: 'pending' },
];

export const UPCOMING_EVENTS_SUMMARY: SummaryItem[] = [
  { id: 'evt-1', title: 'Parents meeting', value: 'Apr 06, 2026', status: 'completed' },
  { id: 'evt-2', title: 'Mid-term exams', value: 'Apr 18, 2026', status: 'pending' },
  { id: 'evt-3', title: 'Sports gala', value: 'Apr 27, 2026', status: 'pending' },
];

export const RESULTS_OVERVIEW_SUMMARY: SummaryItem[] = [
  { id: 'res-1', title: 'Division 1 candidates', value: '116', status: 'completed' },
  { id: 'res-2', title: 'Average aggregate', value: '6.1', status: 'completed' },
  { id: 'res-3', title: 'Marked scripts pending', value: '14', status: 'pending' },
];
