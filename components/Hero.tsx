import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

interface HeroProps {
  subtitle?: string;
  image?: string;
  isLarge?: boolean;
  ctas?: { label: string; secondary?: boolean; path?: string }[];
  breadcrumb?: string;
  onNavigate?: (path: string) => void;
}

const Hero: React.FC<HeroProps> = ({
  subtitle,
  image = '/school.jpeg',
  isLarge = true,
  ctas,
  breadcrumb,
  onNavigate,
}) => {
  return (
    <section
      className={`relative w-full overflow-hidden flex flex-col justify-end ${
        isLarge
          ? 'min-h-[85vh] xs:min-h-[88vh] sm:min-h-[90vh] md:min-h-[92vh] lg:min-h-[94vh] xl:min-h-[95vh] 2xl:min-h-[96vh]'
          : 'min-h-[50vh] sm:min-h-[55vh] lg:min-h-[60vh] py-20 sm:py-24 lg:py-32'
      }`}
    >
      {/* Background image with parallax-friendly layer */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full"
        >
          <img
            src={image}
            alt="Mentor Junior School Busula campus"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        <div
          className="absolute inset-0 bg-linear-to-r from-black/85 via-gray-900/50 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-maroon/25 via-transparent to-transparent pointer-events-none"
          aria-hidden
        />
      </div>

      <div
        className="absolute left-0 top-0 bottom-0 w-1 bg-maroon z-10 hidden lg:block"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-content mx-auto xl:max-w-content-xl 2xl:max-w-content-2xl px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-20 sm:pb-24 lg:pb-28 xl:pb-32 2xl:pb-36 pt-28 sm:pt-32 md:pt-36 lg:pt-0">
        <div className="max-w-2xl xl:max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gold text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] sm:tracking-[0.35em] mb-4 sm:mb-6"
          >
            Mentor Junior School — Busula
          </motion.p>

          <div className="editorial-text space-y-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white tracking-tight leading-[1.08]"
            >
              Shaping
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white tracking-tight leading-[1.08] -mt-0.5"
            >
              Future Leaders
            </motion.h1>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="origin-left h-0.5 w-16 sm:w-24 bg-maroon mt-4 sm:mt-6"
            aria-hidden
          />

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-4 sm:mt-6 text-sm xs:text-base sm:text-lg xl:text-xl text-white/90 leading-relaxed max-w-xl font-light"
            >
              {subtitle}
            </motion.p>
          )}

          {ctas && ctas.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              {ctas.map((cta, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => cta.path && onNavigate?.(cta.path)}
                  className={
                    cta.secondary
                      ? 'inline-flex items-center gap-2 bg-white text-black border border-gray-300 hover:bg-gray-50 hover:border-gray-400 rounded-xl px-4 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-bold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 active:scale-[0.98]'
                      : 'inline-flex items-center gap-2 bg-white text-black border border-gray-300 hover:bg-gray-50 hover:border-gray-400 rounded-xl px-4 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-bold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 active:scale-[0.98]'
                  }
                >
                  <span>{cta.label}</span>
                  {!cta.secondary && <ArrowRight size={18} className="shrink-0" />}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {isLarge && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-0 left-0 right-0 flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-12 xl:px-16 py-3 sm:py-4 bg-black/30 backdrop-blur-sm border-t border-white/10"
          >
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold shrink-0" aria-hidden />
            <span className="text-white/70 text-xs sm:text-sm">
              Est. 2008 · Busula Town, near Mukama Mulungi Petrol Station, Luwero
            </span>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
