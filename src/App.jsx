import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AdmissionsModal from './components/AdmissionsModal';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicsPage from './pages/AcademicsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import FacilitiesPage from './pages/FacilitiesPage';
import EventsNoticesPage from './pages/EventsNoticesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [isAdmissionsModalOpen, setIsAdmissionsModalOpen] = useState(false);

  const openAdmissionsModal = () => setIsAdmissionsModalOpen(true);
  const closeAdmissionsModal = () => setIsAdmissionsModalOpen(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F7F5EF] text-[#252A27] font-sans antialiased selection:bg-[#C5A568]/30 selection:text-[#173F35]">
        
        {/* Shared Responsive Header */}
        <Navbar onOpenAdmissionsModal={openAdmissionsModal} />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenAdmissionsModal={openAdmissionsModal} />} />
            <Route path="/about" element={<AboutPage onOpenAdmissionsModal={openAdmissionsModal} />} />
            <Route path="/academics" element={<AcademicsPage onOpenAdmissionsModal={openAdmissionsModal} />} />
            <Route path="/admissions" element={<AdmissionsPage onOpenAdmissionsModal={openAdmissionsModal} />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/events-notices" element={<EventsNoticesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Shared Comprehensive Footer */}
        <Footer onOpenAdmissionsModal={openAdmissionsModal} />

        {/* Global Admissions Fast-Track Modal */}
        <AdmissionsModal
          isOpen={isAdmissionsModalOpen}
          onClose={closeAdmissionsModal}
        />

      </div>
    </BrowserRouter>
  );
}
