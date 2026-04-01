import React from 'react';
import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { LOGO_URL } from '../constants';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleClick = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
      window.location.hash = path;
    }
  };

  const footerSections = [
    {
      title: 'School',
      links: [
        { name: 'Home', path: 'home' },
        { name: 'About Us', path: 'about' },
        { name: 'Academics', path: 'curriculum' },
        { name: 'Contact', path: 'contact' },
        { name: 'Admissions', path: 'apply' },
      ],
    },
    {
      title: 'Academics',
      links: [
        { name: 'Nursery Section', path: 'nursery' },
        { name: 'Primary Section', path: 'primary' },
        { name: 'Curriculum (UNEB)', path: 'curriculum' },
        { name: 'Co-Curricular', path: 'cocurricular' },
        { name: 'Academic Calendar', path: 'calendar' },
      ],
    },
    {
      title: 'Admissions',
      links: [
        { name: 'How to Apply', path: 'apply' },
        { name: 'Requirements', path: 'requirements' },
        { name: 'Fees Structure', path: 'fees' },
        { name: 'Scholarships', path: 'scholarships' },
        { name: 'Download Forms', path: 'forms' },
      ],
    },
    {
      title: 'Student Life',
      links: [
        { name: 'Sports', path: 'sports' },
        { name: 'Clubs & Activities', path: 'clubs' },
        { name: 'Gallery', path: 'gallery' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'FAQs', path: 'faqs' },
        { name: 'School Policies', path: 'policies' },
        { name: 'Downloads', path: 'forms' },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#0f1d3a] text-white overflow-hidden">
      {/* Subtle gradient overlay for depth (royal brand tint) */}
      <div className="absolute inset-0 bg-linear-to-b from-royal/40 via-transparent to-transparent pointer-events-none" aria-hidden />
      {/* Brand accent bar: maroon */}
      <div className="relative h-1 w-full bg-maroon" />

      <div className="relative w-full max-w-content mx-auto xl:max-w-content-xl 2xl:max-w-content-2xl px-4 xs:px-5 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16 xl:py-20">
        {/* Top: logo + tagline + contact strip */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 sm:gap-12 pb-10 sm:pb-14 border-b border-white/15">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
            <img
              src={LOGO_URL}
              alt="Mentor Junior School Busula"
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain opacity-95"
            />
            <div>
              <p className="text-gold text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">
                Excellence in Busula
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                Mentor Junior School
              </p>
              <p className="text-white/70 text-xs sm:text-sm mt-1">Nursery & Primary · Day & Boarding</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 min-w-0 sm:min-w-[260px]">
            <a
              href="https://wa.me/256752685815"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 bg-white text-black border border-gray-300 hover:bg-gray-50 hover:border-gray-400 rounded-xl px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold transition-all w-fit cursor-pointer active:scale-[0.98]"
            >
              <MessageCircle size={18} className="sm:w-5 sm:h-5 shrink-0" />
              Chat on WhatsApp
            </a>
            <div className="flex flex-col gap-2 text-white/80 text-sm">
              <a href="tel:+256752685815" className="flex items-center gap-2 hover:text-gold transition-colors cursor-pointer">
                <Phone size={16} className="text-gold shrink-0" />
                +256 752 685 815
              </a>
              <a href="tel:+256709240027" className="flex items-center gap-2 hover:text-gold transition-colors cursor-pointer">
                <Phone size={16} className="text-gold shrink-0" />
                +256 709 240 027
              </a>
              <a href="tel:+256778204671" className="flex items-center gap-2 hover:text-gold transition-colors cursor-pointer">
                <Phone size={16} className="text-gold shrink-0" />
                +256 778 204 671
              </a>
              <a href="mailto:mentorjuniorschoolbusula@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors cursor-pointer">
                <Mail size={16} className="text-gold shrink-0" />
                mentorjuniorschoolbusula@gmail.com
              </a>
              <p className="flex items-start gap-2">
                <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                Busula Town, near Mukam Mulugi Petrol Station, Luwero
              </p>
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 py-10 sm:py-12 lg:py-14 xl:py-16">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-gold text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {onNavigate ? (
                      <button
                        type="button"
                        onClick={() => handleClick(link.path)}
                        className="text-white/70 hover:text-gold text-xs sm:text-sm font-medium transition-colors text-left cursor-pointer active:opacity-80"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a
                        href={`#${link.path}`}
                        className="text-white/70 hover:text-gold text-xs sm:text-sm font-medium transition-colors cursor-pointer active:opacity-80"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 border-t border-white/15">
          <p className="text-white/60 text-[10px] sm:text-xs uppercase tracking-wider font-medium">
            © {new Date().getFullYear()} Mentor Junior School – Busula. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {onNavigate ? (
              <button
                type="button"
                onClick={() => handleClick('admin')}
                className="text-white/60 hover:text-gold text-xs font-medium transition-colors cursor-pointer active:opacity-80"
              >
                Admin
              </button>
            ) : (
              <a href="#admin" className="text-white/60 hover:text-gold text-xs font-medium transition-colors cursor-pointer active:opacity-80">
                Admin
              </a>
            )}
            <a href="#" className="text-white/60 hover:text-gold text-xs font-medium transition-colors cursor-pointer active:opacity-80">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-gold text-xs font-medium transition-colors cursor-pointer active:opacity-80">
              Terms & Conditions
            </a>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/60 hover:text-gold transition-colors cursor-pointer active:scale-95" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors cursor-pointer active:scale-95" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
            <span className="text-white/50 text-xs">Built by Jinubify</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
