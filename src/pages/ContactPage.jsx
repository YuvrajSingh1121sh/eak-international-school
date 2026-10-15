import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, 
  AlertCircle, Building2, Car, Compass 
} from 'lucide-react';

import { schoolInfo } from '../data/schoolData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'Admissions Enquiry (AY 2026–2027)',
    preferredVisitDate: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  const inquiryTypes = [
    'Admissions Enquiry (AY 2026–2027)',
    'Book Guided Campus Tour',
    'Curriculum & Academic Inquiries',
    'School Transportation & Bus Routes',
    'Careers & Faculty Recruitment',
    'General Information / Reception'
  ];

  const departmentContacts = [
    {
      dept: "Admissions Directorate",
      contactPerson: "Victoria Montgomery",
      email: "admissions@eak-international.edu",
      phone: "+1 (800) 555-0142",
      room: "Welcome Centre, Wing A"
    },
    {
      dept: "Academic Affairs & Registrar",
      contactPerson: "Office of the Dean",
      email: "academics@eak-international.edu",
      phone: "+1 (800) 555-0199",
      room: "Collegiate Quadrangle, Level 2"
    },
    {
      dept: "Student Transport & Logistics",
      contactPerson: "Captain Arthur Pendelton",
      email: "transit@eak-international.edu",
      phone: "+1 (800) 555-0188",
      room: "Operations Gatehouse 3"
    },
    {
      dept: "Sanitas Medical Infirmary",
      contactPerson: "Sister Catherine Sterling, RN",
      email: "infirmary@eak-international.edu",
      phone: "+1 (800) 555-0911 (Emergency)",
      room: "Ground Floor, Health Centre"
    }
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full legal name.';
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = 'Please enter a valid telephone number.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a brief subject.';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please provide at least 10 characters describing your inquiry.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valErrors = validate();
    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors);
      return;
    }

    setErrors({});
    const randomTicket = `INQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setInquiryId(randomTicket);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      inquiryType: 'Admissions Enquiry (AY 2026–2027)',
      preferredVisitDate: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-16 font-sans">
      
      {/* 1. HERO BANNER */}
      <section className="bg-[#173F35] text-[#FAF9F5] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C5A568]/20 text-[#DFC48E] border border-[#C5A568]/40">
              Get in Touch
            </span>
            <h1 className="hero-heading text-white">
              Connect with EAK International School.
            </h1>
            <p className="text-base sm:text-lg text-[#FAF9F5]/90 leading-relaxed font-normal">
              We welcome your questions, campus visit requests, and admissions consultations. Our administrative and admissions teams are at your service.
            </p>
          </div>
        </div>
      </section>

      {/* 2. DIRECT CONTACT DIRECTORY CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Campus Address */}
          <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-[#D8D4C8] shadow-sm text-left space-y-2 hover:border-[#C5A568] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#173F35] text-[#C5A568] flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="card-heading text-[#173F35]">
              Main Campus Address
            </h3>
            <address className="not-italic text-xs text-[#5C6761] leading-relaxed">
              {schoolInfo.address.street}<br />
              {schoolInfo.address.city}, {schoolInfo.address.state}<br />
              {schoolInfo.address.postalCode}, {schoolInfo.address.country}
            </address>
          </div>

          {/* Card 2: Telephone Numbers */}
          <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-[#D8D4C8] shadow-sm text-left space-y-2 hover:border-[#C5A568] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#173F35] text-[#C5A568] flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="card-heading text-[#173F35]">
              Telephone Directory
            </h3>
            <div className="text-xs text-[#5C6761] space-y-1">
              <p>Admissions: <a href={`tel:${schoolInfo.contact.admissionsPhone}`} className="text-[#173F35] font-semibold hover:underline">{schoolInfo.contact.admissionsPhone}</a></p>
              <p>General Desk: <a href={`tel:${schoolInfo.contact.mainPhone}`} className="hover:underline">{schoolInfo.contact.mainPhone}</a></p>
              <p className="text-red-700 font-semibold">Emergency: <a href={`tel:${schoolInfo.contact.emergencyPhone}`} className="hover:underline">{schoolInfo.contact.emergencyPhone}</a></p>
            </div>
          </div>

          {/* Card 3: Email Inquiries */}
          <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-[#D8D4C8] shadow-sm text-left space-y-2 hover:border-[#C5A568] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#173F35] text-[#C5A568] flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="card-heading text-[#173F35]">
              Official Email
            </h3>
            <div className="text-xs text-[#5C6761] space-y-1">
              <p>Admissions: <a href={`mailto:${schoolInfo.contact.admissionsEmail}`} className="text-[#173F35] hover:underline font-medium">{schoolInfo.contact.admissionsEmail}</a></p>
              <p>General: <a href={`mailto:${schoolInfo.contact.generalEmail}`} className="text-[#173F35] hover:underline">{schoolInfo.contact.generalEmail}</a></p>
              <p>Principal: <span className="text-[#89948E]">{schoolInfo.contact.principalEmail}</span></p>
            </div>
          </div>

          {/* Card 4: Office & Visiting Hours */}
          <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-[#D8D4C8] shadow-sm text-left space-y-2 hover:border-[#C5A568] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#173F35] text-[#C5A568] flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="card-heading text-[#173F35]">
              Office Hours
            </h3>
            <div className="text-xs text-[#5C6761] space-y-1">
              <p>Mon–Fri: 8:00 AM – 4:30 PM</p>
              <p>Saturday: 9:00 AM – 1:00 PM</p>
              <p>Sunday & Holidays: Closed</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CONTACT FORM & CAMPUS MAP */}
      <section id="visit" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Client-Side Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#FAF9F5] rounded-3xl border border-[#D8D4C8] shadow-sm p-6 sm:p-10 text-left">
            <div className="mb-6 space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A568]">
                Inquiry & Tour Registration
              </span>
              <h2 className="section-heading text-[#173F35]">
                Send an Inquiry or Book a Visit
              </h2>
              <p className="text-xs sm:text-sm text-[#5C6761]">
                Complete the fields below to schedule an admissions conversation or submit a query.
              </p>
            </div>

            {isSubmitted ? (
              /* Demonstration Submission State */
              <div className="py-8 text-center space-y-5 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10 text-emerald-700" />
                </div>

                <div className="space-y-1">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C5A568]/20 text-[#173F35] border border-[#C5A568]/40">
                    Inquiry Recorded (Demo Mode)
                  </span>
                  <h3 className="section-heading text-[#173F35] pt-1">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C6761] max-w-md mx-auto">
                    Your inquiry has been cataloged under simulated reference docket <strong className="text-[#173F35] font-mono">{inquiryId}</strong>.
                  </p>
                </div>

                {/* Summary Card */}
                <div className="bg-[#FAF8F2] border border-[#D8D4C8] rounded-xl p-4 text-left text-xs space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between border-b border-[#ECE8DA] pb-1.5">
                    <span className="text-[#5C6761]">Category:</span>
                    <span className="font-semibold text-[#173F35]">{formData.inquiryType}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#ECE8DA] pb-1.5">
                    <span className="text-[#5C6761]">Email:</span>
                    <span className="font-semibold text-[#173F35]">{formData.email}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#ECE8DA] pb-1.5">
                    <span className="text-[#5C6761]">Phone:</span>
                    <span className="font-semibold text-[#173F35]">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5C6761]">Subject:</span>
                    <span className="font-semibold text-[#173F35] truncate max-w-[200px]">{formData.subject}</span>
                  </div>
                </div>

                {/* Explicit Disclaimer Callout */}
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-left text-xs text-amber-900 leading-relaxed max-w-md mx-auto">
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-amber-950 font-semibold mb-0.5">Frontend Demonstration State:</strong>
                      This website is a frontend prototype. No real message was sent or transmitted across external networks.
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-[#173F35] hover:bg-[#24584a] text-white font-semibold rounded-lg text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Active Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="contactFullName" className="block text-xs font-semibold text-[#252A27] mb-1">
                      Your Full Name *
                    </label>
                    <input
                      id="contactFullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Dr. Catherine Vance"
                      className={`w-full text-xs px-3 py-2.5 rounded-lg border ${
                        errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-[#D8D4C8] bg-white'
                      } focus:outline-none focus:ring-1 focus:ring-[#C5A568]`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contactEmail" className="block text-xs font-semibold text-[#252A27] mb-1">
                      Email Address *
                    </label>
                    <input
                      id="contactEmail"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="catherine.vance@example.com"
                      className={`w-full text-xs px-3 py-2.5 rounded-lg border ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#D8D4C8] bg-white'
                      } focus:outline-none focus:ring-1 focus:ring-[#C5A568]`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label htmlFor="contactPhone" className="block text-xs font-semibold text-[#252A27] mb-1">
                      Telephone Number *
                    </label>
                    <input
                      id="contactPhone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full text-xs px-3 py-2.5 rounded-lg border ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#D8D4C8] bg-white'
                      } focus:outline-none focus:ring-1 focus:ring-[#C5A568]`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label htmlFor="inquiryType" className="block text-xs font-semibold text-[#252A27] mb-1">
                      Inquiry Category
                    </label>
                    <select
                      id="inquiryType"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#D8D4C8] bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A568]"
                    >
                      {inquiryTypes.map((type, idx) => (
                        <option key={idx} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Preferred Visit Date */}
                <div>
                  <label htmlFor="preferredVisitDate" className="block text-xs font-semibold text-[#252A27] mb-1">
                    Preferred Campus Visit Date (Optional)
                  </label>
                  <input
                    id="preferredVisitDate"
                    type="date"
                    value={formData.preferredVisitDate}
                    onChange={(e) => setFormData({ ...formData, preferredVisitDate: e.target.value })}
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#D8D4C8] bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A568]"
                  />
                  <p className="text-[11px] text-[#89948E] mt-0.5">
                    Guided morning walkthroughs run Tuesday & Thursday at 9:30 AM & 2:00 PM.
                  </p>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contactSubject" className="block text-xs font-semibold text-[#252A27] mb-1">
                    Inquiry Subject *
                  </label>
                  <input
                    id="contactSubject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Inquiring regarding Grade 6 Cambridge curriculum"
                    className={`w-full text-xs px-3 py-2.5 rounded-lg border ${
                      errors.subject ? 'border-red-500 bg-red-50/20' : 'border-[#D8D4C8] bg-white'
                    } focus:outline-none focus:ring-1 focus:ring-[#C5A568]`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contactMessage" className="block text-xs font-semibold text-[#252A27] mb-1">
                    Detailed Message *
                  </label>
                  <textarea
                    id="contactMessage"
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please include student grade level, academic interests, or specific questions..."
                    className={`w-full text-xs p-3 rounded-lg border ${
                      errors.message ? 'border-red-500 bg-red-50/20' : 'border-[#D8D4C8] bg-white'
                    } focus:outline-none focus:ring-1 focus:ring-[#C5A568]`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <p className="text-[11px] text-[#89948E]">
                    Client-side demo validation active. No real email transmitted.
                  </p>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#C5A568] hover:bg-[#DFC48E] text-[#0E2822] text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message (Demo)</span>
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Right Column: Visually Clear Map Placeholder & Transit Guidelines (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Visual Schematic Map Container */}
            <div className="bg-[#FAF9F5] rounded-3xl border border-[#D8D4C8] overflow-hidden shadow-sm">
              <div className="bg-[#173F35] text-[#FAF9F5] p-4 flex items-center justify-between border-b border-[#24584a]">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#C5A568]" />
                  <span className="font-semibold text-sm">Oakridge Hills Campus Map</span>
                </div>
                <span className="text-[10px] font-mono text-[#DFC48E]">
                  Lat: 34.0522° N, Long: 118.2437° W
                </span>
              </div>

              {/* Graphic Map Canvas Placeholder */}
              <div className="relative h-64 bg-[#EAE6D9] p-4 flex items-center justify-center overflow-hidden">
                {/* SVG Schematic Map of the School */}
                <svg viewBox="0 0 400 240" className="w-full h-full text-[#173F35]" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Grass Greenery Background */}
                  <rect width="400" height="240" fill="#EAE6D9"/>
                  
                  {/* Roads / Boulevards */}
                  <path d="M0 60 H400" stroke="#FAF9F5" strokeWidth="18"/>
                  <path d="M0 60 H400" stroke="#D8D4C8" strokeWidth="2" strokeDasharray="6 6"/>
                  
                  <path d="M220 0 V240" stroke="#FAF9F5" strokeWidth="22"/>
                  <path d="M220 0 V240" stroke="#D8D4C8" strokeWidth="2" strokeDasharray="6 6"/>

                  {/* Campus Grounds Boundary */}
                  <rect x="50" y="80" width="310" height="140" rx="12" fill="#D3DDD7" stroke="#173F35" strokeWidth="2" strokeDasharray="4 4"/>
                  
                  {/* Academic Quad Colonnade */}
                  <rect x="70" y="100" width="80" height="50" rx="6" fill="#173F35"/>
                  <text x="110" y="130" fill="#F7F5EF" fontSize="9" fontWeight="bold" textAnchor="middle">ACADEMIC QUAD</text>

                  {/* Science Wing */}
                  <rect x="170" y="100" width="60" height="40" rx="6" fill="#24584A"/>
                  <text x="200" y="125" fill="#F7F5EF" fontSize="8" fontWeight="bold" textAnchor="middle">SCIENCE WING</text>

                  {/* Sports Oval Track */}
                  <ellipse cx="295" cy="150" rx="50" ry="32" fill="#F4EEDB" stroke="#C5A568" strokeWidth="2"/>
                  <text x="295" y="153" fill="#A58444" fontSize="8" fontWeight="bold" textAnchor="middle">SPORTS ARENA</text>

                  {/* Gatehouse Marker */}
                  <circle cx="120" cy="80" r="10" fill="#C5A568"/>
                  <circle cx="120" cy="80" r="5" fill="#173F35"/>
                  
                  <text x="120" y="72" fill="#0E2822" fontSize="9" fontWeight="bold" textAnchor="middle">Main Gate 1</text>
                  <text x="280" y="52" fill="#5C6761" fontSize="9" fontWeight="bold">Royal Palm Blvd</text>
                </svg>

                {/* Floating Map Pin Badge */}
                <div className="absolute top-4 left-4 bg-[#173F35] text-white px-3 py-1.5 rounded-lg shadow-md text-xs flex items-center gap-1.5 border border-[#C5A568]/40">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A568]" />
                  <span className="font-semibold">EAK Main Welcome Gate</span>
                </div>
              </div>

              {/* Transit & Parking Details */}
              <div className="p-5 space-y-3 text-xs text-[#3E4641]">
                <div className="flex items-start gap-2.5">
                  <Car className="w-4 h-4 text-[#C5A568] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#173F35]">Visitor Parking:</strong> Dedicated complimentary visitor bays available inside Gate 1. Please obtain a visitor credential badge from security on arrival.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Building2 className="w-4 h-4 text-[#C5A568] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#173F35]">Transit Accessibility:</strong> Metropolis Metro Bus Line 42 stops right outside Gate 1. 25 minutes driving distance from Metropolis International Airport.
                  </div>
                </div>
              </div>
            </div>

            {/* Department Extensions Directory */}
            <div className="bg-[#FAF9F5] p-6 rounded-3xl border border-[#D8D4C8] shadow-sm space-y-4">
              <h3 className="card-heading text-[#173F35] border-b border-[#ECE8DA] pb-2">
                Departmental Extensions
              </h3>

              <div className="space-y-3">
                {departmentContacts.map((item, idx) => (
                  <div key={idx} className="text-xs space-y-0.5">
                    <p className="font-semibold text-[#173F35]">{item.dept}</p>
                    <p className="text-[#5C6761]">{item.contactPerson} &bull; <span className="text-[#89948E]">{item.room}</span></p>
                    <p className="text-[11px] text-[#C5A568]">
                      {item.phone} &bull; <a href={`mailto:${item.email}`} className="underline hover:text-[#173F35]">{item.email}</a>
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
