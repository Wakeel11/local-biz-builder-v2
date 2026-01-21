import { BUSINESS_INFO } from '../constants';

export const SERVICES_DATA: Record<string, { title: string, content: string, image: string, intro: string, table?: any }> = {
  "emergency-repairs": {
    title: "24/7 Emergency Plumbing & Rapid Crisis Restoration",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80",
    intro: `Plumbing disasters in Waukegan don't follow a schedule. Since ${BUSINESS_INFO.established}, we have provided a 30-minute rapid response for burst pipes, sewer backups, and urgent failures across Illinois, Wisconsin, and Indiana.`,
    content: `
      <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1.5rem;">Immediate Damage Mitigation & Structural Protection</h3>
      <p style="margin-bottom: 1.5rem; line-height: 1.8;">When a main water line fractures or a pipe bursts during a Midwest winter freeze, every second counts. Standing water can compromise your home's foundation and lead to rapid mold growth within 24 hours. At ${BUSINESS_INFO.name}, our emergency protocol focuses on three stages: Stabilization, Diagnostics, and Permanent Restoration.</p>
      
      <h4 style="font-size: 1.4rem; font-weight: 700; color: #f97316; margin-bottom: 1rem;">Comparison of Emergency Response Levels</h4>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; border: 1px solid #e2e8f0;">
        <thead>
          <tr style="background-color: #f8fafc;">
            <th style="padding: 1rem; border: 1px solid #e2e8f0; text-align: left;">Service Type</th>
            <th style="padding: 1rem; border: 1px solid #e2e8f0; text-align: left;">Response Time</th>
            <th style="padding: 1rem; border: 1px solid #e2e8f0; text-align: left;">Primary Objective</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 1rem; border: 1px solid #e2e8f0;">Standard Repair</td>
            <td style="padding: 1rem; border: 1px solid #e2e8f0;">Next Day</td>
            <td style="padding: 1rem; border: 1px solid #e2e8f0;">Scheduled Maintenance</td>
          </tr>
          <tr style="background-color: #fff7ed;">
            <td style="padding: 1rem; border: 1px solid #e2e8f0; font-weight: bold;">Our Emergency Service</td>
            <td style="padding: 1rem; border: 1px solid #e2e8f0; font-weight: bold;">30-60 Mins</td>
            <td style="padding: 1rem; border: 1px solid #e2e8f0; font-weight: bold;">Flood & Asset Protection</td>
          </tr>
        </tbody>
      </table>

      <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1.5rem;">The Lake County Emergency Checklist</h3>
      <ul style="margin-bottom: 2rem; list-style: none; padding: 0;">
        <li style="padding: 1rem; background: #f9fafb; border-radius: 1rem; margin-bottom: 1rem;"><strong>• Burst Pipe Remediation:</strong> Utilizing advanced pipe-freezing and thermal imaging to locate and fix fractures without destroying walls.</li>
        <li style="padding: 1rem; background: #f9fafb; border-radius: 1rem; margin-bottom: 1rem;"><strong>• Main Line Backflow Prevention:</strong> Deploying industrial-grade sub-pumps to prevent sewage from entering your living space.</li>
        <li style="padding: 1rem; background: #f9fafb; border-radius: 1rem; margin-bottom: 1rem;"><strong>• Gas Leak Containment:</strong> Certified MIT-trained technicians following strict safety codes to secure your family.</li>
      </ul>

      <p style="margin-bottom: 1.5rem;">We serve Waukegan, Beach Park, Gurnee, and the entire tri-state region with a legacy of local excellence since 2016. Our commitment to transparent pricing means you get a flat-rate quote before we turn a single wrench, even at 3 AM.</p>
    `
  },
  "drain-cleaning": {
    title: "Industrial Hydro-Jetting & Sewer Flow Restoration",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80",
    intro: `Slow drains are the first warning sign of a sewer collapse. We utilize 4000 PSI hydro-jetting to return your Waukegan pipes to their original diameter.`,
    content: `
      <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1.5rem;">Advanced Hydro-Jetting vs. Traditional Snaking</h3>
      <p style="margin-bottom: 1.5rem;">Traditional drain snakes only punch a small hole in a clog. At ${BUSINESS_INFO.name}, we specialize in "Flow Restoration Engineering." Since 2016, we have seen that high-pressure hydro-jetting is the only way to remove mineral scale, hair, and grease buildup permanently.</p>

      <h4 style="font-size: 1.4rem; font-weight: 700; color: #f97316; margin-bottom: 1rem;">The Clog Severity Scale</h4>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; border: 1px solid #e2e8f0;">
        <tr style="background-color: #f1f5f9;">
          <th style="padding: 0.8rem; border: 1px solid #cbd5e1;">Symptoms</th>
          <th style="padding: 0.8rem; border: 1px solid #cbd5e1;">Likely Cause</th>
          <th style="padding: 0.8rem; border: 1px solid #cbd5e1;">Recommended Fix</th>
        </tr>
        <tr>
          <td style="padding: 0.8rem; border: 1px solid #cbd5e1;">Single sink slow drain</td>
          <td style="padding: 0.8rem; border: 1px solid #cbd5e1;">Local Hair/Gunk</td>
          <td style="padding: 0.8rem; border: 1px solid #cbd5e1;">Professional Augur</td>
        </tr>
        <tr style="background-color: #fff7ed;">
          <td style="padding: 0.8rem; border: 1px solid #cbd5e1; font-weight:bold;">Whole house backup</td>
          <td style="padding: 0.8rem; border: 1px solid #cbd5e1; font-weight:bold;">Main Line Obstruction</td>
          <td style="padding: 0.8rem; border: 1px solid #cbd5e1; font-weight:bold;">Hydro-Jetting + Camera</td>
        </tr>
      </table>

      <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1.5rem;">Fiber-Optic Sewer Diagnostics</h3>
      <p>We don't guess—we see. Our HD waterproof cameras provide a real-time tour of your sewer system. This allows us to identify tree root intrusions in older Waukegan neighborhoods or structural offsets in newer Beach Park developments. Our legacy is built on providing you with visual proof of the issue before asking for a single dollar.</p>
    `
  },
  "water-heaters": {
    title: "High-Efficiency Tankless & Traditional Thermal Engineering",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
    intro: "A cold shower in Waukegan during January is a crisis. We specialize in rapid thermal upgrades and emergency heater repairs since 2016.",
    content: `
      <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1.5rem;">Modern Hot Water Solutions for Lake County</h3>
      <p style="margin-bottom: 1.5rem;">Since ${BUSINESS_INFO.established}, we have transitioned thousands of Illinois homes from inefficient traditional tanks to modern high-efficiency systems. We analyze your household usage to recommend the precise BTU output required for your family's comfort.</p>
      
      <div style="background-color: #f0f9ff; padding: 2rem; border-radius: 2rem; border: 2px solid #bae6fd; margin-bottom: 2rem;">
        <h4 style="font-weight: 900; color: #0369a1; margin-bottom: 1rem; text-transform: uppercase;">Why Upgrade This Year?</h4>
        <ul style="line-height: 2;">
          <li><strong>✓ 30% Reduction in Energy Bills:</strong> Modern tankless units only heat water when you need it.</li>
          <li><strong>✓ Space Conservation:</strong> Wall-mounted units free up to 15 sq. ft. in your Waukegan basement.</li>
          <li><strong>✓ Sediment Protection:</strong> Annual flushing protocols included in our maintenance plans.</li>
        </ul>
      </div>
    `
  },
  "sump-pumps": {
    title: "Midwest Flood Prevention & Sump Pump Redundancy Kits",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80",
    intro: "Protect your basement from Illinois' heavy seasonal rains. We install redundancy systems that work even when the power fails.",
    content: `
      <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1.5rem;">Basement Protection Protocols</h3>
      <p style="margin-bottom: 1.5rem;">A failed sump pump in a Midwest storm can cause $30,000+ in damages in under two hours. We specialize in industrial-grade primary pumps and battery-backup systems that provide a second line of defense when the electrical grid fails.</p>

      <table style="width: 100%; margin-bottom: 2rem; font-size: 0.9rem;">
        <tr style="background-color: #1e293b; color: white;">
          <th style="padding: 1rem;">Component</th>
          <th style="padding: 1rem;">Our Standard</th>
          <th style="padding: 1rem;">Benefit</th>
        </tr>
        <tr>
          <td style="padding: 1rem; border: 1px solid #e2e8f0;">Primary Pump</td>
          <td style="padding: 1rem; border: 1px solid #e2e8f0;">Cast Iron Housing</td>
          <td style="padding: 1rem; border: 1px solid #e2e8f0;">Rapid heat dissipation & longevity</td>
        </tr>
        <tr>
          <td style="padding: 1rem; border: 1px solid #e2e8f0;">Backup System</td>
          <td style="padding: 1rem; border: 1px solid #e2e8f0;">Dual 120-Amp Hour</td>
          <td style="padding: 1rem; border: 1px solid #e2e8f0;">48-72 hours of protection</td>
        </tr>
      </table>
    `
  },
  "leak-detection": {
    title: "Non-Invasive Electronic Leak Detection & Sonic Mapping",
    image: "https://images.unsplash.com/photo-1581244276891-83393a8ba321?auto=format&fit=crop&q=80",
    intro: "Don't tear up your floors to find a leak. We use electronic sensors to pinpoint water loss behind walls and under foundations.",
    content: `
      <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1.5rem;">The Science of Non-Invasive Diagnostics</h3>
      <p style="margin-bottom: 1.5rem;">Since 2016, Eduardo Zuniga has invested in the latest acoustic and thermal mapping technology. Traditional plumbers might suggest digging up your kitchen floor to find a slab leak; we suggest "hearing" it through the concrete first.</p>
    `
  },
  "gas-lines": {
    title: "Certified Gas Line Engineering & Appliance Safety Hookups",
    image: "https://images.unsplash.com/photo-1543674892-7d64d45df18b?auto=format&fit=crop&q=80",
    intro: "Safety is our priority. We provide certified gas line repairs and appliance installs strictly following Lake County building codes.",
    content: `
      <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1.5rem;">Certified Gas Safety Compliance</h3>
      <p style="margin-bottom: 1.5rem;">Working with natural gas requires specialized certification that most general handymen simply don't have. We handle everything from emergency shutoffs to extending lines for your new outdoor living spaceFire pits and pool heaters.</p>
    `
  }
};
