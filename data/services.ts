import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

// Crash Fix: Defining primaryCity here so it works in the data
const primaryCity = illinoisCities[0].city;

export const SERVICES_DATA: Record<string, { title: string, content: string, image: string, intro: string }> = {
  "emergency-repairs": {
    title: "24/7 Emergency Plumbing & Rapid Response Restoration",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80",
    intro: `When disaster strikes, speed is everything. We provide a 30-minute rapid response for all critical plumbing failures in ${primaryCity} and the surrounding tri-state area since ${BUSINESS_INFO.established}.`,
    content: `
      <h3 style="font-size: 2rem; font-weight: 900; margin-bottom: 1.5rem; text-transform: uppercase; font-style: italic; text-decoration: underline; text-decoration-color: #f97316;">Immediate Crisis Intervention & Damage Mitigation</h3>
      <p style="margin-bottom: 1.5rem; line-height: 1.8;">Emergency plumbing situations like burst pipes or sewer backups require more than just a quick fix; they require strategic mitigation to prevent permanent structural damage to your property. Since ${BUSINESS_INFO.established}, our teams have specialized in high-pressure repairs across Illinois, Wisconsin, and Indiana. We understand that a plumbing emergency doesn't wait for business hours, which is why our fleet is fully stocked and ready to deploy at any second.</p>
      
      <h4 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; text-transform: uppercase;">Why 30-Minute Response Matters in the Midwest</h4>
      <p style="margin-bottom: 1.5rem;">In the harsh winters of the Midwest, especially in areas like Beach Park and ${primaryCity}, a burst pipe can lead to catastrophic flooding within minutes. The freezing temperatures cause water in pipes to expand, leading to fractures that compromise your home's integrity. Our rapid response protocol is designed to arrive at your doorstep before the water can seep into your foundation or destroy expensive flooring.</p>

      <div style="background-color: #f9fafb; padding: 2rem; border-radius: 1.5rem; border-left: 8px solid #1e3a8a; margin-bottom: 2rem;">
        <h4 style="font-weight: 900; margin-bottom: 1rem; text-transform: uppercase; color: #1e3a8a;">Our Critical Response Services:</h4>
        <ul style="list-style-type: none; padding: 0;">
          <li style="margin-bottom: 1rem;"><strong>• Main Line Failures:</strong> Instant stabilization of main sewer lines to prevent toxic health hazards and backflow into your living spaces.</li>
          <li style="margin-bottom: 1rem;"><strong>• Frozen Pipe Restoration:</strong> Critical for Illinois and Wisconsin winters. We use specialized thawing equipment that safely restores flow.</li>
          <li style="margin-bottom: 1rem;"><strong>• Gas Leak Mitigation:</strong> Certified technicians following strict safety protocols to secure your property immediately.</li>
        </ul>
      </div>

      <p style="margin-bottom: 1.5rem;">We provide transparent, upfront pricing even during midnight emergency calls. Our legacy, built since 2016, is founded on the fact that we treat your emergency as if it were our own, ensuring total restoration of your home's safety. We don't believe in "emergency surcharges" that exploit your situation; instead, we offer honest assessments and long-term fixes.</p>

      <h4 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; text-transform: uppercase;">The Authority in Local Emergency Support</h4>
      <p>Since 2016, Eduardo Zuniga has led this team with a focus on integrity and local expertise. Whether you are in Gurnee, Beach Park, or North Chicago, our 24/7 commitment remains the same. We carry industrial-grade sub-pumps and electronic leak detectors on every truck to ensure 95% of issues are resolved on the first visit.</p>
    `
  },
  "drain-cleaning": {
    title: "Industrial-Grade Hydro-Jetting & Drain Restoration",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80",
    intro: `Restore full flow to your waste management system with our non-invasive cleaning methods. Trusted by Lake County homeowners since ${BUSINESS_INFO.established}.`,
    content: `
      <h3 style="font-size: 2rem; font-weight: 900; margin-bottom: 1.5rem; text-transform: uppercase; font-style: italic; text-decoration: underline; text-decoration-color: #f97316;">Precision Sewer Performance & Descaling</h3>
      <p style="margin-bottom: 1.5rem; line-height: 1.8;">Clogged drains are often symptoms of deeper pipe descaling or invasive root intrusion issues. We utilize 4000 PSI hydro-jetting technology to scour pipe walls clean, returning them to their original diameter without using caustic chemicals that damage the environment or your plumbing.</p>
      
      <div style="background-color: #eff6ff; padding: 2.5rem; border-radius: 2rem; margin-bottom: 2.5rem; border: 1px solid #dbeafe;">
        <h4 style="font-size: 1.5rem; font-weight: 900; margin-bottom: 1.5rem; text-transform: uppercase; color: #1e3a8a;">The Science of Flow Restoration:</h4>
        <ul style="list-style-type: none; padding: 0; display: flex; flex-direction: column; gap: 1rem;">
          <li><strong>✓ Fiber-Optic Video Imaging:</strong> We don't guess. We use HD waterproof cameras to identify structural collapses before we start.</li>
          <li><strong>✓ Hydro-Jetting Power:</strong> High-pressure water streams remove hair, mineral scale, and sludge that traditional snakes push around.</li>
          <li><strong>✓ Biological Descaling:</strong> Safe, enzyme-based solutions that digest organic waste for long-term pipe health.</li>
          <li><strong>✓ Industrial Root Cutting:</strong> Mechanical heads used to clear invasive tree roots in historic Illinois neighborhoods.</li>
        </ul>
      </div>

      <h4 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; text-transform: uppercase;">Professional vs. Store-Bought Solutions</h4>
      <p style="margin-bottom: 1.5rem;">As local experts since ${BUSINESS_INFO.established}, we've seen hundreds of pipes destroyed by store-bought acid cleaners. These chemicals create heat that can melt PVC or corrode older cast-iron lines. Our professional methods are safer and provide a 100% clear line, guaranteed.</p>

      <p>Whether you are dealing with a kitchen sink backup or a main sewer line blockage in ${primaryCity}, our commitment to quality ensures a permanent resolution. We offer maintenance packages that keep your system flowing year-round.</p>
    `
  },
  "water-heaters": {
    title: "High-Efficiency Tankless & Traditional Water Heating",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
    intro: `Ensure a reliable hot water supply with our certified installation and repair services. Family-owned and operated since ${BUSINESS_INFO.established}.`,
    content: `
      <h3 style="font-size: 2rem; font-weight: 900; margin-bottom: 1.5rem; text-transform: uppercase; font-style: italic; text-decoration: underline; text-decoration-color: #f97316;">Modern Thermal Engineering & Efficiency</h3>
      <p style="margin-bottom: 1.5rem; line-height: 1.8;">From traditional gas-fired units to modern high-efficiency tankless systems, we provide comprehensive thermal engineering for your home. We analyze your family's usage patterns, water hardness levels, and energy goals to recommend the most cost-effective solution.</p>
      
      <h4 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; text-transform: uppercase; color: #1e3a8a;">Tankless Water Heater Benefits:</h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        <div style="background: #f9fafb; padding: 1rem; border-radius: 0.75rem; font-weight: bold;">• Endless Hot Water Supply</div>
        <div style="background: #f9fafb; padding: 1rem; border-radius: 0.75rem; font-weight: bold;">• 20+ Year Expected Lifespan</div>
        <div style="background: #f9fafb; padding: 1rem; border-radius: 0.75rem; font-weight: bold;">• Utility Bill Savings</div>
        <div style="background: #f9fafb; padding: 1rem; border-radius: 0.75rem; font-weight: bold;">• Space-Saving Design</div>
      </div>

      <p style="margin-bottom: 1.5rem;">Our maintenance protocols include sediment flushing and anode rod replacements, which can double the life of your unit. Serving Illinois and Wisconsin with a commitment to upfront pricing since 2016.</p>
    `
  },
  "sump-pumps": {
    title: "Sump Pump Systems & Basement Protection Kits",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80",
    intro: `Protect your property's foundation with our industrial-grade primary and backup pump systems. Essential for tri-state storm protection.`,
    content: `
      <h3 style="font-size: 2rem; font-weight: 900; margin-bottom: 1.5rem; text-transform: uppercase; font-style: italic; text-decoration: underline; text-decoration-color: #f97316;">Foundation Protection & Flood Mitigation</h3>
      <p style="margin-bottom: 1.5rem; line-height: 1.8;">In the Midwest, your sump pump is the most critical component of your home's structural health. With heavy seasonal rains and high water tables in Lake County, a failed pump can lead to catastrophic basement flooding in less than an hour. We specialize in redundant systems that ensure your basement stays dry even during total power failures.</p>
      
      <div style="background-color: #1e293b; color: white; padding: 2.5rem; border-radius: 2.5rem; margin-bottom: 2rem; box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);">
        <h4 style="font-weight: 900; color: #f97316; margin-bottom: 1.5rem; text-transform: uppercase;">Why Battery Backups Are Mandatory:</h4>
        <ul style="list-style-type: none; padding: 0; display: flex; flex-direction: column; gap: 1rem;">
          <li>- Battery backups provide up to 48 hours of protection without AC power.</li>
          <li>- Power outages are most common during heavy storms when you need the pump most.</li>
          <li>- Smart alarms notify your phone the second water levels rise too high.</li>
        </ul>
      </div>

      <p>We provide annual inspections to ensure your discharge lines aren't frozen or clogged. Since ${BUSINESS_INFO.established}, we have saved thousands of local basements from certain flooding.</p>
    `
  },
  "leak-detection": {
    title: "Electronic Leak Detection & Precision Sonic Mapping",
    image: "https://images.unsplash.com/photo-1581244276891-83393a8ba321?auto=format&fit=crop&q=80",
    intro: `Stop hidden water loss with our advanced sonic and thermal imaging technology. No property damage, guaranteed accuracy.`,
    content: `
      <h3 style="font-size: 2rem; font-weight: 900; margin-bottom: 1.5rem; text-transform: uppercase; font-style: italic; text-decoration: underline; text-decoration-color: #f97316;">Non-Invasive Diagnostic Authority</h3>
      <p style="margin-bottom: 1.5rem; line-height: 1.8;">Hidden leaks under concrete slabs, behind finished walls, or beneath your landscaped yard can silently destroy your property's value and lead to massive utility bills. We use state-of-the-art electronic acoustic sensors and thermal imaging cameras to pinpoint leaks within inches, avoiding the need for exploratory demolition.</p>
      
      <h4 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; text-transform: uppercase; color: #1e3a8a;">Signs You Have a Hidden Leak:</h4>
      <ul style="margin-bottom: 2rem; line-height: 2;">
        <li><strong>• Spiking Water Bills:</strong> An unexplained increase in usage is the #1 sign of a slab leak.</li>
        <li><strong>• Warm Spots on Floors:</strong> Hot water line leaks under concrete can heat up your tiles.</li>
        <li><strong>• Musty Odors:</strong> Hidden moisture leads to rapid mold growth behind drywall.</li>
        <li><strong>• Foundation Cracks:</strong> Constant water pressure can shift your home's foundation.</li>
      </ul>

      <p>Our thermal cameras detect temperature differences that indicate moisture where it shouldn't be. Since ${BUSINESS_INFO.established}, we have been the first choice for residents who value their home's structural health.</p>
    `
  },
  "gas-lines": {
    title: "Certified Gas Line Engineering & Safety Repairs",
    image: "https://images.unsplash.com/photo-1543674892-7d64d45df18b?auto=format&fit=crop&q=80",
    intro: `Safety is our priority. We provide certified gas line repairs and appliance hookups strictly following local IL & WI building codes.`,
    content: `
      <h3 style="font-size: 2rem; font-weight: 900; margin-bottom: 1.5rem; text-transform: uppercase; font-style: italic; text-decoration: underline; text-decoration-color: #f97316;">Certified Safety Compliance & Engineering</h3>
      <p style="margin-bottom: 1.5rem; line-height: 1.8;">Working with gas lines requires specialized certification and an uncompromising approach to life safety. Since our founding in ${BUSINESS_INFO.established}, we have secured homes across Illinois by following the strictest mitigation protocols for leaks and new appliance installs.</p>
      
      <div style="background-color: #fef2f2; padding: 2.5rem; border: 2px solid #fecaca; border-radius: 2rem; margin-bottom: 2rem;">
        <h4 style="color: #b91c1c; font-weight: 900; text-transform: uppercase; margin-bottom: 1rem;">Emergency Gas Safety Protocol:</h4>
        <p>If you smell rotten eggs or hear hissing near your meter, evacuate immediately. Do not use light switches or electronics. Call us from a safe distance for certified emergency mitigation.</p>
      </div>

      <h4 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; text-transform: uppercase;">New Appliance & Outdoor Gas Extensions</h4>
      <p>We provide certified hookups for gas ranges, pool heaters, and gourmet outdoor kitchens. Our legacy since 2016 ensures that your gas system is pressure-tested and 100% code-compliant before we leave the job site.</p>
    `
  }
};
