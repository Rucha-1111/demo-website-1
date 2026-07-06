import React, { useState } from 'react';
import { SERVICES } from '../data';
import { Shield, FileText, TrendingUp, Users, ArrowRight, CircleDot } from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === activeTab) || SERVICES[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'audit-assurance':
        return <Shield className="w-5 h-5" />;
      case 'tax-advisory':
        return <FileText className="w-5 h-5" />;
      case 'corporate-finance':
        return <TrendingUp className="w-5 h-5" />;
      case 'strategic-wealth':
        return <Users className="w-5 h-5" />;
      default:
        return <Shield className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs uppercase tracking-widest font-bold text-[#3182CE]">
            OUR CORE ADVOCACY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl serif font-bold text-[#1A365D] tracking-tight">
            Comprehensive Corporate Financial Counsel
          </h2>
          <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed">
            Our specialized divisions provide rigorous compliance verification, strategic cross-border tax alignment, and capital engineering to satisfy corporate boards and family office stewards.
          </p>
        </div>

        {/* Editorial Tab Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Tab Selection Column (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-2 border-l border-slate-100 pl-0">
            {SERVICES.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`w-full text-left p-6 transition-all duration-300 relative border-l-2 flex flex-col items-start gap-3 ${
                  activeTab === service.id
                    ? 'border-[#1A365D] bg-[#F8FAFC]'
                    : 'border-transparent hover:bg-[#F8FAFC]/50'
                }`}
              >
                {/* Index / Number indicator */}
                <div className="flex justify-between items-center w-full">
                  <span className="serif text-xs text-slate-400 font-bold tracking-widest">
                    DIVISION 0{index + 1}
                  </span>
                  <span className={activeTab === service.id ? 'text-[#1A365D]' : 'text-slate-400'}>
                    {getIcon(service.id)}
                  </span>
                </div>
                
                <h3 className="serif text-lg font-bold text-[#1A365D] mt-1">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-500 font-light line-clamp-1">
                  {service.description}
                </p>
              </button>
            ))}
          </div>

          {/* Active Tab Content Panel (lg:col-span-8) */}
          <div className="lg:col-span-8 bg-[#F8FAFC] border border-slate-200/60 p-8 lg:p-12 space-y-8 min-h-[480px]">
            {/* Title & Description */}
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500 px-3 py-1 bg-white border border-slate-200 inline-block">
                {activeService.category}
              </span>
              <h3 className="text-2xl lg:text-3xl serif font-bold text-[#1A365D]">
                {activeService.title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
                {activeService.description}
              </p>
            </div>

            {/* Service Subdivisions */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-bold text-[#1A365D]">
                Key Operations
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeService.detailedPoints.map((point, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <CircleDot className="w-4 h-4 text-[#3182CE] mt-0.5 shrink-0" />
                    <span className="text-xs text-slate-600 font-light">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Benefit Shaded Box */}
            <div className="p-5 bg-white border-l-4 border-[#1A365D] shadow-xs space-y-1">
              <h5 className="text-[10px] uppercase tracking-widest font-bold text-[#1A365D]">
                Strategic Dividend
              </h5>
              <p className="text-xs text-[#1A365D] font-light leading-relaxed">
                {activeService.clientBenefit}
              </p>
            </div>

            {/* Case Study Feature */}
            {activeService.caseStudyTitle && (
              <div className="pt-6 border-t border-slate-200 space-y-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
                  REPRESENTATIVE TRANSACTIONS & SUCCESS
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">
                      {activeService.caseStudyTitle}
                    </h5>
                    <p className="text-xs text-slate-500 font-light mt-1">
                      {activeService.caseStudySummary}
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center text-xs text-slate-900 font-bold tracking-wide">
                    <span>Absolute Confidentiality Safeguarded</span>
                  </div>
                </div>
              </div>
            )}
            
          </div>

        </div>
      </div>
    </section>
  );
}
