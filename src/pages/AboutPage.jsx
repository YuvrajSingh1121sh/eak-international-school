import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  History, Eye, Target, Heart, Award, 
  CheckCircle2, ShieldCheck, Compass, 
  Sparkles, ChevronRight 
} from 'lucide-react';
import { 
  schoolInfo, leadershipTeam, schoolTimeline 
} from '../data/schoolData';

export default function AboutPage({ onOpenAdmissionsModal }) {
  const [activeCampusZone, setActiveCampusZone] = useState('quad');

  const coreValues = [
    {
      title: "Integrity (Virtus)",
      desc: "Acting with ethical conviction, honesty, and moral courage in scholarly endeavors and daily interactions.",
      icon: ShieldCheck
    },
    {
      title: "Inquiring Curiosity",
      desc: "Nurturing the insatiable thirst to question, discover, experiment, and think critically without fear of failure.",
      icon: Compass
    },
    {
      title: "Resilience & Grit",
      desc: "Embracing challenges as catalysts for growth, self-mastery, emotional fortitude, and intellectual perseverance.",
      icon: Award
    },
    {
      title: "Inclusivity & Empathy",
      desc: "Celebrating multicultural perspectives, honoring diverse identities, and cultivating compassionate global citizenship.",
      icon: Heart
    },
    {
      title: "Environmental Stewardship",
      desc: "Instilling deep responsibility for ecological preservation through our 18-acre green campus and zero-waste initiatives.",
      icon: Target
    }
  ];

  const campusZones = {
    quad: {
      name: "The Central Academic Quad",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80",
      desc: "Surrounded by heritage colonnades and shaded oak groves, the quadrangle connects the Primary, Middle, and Senior collegiate wings. It hosts morning assemblies, open-air literature circles, and community festivals."
    },
    science: {
      name: "Science & STEAM Innovation Wing",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80",
      desc: "Houses our physics, chemistry, and biology research laboratories alongside the VEX Robotics workshop, 3D prototyping suites, and high-performance computing centers."
    },
    sports: {
      name: "Olympic-Standard Athletics Complex",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
      desc: "Features our heated 25m semi-Olympic aquatic center, 400m synthetic running track, floodlit FIFA-standard soccer turf, and indoor maple-wood basketball pavilion."
    },
    arts: {
      name: "The Athenaeum & Performing Arts Hall",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80",
      desc: "Includes the 800-seat acoustic auditorium, sound-isolated musical practice suites, choral rehearsal halls, and the two-story central research library."
    }
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#173F35] text-[#FAF9F5] py-14 lg:py-20 border-b border-[#24584a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl space-y-3.5">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C5A568]/20 text-[#DFC48E] border border-[#C5A568]/40">
              Legacy &amp; Philosophy
            </span>
            <h1 className="hero-heading text-white">
              Shaping Minds of Inquiry, Character, and Purpose
            </h1>
            <p className="text-base sm:text-lg text-[#FAF9F5]/85 leading-relaxed font-normal">
              Since 1998, EAK International School has stood as a beacon of world-class education—where curiosity is cultivated with rigor, and character is molded with timeless virtue.
            </p>
          </div>
        </div>
      </section>


      {/* 2. KEY STATISTICS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {schoolInfo.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-[#FAF9F5] p-5 rounded-xl border border-[#E2DED2] shadow-xs text-left space-y-1"
            >
              <p className="text-2xl sm:text-3xl font-bold text-[#173F35]">
                {stat.value}
              </p>
              <p className="text-xs font-semibold text-[#A58444]">
                {stat.label}
              </p>
              <p className="text-[11px] text-[#5C6761] line-clamp-2 leading-snug">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* 3. FICTIONAL HISTORY & FOUNDING STORY */}
      <section id="history" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173F35]/10 text-[#173F35] text-xs font-semibold">
              <History className="w-3.5 h-3.5 text-[#C5A568]" />
              <span>Our Heritage Since 1998</span>
            </div>

            <h2 className="section-heading text-[#173F35]">
              From an Ambitious Academy to an 18-Acre Global Sanctuary
            </h2>

            <div className="text-sm sm:text-base text-[#3E4641] leading-relaxed space-y-3">
              <p>
                In the autumn of 1998, a council of visionary educators and civic leaders founded EAK International School with a modest cohort of 48 scholars. Their shared vision was clear: to dismantle rote memorization and establish an academy where intellectual curiosity would be treated as the sacred foundation of all true scholarship.
              </p>
              <p>
                Over the past 28 years, EAK has matured into an accredited Cambridge International Examination Centre and IB candidate institution, attracting pupils and distinguished faculty from over 38 nations. In 2012, the school relocated to its present 18-acre green campus in Oakridge Hills, providing collegiate-level laboratories, dedicated performing halls, and world-class athletic facilities.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#173F35]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A568]" />
                <span>Cambridge Pathway (Illustrative)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A568]" />
                <span>Eco-Schools Green Flag</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A568]" />
                <span>Council of International Schools Member</span>
              </div>
            </div>
          </div>

          {/* Timeline Visual */}
          <div className="lg:col-span-6">
            <div className="bg-[#FAF9F5] p-6 sm:p-7 rounded-2xl border border-[#E2DED2] text-left">
              <h3 className="card-heading text-[#173F35] mb-5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C5A568]" />
                <span>Key Milestones in Our Journey</span>
              </h3>

              <div className="space-y-5 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-[#D8D4C8]">
                {schoolTimeline.map((item, idx) => (
                  <div key={idx} className="relative pl-8 text-left">
                    <span className="absolute left-1 top-1.5 w-4 h-4 rounded-full bg-[#173F35] border-2 border-[#C5A568]" />
                    <span className="text-xs font-bold text-[#A58444]">
                      {item.year}
                    </span>
                    <h4 className="text-sm font-semibold text-[#173F35]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#5C6761] mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* 4. VISION, MISSION & CORE VALUES */}
      <section className="bg-[#FAF8F2] border-y border-[#E2DED2] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Vision & Mission Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14">
            <div className="bg-[#FAF9F5] p-7 sm:p-8 rounded-xl border border-[#E2DED2] text-left space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#173F35] text-[#C5A568] flex items-center justify-center">
                <Eye className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A58444] block">
                Our Guiding Vision
              </span>
              <h3 className="text-xl font-bold text-[#173F35]">
                To Be a Globally Revered Sanctuary of Transformative Inquiry
              </h3>
              <p className="text-sm text-[#5C6761] leading-relaxed">
                We envision a world where young minds are emancipated through knowledge, grounded in unwavering ethical conviction, and equipped with the empathy, wisdom, and agility required to lead our shared global future.
              </p>
            </div>

            <div className="bg-[#FAF9F5] p-7 sm:p-8 rounded-xl border border-[#E2DED2] text-left space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#C5A568] text-[#0E2822] flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#173F35] block">
                Our Enduring Mission
              </span>
              <h3 className="text-xl font-bold text-[#173F35]">
                Empowering Scholars to Question Deeply and Serve Selflessly
              </h3>
              <p className="text-sm text-[#5C6761] leading-relaxed">
                EAK International School commits to delivering rigorous Cambridge and international curricula within an inspiring, inclusive environment. We ignite independent intellects, nurture artistic and athletic expression, and foster compassionate contributors to society.
              </p>
            </div>
          </div>

          {/* 5 Core Values */}
          <div className="text-center max-w-3xl mx-auto mb-8 space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#A58444]">
              Character &amp; Purpose
            </span>
            <h3 className="section-heading text-[#173F35]">
              Five Core Values We Live Every Day
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#FAF9F5] p-5 sm:p-6 rounded-xl border border-[#E2DED2] hover:border-[#C5A568] transition-all text-left space-y-2.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#173F35]/10 text-[#173F35] flex items-center justify-center">
                    <IconComp className="w-4 h-4 text-[#173F35]" />
                  </div>
                  <h4 className="card-heading text-base text-[#173F35]">
                    {val.title}
                  </h4>
                  <p className="text-xs text-[#5C6761] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* 5. PRINCIPAL'S EXTENDED MESSAGE */}
      <section id="principal" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF9F5] rounded-2xl border border-[#E2DED2] shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          <div className="lg:col-span-5 relative bg-[#173F35]">
            <img 
              src={leadershipTeam[0].image}
              alt={leadershipTeam[0].name}
              className="w-full h-72 lg:h-full object-cover object-top"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent lg:hidden" />
          </div>

          <div className="lg:col-span-7 p-6 sm:p-10 text-left space-y-5">
            <div>
              <span className="text-xs font-semibold text-[#A58444] block">
                Office of the Head of School
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#173F35] mt-1">
                A Letter of Welcome from Dr. Elizabeth Vance
              </h2>
              <p className="text-xs text-[#5C6761] font-medium mt-0.5">
                D.Phil. in Education (Oxford) &bull; M.Ed. (Harvard)
              </p>
            </div>

            <div className="text-xs sm:text-sm text-[#3E4641] leading-relaxed space-y-3">
              <p>
                Welcome to EAK International School. In choosing an educational home for your child, you are making one of the most momentous decisions of their young lives. You are seeking not merely an institution that delivers strong exam results, but an inspiring community that will help define who they become as human beings.
              </p>
              <p>
                At EAK, we view education as an ongoing dialogue between a student's innate wonder and the great intellectual traditions of humanity. Our students do not passively receive knowledge—they test hypotheses in our laboratories, defend perspectives at Harkness tables, compose symphonies, and debate global climate policy in our assembly halls.
              </p>
              <p>
                We celebrate differences of heritage and perspective, bound by an unwavering standard of integrity. As you explore our campus, you will witness children who are joyful in their learning, fearless in their questioning, and deeply considerate of the world around them.
              </p>
            </div>

            <div className="pt-4 border-t border-[#ECE8DA] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="font-bold text-base text-[#173F35]">Dr. Elizabeth Vance</p>
                <p className="text-xs text-[#5C6761]">Head of School &amp; Principal, EAK International School</p>
                <p className="text-[11px] text-[#89948E]">D.Phil. (Oxon) &bull; M.Ed. (Harvard)</p>
              </div>
              <div className="px-3.5 py-1.5 rounded-md bg-[#ECE8DA] text-[11px] font-semibold text-[#173F35]">
                Office of the Head of School
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* 6. LEADERSHIP TEAM */}
      <section id="leadership" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A58444]">
            Academic Leadership
          </span>
          <h2 className="section-heading text-[#173F35]">
            Meet Our Senior Leadership Team
          </h2>
          <p className="text-xs sm:text-sm text-[#5C6761]">
            Seasoned international educators dedicated to academic rigor, student welfare, and pedagogical innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipTeam.map((lead, idx) => (
            <div 
              key={idx}
              className="bg-[#FAF9F5] rounded-xl overflow-hidden border border-[#E2DED2] shadow-xs text-left flex flex-col justify-between"
            >
              <div>
                <div className="h-56 overflow-hidden bg-[#173F35]">
                  <img 
                    src={lead.image}
                    alt={lead.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                </div>
                <div className="p-5 space-y-1">
                  <h3 className="card-heading text-[#173F35]">
                    {lead.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#A58444]">
                    {lead.role}
                  </p>
                  <p className="text-[11px] text-[#89948E]">
                    {lead.qualifications}
                  </p>
                  <p className="text-xs text-[#5C6761] pt-2 line-clamp-3">
                    {lead.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 7. VISUALLY ENGAGING CAMPUS OVERVIEW */}
      <section className="bg-[#FAF8F2] border-y border-[#E2DED2] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#A58444]">
              Campus Architecture
            </span>
            <h2 className="section-heading text-[#173F35]">
              Explore the 18-Acre Oakridge Hills Campus
            </h2>
            <p className="text-xs sm:text-sm text-[#5C6761]">
              A biodiverse, sustainable learning sanctuary designed for intellectual growth and community life.
            </p>
          </div>

          {/* Campus Zone Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.keys(campusZones).map((key) => (
              <button
                key={key}
                onClick={() => setActiveCampusZone(key)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeCampusZone === key 
                    ? 'bg-[#173F35] text-white shadow-xs'
                    : 'bg-[#FAF9F5] text-[#252A27] border border-[#E2DED2] hover:border-[#173F35]'
                }`}
              >
                {campusZones[key].name}
              </button>
            ))}
          </div>

          {/* Active Zone Display */}
          <div className="bg-[#FAF9F5] rounded-2xl border border-[#E2DED2] overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 h-64 sm:h-80 lg:h-96 relative">
              <img 
                src={campusZones[activeCampusZone].image}
                alt={campusZones[activeCampusZone].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-6 text-white text-left">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[#C5A568] text-[#0E2822]">
                  Campus Zone
                </span>
                <p className="text-lg sm:text-xl font-bold mt-1">
                  {campusZones[activeCampusZone].name}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 text-left flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-xs font-semibold text-[#A58444]">
                  Pedagogical Focus
                </span>
                <h3 className="text-xl font-bold text-[#173F35]">
                  {campusZones[activeCampusZone].name}
                </h3>
                <p className="text-xs sm:text-sm text-[#3E4641] leading-relaxed">
                  {campusZones[activeCampusZone].desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#ECE8DA] flex items-center justify-between">
                <Link
                  to="/facilities"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#173F35] hover:text-[#C5A568]"
                >
                  <span>Facility Specifications</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/contact#visit"
                  className="px-4 py-2 bg-[#173F35] hover:bg-[#24584a] text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  Book Walkthrough
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* 8. ADMISSIONS CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#173F35] text-[#FAF9F5] rounded-2xl p-8 sm:p-12 border border-[#C5A568]/60 space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Experience the EAK Spirit Firsthand
          </h2>
          <p className="text-sm text-[#FAF9F5]/85 max-w-2xl mx-auto">
            Schedule a personalized campus consultation or submit a priority application for the 2026–2027 academic session.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={onOpenAdmissionsModal}
              className="px-6 py-3 bg-[#C5A568] hover:bg-[#DFC48E] text-[#0E2822] text-sm font-semibold rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              Start Online Application
            </button>
            <Link
              to="/contact#visit"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm font-semibold rounded-lg transition-colors"
            >
              Schedule Campus Visit
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
