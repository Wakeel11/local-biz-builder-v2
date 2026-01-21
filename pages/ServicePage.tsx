import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Phone, ShieldCheck, Clock, Award, CheckCircle, Star, Quote, 
  ArrowRight, ChevronRight, Wrench 
} from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';
import { SERVICES_DATA } from '../data/services'; // Importing your 1000-word content

const ServicePage = () => {
  const { slug } = useParams();
  const primaryCity = illinoisCities[0].city;
  const service = slug ? SERVICES_DATA[slug] : null;
  const niche = BUSINESS_INFO.name.toLowerCase().includes('plumbing') ? 'plumbing' : 'roofing';

  if (!service) return <Navigate to="/" />;

  return (
    <div className="pt-24 bg-white">
      {/* 1. HERO - Exact same as Home */}
      <section className="relative bg-[#1e3a8a] text-white py-20 lg:py-32 px-4 overflow-hidden min-h-[800px] flex items-center">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl">
          <div className="text-left lg:col-span-7">
            <span className="block text-[#f97316] font-black tracking-widest uppercase mb-4">Master Service Provider</span>
            <h1 className="text-5xl md:text-8xl font-black uppercase mb-8 leading-[1.0] tracking-tighter">
              {service.title.split('in')[0]} IN {primaryCity.toUpperCase()}
            </h1>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-4 bg-[#22c55e] text-white text-3xl font-black px-12 py-6 rounded-2xl shadow-3xl hover:scale-105 transition-all">
              <Phone size={36} /> CALL {BUSINESS_INFO.phone}
            </a>
          </div>
          <div className="flex justify-center lg:justify-end lg:col-span-5">
            <div className="bg-white p-4 rounded-[40px] shadow-3xl border-8 border-[#f97316] w-full max-w-[450px]">
               <div id="polyares_form_container" className="overflow-hidden rounded-[25px]">
                  <div id="polyares_form" style={{width: '100%', height: '500px'}}>
                    <iframe src={`//leads.leadsmartinc.com/?api_key=eccf565586cda416df8b89f66df641fee9a1bcb8&affiliate_source=modazawra1&funnel=5&category=${niche}&buttons=btn-success`} height="100%" width="100%" frameBorder="no" scrolling="yes" title="quote-form"></iframe>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EEAT BAR */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[{ icon: ShieldCheck, title: "Licensed" }, { icon: Star, title: "Authority" }, { icon: Clock, title: "24/7 Support" }, { icon: Award, title: "Established 2016" }].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <item.icon size={36} className="text-[#f97316] mb-3" />
              <h4 className="font-black uppercase text-[#1e3a8a] text-sm">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 3. AREAS WE SERVE */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {illinoisCities.map((city) => (
              <a key={city.slug} href={`/#/${city.slug}`} className="bg-gray-50 p-3 rounded-xl border-b-2 border-transparent hover:border-[#f97316] text-xs font-black text-[#1e3a8a] uppercase shadow-sm">{city.city}</a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MAIN 1000-WORD SEO CONTENT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-2xl max-w-none text-gray-800 leading-relaxed font-serif">
            <div dangerouslySetInnerHTML={{ __html: service.content }} className="service-seo-content" />
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-4xl font-black uppercase text-[#1e3a8a] mb-16 italic">What Neighbors Say About This Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-white p-10 rounded-[32px] border-b-8 border-[#f97316] shadow-md">
                <Quote className="text-gray-200 mb-4" size={32} />
                <p className="text-gray-700 italic font-medium leading-relaxed mb-6">"Since 2016, {BUSINESS_INFO.name} has never failed us. Best local pros for {slug?.replace(/-/g, ' ')}!"</p>
                <div className="font-black text-[#1e3a8a] uppercase text-xs italic">Local Verified Customer — {primaryCity}, IL</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DYNAMIC MAP */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="rounded-[40px] overflow-hidden shadow-2xl h-[400px] grayscale">
             <iframe width="100%" height="100%" frameBorder="0" scrolling="no" src={`https://maps.google.com/maps?q=${primaryCity},IL&t=&z=13&ie=UTF8&iwloc=&output=embed`}></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
