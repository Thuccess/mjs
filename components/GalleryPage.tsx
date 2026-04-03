import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from './PageHeader';
import ContentSection from './ContentSection';

type GalleryManifest = { files: string[] };

function labelFromUrl(url: string): string {
  try {
    const name = url.replace(/^.*\/gallery\//, '').replace(/\+/g, ' ');
    return decodeURIComponent(name).replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').trim() || 'School photo';
  } catch {
    return 'School photo';
  }
}

const GalleryPage: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    fetch('/gallery/manifest.json')
      .then((r) => {
        if (!r.ok) throw new Error('Could not load gallery list.');
        return r.json() as Promise<GalleryManifest>;
      })
      .then((data) => {
        if (!cancelled) setImages(Array.isArray(data.files) ? data.files : []);
      })
      .catch(() => {
        if (!cancelled) setError('Gallery is temporarily unavailable. Please try again later.');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const count = images.length;
  const goNext = useCallback(() => {
    if (count === 0) return;
    setDirection(1);
    setCurrentIndex((i) => (i + 1) % count);
  }, [count]);

  const goPrev = useCallback(() => {
    if (count === 0) return;
    setDirection(-1);
    setCurrentIndex((i) => (i - 1 + count) % count);
  }, [count]);

  useEffect(() => {
    if (count === 0) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [count, goNext, goPrev]);

  useEffect(() => {
    const el = thumbnailsRef.current?.children[currentIndex] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [currentIndex]);

  const focusCarousel = () => {
    carouselRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleGridClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    focusCarousel();
  };

  const currentSrc = images[currentIndex];
  const currentLabel = currentSrc ? labelFromUrl(currentSrc) : '';

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 48 : -48 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir < 0 ? 48 : -48 }),
  };

  return (
    <>
      <PageHeader
        title="School Gallery"
        description="Moments from campus life, learning, and community—updated from our photo collection."
        breadcrumb="Student Life / Gallery"
      />
      <ContentSection>
        {error ? (
          <p className="text-center text-gray-600 py-12" role="alert">
            {error}
          </p>
        ) : images.length === 0 ? (
          <p className="text-center text-gray-600 py-12">No photos in the gallery folder yet.</p>
        ) : (
          <div className="space-y-10 sm:space-y-12">
            <section
              ref={carouselRef}
              className="rounded-2xl border border-gray-100 bg-gray-50/80 shadow-lg shadow-black/5 overflow-hidden"
              aria-roledescription="carousel"
              aria-label="Photo carousel"
            >
              <div className="relative aspect-4/3 max-h-[min(72vh,820px)] min-h-[220px] sm:min-h-[280px] bg-black/90">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.img
                    key={currentSrc}
                    src={currentSrc}
                    alt={currentLabel}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 w-full h-full object-contain"
                    draggable={false}
                  />
                </AnimatePresence>

                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 via-black/35 to-transparent pt-16 pb-4 px-4 sm:px-6 pointer-events-none">
                  <p className="editorial-text text-white text-base sm:text-lg font-light text-center line-clamp-2 drop-shadow-sm">
                    {currentLabel}
                  </p>
                  <p className="text-center text-amber-200/90 text-xs font-mono mt-1.5 tabular-nums">
                    {currentIndex + 1} / {count}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous image"
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/95 text-gray-900 border border-gray-200 shadow-lg hover:bg-white hover:border-gray-300 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2 active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 -ml-0.5" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next image"
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/95 text-gray-900 border border-gray-200 shadow-lg hover:bg-white hover:border-gray-300 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2 active:scale-95"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 -mr-0.5" aria-hidden />
                </button>
              </div>

              <div
                ref={thumbnailsRef}
                role="tablist"
                aria-label="Gallery thumbnails"
                className="flex gap-2 sm:gap-3 overflow-x-auto p-3 sm:p-4 bg-white border-t border-gray-100 snap-x snap-mandatory"
              >
                {images.map((src, i) => {
                  const active = i === currentIndex;
                  return (
                    <button
                      key={src}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      aria-label={`Show image ${i + 1}: ${labelFromUrl(src)}`}
                      onClick={() => {
                        setDirection(i > currentIndex ? 1 : -1);
                        setCurrentIndex(i);
                      }}
                      className={`relative shrink-0 snap-center rounded-lg overflow-hidden border-2 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2 ${
                        active ? 'border-maroon ring-2 ring-maroon/25 scale-[1.02]' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={src}
                        alt=""
                        className="h-14 w-20 sm:h-16 sm:w-24 object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
                  );
                })}
              </div>
            </section>

            <div>
              <h2 className="editorial-text text-xl sm:text-2xl font-light text-gray-900 mb-4 sm:mb-6">
                Browse all photos
              </h2>
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {images.map((src, i) => {
                  const label = labelFromUrl(src);
                  const active = i === currentIndex;
                  return (
                    <button
                      key={src}
                      type="button"
                      onClick={() => handleGridClick(i)}
                      className={`break-inside-avoid w-full text-left overflow-hidden rounded-2xl relative group shadow-lg shadow-black/5 border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2 active:scale-[0.99] ${
                        active ? 'border-maroon ring-2 ring-maroon/20' : 'border-gray-100 hover:border-maroon/30'
                      }`}
                    >
                      <img
                        src={src}
                        alt={label}
                        loading="lazy"
                        decoding="async"
                        className="w-full grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 pointer-events-none">
                        <span className="text-[9px] font-bold text-amber-200 uppercase tracking-widest mb-1">Gallery</span>
                        <h3 className="editorial-text text-white text-lg font-light line-clamp-2">{label}</h3>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </ContentSection>
    </>
  );
};

export default GalleryPage;
