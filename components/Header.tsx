import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Added 'Clock' to the imports below to fix the white screen error
import { Menu, X, Phone, Hammer, ChevronDown, Star, ShieldCheck, Clock } from 'lucide-react'; 
import { BUSINESS_INFO } from '../constants';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const nicheCategory = BUSINESS_INFO.name.toLowerCase().includes('plumbing') ? 'plumbing' : 'roofing';

  return (
    <header className="fixed w-full z-50 shadow-2xl bg-white">
      {/* 1. Top Bar - Trust & Fast Call */}
      <div className="bg-[#1e3a8a] text-white py-2 px-4 border-b border-blue-900">
        <div className="container mx-auto flex justify-between items-center max-w-7xl text-[10px] md:text-xs font-black uppercase tracking-widest">
          <span className="hidden lg:flex items-center gap-2">
            <ShieldCheck size={14} className="text-[#f97316]" /> 
            Serving IL, WI & IN since {BUSINESS_INFO.established}
          </span>
          <div className="flex items-center gap-4 mx-auto lg:mx-0">
            <span className="flex items-center gap-1 animate-pulse"><Clock size={12}/> 24/7 EMERGENCY</span>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-orange-400 flex items-center gap-1">
              <Phone size={12} fill="currentColor"/> {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation */}
      <div className="container mx-auto px-4 max-w-7xl py-2">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-[#1e3a8a] p-2 rounded-lg text-white">
              <Hammer size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black text-slate-800 leading-none uppercase tracking-tighter">
                {BUSINESS_INFO.name.split(' ')[0]}
              </span>
              <span className="text-[10px] text-[#f97316] font-bold tracking-[0.2em] uppercase">
                {BUSINESS_INFO.name.split(' ').slice(1).join(' ')}
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-10">
            {['Home', 'Areas We Serve', 'Contact'].map((item) => (
              <Link key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '-')}`} 
                className="text-sm font-black text-slate-600 hover:text-[#1e3a8a] uppercase tracking-widest">
                {item}
              </Link>
            ))}
          </nav>

          {/* THE BIG GREEN CALL BUTTON - Priority CTA */}
          <div className="hidden lg:flex items-center">
            <a href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-[#22c55e] hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-black transition-all shadow-xl hover:shadow-2xl uppercase text-xs tracking-widest flex items-center gap-3 transform hover:scale-105">
              <Phone size={18} fill="white" /> CALL {BUSINESS_INFO.phone}
            </a>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2">
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* 3. LeadSmart Promo Strip */}
      <div className="bg-gray-100 py-3 border-t border-gray-200 shadow-inner">
        <div className="container mx-auto px-4 flex justify-center">
          <a href={`//leads.leadsmartinc.com/?api_key=eccf565586cda416df8b89f66df641fee9a1bcb8&affiliate_source=modazawra1&category=${nicheCategory}&funnel=3&buttons=btn-success&step=1`} 
            className="text-[#1e3a8a] font-black uppercase text-[10px] md:text-xs tracking-widest flex items-center gap-2 hover:text-[#f97316] transition-colors">
            <Star size={14} fill="#f97316" className="text-[#f97316]" /> 
            Get a Free Estimate Online — Limited Time!
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
