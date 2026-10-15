import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ChevronRight } from 'lucide-react';
import { facilitiesData } from '../data/schoolData';

import FacilityModal from '../components/FacilityModal';

export default function FacilitiesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedFacility, setSelectedFacility] = useState(null);

  const categories = [
    'All',
    'Learning Spaces',
    'Laboratories',
    'Sports & Fitness',
    'Arts & Culture',
    'Campus Living'
  ];

  const filteredFacilities = activeCategory === 'All'
    ? facilitiesData
    : facilitiesData.filter(f => f.category === activeCategory);

  return (
    <div className="space-y-16 md:space-y-24 pb-16 font-sans">
      
      {/* 1. HERO BANNER */}
      <section className="bg-[#173F35] text-[#FAF9F5] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C5A568]/20 text-[#DFC48E] border border-[#C5A568]/40">
              Infrastructure & Campus
            </span>
            <h1 className="hero-heading text-white">
              An 18-Acre Sanctuary of World-Class Learning Infrastructure.
            </h1>
            <p className="text-base sm:text-lg text-[#FAF9F5]/90 leading-relaxed font-normal">
              From collegiate science laboratories and 4K interactive smart suites to Olympic-standard athletic pavilions and farm-to-table dining—engineered for student safety, environmental sustainability, and scholarly distinction.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CAMPUS HIGHLIGHT OVERVIEW BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#FAF9F5] p-5 rounded-2xl border border-[#D8D4C8] shadow-sm text-left">
            <span className="text-2xl font-bold text-[#173F35] block">64</span>
            <p className="text-xs font-semibold text-[#C5A568] uppercase">Smart Classrooms</p>
            <p className="text-[11px] text-[#5C6761] mt-0.5">86-inch 4K UHD interactive touch panels</p>
          </div>
          <div className="bg-[#FAF9F5] p-5 rounded-2xl border border-[#D8D4C8] shadow-sm text-left">
            <span className="text-2xl font-bold text-[#173F35] block">35,000+</span>
            <p className="text-xs font-semibold text-[#C5A568] uppercase">Library Volumes</p>
            <p className="text-[11px] text-[#5C6761] mt-0.5">Physical titles & academic research vaults</p>
          </div>
          <div className="bg-[#FAF9F5] p-5 rounded-2xl border border-[#D8D4C8] shadow-sm text-left">
            <span className="text-2xl font-bold text-[#173F35] block">25m</span>
            <p className="text-xs font-semibold text-[#C5A568] uppercase">Aquatic Complex</p>
            <p className="text-[11px] text-[#5C6761] mt-0.5">Heated 8-lane ozone filtered pool</p>
          </div>
          <div className="bg-[#FAF9F5] p-5 rounded-2xl border border-[#D8D4C8] shadow-sm text-left">
            <span className="text-2xl font-bold text-[#173F35] block">38</span>
            <p className="text-xs font-semibold text-[#C5A568] uppercase">School Coaches</p>
            <p className="text-[11px] text-[#5C6761] mt-0.5">Real-time mobile tracking & verified attendants</p>
          </div>
        </div>
      </section>

      {/* 3. IMAGE-LED GALLERY & CATEGORY FILTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A568]">
            Interactive Showcase
          </span>
          <h2 className="section-heading text-[#173F35]">
            Explore Campus Environments
          </h2>
          <p className="text-sm text-[#5C6761]">
            Select any facility below to open detailed technical specifications, student capacities, and safety protocols.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#173F35] text-white shadow-sm border border-[#C5A568]'
                  : 'bg-[#FAF9F5] text-[#252A27] border border-[#D8D4C8] hover:border-[#173F35]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFacilities.map((fac) => (
            <div
              key={fac.id}
              onClick={() => setSelectedFacility(fac)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedFacility(fac); } }}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${fac.title}`}
              className={`bg-[#FAF9F5] rounded-2xl overflow-hidden border transition-all duration-300 text-left flex flex-col justify-between group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A568] ${
                fac.isProposed 
                  ? 'border-amber-300 hover:border-amber-500 shadow-xs' 
                  : 'border-[#D8D4C8] hover:border-[#C5A568] hover:shadow-lg'
              }`}
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={fac.image} 
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  
                  {/* Badges on image */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#0E2822]/90 backdrop-blur-xs text-[#DFC48E] border border-[#C5A568]/40">
                      {fac.category}
                    </span>
                    {fac.isProposed && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-amber-400 text-black">
                        Fictional Proposed Facility
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="card-heading text-white group-hover:text-[#DFC48E] transition-colors leading-snug">
                      {fac.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <p className="text-xs text-[#5C6761] leading-relaxed line-clamp-3">
                    {fac.shortDesc}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-[#ECE8DA] text-[11px] text-[#3E4641]">
                    <div className="flex items-center justify-between">
                      <span className="text-[#89948E]">Designed Capacity:</span>
                      <span className="font-semibold text-[#173F35]">{fac.capacity}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-[#ECE8DA] flex items-center justify-between text-xs font-semibold text-[#173F35] group-hover:text-[#C5A568] transition-colors">
                  <span>View Specifications & Safety</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SAFETY & SUSTAINABILITY HIGHLIGHT */}
      <section className="bg-[#FAF8F2] border-y border-[#D8D4C8] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4 text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A568]">
                Safeguarding & Green Living
              </span>
              <h2 className="section-heading text-[#173F35]">
                Uncompromising Child Safety & Eco-Stewardship
              </h2>
              <p className="text-sm text-[#3E4641] leading-relaxed">
                Campus safety is ingrained in every architectural detail. We operate RFID biometric access gates, 24/7 boundary surveillance, background-verified faculty and security personnel, and full-time medical nurses.
              </p>
              <div className="space-y-2 text-xs text-[#252A27]">
                <div className="p-3 bg-[#FAF9F5] rounded-xl border border-[#D8D4C8] flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#C5A568] shrink-0" />
                  <span>CCTV coverage across all public quadrangles, corridors, and school buses.</span>
                </div>
                <div className="p-3 bg-[#FAF9F5] rounded-xl border border-[#D8D4C8] flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#C5A568] shrink-0" />
                  <span>Sanitas Infirmary with registered pediatric medical personnel on duty.</span>
                </div>
                <div className="p-3 bg-[#FAF9F5] rounded-xl border border-[#D8D4C8] flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#C5A568] shrink-0" />
                  <span>Solar-powered rooftops producing clean daytime electricity for campus facilities.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#D8D4C8]">
                <img 
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=900&q=80" 
                  alt="Medical infirmary and student safety facilities"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <p className="text-lg font-bold">Sanitas Healthcare Unit</p>
                  <p className="text-xs text-[#DFC48E]">Equipped with AEDs, observation bays, and dedicated transit ambulance.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CAMPUS VISIT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#173F35] text-[#FAF9F5] rounded-3xl p-8 sm:p-12 border-2 border-[#C5A568] space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Experience Our Campus in Person
          </h2>
          <p className="text-sm text-[#FAF9F5]/85 max-w-2xl mx-auto">
            We invite prospective parents and scholars for guided morning tours led by our student ambassadors and admissions counselors.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact#visit"
              className="px-6 py-3 bg-[#C5A568] hover:bg-[#DFC48E] text-[#0E2822] text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              Book Guided Walking Tour
            </Link>
            <Link
              to="/admissions"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              View Admission Criteria
            </Link>
          </div>
        </div>
      </section>

      {/* Facility Detail Modal */}
      <FacilityModal
        facility={selectedFacility}
        onClose={() => setSelectedFacility(null)}
      />

    </div>
  );
}
