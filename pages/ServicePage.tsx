import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Phone, ShieldCheck, Clock, Award, Star, Quote, ArrowRight, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';
import { SERVICES_DATA } from '../data/services';

const ServicePage = () => {
  const { slug } = useParams();
  const primaryCity = illinoisCities[0].city;
  const niche = BUSINESS_INFO.name.toLowerCase().includes('plumbing') ? 'plumbing' : 'roofing';

  const service = slug ? SERVICES_DATA[slug] : null;
  if (!service) return <Navigate to="/" replace />;

  return (
    <div className="pt-24 bg-white">
      {/* 1. HERO - Consistent Authority */}
      <section className="relative bg-[#1e3a8a] text-white py-20 lg:py-32 px-4 overflow-hidden min-h-[750px] flex items-center">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl">
          <div className="text-left lg:col-span-7">
            <span className="block text-[#f97316] font-black tracking-widest uppercase mb-4 italic">Authority Proven Since ${BUSINESS_INFO.established}</span>
            <h1 className="text-5xl md:text-8xl font-black uppercase mb-8 leading-[1.0] tracking-tighter">
              {service.title.split('&')[0]} IN {primaryCity.toUpperCase()}
            </h1>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-4 bg-[#22c55e] text-white text-3xl font-black px-12 py-6 rounded-2xl shadow-3xl hover:scale-105 transition-all group">
              <Phone size={36} className="group-hover:animate-bounce" /> CALL {BUSINESS_INFO.phone}
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

      {/* 2. SPLIT SECTION (Image 21 Style - Text Left, Relevant Image Right) */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-5xl font-black text-[#1e3a8a] mb-8 uppercase leading-tight italic tracking-tighter underline decoration-[#f97316]">
              YOUR LOCAL {niche.toUpperCase()} AUTHORITY IN {primaryCity}
            </h2>
            <div className="text-gray-700 text-xl leading-relaxed space-y-8 mb-10 font-medium">
              <p>{service.intro}</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border-l-4 border-[#f97316]"><CheckCircle className="text-[#f97316] mt-1" /> Licensed, Bonded & Insured Local Professionals.</li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border-l-4 border-[#f97316]"><CheckCircle className="text-[#f97316] mt-1" /> Transparent pricing with no hidden crisis fees.</li>
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2 rounded-[50px] overflow-hidden shadow-4xl h-[600px] border-[10px] border-white ring-1 ring-gray-100 group">
             <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
          </div>
        </div>
      </section>

      {/* 3. MASSIVE SEO CONTENT (Table, Lists, Detailed Text) */}
      {/* 3. MASSIVE SEO CONTENT - Ab yeh Full Width hai */}
<section className="w-full bg-white">
  <div className="w-full overflow-hidden">
    <article 
      className="w-full prose prose-2xl max-w-none text-gray-800 leading-relaxed" 
      dangerouslySetInnerHTML={{ __html: service.content }} 
    />
  </div>
</section>

      {/* 4. TESTIMONIALS SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-5xl font-black uppercase text-[#1e3a8a] mb-16 italic tracking-tighter">Verified Lake County Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-[35px] border-b-8 border-[#f97316] relative shadow-lg group hover:shadow-2xl transition-all">
                <Quote className="text-gray-200 mb-4 group-hover:text-[#f97316] transition-colors" size={48} />
                <p className="text-gray-700 italic font-medium text-lg leading-relaxed mb-6">"Since 2016, Eduardo Zuniga has been our primary contractor for emergency repairs. They are prompt, professional, and explain every step of the process."</p>
                <div className="font-black text-[#1e3a8a] uppercase text-sm italic border-t pt-4">Local Neighbor — {primaryCity}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AREAS WE SERVE (Restored Homepage Grid Style) */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-4xl font-black mb-12 uppercase text-[#1e3a8a] tracking-tight">Rapid Response Service Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {illinoisCities.map((city) => (
              <a key={city.slug} href={`/#/${city.slug}`} className="group bg-white p-6 rounded-2xl border-b-4 border-transparent hover:border-[#f97316] transition-all flex justify-between items-center shadow-md">
                <span className="font-black text-[#1e3a8a] uppercase text-sm tracking-widest">{city.city}, IL</span>
                <ArrowRight size={18} className="text-[#f97316]" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DYNAMIC MAP */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="rounded-[50px] overflow-hidden shadow-2xl h-[500px] grayscale hover:grayscale-0 transition-all duration-700 border-8 border-gray-50">
             <iframe width="100%" height="100%" frameBorder="0" scrolling="no" src={`https://maps.google.com/maps?q=${primaryCity},IL&t=&z=13&ie=UTF8&iwloc=&output=embed`}></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
