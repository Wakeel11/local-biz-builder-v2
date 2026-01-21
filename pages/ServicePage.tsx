import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Phone, ArrowLeft } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const ServicePage = () => {
  const { slug } = useParams();
  // In a real tool, this would come from a 'services.ts' data file
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-[#f97316] font-bold uppercase text-sm mb-8">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        {/* Yahan aap ka 1000-word content load hoga */}
        <h1 className="text-5xl font-black text-[#1e3a8a] uppercase mb-8 leading-tight">
          Professional {slug?.replace(/-/g, ' ')} Services in Waukegan, IL
        </h1>
        
        <div className="prose prose-xl max-w-none text-gray-700 leading-loose">
          <p className="font-bold text-2xl text-[#f97316] mb-6">
            Trusted by the community since {BUSINESS_INFO.established}, we provide top-tier local expertise.
          </p>
          {/* Detailed Content Starts Here */}
          <p>Detailed 1000-word content goes here for {slug}...</p>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
