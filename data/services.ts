import { BUSINESS_INFO } from '../constants';

export const SERVICES_DATA: Record<string, { title: string, content: string, image: string, intro: string }> = {
  "emergency-repairs": {
    title: "24/7 Emergency Plumbing & Rapid Pipe Restoration",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80",
    intro: `When disaster strikes, speed is everything. We provide a 30-minute rapid response for all critical plumbing failures in Waukegan and the surrounding tri-state area since ${BUSINESS_INFO.established}.`,
    content: `
      <h3 class="text-3xl font-black mb-6 uppercase italic underline decoration-[#f97316]">Immediate Crisis Intervention & Damage Mitigation</h3>
      <p class="mb-6">Emergency plumbing situations like burst pipes or sewer backups require more than just a quick fix; they require strategic mitigation to prevent permanent structural damage to your property. Since ${BUSINESS_INFO.established}, our teams have specialized in high-pressure repairs across Illinois, Wisconsin, and Indiana. We understand that a plumbing emergency doesn't wait for business hours, which is why our fleet is fully stocked and ready to deploy at any second.</p>
      
      <h4 class="text-2xl font-bold mb-4 uppercase">Why 30-Minute Response Matters in the Midwest</h4>
      <p class="mb-6">In the harsh winters of the Midwest, especially in areas like Beach Park and Waukegan, a burst pipe can lead to catastrophic flooding within minutes. The freezing temperatures cause water in pipes to expand, leading to fractures that compromise your home's integrity. Our rapid response protocol is designed to arrive at your doorstep before the water can seep into your foundation or destroy expensive flooring.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div class="bg-gray-50 p-8 rounded-3xl border-l-8 border-[#1e3a8a] shadow-sm">
          <h4 class="font-black mb-2 uppercase text-[#1e3a8a]">Main Line Failures</h4>
          <p class="text-sm leading-relaxed">We provide instant stabilization of main sewer lines to prevent toxic health hazards and backflow into your living spaces. Our technicians use high-definition cameras to find clogs fast.</p>
        </div>
        <div class="bg-gray-50 p-8 rounded-3xl border-l-8 border-[#1e3a8a] shadow-sm">
          <h4 class="font-black mb-2 uppercase text-[#1e3a8a]">Frozen Pipe Restoration</h4>
          <p class="text-sm leading-relaxed">Critical for Illinois and Wisconsin winters. We use specialized thawing equipment that safely restores water flow without causing additional pipe stress or secondary leaks.</p>
        </div>
      </div>

      <h4 class="text-2xl font-bold mb-4 uppercase">Transparency in Times of Crisis</h4>
      <p class="mb-6">We provide transparent, upfront pricing even during midnight emergency calls. Our legacy, built since 2016, is founded on the fact that we treat your emergency as if it were our own, ensuring total restoration of your home's safety. We don't believe in "emergency surcharges" that exploit your situation; instead, we offer honest assessments and long-term fixes.</p>

      <h4 class="text-2xl font-bold mb-4 uppercase">Specialized Equipment for Rapid Fixes</h4>
      <p class="mb-6">Our trucks carry heavy-duty hydro-jetting units, electronic leak detectors, and industrial-grade sub-pumps. This means we resolve 95% of emergencies on the very first visit. From the Greater Waukegan area to the borders of Indiana, our commitment to speed is unmatched in the local industry.</p>
    `
  },
  "drain-cleaning": {
    title: "Industrial-Grade Hydro-Jetting & Professional Drain Restoration",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80",
    intro: `Restore full flow to your waste management system with our non-invasive cleaning methods. Trusted by Lake County homeowners since ${BUSINESS_INFO.established}.`,
    content: `
      <h3 class="text-3xl font-black mb-6 uppercase italic underline decoration-[#f97316]">Precision Drain Performance & Sewer Descaling</h3>
      <p class="mb-6">Clogged drains are often symptoms of deeper pipe descaling or invasive root intrusion issues. We utilize 4000 PSI hydro-jetting technology to scour pipe walls clean, returning them to their original diameter without using caustic chemicals that damage the environment or your plumbing.</p>
      
      <div class="bg-blue-50 p-10 rounded-3xl mb-10 border border-blue-100 shadow-inner">
        <h4 class="text-2xl font-black mb-6 uppercase text-[#1e3a8a]">The Science of Flow Restoration:</h4>
        <ul class="space-y-6">
          <li class="flex items-start gap-4"><CheckCircle className="text-[#f97316] mt-1" /> <strong>Fiber-Optic Video Imaging:</strong> We don't guess. We see the clog using HD waterproof cameras to identify structural collapses or grease blockages before we start.</li>
          <li class="flex items-start gap-4"><CheckCircle className="text-[#f97316] mt-1" /> <strong>Hydro-Jetting Technology:</strong> High-pressure water streams remove hair, mineral scale, and sludge that traditional snakes simply push around.</li>
          <li class="flex items-start gap-4"><CheckCircle className="text-[#f97316] mt-1" /> <strong>Biological Descaling:</strong> We use safe, enzyme-based solutions that digest organic waste for long-term pipe health.</li>
          <li class="flex items-start gap-4"><CheckCircle className="text-[#f97316] mt-1" /> <strong>Industrial Root Cutting:</strong> Mechanical cutting heads are used to clear invasive tree roots that have penetrated sewer lines in historic Illinois neighborhoods.</li>
        </ul>
      </div>

      <h4 class="text-2xl font-bold mb-4 uppercase">The Problem with Store-Bought Chemicals</h4>
      <p class="mb-6">As local experts since ${BUSINESS_INFO.established}, we've seen hundreds of pipes destroyed by store-bought acid cleaners. These chemicals create heat that can melt PVC or corrode older cast-iron lines. Our professional methods are safer and provide a 100% clear line, guaranteed. Whether you are in Gurnee, Beach Park, or North Chicago, our drain services are designed to last.</p>

      <h4 class="text-2xl font-bold mb-4 uppercase">Preventative Drain Maintenance</h4>
      <p class="mb-6">The best way to avoid an emergency is through regular descaling. We offer maintenance packages that keep your sewer lines flowing year-round, preventing the build-up of fats, oils, and grease (FOG). This is especially important for local commercial kitchens and large households in the tri-state region.</p>
    `
  },
  "water-heaters": {
    title: "High-Efficiency Tankless & Traditional Water Heating Engineering",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
    intro: `Ensure a reliable hot water supply with our certified installation and repair services. Family-owned and operated since ${BUSINESS_INFO.established}.`,
    content: `
      <h3 class="text-3xl font-black mb-6 uppercase italic underline decoration-[#f97316]">Modern Thermal Engineering & Efficiency Upgrades</h3>
      <p class="mb-6">From traditional gas-fired units to modern high-efficiency tankless systems, we provide comprehensive thermal engineering for your home. We analyze your family's usage patterns, water hardness levels, and energy goals to recommend the most cost-effective heating solution available today.</p>
      
      <p class="mb-8">Our maintenance protocols include sediment flushing and anode rod replacements, which can double the life of your existing unit. Serving Illinois and Wisconsin with a commitment to upfront pricing and 5-star service since 2016. A water heater that isn't maintained in the Midwest will fail prematurely due to heavy mineral deposits in the local water supply.</p>

      <h4 class="text-2xl font-bold mb-4 uppercase text-[#1e3a8a]">Tankless Water Heater Benefits:</h4>
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <li class="bg-gray-50 p-4 rounded-xl font-bold">✓ Endless Hot Water Supply</li>
        <li class="bg-gray-50 p-4 rounded-xl font-bold">✓ 20+ Year Expected Lifespan</li>
        <li class="bg-gray-50 p-4 rounded-xl font-bold">✓ Significant Utility Bill Savings</li>
        <li class="bg-gray-50 p-4 rounded-xl font-bold">✓ Space-Saving Wall Mounts</li>
      </ul>

      <h4 class="text-2xl font-bold mb-4 uppercase">Emergency Water Heater Repair</h4>
      <p class="mb-6">If your water heater is leaking from the bottom, making popping noises, or producing rusty water, you need immediate professional help. We carry major brands and can often provide same-day replacements to ensure your comfort is never compromised. Our technicians are factory-certified to handle gas and electric units safely.</p>
    `
  },
  "sump-pumps": {
    title: "Flood Prevention Systems & Sump Pump Redundancy Kits",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80",
    intro: `Protect your property's foundation with our industrial-grade primary and backup pump systems. Essential for the tri-state region storm protection.`,
    content: `
      <h3 class="text-3xl font-black mb-6 uppercase italic underline decoration-[#f97316]">Foundation Protection & Flood Mitigation Protocols</h3>
      <p class="mb-6">In the Midwest, your sump pump is the most critical component of your home's structural health. With heavy seasonal rains and high water tables in the Illinois and Wisconsin region, a failed pump can lead to catastrophic basement flooding in less than an hour. We specialize in redundant systems that ensure your basement stays dry even during total power failures.</p>
      
      <div class="bg-slate-800 text-white p-10 rounded-[40px] mb-10 shadow-2xl">
        <h4 class="text-xl font-black mb-6 uppercase text-[#f97316]">Why Battery Backups Are Mandatory:</h4>
        <ul class="space-y-4 font-bold text-sm">
          <li class="flex items-center gap-3"><span class="w-2 h-2 bg-[#f97316] rounded-full"></span> Power outages are most common during the heavy storms when you need the pump most.</li>
          <li class="flex items-center gap-3"><span class="w-2 h-2 bg-[#f97316] rounded-full"></span> Battery backups provide up to 48 hours of protection without AC power.</li>
          <li class="flex items-center gap-3"><span class="w-2 h-2 bg-[#f97316] rounded-full"></span> Dual-pump systems provide peace of mind if the primary pump suffers a mechanical failure.</li>
          <li class="flex items-center gap-3"><span class="w-2 h-2 bg-[#f97316] rounded-full"></span> Smart alarms notify your phone the second your basement water level rises too high.</li>
        </ul>
      </div>

      <h4 class="text-2xl font-bold mb-4 uppercase text-[#1e3a8a]">Sump Pump Maintenance Checklist</h4>
      <p class="mb-6">We provide annual inspections to ensure your discharge lines aren't frozen or clogged. We check the check-valves, clear debris from the basin, and test the float switch. Since ${BUSINESS_INFO.established}, we have saved thousands of local basements from certain flooding through proactive engineering.</p>
    `
  },
  "leak-detection": {
    title: "High-Accuracy Electronic Leak Detection & Sonic Mapping",
    image: "https://images.unsplash.com/photo-1581244276891-83393a8ba321?auto=format&fit=crop&q=80",
    intro: `Stop hidden water loss with our advanced sonic and thermal imaging technology. No property damage, guaranteed precision in ${primaryCity}.`,
    content: `
      <h3 class="text-3xl font-black mb-6 uppercase italic underline decoration-[#f97316]">Non-Invasive Diagnostic Authority & Leak Mitigation</h3>
      <p class="mb-6">Hidden leaks under concrete slabs, behind finished walls, or beneath your landscaped yard can silently destroy your property's value and lead to massive utility bills. We use state-of-the-art electronic acoustic sensors and thermal imaging cameras to pinpoint leaks within inches, avoiding the need for exploratory demolition.</p>
      
      <h4 class="text-2xl font-bold mb-4 uppercase text-[#1e3a8a]">Signs You Have a Hidden Leak:</h4>
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <li class="bg-gray-50 p-6 rounded-2xl border-b-4 border-[#f97316]">
          <strong>Spiking Water Bills:</strong> An unexplained increase in usage is the #1 sign of a slab leak.
        </li>
        <li class="bg-gray-50 p-6 rounded-2xl border-b-4 border-[#f97316]">
          <strong>Warm Spots on Floors:</strong> Hot water line leaks under concrete can heat up your tiles.
        </li>
        <li class="bg-gray-50 p-6 rounded-2xl border-b-4 border-[#f97316]">
          <strong>Musty Odors:</strong> Hidden moisture leads to rapid mold growth behind drywall.
        </li>
        <li class="bg-gray-50 p-6 rounded-2xl border-b-4 border-[#f97316]">
          <strong>Foundation Cracks:</strong> Constant water pressure can shift your home's foundation.
        </li>
      </ul>

      <h4 class="text-2xl font-bold mb-4 uppercase">Professional Thermal Imaging</h4>
      <p class="mb-6">Our thermal cameras detect temperature differences that indicate moisture where it shouldn't be. This allows us to map your plumbing system's health without ever touching a hammer. Since ${BUSINESS_INFO.established}, we have been the first choice for Lake County residents who value their home's structure.</p>
    `
  },
  "gas-lines": {
    title: "Certified Gas Line Engineering & Safety Compliance Repairs",
    image: "https://images.unsplash.com/photo-1543674892-7d64d45df18b?auto=format&fit=crop&q=80",
    intro: `Safety is our priority. We provide certified gas line repairs and appliance hookups strictly following local IL & WI building codes.`,
    content: `
      <h3 class="text-3xl font-black mb-6 uppercase italic underline decoration-[#f97316]">Certified Safety Compliance & Gas System Engineering</h3>
      <p class="mb-6">Working with gas lines requires specialized certification and an uncompromising approach to life safety. Since our founding in ${BUSINESS_INFO.established}, ${BUSINESS_INFO.name} has secured homes across Illinois by following the strictest mitigation protocols for leaks and new appliance installs. A gas leak is not just a plumbing issue—it is a critical safety threat.</p>
      
      <div class="bg-red-50 p-10 rounded-3xl border-2 border-red-200 mb-10">
        <h4 class="text-2xl font-black mb-4 uppercase text-red-700 italic">Emergency Gas Safety Protocol:</h4>
        <p class="font-bold mb-4 text-red-800">If you smell rotten eggs or hear a hissing sound near your meter, follow these steps immediately:</p>
        <ul class="space-y-3 font-medium text-red-900">
          <li>1. Evacuate all residents and pets immediately.</li>
          <li>2. Do not use any light switches, phones, or electronics inside.</li>
          <li>3. Call our emergency hotline from a safe distance.</li>
          <li>4. Do not attempt to shut off the main valve if you smell gas.</li>
        </ul>
      </div>

      <h4 class="text-2xl font-bold mb-4 uppercase text-[#1e3a8a]">New Appliance & Outdoor Gas Installs</h4>
      <p class="mb-6">We provide certified hookups for gas ranges, clothes dryers, and pool heaters. We also specialize in extending gas lines for gourmet outdoor kitchens and fire pits. Our legacy since 2016 ensures that your gas system is pressure-tested and 100% code-compliant before we leave the job site.</p>

      <h4 class="text-2xl font-bold mb-4 uppercase">CSST Piping Upgrades</h4>
      <p class="mb-6">Many older homes in Waukegan still use rigid iron pipes that are prone to corrosion and earthquake damage. We offer upgrades to modern Corrugated Stainless Steel Tubing (CSST), which is flexible, durable, and far safer for residential gas distribution.</p>
    `
  }
};
