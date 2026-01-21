import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Phone, ShieldCheck, Clock, Award, Star, Quote, ArrowRight, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';
import { SERVICES_DATA } from '../data/services';

const ServicePage = () => {
  const { slug } = useParams();
  const primaryCity = illinoisCities[0].city;
  const niche = BUSINESS_INFO.name.toLowerCase().includes('plumbing') ? 'plumbing' : 'roofing';

  // WHITE SCREEN FIX: If slug is wrong, go back to home instead of crashing
  const service = slug ? SERVICES_DATA[slug] : null;
  if (!service) return <Navigate to="/" replace />;

  return (
    <div className="pt-24 bg-white">
      {/* 1. HERO (Exact Match with Home for Consistency) */}
      <section className="relative bg-[#1e3a8a] text-white py-20 lg:py-32 px-4 overflow-hidden min-h-[800px] flex items-center">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl">
          <div className="text-left lg:col-span-7">
            <span className="block text-[#f97316] font-black tracking-widest uppercase mb-4">Dedicated Local Expert Since {BUSINESS_INFO.established}</span>
            <h1 className="text-5xl md:text-8xl font-black uppercase mb-8 leading-[1.0] tracking-tighter">
              {service.title.split('in')[0]} IN {primaryCity.toUpperCase()}
            </h1>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-4 bg-[#22c55e] text-white text-3xl font-black px-12 py-6 rounded-2xl shadow-3xl hover:scale-105 transition-all">
              <Phone size={36} /> CALL {BUSINESS_INFO.phone}
            </a>
          </div>

          {/* ALIGNED FORM BOX */}
          <div className="flex justify-center lg:justify-end lg:col-span-5">
            <div className="bg-white p-4 rounded-[40px] shadow-3xl border-8 border-[#f97316] w-full max-w-[450px]">
               <div id="polyares_form_container" className="overflow-hidden rounded-[25px]">
                  <div id="polyares_form" style={{width: '100%', height: '500px'}}>
                    <iframe 
                      src={`//leads.leadsmartinc.com/?api_key=eccf565586cda416df8b89f66df641fee9a1bcb8&affiliate_source=modazawra1&funnel=5&category=${niche}&buttons=btn-success`} 
                      height="100%" width="100%" frameBorder="no" scrolling="yes" title="quote-form"
                    ></iframe>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EEAT BAR (Trust Signals) */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: ShieldCheck, title: "Licensed" }, 
            { icon: Star, title: "Authority" }, 
            { icon: Clock, title: "24/7 Response" }, 
            { icon: Award, title: `Since ${BUSINESS_INFO.established}` }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <item.icon size={36} className="text-[#f97316] mb-3" />
              <h4 className="font-black uppercase text-[#1e3a8a] text-sm">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MAIN CONTENT (1000+ Words SEO Friendly) */}
      <section className="py-24 bg-white border-b">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-2xl max-w-none text-gray-800 leading-relaxed font-serif service-page-content">
            {/* Unique content injected from services.ts */}
            <div dangerouslySetInnerHTML={{ __html: service.content }} />
          </div>
        </div>
      </section>

      {/* 4. AREAS BAR (Symmetry with Home) */}
      <section className="py-16 bg-gray-50 border-b">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h3 className="text-xl font-black mb-8 uppercase text-[#1e3a8a]">Serving the Tri-State Region</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-[10px] font-black text-[#1e3a8a] uppercase tracking-tighter">
            {illinoisCities.map((city) => (
              <a key={city.slug} href={`/#/${city.slug}`} className="bg-white p-3 rounded-xl border-b-2 border-transparent hover:border-[#f97316] shadow-sm">
                {city.city}, IL
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* 5. DYNAMIC MAP (Location Relevance) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="rounded-[40px] overflow-hidden shadow-2xl h-[400px] border-4 border-gray-100 grayscale">
             <iframe width="100%" height="100%" frameBorder="0" scrolling="no" src={`https://maps.google.com/maps?q=${primaryCity},IL&t=&z=13&ie=UTF8&iwloc=&output=embed`}></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
