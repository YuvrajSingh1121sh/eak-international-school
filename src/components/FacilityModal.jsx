import React, { useEffect } from 'react';
import { 
  X, Check, Shield, Users, Layers, AlertCircle, 
  Calendar 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FacilityModal({ facility, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (facility) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [facility, onClose]);

  if (!facility) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in font-sans"
      role="dialog"
      aria-modal="true"
      aria-labelledby="facility-modal-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#FDFDFB] rounded-2xl shadow-2xl border border-[#D8D4C8] overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image with Overlay Tag */}
        <div className="relative h-64 sm:h-72 w-full bg-[#173F35] overflow-hidden shrink-0">
          <img 
            src={facility.image} 
            alt={facility.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/30" />
          
          <button 
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors focus-visible:ring-2 focus-visible:ring-[#C5A568] cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white text-left">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#C5A568] text-[#0E2822]">
                {facility.category}
              </span>
              {facility.isProposed && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-amber-400 text-black">
                  Fictional Proposed Facility
                </span>
              )}
            </div>
            <h2 id="facility-modal-title" className="text-2xl md:text-3xl font-bold leading-tight">
              {facility.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-left">
          {facility.isProposed && (
            <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3 text-xs text-amber-900">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-amber-950 font-semibold mb-0.5">Fictional Proposed Facility Notice:</strong>
                This facility is part of the fictional Phase II master plan concept for EAK International School. It is presented for architectural illustration purposes.
              </div>
            </div>
          )}

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-[#FAF9F5] rounded-xl border border-[#D8D4C8] text-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#173F35]/10 text-[#173F35] flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[#89948E] text-[10px] uppercase font-semibold block">Capacity:</span>
                <span className="font-semibold text-[#173F35]">{facility.capacity}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#C5A568]/20 text-[#0E2822] flex items-center justify-center">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[#89948E] text-[10px] uppercase font-semibold block">Safety Standards:</span>
                <span className="font-semibold text-[#173F35]">ISO & International School Safe</span>
              </div>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#5C6761] mb-2">
              Facility Overview & Pedagogical Purpose
            </h3>
            <p className="text-sm text-[#3E4641] leading-relaxed">
              {facility.fullDesc}
            </p>
          </div>

          {/* Features / Equipment List */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#5C6761] mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#C5A568]" />
              <span>Key Features & Specifications</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {facility.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#252A27] bg-[#FAF9F5] p-2.5 rounded-lg border border-[#ECE8DA]">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#FAF9F5] border-t border-[#ECE8DA] flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#5C6761] hover:text-[#252A27] cursor-pointer"
          >
            Close
          </button>

          <Link
            to="/contact#visit"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#173F35] hover:bg-[#24584a] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C5A568]" />
            <span>Schedule Campus Visit</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
