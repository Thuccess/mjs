import React from 'react';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ number, title, subtitle }) => (
    <div className="mb-10 sm:mb-12 lg:mb-16 xl:mb-20 w-full max-w-content mx-auto xl:max-w-content-xl 2xl:max-w-content-2xl px-4 xs:px-5 sm:px-6 lg:px-8">
    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
      <span className="text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-5xl font-bold text-maroon tabular-nums">{number}</span>
      <div className="h-0.5 flex-1 bg-gold max-w-[60px] sm:max-w-[80px]" aria-hidden />
    </div>
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6">
      <h2 className="editorial-text text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-gray-900 tracking-tight">
        {title}
      </h2>
      <p className="max-w-md text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed lg:mb-1">
        {subtitle}
      </p>
    </div>
  </div>
);

export default SectionHeader;
