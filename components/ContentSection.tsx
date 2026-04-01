import React from 'react';

interface ContentSectionProps {
  children?: React.ReactNode;
  className?: string;
  /** Alternate background for section rhythm */
  alt?: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({ children, className = '', alt = false }) => (
  <section
    className={`py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-28 w-full max-w-content mx-auto xl:max-w-content-xl 2xl:max-w-content-2xl px-4 xs:px-5 sm:px-6 lg:px-8 ${alt ? 'bg-royal/[0.04]' : ''} ${className}`}
  >
    {children}
  </section>
);

export default ContentSection;
