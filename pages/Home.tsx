import React from 'react';
import { Phone, ShieldCheck, Clock, Award, CheckCircle, Star, Quote, ArrowRight, Wrench, Droplets, Thermometer, Waves, Search, Flame } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const Home = () => {
  const primaryCity = illinoisCities[0].city;
  const niche = BUSINESS_INFO.name.toLowerCase().includes('plumbing') ? 'plumbing' : 'roofing';

  return (
    <div className="pt-24 bg-white">
      {/* 1. VIP HERO SECTION */}
      <section className="relative bg-[#1e3a8a] text-white py-16 md:py-24 px-4 overflow-hidden min-h-[700px] flex items-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        
        <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl">
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 leading-[1.1] tracking-tighter">
              24/7 EMERGENCY {BUSINESS_INFO.name.split(' ')[1]} IN {primaryCity.toUpperCase()}, IL
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed font-medium max-w-xl italic">
              Serving the Illinois, Wisconsin, and Indiana area since {BUSINESS_INFO.established}. Trusted Local Authority.
            </p>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-4 bg-[#22c55e] text-white text-3xl font-black px-12 py-6 rounded-2xl shadow-2xl hover:scale-105 transition-all">
              <Phone size={36} /> CALL {BUSINESS_INFO.phone}
            </a>
          </div>

          {/* IFRAME FORM BOX */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white p-2 rounded-[30px] shadow-2xl border-4 border-[#f97316]">
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

      {/* 2. EEAT TRUST SECTION */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: ShieldCheck, title: "Fully Insured", desc: "Licensed & Bonded" },
            { icon: Star, title: "5-Star Rated", desc: "Top Local Reviews" },
            { icon: Clock, title: "24/7 Response", desc: "Emergency Ready" },
            { icon: Award, title: "Expert Pros", desc: `Since ${BUSINESS_INFO.established}` }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <item.icon size={40} className="text-[#f97316] mb-3" />
              <h4 className="font-black uppercase text-[#1e3a8a] text-sm">{item.title}</h4>
              <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. AREAS WE SERVE (SEO Links) */}
      <section className="py-20 bg-white border-b">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-4xl font-black mb-12 uppercase text-[#1e3a8a]">Areas We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {illinoisCities.map((city) => (
              <a key={city.slug} href={`/#/${city.slug}`} className="group bg-gray-50 p-6 rounded-2xl border-b-4 border-transparent hover:border-[#f97316] transition-all flex justify-between items-center shadow-sm">
                <span className="font-black text-[#1e3a8a] uppercase">{city.city}</span>
                <ArrowRight size={18} className="text-[#f97316]" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPLIT CONTENT/IMAGE (Local Authority) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-6 uppercase leading-tight italic">
              Your Local {niche.toUpperCase()} Experts in {primaryCity}
            </h2>
            <div className="text-gray-700 text-lg leading-loose space-y-6 mb-8 text-slate-600">
              <p>
                As a family-owned business established in {BUSINESS_INFO.established}, we have dedicated ourselves to securing the homes and businesses of the {primaryCity} community. We recognize that plumbing or roofing failures are high-stress events, which is why we emphasize speed, integrity, and expert craftsmanship in every job we take on. 
              </p>
              <p>
                By utilizing the latest diagnostic technology, {BUSINESS_INFO.name} ensures that our neighbors receive the most efficient solutions available. Our legacy of excellence across Illinois, Wisconsin, and Indiana is built on a foundation of transparent pricing and 5-star customer service.
              </p>
            </div>
          </div>
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl h-[450px]">
             <img 
               src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80" 
               alt="Expert Local Technicians" 
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
             />
          </div>
        </div>
      </section>

      {/* 5. MASSIVE SEO CONTENT (1500+ WORDS) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-5xl font-black text-center text-[#1e3a8a] mb-16 uppercase italic underline decoration-[#f97316] tracking-tighter">
            Comprehensive {niche.toUpperCase()} Solutions
          </h2>
          
          <div className="space-y-20">
            {/* Category 1: Emergency Repair */}
            <div className="prose prose-lg max-w-none">
              <h3 className="text-3xl font-black text-[#1e3a8a] flex items-center gap-3 uppercase"><Wrench className="text-[#f97316]" /> 24/7 Emergency Repairs</h3>
              <p className="text-gray-700 leading-relaxed">
                Emergency situations in {primaryCity} can happen at the most inconvenient times. From burst pipes during a Lake County winter to major roofing leaks during a heavy Midwest storm, {BUSINESS_INFO.name} is ready to respond. Since {BUSINESS_INFO.established}, we have maintained a 24-hour fleet to ensure a 30-minute response time across Illinois. Our technicians are trained to mitigate damage quickly, protecting your property from further financial loss.
              </p>
            </div>

            {/* Category 2: Sump Pump Specialist (New) */}
            <div className="prose prose-lg max-w-none">
              <h3 className="text-3xl font-black text-[#1e3a8a] flex items-center gap-3 uppercase"><Waves className="text-[#f97316]" /> Sump Pump & Basement Protection</h3>
              <p className="text-gray-700 leading-relaxed">
                In the {primaryCity} area, a functional sump pump is not a luxury—it is a necessity. With heavy seasonal rains and varying water tables in the Illinois and Wisconsin region, basement flooding can cause catastrophic damage. We specialize in the installation and repair of high-efficiency primary pumps and battery-backup systems. Since {BUSINESS_INFO.established}, we have helped thousands of homeowners avoid the stress and cost of water damage through proactive pump maintenance and emergency replacements.
              </p>
            </div>

            {/* Category 3: Advanced Leak Detection (New) */}
            <div className="prose prose-lg max-w-none">
              <h3 className="text-3xl font-black text-[#1e3a8a] flex items-center gap-3 uppercase"><Search className="text-[#f97316]" /> Electronic & Thermal Leak Detection</h3>
              <p className="text-gray-700 leading-relaxed">
                Hidden leaks can silently destroy your home's foundation and spike your water bills. Our team utilizes non-invasive electronic leak detection and thermal imaging to find leaks behind walls, under slab foundations, and beneath your yard in {primaryCity}. Unlike traditional methods that require tearing up your property, our advanced technology allows us to pinpoint the exact location of a leak within inches. Serving {BUSINESS_INFO.serviceArea} for over a decade, we have the specialized experience required for complex residential and commercial leak resolutions.
              </p>
            </div>

            {/* Category 4: Gas Line Repair (New) */}
            <div className="prose prose-lg max-w-none">
              <h3 className="text-3xl font-black text-[#1e3a8a] flex items-center gap-3 uppercase"><Flame className="text-[#f97316]" /> Certified Gas Line Repair & Install</h3>
              <p className="text-gray-700 leading-relaxed">
                Gas leaks are one of the most dangerous emergencies a homeowner can face. If you smell sulfur or rotten eggs, immediate action is required. {BUSINESS_INFO.name} provides certified gas fitting services across Illinois and Indiana. Our licensed technicians handle emergency shutoffs, leak repairs, and new line installations for appliances, fireplaces, and outdoor grills. Safety is our absolute priority, and since {BUSINESS_INFO.established}, we have adhered to the strictest local building codes to ensure your family's protection.
              </p>
            </div>

            {/* Category 5: Water Heater Expertise */}
            <div className="prose prose-lg max-w-none">
              <h3 className="text-3xl font-black text-[#1e3a8a] flex items-center gap-3 uppercase"><Thermometer className="text-[#f97316]" /> Water Heater Installation & Maintenance</h3>
              <p className="text-gray-700 leading-relaxed">
                Hot water is essential for your comfort, especially during the cold months in {primaryCity}. We specialize in both traditional tank-style and modern tankless water heater systems. Our comprehensive services include flushing sediment, replacing anode rods, and performing full system upgrades. We help you choose energy-efficient models that save you money on monthly utilities while providing a reliable supply for your entire household. Serving the Midwest since {BUSINESS_INFO.established}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. KEYWORD-RICH TESTIMONIALS */}
      <section className="py-24 bg-gray-50 border-y">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-4xl font-black uppercase text-[#1e3a8a] mb-16 italic">Trusted By Your Neighbors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { name: "John D.", city: primaryCity, text: `The best emergency ${niche} service in ${primaryCity}! They arrived in 20 minutes and fixed our issue perfectly.` },
              { name: "Sarah M.", city: "Gurnee", text: `Professional team, upfront pricing, and they really know their stuff. Serving IL since 2016.` },
              { name: "Mike R.", city: "North Chicago", text: "Since 2016, they have never let me down. Professional local pros." }
            ].map((rev, i) => (
              <div key={i} className="bg-white p-10 rounded-[32px] border-b-8 border-[#f97316] relative shadow-sm">
                <Quote className="absolute top-6 right-6 text-gray-100" size={40} />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#f97316" className="text-[#f97316]" />)}
                </div>
                <p className="text-gray-700 font-medium mb-6 italic leading-relaxed">"{rev.text}"</p>
                <div className="font-black text-[#1e3a8a] uppercase text-sm">{rev.name} — {rev.city}, IL</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DYNAMIC MAP SECTION */}
      <section className="py-20 bg-white">
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
