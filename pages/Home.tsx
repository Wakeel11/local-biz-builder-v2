import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Trust from '../components/Trust';
import Areas from '../components/Areas';
import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const Home = () => {
  return (
    <main>
      {/* 1. Hero Section (Dynamic from constants & cities) */}
      <Hero />

      {/* 2. Trust/Badges Section (Shows 2016 Legacy) */}
      <section className="py-10 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all">
             <div className="text-center">
                <span className="block text-2xl font-black text-[#1e3a8a]">EST. {BUSINESS_INFO.established}</span>
                <span className="text-xs uppercase font-bold text-gray-500">Local Authority</span>
             </div>
             {/* Yahan aap apne badges/icons add kar sakte hain */}
          </div>
        </div>
      </section>

      {/* 3. Services Grid (Dynamic from Constants) */}
      <Services />

      {/* 4. Why Trust Us (Using Business Info) */}
      <Trust />

      {/* 5. Areas We Serve (Automatic Links for SEO) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-4 uppercase text-[#1e3a8a]">Areas We Serve</h2>
          <p className="text-gray-600 mb-12 font-medium max-w-2xl mx-auto">
            Providing expert emergency services across {BUSINESS_INFO.serviceArea}.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {illinoisCities.map((city) => (
              <Areas key={city.slug} city={city} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
