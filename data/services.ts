import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const primaryCity = illinoisCities[0].city;

export const SERVICES_DATA: Record<string, { title: string, content: string, image: string, intro: string }> = {
  "emergency-repairs": {
    title: `24/7 Emergency ${BUSINESS_INFO.name.split(' ')[1]} & Storm Mitigation Authority`,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80",
    intro: `When disaster strikes in Waukegan, speed is everything. We provide a 30-minute rapid response for all critical plumbing failures in ${primaryCity} and surrounding tri-state areas since ${BUSINESS_INFO.established}.`,
    content: `
      <h3 style="font-size: 2rem; font-weight: 900; color: #1e3a8a; margin-bottom: 1.5rem; text-transform: uppercase; italic; border-bottom: 4px solid #f97316; display: inline-block;">Immediate Crisis Intervention & Structural Protection</h3>
      <p style="margin-bottom: 1.5rem; line-height: 1.8;">Emergency plumbing situations like burst pipes or sewer backups require more than just a quick fix; they require strategic mitigation to prevent permanent structural damage to your home's foundation. Competing with top-ranked Lake County firms, ${BUSINESS_INFO.name} utilizes specialized thermal mapping to find fractures caused by "Lake Effect" freezes common in ${primaryCity}. Since our founding in 2016, we have prioritized structural integrity over temporary fixes, ensuring that a single pipe burst doesn't lead to a total foundation loss.</p>
      
      <h4 style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem; text-transform: uppercase;">The Physics of Frozen Pipes in Illinois Winters</h4>
      <p style="margin-bottom: 1.5rem;">In the Midwest, especially Waukegan and Beach Park, water in pipes can expand by 9% when frozen, creating pressures exceeding 3,000 PSI. This pressure is what causes standard copper and PVC lines to fracture. Our rapid response protocol involves controlled thawing and immediate reinforcement to prevent secondary flooding once the ice melts.</p>

      <div style="background-color: #f8fafc; padding: 2.5rem; border-radius: 1.5rem; border-left: 10px solid #1e3a8a; margin-bottom: 2.5rem;">
        <h4 style="font-weight: 900; margin-bottom: 1.5rem; text-transform: uppercase; color: #1e3a8a;">Our Competitor-Proven Response Standards:</h4>
        <ul style="list-style-type: none; padding: 0; display: flex; flex-direction: column; gap: 1rem;">
          <li><strong>• Rapid Stabilization:</strong> We neutralize main-line water pressure within 30-45 minutes to protect your asset.</li>
          <li><strong>• Certified Mitigation:</strong> Following strict IL & WI building codes to ensure safety compliance since 2016.</li>
          <li><strong>• Industrial Extraction:</strong> Utilizing 2026-spec extraction units that outperform standard residential gear.</li>
        </ul>
      </div>

      <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1.5rem;">Case Study: Midnight Main-Line Recovery in Waukegan</h3>
      <p style="margin-bottom: 1.5rem;"><strong>Problem:</strong> A fractured main line threatened a $50k basement restoration for a local family. <strong>Solution:</strong> ${BUSINESS_INFO.name} deployed sonic leak detection and industrial dryers within 40 minutes. <strong>Result:</strong> Property secured with zero structural shifts and 100% dry walls.</p>

      <h4 style="font-size: 1.5rem; font-weight: 800; color: #f97316; margin-bottom: 1rem;">Emergency FAQ:</h4>
      <p><strong>"Is a burst pipe covered by insurance?"</strong> Most local Waukegan policies cover the damage caused by the water, but not the pipe repair itself. We provide full documentation for your adjuster to ensure you get the maximum claim value.</p>
    `
  },
  "drain-cleaning": {
    title: "Industrial Hydro-Jetting & Sewer Flow Restoration Authority",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80",
    intro: `Restore original flow with 4000 PSI hydro-jetting. Serving Lake County's historic and modern drainage systems since ${BUSINESS_INFO.established}.`,
    content: `
      <h3 style="font-size: 2rem; font-weight: 900; color: #1e3a8a; margin-bottom: 1.5rem; text-transform: uppercase; italic;">The Science of Pipe Performance: Hydro-Jetting vs. Snaking</h3>
      <p style="margin-bottom: 1.5rem;">Traditional snaking only punches a small hole in debris, leaving grease and scale behind. Our competitor analysis in ${primaryCity} shows that high-volume descaling is the only permanent solution for root intrusion and FOG (Fats, Oils, Grease) buildup. Since 2016, we have utilized fiber-optic cameras to verify a 100% clear line before we leave.</p>

      <div style="background-color: #eff6ff; padding: 2.5rem; border-radius: 2rem; margin-bottom: 2.5rem; border: 1px solid #dbeafe;">
        <h4 style="font-size: 1.5rem; font-weight: 900; margin-bottom: 1.5rem; text-transform: uppercase; color: #1e3a8a;">4-Step Restoration Protocol:</h4>
        <ul style="list-style-type: none; padding: 0; display: flex; flex-direction: column; gap: 1rem;">
          <li><strong>1. HD Video Audit:</strong> We identify structural collapses or root entry points before cleaning.</li>
          <li><strong>2. Mechanical Pre-Clearing:</strong> Removing solid obstructions to prepare the line for jetting.</li>
          <li><strong>3. 4000 PSI Scouring:</strong> Using high-pressure water to strip scale and sludge from pipe walls.</li>
          <li><strong>4. Final Flow Verification:</strong> A secondary camera pass ensures your system is performing at 2026 standards.</li>
        </ul>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2.5rem; border: 1px solid #e2e8f0; font-size: 0.9rem;">
        <thead>
          <tr style="background-color: #1e3a8a; color: white;">
            <th style="padding: 1rem; border: 1px solid #e2e8f0;">Obstruction</th>
            <th style="padding: 1rem; border: 1px solid #e2e8f0;">Standard Method</th>
            <th style="padding: 1rem; border: 1px solid #e2e8f0;">Our Hybrid Fix</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 1rem; border: 1px solid #e2e8f0;">Heavy Grease/FOG</td>
            <td style="padding: 1rem; border: 1px solid #e2e8f0;">Chemical Pour</td>
            <td style="padding: 1rem; border: 1px solid #e2e8f0; font-weight: bold;">4000 PSI Scouring</td>
          </tr>
          <tr>
            <td style="padding: 1rem; border: 1px solid #e2e8f0;">Invasive Tree Roots</td>
            <td style="padding: 1rem; border: 1px solid #e2e8f0;">Basic Augur</td>
            <td style="padding: 1rem; border: 1px solid #e2e8f0; font-weight: bold;">Mechanical Cutting + Jetting</td>
          </tr>
        </tbody>
      </table>

      <h4 style="font-weight: 900; color: #f97316; margin-bottom: 1rem; text-transform: uppercase;">Why Waukegan Homeowners Trust Our Methods:</h4>
      <p style="margin-bottom: 1.5rem;">Older neighborhoods in Waukegan and Beach Park often feature clay or cast-iron lines prone to corrosion. Unlike "intern-style" plumbers who use high pressure indiscriminately, we adapt our PSI levels to protect your aging infrastructure while ensuring total clearance.</p>
      
      <p><strong>Did you know?</strong> 80% of sewer backups in Lake County are preventable with annual descaling. Our legacy since 2016 ensures your waste management system is safe and efficient.</p>
    `
  },
  "water-heaters": {
    title: "High-Efficiency Tankless & Traditional Thermal Engineering",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
    intro: `Ensure a 20-year hot water supply with our certified high-efficiency installations. Local experts since ${BUSINESS_INFO.established}.`,
    content: `
      <h3 style="font-size: 2rem; font-weight: 900; color: #1e3a8a; margin-bottom: 1.5rem; text-transform: uppercase;">Modern Thermal Engineering for Illinois Winters</h3>
      <p style="margin-bottom: 1.5rem; line-height: 1.8;">A standard water heater in ${primaryCity} faces heavy mineral scaling due to local hard water. Analyzing top competitors in the Gurnee and Beach Park areas, we've integrated a "Protection First" logic: every installation includes a mandatory sediment flush and anode rod inspection to double your unit's lifespan.</p>
      
      <div style="background-color: #eff6ff; padding: 2.5rem; border-radius: 2rem; margin-bottom: 2.5rem; border: 1px solid #dbeafe;">
        <h4 style="font-weight: 900; color: #1e3a8a; margin-bottom: 1.5rem; text-transform: uppercase;">Why Go Tankless?</h4>
        <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.75rem; font-weight: 600;">
          <li>✓ Unlimited Hot Water: Never run out during Midwest winter mornings.</li>
          <li>✓ 30% Energy Savings: Heat water only when you need it.</li>
          <li>✓ Space Reclamation: Wall-mounted units save up to 15 sq. ft. of floor space in your basement.</li>
        </ul>
      </div>

      <h4 style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem; text-transform: uppercase;">Maintenance ROI Analysis</h4>
      <p style="margin-bottom: 1.5rem;">Replacing a water heater in Illinois costs between $1,500 and $4,500. Regular maintenance, which we've perfected since 2016, costs a fraction of that and prevents catastrophic tank bursts. We handle both Gas and Electric transitions, ensuring 100% compliance with local Waukegan safety codes.</p>

      <h4 style="font-size: 1.5rem; font-weight: 800; color: #f97316; margin-bottom: 1rem; text-transform: uppercase;">Local FAQ:</h4>
      <p><strong>"How do I know my heater is failing?"</strong> Look for rusty water, popping noises (sediment buildup), or moisture around the base. If your unit is over 10 years old, it's a ticking time bomb—get an inspection today.</p>
    `
  },
  "sump-pumps": {
    title: "Redundant Sump Pump Systems & Foundation Protection",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80",
    intro: `Shield your foundation from Lake County's high water tables with our dual-pump redundancy kits.`,
    content: `
      <h3 style="font-size: 2rem; font-weight: 900; color: #1e3a8a; margin-bottom: 1.5rem; text-transform: uppercase;">Basement Integrity & Storm Surge Protection</h3>
      <p style="margin-bottom: 1.5rem;">Heavy seasonal rain in the tri-state area can overwhelm a single pump in minutes. Our hybrid strategy—derived from analyzing regional flood data in Beach Park and Waukegan—focuses on "Redundant Protection," ensuring that even if the power grid fails, your basement remains 100% dry.</p>
      
      <div style="background-color: #1e293b; color: white; padding: 2.5rem; border-radius: 2.5rem; margin-bottom: 2.5rem; border-top: 8px solid #f97316;">
        <h4 style="font-weight: 900; color: #f97316; margin-bottom: 1rem; text-transform: uppercase;">The 2016 Legacy Protection Kit:</h4>
        <ul style="list-style-type: none; padding: 0; font-size: 0.9rem; line-height: 1.8;">
          <li><strong>• Primary Cast-Iron 1/2 HP Pump:</strong> For rapid water extraction during peak surges.</li>
          <li><strong>• Battery-Powered Backup:</strong> Providing up to 48 hours of protection without AC power.</li>
          <li><strong>• Smart-Sensor Integration:</strong> Instant mobile notifications if water levels rise unexpectedly.</li>
        </ul>
      </div>

      <h4 style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem; text-transform: uppercase;">Why Midwest Basements Flood</h4>
      <p style="margin-bottom: 1.5rem;">The soil in Lake County often has high clay content, which holds water against your foundation walls (Hydrostatic Pressure). If your sump pump fails, this pressure can crack your foundation. Since ${BUSINESS_INFO.established}, we have been the local authority in preventing these catastrophic failures.</p>

      <p><strong>Local Pro Tip:</strong> Always check your discharge line in the spring to ensure it hasn't been blocked by debris or ice. A pump is only as good as its exit path.</p>
    `
  },
  "leak-detection": {
    title: "Non-Invasive Electronic Leak Detection & Precision Sonic Mapping",
    image: "https://images.unsplash.com/photo-1581244276891-83393a8ba321?auto=format&fit=crop&q=80",
    intro: `Stop silent water loss with sonic technology. Pinpoint precision in ${primaryCity} without exploratory demolition.`,
    content: `
      <h3 style="font-size: 2rem; font-weight: 900; color: #1e3a8a; margin-bottom: 1.5rem; text-transform: uppercase;">The Science of Non-Destructive Diagnostics</h3>
      <p style="margin-bottom: 1.5rem;">Hidden leaks behind finished walls or under slab foundations in Beach Park can cost thousands in utility bills before they are even seen. Since 2016, Eduardo Zuniga's vision has been to replace "guessing" with "precision engineering," using acoustic sensors to find leaks within inches.</p>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem;">
        <div style="background: #f9fafb; padding: 2rem; border-radius: 1.5rem; border-bottom: 5px solid #f97316;">
          <h5 style="font-weight: 900; color: #1e3a8a; margin-bottom: 0.5rem; text-transform: uppercase;">Sonic Mapping</h5>
          <p style="font-size: 0.85rem; line-height: 1.6;">Listening for micro-vibrations in pipes to locate slab leaks without digging through your kitchen floor.</p>
        </div>
        <div style="background: #f9fafb; padding: 2rem; border-radius: 1.5rem; border-bottom: 5px solid #f97316;">
          <h5 style="font-weight: 900; color: #1e3a8a; margin-bottom: 0.5rem; text-transform: uppercase;">Thermal Imaging</h5>
          <p style="font-size: 0.85rem; line-height: 1.6;">Using infrared to find heat signatures from hidden hot water line leaks inside finished walls.</p>
        </div>
      </div>

      <h4 style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem; text-transform: uppercase;">Preventing Foundation Shifts</h4>
      <p style="margin-bottom: 1.5rem;">A small leak under your slab can wash away soil, creating "voids" that lead to foundation cracks. By choosing a certified local expert since 2016, you are protecting your home's structural value. We provide a full diagnostic report with every detection service.</p>

      <p><strong>Did you know?</strong> A pinhole leak can waste up to 10,000 gallons of water a month. Don't pay for water you aren't using—call our Waukegan experts for a sonic scan.</p>
    `
  },
  "gas-lines": {
    title: "Certified Gas Line Engineering & Safety Compliance Repairs",
    image: "https://images.unsplash.com/photo-1543674892-7d64d45df18b?auto=format&fit=crop&q=80",
    intro: `Safety-first gas repairs and certified appliance hookups. Adhering to the strictest IL & WI building codes since ${BUSINESS_INFO.established}.`,
    content: `
      <h3 style="font-size: 2rem; font-weight: 900; color: #1e3a8a; margin-bottom: 1.5rem; text-transform: uppercase;">Certified Safety Protocols & Industrial Compliance</h3>
      <p style="margin-bottom: 1.5rem;">Working with gas lines is a high-risk engineering task that requires specialized local certification. Our competitor analysis in Waukegan shows that many general plumbers skip pressure tests; ${BUSINESS_INFO.name} performs a mandatory 24-hour pressure hold to ensure 100% integrity.</p>
      
      <div style="background-color: #fef2f2; padding: 2.5rem; border: 2px solid #fecaca; border-radius: 2rem; margin-bottom: 2.5rem;">
        <h4 style="color: #b91c1c; font-weight: 900; text-transform: uppercase; margin-bottom: 1rem;">Emergency Mitigation Standard:</h4>
        <p style="color: #7f1d1d; font-weight: 600; margin-bottom: 1rem;">If you detect a rotten egg odor or hissing sounds, evacuate immediately. Do not use electronics.</p>
        <ul style="color: #7f1d1d; font-size: 0.9rem;">
          <li>• Certified mitigation since ${BUSINESS_INFO.established}.</li>
          <li>• Electronic gas leak "sniffers" used for precision.</li>
          <li>• Immediate code-compliant shut-off and repair.</li>
        </ul>
      </div>

      <h4 style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem; text-transform: uppercase;">CSST Upgrades & Appliance Engineering</h4>
      <p style="margin-bottom: 1.5rem;">From gourmet outdoor kitchens to high-efficiency furnace lines, we ensure every connection is 100% code-compliant. We specialize in upgrading older iron pipes to modern flexible CSST for enhanced seismic and corrosion protection in older Waukegan homes.</p>
      
      <p>Trust the local authority since 2016 for fireplace hookups, gas dryer installs, and main line safety inspections.</p>
    `
  }
};
