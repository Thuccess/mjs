import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface AdmissionsProps {
  onNavigate?: (path: string) => void;
}

const Admissions: React.FC<AdmissionsProps> = ({ onNavigate }) => {
  return (
    <section id="admissions" className="py-16 sm:py-24 lg:py-28 xl:py-32 2xl:py-36 bg-white">
      <div className="w-full max-w-content mx-auto xl:max-w-content-xl 2xl:max-w-content-2xl px-4 xs:px-5 sm:px-6 lg:px-8">
        <div className="bg-gray-50 border border-gray-100 rounded-xl sm:rounded-2xl p-6 sm:p-10 lg:p-16 xl:p-20 flex flex-col lg:flex-row items-stretch gap-10 sm:gap-12 lg:gap-16 xl:gap-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-royal/5 blur-[120px] -z-10" />

          <div className="lg:w-3/5 flex flex-col justify-center space-y-8 sm:space-y-10">
            <div className="space-y-4 sm:space-y-5">
              <span className="text-maroon font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.35em] sm:tracking-[0.4em] block">
                Join the Legacy
              </span>
              <h2 className="editorial-text text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-light leading-tight text-gray-900">
                THE PATH TO <br />
                <span className="font-bold text-maroon">ADMISSION</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-lg">
                We maintain a selective enrollment process to ensure a cohesive community of high-performing students.
              </p>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-3 gap-6 sm:gap-8">
              {[
                { title: 'Inquiry', desc: 'Secure your tour', color: 'text-maroon' },
                { title: 'Screening', desc: 'Merit assessment', color: 'text-royal' },
                { title: 'Placement', desc: 'Official induction', color: 'text-gold' },
              ].map((step, idx) => (
                <div key={idx} className="relative group">
                  <div
                    className={`text-3xl sm:text-4xl lg:text-5xl font-light editorial-text opacity-20 mb-2 sm:mb-3 transition-opacity group-hover:opacity-40 ${step.color}`}
                  >
                    0{idx + 1}
                  </div>
                  <h4 className="font-bold text-gray-900 text-xs sm:text-sm uppercase tracking-widest mb-1">
                    {step.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-light leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-x-6 sm:gap-x-10 gap-y-3 sm:gap-y-4 pt-8 sm:pt-10 border-t border-gray-200">
              <div className="flex items-center space-x-3 group">
                <CheckCircle2 className="text-maroon w-5 h-5 shrink-0" />
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider group-hover:text-maroon transition-colors">
                  Day & Boarding
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <CheckCircle2 className="text-royal w-5 h-5 shrink-0" />
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider group-hover:text-royal transition-colors">
                  Scholarships
                </span>
              </div>
            </div>
          </div>

          <div className="lg:w-2/5 flex flex-col justify-center">
            <div className="p-6 sm:p-8 lg:p-10 xl:p-12 bg-white flex flex-col items-center text-center space-y-6 sm:space-y-8 rounded-xl sm:rounded-2xl border border-gray-100 shadow-xl shadow-black/5 border-t-4 border-t-maroon">
              <div className="space-y-1 sm:space-y-2">
                <h3 className="editorial-text text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
                  Ready to Start?
                </h3>
                <p className="text-maroon text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                  Spring Intake 2026
                </p>
              </div>

              <div className="w-full space-y-3 sm:space-y-4">
                <button
                  type="button"
                  onClick={() => onNavigate?.('apply')}
                  className="w-full bg-white text-black border border-gray-300 hover:bg-gray-50 hover:border-gray-400 py-3 sm:py-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
                >
                  Apply Online
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate?.('forms')}
                  className="w-full bg-white text-black border border-gray-300 hover:bg-gray-50 hover:border-gray-400 py-3 sm:py-4 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
                >
                  Request Prospectus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
