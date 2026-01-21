import React from 'react';
import Hero from '../components/Hero';
import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';
import { Phone, CheckCircle, Shield } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-16">
      {/* 1. Master Hero */}
      <Hero />

      {/* 2. Fast Services Grid (Pure HTML/Tailwind - No external component needed) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-12 uppercase text-[#1e3a8a]">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {['Emergency Repairs', 'Leak Detection', 'Full Installation'].map((service) => (
              <div key={service} className="p-8 border-2 border-gray-100 rounded-2xl hover:border-[#f97316] transition-all group">
                <Shield className="text-[#f97316] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold uppercase mb-2">{service}</h3>
                <p className="text-gray-600">Professional local service in the Illinois area since {BUSINESS_INFO.established}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Dynamic Service Areas (Scale Section) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-8 uppercase text-[#1e3a8a]">Service Locations</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {illinoisCities.map((city) => (
              <a 
                key={city.slug} 
                href={`/#/${city.slug}`} 
                className="bg-white px-6 py-3 rounded-full shadow-sm font-bold text-[#1e3a8a] hover:bg-[#f97316] hover:text-white transition-all border border-gray-100"
              >
                {city.city}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
