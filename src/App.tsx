import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Story from './components/Story';
import Partners from './components/Partners';
import Insights from './components/Insights';
import Locations from './components/Locations';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import { AlertCircle, ArrowUp, Sparkles, Volume2 } from 'lucide-react';

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="app-container" className="min-h-screen bg-white text-slate-800 antialiased relative">
      
      {/* Editorial Announcement Banner */}
      {showNotification && (
        <div className="bg-slate-900 border-b border-slate-800 text-slate-300 py-2.5 px-6 text-[11px] font-medium tracking-wide relative z-50">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center space-x-2">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="font-bold text-white uppercase tracking-widest text-[9px]">Pillar Two Advisory:</span>
              <span className="font-light">UK Jurisdiction and OECD transfer pricing consultation queues are actively open.</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsInquiryOpen(true)}
                className="text-white font-semibold underline uppercase tracking-widest text-[9px] hover:text-blue-300 transition-colors"
              >
                Secure Priority Callback
              </button>
              <button
                onClick={() => setShowNotification(false)}
                className="text-slate-500 hover:text-white text-xs font-semibold"
                aria-label="Dismiss notification"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Primary Fixed Navigation */}
      <Navbar onOpenInquiry={() => setIsInquiryOpen(true)} />

      {/* Core Website Flow */}
      <main className="relative">
        <Hero onOpenInquiry={() => setIsInquiryOpen(true)} />
        <Stats />
        <Services />
        <Story />
        <Partners />
        <Insights />
        <Locations />
      </main>

      {/* Global Regulatory & Corporate Footer */}
      <Footer />

      {/* Interactive Consultation and NDA Request Form */}
      <ContactForm isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />

      {/* Discrete Scroll to Top Controller */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 bg-white hover:bg-slate-900 text-slate-950 hover:text-white p-3 border border-slate-200/80 shadow-md hover:shadow-lg transition-all duration-300 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
      </button>
    </div>
  );
}
