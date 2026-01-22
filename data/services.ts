import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const primaryCity = illinoisCities[0].city;

export const SERVICES_DATA: Record<string, { title: string, content: string, image: string, intro: string }> = {
  "emergency-repairs": {
    // Title merged to avoid "IN WAUKEGAN" double repetition in Hero
    title: "24/7 Emergency Plumbing & Critical Mitigation",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80",
    intro: `Searching for emergency plumbing in waukegan? At ${BUSINESS_INFO.name}, we provide a rapid emergency plumbing service waukegan il homeowners trust. Whether it is a burst pipe emergency repair or a same day plumbing repair, our licensed technicians are available 24/7 to handle any plumbing emergency in Lake County, IL. We are the go-to experts for emergency plumbing illinois residents rely on during critical infrastructure failures.`,
    content: `
      <div style="width: 100%; margin-bottom: 5rem;">
        <h3 style="font-size: 2.8rem; font-weight: 900; color: #1e3a8a; margin-bottom: 2rem; text-transform: uppercase; line-height: 1.1;">Waukegan's Premier Critical Crisis Mitigation and Engineering Protocol</h3>
        <p style="margin-bottom: 2rem; line-height: 2.2; font-size: 1.2rem; color: #374151;">
          Plumbing emergencies in the Midwest are more than just an inconvenience; they are existential threats to your property's structural foundation. A single burst pipe emergency repair can release over 750 gallons of water per hour, saturating floor joists and compromising concrete slabs within a 24-hour window. Since 2016, our emergency plumbing company has refined a Rapid Stabilization system that focuses on immediate pressure neutralization and forensic diagnostics. While general plumbers in Lake County, IL might take 4 to 6 hours to arrive, our fleet is strategically positioned near Green Bay Rd and Belvidere Rd to ensure we hit your doorstep in 30 minutes or less. We treat every plumbing emergency with the urgency of a life-safety event, ensuring your home remains a safe, dry environment for your family.
        </p>
      </div>

      <div style="width: 100%; display: flex; flex-wrap: wrap; gap: 4rem; margin-bottom: 5rem; align-items: center;">
        <div style="flex: 1; min-width: 300px;">
          <h4 style="font-size: 2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 2rem; text-transform: uppercase;">The Thermodynamics and Metallurgy of Midwest Pipe Fractures</h4>
          <p style="margin-bottom: 1.5rem; line-height: 2; color: #4b5563; font-size: 1.1rem;">
            In Illinois winters, emergency pipe burst repair becomes a mathematical certainty for uninsulated lines. When water inside a copper or PEX pipe drops below freezing, it undergoes a molecular expansion of nearly 9%. This creates internal pressures exceeding $3,500\text{ PSI}$, which is nearly 10 times the rated capacity of residential plumbing. Most emergency plumbing waukegan calls originate from this specific physical phenomenon.
          </p>
          <p style="line-height: 2; color: #4b5563; font-size: 1.1rem;">
            Our mitigation involves high-precision Electronic Pipe Thawing (EPT). Unlike competitors who use open-flame torches—a major fire hazard in historic Waukegan attics—we use controlled induction to safely liquefy ice without thermal shock. This preserves your pipe's metallurgy and prevents the micro-fractures that lead to emergency plumbing leak repair later in the season. Our emergency plumber illinois experts are specifically trained in these advanced thermal techniques.
          </p>
        </div>
        <div style="flex: 1; min-width: 300px; border-radius: 3rem; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.15);">
          <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" alt="Emergency Plumbing Repair Service" style="width: 100%; height: auto; display: block;" />
        </div>
      </div>

      <div style="width: 100%; background-color: #f8fafc; padding: 4rem; border-radius: 3.5rem; border-left: 20px solid #1e3a8a; margin-bottom: 5rem;">
        <h4 style="font-weight: 900; font-size: 2rem; margin-bottom: 2.5rem; text-transform: uppercase; color: #1e3a8a;">Why We Are Waukegan's Best Emergency Plumber:</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3rem;">
          <div>
            <p style="font-size: 1.3rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem;">Forensic Moisture Audit</p>
            <p style="color: #4b5563; line-height: 1.8;">We use high-grade infrared sensors to ensure no hidden water pockets remain behind your drywall or under your slab, preventing expensive black mold growth and structural decay common in emergency plumbing lake county il calls.</p>
          </div>
          <div>
            <p style="font-size: 1.3rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem;">2026-Spec Rapid Extraction</p>
            <p style="color: #4b5563; line-height: 1.8;">Our trucks carry industrial-grade vacuums that clear a flooded bathroom emergency or a basement surcharge 5x faster than standard gear, minimizing the time water has to penetrate your foundation.</p>
          </div>
          <div>
            <p style="font-size: 1.3rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem;">Full Insurance Compliance</p>
            <p style="color: #4b5563; line-height: 1.8;">We provide high-resolution forensic photos and engineering reports to maximize your emergency water damage plumbing claim, speaking the language of adjusters to ensure you are covered.</p>
          </div>
          <div>
            <p style="font-size: 1.3rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem;">Licensed Illinois Authority</p>
            <p style="color: #4b5563; line-height: 1.8;">Every emergency plumbing contractor on our team is a local emergency plumber waukegan resident, fully licensed and bonded in the state of Illinois since 2016.</p>
          </div>
        </div>
      </div>

      <div style="width: 100%; margin-bottom: 5rem;">
        <h3 style="font-size: 2.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 2rem; text-transform: uppercase;">Residential & Commercial Emergency Plumbing Solutions</h3>
        <p style="margin-bottom: 3rem; line-height: 2.2; font-size: 1.2rem; color: #374151;">
          We provide a clear distinction between residential emergency plumbing and commercial emergency plumbing. We understand that emergency plumbing for businesses requires a different logistical response, often involving industrial plumbing emergency repair to prevent expensive downtime and code violations. Whether you need a licensed emergency plumber waukegan for a high-traffic retail space or emergency plumbing for homes in North Chicago or Beach Park, our fleet is ready to call emergency plumber now and deploy to your specific coordinates within Lake County.
        </p>

        <table style="width: 100%; border-collapse: separate; border-spacing: 0; margin-bottom: 5rem; border: 2px solid #e5e7eb; border-radius: 2rem; overflow: hidden; background: white; box-shadow: 0 20px 40px rgba(0,0,0,0.05);">
          <thead>
            <tr style="background-color: #1e3a8a; color: white;">
              <th style="padding: 30px; text-align: left; font-size: 1.3rem; text-transform: uppercase;">Target Service Area</th>
              <th style="padding: 30px; text-align: left; font-size: 1.3rem; text-transform: uppercase;">Average Response</th>
              <th style="padding: 30px; text-align: left; font-size: 1.3rem; text-transform: uppercase;">Emergency Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 30px; font-weight: 700; color: #111827; font-size: 1.1rem;">Emergency plumber waukegan il</td>
              <td style="padding: 30px; color: #4b5563; font-size: 1.1rem;">20 - 25 Minutes</td>
              <td style="padding: 30px; color: #16a34a; font-weight: 900; letter-spacing: 1px;">ACTIVE & OPEN</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb; background-color: #f9fafb;">
              <td style="padding: 30px; font-weight: 700; color: #111827; font-size: 1.1rem;">Emergency plumbing near waukegan il</td>
              <td style="padding: 30px; color: #4b5563; font-size: 1.1rem;">30 Minutes</td>
              <td style="padding: 30px; color: #16a34a; font-weight: 900; letter-spacing: 1px;">ACTIVE & OPEN</td>
            </tr>
            <tr>
              <td style="padding: 30px; font-weight: 700; color: #111827; font-size: 1.1rem;">24 hour plumber waukegan il</td>
              <td style="padding: 30px; color: #4b5563; font-size: 1.1rem;">Immediate Dispatch</td>
              <td style="padding: 30px; color: #16a34a; font-weight: 900; letter-spacing: 1px;">ACTIVE & OPEN</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style="width: 100%; background-color: #ffffff; padding: 5rem 0;">
        <h4 style="font-size: 3rem; font-weight: 900; color: #1e3a8a; margin-bottom: 4rem; text-transform: uppercase; text-align: center; letter-spacing: -1px;">Exhaustive Emergency Plumbing Knowledge Base</h4>
        <div style="display: grid; gap: 3rem; line-height: 2.2; max-width: 1000px; margin: 0 auto;">
          <div style="border-bottom: 2px solid #f3f4f6; padding-bottom: 2rem;">
            <p style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem;">1. What is considered a plumbing emergency in Illinois?</p>
            <p style="color: #4b5563; font-size: 1.1rem;">A plumbing emergency is any situation that risks immediate property damage or life safety. This includes a burst pipe emergency repair, a major sewer backup repair, a gas line plumbing emergency, or a flooded bathroom emergency. If you cannot shut off the water source or if there is a risk of electrical fire, you should who to call for plumbing emergency—contact us at our 24/7 hotline immediately for same day plumbing repair.</p>
          </div>
          <div style="border-bottom: 2px solid #f3f4f6; padding-bottom: 2rem;">
            <p style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem;">2. Is a plumbing leak an emergency if it is small?</p>
            <p style="color: #4b5563; font-size: 1.1rem;">It depends on the location. A minor faucet drip can wait, but a leaking pipe emergency behind a wall or under a concrete slab is a high-intent emergency. A hidden leak can wash away the supporting soil under your foundation, leading to structural shifts. Our emergency plumbing repair service uses sonic technology to find these killers without destroying your home. Always check for signs you need emergency plumbing service like spinning water meters.</p>
          </div>
          <div style="border-bottom: 2px solid #f3f4f6; padding-bottom: 2rem;">
            <p style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem;">3. Who to call for burst pipe in Waukegan, IL?</p>
            <p style="color: #4b5563; font-size: 1.1rem;">You should call a licensed emergency plumber waukegan residents have trusted since 2016. We specialize in burst pipe repair near me, providing technical engineering reports required by Illinois insurance carriers. Our same-day plumbing service ensures that your water supply is restored and your property is stabilized against further hydraulic damage. We are the best emergency plumber waukegan il for high-pressure line failures.</p>
          </div>
          <div style="border-bottom: 2px solid #f3f4f6; padding-bottom: 2rem;">
            <p style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem;">4. How fast should an emergency plumber respond in Lake County?</p>
            <p style="color: #4b5563; font-size: 1.1rem;">For an urgent plumbing repair in Lake County, IL, a professional response should be under 60 minutes. We strive for a 30-minute arrival window for emergency plumbing in waukegan to ensure the fastest possible mitigation. Our GPS-dispatched trucks are strategically stationed near Beach Park and Gurnee to bypass heavy traffic during storm surges and winter freezes.</p>
          </div>
          <div style="border-bottom: 2px solid #f3f4f6; padding-bottom: 2rem;">
            <p style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem;">5. Is a clogged drain an emergency for my business?</p>
            <p style="color: #4b5563; font-size: 1.1rem;">If only one sink is slow, it is a standard repair. However, if your entire home or business is backing up, it is an emergency clogged drain or an emergency sewer backup repair situation that requires immediate high-pressure intervention. For commercial kitchens, this can be a health code violation. We use hydro-jetting to restore sanitation and prevent floor saturation instantly.</p>
          </div>
          <div style="border-bottom: 2px solid #f3f4f6; padding-bottom: 2rem;">
            <p style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem;">6. Is water heater leak an emergency during winter?</p>
            <p style="color: #4b5563; font-size: 1.1rem;">Yes, especially if the tank is weeping from the bottom. An emergency water heater repair or emergency water heater replacement is vital because a structural tank failure can release 50 or more gallons of boiling water in seconds, destroying your flooring. During Midwest winters, losing hot water also risks frozen pipes in unheated areas of your basement. Call for same day emergency plumber services if your unit is making popping sounds.</p>
          </div>
          <div style="border-bottom: 2px solid #f3f4f6; padding-bottom: 2rem;">
            <p style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem;">7. What to do in a plumbing emergency before help arrives?</p>
            <p style="color: #4b5563; font-size: 1.1rem;">First, locate your main water shut-off valve and turn it clockwise until it stops. Second, shut off the gas or power to the water heater if it is leaking. Third, call emergency plumber now at our 24/7 hotline to get a certified technician dispatched to your location. Do not attempt to use electrical appliances in areas with standing water. Move valuables to higher ground and wait for our mitigation team.</p>
          </div>
          <div style="padding-bottom: 2rem;">
            <p style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem;">8. Signs you need emergency plumbing service near me?</p>
            <p style="color: #4b5563; font-size: 1.1rem;">Look for sudden low water pressure, gurgling in your drains, unexplained moisture on drywall, or a spinning water meter when no taps are open. These indicate that you need an emergency plumbing service near me right away. Additionally, the smell of rotten eggs is a sign of a gas line plumbing emergency that requires immediate evacuation and a call to a professional from outside the premises.</p>
          </div>
        </div>
      </div>
    `
  }
};
