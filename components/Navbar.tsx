import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOGO_URL } from '../constants';

interface NavbarProps {
  onNavigate: (path: string) => void;
  currentPath: string;
}

const navLinkClass = (active: boolean) =>
  `relative text-sm font-semibold tracking-wide transition-colors cursor-pointer py-4 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2 dark:focus-visible:ring-gold dark:focus-visible:ring-offset-black active:opacity-80 ${
    active
      ? 'text-maroon dark:text-gold'
      : 'text-gray-700 dark:text-gray-300 hover:text-maroon dark:hover:text-gold'
  }`;

const DropdownItem = ({
  title,
  items,
  onNavigate,
  currentPath,
}: {
  title: string;
  items: { name: string; path: string }[];
  onNavigate: (path: string) => void;
  currentPath: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = items.some((i) => i.path === currentPath);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className={`flex items-center gap-1.5 py-4 px-1 text-sm font-semibold tracking-wide transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2 dark:focus-visible:ring-gold dark:focus-visible:ring-offset-black active:opacity-80 ${
          isActive
            ? 'text-maroon dark:text-gold'
            : 'text-gray-700 dark:text-gray-300 hover:text-maroon dark:hover:text-gold'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{title}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-maroon dark:text-gold' : ''}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 pt-1 z-[60]"
          >
            <div className="min-w-[220px] rounded-lg border border-gray-300 bg-white shadow-xl overflow-hidden">
              <div>
                {items.map((item) => (
                  <button
                    key={item.path}
                    type="button"
                    onClick={() => onNavigate(item.path)}
                    className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors cursor-pointer flex items-center justify-between gap-3 bg-white text-black border-b border-gray-200 last:border-b-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gray-400 active:scale-[0.99] hover:bg-gray-50 ${
                      currentPath === item.path ? 'bg-gray-100 font-semibold' : ''
                    }`}
                  >
                    <span>{item.name}</span>
                    <ArrowRight size={14} className="opacity-60 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPath }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const academicItems = [
    { name: 'Nursery Section', path: 'nursery' },
    { name: 'Primary Section', path: 'primary' },
    { name: 'Curriculum (UNEB)', path: 'curriculum' },
    { name: 'Co-Curricular', path: 'cocurricular' },
    { name: 'Academic Calendar', path: 'calendar' },
  ];

  const admissionItems = [
    { name: 'How to Apply', path: 'apply' },
    { name: 'Requirements', path: 'requirements' },
    { name: 'Fees Structure', path: 'fees' },
    { name: 'Scholarships', path: 'scholarships' },
    { name: 'Download Forms', path: 'forms' },
  ];

  const studentLifeItems = [
    { name: 'Sports', path: 'sports' },
    { name: 'Clubs & Activities', path: 'clubs' },
    { name: 'School Events', path: 'events' },
    { name: 'Gallery', path: 'gallery' },
  ];

  const resourceItems = [
    { name: 'News & Blog', path: 'news' },
    { name: 'Announcements', path: 'announcements' },
    { name: 'FAQs', path: 'faqs' },
    { name: 'School Policies', path: 'policies' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    window.location.hash = path;
    setIsMobileMenuOpen(false);
  };

  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const toggleMobileExpand = (key: string) =>
    setMobileExpanded((prev) => (prev === key ? null : key));

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm'
            : 'bg-white dark:bg-black border-b border-gray-100 dark:border-gray-900'
        }`}
      >
        {/* Maroon accent strip */}
        <div className="h-1 w-full bg-maroon dark:bg-gold" />

        <div className="w-full max-w-content mx-auto xl:max-w-content-xl 2xl:max-w-content-2xl px-4 xs:px-5 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 xs:h-16 sm:h-[4.25rem] lg:h-[4.5rem] xl:h-20">
            {/* Logo */}
            <button
              type="button"
              onClick={() => handleLinkClick('home')}
              className="flex items-center shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2 rounded hover:opacity-90 active:scale-95 transition-transform"
            >
              <img
                src={LOGO_URL}
                alt="Mentor Junior School Busula"
                className="h-10 xs:h-11 sm:h-12 lg:h-[3.25rem] xl:h-14 w-auto object-contain dark:brightness-110"
              />
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              <button
                onClick={() => handleLinkClick('home')}
                className={navLinkClass(currentPath === 'home')}
              >
                Home
              </button>
              <button
                onClick={() => handleLinkClick('about')}
                className={navLinkClass(currentPath === 'about')}
              >
                About
              </button>
              <DropdownItem
                title="Academics"
                items={academicItems}
                onNavigate={handleLinkClick}
                currentPath={currentPath}
              />
              <button
                onClick={() => handleLinkClick('results')}
                className={navLinkClass(currentPath === 'results')}
              >
                Results
              </button>
              <DropdownItem
                title="Admissions"
                items={admissionItems}
                onNavigate={handleLinkClick}
                currentPath={currentPath}
              />
              <DropdownItem
                title="Student Life"
                items={studentLifeItems}
                onNavigate={handleLinkClick}
                currentPath={currentPath}
              />
              <DropdownItem
                title="Resources"
                items={resourceItems}
                onNavigate={handleLinkClick}
                currentPath={currentPath}
              />
              <button
                onClick={() => handleLinkClick('contact')}
                className={navLinkClass(currentPath === 'contact')}
              >
                Contact
              </button>
            </div>

            {/* Right: CTA */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                type="button"
                onClick={() => handleLinkClick('apply')}
                className="hidden sm:inline-flex items-center gap-2 bg-white text-black border border-gray-300 hover:bg-gray-50 hover:border-gray-400 rounded-xl px-4 py-2.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 active:scale-[0.98]"
              >
                Apply Now
                <ArrowRight size={16} />
              </button>
              <button
                type="button"
                className="lg:hidden p-2.5 rounded-lg bg-white text-black border border-gray-300 hover:bg-gray-50 hover:border-gray-400 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 active:scale-95 transition-transform"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-[100] bg-gray-900/20 dark:bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 200 }}
            className="lg:hidden fixed top-0 right-0 bottom-0 w-full max-w-[min(24rem,100vw)] sm:max-w-sm z-[101] bg-white dark:bg-gray-950 shadow-2xl overflow-y-auto"
          >
            <div className="h-1 w-full bg-maroon dark:bg-gold shrink-0" />
            <div className="p-6 pt-8">
              <div className="flex justify-between items-center mb-8">
                <img
                  src={LOGO_URL}
                  alt="Mentor Junior School"
                  className="h-10 object-contain dark:brightness-110"
                />
                <button
                  type="button"
                  className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer active:scale-95 transition-transform"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={28} />
                </button>
              </div>

              <nav className="flex flex-col gap-1">
                {[
                  { label: 'Home', path: 'home' },
                  { label: 'About', path: 'about' },
                  { label: 'Results', path: 'results' },
                ].map(({ label, path }) => (
                  <button
                    key={path}
                    type="button"
                    onClick={() => handleLinkClick(path)}
                    className={`flex items-center justify-between py-4 px-4 rounded-lg text-left text-base font-semibold transition-colors cursor-pointer min-h-[48px] active:scale-[0.99] ${
                      currentPath === path
                        ? 'bg-maroon/10 dark:bg-gold/10 text-maroon dark:text-gold'
                        : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {label}
                    <ArrowRight size={18} className="opacity-60" />
                  </button>
                ))}

                {[
                  { key: 'academics', label: 'Academics', items: academicItems },
                  { key: 'admissions', label: 'Admissions', items: admissionItems },
                  { key: 'studentlife', label: 'Student Life', items: studentLifeItems },
                  { key: 'resources', label: 'Resources', items: resourceItems },
                ].map(({ key, label, items }) => (
                  <div key={key}>
                    <button
                      type="button"
                      onClick={() => toggleMobileExpand(key)}
                      className="flex items-center justify-between w-full py-4 px-4 rounded-lg text-left text-base font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 min-h-[48px] cursor-pointer active:scale-[0.99]"
                    >
                      {label}
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${mobileExpanded === key ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileExpanded === key && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4 border-l-2 border-maroon/30 dark:border-gold/30 ml-4"
                        >
                          {items.map((item) => (
                            <button
                              key={item.path}
                              type="button"
                              onClick={() => handleLinkClick(item.path)}
                              className={`block w-full text-left py-3 px-2 text-sm font-medium rounded min-h-[44px] cursor-pointer active:opacity-80 ${
                                currentPath === item.path
                                  ? 'text-maroon dark:text-gold'
                                  : 'text-gray-600 dark:text-gray-400 hover:text-maroon dark:hover:text-gold'
                              }`}
                            >
                              {item.name}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => handleLinkClick('contact')}
                  className={`flex items-center justify-between py-4 px-4 rounded-lg text-left text-base font-semibold transition-colors cursor-pointer min-h-[48px] active:scale-[0.99] ${
                    currentPath === 'contact'
                      ? 'bg-maroon/10 dark:bg-gold/10 text-maroon dark:text-gold'
                      : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  Contact
                  <ArrowRight size={18} className="opacity-60" />
                </button>
              </nav>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                <button
                  type="button"
                  onClick={() => handleLinkClick('apply')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-white text-black border border-gray-300 hover:bg-gray-50 hover:border-gray-400 rounded-xl py-3.5 text-sm font-bold transition-all cursor-pointer active:scale-[0.98]"
                >
                  Apply Now
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
