import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 top-0">
      <div className="bg-[#1e3a8a] text-white py-2 px-4 text-center text-sm font-bold uppercase tracking-widest">
        Trusted Emergency Plumbers since {BUSINESS_INFO.established}
      </div>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <ShieldCheck className="text-[#f97316] group-hover:scale-110 transition-transform" size={32} />
            <span className="text-xl font-black tracking-tighter uppercase leading-none text-[#1e3a8a]">
              WAUKEGAN<br />
              <span className="text-[#f97316]">PLUMBING</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/" className="font-bold text-[#1e3a8a] hover:text-[#f97316] uppercase">Home</Link>
            <Link to="/areas-we-serve" className="font-bold text-[#1e3a8a] hover:text-[#f97316] uppercase">Areas We Serve</Link>
            <Link to="/contact" className="font-bold text-[#1e3a8a] hover:text-[#f97316] uppercase">Contact</Link>
            <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`} className="bg-[#f97316] text-white px-6 py-3 rounded-xl font-black uppercase hover:bg-orange-600 transition-all shadow-md">
              CALL {BUSINESS_INFO.phone}
            </a>
          </div>

          <button className="md:hidden text-[#1e3a8a]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
