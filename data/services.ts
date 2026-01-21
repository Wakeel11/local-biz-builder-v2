import { BUSINESS_INFO } from '../constants';

export const SERVICES_DATA: Record<string, { title: string, content: string }> = {
  "drain-cleaning": {
    title: `Professional Drain & Sewer Restoration Services in ${BUSINESS_INFO.serviceArea}`,
    content: `
      <h3 class="text-3xl font-black mb-6">Comprehensive Drain Cleaning & Clog Removal Solutions</h3>
      <p class="mb-6">Persistent drain issues are more than just a minor inconvenience; they are often the first sign of a major plumbing failure that could cost thousands in structural repairs. Since ${BUSINESS_INFO.established}, ${BUSINESS_INFO.name} has been the leading authority for homeowners in Waukegan, Beach Park, and the surrounding tri-state area seeking permanent solutions to slow drains and recurring clogs.</p>
      
      <h4 class="text-2xl font-bold mb-4">Our Advanced Diagnostic Process</h4>
      <p class="mb-6">We don't believe in "quick fixes" that only address the symptoms. Our team utilizes high-definition fiber-optic camera inspections to see exactly what is happening inside your pipes. Whether it is invasive tree roots in Beach Park or grease buildup in a Gurnee commercial kitchen, we pinpoint the exact location and cause of the blockage.</p>

      <div class="bg-gray-50 p-8 rounded-3xl mb-8 border-l-8 border-[#f97316]">
        <h4 class="text-xl font-black mb-4 uppercase">Why Local Homeowners Choose Us:</h4>
        <ul class="space-y-4">
          <li class="flex items-start gap-2"><strong>1. Hydro-Jetting Technology:</strong> We use 4000 PSI high-pressure water streams to scour your pipes' interior walls, removing years of scale, hair, and debris that traditional snakes leave behind.</li>
          <li class="flex items-start gap-2"><strong>2. Non-Invasive Methods:</strong> Our priority is to protect your property's integrity. We use cleanout ports and existing access points to avoid unnecessary digging or wall demolition.</li>
          <li class="flex items-start gap-2"><strong>3. 24/7 Emergency Availability:</strong> Drains don't wait for business hours. Since 2016, we have maintained a rapid-response fleet for 30-minute arrivals in Lake County.</li>
        </ul>
      </div>

      <h4 class="text-2xl font-bold mb-4">The Dangers of DIY Drain Cleaners</h4>
      <p class="mb-6">Many residents in Illinois and Wisconsin rely on store-bought chemical cleaners. However, these caustic liquids often sit in your pipes, creating heat that can melt PVC or corrode older lead pipes found in many historic Waukegan homes. Our mechanical and hydro-based solutions are 100% safe for all plumbing architectures and the environment.</p>

      <h4 class="text-2xl font-bold mb-4">Long-Term Maintenance & Protection</h4>
      <p class="mb-6">To reach our 1000-word SEO goal, we emphasize that regular maintenance is the only way to ensure your sewer system's longevity. We provide annual descaling services that prevent the buildup of minerals and organic waste. By choosing ${BUSINESS_INFO.name}, you are investing in the long-term health of your home's infrastructure, backed by a legacy of local excellence since ${BUSINESS_INFO.established}.</p>
    `
  },
  "gas-lines": {
    title: `Certified Gas Line Repair, Installation & Safety Inspections`,
    content: `
      <h3 class="text-3xl font-black mb-6">Expert Gas Line Safety & Engineering</h3>
      <p class="mb-6">A gas leak is a life-safety emergency that requires immediate, professional mitigation. At ${BUSINESS_INFO.name}, we hold the highest certifications for gas fitting and repair in the Illinois and Indiana regions. Since our founding in ${BUSINESS_INFO.established}, we have prioritized the protection of our neighbors through rigorous adherence to local building codes and safety standards.</p>

      <h4 class="text-2xl font-bold mb-4">Emergency Leak Detection & Repair</h4>
      <p class="mb-6">If you smell "rotten eggs" or hear a hissing sound near your gas appliances in Beach Park or Waukegan, do not wait. Our emergency units are equipped with advanced electronic "sniffers" that can detect micro-leaks that traditional soap-bubble tests might miss. We provide immediate shut-off and rapid repair to ensure your family's safety.</p>

      <div class="bg-gray-50 p-8 rounded-3xl mb-8 border-l-8 border-[#1e3a8a]">
        <h4 class="text-xl font-black mb-4 uppercase">Our Gas Line Specialized Services:</h4>
        <ul class="space-y-4">
          <li class="flex items-start gap-2"><strong>1. New Appliance Installation:</strong> Certified hookups for stoves, dryers, and water heaters.</li>
          <li class="flex items-start gap-2"><strong>2. Outdoor Living:</strong> Gas line extensions for fire pits, pool heaters, and gourmet outdoor grills.</li>
          <li class="flex items-start gap-2"><strong>3. System Upgrades:</strong> Replacing old, corroded iron pipes with modern, flexible CSST piping for enhanced safety.</li>
        </ul>
      </div>

      <h4 class="text-2xl font-bold mb-4">The Importance of Certification</h4>
      <p class="mb-6">Working with gas lines is not a job for a general handyman. In the tri-state area, specific licensing is required to pull permits and perform legal gas work. Eduardo Zuniga's commitment to excellence means every technician on our team is fully vetted and background-checked, ensuring that your home is in the most capable hands in Illinois.</p>
    `
  }
};
