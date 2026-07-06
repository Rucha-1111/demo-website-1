import React from 'react';
import { ShieldCheck, Compass, ArrowDown, Award } from 'lucide-react';

interface HeroProps {
  onOpenInquiry: () => void;
}

export default function Hero({ onOpenInquiry }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center bg-white overflow-hidden border-b border-slate-100"
    >
      {/* Abstract structural line background from Professional Polish */}
      <div className="absolute inset-0 opacity-[0.06] flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="w-[150%] h-[1px] bg-[#1A365D] rotate-[30deg] -translate-y-32"></div>
        <div className="w-[150%] h-[1px] bg-[#1A365D] rotate-[30deg] -translate-y-16"></div>
        <div className="w-[150%] h-[1px] bg-[#1A365D] rotate-[30deg]"></div>
        <div className="w-[150%] h-[1px] bg-[#1A365D] rotate-[30deg] translate-y-16"></div>
        <div className="w-[150%] h-[1px] bg-[#1A365D] rotate-[30deg] translate-y-32"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Copywriting & Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="text-[10px] font-bold tracking-[0.3em] text-[#3182CE] uppercase">
              Chartered Accountants • ESTABLISHED 2004
            </div>

            <h1 className="text-[#1A365D] serif leading-[1.1] tracking-tight text-5xl sm:text-6xl lg:text-7xl font-bold">
              Stewardship of <br/>Generational Capital.
            </h1>

            <p className="text-slate-500 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-xl">
              Vanguard & Co. delivers absolute precision, strict compliance, and elegant corporate structures. We serve multinational corporations, fast-growing technology enterprises, and elite family offices.
            </p>

            {/* Strategic actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenInquiry}
                className="text-center text-xs uppercase tracking-widest font-bold px-8 py-4 bg-[#1A365D] hover:bg-[#3182CE] text-white transition-all duration-300 shadow-md animate-none"
              >
                Request Confidential Consultation
              </button>
              <a
                href="#services"
                className="text-center text-xs uppercase tracking-widest font-bold px-8 py-4 border border-slate-200 hover:border-[#1A365D] text-slate-500 hover:text-[#1A365D] transition-all duration-300 flex items-center justify-center gap-2 bg-white shadow-xs"
              >
                <span>Explore Advisory Areas</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Credibility accents */}
            <div className="pt-6 grid grid-cols-2 gap-6 border-t border-slate-100 max-w-lg">
              <div className="flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-[#3182CE] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[11px] uppercase tracking-widest font-bold text-[#1A365D]">
                    Absolute Discretion
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Regulated under rigid security and confidentiality guidelines.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Compass className="w-5 h-5 text-[#3182CE] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[11px] uppercase tracking-widest font-bold text-[#1A365D]">
                    Global Perspective
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Structured to navigate cross-border regulatory complexities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Editorial-framed Architecture Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 p-4 border border-slate-200 bg-white shadow-xl max-w-md mx-auto">
              <div className="overflow-hidden aspect-4/3 lg:aspect-3/4">
                <img
                  src="/src/assets/images/hero_architecture_1783353672384.jpg"
                  alt="Vanguard Architecture"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Image footnote card */}
              <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                <span>VANGUARD HQ ATRIUM</span>
                <span>SECURE PREMISES</span>
              </div>
            </div>

            {/* Floating metric card from Professional Polish design */}
            <div className="absolute -bottom-4 -right-2 sm:-right-6 z-20 p-6 bg-white border-l-4 border-[#1A365D] shadow-2xl max-w-[200px]">
              <div className="text-3xl serif text-[#1A365D] font-bold">22+</div>
              <div className="text-[9px] font-bold tracking-widest text-slate-400 uppercase mt-1">Years of Excellence</div>
            </div>

            {/* Background design accents */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-slate-200 -z-0 hidden sm:block pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b border-l border-slate-200 -z-0 hidden sm:block pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
