import React, { useState, useEffect } from 'react';
import { LOCATIONS } from '../data';
import { Mail, Phone, MapPin, Clock, Globe } from 'lucide-react';

export default function Locations() {
  const [times, setTimes] = useState<{ [key: string]: string }>({});
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes: { [key: string]: string } = {};
      const newIsOpen: { [key: string]: boolean } = {};

      LOCATIONS.forEach((loc) => {
        try {
          // Format current time for this timezone
          const options: Intl.DateTimeFormatOptions = {
            timeZone: loc.timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
          };
          const formatter = new Intl.DateTimeFormat('en-US', options);
          const timeString = formatter.format(new Date());
          newTimes[loc.id] = timeString;

          // Calculate if open (standard 9am to 6pm, Monday to Friday)
          const localDateOptions: Intl.DateTimeFormatOptions = {
            timeZone: loc.timezone,
            hour: 'numeric',
            weekday: 'short',
            hour12: false
          };
          const dateParts = new Intl.DateTimeFormat('en-US', localDateOptions).formatToParts(new Date());
          const hourPart = dateParts.find(p => p.type === 'hour')?.value;
          const weekdayPart = dateParts.find(p => p.type === 'weekday')?.value;

          const currentHour = hourPart ? parseInt(hourPart, 10) : 12;
          const isWeekend = weekdayPart === 'Sat' || weekdayPart === 'Sun';

          newIsOpen[loc.id] = currentHour >= 9 && currentHour < 18 && !isWeekend;
        } catch (error) {
          newTimes[loc.id] = '--:--:--';
          newIsOpen[loc.id] = false;
        }
      });

      setTimes(newTimes);
      setIsOpen(newIsOpen);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="locations" className="py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs uppercase tracking-widest font-bold text-[#3182CE]">
            GLOBAL ACCESSIBILITY & HUB PREMISES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl serif font-bold text-[#1A365D] tracking-tight">
            Our Locations
          </h2>
          <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed">
            Positioned in the worlds primary financial hubs, Vanguard serves multinational interests through coordinated advisory networks.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              className="bg-white border border-slate-200/60 p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow duration-300"
            >
              {/* Location Top: City & Dynamic Time */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="serif text-2xl font-bold text-[#1A365D]">
                      {loc.city}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">{loc.country}</p>
                  </div>
                  
                  {/* Status Indicator (Open/Closed) */}
                  <div className="text-right">
                    <span
                      className={`inline-flex items-center space-x-1.5 px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold ${
                        isOpen[loc.id]
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-100/80'
                          : 'bg-slate-50 text-slate-500 border border-slate-200/60'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isOpen[loc.id] ? 'bg-emerald-600' : 'bg-slate-400'}`} />
                      <span>{isOpen[loc.id] ? 'Active Hub Open' : 'Office Closed'}</span>
                    </span>
                  </div>
                </div>

                {/* Local time and timezone detail */}
                <div className="bg-[#F8FAFC] p-4 border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-slate-500">
                    <Clock className="w-4 h-4 text-[#3182CE]" />
                    <span className="font-bold">Local Time</span>
                  </div>
                  <div className="font-mono text-sm font-semibold text-slate-900 tracking-wider">
                    {times[loc.id] || '00:00:00'}
                  </div>
                </div>

                {/* Address and contact particulars */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-start space-x-3 text-xs text-slate-600 leading-relaxed">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </div>

                  <div className="flex items-center space-x-3 text-xs text-slate-600">
                    <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                    <a href={`tel:${loc.phone.replace(/\s+/g, '')}`} className="hover:text-[#3182CE] font-bold">
                      {loc.phone}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3 text-xs text-slate-600">
                    <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                    <a href={`mailto:${loc.email}`} className="hover:text-[#3182CE] font-bold">
                      {loc.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action and security note */}
              <div className="pt-6 mt-8 border-t border-slate-100 flex items-center justify-between text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                <span className="flex items-center space-x-1">
                  <Globe className="w-3.5 h-3.5 text-slate-300" />
                  <span>UTC {loc.localOffset >= 0 ? `+${loc.localOffset}` : loc.localOffset}</span>
                </span>
                <span>REGULATED PREMISES</span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Network footprint note */}
        <div className="mt-12 p-6 bg-[#F8FAFC] border border-[#1A365D]/10 text-center max-w-3xl mx-auto">
          <p className="text-xs text-[#1A365D] font-light leading-relaxed">
            <strong className="font-bold">Cross-Border Operational Access:</strong> Our secure digital channels facilitate direct board briefings and compliance audits regardless of timezone variances. Secure physical vaults are maintained at our London headquarters.
          </p>
        </div>

      </div>
    </section>
  );
}
