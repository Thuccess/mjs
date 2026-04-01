import React from 'react';

interface StepUIProps {
  number: string;
  title: string;
  desc: string;
}

const StepUI: React.FC<StepUIProps> = ({ number, title, desc }) => (
  <div className="flex gap-4 sm:gap-6 items-start p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-white border border-gray-100 shadow-md shadow-black/5 hover:border-maroon/20 transition-colors">
    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold/50 tabular-nums shrink-0">{number}</span>
    <div className="space-y-1 sm:space-y-2 min-w-0">
      <h4 className="font-bold uppercase tracking-wide text-xs sm:text-sm lg:text-base text-gray-900">{title}</h4>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default StepUI;
