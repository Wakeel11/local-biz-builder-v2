import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Hammer, ChevronDown, Star, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Dynamic Category for LeadSmart Automation
  const nicheCategory = BUSINESS_INFO.name.toLowerCase().includes('plumbing') ? 'plumbing' : 'roofing';

  return (
    <header className="fixed w-full z-50 shadow-2xl">
      {/* 1. TOP EMERGENCY BAR (High Trust) */}
      <div className="bg-[#1e3a8a] text-white py-2.5 px-4 border-b border-blue-900">
        <div className="container mx-auto flex justify-between items-center max-w-7xl">
          <span className="hidden lg:flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-200">
            <ShieldCheck size={14} /> Trusted Experts in {BUSINESS_INFO.serviceArea}
          </span>
          <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-3 mx-auto lg:mx-0 group">
              <span className="bg-[#f97316] px-3 py-1 rounded-full text-white text-[10px] font-black uppercase animate-pulse">Emergency?</span>
              <span className="font-black flex items-center gap-2 text-sm md:text-base group-hover:text-orange-400 transition-colors">
                <Phone size={18} fill="currentColor" />
                CALL {BUSINESS_INFO.phone}
              </span>
          </a>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION (Logo & Menu) */}
      <div className="bg-white py-1">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center h-20 md:h-24">
            
            {/* DYNAMIC LOGO SECTION */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="bg-[#1e3a8a] p-3 rounded-xl text-white shadow-lg group-hover:bg-slate-700 transition-all transform group-hover:rotate-3">
                <Hammer size={28} />
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl md:text-3xl font-[900] text-slate-800 tracking-tighter leading-none uppercase">
                  {BUSINESS_INFO.name.split(' ')[0]}
                </h1>
                <p className="text-[10px] md:text-xs text-[#f97316] font-black tracking-[0.3em] uppercase mt-1">
                  {BUSINESS_INFO.name.split(' ').slice(1).join(' ')}
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex flex-1 justify-center items-center gap-10">
              {['Home', 'Areas We Serve', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '-')}`} 
                  className="text-sm font-black text-slate-600 hover:text-[#1e3a8a] transition-colors uppercase tracking-widest border-b-2 border-transparent hover:border-[#f97316] pb-1"
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* QUICK CALL CTA */}
            <div className="hidden lg:flex items-center">
              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-[#1e3a8a] hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-black transition-all shadow-xl hover:shadow-2xl uppercase text-xs tracking-widest flex items-center gap-2"
              >
                Get Help Now
              </a>
            </div>

            {/* MOBILE TOGGLE */}
            <button onClick={toggleMenu} className="lg:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-xl transition-colors">
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. VIP LEADSMART CTA STRIP (Optimized Spacing) */}
      <div className="bg-[#22c55e] py-4 border-t border-green-600 shadow-inner">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <a 
            href={`//leads.leadsmartinc.com/?api_key=eccf565586cda416df8b89f66df641fee9a1bcb8&affiliate_source=modazawra1&category=${nicheCategory}&funnel=3&buttons=btn-success&step=1`} 
            className="polyares-quote-button flex items-center gap-3 text-white font-[900] uppercase text-sm md:text-base tracking-widest hover:scale-105 transition-transform"
          >
            <Star size={20} fill="white" className="animate-spin-slow" /> 
            <span>Get a Free Estimate — Limited Time Local Offer!</span>
            <ChevronDown size={20} className="-rotate-90 hidden md:block" />
          </a>
        </div>
      </div>

      {/* 4. MOBILE DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-2xl absolute w-full left-0 top-[100%] animate-in fade-in slide-in-from-top-5">
          <nav className="flex flex-col p-6 space-y-4">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-black text-slate-800 uppercase border-b border-gray-100 pb-4">Home</Link>
            <Link to="/areas-we-serve" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-black text-slate-800 uppercase border-b border-gray-200 pb-4">Areas We Serve</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-black text-slate-800 uppercase pb-2">Contact</Link>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="w-full bg-[#f97316] text-white py-5 rounded-2xl text-center font-black uppercase text-xl shadow-lg">
              CALL {BUSINESS_INFO.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
