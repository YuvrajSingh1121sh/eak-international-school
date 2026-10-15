import React, { useState } from 'react';
import { 
  CheckCircle2, ChevronDown, Calendar, 
  AlertCircle, 
  Send, User, Building, Check, Award 
} from 'lucide-react';
import { 
  admissionsSteps, eligibilityCriteria, requiredDocuments, 
  admissionDates, admissionFaqs 
} from '../data/schoolData';

export default function AdmissionsPage() {
  // FAQ accordion state
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  // Interactive Document Checklist state (for parent convenience)
  const [checkedDocs, setCheckedDocs] = useState({});

  // Inline Demo Application Form state
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    grade: 'Grade 1 (Primary Years)',
    gender: 'Female',
    parentName: '',
    relationship: 'Mother',
    email: '',
    phone: '',
    prevSchool: '',
    city: '',
    transportRequired: 'Yes',
    notes: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [generatedAppId, setGeneratedAppId] = useState('');

  const toggleDocCheck = (idx) => {
    setCheckedDocs(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.studentName.trim()) {
      errs.studentName = 'Student full legal name is required.';
    }
    if (!formData.dob) {
      errs.dob = 'Date of birth is required.';
    }
    if (!formData.parentName.trim()) {
      errs.parentName = 'Parent or guardian legal name is required.';
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'A valid parent email address is required.';
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = 'A valid contact telephone number is required.';
    }
    return errs;
  };

  const handleInlineSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    const randomId = `EAK-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setGeneratedAppId(randomId);
    setIsFormSubmitted(true);
  };

  const handleResetInline = () => {
    setIsFormSubmitted(false);
    setFormData({
      studentName: '',
      dob: '',
      grade: 'Grade 1 (Primary Years)',
      gender: 'Female',
      parentName: '',
      relationship: 'Mother',
      email: '',
      phone: '',
      prevSchool: '',
      city: '',
      transportRequired: 'Yes',
      notes: ''
    });
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-16 font-sans">
      
      {/* 1. HERO BANNER - Balanced layout with image to eliminate empty space */}
      <section className="bg-[#173F35] text-[#FAF9F5] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C5A568]/20 text-[#DFC48E] border border-[#C5A568]/40">
                Admissions Academic Year 2026–2027
              </span>
              <h1 className="hero-heading text-white">
                Begin Your Family's Journey at EAK.
              </h1>
              <p className="text-base sm:text-lg text-[#FAF9F5]/90 leading-relaxed font-normal max-w-2xl">
                We welcome applications from curious, ambitious students across all cultural and national backgrounds. Explore our transparent 5-step admissions process, entry standards, and key application milestones.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="#apply-form"
                  className="px-6 py-3 bg-[#C5A568] hover:bg-[#DFC48E] text-[#0E2822] text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  Apply Online (Demo)
                </a>
                <a
                  href="#process"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                >
                  5-Step Process
                </a>
              </div>

              <div className="pt-2 text-xs text-[#DFC48E] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Applications actively reviewed on rolling priority for 2026–27</span>
              </div>
            </div>

            {/* Right Column: High Quality School Photograph */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80"
                  alt="EAK International School students collaborating in classroom"
                  className="w-full h-72 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <p className="text-xs font-semibold text-white">Collaborative & Inquiry-Based Classrooms</p>
                  <p className="text-[11px] text-[#DFC48E]">Class sizes capped at 20–24 students for personalized attention</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE 5-STEP ADMISSIONS PROCESS */}
      <section id="process" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A568]">
            Admissions Roadmap
          </span>
          <h2 className="section-heading text-[#173F35]">
            The 5-Step Path to Enrollment
          </h2>
          <p className="text-sm text-[#5C6761]">
            Our streamlined admissions process ensures a warm, transparent, and respectful evaluation for every prospective scholar and their family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {admissionsSteps.map((step, idx) => (
            <div 
              key={idx}
              className="bg-[#FAF9F5] rounded-2xl p-6 border border-[#D8D4C8] hover:border-[#C5A568] hover:shadow-md transition-all text-left flex flex-col justify-between group"
            >
              <div>
                <span className="text-2xl font-bold text-[#C5A568] block mb-2 group-hover:text-[#173F35] transition-colors">
                  {step.step}
                </span>
                <h3 className="card-heading text-[#173F35] mb-2 leading-snug">
                  {step.name}
                </h3>
                <p className="text-xs text-[#5C6761] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#ECE8DA] text-[11px] font-semibold text-[#173F35] flex items-center justify-between">
                <span>Phase {idx + 1}</span>
                <span className="text-[#C5A568] group-hover:translate-x-0.5 transition-transform">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ELIGIBILITY CRITERIA & AGE MATRIX */}
      <section className="bg-[#FAF8F2] border-y border-[#D8D4C8] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A568]">
              Entry Standards
            </span>
            <h2 className="section-heading text-[#173F35]">
              Eligibility & Grade Age Cut-Offs
            </h2>
            <p className="text-sm text-[#5C6761]">
              Age criteria are calculated as of September 1 of the academic entry year in compliance with Cambridge International guidelines.
            </p>
          </div>

          <div className="bg-[#FAF9F5] rounded-2xl border border-[#D8D4C8] shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#173F35] text-[#FAF9F5] text-xs uppercase font-semibold tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Academic Stage</th>
                    <th className="px-6 py-4">Age Cut-Off (As of Sept 1)</th>
                    <th className="px-6 py-4">Evaluation & Document Prerequisite</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#ECE8DA]">
                  {eligibilityCriteria.map((item, idx) => (
                    <tr key={idx} className="hover:bg-white transition-colors">
                      <td className="px-6 py-4 font-semibold text-[#173F35]">
                        {item.stage}
                      </td>
                      <td className="px-6 py-4 font-mono font-medium text-[#C5A568]">
                        {item.ageCutoff}
                      </td>
                      <td className="px-6 py-4 text-[#5C6761] leading-relaxed">
                        {item.requirements}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REQUIRED DOCUMENTS & IMPORTANT DATES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Interactive Required Documents Checklist (6 Cols) */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A568] block">
                Verification Checklist
              </span>
              <h3 className="section-heading text-[#173F35]">
                Required Documents Checklist
              </h3>
              <p className="text-xs text-[#5C6761] mt-1">
                You may click each item below to check off documents as you gather them for your family’s application.
              </p>
            </div>

            <div className="space-y-2.5">
              {requiredDocuments.map((doc, idx) => {
                const isChecked = !!checkedDocs[idx];
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleDocCheck(idx)}
                    className={`w-full p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 text-left ${
                      isChecked 
                        ? 'bg-emerald-50/60 border-emerald-300 text-emerald-900' 
                        : 'bg-[#FAF9F5] border-[#D8D4C8] hover:border-[#C5A568] text-[#3E4641]'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isChecked ? 'bg-emerald-600 text-white' : 'border border-[#89948E] bg-white'
                    }`}>
                      {isChecked && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <span className={`text-xs leading-relaxed ${isChecked ? 'line-through text-emerald-800/80 font-medium' : ''}`}>
                      {doc}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="p-3.5 bg-[#FAF8F2] rounded-lg border border-[#ECE8DA] text-xs text-[#5C6761]">
              <strong>Note:</strong> Original documents must be presented during the final enrollment verification stage. Digital scans suffice for initial online application.
            </div>
          </div>

          {/* Right Column: Important Admissions Dates (6 Cols) */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A568] block">
                Session 2026–2027
              </span>
              <h3 className="section-heading text-[#173F35]">
                Key Application Dates & Deadlines
              </h3>
              <p className="text-xs text-[#5C6761] mt-1">
                Please note that seat capacities are capped at 20–24 pupils per classroom to preserve our 1:10 student-to-teacher ratio.
              </p>
            </div>

            <div className="space-y-3">
              {admissionDates.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-[#FAF9F5] p-4 rounded-xl border border-[#D8D4C8] flex items-center justify-between gap-4"
                >
                  <div className="space-y-0.5">
                    <p className="text-sm font-semibold text-[#173F35]">
                      {item.event}
                    </p>
                    <p className="text-xs text-[#C5A568] font-medium flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </p>
                  </div>

                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider shrink-0 ${
                    item.status === 'Active' 
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : 'bg-[#ECE8DA] text-[#5C6761]'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Tuition Transparency Banner */}
            <div className="p-5 bg-[#173F35] text-[#FAF9F5] rounded-2xl border border-[#24584a] space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#DFC48E]">
                <Award className="w-4 h-4" />
                <span>The Founder's Crest Merit Scholarship</span>
              </div>
              <p className="text-xs text-[#FAF9F5]/85 leading-relaxed">
                Exceptional applicants entering Grades 9 and 11 exhibiting distinction in academic olympiads, regional athletics, or performing arts may apply for tuition fee coverage between 25% and 75%.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. INLINE DEMO APPLICATION FORM (FRONTEND DEMONSTRATION) */}
      <section id="apply-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-[#FAF9F5] rounded-3xl border-2 border-[#C5A568] shadow-lg overflow-hidden">
          
          {/* Header */}
          <div className="bg-[#173F35] text-[#FAF9F5] p-6 sm:p-8 text-left border-b-2 border-[#C5A568]">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#C5A568] text-[#0E2822] mb-2">
              Interactive Prototype
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Online Admissions Application Form
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF9F5]/85 mt-1">
              Please complete this demonstration application to initiate the candidate evaluation process.
            </p>
          </div>

          <div className="p-6 sm:p-10 text-left">
            {isFormSubmitted ? (
              /* Success State */
              <div className="py-8 text-center space-y-6 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10 text-emerald-700" />
                </div>

                <div className="space-y-1">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C5A568]/20 text-[#173F35] border border-[#C5A568]/40">
                    Application Recorded (Demo State)
                  </span>
                  <h3 className="section-heading text-[#173F35] pt-2">
                    Application Successfully Prepared!
                  </h3>
                  <p className="text-sm text-[#5C6761] max-w-lg mx-auto">
                    Simulated Docket Reference: <strong className="text-[#173F35] font-mono">{generatedAppId}</strong>.
                  </p>
                </div>

                {/* Summary Card */}
                <div className="bg-[#FAF8F2] border border-[#D8D4C8] rounded-xl p-5 text-left text-xs space-y-2.5 max-w-lg mx-auto">
                  <div className="flex justify-between border-b border-[#ECE8DA] pb-1.5">
                    <span className="text-[#5C6761]">Candidate Name:</span>
                    <span className="font-semibold text-[#173F35]">{formData.studentName}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#ECE8DA] pb-1.5">
                    <span className="text-[#5C6761]">Date of Birth:</span>
                    <span className="font-semibold text-[#173F35]">{formData.dob}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#ECE8DA] pb-1.5">
                    <span className="text-[#5C6761]">Applied Grade:</span>
                    <span className="font-semibold text-[#173F35]">{formData.grade}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#ECE8DA] pb-1.5">
                    <span className="text-[#5C6761]">Parent/Guardian:</span>
                    <span className="font-semibold text-[#173F35]">{formData.parentName} ({formData.relationship})</span>
                  </div>
                  <div className="flex justify-between border-b border-[#ECE8DA] pb-1.5">
                    <span className="text-[#5C6761]">Contact Details:</span>
                    <span className="font-semibold text-[#173F35]">{formData.email} &bull; {formData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5C6761]">School Bus Fleet:</span>
                    <span className="font-semibold text-[#C5A568]">{formData.transportRequired}</span>
                  </div>
                </div>

                {/* Clear Demo Disclaimer Callout */}
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-left text-xs text-amber-900 leading-relaxed max-w-lg mx-auto">
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-amber-950 font-semibold mb-0.5">Frontend-Only Demonstration Notice:</strong>
                      This is a prototype form for demonstration purposes. No application data is transmitted to an external server or stored in a database, and no fee is collected.
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleResetInline}
                    className="px-6 py-2.5 bg-[#173F35] hover:bg-[#24584a] text-white font-semibold rounded-lg text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Submit Another Demo Application
                  </button>
                </div>
              </div>
            ) : (
              /* Active Form */
              <form onSubmit={handleInlineSubmit} className="space-y-6">
                
                {/* Section A: Student Information */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#173F35] pb-2 border-b border-[#ECE8DA] mb-4 flex items-center gap-1.5">
                    <User className="w-4 h-4 text-[#C5A568]" />
                    <span>Candidate (Student) Details</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label htmlFor="studentName" className="block text-xs font-semibold text-[#252A27] mb-1">
                        Student Full Legal Name *
                      </label>
                      <input
                        id="studentName"
                        type="text"
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        placeholder="e.g. Maya Sterling"
                        className={`w-full text-xs px-3 py-2.5 rounded-lg border ${
                          formErrors.studentName ? 'border-red-500 bg-red-50/20' : 'border-[#D8D4C8] bg-white'
                        } focus:outline-none focus:ring-1 focus:ring-[#C5A568]`}
                      />
                      {formErrors.studentName && (
                        <p className="text-[11px] text-red-600 mt-1">{formErrors.studentName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="dob" className="block text-xs font-semibold text-[#252A27] mb-1">
                        Date of Birth *
                      </label>
                      <input
                        id="dob"
                        type="date"
                        value={formData.dob}
                        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                        className={`w-full text-xs px-3 py-2.5 rounded-lg border ${
                          formErrors.dob ? 'border-red-500 bg-red-50/20' : 'border-[#D8D4C8] bg-white'
                        } focus:outline-none focus:ring-1 focus:ring-[#C5A568]`}
                      />
                      {formErrors.dob && (
                        <p className="text-[11px] text-red-600 mt-1">{formErrors.dob}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label htmlFor="grade" className="block text-xs font-semibold text-[#252A27] mb-1">
                        Grade Applying For *
                      </label>
                      <select
                        id="grade"
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#D8D4C8] bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A568]"
                      >
                        <option>Kindergarten / Early Years</option>
                        <option>Grade 1 (Primary Years)</option>
                        <option>Grade 2 (Primary Years)</option>
                        <option>Grade 3 (Primary Years)</option>
                        <option>Grade 4 (Primary Years)</option>
                        <option>Grade 5 (Primary Years)</option>
                        <option>Grade 6 (Middle School)</option>
                        <option>Grade 7 (Middle School)</option>
                        <option>Grade 8 (Middle School)</option>
                        <option>Grade 9 (Cambridge IGCSE)</option>
                        <option>Grade 10 (Cambridge IGCSE)</option>
                        <option>Grade 11 (Cambridge A-Levels)</option>
                        <option>Grade 12 (Cambridge A-Levels)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="gender" className="block text-xs font-semibold text-[#252A27] mb-1">
                        Gender Identification
                      </label>
                      <select
                        id="gender"
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#D8D4C8] bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A568]"
                      >
                        <option>Female</option>
                        <option>Male</option>
                        <option>Non-Binary / Prefer to self-describe</option>
                        <option>Prefer not to say</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section B: Parent / Guardian Information */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#173F35] pb-2 border-b border-[#ECE8DA] mb-4 flex items-center gap-1.5">
                    <User className="w-4 h-4 text-[#C5A568]" />
                    <span>Parent / Guardian Information</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label htmlFor="parentName" className="block text-xs font-semibold text-[#252A27] mb-1">
                        Parent / Guardian Full Legal Name *
                      </label>
                      <input
                        id="parentName"
                        type="text"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        placeholder="e.g. Jonathan Sterling"
                        className={`w-full text-xs px-3 py-2.5 rounded-lg border ${
                          formErrors.parentName ? 'border-red-500 bg-red-50/20' : 'border-[#D8D4C8] bg-white'
                        } focus:outline-none focus:ring-1 focus:ring-[#C5A568]`}
                      />
                      {formErrors.parentName && (
                        <p className="text-[11px] text-red-600 mt-1">{formErrors.parentName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="relationship" className="block text-xs font-semibold text-[#252A27] mb-1">
                        Relationship
                      </label>
                      <select
                        id="relationship"
                        value={formData.relationship}
                        onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                        className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#D8D4C8] bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A568]"
                      >
                        <option>Mother</option>
                        <option>Father</option>
                        <option>Legal Guardian</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label htmlFor="parentEmail" className="block text-xs font-semibold text-[#252A27] mb-1">
                        Parent Email Address *
                      </label>
                      <input
                        id="parentEmail"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="j.sterling@example.com"
                        className={`w-full text-xs px-3 py-2.5 rounded-lg border ${
                          formErrors.email ? 'border-red-500 bg-red-50/20' : 'border-[#D8D4C8] bg-white'
                        } focus:outline-none focus:ring-1 focus:ring-[#C5A568]`}
                      />
                      {formErrors.email && (
                        <p className="text-[11px] text-red-600 mt-1">{formErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="parentPhone" className="block text-xs font-semibold text-[#252A27] mb-1">
                        Primary Contact Phone Number *
                      </label>
                      <input
                        id="parentPhone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full text-xs px-3 py-2.5 rounded-lg border ${
                          formErrors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#D8D4C8] bg-white'
                        } focus:outline-none focus:ring-1 focus:ring-[#C5A568]`}
                      />
                      {formErrors.phone && (
                        <p className="text-[11px] text-red-600 mt-1">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Section C: Previous School & Support Needs */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#173F35] pb-2 border-b border-[#ECE8DA] mb-4 flex items-center gap-1.5">
                    <Building className="w-4 h-4 text-[#C5A568]" />
                    <span>Academic Background & Services</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="prevSchool" className="block text-xs font-semibold text-[#252A27] mb-1">
                        Previous School Attended (If any)
                      </label>
                      <input
                        id="prevSchool"
                        type="text"
                        value={formData.prevSchool}
                        onChange={(e) => setFormData({ ...formData, prevSchool: e.target.value })}
                        placeholder="e.g. St. Jude Grammar School"
                        className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#D8D4C8] bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A568]"
                      />
                    </div>

                    <div>
                      <label htmlFor="transportRequired" className="block text-xs font-semibold text-[#252A27] mb-1">
                        Bus Transportation Required?
                      </label>
                      <select
                        id="transportRequired"
                        value={formData.transportRequired}
                        onChange={(e) => setFormData({ ...formData, transportRequired: e.target.value })}
                        className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#D8D4C8] bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A568]"
                      >
                        <option>Yes (Morning & Afternoon Bus Fleet)</option>
                        <option>No (Private Family Transport)</option>
                        <option>Undecided / Requesting Route Information</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="notes" className="block text-xs font-semibold text-[#252A27] mb-1">
                      Additional Notes or Special Learning Considerations (Optional)
                    </label>
                    <textarea
                      id="notes"
                      rows="3"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Share any special talents, language preferences, medical allergies, or specific questions for the admissions committee..."
                      className="w-full text-xs p-3 rounded-lg border border-[#D8D4C8] bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A568]"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-[#ECE8DA] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-[#89948E]">
                    Frontend-only demonstration form. No actual data will be transmitted.
                  </p>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#C5A568] hover:bg-[#DFC48E] text-[#0E2822] text-xs font-bold uppercase tracking-wider rounded-lg shadow-md transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Demo Application</span>
                  </button>
                </div>

              </form>
            )}
          </div>
        </div>
      </section>

      {/* 6. ADMISSIONS FAQS ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A568]">
            Frequently Asked Questions
          </span>
          <h2 className="section-heading text-[#173F35]">
            Everything You Need to Know
          </h2>
          <p className="text-sm text-[#5C6761]">
            Common inquiries regarding admission assessments, scholarships, school buses, and language scaffolding.
          </p>
        </div>

        <div className="space-y-3">
          {admissionFaqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-[#FAF9F5] rounded-xl border border-[#D8D4C8] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A568] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#173F35]">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-[#C5A568] shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-[#173F35]' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#3E4641] leading-relaxed border-t border-[#ECE8DA] bg-white/60 animate-in fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
