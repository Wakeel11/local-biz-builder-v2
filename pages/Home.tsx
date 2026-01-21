import React from 'react';
import { Phone, ShieldCheck, Clock, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const Home = () => {
  return (
    <div className="pt-16">
      {/* 1. Hero Section (Conversion Focused) */}
      <section className="bg-[#1e3a8a] text-white py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl text-left">
            <h1 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-tight tracking-tight">
              24/7 Emergency {BUSINESS_INFO.name.split(' ')[1]} Services in {illinoisCities[0].city}, IL
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed font-medium">
              Trusted by homeowners across {BUSINESS_INFO.serviceArea} since {BUSINESS_INFO.established}. 
              Fast response, transparent pricing, and professional results guaranteed.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`} className="bg-[#22c55e] text-white text-2xl font-bold px-8 py-4 rounded-xl flex items-center gap-3 shadow-xl hover:scale-105 transition-transform">
                <Phone size={28} /> CALL {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar (Keywords) */}
      <div className="bg-gray-100 py-6 border-b border-gray-200">
        <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between gap-6 text-[#1e3a8a] font-bold uppercase text-sm">
          <span className="flex items-center gap-2"><ShieldCheck /> Licensed & Insured</span>
          <span className="flex items-center gap-2"><Clock /> 24/7 Rapid Response</span>
          <span className="flex items-center gap-2"><Award /> Top Rated Local Service</span>
        </div>
      </div>

      {/* 3. About Snippet (Content Rich) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-6 uppercase">Expert Solutions for Your Home</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              At {BUSINESS_INFO.name}, we understand that emergencies don't wait. Serving the Illinois and Wisconsin area since {BUSINESS_INFO.established}, 
              our team specializes in rapid diagnostic and lasting repairs. Whether it's a major failure or preventative maintenance, 
              we bring years of expertise to every job in {illinoisCities[0].city} and beyond.
            </p>
            <ul className="space-y-4 mb-8">
              {['Professional Certified Technicians', 'Upfront Transparent Pricing', 'Modern Specialized Equipment'].map(item => (
                <li key={item} className="flex items-center gap-3 font-bold text-gray-800 uppercase text-sm">
                  <CheckCircle className="text-[#f97316]" size={20} /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-200 rounded-3xl h-96 flex items-center justify-center font-bold text-gray-400 uppercase italic">
             Image Placeholder (Local Team)
          </div>
        </div>
      </section>

      {/* 4. Service Locations (Dynamic VIP Grid) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-4 uppercase text-[#1e3a8a]">Areas We Serve</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto font-medium">
            Local expert service available 24 hours a day in the following Illinois and Wisconsin communities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {illinoisCities.map((city) => (
              <a 
                key={city.slug} 
                href={`/#/${city.slug}`} 
                className="group bg-white p-8 rounded-2xl shadow-md border-b-8 border-transparent hover:border-[#f97316] transition-all text-left"
              >
                <h3 className="text-2xl font-black text-[#1e3a8a] mb-2 uppercase group-hover:text-[#f97316] transition-colors">{city.city}</h3>
                <p className="text-gray-500 mb-4 text-sm line-clamp-2">{city.meta_description}</p>
                <span className="flex items-center gap-2 font-bold text-[#f97316] uppercase text-xs tracking-widest">
                  View Local Services <ArrowRight size={14} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
