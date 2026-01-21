import React from 'react';
import { Phone, ShieldCheck, Clock, Award, CheckCircle, ArrowRight, Star, MapPin, ThumbsUp } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const Home = () => {
  const primaryCity = illinoisCities[0].city;
  const nicheCategory = BUSINESS_INFO.name.toLowerCase().includes('plumbing') ? 'plumbing' : 'roofing';

  return (
    <div className="pt-16">
      {/* GLOBAL CTA STRIP (Code 2) - Below Menu */}
      <div className="bg-[#22c55e] py-3 border-b border-green-600 shadow-inner">
        <div className="container mx-auto px-4 flex justify-center">
          <a 
            href={`//leads.leadsmartinc.com/?api_key=eccf555586cda416df8b89f66df641fee9a1bcb8&affiliate_source=modazawra1&category=${nicheCategory}&funnel=3&buttons=btn-success&step=1`} 
            className="polyares-quote-button text-white px-6 py-1 rounded-full font-black uppercase text-sm hover:scale-105 transition-all flex items-center gap-2"
          >
            <Star size={16} fill="white" /> Get a Free Estimate — Limited Time Offer!
          </a>
        </div>
      </div>

      {/* 1. VIP HERO SECTION WITH LEAD BOX (Code 1) */}
      <section className="bg-[#1e3a8a] text-white py-20 px-4 relative overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1635350736475-c8cef4b21906?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        
        <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-tight tracking-tight">
              24/7 EMERGENCY {BUSINESS_INFO.name.split(' ')[1]} SERVICES IN {primaryCity.toUpperCase()}, IL
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

          {/* MASTER QUOTE BOX (Code 1 Integration) */}
          <div className="bg-white p-8 rounded-3xl shadow-2xl border-t-8 border-[#f97316] text-gray-800">
            <h3 className="text-2xl font-black uppercase mb-4 text-[#1e3a8a] text-center">Request Free Quotes</h3>
            <div 
              className="po-request-quotes-box" 
              data-buttons="btn-success" 
              data-category={nicheCategory} 
              data-affiliate_source="modazawra1"
            ></div>
            <p className="text-[10px] text-gray-400 mt-4 text-center">Fast, Local & Secure Service Quotes</p>
          </div>
        </div>
      </section>

      {/* 2. EEAT TRUST BAR */}
      <div className="bg-gray-100 py-8 border-b border-gray-200">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-[#1e3a8a] font-black uppercase text-center text-xs tracking-widest">
          <div className="flex flex-col items-center gap-2"><ShieldCheck className="text-[#f97316]" size={32} /> Licensed & Insured</div>
          <div className="flex flex-col items-center gap-2"><Clock className="text-[#f97316]" size={32} /> 24/7 Rapid Response</div>
          <div className="flex flex-col items-center gap-2"><Star className="text-[#f97316]" size={32} /> Top Rated Service</div>
          <div className="flex flex-col items-center gap-2"><Award className="text-[#f97316]" size={32} /> Locally Owned</div>
        </div>
      </div>

      {/* 3. EXPERT SOLUTIONS (Expanded Content) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-6 uppercase">Professional Local Expertise Since {BUSINESS_INFO.established}</h2>
            <div className="text-gray-600 text-lg leading-loose space-y-4 mb-8">
              <p>
                At {BUSINESS_INFO.name}, we understand that emergencies don't wait for business hours. Since {BUSINESS_INFO.established}, we have been the go-to specialists for rapid response and high-quality repairs across the {BUSINESS_INFO.serviceArea} region. 
              </p>
              <p>
                Whether you are facing an urgent failure in {primaryCity} or need preventative maintenance to safeguard your property, our factory-certified technicians bring years of hands-on experience to every project. We pride ourselves on transparent communication and upfront pricing.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-4">
              {['Certified Professional Technicians', 'Upfront Transparent Pricing', 'Modern Specialized Equipment', 'Satisfaction Guaranteed'].map(item => (
                <li key={item} className="flex items-center gap-3 font-bold text-gray-800 uppercase text-sm">
                  <CheckCircle className="text-[#f97316]" size={20} /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-200 rounded-3xl h-[450px] overflow-hidden relative shadow-inner">
             <iframe 
                width="100%" height="100%" frameBorder="0" scrolling="no" 
                src={`https://maps.google.com/maps?q=${primaryCity},IL&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                className="grayscale contrast-125"
             ></iframe>
          </div>
        </div>
      </section>

      {/* 4. SERVICE LOCATIONS */}
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
