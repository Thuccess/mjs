import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-28 xl:py-32 2xl:py-36 bg-royal/5 border-b border-royal/10">
      <div className="w-full max-w-content mx-auto xl:max-w-content-xl 2xl:max-w-content-2xl px-4 xs:px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-5 sm:p-6 lg:p-8 xl:p-10 rounded-xl sm:rounded-2xl bg-white border border-gray-100 shadow-lg shadow-black/5 hover:shadow-xl hover:border-maroon/20 transition-all duration-200"
            >
              <div className="text-maroon text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-3 sm:mb-4">
                {stat.label}
              </div>
              <div className="flex items-end space-x-2 mb-3 sm:mb-4">
                <span className="text-4xl xs:text-5xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-none tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gold mb-1">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-gray-500 font-medium leading-relaxed max-w-[140px] sm:max-w-[160px]">
                Ensuring consistent quality across every academic year.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
