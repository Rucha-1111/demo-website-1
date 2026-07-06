import React, { useState } from 'react';
import { PARTNERS } from '../data';
import { Partner } from '../types';
import { Linkedin, Mail, ArrowUpRight, Award, GraduationCap, X, ChevronRight } from 'lucide-react';

export default function Partners() {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  return (
    <section id="partners" className="py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="text-xs uppercase tracking-widest font-bold text-[#3182CE]">
              LEADERSHIP & INTELLECT
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl serif font-bold text-[#1A365D] tracking-tight">
              Our Partners
            </h2>
            <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed">
              Vanguard is led by senior practitioners with histories of excellence in international finance, fiscal policy, and commercial transaction assurance.
            </p>
          </div>
          <div className="text-xs uppercase tracking-widest font-bold text-slate-400 border-b border-slate-200 pb-2">
            REGULATED BY THE ICAEW & STEP CODES
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="bg-white border border-slate-200/60 shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-shadow duration-300"
            >
              {/* Partner Portrait Container */}
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Visual action cue */}
                <button
                  onClick={() => setSelectedPartner(partner)}
                  className="absolute bottom-4 right-4 bg-white hover:bg-[#1A365D] text-slate-950 hover:text-white w-10 h-10 flex items-center justify-center rounded-none shadow-md transition-colors duration-300"
                  aria-label={`View bio for ${partner.name}`}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>

              {/* Partner Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="serif text-lg font-bold text-[#1A365D] group-hover:text-[#3182CE] transition-colors duration-200">
                        {partner.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">{partner.credentials}</p>
                    </div>
                  </div>
                  <p className="text-xs text-[#3182CE] uppercase tracking-widest font-bold mt-2">
                    {partner.role}
                  </p>
                  
                  {/* Specialties tag block */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {partner.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="text-[9px] uppercase tracking-wider bg-slate-50 border border-slate-100 px-2 py-0.5 text-slate-600 font-bold"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-slate-500 font-light mt-4 leading-relaxed line-clamp-3">
                    {partner.bio}
                  </p>
                </div>

                {/* Footer card controls */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedPartner(partner)}
                    className="text-xs font-bold text-slate-950 hover:text-[#3182CE] transition-colors duration-200 flex items-center space-x-1"
                  >
                    <span>Read Executive Bio</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  
                  <div className="flex items-center space-x-3 text-slate-400">
                    <a
                      href={`mailto:${partner.email}`}
                      className="hover:text-[#1A365D] transition-colors"
                      title={`Email ${partner.name}`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href={partner.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#1A365D] transition-colors"
                      title="LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Partner Bio Modal */}
        {selectedPartner && (
          <div className="fixed inset-0 bg-[#1A365D]/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-3xl rounded-none shadow-2xl overflow-hidden relative border border-slate-200/50 animate-in fade-in zoom-in-95 duration-200">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedPartner(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 p-2 z-10 bg-white/80 backdrop-blur-xs border border-slate-100"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Column 1: Image & Contacts (md:col-span-5) */}
                <div className="md:col-span-5 bg-[#1A365D] text-white p-8 flex flex-col justify-between items-center text-center">
                  <div className="space-y-4 w-full">
                    <div className="w-32 h-32 rounded-none overflow-hidden mx-auto border border-white/10 bg-[#1A365D]/50">
                      <img
                        src={selectedPartner.image}
                        alt={selectedPartner.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="serif text-xl font-bold">{selectedPartner.name}</h4>
                      <p className="text-[10px] text-[#3182CE] uppercase tracking-widest mt-1">
                        {selectedPartner.credentials}
                      </p>
                      <p className="text-xs text-white font-bold uppercase tracking-widest mt-2">
                        {selectedPartner.role}
                      </p>
                    </div>
                  </div>

                  <div className="w-full pt-8 border-t border-white/10 mt-8 space-y-3">
                    <a
                      href={`mailto:${selectedPartner.email}`}
                      className="flex items-center justify-center space-x-2 text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 py-2 w-full transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#3182CE]" />
                      <span>{selectedPartner.email}</span>
                    </a>
                    <a
                      href={selectedPartner.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 py-2 w-full transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-[#3182CE]" />
                      <span>Verify on LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Column 2: Career History & Jurisdictions (md:col-span-7) */}
                <div className="md:col-span-7 p-8 md:p-12 space-y-6">
                  <div className="space-y-2">
                    <div className="inline-flex items-center space-x-1.5 text-[#3182CE]">
                      <Award className="w-4 h-4" />
                      <span className="text-[10px] uppercase tracking-widest font-bold">
                        EXECUTIVE STATEMENT & EXPERIENCE
                      </span>
                    </div>
                    <p className="text-slate-700 font-light text-sm sm:text-base leading-relaxed">
                      {selectedPartner.bio}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <div className="flex items-center space-x-2 text-[#1A365D] font-bold text-xs uppercase tracking-widest">
                      <GraduationCap className="w-4 h-4 text-[#3182CE]" />
                      <span>Jurisdictions & Key Practice Focus</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedPartner.specialties.map((spec) => (
                        <div
                          key={spec}
                          className="text-xs font-light text-slate-600 bg-slate-50 border border-slate-100 p-2.5"
                        >
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 text-[10px] text-slate-400 uppercase tracking-wider font-bold flex items-center justify-between">
                    <span>Vanguard Partners Board</span>
                    <span>CONFIDENTIAL BIOGRAPHY</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
