import React from 'react';

export default function Stats() {
  const stats = [
    {
      value: '£3.4B+',
      label: 'Assets Under Active Counsel',
      description: 'Capital advised, audited, and optimized across diverse asset categories.'
    },
    {
      value: '22+',
      label: 'Years of Professional Care',
      description: 'Built on absolute precision, trust, and continuous regulatory excellence.'
    },
    {
      value: '98.6%',
      label: 'Client Partnership Longevity',
      description: 'Our average enterprise engagement spans over a decade of continuous support.'
    },
    {
      value: '0.00%',
      label: 'Audit Discrepancy Margin',
      description: 'A perfect regulatory track record with zero material non-compliance flags.'
    }
  ];

  return (
    <section className="bg-[#1A365D] text-white py-16 border-y border-[#1A365D]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`space-y-3 ${
                idx > 0 ? 'lg:border-l lg:border-white/10 lg:pl-8' : ''
              }`}
            >
              <div className="text-4xl lg:text-5xl serif font-bold text-[#3182CE]">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest font-bold text-white">
                {stat.label}
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
