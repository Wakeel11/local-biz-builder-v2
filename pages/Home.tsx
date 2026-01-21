import React from 'react';
import { Phone, ShieldCheck, Clock, Award, CheckCircle, Star, Quote, ArrowRight, Wrench, Droplets, Thermometer } from 'lucide-react';
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
            <p className="text-xl mb-8 opacity-90 leading-relaxed font-medium max-w-xl">
              Licensed, bonded, and insured experts serving Illinois, Wisconsin, and Indiana since {BUSINESS_INFO.established}. 
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

      {/* 3. AREAS WE SERVE (MOVED UP) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-4xl font-black mb-12 uppercase text-[#1e3a8a]">Areas We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {illinoisCities.map((city) => (
              <a key={city.slug} href={`/#/${city.slug}`} className="group bg-gray-50 p-6 rounded-2xl border-b-4 border-transparent hover:border-[#f97316] transition-all flex justify-between items-center">
                <span className="font-black text-[#1e3a8a] uppercase">{city.city}</span>
                <ArrowRight size={18} className="text-[#f97316]" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPLIT CONTENT/IMAGE SECTION (EEAT Builder) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-6 uppercase leading-tight italic">
              Professional Plumbing Solutions in {primaryCity} & Beyond
            </h2>
            <div className="text-gray-700 text-lg leading-loose space-y-6 mb-8 text-slate-600">
              <p>
                When you face a plumbing crisis, you don't just need a technician; you need a partner who understands the local infrastructure of {primaryCity}. Since {BUSINESS_INFO.established}, {BUSINESS_INFO.name} has been the first choice for homeowners seeking rapid diagnostic and lasting repairs in Illinois, Wisconsin, and Indiana. 
              </p>
              <p>
                Our team utilizes state-of-the-art diagnostic equipment to identify leaks, clogs, and system failures within minutes. We take pride in our transparent pricing model—no surprises, no hidden fees, just honest work from your local neighbors.
              </p>
            </div>
          </div>
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl h-[450px]">
             <img 
               src="https://images.unsplash.com/photo-1581244276891-83393a8ba321?auto=format&fit=crop&q=80" 
               alt="Local Plumbing Team" 
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
             />
          </div>
        </div>
      </section>

      {/* 5. MASSIVE SEO CONTENT SECTION (1000+ WORDS TARGET) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-5xl font-black text-center text-[#1e3a8a] mb-16 uppercase italic underline decoration-[#f97316]">Expert Local Service Categories</h2>
          
          <div className="space-y-20">
            {/* Category 1: Emergency Repair */}
            <div className="prose prose-lg max-w-none">
              <h3 className="text-3xl font-black text-[#1e3a8a] flex items-center gap-3 uppercase"><Wrench className="text-[#f97316]" /> 24/7 Emergency Repairs</h3>
              <p className="text-gray-700 leading-relaxed">
                Emergency plumbing situations in {primaryCity} can strike at any hour, from burst pipes in the middle of a winter freeze to a sewer backup during a heavy storm. At {BUSINESS_INFO.name}, we maintain a fleet of fully equipped mobile units strategically stationed across {BUSINESS_INFO.serviceArea}. This allow us to offer a 30-minute response time for the most critical situations. Since {BUSINESS_INFO.established}, we have handled thousands of urgent calls, ensuring that property damage is minimized and homeowners can return to their normal routines as quickly as possible. Our technicians are factory-trained to handle high-pressure situations with calm expertise.
              </p>
            </div>

            {/* Category 2: Drain Cleaning */}
            <div className="prose prose-lg max-w-none">
              <h3 className="text-3xl font-black text-[#1e3a8a] flex items-center gap-3 uppercase"><Droplets className="text-[#f97316]" /> Professional Drain & Sewer Cleaning</h3>
              <p className="text-gray-700 leading-relaxed">
                Stubborn clogs and slow-moving drains are more than just a nuisance; they are often a symptom of deeper issues within your home's waste management system. Our professional drain cleaning services in {primaryCity} go beyond a simple snake tool. We utilize high-definition fiber-optic cameras to inspect the interior of your pipes, identifying root intrusions, grease buildup, or structural collapses. By serving Illinois, Wisconsin, and Indiana for over a decade, we understand the specific soil conditions and common plumbing layouts that affect drainage in the Midwest. Whether it's a kitchen sink or a main sewer line, we provide lasting solutions that restore full flow.
              </p>
            </div>

            {/* Category 3: Water Heater Services */}
            <div className="prose prose-lg max-w-none">
              <h3 className="text-3xl font-black text-[#1e3a8a] flex items-center gap-3 uppercase"><Thermometer className="text-[#f97316]" /> Water Heater Installation & Maintenance</h3>
              <p className="text-gray-700 leading-relaxed">
                A cold shower is the last thing any resident of {primaryCity} wants on a frosty morning. Our water heater experts specialize in both traditional tank-style heaters and modern tankless units. Proper maintenance is essential for the longevity of your system, especially in areas with hard water conditions common across {BUSINESS_INFO.serviceArea}. We provide comprehensive flush services, anode rod replacements, and thermostat calibrations. If it's time for an upgrade, we help you select an energy-efficient model that fits your family's needs while complying with all local Illinois and Indiana building codes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. KEYWORD-RICH TESTIMONIALS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-4xl font-black uppercase text-[#1e3a8a] mb-16 italic">Trusted By Your Neighbors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { name: "John D.", city: primaryCity, text: `Best emergency plumbing service in ${primaryCity}! Fixed our burst pipe perfectly.` },
              { name: "Sarah M.", city: "Gurnee", text: `Professional team, upfront pricing, and they really know their stuff. Serving IL since 2016.` },
              { name: "Mike R.", city: "North Chicago", text: "Since 2016, they have never let me down. Professional local pros." }
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

      {/* 7. DYNAMIC MAP SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
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
