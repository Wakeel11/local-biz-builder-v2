import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { 
  Phone, ShieldCheck, Clock, Award, Star, Quote, ArrowRight, CheckCircle 
} from 'lucide-react';
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
      {/* 1. HERO (Exact same as Home) */}
      <section className="relative bg-[#1e3a8a] text-white py-20 lg:py-32 px-4 overflow-hidden min-h-[800px] flex items-center">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl">
          <div className="text-left lg:col-span-7">
            <span className="block text-[#f97316] font-black tracking-widest uppercase mb-4">Established {BUSINESS_INFO.established}</span>
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

      {/* 2. SPLIT INTRO SECTION (Image 21 Style) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-6 uppercase leading-tight italic">
              Your Local {niche.toUpperCase()} Authority In {primaryCity}
            </h2>
            <div className="text-gray-700 text-lg leading-relaxed space-y-6">
              <p>Established in 2016, we have dedicated ourselves to securing the homes and businesses of the {primaryCity} community. We recognize that emergencies don't wait, which is why speed and integrity are our core values.</p>
              <ul className="space-y-4 font-bold text-slate-800">
                <li className="flex items-center gap-3"><CheckCircle className="text-[#f97316]" /> Advanced electronic leak detection.</li>
                <li className="flex items-center gap-3"><CheckCircle className="text-[#f97316]" /> Serving the tri-state area with local pride.</li>
                <li className="flex items-center gap-3"><CheckCircle className="text-[#f97316]" /> Upfront, transparent pricing on all jobs.</li>
              </ul>
            </div>
          </div>
          <div className="rounded-[40px] overflow-hidden shadow-2xl h-[500px] border-8 border-gray-100">
             <img src="https://images.unsplash.com/photo-1581244276891-83393a8ba321?auto=format&fit=crop&q=80" alt="Local Work" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* 3. MAIN CONTENT (Detailed Text) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-2xl max-w-none text-gray-800 leading-relaxed font-serif" dangerouslySetInnerHTML={{ __html: service.content }} />
        </div>
      </section>

      {/* 4. TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-4xl font-black uppercase text-[#1e3a8a] mb-16 italic">Trusted By Your Neighbors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-[32px] border-b-8 border-[#f97316] shadow-sm">
                <Quote className="text-gray-200 mb-4" size={32} />
                <p className="text-gray-700 italic font-medium">"Since 2016, {BUSINESS_INFO.name} has been our go-to for emergency repairs. Professional and fast!"</p>
                <div className="font-black text-[#1e3a8a] uppercase text-xs mt-6 italic">Local Homeowner — {primaryCity}, IL</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AREAS WE SERVE (Homepage Grid Style) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-4xl font-black mb-12 uppercase text-[#1e3a8a]">Serving The Tri-State Region</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {illinoisCities.map((city) => (
              <a key={city.slug} href={`/#/${city.slug}`} className="group bg-white p-6 rounded-2xl border-b-4 border-transparent hover:border-[#f97316] transition-all flex justify-between items-center shadow-md">
                <span className="font-black text-[#1e3a8a] uppercase text-lg">{city.city}, IL</span>
                <ArrowRight size={18} className="text-[#f97316]" />
              </a>
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
