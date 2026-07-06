import React, { useState, useEffect } from 'react';
import { Menu, X, Landmark, Compass } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Our Ethos', href: '#ethos' },
    { name: 'Partners', href: '#partners' },
    { name: 'Insights', href: '#insights' },
    { name: 'Locations', href: '#locations' }
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-slate-100 py-3'
          : 'bg-white/80 backdrop-blur-xs border-slate-200/50 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 bg-[#1A365D] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#3182CE]">
              <div className="w-3.5 h-3.5 border border-white rotate-45"></div>
            </div>
            <div>
              <div className="serif text-lg font-bold tracking-tight text-[#1A365D] group-hover:text-[#3182CE] transition-colors duration-200 uppercase">
                Vanguard & Co.
              </div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-bold">
                Chartered Accountants
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[11px] font-bold tracking-widest-plus text-slate-500 hover:text-[#1A365D] uppercase transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#1A365D] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={onOpenInquiry}
              id="nav-inquire-btn"
              className="text-[10px] uppercase tracking-widest font-bold px-6 py-3 bg-[#1A365D] hover:bg-[#3182CE] text-white transition-all duration-300 shadow-sm"
            >
              Secure Inquire
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-slate-900 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm uppercase tracking-wider text-slate-700 hover:text-slate-900 font-medium py-1"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenInquiry();
              }}
              className="w-full text-center text-xs uppercase tracking-widest font-bold py-3 bg-[#1A365D] hover:bg-[#3182CE] text-white transition-all duration-300"
            >
              Secure Inquire
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
