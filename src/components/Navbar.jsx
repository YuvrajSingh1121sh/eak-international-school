import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Menu, X, Phone, Clock, ChevronRight, 
  MapPin, Sparkles 
} from 'lucide-react';

import CrestLogo from './CrestLogo';
import { schoolInfo } from '../data/schoolData';

export default function Navbar({ onOpenAdmissionsModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track window scroll for subtle elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle window resize to automatically close mobile menu if resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle Escape key to close mobile drawer and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Events & Notices', path: '/events-notices' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF9F5]/98 backdrop-blur-md transition-shadow duration-200 border-b border-[#E2DED2]">
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#173F35] text-[#FAF9F5] text-xs py-1.5 px-3 sm:px-6 lg:px-8 border-b border-[#24584a]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Announcement text & link - adaptable across mobile and desktop */}
          <div className="flex items-center gap-2 sm:gap-3 w-full lg:w-auto justify-between lg:justify-start">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-semibold bg-[#C5A568] text-[#0E2822] whitespace-nowrap">
                Admissions 2026–27
              </span>
              <span className="text-[#FAF9F5]/90 text-[11px] sm:text-[12.5px] truncate max-w-[200px] sm:max-w-none">
                Priority applications open for Nursery through Grade 11
              </span>
            </div>
            <Link 
              to="/admissions" 
              className="inline-flex items-center text-[#DFC48E] hover:text-white font-medium text-[11px] sm:text-[12.5px] underline underline-offset-2 transition-colors shrink-0"
            >
              <span>Learn More</span>
              <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 ml-0.5" />
            </Link>
          </div>

          {/* Desktop Direct Contact details (>= 1024px) */}
          <div className="hidden lg:flex items-center gap-4 text-[#FAF9F5]/85 text-[12.5px] shrink-0">
            <a 
              href={`tel:${schoolInfo.contact.admissionsPhone}`} 
              className="inline-flex items-center gap-1.5 hover:text-[#DFC48E] transition-colors"
              aria-label="Call Admissions Desk"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A568]" />
              <span>{schoolInfo.contact.admissionsPhone}</span>
            </a>
            <span className="text-[#FAF9F5]/30">|</span>
            <div className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C5A568]" />
              <span>Mon–Fri: 8:00 AM – 4:30 PM</span>
            </div>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 transition-all duration-200 ${isScrolled ? 'py-2 shadow-xs' : 'py-2.5 sm:py-3'}`}>
        <div className="flex items-center justify-between flex-nowrap gap-2 sm:gap-4 w-full">
          
          {/* Logo & School Name */}
          <div className="shrink-0 flex items-center">
            <CrestLogo variant="dark" showTagline={false} size="default" />
          </div>

          {/* Desktop Navigation Links (>= 1024px) - Clean horizontal row, strictly flex-nowrap */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 2xl:gap-2 flex-nowrap shrink-0" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `inline-flex items-center px-2 py-1.5 xl:px-2.5 2xl:px-3 rounded-lg text-[13px] xl:text-[13.5px] 2xl:text-[14px] font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A568] ${
                    isActive
                      ? 'text-[#173F35] font-semibold bg-[#ECE8DA]/80'
                      : 'text-[#252A27] hover:text-[#173F35] hover:bg-[#ECE8DA]/40'
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="relative pb-0.5">
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A568] rounded-full" />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Action CTAs (>= 1024px) - Single horizontal row, strictly flex-nowrap */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0 flex-nowrap">
            {/* Secondary CTA: Schedule Tour */}
            <Link
              to="/contact#visit"
              className="px-2.5 xl:px-3.5 py-1.5 text-xs xl:text-[13px] font-semibold text-[#173F35] border border-[#173F35]/30 hover:border-[#173F35] hover:bg-[#173F35]/5 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-[#C5A568]"
            >
              Schedule Tour
            </Link>

            {/* Primary CTA: Apply Now */}
            <button
              type="button"
              onClick={onOpenAdmissionsModal}
              className="inline-flex items-center gap-1.5 px-3 xl:px-4 py-1.5 text-xs xl:text-[13px] font-semibold text-[#0E2822] bg-[#C5A568] hover:bg-[#DFC48E] active:bg-[#A58444] rounded-lg shadow-xs hover:shadow-sm transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-[#173F35] cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0E2822]" />
              <span>Apply Now</span>
            </button>
          </div>

          {/* Mobile & Tablet Controls (< 1024px) */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
            {/* Quick Primary CTA on Mobile */}
            <button
              type="button"
              onClick={onOpenAdmissionsModal}
              className="px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-[#0E2822] bg-[#C5A568] hover:bg-[#DFC48E] rounded-md shadow-xs transition-colors cursor-pointer whitespace-nowrap"
              aria-label="Apply for Admission"
            >
              Apply Now
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg text-[#173F35] hover:bg-[#ECE8DA] focus-visible:ring-2 focus-visible:ring-[#C5A568] transition-colors cursor-pointer"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer Overlay (< 1024px) with high z-index */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/50 lg:hidden transition-opacity duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-[#FAF9F5] shadow-2xl flex flex-col justify-between p-5 sm:p-6 overflow-y-auto transition-transform duration-200 ease-out"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <div>
              {/* Header inside drawer with prominent close button */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E2DED2]">
                <CrestLogo variant="dark" showTagline={false} size="default" />
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-[#252A27] hover:bg-[#ECE8DA] hover:text-[#173F35] focus-visible:ring-2 focus-visible:ring-[#C5A568] cursor-pointer"
                  aria-label="Close navigation menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Admissions status banner inside drawer */}
              <div className="mt-4 p-3 rounded-lg bg-[#173F35] text-[#FAF9F5] text-xs text-left">
                <div className="flex items-center gap-1.5 font-semibold text-[#DFC48E]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Admissions Open AY 2026–2027</span>
                </div>
                <p className="mt-1 text-[#FAF9F5]/85 text-[11.5px] leading-relaxed">
                  Priority applications are active for Nursery through Grade 11.
                </p>
              </div>

              {/* Mobile Navigation Links List */}
              <nav className="mt-5 flex flex-col space-y-1" aria-label="Mobile Navigation Links">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[14.5px] transition-colors ${
                        isActive
                          ? 'bg-[#173F35] text-[#FAF9F5] font-semibold shadow-xs'
                          : 'text-[#252A27] font-medium hover:bg-[#ECE8DA] hover:text-[#173F35]'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </NavLink>
                ))}
              </nav>

              {/* Action Buttons in Drawer */}
              <div className="mt-6 flex flex-col gap-2.5">
                {/* Primary CTA */}
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenAdmissionsModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0E2822] bg-[#C5A568] hover:bg-[#DFC48E] rounded-lg shadow-xs cursor-pointer transition-colors"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Apply Now</span>
                </button>

                {/* Secondary CTA */}
                <Link
                  to="/contact#visit"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#173F35] border border-[#173F35]/30 rounded-lg hover:bg-[#173F35]/5 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#C5A568]" />
                  <span>Schedule Campus Tour</span>
                </Link>
              </div>
            </div>

            {/* Bottom contact info inside drawer */}
            <div className="mt-8 pt-4 border-t border-[#E2DED2] text-xs text-[#5C6761] space-y-1.5 text-left">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#173F35]" />
                <a href={`tel:${schoolInfo.contact.mainPhone}`} className="hover:text-[#173F35]">
                  {schoolInfo.contact.mainPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#173F35]" />
                <span>Mon–Fri: 8:00 AM – 4:30 PM</span>
              </div>
              <div className="text-[11px] text-[#89948E] pt-1">
                {schoolInfo.address.street}, {schoolInfo.address.city}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
