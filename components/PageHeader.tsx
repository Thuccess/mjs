import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  breadcrumb: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, breadcrumb }) => (
  <header className="pt-28 sm:pt-32 lg:pt-36 xl:pt-40 pb-12 sm:pb-14 lg:pb-16 xl:pb-20 bg-royal/5 border-b border-royal/10">
    <div className="h-1 w-full bg-maroon" />
    <div className="w-full max-w-content mx-auto xl:max-w-content-xl 2xl:max-w-content-2xl px-4 xs:px-5 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12">
      <p className="text-royal text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-4 sm:mb-6">
        {breadcrumb}
      </p>
      <h1 className="editorial-text text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-gray-900 tracking-tight mb-4 sm:mb-6 leading-[1.1]">
        {title}
      </h1>
      <p className="max-w-2xl text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
        {description}
      </p>
    </div>
  </header>
);

export default PageHeader;
