import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Phone, ArrowLeft, ShieldCheck, Clock, Award, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { SERVICES_DATA } from '../data/services';

const ServicePage = () => {
  const { slug } = useParams();
  
  // Data load based on the URL slug
  const service = slug ? SERVICES_DATA[slug] : null;

  if (!service) {
    return (
      <div className="pt-40 text-center py-20">
        <h2 className="text-3xl font-black uppercase text-red-600 italic">Service Not Found</h2>
        <Link to="/" className="text-[#1e3a8a] font-bold underline mt-4 block">Back to Homepage</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <Link to="/" className="inline-flex items-center gap-2 text-[#f97316] font-black uppercase text-sm mb-12">
          <ArrowLeft size={18} /> Back to Home
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h1 className="text-5xl md:text-6xl font-black text-[#1e3a8a] uppercase mb-8 leading-tight italic tracking-tighter">
              {service.title}
            </h1>
            <div className="prose prose-xl max-w-none text-gray-700 leading-loose space-y-8">
              <div dangerouslySetInnerHTML={{ __html: service.content }} />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-[#1e3a8a] text-white p-10 rounded-[40px] shadow-2xl border-t-[10px] border-[#f97316]">
              <h3 className="text-3xl font-black uppercase mb-4 italic">Need Help?</h3>
              <p className="mb-8 font-bold text-slate-300 tracking-tight leading-relaxed">Fast emergency response across Illinois, Wisconsin, and Indiana.</p>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-[#22c55e] block py-5 rounded-2xl font-black text-2xl text-center shadow-lg hover:scale-105 transition-all">
                CALL {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
