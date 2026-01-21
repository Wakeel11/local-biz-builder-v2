import React, { useEffect } from 'react';
import { Phone, ShieldCheck, Clock, Award, CheckCircle, Star, Quote, ThumbsUp, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const Home = () => {
  const primaryCity = illinoisCities[0].city;
  const nicheCategory = BUSINESS_INFO.name.toLowerCase().includes('plumbing') ? 'plumbing' : 'roofing';

  // Force LeadSmart Widget to re-initialize on load
  useEffect(() => {
    if ((window as any).LeadSmart) {
      (window as any).LeadSmart.initialize();
    }
  }, []);

  return (
    <div className="pt-16">
      {/* 1. VIP HERO SECTION */}
      <section className="relative bg-[#1e3a8a] text-white py-24 px-4 overflow-hidden flex items-center min-h-[700px]">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        
        <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 leading-[1.1] tracking-tighter">
              24/7 EMERGENCY {BUSINESS_INFO.name.split(' ')[1]} IN {primaryCity.toUpperCase()}, IL
            </h1>
            <ul className="space-y-4 mb-10">
              {['Fast 30-Minute Local Response', 'Licensed, Bonded & Insured Pros', 'Upfront Pricing - No Hidden Fees'].map(point => (
                <li key={point} className="flex items-center gap-4 text-xl font-bold uppercase tracking-tight">
                  <CheckCircle className="text-[#22c55e]" size={28} /> {point}
                </li>
              ))}
            </ul>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-4 bg-[#22c55e] text-white text-3xl font-black px-12 py-6 rounded-2xl shadow-2xl hover:scale-105 transition-all">
              <Phone size={36} /> CALL {BUSINESS_INFO.phone}
            </a>
          </div>

          {/* MASTER QUOTE BOX (Code 1) */}
          <div className="bg-white p-10 rounded-[40px] shadow-2xl border-t-[10px] border-[#f97316] text-gray-800">
            <h3 className="text-3xl font-black uppercase mb-2 text-[#1e3a8a] text-center">Request Free Quotes</h3>
            <p className="text-center text-gray-500 mb-6 font-bold uppercase text-xs tracking-widest italic">Fast, Local & Secure Service Quotes</p>
            <div 
              className="po-request-quotes-box min-h-[250px]" 
              data-buttons="btn-success" 
              data-category={nicheCategory}
              data-affiliate_source="modazawra1"
            ></div>
          </div>
        </div>
      </section>

      {/* 2. EEAT TRUST SECTION (With extra spacing) */}
      <section className="py-32 bg-gray-50 border-b border-gray-100 mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1e3a8a] uppercase tracking-tighter mb-4 italic">Locally Trusted & Industry Certified</h2>
            <div className="h-2 w-32 bg-[#f97316] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { icon: ShieldCheck, title: "Fully Insured", desc: "Licensed & Bonded Pros" },
              { icon: Star, title: "5-Star Rated", desc: "Top Local Reviews" },
              { icon: Clock, title: "24/7 Response", desc: "Always Available" },
              { icon: ThumbsUp, title: "Satisfaction", desc: "Guaranteed Results" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="bg-white p-6 rounded-3xl mb-4 shadow-sm border border-gray-100 group-hover:bg-[#1e3a8a] transition-all">
                  <item.icon size={48} className="text-[#f97316] group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-black uppercase text-[#1e3a8a] text-lg">{item.title}</h4>
                <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIALS (Keyword-Rich Trust) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black uppercase text-[#1e3a8a] mb-16 italic">What Your Neighbors Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "John D.", city: primaryCity, text: `The best emergency ${nicheCategory} service in ${primaryCity}! They arrived in 20 minutes and fixed our burst pipe perfectly.` },
              { name: "Sarah M.", city: "Gurnee", text: `Highly recommend! Professional team, upfront pricing, and they really know their ${nicheCategory} stuff. Best in the Illinois area.` },
              { name: "Mike R.", city: "North Chicago", text: `I was stressed about my emergency plumbing failure, but they handled it with ease. Since 2016, they have never let me down.` }
            ].map((rev, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-[32px] text-left border-b-8 border-[#f97316] relative shadow-sm">
                <Quote className="absolute top-6 right-6 text-gray-200" size={40} />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#f97316" className="text-[#f97316]" />)}
                </div>
                <p className="text-gray-700 font-medium mb-6 italic leading-relaxed font-serif">"{rev.text}"</p>
                <div className="font-black text-[#1e3a8a] uppercase text-sm">{rev.name} — {rev.city}, IL</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DYNAMIC MAP SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="rounded-[40px] overflow-hidden shadow-2xl h-[500px] border-4 border-white relative">
             <iframe 
                width="100%" height="100%" frameBorder="0" scrolling="no" 
                src={`https://maps.google.com/maps?q=${primaryCity},IL&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                className="grayscale contrast-125"
             ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
