// src/data/services.ts
import { BUSINESS_INFO } from '../constants';

export const SERVICES_DATA: Record<string, { title: string, content: string }> = {
  "emergency-repairs": {
    title: `24/7 Emergency Plumbing Repairs in ${BUSINESS_INFO.serviceArea}`,
    content: `
      <h3>Rapid Emergency Response & Damage Mitigation</h3>
      <p>Plumbing disasters don't wait for business hours. Whether it's a burst pipe in the freezing Illinois winter or a major sewer backup, ${BUSINESS_INFO.name} has been the trusted authority since ${BUSINESS_INFO.established}. Serving the tri-state area, our teams are strategically stationed for a 30-minute arrival.</p>
      
      <div class="bg-gray-50 p-8 rounded-3xl mb-8 border-l-8 border-[#f97316]">
        <h4 class="text-xl font-black mb-4 uppercase">Our Emergency Expertise:</h4>
        <ul class="space-y-4">
          <li><strong>Burst Pipe Repair:</strong> Critical for winter protection.</li>
          <li><strong>Major Leak Control:</strong> Pinpointing water loss fast.</li>
          <li><strong>Sewer Backups:</strong> Protecting your health and basement.</li>
          <li><strong>Gas Leak Safety:</strong> Immediate shut-off and certified repairs.</li>
        </ul>
      </div>

      <p>Water damage can escalate in minutes. Our experts, serving the community since 2016, use advanced tools to stop the crisis at its source. We prioritize transparency with upfront pricing, even during midnight emergencies.</p>
    `
  },
  "drain-cleaning": {
    title: "Professional Drain & Sewer Restoration Services",
    content: `
      <h3>Professional Drain Cleaning & Clog Removal</h3>
      <p>Persistent clogs are often a sign of deeper pipe issues. Since ${BUSINESS_INFO.established}, we have used high-velocity hydro-jetting to scour pipe walls clean across Illinois and Wisconsin.</p>
      
      <div class="bg-gray-50 p-8 rounded-3xl mb-8 border-l-8 border-[#1e3a8a]">
        <h4 class="text-xl font-black mb-4 uppercase">Service Highlights:</h4>
        <ul class="space-y-4">
          <li><strong>Camera Inspections:</strong> Seeing the exact blockage.</li>
          <li><strong>Hydro-Jetting:</strong> 4000 PSI cleaning power.</li>
          <li><strong>Root Removal:</strong> Clearing invasive tree roots.</li>
        </ul>
      </div>
    `
  },
  "water-heaters": {
    title: "Expert Water Heater Installation & Repair",
    content: `
      <h3>Reliable Hot Water Solutions</h3>
      <p>Since ${BUSINESS_INFO.established}, we have specialized in tankless and traditional water heater systems. A cold shower in Waukegan is the last thing you want. We provide full system upgrades and energy-efficient installs.</p>
      
      <div class="bg-gray-50 p-8 rounded-3xl mb-8 border-l-8 border-[#f97316]">
        <h4 class="text-xl font-black mb-4 uppercase">System Expertise:</h4>
        <ul class="space-y-4">
          <li><strong>Tankless Upgrades:</strong> Endless hot water and lower bills.</li>
          <li><strong>Sediment Flushing:</strong> Increasing your unit's lifespan.</li>
          <li><strong>Anode Rod Replacement:</strong> Preventing tank corrosion.</li>
        </ul>
      </div>
    `
  },
  "sump-pumps": {
    title: "Sump Pump & Basement Flood Protection",
    content: `
      <h3>Essential Basement Protection</h3>
      <p>In the Midwest, a sump pump is a necessity, not a luxury. Heavy seasonal rains can flood a basement in hours. Since 2016, we have installed thousands of primary and battery-backup systems.</p>
      
      <div class="bg-gray-50 p-8 rounded-3xl mb-8 border-l-8 border-[#1e3a8a]">
        <h4 class="text-xl font-black mb-4 uppercase">Flood Prevention Kit:</h4>
        <ul class="space-y-4">
          <li><strong>Primary Pump Install:</strong> High-efficiency water removal.</li>
          <li><strong>Battery Backups:</strong> Protection when the power goes out.</li>
          <li><strong>Basement Sealing:</strong> Preventing moisture entry.</li>
        </ul>
      </div>
    `
  },
  "leak-detection": {
    title: "Non-Invasive Electronic Leak Detection",
    content: `
      <h3>High-Precision Leak Discovery</h3>
      <p>Hidden leaks are silent killers of property value. Using thermal imaging and acoustic sensors, we find leaks behind walls and under foundations without digging up your home.</p>
      
      <div class="bg-gray-50 p-8 rounded-3xl mb-8 border-l-8 border-[#f97316]">
        <h4 class="text-xl font-black mb-4 uppercase">Non-Invasive Detection:</h4>
        <ul class="space-y-4">
          <li><strong>Thermal Imaging:</strong> Identifying heat loss and moisture.</li>
          <li><strong>Slab Leak Location:</strong> Pinpointing leaks under concrete.</li>
          <li><strong>Pipe Wall Mapping:</strong> Knowing your system's health.</li>
        </ul>
      </div>
    `
  },
  "gas-lines": {
    title: "Certified Gas Line Repair & Safety Inspections",
    content: `
      <h3>Certified Gas Safety Engineering</h3>
      <p>Safety is the top priority for gas lines. Since ${BUSINESS_INFO.established}, we have followed strict Illinois building codes for every stove, dryer, and fireplace hookup.</p>
      
      <div class="bg-gray-50 p-8 rounded-3xl mb-8 border-l-8 border-[#1e3a8a]">
        <h4 class="text-xl font-black mb-4 uppercase">Certified Gas Work:</h4>
        <ul class="space-y-4">
          <li><strong>Leak Detection:</strong> Using electronic gas sniffers.</li>
          <li><strong>New Line Installs:</strong> Safe and code-compliant.</li>
          <li><strong>Appliance Safety Checks:</strong> Preventing carbon monoxide risks.</li>
        </ul>
      </div>
    `
  }
};
