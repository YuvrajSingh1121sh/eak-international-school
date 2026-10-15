import React, { useState, useEffect } from 'react';
import { 
  X, FileText, Download, Printer, Calendar, Users, 
  CheckCircle2, Tag 
} from 'lucide-react';

export default function NoticeModal({ notice, onClose }) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (notice) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [notice, onClose]);

  if (!notice) return null;

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 4000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in font-sans"
      role="dialog"
      aria-modal="true"
      aria-labelledby="notice-modal-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#FDFDFB] rounded-2xl shadow-2xl border border-[#D8D4C8] overflow-hidden my-8 max-h-[90vh] flex flex-col print:max-h-none print:shadow-none print:border-none print:m-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Official Header */}
        <div className="bg-[#173F35] text-[#FAF9F5] px-6 py-4 flex items-center justify-between border-b-2 border-[#C5A568] print:bg-white print:text-black">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#C5A568]/20 border border-[#C5A568]/40 flex items-center justify-center text-[#C5A568]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A568]">
                Official School Memorandum
              </span>
              <p className="text-xs text-[#FAF9F5]/70 font-mono">
                Ref: {notice.id}
              </p>
            </div>
          </div>
          <button 
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#FAF9F5]/80 hover:text-white hover:bg-[#24584a] transition-colors print:hidden cursor-pointer"
            aria-label="Close memorandum"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Notice Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-left">
          {downloadSuccess && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs px-4 py-2.5 rounded-lg flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Simulated download complete: <strong>{notice.attachmentName || 'Circular.pdf'}</strong> (Demo artifact).</span>
            </div>
          )}

          {/* Letterhead Banner */}
          <div className="text-center pb-4 border-b border-[#ECE8DA]">
            <h3 className="text-xl font-bold text-[#173F35]">
              EAK INTERNATIONAL SCHOOL
            </h3>
            <p className="text-[11px] uppercase tracking-wider text-[#5C6761] mt-0.5">
              Office of Academic Affairs &bull; Metro Campus
            </p>
          </div>

          {/* Meta Details */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 bg-[#FAF9F5] rounded-xl border border-[#D8D4C8] text-xs">
            <div>
              <span className="text-[#89948E] block text-[10px] uppercase font-semibold">Date Issued:</span>
              <div className="flex items-center gap-1.5 font-semibold text-[#252A27] mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-[#C5A568]" />
                <span>{notice.displayDate}</span>
              </div>
            </div>

            <div>
              <span className="text-[#89948E] block text-[10px] uppercase font-semibold">Category:</span>
              <div className="flex items-center gap-1.5 font-semibold text-[#173F35] mt-0.5">
                <Tag className="w-3.5 h-3.5 text-[#C5A568]" />
                <span>{notice.category}</span>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <span className="text-[#89948E] block text-[10px] uppercase font-semibold">Target Audience:</span>
              <div className="flex items-center gap-1.5 font-semibold text-[#252A27] mt-0.5">
                <Users className="w-3.5 h-3.5 text-[#C5A568]" />
                <span className="truncate">{notice.targetAudience || 'School Community'}</span>
              </div>
            </div>
          </div>

          {/* Main Title & Body */}
          <div>
            <h2 id="notice-modal-title" className="text-xl md:text-2xl font-bold text-[#173F35] leading-snug">
              {notice.title}
            </h2>
            <div className="mt-4 text-xs md:text-sm text-[#3E4641] leading-relaxed space-y-3">
              <p>{notice.summary}</p>
              <p>{notice.content}</p>
              {notice.venue && (
                <div className="p-3 bg-[#FAF9F5] rounded border border-[#ECE8DA] text-xs font-medium text-[#173F35]">
                  <strong>Venue & Timing:</strong> {notice.venue} ({notice.time})
                </div>
              )}
            </div>
          </div>

          {/* Official Sign-off */}
          <div className="pt-6 border-t border-[#ECE8DA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
            <div>
              <p className="font-semibold text-base text-[#173F35]">Dr. Elizabeth Vance</p>
              <p className="text-[11px] text-[#5C6761]">Head of School & Principal, EAK International</p>
            </div>
            <div className="text-[11px] text-[#89948E] font-mono">
              Issued via Digital Circular System (Demo)
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#FAF9F5] border-t border-[#ECE8DA] flex items-center justify-between gap-3 print:hidden">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#5C6761] hover:text-[#252A27] cursor-pointer"
          >
            Close
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#173F35] border border-[#173F35]/30 rounded-lg hover:bg-white transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[#173F35] hover:bg-[#24584a] text-white rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#C5A568]" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
