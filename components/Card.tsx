import React from 'react';

interface CardProps {
  title: string;
  desc?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, desc, icon, children, className = '' }) => (
  <div
    className={`p-5 sm:p-6 lg:p-8 xl:p-10 rounded-xl sm:rounded-2xl bg-white border border-gray-100 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 hover:border-maroon/20 transition-all duration-200 ${className}`}
  >
    {icon && (
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-royal/10 flex items-center justify-center text-royal mb-4 sm:mb-6">
        {icon}
      </div>
    )}
    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{title}</h3>
    {desc && <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-4 sm:mb-6">{desc}</p>}
    {children}
  </div>
);

export default Card;
