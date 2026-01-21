import React from 'react';
import { Phone, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const CityPage = ({ cityData }: { cityData: any }) => {
  return (
    <div className="pt-24">
      <section className="bg-[#1e3a8a] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-4">{cityData.h1}</h1>
          <p className="text-xl mb-8 opacity-90">Serving {cityData.city} since {BUSINESS_INFO.established}</p>
          <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-[#22c55e] text-white text-2xl font-bold px-8 py-4 rounded-xl inline-flex items-center gap-3">
            <Phone /> CALL {BUSINESS_INFO.phone}
          </a>
        </div>
      </section>
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-12">{cityData.content}</p>
          <h2 className="text-3xl font-bold mb-6 uppercase text-[#1e3a8a]">Local Landmarks</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cityData.landmarks.map((landmark: string) => (
              <li key={landmark} className="bg-gray-50 p-4 rounded-lg flex items-center gap-2 font-bold">
                <CheckCircle className="text-[#f97316]" /> {landmark}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CityPage;
