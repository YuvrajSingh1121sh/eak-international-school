import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Phone } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16 font-sans">
      <div className="max-w-md w-full bg-[#FAF9F5] p-8 sm:p-10 rounded-3xl border border-[#D8D4C8] shadow-sm text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#173F35] text-[#C5A568] flex items-center justify-center mx-auto shadow-md">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A568]">
            404 Error &bull; Page Not Found
          </span>
          <h1 className="text-3xl font-bold text-[#173F35]">
            Uncharted Territory
          </h1>
          <p className="text-xs sm:text-sm text-[#5C6761] leading-relaxed">
            The page you are looking for has been moved, archived, or does not exist on the EAK International School portal.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-2.5">
          <Link
            to="/"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#173F35] hover:bg-[#24584a] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <Home className="w-4 h-4 text-[#C5A568]" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/contact"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white hover:bg-[#ECE8DA] text-[#173F35] border border-[#D8D4C8] rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <Phone className="w-4 h-4 text-[#C5A568]" />
            <span>Contact Helpdesk</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
