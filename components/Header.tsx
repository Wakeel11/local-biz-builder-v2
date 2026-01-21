import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Hammer, ChevronDown, Star } from 'lucide-react'; // Added Star icon
import { BUSINESS_INFO } from '../constants';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Dynamic Category for LeadSmart
  const nicheCategory = BUSINESS_INFO.name.toLowerCase().includes('plumbing') ? 'plumbing' : 'roofing';

  return (
    <header className="fixed w-full z-50 shadow-md">
      {/* 1. Top CTA Bar (Emergency Phone) */}
      <div className="bg-[#1e3a8a] text-white py-2 px-4 text-center text-sm md:text-base font-medium tracking-wide">
        <div className="container mx-auto flex justify-between items-center max-w-7xl">
          <span className="hidden md:inline text-gray-200 uppercase font-bold text-xs tracking-widest">
            Trusted Experts in Illinois, Wisconsin & Indiana
          </span>
          <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-2 mx-auto md:mx-0 hover:text-orange-400 transition-colors">
              <span className="bg-[#f97316] px-2 py-0.5 rounded text-white text-xs font-bold uppercase">Emergency?</span>
              <span className="font-bold flex items-center gap-1">
                <Phone size={16} fill="currentColor" />
                Call {BUSINESS_INFO.phone}
              </span>
          </a>
        </div>
      </div>

      {/* 2. Main Navigation (Logo & Menu) */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            <Link to="/" className="flex items-center gap-2 group flex-shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="bg-[#1e3a8a] p-2 rounded text-white group-hover:bg-slate-700 transition-colors">
                <Hammer size={24} />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-extrabold text-slate-800 tracking-tight leading-none uppercase">
                  {BUSINESS_INFO.name.split(' ')[0]}
                </h1>
                <p className="text-xs text-gray-500 font-semibold tracking-widest uppercase">
                  {BUSINESS_INFO.name.split(' ').slice(1).join(' ')}
                </p>
              </div>
            </Link>

            <nav className="hidden lg:flex flex-1 justify-center items-center gap-8">
              <Link to="/" className="text-sm font-bold text-gray-700 hover:text-[#1e3a8a] transition-colors uppercase tracking-tight">Home</Link>
              <Link to="/areas-we-serve" className="text-sm font-bold text-gray-700 hover:text-[#1e3a8a] transition-colors uppercase tracking-tight">Areas We Serve</Link>
              <Link to="/contact" className="text-sm font-bold text-gray-700 hover:text-[#1e3a8a] transition-colors uppercase tracking-tight">Contact</Link>
            </nav>

            <div className="hidden lg:flex items-center flex-shrink-0">
              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="ml-4 bg-[#f97316] hover:bg-orange-600 text-white px-6 py-3 rounded font-black transition-all shadow-md transform hover:-translate-y-0.5 uppercase text-sm"
              >
                Get a Quote
              </a>
            </div>

            <button onClick={toggleMenu} className="lg:hidden text-gray-700 hover:text-[#1e3a8a] focus:outline-none">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. NEW VIP CTA STRIP (Code 2 - LeadSmart Integration) */}
      <div className="bg-gray-50 py-3 border-b border-gray-200 shadow-inner">
        <div className="container mx-auto px-4 flex justify-center">
          <a 
            href={`//leads.leadsmartinc.com/?api_key=eccf565586cda416df8b89f66df641fee9a1bcb8&affiliate_source=modazawra1&category=${nicheCategory}&funnel=3&buttons=btn-success&step=1`} 
            className="polyares-quote-button bg-[#22c55e] text-white px-8 py-3 rounded-full font-black uppercase text-sm hover:bg-green-600 transition-all shadow-md flex items-center gap-2 transform hover:scale-105"
          >
            <Star size={16} fill="white" /> Get a Free Estimate — Limited Time!
          </a>
        </div>
      </div>

      {/* 4. Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0 top-[100%] max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col p-4 space-y-1">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded hover:bg-gray-50 text-gray-800 font-bold border-b border-gray-50">HOME</Link>
            <Link to="/areas-we-serve" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded hover:bg-gray-50 text-gray-800 font-bold border-b border-gray-50">AREAS WE SERVE</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded hover:bg-gray-50 text-gray-800 font-bold border-b border-gray-50">CONTACT</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
