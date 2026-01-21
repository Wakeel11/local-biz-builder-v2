import React from 'react';
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

  // Data structure for Service Cards
  const services = [
    {
      icon: Wrench,
      title: "24/7 Emergency Repairs",
      desc: `Rapid response for burst pipes, major leaks, and urgent failures in ${primaryCity}. We minimize damage and restore safety quickly.`,
      slug: "emergency-repairs"
    },
    {
      icon: Droplets,
      title: "Drain & Sewer Cleaning",
      desc: "Advanced hydro-jetting and camera inspections to clear stubborn clogs and ensure proper flow in your home's drainage system.",
      slug: "drain-cleaning"
    },
    {
      icon: Thermometer,
      title: "Water Heater Services",
      desc: "Expert installation and repair of tankless and traditional water heaters. Ensure reliable hot water year-round.",
      slug: "water-heaters"
    },
    {
      icon: Waves,
      title: "Sump Pump Protection",
      desc: `Essential basement flood protection for Illinois homes. High-efficiency primary pumps and battery backup systems.`,
      slug: "sump-pumps"
    },
    {
      icon: Search,
      title: "Advanced Leak Detection",
      desc: "Non-invasive electronic and thermal imaging to pinpoint hidden leaks behind walls or underground without property damage.",
      slug: "leak-detection"
    },
    {
      icon: Flame,
      title: "Gas Line Services",
      desc: "Certified safety inspections, leak repairs, and new line installations for appliances. Safety is our top priority.",
      slug: "gas-lines"
    }
  ];

  return (
    <div className="pt-24 bg-gray-50">
      {/* 1. VIP HERO SECTION - ADJUSTED BIGGER FORM */}
      <section className="relative bg-[#1e3a8a] text-white py-20 lg:py-32 px-4 overflow-hidden min-h-[800px] flex items-center">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        
        <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl">
          <div className="text-left lg:col-span-7">
            <span className="block text-[#f97316] font-black tracking-widest uppercase mb-4">Since {BUSINESS_INFO.established} • Local Authority</span>
            <h1 className="text-5xl md:text-8xl font-black uppercase mb-8 leading-[1.0] tracking-tighter">
              24/7 EMERGENCY {BUSINESS_INFO.name.split(' ')[1]} IN {primaryCity.toUpperCase()}
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed font-bold max-w-2xl">
              Facing a plumbing crisis? Our licensed experts in Illinois, Wisconsin, and Indiana are ready to deploy immediately. Fast, reliable, and upfront pricing guaranteed.
            </p>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-4 bg-[#22c55e] text-white text-3xl font-black px-12 py-6 rounded-2xl shadow-3xl hover:scale-105 transition-all">
              <Phone size={36} /> CALL {BUSINESS_INFO.phone}
            </a>
          </div>

          {/* BIGGER & ALIGNED FORM BOX */}
          <div className="flex justify-center lg:justify-end lg:col-span-5">
            <div className="bg-white p-4 rounded-[40px] shadow-3xl border-8 border-[#f97316] w-full max-w-[450px]">
               <div className="text-center mb-4 mt-2">
                  <h3 className="text-3xl font-black uppercase text-[#1e3a8a]">Get A Fast Quote</h3>
                  <p className="text-gray-500 font-bold uppercase text-xs">Response in 30 Mins or Less</p>
               </div>
               <div id="polyares_form_container" className="overflow-hidden rounded-[25px]">
                  <div id="polyares_form" style={{width: '100%', height: '500px'}}>
                    <iframe 
                      src={`//leads.leadsmartinc.com/?api_key=eccf565586cda416df8b89f66df641fee9a1bcb8&affiliate_source=modazawra1&funnel=5&category=${niche}&buttons=btn-success`} 
                      height="100%" width="100%" frameBorder="no" scrolling="yes" title="
