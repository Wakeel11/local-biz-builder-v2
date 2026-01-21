import React from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const Hero = () => {
  return (
    <section className="bg-[#1e3a8a] text-white py-20 px-4 text-center pt-32">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-black uppercase mb-6 tracking-tight">
          {BUSINESS_INFO.name}: LOCAL EXPERTS IN {illinoisCities[0].city}, IL
        </h1>
        <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`} className="inline-flex items-center gap-3 bg-[#22c55e] hover:bg-green-600 text-white text-2xl font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105">
          <Phone /> CALL {BUSINESS_INFO.phone}
        </a>
        <p className="mt-8 text-xl opacity-90 max-w-2xl mx-auto">
          {BUSINESS_INFO.name} is a trusted local company proudly serving {illinoisCities[0].city} and surrounding areas since {BUSINESS_INFO.established}.
        </p>
      </div>
    </section>
  );
};
export default Hero;
