import React from 'react';
import { motion } from 'framer-motion';
import { MOCK_RESULTS } from '../constants';

interface ResultsTableProps {
  onViewAll?: () => void;
}

const ResultsTable: React.FC<ResultsTableProps> = ({ onViewAll }) => {
  return (
    <div className="mb-16 sm:mb-20 lg:mb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
        {MOCK_RESULTS.slice(0, 6).map((result, idx) => (
          <motion.div
            key={result.indexNumber}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="p-5 sm:p-6 lg:p-8 xl:p-10 rounded-xl sm:rounded-2xl bg-white border border-gray-100 shadow-lg shadow-black/5 hover:shadow-xl hover:border-maroon/20 transition-all duration-200"
          >
            <div className="flex justify-between items-start mb-3 sm:mb-4">
              <span className="text-gray-400 text-[10px] sm:text-xs font-mono tracking-wider">
                {result.indexNumber}
              </span>
              <span className="text-royal text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                Division {result.division}
              </span>
            </div>
            <h3 className="editorial-text text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 mb-3 sm:mb-4">
              {result.name}
            </h3>
            <div className="flex items-end gap-2 sm:gap-3">
              <span className="editorial-text text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-none">
                {result.aggregates}
              </span>
              <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-1 sm:mb-2">
                Aggregates / P.L.E {result.year}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 sm:mt-14 lg:mt-16 pt-12 sm:pt-14 lg:pt-16 border-t border-gray-200 flex justify-center">
        <button
          type="button"
          onClick={onViewAll}
          className="inline-flex items-center justify-center bg-white text-black border border-gray-300 hover:bg-gray-50 hover:border-gray-400 rounded-xl px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 active:scale-[0.98]"
        >
          View all records
        </button>
      </div>
    </div>
  );
};

export default ResultsTable;
