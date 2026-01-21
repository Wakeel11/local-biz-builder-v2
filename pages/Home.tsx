import React from 'react';
import { Link } from 'react-router-dom';
import { illinoisCities } from '../cities';
import { BUSINESS_INFO } from '../constants'; // Import constants
import { Phone, Star, ShieldCheck, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Dynamic Hero Section */}
      <section className="bg-[#1e3a8a] text-white py-20 px-4 text-center">
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

      {/* Areas We Serve Section (Links Fix) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-12 uppercase text-[#1e3a8a]">Areas We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {illinoisCities.map((city) => (
              <Link 
                key={city.slug} 
                to={`/${city.slug}`} // Correct pathing for router
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border-b-4 border-[#f97316]"
              >
                <h3 className="text-2xl font-bold mb-2 uppercase">{city.city}</h3>
                <p className="text-gray-600 font-medium">Professional Emergency Services</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
