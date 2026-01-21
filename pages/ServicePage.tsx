import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Phone, ArrowLeft, ShieldCheck, Clock, Award, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { SERVICES_DATA } from '../data/services'; // Yeh wahi file hai jo aap ne abhi banayi

const ServicePage = () => {
  const { slug } = useParams();
  
  // Data fetch karna slug ke mutabiq
  const service = SERVICES_DATA[slug || ""] || { 
    title: "Professional Local Services", 
    content: "<p>Contact our experts for more details on this specialized service.</p>" 
  };

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Navigation back to Home */}
        <Link to="/" className="inline-flex items-center gap-2 text-[#f97316] font-black uppercase text-sm mb-12 hover:gap-4 transition-all">
          <ArrowLeft size={18} /> Back to Home
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content Area (1000+ Words SEO Target) */}
          <div className="lg:col-span-2">
            <h1 className="text-5xl md:text-6xl font-black text-[#1e3a8a] uppercase mb-8 leading-tight italic tracking-tighter">
              {service.title}
            </h1>
            
            <div className="prose prose-xl max-w-none text-gray-700 leading-loose space-y-8">
              {/* Yeh line aap ke 1000-word content ko HTML mein convert karegi */}
              <div 
                className="service-content custom-content-style"
                dangerouslySetInnerHTML={{ __html: service.content }} 
              />
            </div>
          </div>

          {/* Sidebar CTA & EEAT Trust Signals */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              {/* Call Box - High Priority */}
              <div className="bg-[#1e3a8a] text-white p-10 rounded-[40px] shadow-2xl border-t-[10px] border-[#f97316]">
                <h3 className="text-3xl font-black uppercase mb-4 italic leading-none">Need Help Now?</h3>
                <p className="mb-8 font-bold text-slate-300">Fast emergency response across Illinois, Wisconsin, and Indiana.</p>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-[#22c55e] block py-5 rounded-2xl font-black text-2xl text-center shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-3">
                  <Phone size={24} fill="white" /> CALL NOW
                </a>
              </div>
              
              {/* Trust Badges */}
              <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100 space-y-6 shadow-inner">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm"><ShieldCheck className="text-[#f97316]" size={28} /></div>
                  <span className="font-black uppercase text-xs leading-tight text-[#1e3a8a]">Fully Licensed, Bonded & Insured</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm"><Clock className="text-[#f97316]" size={28} /></div>
                  <span className="font-black uppercase text-xs leading-tight text-[#1e3a8a]">24/7 Response Since {BUSINESS_INFO.established}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm"><Star className="text-[#f97316]" size={28} fill="#f97316" /></div>
                  <span className="font-black uppercase text-xs leading-tight text-[#1e3a8a]">Top-Rated Local Authority</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
