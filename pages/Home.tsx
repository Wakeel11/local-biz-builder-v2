import React from 'react';
import { Phone, ShieldCheck, Clock, Award, CheckCircle, Star, Quote, ThumbsUp, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const Home = () => {
  const primaryCity = illinoisCities[0].city;
  const niche = BUSINESS_INFO.name.toLowerCase().includes('plumbing') ? 'plumbing' : 'roofing';

  return (
    <div className="pt-24">
      {/* 1. VIP HERO SECTION WITH IFRAME FORM */}
      <section className="relative bg-[#1e3a8a] text-white py-20 px-4 overflow-hidden min-h-[700px] flex items-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        
        <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl">
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

          {/* NEW IFRAME FORM (Code 2 Integration) */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white p-4 rounded-[30px] shadow-2xl border-t-8 border-[#f97316]">
               <h3 className="text-xl font-black uppercase mb-4 text-[#1e3a8a] text-center">Get Free Quotes</h3>
               <div id="polyares_form_container" style={{margin:'0px', padding:'0px'}}>
                  <div id="polyares_form" style={{width: '244px', height: '377px'}}>
                    <iframe 
                      src={`//leads.leadsmartinc.com/?api_key=eccf565586cda416df8b89f66df641fee9a1bcb8&affiliate_source=modazawra1&funnel=5&category=${niche}&buttons=btn-success`} 
                      height="100%" width="100%" frameBorder="no" scrolling="yes" style={{borderRadius: '10px', border: '1px solid #eee'}}
                    ></iframe>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EEAT TRUST SECTION */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { icon: ShieldCheck, title: "Fully Insured", desc: "Licensed & Bonded" },
            { icon: Star, title: "5-Star Rated", desc: "Top Local Reviews" },
            { icon: Clock, title: "24/7 Response", desc: "Always Available" },
            { icon: Award, title: "Certified Pros", desc: `Since ${BUSINESS_INFO.established}` }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="bg-white p-6 rounded-3xl mb-4 shadow-sm border border-gray-100">
                <item.icon size={48} className="text-[#f97316]" />
              </div>
              <h4 className="font-black uppercase text-[#1e3a8a] text-lg">{item.title}</h4>
              <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EXPERT SOLUTIONS (Content Rich) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-8 uppercase leading-tight italic">Expert Support You Can Count On</h2>
            <div className="text-gray-700 text-lg leading-relaxed space-y-6 mb-10">
              <p>
                At {BUSINESS_INFO.name}, we understand that {niche} emergencies don't wait for business hours. Since {BUSINESS_INFO.established}, our family-owned business has been dedicated to providing the residents of {primaryCity} with high-quality, reliable solutions. Our certified technicians are strategically located across Illinois, Wisconsin, and Indiana to ensure that when a crisis strikes, we are at your door in record time. 
              </p>
              <p>
                Whether you are facing an urgent failure in {primaryCity} or need preventative maintenance, we utilize modern specialized equipment to deliver lasting results. We take pride in our transparent pricing model—no surprises, no hidden fees.
              </p>
            </div>
          </div>
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl h-[450px]">
             <iframe 
                width="100%" height="100%" frameBorder="0" scrolling="no" 
                src={`https://maps.google.com/maps?q=${primaryCity},IL&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                className="grayscale contrast-125"
             ></iframe>
          </div>
        </div>
      </section>

      {/* 4. KEYWORD-RICH TESTIMONIALS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-4xl font-black uppercase text-[#1e3a8a] mb-16 italic">Trusted By Your Neighbors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { name: "John D.", city: primaryCity, text: `Best emergency ${niche} service in ${primaryCity}! Fixed our issue perfectly.` },
              { name: "Sarah M.", city: "Gurnee", text: `Professional team, upfront pricing, and they really know their stuff.` },
              { name: "Mike R.", city: "North Chicago", text: `Since 2016, they have never let me down. Professional local pros.` }
            ].map((rev, i) => (
              <div key={i} className="bg-white p-10 rounded-[32px] border-b-8 border-[#f97316] relative shadow-sm">
                <Quote className="absolute top-6 right-6 text-gray-100" size={40} />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#f97316" className="text-[#f97316]" />)}
                </div>
                <p className="text-gray-700 font-medium mb-6 italic">"{rev.text}"</p>
                <div className="font-black text-[#1e3a8a] uppercase text-sm">{rev.name} — {rev.city}, IL</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AREAS WE SERVE (Restored VIP Grid) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-4xl font-black mb-4 uppercase text-[#1e3a8a]">Areas We Serve</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto font-medium text-lg uppercase tracking-tight">
            Local expert service available 24 hours a day across the Illinois, Wisconsin, and Indiana region.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {illinoisCities.map((city) => (
              <a 
                key={city.slug} 
                href={`/#/${city.slug}`} 
                className="group bg-gray-50 p-8 rounded-2xl shadow-sm border-b-8 border-transparent hover:border-[#f97316] transition-all text-left"
              >
                <h3 className="text-2xl font-black text-[#1e3a8a] mb-2 uppercase group-hover:text-[#f97316] transition-colors">{city.city}</h3>
                <p className="text-gray-500 mb-4 text-sm line-clamp-2">{city.meta_description}</p>
                <span className="flex items-center gap-2 font-bold text-[#f97316] uppercase text-xs tracking-widest">
                  Explore Services <ArrowRight size={14} />
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
