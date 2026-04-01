import React from 'react';
import Button from '../Button';

interface QuickActionsProps {
  loading?: boolean;
}

const actionButtons = ['Add Notice', 'Publish Event', 'Upload Results'];

const QuickActions: React.FC<QuickActionsProps> = ({ loading = false }) => {
  if (loading) {
    return (
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md shadow-black/5">
        <div className="mb-5 h-6 w-36 animate-pulse rounded bg-gray-200" />
        <div className="space-y-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="h-11 w-full animate-pulse rounded-xl bg-gray-200" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md shadow-black/5">
      <h3 className="editorial-text text-2xl font-light text-gray-900">Quick Actions</h3>
      <div className="mt-5 grid gap-3">
        {actionButtons.map((label) => (
          <Button key={label} className="w-full justify-between">
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
