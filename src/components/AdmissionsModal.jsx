import React, { useState, useEffect } from 'react';
import { 
  X, CheckCircle, AlertCircle, Sparkles, Send, 
  User, Mail, Phone, Calendar, BookOpen, Building 
} from 'lucide-react';

export default function AdmissionsModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    grade: 'Grade 1 (Primary Years)',
    parentName: '',
    email: '',
    phone: '',
    prevSchool: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [appId, setAppId] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const gradesList = [
    'Kindergarten / Early Years',
    'Grade 1 (Primary Years)',
    'Grade 2 (Primary Years)',
    'Grade 3 (Primary Years)',
    'Grade 4 (Primary Years)',
    'Grade 5 (Primary Years)',
    'Grade 6 (Middle School)',
    'Grade 7 (Middle School)',
    'Grade 8 (Middle School)',
    'Grade 9 (Cambridge IGCSE)',
    'Grade 10 (Cambridge IGCSE)',
    'Grade 11 (Cambridge A-Levels / Pre-University)',
    'Grade 12 (Cambridge A-Levels / Transfer)'
  ];

  const validate = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const randomId = `EAK-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setAppId(randomId);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      studentName: '',
      dob: '',
      grade: 'Grade 1 (Primary Years)',
      parentName: '',
      email: '',
      phone: '',
      prevSchool: '',
      message: ''
    });
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in font-sans"
      role="dialog"
      aria-modal="true"
      aria-labelledby="admissions-modal-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#FDFDFB] rounded-2xl shadow-2xl border border-[#D8D4C8] overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#173F35] text-[#FAF9F5] px-6 py-5 flex items-center justify-between border-b-2 border-[#C5A568]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#C5A568]/20 border border-[#C5A568]/40 flex items-center justify-center text-[#C5A568]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h2 id="admissions-modal-title" className="text-lg md:text-xl font-bold tracking-tight">
                Fast-Track Admissions Application
              </h2>
              <p className="text-xs text-[#FAF9F5]/70">
                Academic Session 2026–2027 &bull; Fictional Demonstration Form
              </p>
            </div>
          </div>
          <button 
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#FAF9F5]/80 hover:text-white hover:bg-[#24584a] transition-colors focus-visible:ring-2 focus-visible:ring-[#C5A568] cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto text-left">
          {isSubmitted ? (
            /* Success State */
            <div className="py-6 text-center space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10 text-emerald-700" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C5A568]/20 text-[#173F35] mb-2 border border-[#C5A568]/40">
                  Demo Application Generated
                </span>
                <h3 className="text-2xl font-bold text-[#173F35]">
                  Thank You, {formData.parentName}!
                </h3>
                <p className="text-sm text-[#5C6761] mt-1 max-w-md mx-auto">
                  Simulated application recorded under Reference ID: <strong className="text-[#173F35]">{appId}</strong> for candidate <strong className="text-[#173F35]">{formData.studentName}</strong> ({formData.grade}).
                </p>
              </div>

              {/* Summary Box */}
              <div className="bg-[#FAF9F5] border border-[#D8D4C8] rounded-xl p-4 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between border-b border-[#ECE8DA] pb-1.5">
                  <span className="text-[#5C6761]">Grade Track:</span>
                  <span className="font-semibold text-[#173F35]">{formData.grade}</span>
                </div>
                <div className="flex justify-between border-b border-[#ECE8DA] pb-1.5">
                  <span className="text-[#5C6761]">Contact Email:</span>
                  <span className="font-semibold text-[#173F35]">{formData.email}</span>
                </div>
                <div className="flex justify-between border-b border-[#ECE8DA] pb-1.5">
                  <span className="text-[#5C6761]">Contact Phone:</span>
                  <span className="font-semibold text-[#173F35]">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5C6761]">Next Step:</span>
                  <span className="font-semibold text-[#C5A568]">Admissions Counselor Follow-up (Simulated)</span>
                </div>
              </div>

              {/* Fictional Disclaimer Callout */}
              <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-lg text-left text-xs text-amber-900 leading-relaxed max-w-md mx-auto">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>Demonstration State:</strong> This is a prototype frontend form. No real submission occurred, and no actual email or database was contacted.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#173F35] hover:bg-[#24584a] text-white font-semibold rounded-lg text-sm transition-colors cursor-pointer"
                >
                  Done & Return to Website
                </button>
              </div>
            </div>
          ) : (
            /* Form State */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-[#FAF9F5] rounded-lg border border-[#D8D4C8] text-xs text-[#5C6761] leading-relaxed">
                Fill out this preliminary form to initiate the 5-step admissions assessment for the 2026–2027 academic year.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Student Full Name */}
                <div>
                  <label htmlFor="modalStudentName" className="block text-xs font-semibold text-[#252A27] mb-1">
                    Student Full Legal Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#89948E] absolute left-3 top-2.5" />
                    <input
                      id="modalStudentName"
                      type="text"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="e.g. Maya Sterling"
                      className={`w-full text-xs pl-9 pr-3 py-2 rounded-lg border ${
                        errors.studentName ? 'border-red-500 bg-red-50/30' : 'border-[#D8D4C8] bg-white'
                      } focus:outline-none focus:ring-1 focus:ring-[#C5A568]`}
                    />
                  </div>
                  {errors.studentName && (
                    <p className="text-[11px] text-red-600 mt-0.5">{errors.studentName}</p>
                  )}
                </div>

                {/* Date of Birth */}
                <div>
                  <label htmlFor="modalDob" className="block text-xs font-semibold text-[#252A27] mb-1">
                    Date of Birth *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#89948E] absolute left-3 top-2.5" />
                    <input
                      id="modalDob"
                      type="date"
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      className={`w-full text-xs pl-9 pr-3 py-2 rounded-lg border ${
                        errors.dob ? 'border-red-500 bg-red-50/30' : 'border-[#D8D4C8] bg-white'
                      } focus:outline-none focus:ring-1 focus:ring-[#C5A568]`}
                    />
                  </div>
                  {errors.dob && (
                    <p className="text-[11px] text-red-600 mt-0.5">{errors.dob}</p>
                  )}
                </div>
              </div>

              {/* Grade Applying For */}
              <div>
                <label htmlFor="modalGrade" className="block text-xs font-semibold text-[#252A27] mb-1">
                  Grade Applying For *
                </label>
                <div className="relative">
                  <BookOpen className="w-4 h-4 text-[#89948E] absolute left-3 top-2.5" />
                  <select
                    id="modalGrade"
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full text-xs pl-9 pr-3 py-2 rounded-lg border border-[#D8D4C8] bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A568]"
                  >
                    {gradesList.map((g, idx) => (
                      <option key={idx} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Parent/Guardian Name */}
                <div>
                  <label htmlFor="modalParentName" className="block text-xs font-semibold text-[#252A27] mb-1">
                    Parent / Guardian Full Legal Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#89948E] absolute left-3 top-2.5" />
                    <input
                      id="modalParentName"
                      type="text"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="e.g. Jonathan Sterling"
                      className={`w-full text-xs pl-9 pr-3 py-2 rounded-lg border ${
                        errors.parentName ? 'border-red-500 bg-red-50/30' : 'border-[#D8D4C8] bg-white'
                      } focus:outline-none focus:ring-1 focus:ring-[#C5A568]`}
                    />
                  </div>
                  {errors.parentName && (
                    <p className="text-[11px] text-red-600 mt-0.5">{errors.parentName}</p>
                  )}
                </div>

                {/* Parent Email */}
                <div>
                  <label htmlFor="modalEmail" className="block text-xs font-semibold text-[#252A27] mb-1">
                    Parent Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#89948E] absolute left-3 top-2.5" />
                    <input
                      id="modalEmail"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. j.sterling@example.com"
                      className={`w-full text-xs pl-9 pr-3 py-2 rounded-lg border ${
                        errors.email ? 'border-red-500 bg-red-50/30' : 'border-[#D8D4C8] bg-white'
                      } focus:outline-none focus:ring-1 focus:ring-[#C5A568]`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-red-600 mt-0.5">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Contact Phone */}
                <div>
                  <label htmlFor="modalPhone" className="block text-xs font-semibold text-[#252A27] mb-1">
                    Contact Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#89948E] absolute left-3 top-2.5" />
                    <input
                      id="modalPhone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full text-xs pl-9 pr-3 py-2 rounded-lg border ${
                        errors.phone ? 'border-red-500 bg-red-50/30' : 'border-[#D8D4C8] bg-white'
                      } focus:outline-none focus:ring-1 focus:ring-[#C5A568]`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-red-600 mt-0.5">{errors.phone}</p>
                  )}
                </div>

                {/* Previous School */}
                <div>
                  <label htmlFor="modalPrevSchool" className="block text-xs font-semibold text-[#252A27] mb-1">
                    Previous School / City (Optional)
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-[#89948E] absolute left-3 top-2.5" />
                    <input
                      id="modalPrevSchool"
                      type="text"
                      value={formData.prevSchool}
                      onChange={(e) => setFormData({ ...formData, prevSchool: e.target.value })}
                      placeholder="e.g. St. Jude Academy, London"
                      className="w-full text-xs pl-9 pr-3 py-2 rounded-lg border border-[#D8D4C8] bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A568]"
                    />
                  </div>
                </div>
              </div>

              {/* Additional message / queries */}
              <div>
                <label htmlFor="modalMessage" className="block text-xs font-semibold text-[#252A27] mb-1">
                  Specific Learning Needs or Additional Inquiries (Optional)
                </label>
                <textarea
                  id="modalMessage"
                  rows="2"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share any special talents, language background, or questions..."
                  className="w-full text-xs p-3 rounded-lg border border-[#D8D4C8] bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A568]"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3 border-t border-[#ECE8DA]">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-[#5C6761] hover:text-[#252A27] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#C5A568] hover:bg-[#DFC48E] text-[#0E2822] text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Application</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
