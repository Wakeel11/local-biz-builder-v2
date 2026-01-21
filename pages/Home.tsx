import React from 'react';
import { Link } from 'react-router-dom'; // Added Link for smooth routing
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

  const services = [
    {
      icon: Wrench,
      title: "24/7 Emergency Repairs",
      desc: `Rapid response for burst pipes, major leaks, and urgent failures in ${primaryCity}.`,
      slug: "emergency-repairs"
    },
    {
      icon: Droplets,
      title: "Drain & Sewer Cleaning",
      desc: "Advanced hydro-jetting and camera inspections to clear stubborn clogs.",
      slug: "drain-cleaning"
    },
    {
      icon: Thermometer,
      title: "Water Heater Services",
      desc: "Expert installation and repair of tankless and traditional water heaters.",
      slug: "water-heaters"
    },
    {
      icon: Waves,
      title: "Sump Pump Protection",
      desc: `Essential basement flood protection for Illinois homes.`,
      slug: "sump-pumps"
    },
    {
      icon: Search,
      title: "Advanced Leak Detection",
      desc: "Non-invasive electronic and thermal imaging to pinpoint hidden leaks.",
      slug: "leak-detection"
    },
    {
      icon: Flame,
      title: "Gas Line Services",
      desc: "Certified safety inspections, leak repairs, and new line installations.",
      slug: "gas-lines"
    }
  ];

  return (
    <div className="pt-24 bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[#1e3a8a] text-white py-20 lg:py-32 px-4 overflow-hidden min-h-[800px] flex items-center">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl">
          <div className="text-left lg:col-span-7">
            <span className="block text-[#f97316] font-black tracking-widest uppercase mb-4">Since {BUSINESS_INFO.established} • Local Authority</span>
            <h1 className="text-5xl md:text-8xl font-black uppercase mb-8 leading-[1.0] tracking-tighter">
              24/7 EMERGENCY {BUSINESS_INFO.name.split(' ')[1]} IN {primaryCity.toUpperCase()}
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed font-bold max-w-2xl">
              Licensed experts serving IL, WI, and IN since {BUSINESS_INFO.established}.
            </p>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-4 bg-[#22c55e] text-white text-3xl font-black px-12 py-6 rounded-2xl shadow-3xl hover:scale-105 transition-all">
              <Phone size={36} /> CALL {BUSINESS_INFO.phone}
            </a>
          </div>

          {/* Form Box */}
          <div className="flex justify-center lg:justify-end lg:col-span-5">
            <div className="bg-white p-4 rounded-[40px] shadow-3xl border-8 border-[#f97316] w-full max-w-[450px]">
               <div className="text-center mb-4 mt-2">
                  <h3 className="text-3xl font-black uppercase text-[#1e3a8a]">Get A Fast Quote</h3>
                  <p className="text-gray-500 font-bold uppercase text-xs">Response in 30 Mins</p>
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

      {/* Service Grid */}
      <section className="py-24 bg-gray-50 border-y">
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
                {/* Changed to <Link> for proper routing */}
                <Link to={`/services/${service.slug}`} className="inline-flex items-center gap-2 font-black text-[#f97316] uppercase tracking-widest text-sm group-hover:gap-4 transition-all">
                  Read More <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
