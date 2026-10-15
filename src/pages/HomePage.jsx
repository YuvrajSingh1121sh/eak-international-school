import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Sparkles, GraduationCap, Award, Trees, 
  Cpu, HeartHandshake, Globe, CheckCircle2, ChevronRight, 
  MapPin, Quote, Clock, Compass, ShieldCheck, ChevronLeft 
} from 'lucide-react';

import { 
  schoolInfo, whyChooseUs, academicStages, facilitiesData, 
  achievements, leadershipTeam, eventsAndNotices, testimonials 
} from '../data/schoolData';
import NoticeModal from '../components/NoticeModal';
import FacilityModal from '../components/FacilityModal';

export default function HomePage({ onOpenAdmissionsModal }) {
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // Icon map for institutional strengths
  const iconMap = {
    GraduationCap: GraduationCap,
    Award: Award,
    Trees: Trees,
    Cpu: Cpu,
    HeartHandshake: HeartHandshake,
    Globe: Globe
  };

  const principal = leadershipTeam[0];

  // Curate recent circulars and events
  const recentNotices = eventsAndNotices.filter(item => item.type === 'notice').slice(0, 3);
  const upcomingEvents = eventsAndNotices.filter(item => item.type === 'event').slice(0, 3);
  const featuredFacilities = facilitiesData.slice(0, 6);

  const prevTestimonial = () => {
    setActiveTestimonialIdx(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveTestimonialIdx(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#173F35] text-[#FAF9F5] pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#24584a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Subtitle & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF9F5]/10 border border-[#C5A568]/40 text-xs text-[#DFC48E]">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A568]" />
                <span className="font-semibold tracking-wide">
                  Admissions Open for Academic Year 2026–2027
                </span>
              </div>

              <div className="space-y-3">
                <span className="block text-xs uppercase tracking-wider text-[#C5A568] font-semibold">
                  EAK International School &bull; K–12 World School
                </span>
                <h1 className="hero-heading text-[#FAF9F5]">
                  Where Curiosity <br className="hidden sm:inline" />
                  <span className="text-[#DFC48E]">Becomes Excellence</span>
                </h1>
              </div>

              <p className="text-base sm:text-lg text-[#FAF9F5]/90 leading-relaxed max-w-2xl font-normal">
                Empowering inquisitive young minds through the world-renowned Cambridge curriculum, experiential inquiry, and values-driven leadership across an 18-acre green campus.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={onOpenAdmissionsModal}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C5A568] hover:bg-[#DFC48E] active:bg-[#A58444] text-[#0E2822] text-sm font-semibold rounded-lg shadow-sm transition-all duration-150 cursor-pointer"
                >
                  <span>Apply for Admission</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  to="/contact#visit"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-[#FAF9F5] border border-white/20 text-sm font-semibold rounded-lg transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#C5A568]" />
                  <span>Schedule Campus Tour</span>
                </Link>
              </div>

              {/* Institutional Statistics Strip */}
              <div className="pt-8 border-t border-[#24584a] grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                {schoolInfo.stats.slice(0, 4).map((stat, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <p className="text-2xl sm:text-3xl font-bold text-[#DFC48E]">
                      {stat.value}
                    </p>
                    <p className="text-xs font-medium text-[#FAF9F5]/75">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: High-Quality School Learning Photograph */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#C5A568]/40 bg-[#0E2822] aspect-4/3 sm:aspect-5/4">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
                  alt="EAK International School students actively engaged in collaborative classroom learning"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Image caption badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0E2822]/90 backdrop-blur-xs p-3.5 rounded-xl border border-[#C5A568]/30 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#FAF9F5]">Collaborative Inquiry &amp; STEM</p>
                      <p className="text-xs text-[#DFC48E]">Oakridge Hills Campus &bull; 18-Acre Grounds</p>
                    </div>
                    <span className="px-2.5 py-1 rounded text-[11px] font-semibold bg-[#C5A568] text-[#0E2822]">
                      Cambridge Centre
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2. WHY CHOOSE US SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#ECE8DA] text-[#173F35] border border-[#D8D4C8]">
            The EAK Advantage
          </span>
          <h2 className="section-heading text-[#173F35]">
            Why Discerning Families Choose EAK
          </h2>
          <p className="text-sm sm:text-base text-[#5C6761] leading-relaxed">
            A purposeful balance of intellectual rigor, character development, and future-ready technology prepares our students to flourish at university and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item) => {
            const IconComponent = iconMap[item.icon] || Award;
            return (
              <div 
                key={item.id}
                className="bg-[#FAF9F5] rounded-xl p-6 sm:p-7 border border-[#E2DED2] hover:border-[#C5A568] hover:shadow-md transition-all duration-200 flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-[#173F35] text-[#C5A568] flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#ECE8DA] text-[#173F35]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="card-heading text-[#173F35] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#5C6761] leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#ECE8DA] flex items-center text-xs font-semibold text-[#173F35]">
                  <span>Explore academic focus</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1 text-[#C5A568]" />
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* 3. ABOUT THE SCHOOL PREVIEW */}
      <section className="bg-[#FAF8F2] border-y border-[#E2DED2] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Campus Visual */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-md border border-[#E2DED2] bg-white">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80"
                  alt="EAK International School campus architecture and quadrangle"
                  className="w-full h-72 sm:h-88 object-cover"
                />
                <div className="p-4 bg-[#173F35] text-white text-left flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">Historic 18-Acre Oakridge Hills Grounds</p>
                    <p className="text-xs text-[#DFC48E]">Founded in 1998 on Royal Palm Boulevard</p>
                  </div>
                  <span className="text-xs font-medium text-[#FAF9F5]/70">Est. 1998</span>
                </div>
              </div>
            </div>

            {/* Narrative text */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#173F35]/10 text-[#173F35] border border-[#173F35]/20">
                About EAK International
              </span>
              
              <h2 className="section-heading text-[#173F35]">
                Nurturing Inquiring Thinkers with Enduring Values
              </h2>

              <p className="text-sm sm:text-base text-[#3E4641] leading-relaxed">
                Founded in 1998, EAK International School has grown from a visionary pilot academy into one of the region’s premier K–12 educational communities. We believe education should transcend routine memorization—kindling genuine curiosity, ethical discernment, and the courage to make meaningful contributions to the global community.
              </p>

              {/* 3 Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
                <div className="p-4 rounded-xl bg-white border border-[#E2DED2]">
                  <Compass className="w-5 h-5 text-[#C5A568] mb-2" />
                  <h4 className="font-semibold text-[#173F35] text-sm">Intellectual Depth</h4>
                  <p className="text-xs text-[#5C6761] mt-1">Rigorous inquiry and multidisciplinary problem-solving.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[#E2DED2]">
                  <ShieldCheck className="w-5 h-5 text-[#C5A568] mb-2" />
                  <h4 className="font-semibold text-[#173F35] text-sm">Moral Compass</h4>
                  <p className="text-xs text-[#5C6761] mt-1">Integrity, kindness, and communal stewardship.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[#E2DED2]">
                  <Globe className="w-5 h-5 text-[#C5A568] mb-2" />
                  <h4 className="font-semibold text-[#173F35] text-sm">Global Leadership</h4>
                  <p className="text-xs text-[#5C6761] mt-1">Fluency in international discourse and cultures.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#173F35] hover:bg-[#24584a] text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  <span>Read Our Full Story &amp; Leadership</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 4. ACADEMIC STAGES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#ECE8DA] text-[#173F35] border border-[#D8D4C8]">
            Academic Continuum
          </span>
          <h2 className="section-heading text-[#173F35]">
            Four Progressive Academic Stages
          </h2>
          <p className="text-sm sm:text-base text-[#5C6761] leading-relaxed">
            From early literacy and guided exploration to pre-university distinction, our curriculum is carefully mapped to support student development at every milestone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {academicStages.map((stage) => (
            <div 
              key={stage.id}
              className="bg-[#FAF9F5] rounded-xl overflow-hidden border border-[#E2DED2] hover:border-[#C5A568] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-[#173F35]">
                  <img 
                    src={stage.heroImage} 
                    alt={stage.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-left">
                    <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-[#C5A568] text-[#0E2822] mb-1">
                      {stage.grades}
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {stage.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5 text-left space-y-3">
                  <p className="text-xs font-semibold text-[#A58444]">
                    {stage.ageRange}
                  </p>
                  <p className="text-xs text-[#5C6761] leading-relaxed line-clamp-3">
                    {stage.description}
                  </p>
                  
                  <div className="pt-2 border-t border-[#ECE8DA] text-xs text-[#3E4641] space-y-1">
                    <p className="font-semibold text-[#173F35]">Curricular Focus:</p>
                    <ul className="space-y-1">
                      {stage.focusAreas.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-[#5C6761]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A568] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 text-left">
                <Link
                  to={`/academics#${stage.id}`}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-[#173F35] hover:text-[#C5A568] pt-3 border-t border-[#ECE8DA] transition-colors"
                >
                  <span>Curriculum Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/academics"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#173F35] hover:bg-[#173F35] hover:text-white text-[#173F35] text-sm font-semibold rounded-lg transition-colors"
          >
            <span>Explore Full Academic Framework</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>


      {/* 5. CAMPUS FACILITIES SHOWCASE */}
      <section className="bg-[#173F35] text-[#FAF9F5] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C5A568]/20 text-[#DFC48E] border border-[#C5A568]/40">
                Campus Spaces
              </span>
              <h2 className="section-heading text-white">
                World-Class Facilities for Holistic Growth
              </h2>
              <p className="text-sm text-[#FAF9F5]/85 leading-relaxed">
                Modern science labs, 4K collaborative classrooms, an indoor semi-Olympic aquatic center, and dedicated performing spaces.
              </p>
            </div>

            <Link
              to="/facilities"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C5A568] hover:bg-[#DFC48E] text-[#0E2822] text-sm font-semibold rounded-lg transition-colors shrink-0"
            >
              <span>Explore All Facilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredFacilities.map((fac) => (
              <div
                key={fac.id}
                onClick={() => setSelectedFacility(fac)}
                className="bg-[#0E2822] rounded-xl overflow-hidden border border-[#24584a] hover:border-[#C5A568] transition-all duration-200 cursor-pointer text-left flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={fac.image} 
                      alt={fac.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E2822] via-black/25 to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[#0E2822]/90 text-[#DFC48E] border border-[#C5A568]/30">
                      {fac.category}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="card-heading text-white">
                      {fac.title}
                    </h3>
                    <p className="text-xs text-[#FAF9F5]/75 line-clamp-2 leading-relaxed">
                      {fac.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 flex items-center justify-between text-xs text-[#C5A568]">
                  <span className="text-[#FAF9F5]/60 font-medium">{fac.capacity}</span>
                  <span className="inline-flex items-center gap-1 font-semibold hover:underline">
                    View Specifications <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 6. ACADEMIC & SPORTS ACHIEVEMENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#ECE8DA] text-[#173F35] border border-[#D8D4C8]">
            Distinction &amp; Accolades
          </span>
          <h2 className="section-heading text-[#173F35]">
            Celebrated Distinctions of Our Scholars
          </h2>
          <p className="text-sm sm:text-base text-[#5C6761] leading-relaxed">
            Consistently leading regional benchmarks across Cambridge IGCSE examinations, national robotics conclaves, Model UN delegations, and competitive athletics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#FAF9F5] p-6 sm:p-7 rounded-xl border border-[#E2DED2] text-left flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-bold text-[#173F35] block mb-1">
                  {item.metric}
                </span>
                <h3 className="text-base font-semibold text-[#252A27] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5C6761] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#ECE8DA] flex items-center gap-1.5 text-xs text-[#A58444] font-medium">
                <Award className="w-4 h-4 text-[#173F35]" />
                <span>Annual Academic Highlight</span>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 7. PRINCIPAL'S WELCOME & MESSAGE */}
      <section className="bg-[#FAF8F2] border-y border-[#E2DED2] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF9F5] rounded-2xl border border-[#E2DED2] shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            {/* Principal Portrait */}
            <div className="lg:col-span-5 relative bg-[#173F35]">
              <img 
                src={principal.image}
                alt={principal.name}
                className="w-full h-72 lg:h-full object-cover object-top"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 right-4 lg:hidden text-white text-left">
                <p className="text-lg font-bold">{principal.name}</p>
                <p className="text-xs text-[#DFC48E]">{principal.role}</p>
              </div>
            </div>

            {/* Principal Letter Content */}
            <div className="lg:col-span-7 p-6 sm:p-10 text-left flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173F35]/10 text-[#173F35] text-xs font-semibold mb-3">
                  <Quote className="w-3.5 h-3.5 text-[#C5A568]" />
                  <span>Principal's Welcome</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#173F35] leading-snug">
                  "Education is not an accumulation of facts, but the kindling of an enduring flame."
                </h3>

                <p className="mt-3 text-sm text-[#3E4641] leading-relaxed border-l-2 border-[#C5A568] pl-4 italic">
                  {principal.message}
                </p>

                <p className="mt-4 text-xs sm:text-sm text-[#5C6761] leading-relaxed">
                  {principal.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-[#ECE8DA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold text-[#173F35]">
                    {principal.name}
                  </h4>
                  <p className="text-xs text-[#A58444] font-medium">
                    {principal.role}
                  </p>
                  <p className="text-xs text-[#89948E]">
                    {principal.qualifications}
                  </p>
                </div>

                <Link
                  to="/about#principal"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#173F35] hover:text-[#C5A568] transition-colors"
                >
                  <span>Read Full Welcome Letter</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 8. LATEST NEWS, NOTICES & UPCOMING EVENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Official Notices (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2DED2]">
              <div>
                <span className="text-xs font-semibold text-[#A58444] block">
                  Official School Desk
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#173F35]">
                  Latest News &amp; Circulars
                </h3>
              </div>
              <Link 
                to="/events-notices" 
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#173F35] hover:text-[#C5A568] transition-colors"
              >
                <span>View All Notices</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-3.5">
              {recentNotices.map((notice) => (
                <div 
                  key={notice.id}
                  onClick={() => setSelectedNotice(notice)}
                  className="bg-[#FAF9F5] p-5 rounded-xl border border-[#E2DED2] hover:border-[#C5A568] transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#173F35] text-[#FAF9F5]">
                        {notice.category}
                      </span>
                      <span className="text-xs text-[#89948E] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#C5A568]" />
                        {notice.displayDate}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-semibold text-[#173F35] leading-snug">
                      {notice.title}
                    </h4>

                    <p className="text-xs text-[#5C6761] line-clamp-2 leading-relaxed">
                      {notice.summary}
                    </p>
                  </div>

                  <button
                    className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-[#173F35] hover:text-[#C5A568] transition-colors self-end sm:self-center"
                    aria-label={`Read notice ${notice.id}`}
                  >
                    <span>Read Memo</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Upcoming Events (5 cols) */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2DED2]">
              <div>
                <span className="text-xs font-semibold text-[#A58444] block">
                  Campus Calendar
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#173F35]">
                  Upcoming Events
                </h3>
              </div>
              <Link 
                to="/events-notices" 
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#173F35] hover:text-[#C5A568] transition-colors"
              >
                <span>Full Calendar</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-3">
              {upcomingEvents.map((evt) => (
                <div 
                  key={evt.id}
                  onClick={() => setSelectedNotice(evt)}
                  className="bg-[#FAF9F5] p-4 rounded-xl border border-[#E2DED2] hover:border-[#C5A568] transition-all cursor-pointer flex items-start gap-3.5"
                >
                  {/* Calendar Date Block */}
                  <div className="w-12 h-12 rounded-lg bg-[#173F35] text-[#FAF9F5] flex flex-col items-center justify-center shrink-0 border border-[#24584a]">
                    <span className="text-[10px] uppercase font-bold text-[#DFC48E]">
                      {new Date(evt.date).toLocaleString('default', { month: 'short' })}
                    </span>
                    <span className="text-base font-bold leading-none">
                      {new Date(evt.date).getDate()}
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    <span className="text-[11px] font-semibold text-[#A58444]">
                      {evt.category} &bull; {evt.time}
                    </span>
                    <h4 className="text-sm font-semibold text-[#173F35] leading-snug">
                      {evt.title}
                    </h4>
                    <p className="text-xs text-[#5C6761] line-clamp-1">
                      {evt.venue}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* 9. PARENT & STUDENT TESTIMONIALS */}
      <section className="bg-[#FAF8F2] border-y border-[#E2DED2] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="space-y-1.5">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#ECE8DA] text-[#173F35] border border-[#D8D4C8]">
              Community Reflections
            </span>
            <h2 className="section-heading text-[#173F35]">
              What Families Say About EAK
            </h2>
          </div>

          {/* Testimonial Active Card */}
          <div className="bg-[#FAF9F5] p-6 sm:p-8 rounded-xl border border-[#E2DED2] shadow-xs text-left relative">
            <Quote className="w-10 h-10 text-[#C5A568]/25 absolute top-6 right-6 pointer-events-none" />
            
            <p className="text-base sm:text-lg text-[#252A27] leading-relaxed">
              "{testimonials[activeTestimonialIdx].quote}"
            </p>

            <div className="mt-6 pt-5 border-t border-[#ECE8DA] flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <img 
                  src={testimonials[activeTestimonialIdx].avatar}
                  alt={testimonials[activeTestimonialIdx].author}
                  className="w-11 h-11 rounded-full object-cover border border-[#C5A568]"
                />
                <div>
                  <h4 className="font-semibold text-[#173F35] text-sm sm:text-base">
                    {testimonials[activeTestimonialIdx].author}
                  </h4>
                  <p className="text-xs text-[#5C6761]">
                    {testimonials[activeTestimonialIdx].role}
                  </p>
                </div>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-lg bg-white border border-[#D8D4C8] hover:bg-[#ECE8DA] text-[#173F35] transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-lg bg-white border border-[#D8D4C8] hover:bg-[#ECE8DA] text-[#173F35] transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonialIdx(idx)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  activeTestimonialIdx === idx ? 'w-6 bg-[#173F35]' : 'w-2 bg-[#D8D4C8] hover:bg-[#89948E]'
                }`}
                aria-label={`View testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>


      {/* 10. ADMISSIONS CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#173F35] text-[#FAF9F5] rounded-2xl p-8 sm:p-12 border border-[#C5A568]/60 shadow-lg text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#C5A568] text-[#0E2822]">
                Admissions for Academic Year 2026–2027
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Begin Your Child's Journey of Curiosity and Excellence
              </h2>
              <p className="text-sm sm:text-base text-[#FAF9F5]/85 max-w-2xl font-normal">
                Join our welcoming global community where each learner is known, challenged, and inspired to lead. Applications are reviewed on a rolling basis.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={onOpenAdmissionsModal}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C5A568] hover:bg-[#DFC48E] text-[#0E2822] text-sm font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start Online Application</span>
              </button>

              <Link
                to="/admissions"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm font-semibold rounded-lg transition-colors"
              >
                <span>5-Step Admissions Process</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Render Modals if active */}
      <NoticeModal 
        notice={selectedNotice} 
        onClose={() => setSelectedNotice(null)} 
      />

      <FacilityModal 
        facility={selectedFacility} 
        onClose={() => setSelectedFacility(null)} 
      />

    </div>
  );
}
