import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck, 
  CheckCircle2, AlertCircle 
} from 'lucide-react';

import CrestLogo from './CrestLogo';
import { schoolInfo } from '../data/schoolData';

export default function Footer({ onOpenAdmissionsModal }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState(null); // 'success' | 'error' | null
  const [newsletterMsg, setNewsletterMsg] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !/^\S+@\S+\.\S+$/.test(newsletterEmail)) {
      setNewsletterStatus('error');
      setNewsletterMsg('Please enter a valid parent or guardian email address.');
      return;
    }

    setNewsletterStatus('success');
    setNewsletterMsg(`Thank you! Circulars and event notifications will be sent to ${newsletterEmail} (Demo simulation).`);
    setNewsletterEmail('');
    setTimeout(() => {
      setNewsletterStatus(null);
    }, 6000);
  };

  const navLinks = [
    { label: 'Home Overview', path: '/' },
    { label: 'About EAK & Legacy', path: '/about' },
    { label: 'Academic Programs', path: '/academics' },
    { label: 'Admissions & Enrollment', path: '/admissions' },
    { label: 'Campus & Facilities', path: '/facilities' },
    { label: 'Events, Circulars & News', path: '/events-notices' },
    { label: 'Contact & Directions', path: '/contact' },
  ];

  const quickResources = [
    { label: 'Primary Years (Grades 1–5)', path: '/academics#primary' },
    { label: 'Middle School (Grades 6–8)', path: '/academics#middle' },
    { label: 'Cambridge IGCSE (Grades 9–10)', path: '/academics#secondary' },
    { label: 'Cambridge A-Levels (Grades 11–12)', path: '/academics#senior' },
    { label: 'Admissions 5-Step Guide', path: '/admissions#process' },
    { label: 'Campus Tour Booking', path: '/contact#visit' },
  ];

  return (
    <footer className="bg-[#0E2822] text-[#FAF9F5] border-t-4 border-[#C5A568] relative overflow-hidden font-sans">
      {/* Decorative subtle background aura */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#173F35] rounded-full blur-3xl opacity-20 -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A568] rounded-full blur-3xl opacity-10 -ml-20 -mb-20 pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#24584a]/60 text-left">
          
          {/* Column 1: School Identity & Accreditations (4 Cols on LG) */}
          <div className="lg:col-span-4 flex flex-col space-y-5">
            <CrestLogo variant="light" showTagline={true} size="large" />
            
            <p className="text-xs text-[#FAF9F5]/75 leading-relaxed pr-2">
              EAK International School is a premier, co-educational world institution dedicated to fostering critical curiosity, principled leadership, and academic distinction across an 18-acre green campus.
            </p>

            <div className="pt-2">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#C5A568] mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Curricular Affiliations</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-[#FAF9F5]/80">
                {schoolInfo.accreditations.map((acc, idx) => (
                  <div key={idx} className="bg-[#173F35]/70 border border-[#24584a] rounded px-2.5 py-1.5">
                    <p className="font-semibold text-[#DFC48E] leading-tight">{acc.name}</p>
                    <p className="text-[10px] text-[#FAF9F5]/60 mt-0.5">{acc.code}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenAdmissionsModal}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0E2822] bg-[#C5A568] hover:bg-[#DFC48E] rounded transition-all duration-200 shadow-sm cursor-pointer"
              >
                <span>Fast-Track Application</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Links (2.5 Cols on LG) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A568] border-b border-[#24584a] pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF9F5]/75">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="hover:text-[#DFC48E] hover:translate-x-1 inline-block transition-transform duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academic Stages & Admissions (2.5 Cols on LG) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A568] border-b border-[#24584a] pb-2">
              Academic Pathways
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF9F5]/75">
              {quickResources.map((item, idx) => (
                <li key={idx}>
                  <Link 
                    to={item.path} 
                    className="hover:text-[#DFC48E] hover:translate-x-1 inline-block transition-transform duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <div className="p-3 rounded bg-[#173F35]/50 border border-[#24584a] text-[11px] text-[#FAF9F5]/80">
                <span className="font-semibold text-[#DFC48E] block">Admissions AY 2026–27:</span>
                <span>Applications are actively evaluated on a rolling priority basis.</span>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Directory & Circular Alerts (3 Cols on LG) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A568] border-b border-[#24584a] pb-2">
              Contact & Hours
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#FAF9F5]/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A568] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  {schoolInfo.address.street},<br />
                  {schoolInfo.address.city}, {schoolInfo.address.postalCode}
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A568] shrink-0" />
                <a href={`tel:${schoolInfo.contact.mainPhone}`} className="hover:text-[#DFC48E]">
                  {schoolInfo.contact.mainPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A568] shrink-0" />
                <a href={`mailto:${schoolInfo.contact.generalEmail}`} className="hover:text-[#DFC48E]">
                  {schoolInfo.contact.generalEmail}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C5A568] shrink-0 mt-0.5" />
                <span className="text-[11px] leading-tight">
                  {schoolInfo.contact.officeHours}
                </span>
              </div>
            </div>

            {/* Newsletter / Circular Alert Form */}
            <div className="pt-2">
              <h5 className="text-[11px] font-semibold text-[#FAF9F5] mb-1.5">
                Subscribe to Circulars & Updates
              </h5>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-1.5">
                  <label htmlFor="newsletterEmail" className="sr-only">Parent email address for notifications</label>
                  <input
                    id="newsletterEmail"
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="parent.email@domain.com"
                    className="w-full bg-[#173F35]/80 border border-[#24584a] text-xs px-3 py-2 rounded text-[#FAF9F5] placeholder-[#FAF9F5]/40 focus:outline-none focus:ring-1 focus:ring-[#C5A568]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-[#C5A568] hover:bg-[#DFC48E] text-[#0E2822] rounded text-xs font-bold transition-colors cursor-pointer"
                  >
                    Join
                  </button>
                </div>
                {newsletterStatus === 'error' && (
                  <p className="text-[11px] text-amber-300 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {newsletterMsg}
                  </p>
                )}
                {newsletterStatus === 'success' && (
                  <p className="text-[11px] text-emerald-300 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> {newsletterMsg}
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>

        {/* Fictional Disclaimer & Legal Notice Banner */}
        <div className="py-4 my-6 bg-[#173F35]/40 rounded-lg border border-[#24584a]/50 px-4 text-center">
          <p className="text-[11px] text-[#FAF9F5]/70 leading-relaxed">
            <strong className="text-[#DFC48E]">Disclaimer & Demonstration Notice:</strong> EAK International School is a fictional educational institution created for the Modern School Website Redesign assignment for EakPustak Pvt. Ltd. All names, statistics, student testimonials, notices, and facilities are simulated content.
          </p>
        </div>

        {/* Bottom Bar: Copyright & School Tagline */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF9F5]/60">
          <div>
            &copy; 2026 EAK International School. All rights reserved. Frontend Demonstration.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-[#DFC48E] transition-colors">Campus Map</Link>
            <Link to="/admissions" className="hover:text-[#DFC48E] transition-colors">Admission Standards</Link>
            <Link to="/events-notices" className="hover:text-[#DFC48E] transition-colors">Calendar</Link>
            <span className="text-[#FAF9F5]/30">|</span>
            <span className="font-medium text-[#C5A568]">Where Curiosity Becomes Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
