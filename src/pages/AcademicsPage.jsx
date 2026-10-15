import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  BookOpen, CheckCircle2, GraduationCap, 
  ArrowRight, Compass, Users, Cpu, Lightbulb, 
  Layers 
} from 'lucide-react';
import { academicStages, achievements } from '../data/schoolData';

export default function AcademicsPage({ onOpenAdmissionsModal }) {
  const location = useLocation();
  const hashStage = location.hash ? location.hash.replace('#', '') : '';
  const initialStage = ['primary', 'middle', 'secondary', 'senior'].includes(hashStage) ? hashStage : 'primary';
  const [selectedStageId, setSelectedStageId] = useState(initialStage);

  // Handle hash scrolling (e.g. /academics#secondary)
  useEffect(() => {
    if (location.hash) {
      const stage = location.hash.replace('#', '');
      if (['primary', 'middle', 'secondary', 'senior'].includes(stage)) {
        const timer = setTimeout(() => {
          setSelectedStageId(stage);
          const el = document.getElementById('academic-stages-detail');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 10);
        return () => clearTimeout(timer);
      }
    }
  }, [location.hash]);

  const currentStage = academicStages.find(s => s.id === selectedStageId) || academicStages[0];

  const methodologies = [
    {
      title: "Inquiry-Led Experiential Learning",
      desc: "Rather than passive memorization, students tackle authentic inquiries. Concepts are explored firsthand through laboratory experiments, fieldwork, and collaborative discovery.",
      icon: Compass
    },
    {
      title: "Harkness Discussion Tables",
      desc: "Middle and Senior Secondary humanities classrooms operate around oval Harkness tables where teachers facilitate and students substantiate arguments using textual evidence.",
      icon: Users
    },
    {
      title: "Integrated STEAM Framework",
      desc: "Multidisciplinary projects synthesize Science, Technology, Engineering, Arts, and Mathematics, training students to approach complex real-world dilemmas with versatility.",
      icon: Cpu
    },
    {
      title: "Individualized Learning Plans (ILP)",
      desc: "Recognizing that every scholar possesses unique gifts, academic mentors construct tailored pathways that provide targeted scaffolding or advanced academic acceleration.",
      icon: Lightbulb
    }
  ];

  const coCurricularClubs = [
    {
      category: "STEAM & Technology",
      name: "Turing Robotics & AI Guild",
      desc: "Autonomous rovers, VEX robotics arenas, micro-controller programming, and computer vision competitions."
    },
    {
      category: "Global Affairs & Oratory",
      name: "Model United Nations & Parliamentary Debate",
      desc: "Diplomatic simulation, resolution drafting, persuasive rhetoric, and international conference representation."
    },
    {
      category: "Visual & Performing Arts",
      name: "EAK Symphonic Orchestra & Thespian Society",
      desc: "Classical concerto rehearsal, chamber ensembles, full theatrical production, and technical stagecraft."
    },
    {
      category: "Sports & Athletics",
      name: "Varsity Sports Academy",
      desc: "Competitive swimming, regional soccer leagues, tennis tournaments, basketball championships, and cross-country."
    },
    {
      category: "Environmental Action",
      name: "Eco-Council & Hydroponics Collective",
      desc: "Campus biodiversity monitoring, hydroponic greenhouse cultivation, and community zero-waste audits."
    },
    {
      category: "Literary & Media",
      name: "The Oakridge Chronicle & Podcasting Hub",
      desc: "Student investigative journalism, literary anthology publication, and audio-video podcast production."
    }
  ];

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#173F35] text-[#FAF9F5] py-14 lg:py-20 border-b border-[#24584a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl space-y-3.5">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C5A568]/20 text-[#DFC48E] border border-[#C5A568]/40">
              Curriculum &amp; Academic Rigor
            </span>
            <h1 className="hero-heading text-white">
              An Academic Continuum of Boundless Discovery
            </h1>
            <p className="text-base sm:text-lg text-[#FAF9F5]/85 leading-relaxed font-normal">
              We pair the world-renowned Cambridge International framework with progressive, inquiry-based pedagogy—empowering scholars to question fearlessly and achieve distinction.
            </p>
          </div>
        </div>
      </section>


      {/* 2. ACADEMIC STAGES INTERACTIVE DEEP DIVE */}
      <section id="academic-stages-detail" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A58444]">
            Learning Continuum
          </span>
          <h2 className="section-heading text-[#173F35]">
            Explore the Four Academic Stages
          </h2>
          <p className="text-xs sm:text-sm text-[#5C6761]">
            Select a learning stage below to review age brackets, curricular pathways, core focus areas, and assessment methodologies.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-8">
          {academicStages.map((stage) => (
            <button
              key={stage.id}
              onClick={() => setSelectedStageId(stage.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors duration-150 cursor-pointer flex items-center gap-2 ${
                selectedStageId === stage.id
                  ? 'bg-[#173F35] text-white shadow-xs'
                  : 'bg-[#FAF9F5] text-[#252A27] border border-[#E2DED2] hover:border-[#173F35]'
              }`}
            >
              <GraduationCap className={`w-4 h-4 ${selectedStageId === stage.id ? 'text-[#C5A568]' : 'text-[#89948E]'}`} />
              <span>{stage.name}</span>
              <span className={`text-[11px] px-2 py-0.5 rounded ${
                selectedStageId === stage.id ? 'bg-[#C5A568] text-[#0E2822]' : 'bg-[#ECE8DA] text-[#5C6761]'
              }`}>
                {stage.grades}
              </span>
            </button>
          ))}
        </div>

        {/* Active Stage Detail Showcase */}
        <div className="bg-[#FAF9F5] rounded-2xl border border-[#E2DED2] shadow-xs overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Stage Image & Overview */}
          <div className="lg:col-span-5 relative bg-[#173F35]">
            <img 
              src={currentStage.heroImage} 
              alt={currentStage.name}
              className="w-full h-64 sm:h-72 lg:h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
            
            <div className="absolute bottom-5 left-5 right-5 text-white text-left space-y-1.5">
              <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#C5A568] text-[#0E2822] inline-block">
                {currentStage.grades} &bull; {currentStage.ageRange}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">
                {currentStage.name}
              </h3>
              <p className="text-xs text-[#DFC48E]">
                {currentStage.tagline}
              </p>
            </div>
          </div>

          {/* Right Column: Deep Curricular Content */}
          <div className="lg:col-span-7 p-6 sm:p-8 text-left space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A58444] mb-1">
                <BookOpen className="w-4 h-4 text-[#173F35]" />
                <span>Curriculum: {currentStage.curriculumFramework}</span>
              </div>
              <p className="text-sm text-[#3E4641] leading-relaxed mt-1">
                {currentStage.description}
              </p>
            </div>

            {/* Core Disciplines & Highlights */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#173F35] flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#C5A568]" />
                <span>Curricular Focus &amp; Core Disciplines</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentStage.focusAreas.map((area, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#252A27] bg-[#FAF8F2] p-2.5 rounded-lg border border-[#ECE8DA]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A568] shrink-0 mt-0.5" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Assessment & Student Life */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#ECE8DA]">
              <div className="space-y-0.5">
                <span className="text-xs font-semibold text-[#89948E] block">
                  Assessment Paradigm
                </span>
                <p className="text-xs text-[#3E4641] leading-relaxed">
                  {currentStage.assessment}
                </p>
              </div>

              <div className="space-y-0.5">
                <span className="text-xs font-semibold text-[#89948E] block">
                  Student Life &amp; Co-Curriculars
                </span>
                <p className="text-xs text-[#3E4641] leading-relaxed">
                  {currentStage.studentLife}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-[#ECE8DA] flex items-center justify-between">
              <button
                onClick={onOpenAdmissionsModal}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#C5A568] hover:bg-[#DFC48E] text-[#0E2822] text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                <span>Apply for {currentStage.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <Link
                to="/admissions#process"
                className="text-xs font-semibold text-[#173F35] hover:underline"
              >
                Grade Entry Criteria &rarr;
              </Link>
            </div>

          </div>

        </div>
      </section>


      {/* 3. TEACHING METHODOLOGY */}
      <section className="bg-[#FAF8F2] border-y border-[#E2DED2] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#A58444]">
              Pedagogical Standards
            </span>
            <h2 className="section-heading text-[#173F35]">
              How We Teach: From Wonder to Mastery
            </h2>
            <p className="text-xs sm:text-sm text-[#5C6761]">
              Our classroom methodology honors the cognitive growth of young minds, balancing active student voice with uncompromising scholarly discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#FAF9F5] p-6 rounded-xl border border-[#E2DED2] hover:border-[#C5A568] transition-all text-left flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="w-10 h-10 rounded-lg bg-[#173F35] text-[#C5A568] flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="card-heading text-base text-[#173F35]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#5C6761] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* 4. CO-CURRICULAR PROGRAMMES & SOCIETIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A58444]">
            Enrichment Beyond the Classroom
          </span>
          <h2 className="section-heading text-[#173F35]">
            45+ Co-Curricular Clubs &amp; Societies
          </h2>
          <p className="text-xs sm:text-sm text-[#5C6761]">
            Passions are ignited when scholars have the space to create, compete, perform, and collaborate outside traditional lecture halls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {coCurricularClubs.map((club, idx) => (
            <div 
              key={idx}
              className="bg-[#FAF9F5] p-5 sm:p-6 rounded-xl border border-[#E2DED2] hover:border-[#C5A568] transition-all text-left flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A58444] block">
                  {club.category}
                </span>
                <h3 className="card-heading text-base text-[#173F35] mt-1">
                  {club.name}
                </h3>
                <p className="text-xs text-[#5C6761] leading-relaxed mt-1.5">
                  {club.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#ECE8DA] flex items-center justify-between text-xs text-[#173F35] font-medium">
                <span>Weekly Enrichment</span>
                <span className="text-[#A58444]">Active Program</span>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 5. ACADEMIC ACHIEVEMENTS & UNIVERSITY PLACEMENT */}
      <section className="bg-[#FAF8F2] border-y border-[#E2DED2] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#A58444]">
              University Matriculation &amp; Distinctions
            </span>
            <h2 className="section-heading text-[#173F35]">
              Proven University Acceptance Worldwide
            </h2>
            <p className="text-xs sm:text-sm text-[#5C6761]">
              100% of our graduating seniors earn offers from premier global institutions, supported by dedicated college counseling starting in Grade 9.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 mb-10">
            {achievements.map((item, idx) => (
              <div key={idx} className="bg-[#FAF9F5] p-4 rounded-xl border border-[#E2DED2] text-center space-y-1">
                <span className="text-2xl font-bold text-[#173F35] block">
                  {item.metric}
                </span>
                <p className="text-xs font-semibold text-[#A58444] line-clamp-1">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {/* Global Acceptance Roster */}
          <div className="bg-[#173F35] text-[#FAF9F5] rounded-2xl p-7 sm:p-9 border border-[#24584a] text-center space-y-5">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Recent University Acceptances (Classes of 2024–2025)
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs font-medium">
              {[
                'University of Oxford', 'Harvard College', 'Stanford University', 
                'Imperial College London', 'University of Cambridge', 'National University of Singapore (NUS)', 
                'Columbia University', 'ETH Zürich', 'University of Toronto', 
                'London School of Economics (LSE)', 'University of Melbourne', 'UC Berkeley'
              ].map((uni, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-[#0E2822] border border-[#C5A568]/40 text-[#DFC48E]">
                  {uni}
                </span>
              ))}
            </div>
            <p className="text-xs text-[#FAF9F5]/75 max-w-xl mx-auto">
              Our dedicated college counseling department provides individualized portfolio mentoring, standardized testing workshops, and international application guidance.
            </p>
          </div>

        </div>
      </section>


      {/* 6. CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#FAF9F5] rounded-2xl p-8 sm:p-12 border border-[#E2DED2] space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#173F35]">
            Ready to Discover Academic Excellence?
          </h2>
          <p className="text-sm text-[#5C6761] max-w-2xl mx-auto">
            Schedule an academic consultation with our admissions team to explore syllabus mappings, language electives, and grade readiness criteria.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <button
              onClick={onOpenAdmissionsModal}
              className="px-6 py-3 bg-[#C5A568] hover:bg-[#DFC48E] text-[#0E2822] text-sm font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Start Admission Process
            </button>
            <Link
              to="/admissions"
              className="px-6 py-3 bg-[#173F35] hover:bg-[#24584a] text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Review Admissions Roadmap
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
