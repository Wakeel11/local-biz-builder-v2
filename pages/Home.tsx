import React from 'react';
import { Phone, ShieldCheck, Clock, Award, CheckCircle, Star, Quote, ArrowRight, Wrench, Droplets, Thermometer, Waves, Search, Flame, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const Home = () => {
  const primaryCity = illinoisCities[0].city;
  const niche = BUSINESS_INFO.name.toLowerCase().includes('plumbing') ? 'plumbing' : 'roofing';

  // Data structure for Service Cards
  const services = [
    {
      icon: Wrench,
      title: "24/7 Emergency Repairs",
      desc: `Rapid response for burst pipes, major leaks, and urgent failures in ${primaryCity}. We minimize damage and restore safety quickly.`,
      link: "/services/emergency-repairs"
    },
    {
      icon: Droplets,
      title: "Drain & Sewer Cleaning",
      desc: "Advanced hydro-jetting and camera inspections to clear stubborn clogs and ensure proper flow in your home's drainage system.",
      link: "/services/drain-cleaning"
    },
    {
      icon: Thermometer,
      title: "Water Heater Services",
      desc: "Expert installation and repair of tankless and traditional water heaters. Ensure reliable hot water year-round.",
      link: "/services/water-heaters"
    },
    {
      icon: Waves,
      title: "Sump Pump Protection",
      desc: `Essential basement flood protection for Illinois homes. High-efficiency primary pumps and battery backup systems.`,
      link: "/services/sump-pumps"
    },
    {
      icon: Search,
      title: "Advanced Leak Detection",
      desc: "Non-invasive electronic and thermal imaging to pinpoint hidden leaks behind walls or underground without property damage.",
      link: "/services/leak-detection"
    },
    {
      icon: Flame,
      title: "Gas Line Services",
      desc: "Certified safety inspections, leak repairs, and new line installations for appliances. Safety is our top priority.",
      link: "/services/gas-lines"
    }
  ];

  return (
    <div className="pt-24 bg-gray-50">
      {/* 1. VIP HERO SECTION - ALIGNED */}
      <section className="relative bg-[#1e3a8a] text-white py-20 lg:py-28 px-4 overflow-hidden min-h-[750px] flex items-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-7xl">
          {/* Text Column (Larger space) */}
          <div className="text-left lg:col-span-7">
            <span className="block text-[#f97316] font-black tracking-[0.2em] uppercase mb-4">Since {BUSINESS_INFO.established} • Trusted Local Pros</span>
            <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-[1.1] tracking-tighter">
              24/7 EMERGENCY {BUSINESS_INFO.name.split(' ')[1]} IN {primaryCity.toUpperCase()}
            </h1>
            <p className="text-xl mb-10 opacity-90 leading-relaxed font-medium max-w-2xl">
              Facing a plumbing crisis? Our licensed experts in Illinois, Wisconsin, and Indiana are ready to deploy immediately. Fast, reliable, and upfront pricing guaranteed.
            </p>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-4 bg-[#22c55e] hover:bg-green-500 text-white text-2xl md:text-3xl font-black px-10 py-5 rounded-2xl shadow-2xl hover:scale-105 transition-all group">
              <Phone size={32} className="group-hover:animate-pulse" /> CALL {BUSINESS_INFO.phone}
            </a>
          </div>

          {/* Form Column (Centered & Bigger Container) */}
          <div className="flex justify-center lg:justify-end lg:col-span-5">
            <div className="bg-white p-3 rounded-[35px] shadow-3xl border-4 border-[#f97316]/80 backdrop-blur-sm bg-white/95">
               <div className="text-center mb-2 mt-2">
                  <h3 className="text-2xl font-black uppercase text-[#1e3a8a] leading-none">Get A Fast Quote</h3>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Response in 30 Mins</p>
               </div>
               <div id="polyares_form_container" className="overflow-hidden rounded-[25px]">
                  <div id="polyares_form" style={{width: '244px', height: '377px'}}>
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

      {/* 2. EEAT TRUST BAR (Moved up for flow) */}
      <section className="py-12 bg-white border-b border-gray-200 shadow-sm relative z-20">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: ShieldCheck, title: "Licensed & Bonded", desc: "Fully Insured Protection" },
            { icon: Star, title: "5-Star Rated", desc: "Trusted Locally" },
            { icon: Clock, title: "24/7 Rapid Response", desc: "Always Available" },
            { icon: Award, title: "Established Pros", desc: `Serving Since ${BUSINESS_INFO.established}` }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <item.icon size={36} className="text-[#f97316] mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-black uppercase text-[#1e3a8a] text-sm md:text-base">{item.title}</h4>
              <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. AREAS WE SERVE (High Priority SEO Links) */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-4xl font-black mb-12 uppercase text-[#1e3a8a] tracking-tight">Providing Emergency Services In:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {illinoisCities.map((city) => (
              <a key={city.slug} href={`/#/${city.slug}`} className="group bg-white p-6 rounded-2xl border-b-4 border-[#1e3a8a]/10 hover:border-[#f97316] transition-all flex justify-between items-center shadow-md hover:shadow-lg transform hover:-translate-y-1">
                <span className="font-black text-[#1e3a8a] uppercase text-lg">{city.city}, IL</span>
                <span className="bg-[#1e3a8a]/10 p-2 rounded-full group-hover:bg-[#f97316] group-hover:text-white transition-colors">
                    <ArrowRight size={18} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPLIT CONTENT/IMAGE (With Bullets & Fixed Image) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-6 uppercase leading-tight italic">
              Your Local {niche.toUpperCase()} Authority in {primaryCity}
            </h2>
            <div className="text-gray-700 text-lg leading-relaxed mb-8 text-slate-600 font-medium">
              <p className="mb-6">
                As a family-owned business established in {BUSINESS_INFO.established}, we have dedicated ourselves to securing the homes and businesses of the {primaryCity} community. Plumbing failures are high-stress events, and we emphasize speed, integrity, and expert craftsmanship.
              </p>
              {/* Bullet Points for readability */}
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#f97316] mt-1 flex-shrink-0" size={24} />
                    <span>Utilization of latest diagnostic technology for precise repairs.</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#f97316] mt-1 flex-shrink-0" size={24} />
                    <span>Legacy of excellence across IL, WI, and IN built on transparent pricing.</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#f97316] mt-1 flex-shrink-0" size={24} />
                    <span>5-star customer service guarantee on every job.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl h-[500px] border-8 border-gray-100">
             {/* Reliable Unsplash Image URL */}
             <img 
               src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80" 
               alt="Expert Local Plumbing Technician" 
               className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
             />
          </div>
        </div>
      </section>

      {/* 5. SERVICE CARDS GRID (Replaces wall of text) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-[#1e3a8a] uppercase italic underline decoration-[#f97316] tracking-tighter mb-4">
                Our Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive solutions for residential and commercial properties across the region.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-[30px] p-8 shadow-xl border-2 border-transparent hover:border-[#f97316] transition-all group flex flex-col">
                <div className="bg-[#1e3a8a]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#f97316] transition-colors">
                  <service.icon size={32} className="text-[#1e3a8a] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-black text-[#1e3a8a] uppercase mb-4 leading-tight">{service.title}</h3>
                <p className="text-gray-600 mb-8 flex-grow font-medium leading-relaxed">{service.desc}</p>
                {/* Read More Button (Currently placeholder link #) */}
                <a href="#" className="inline-flex items-center gap-2 font-black text-[#f97316] uppercase tracking-widest text-sm hover:gap-4 transition-all">
                  Read More <ChevronRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. KEYWORD-RICH TESTIMONIALS */}
      <section className="py-24 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-4xl font-black uppercase text-[#1e3a8a] mb-16 italic">Verified Local Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { name: "John D.", city: primaryCity, text: `The best emergency ${niche} service! Arrived in 20 mins during the freeze and fixed our burst pipe perfectly.` },
              { name: "Sarah M.", city: "Gurnee", text: `Professional team, upfront pricing, and they really know their stuff. Serving IL since 2016 is evident in their quality.` },
              { name: "Mike R.", city: "North Chicago", text: "Since 2016, they have never let me down. Honest, reliable, and skilled local professionals." }
            ].map((rev, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-[32px] border-b-8 border-[#f97316] relative shadow-sm hover:shadow-md transition-shadow">
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

      {/* 7. DYNAMIC MAP SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="rounded-[40px] overflow-hidden shadow-2xl h-[500px] border-4 border-white relative">
             <iframe 
                width="100%" height="100%" frameBorder="0" scrolling="no" title="google-map"
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
