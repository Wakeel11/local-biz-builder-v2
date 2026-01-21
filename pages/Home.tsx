import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, ShieldCheck, Clock, Award, CheckCircle, Star, Quote, 
  ArrowRight, Wrench, Droplets, Thermometer, Waves, Search, 
  Flame, ChevronRight 
} from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const Home = () => {
  const primaryCity = illinoisCities[0].city;
  const niche = BUSINESS_INFO.name.toLowerCase().includes('plumbing') ? 'plumbing' : 'roofing';

  // Complete Service Data for Grid
  const services = [
    { icon: Wrench, title: "24/7 Emergency Repairs", desc: `Rapid response for burst pipes and urgent failures in ${primaryCity}.`, slug: "emergency-repairs" },
    { icon: Droplets, title: "Drain & Sewer Cleaning", desc: "Advanced hydro-jetting and camera inspections for clear pipes.", slug: "drain-cleaning" },
    { icon: Thermometer, title: "Water Heater Services", desc: "Expert installation and repair of all unit types.", slug: "water-heaters" },
    { icon: Waves, title: "Sump Pump Protection", desc: "Essential basement flood protection and backup systems.", slug: "sump-pumps" },
    { icon: Search, title: "Advanced Leak Detection", desc: "Non-invasive electronic and thermal imaging to find leaks fast.", slug: "leak-detection" },
    { icon: Flame, title: "Gas Line Services", desc: "Certified safety inspections and expert leak repairs.", slug: "gas-lines" }
  ];

  return (
    <div className="pt-24 bg-white">
      {/* 1. VIP HERO SECTION */}
      <section className="relative bg-[#1e3a8a] text-white py-20 lg:py-32 px-4 overflow-hidden min-h-[800px] flex items-center">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl">
          <div className="text-left lg:col-span-7">
            <span className="block text-[#f97316] font-black tracking-widest uppercase mb-4">Established {BUSINESS_INFO.established} • Local Authority</span>
            <h1 className="text-5xl md:text-8xl font-black uppercase mb-8 leading-[1.0] tracking-tighter">
              24/7 EMERGENCY {BUSINESS_INFO.name.split(' ')[1]} IN {primaryCity.toUpperCase()}
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed font-bold max-w-2xl">
              Licensed experts serving Illinois, Wisconsin, and Indiana since {BUSINESS_INFO.established}. Fast, reliable, and upfront pricing.
            </p>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-4 bg-[#22c55e] text-white text-3xl font-black px-12 py-6 rounded-2xl shadow-3xl hover:scale-105 transition-all">
              <Phone size={36} /> CALL {BUSINESS_INFO.phone}
            </a>
          </div>

          {/* ADJUSTED BIGGER FORM BOX */}
          <div className="flex justify-center lg:justify-end lg:col-span-5">
            <div className="bg-white p-4 rounded-[40px] shadow-3xl border-8 border-[#f97316] w-full max-w-[450px]">
               <div className="text-center mb-4 mt-2">
                  <h3 className="text-3xl font-black uppercase text-[#1e3a8a]">Get A Fast Quote</h3>
                  <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">Response in 30 Mins or Less</p>
               </div>
               <div id="polyares_form_container" className="overflow-hidden rounded-[25px]">
                  <div id="polyares_form" style={{width: '100%', height: '500px'}}>
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

      {/* 2. EEAT TRUST BAR */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: ShieldCheck, title: "Fully Insured", desc: "Licensed & Bonded" },
            { icon: Star, title: "5-Star Rated", desc: "Trusted Locally" },
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

      {/* 3. AREAS WE SERVE */}
      <section className="py-20 bg-white border-b">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-4xl font-black mb-12 uppercase text-[#1e3a8a]">Serving Your Neighborhood:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {illinoisCities.map((city) => (
              <a 
                key={city.slug} 
                href={`/#/${city.slug}`} 
                className="group bg-gray-50 p-6 rounded-2xl border-b-4 border-transparent hover:border-[#f97316] transition-all flex justify-between items-center shadow-sm"
              >
                <span className="font-black text-[#1e3a8a] uppercase text-lg">{city.city}, IL</span>
                <span className="bg-[#1e3a8a]/10 p-2 rounded-full group-hover:bg-[#f97316] group-hover:text-white transition-colors">
                    <ArrowRight size={18} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPLIT CONTENT SECTION (EEAT & Authority Bullets) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-6 uppercase leading-tight italic">
              Your Local {niche.toUpperCase()} Authority in {primaryCity}
            </h2>
            <div className="text-gray-700 text-lg leading-relaxed mb-8 text-slate-600 font-medium">
              <p className="mb-6">
                Established in {BUSINESS_INFO.established}, we have dedicated ourselves to securing the homes and businesses of the {primaryCity} community. We recognize that emergencies don't wait, which is why speed and integrity are our core values.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#f97316] mt-1 flex-shrink-0" size={24} />
                    <span>Advanced electronic leak detection and thermal imaging.</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#f97316] mt-1 flex-shrink-0" size={24} />
                    <span>Serving Illinois, Wisconsin, and Indiana with local pride since {BUSINESS_INFO.established}.</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#f97316] mt-1 flex-shrink-0" size={24} />
                    <span>Upfront, transparent pricing with no hidden emergency fees.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl h-[500px] border-8 border-white">
             <img 
               src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80" 
               alt="Expert Technician" 
               className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
             />
          </div>
        </div>
      </section>

      {/* 5. SERVICE GRID SECTION */}
      <section className="py-24 bg-white border-y">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-5xl font-black text-[#1e3a8a] uppercase italic underline decoration-[#f97316] tracking-tighter mb-16">
              Our Professional Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-[30px] p-8 shadow-xl border-2 border-transparent hover:border-[#f97316] transition-all group flex flex-col text-left">
                <div className="bg-[#1e3a8a]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#f97316] transition-colors">
                  <service.icon size={32} className="text-[#1e3a8a] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-black text-[#1e3a8a] uppercase mb-4 leading-tight">{service.title}</h3>
                <p className="text-gray-600 mb-8 flex-grow font-medium leading-relaxed">{service.desc}</p>
                <Link 
                  to={`/services/${service.slug}`} 
                  className="inline-flex items-center gap-2 font-black text-[#f97316] uppercase tracking-widest text-sm group-hover:gap-4 transition-all"
                >
                  Read More <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-24 bg-gray-50 border-b border-gray-200 shadow-inner">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-4xl font-black uppercase text-[#1e3a8a] mb-16 italic">Trusted By Your Neighbors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { name: "John D.", city: primaryCity, text: `The best emergency ${niche} service! Fixed our issue perfectly since 2016.` },
              { name: "Sarah M.", city: "Gurnee", text: "Professional team, upfront pricing. Highly recommended local pros." },
              { name: "Mike R.", city: "North Chicago", text: `Since 2016, they have never let me down. Expert support.` }
            ].map((rev, i) => (
              <div key={i} className="bg-white p-10 rounded-[32px] border-b-8 border-[#f97316] relative shadow-sm">
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
