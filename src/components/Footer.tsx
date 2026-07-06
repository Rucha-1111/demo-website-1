import React, { useState } from 'react';
import { Mail, CheckCircle2, Shield } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-[#1A365D] text-slate-300 pt-20 pb-12 border-t border-[#1A365D]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Segment: Brand & News Briefing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand Pitch (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-white text-[#1A365D] flex items-center justify-center font-serif text-lg font-bold">
                V
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold tracking-wide text-white uppercase">
                  Vanguard & Co.
                </h3>
                <p className="text-[9px] uppercase tracking-widest text-[#3182CE] font-bold">
                  Chartered Accountants
                </p>
              </div>
            </div>
            
            <p className="text-slate-300/90 text-xs leading-relaxed max-w-sm font-light">
              Providing rigorous independent audits, cross-border fiscal optimization, and generational asset stewardship for global operations and private offices.
            </p>

            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-slate-400 font-bold">
              <Shield className="w-4 h-4 text-[#3182CE]" />
              <span>Regulated Audit & Tax Practice</span>
            </div>
          </div>

          {/* Column 2: Newsletter Briefings Sign up (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">
              Subscribe to Private Fiscal Briefings
            </h4>
            <p className="text-slate-300/90 text-xs font-light max-w-lg">
              Receive quarterly board-level analyses regarding evolving OECD Pillar Two developments, domestic tax policies, and corporate transaction guidelines.
            </p>

            {subscribed ? (
              <div className="p-4 bg-white/5 border border-white/10 flex items-center space-x-2 text-xs text-blue-200 max-w-md">
                <CheckCircle2 className="w-4 h-4 text-[#3182CE] shrink-0" />
                <span>Subscription confirmed. Evolving fiscal briefs will dispatch quarterly.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row max-w-md gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter corporate email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#1e3e6b] border border-white/10 p-3 text-xs text-white focus:outline-hidden focus:border-[#3182CE] flex-1 placeholder-slate-400"
                />
                <button
                  type="submit"
                  className="bg-white hover:bg-[#3182CE] text-[#1A365D] hover:text-white text-xs font-bold uppercase tracking-widest px-6 py-3 transition-colors duration-200 shadow-sm"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Middle Segment: Nav Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-xs">
          
          <div className="space-y-4">
            <h5 className="uppercase tracking-widest font-bold text-white text-[10px]">Advisory Practices</h5>
            <ul className="space-y-2.5 font-light text-slate-300">
              <li><a href="#services" className="hover:text-[#3182CE] transition-colors">Audit & Assurance</a></li>
              <li><a href="#services" className="hover:text-[#3182CE] transition-colors">Bespoke Tax Advisory</a></li>
              <li><a href="#services" className="hover:text-[#3182CE] transition-colors">Corporate Finance & M&A</a></li>
              <li><a href="#services" className="hover:text-[#3182CE] transition-colors">Strategic Wealth Planning</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="uppercase tracking-widest font-bold text-white text-[10px]">Institutional</h5>
            <ul className="space-y-2.5 font-light text-slate-300">
              <li><a href="#ethos" className="hover:text-[#3182CE] transition-colors">Our Client Ethos</a></li>
              <li><a href="#partners" className="hover:text-[#3182CE] transition-colors">Partner Directory</a></li>
              <li><a href="#insights" className="hover:text-[#3182CE] transition-colors">Insights & Briefings</a></li>
              <li><a href="#locations" className="hover:text-[#3182CE] transition-colors">Global Offices</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="uppercase tracking-widest font-bold text-white text-[10px]">Office Capitals</h5>
            <ul className="space-y-2.5 font-light text-slate-300">
              <li><a href="#locations" className="hover:text-[#3182CE] transition-colors">London, UK (HQ)</a></li>
              <li><a href="#locations" className="hover:text-[#3182CE] transition-colors">New York, US</a></li>
              <li><a href="#locations" className="hover:text-[#3182CE] transition-colors">Singapore</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="uppercase tracking-widest font-bold text-white text-[10px]">Confidentiality</h5>
            <ul className="space-y-2.5 font-light text-slate-300">
              <li><a href="#hero" className="hover:text-[#3182CE] transition-colors">Secure Consulting Portal</a></li>
              <li><a href="#hero" className="hover:text-[#3182CE] transition-colors">Request Mutual NDA</a></li>
              <li><a href="#locations" className="hover:text-[#3182CE] transition-colors">Secure Callback Verification</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Segment: Compliance details and copyrights */}
        <div className="pt-8 border-t border-white/10 text-[10px] text-slate-400 font-light space-y-4">
          <p className="leading-relaxed">
            Vanguard & Co. is a trading style of Vanguard Audit & Assurance LLP, registered in England and Wales under partnership number OC301294. Registered Office: One Temple Gardens, Temple, London EC4Y 9BB. Regulated by the Institute of Chartered Accountants in England and Wales (ICAEW) for audit and investment business.
          </p>
          <p className="leading-relaxed">
            VAT Registration Number: GB 812 9042 11. Certified STEP trust and estate practitioner codes apply in private wealth divisions. Absolute client data discretion is enforced under physical-vault parameters.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-white/5">
            <span>© {new Date().getFullYear()} Vanguard & Co. All rights reserved under universal intellectual protocols.</span>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Conflict Disclosures</a>
              <a href="#" className="hover:text-white transition-colors">Privacy & Cookie Codes</a>
              <a href="#" className="hover:text-white transition-colors">Regulatory Frameworks</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
