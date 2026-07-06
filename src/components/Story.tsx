import React from 'react';
import { Check, ShieldCheck, Scale, Award } from 'lucide-react';

export default function Story() {
  return (
    <section id="ethos" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24">
        
        {/* Section 1: Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase tracking-widest font-bold text-[#3182CE] flex items-center space-x-2">
              <Scale className="w-4 h-4 text-[#3182CE]" />
              <span>THE COGNITIVE BENCHMARK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl serif font-bold text-[#1A365D] tracking-tight leading-tight">
              An Unwavering Commitment to Meticulousness
            </h2>
            <p className="text-slate-500 text-sm sm:text-base font-light leading-relaxed">
              At Vanguard & Co., our corporate culture is founded on absolute diligence. We believe that true financial integrity is not merely a box to be checked; it is a meticulous craft that safeguards enterprise longevity. 
            </p>
            <p className="text-slate-500 text-sm sm:text-base font-light leading-relaxed">
              Every balance sheet we analyze, every cross-border structure we design, and every advisory plan we formulate is cross-checked through rigorous internal peer-review matrices to ensure absolute compliance.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="p-1.5 bg-[#F8FAFC] border border-slate-100 rounded-sm">
                  <Check className="w-3.5 h-3.5 text-[#1A365D]" />
                </div>
                <p className="text-xs text-slate-600 font-bold mt-0.5">
                  Dual-partner review on all material opinions
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-1.5 bg-[#F8FAFC] border border-slate-100 rounded-sm">
                  <Check className="w-3.5 h-3.5 text-[#1A365D]" />
                </div>
                <p className="text-xs text-slate-600 font-bold mt-0.5">
                  Direct oversight by experienced FCAs
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-1.5 bg-[#F8FAFC] border border-slate-100 rounded-sm">
                  <Check className="w-3.5 h-3.5 text-[#1A365D]" />
                </div>
                <p className="text-xs text-slate-600 font-bold mt-0.5">
                  Regulatory alignment across major capitals
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-1.5 bg-[#F8FAFC] border border-slate-100 rounded-sm">
                  <Check className="w-3.5 h-3.5 text-[#1A365D]" />
                </div>
                <p className="text-xs text-slate-600 font-bold mt-0.5">
                  Independent compliance monitoring audits
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-4 border border-slate-200 bg-white shadow-lg">
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src="/src/assets/images/office_boardroom_1783353728088.jpg"
                  alt="Vanguard Executive Boardroom"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pt-3 flex justify-between text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                <span>Vanguard Senior Council Chamber</span>
                <span>London, EC4</span>
              </div>
            </div>
          </div>

        </div>

        {/* Section 2: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-8">
          
          <div className="lg:col-span-6 order-last lg:order-first">
            <div className="p-4 border border-slate-200 bg-white shadow-lg">
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src="https://picsum.photos/seed/financial/800/600"
                  alt="Corporate Clarity and Structure"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pt-3 flex justify-between text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                <span>Enterprise Wealth Preservation</span>
                <span>Advisory Case No. 819</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase tracking-widest font-bold text-[#3182CE] flex items-center space-x-2">
              <Award className="w-4 h-4 text-[#3182CE]" />
              <span>THE LONG VISION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl serif font-bold text-[#1A365D] tracking-tight leading-tight">
              Preserving Value Across Multiple Generations
            </h2>
            <p className="text-slate-500 text-sm sm:text-base font-light leading-relaxed">
              True accounting goes beyond balancing the books. It represents structured planning that helps enterprises withstand market shifts, tax changes, and economic transition cycles.
            </p>
            <p className="text-slate-500 text-sm sm:text-base font-light leading-relaxed">
              We coordinate closely with our client’s corporate legal teams and transaction sponsors to build robust capital frameworks. This unified strategy preserves wealth and supports long-term operational growth.
            </p>

            <div className="p-5 bg-[#F8FAFC] border-l-4 border-[#1A365D] text-xs font-light text-[#1A365D] leading-relaxed italic">
              "A family office or a commercial entity succeeds when its financial foundations are designed not for the current quarter, but for the next century."
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
