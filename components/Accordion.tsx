import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  q: string;
  a: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3 sm:space-y-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-xl sm:rounded-2xl border border-gray-300 bg-white shadow-md shadow-black/5 overflow-hidden"
        >
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="w-full p-4 sm:p-6 lg:p-8 flex justify-between items-center text-left bg-white text-black border-b border-gray-300 rounded-t-xl sm:rounded-t-2xl hover:bg-gray-50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-inset active:bg-gray-100"
          >
            <span className="font-bold uppercase tracking-wide text-xs sm:text-sm lg:text-base text-black pr-4">
              {item.q}
            </span>
            <ChevronDown
              className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform text-black ${open === i ? 'rotate-180' : ''}`}
              aria-hidden
            />
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 pt-0 text-sm sm:text-base lg:text-lg text-gray-600 font-light leading-relaxed">
                  {item.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
