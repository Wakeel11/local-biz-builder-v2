import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const primaryCity = illinoisCities[0].city;

export const SERVICES_DATA: Record<string, { title: string, content: string, image: string, intro: string }> = {
  "emergency-repairs": {
    // Generic title to prevent "IN WAUKEGAN" double repetition in Hero UI
    title: "24/7 Emergency Plumbing & Critical Mitigation",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80",
    intro: `Searching for emergency plumbing in waukegan? At ${BUSINESS_INFO.name}, we provide a rapid emergency plumbing service waukegan il homeowners trust. Whether it is a burst pipe emergency repair or a same day plumbing repair, our licensed technicians are available 24/7 to handle any plumbing emergency in Lake County, IL. We are the go-to experts for emergency plumbing illinois residents rely on during critical infrastructure failures.`,
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; gap: 0;">
        
        <section style="width: 100%; padding: 6rem 10%; background-color: #ffffff;">
          <h3 style="font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 900; color: #1e3a8a; margin-bottom: 2rem; text-transform: uppercase; line-height: 1.1; letter-spacing: -2px;">Waukegan Premier Critical Crisis Mitigation and Engineering Protocol</h3>
          <p style="margin-bottom: 2.5rem; line-height: 2.2; font-size: 1.3rem; color: #374151; max-width: 1200px;">
            Plumbing emergencies in the Midwest are more than just an inconvenience; they are existential threats to your property structural foundation. A single burst pipe emergency repair can release over 750 gallons of water per hour, saturating floor joists and compromising concrete slabs within a 24-hour window. Since 2016, our emergency plumbing company has refined a Rapid Stabilization system that focuses on immediate pressure neutralization and forensic diagnostics.
          </p>
          <a href="tel:${BUSINESS_INFO.phone}" style="display: inline-block; background-color: #22c55e; color: white; padding: 1.5rem 3rem; border-radius: 1rem; font-size: 1.5rem; font-weight: 900; text-decoration: none; text-transform: uppercase; box-shadow: 0 10px 20px rgba(34, 197, 94, 0.3);">Call The Emergency Plumber Now</a>
        </section>

        <section style="width: 100%; display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); background-color: #f8fafc;">
          <div style="padding: 6rem 10%;">
            <h4 style="font-size: 2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 2rem; text-transform: uppercase;">The Thermodynamics and Metallurgy of Midwest Pipe Fractures</h4>
            <p style="margin-bottom: 1.5rem; line-height: 2; color: #4b5563; font-size: 1.1rem;">
              In Illinois winters, emergency pipe burst repair becomes a mathematical certainty for uninsulated lines. When water inside a copper or PEX pipe drops below freezing, it undergoes a molecular expansion of nearly 9%. This creates internal pressures exceeding 3,500 PSI, which is nearly 10 times the rated capacity of residential plumbing. Most emergency plumbing waukegan calls originate from this specific physical phenomenon.
            </p>
            <p style="margin-bottom: 2.5rem; line-height: 2; color: #4b5563; font-size: 1.1rem;">
              Our mitigation involves high-precision Electronic Pipe Thawing (EPT). Unlike competitors who use open-flame torches—a major fire hazard in historic Waukegan attics—we use controlled induction to safely liquefy ice without thermal shock. This preserves your pipe metallurgy and prevents the micro-fractures that lead to emergency plumbing leak repair later in the season.
            </p>
            <a href="tel:${BUSINESS_INFO.phone}" style="display: inline-block; background-color: #1e3a8a; color: white; padding: 1.2rem 2.5rem; border-radius: 0.8rem; font-size: 1.2rem; font-weight: 800; text-decoration: none; text-transform: uppercase;">Request Urgent Pipe Repair Now</a>
          </div>
          <div style="min-height: 500px; background: url('https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80') center/cover no-repeat;"></div>
        </section>

        <section style="width: 100%; padding: 6rem 10%; background-color: #ffffff;">
          <h4 style="font-weight: 900; font-size: 2.5rem; margin-bottom: 4rem; text-transform: uppercase; color: #1e3a8a; text-align: center;">Why We Are Waukegan Best Emergency Plumber</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 3rem;">
            <div style="padding: 2.5rem; border-radius: 2rem; background: #f9fafb; border-bottom: 8px solid #f97316;">
              <p style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem;">Forensic Moisture Audit</p>
              <p style="color: #4b5563; line-height: 1.8;">We use high-grade infrared sensors to ensure no hidden water pockets remain behind your drywall or under your slab, preventing expensive black mold growth and structural decay common in emergency plumbing lake county il calls.</p>
            </div>
            <div style="padding: 2.5rem; border-radius: 2rem; background: #f9fafb; border-bottom: 8px solid #1e3a8a;">
              <p style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem;">2026-Spec Extraction</p>
              <p style="color: #4b5563; line-height: 1.8;">Our trucks carry industrial-grade vacuums that clear a flooded bathroom emergency or a basement surcharge 5x faster than standard gear, minimizing the time water has to penetrate your foundation.</p>
            </div>
            <div style="padding: 2.5rem; border-radius: 2rem; background: #f9fafb; border-bottom: 8px solid #f97316;">
              <p style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem;">Insurance Compliance</p>
              <p style="color: #4b5563; line-height: 1.8;">We provide high-resolution forensic photos and engineering reports to maximize your emergency water damage plumbing claim, speaking the language of adjusters to ensure you are covered.</p>
            </div>
          </div>
          <div style="text-align: center; margin-top: 4rem;">
            <a href="tel:${BUSINESS_INFO.phone}" style="display: inline-block; background-color: #22c55e; color: white; padding: 1.5rem 4rem; border-radius: 1rem; font-size: 1.6rem; font-weight: 900; text-decoration: none; text-transform: uppercase;">Get A Licensed Plumber On-Site Now</a>
          </div>
        </section>

        <section style="width: 100%; padding: 6rem 10%; background-color: #1e3a8a; color: white;">
          <h3 style="font-size: 2.5rem; font-weight: 900; margin-bottom: 2rem; text-transform: uppercase;">Residential & Commercial Emergency Plumbing Solutions</h3>
          <p style="margin-bottom: 4rem; line-height: 2.2; font-size: 1.2rem; color: #d1d5db; max-width: 1000px;">
            We provide a clear distinction between residential emergency plumbing and commercial emergency plumbing. We understand that emergency plumbing for businesses requires a different logistical response, often involving industrial plumbing emergency repair to prevent expensive downtime. Whether you need a licensed emergency plumber waukegan for a retail space or emergency plumbing for homes in North Chicago, we are ready to call emergency plumber now and deploy.
          </p>

          <table style="width: 100%; border-collapse: separate; border-spacing: 0; border-radius: 2rem; overflow: hidden; background: white; color: #111827;">
            <thead>
              <tr style="background-color: #f97316; color: white;">
                <th style="padding: 25px; text-align: left; font-size: 1.2rem;">Service Location Target</th>
                <th style="padding: 25px; text-align: left; font-size: 1.2rem;">Response Time</th>
                <th style="padding: 25px; text-align: left; font-size: 1.2rem;">Dispatch Status</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 25px; font-weight: 700;">emergency plumber waukegan il</td>
                <td style="padding: 25px;">20 - 25 Minutes</td>
                <td style="padding: 25px; color: #16a34a; font-weight: 900;">ACTIVE</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb; background-color: #f9fafb;">
                <td style="padding: 25px; font-weight: 700;">emergency plumbing lake county il</td>
                <td style="padding: 25px;">30 Minutes</td>
                <td style="padding: 25px; color: #16a34a; font-weight: 900;">ACTIVE</td>
              </tr>
              <tr>
                <td style="padding: 25px; font-weight: 700;">emergency plumber illinois</td>
                <td style="padding: 25px;">Immediate</td>
                <td style="padding: 25px; color: #16a34a; font-weight: 900;">ACTIVE</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section style="width: 100%; padding: 8rem 10%; background-color: #ffffff;">
          <h4 style="font-size: 3rem; font-weight: 900; color: #1e3a8a; margin-bottom: 5rem; text-transform: uppercase; text-align: center;">Exhaustive Emergency Plumbing Knowledge Base</h4>
          <div style="max-width: 1100px; margin: 0 auto; display: grid; gap: 3.5rem;">
            <div style="border-bottom: 2px solid #f3f4f6; padding-bottom: 2.5rem;">
              <p style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem;">1. What is considered a plumbing emergency in Waukegan?</p>
              <p style="color: #4b5563; font-size: 1.2rem; line-height: 2;">A plumbing emergency is any situation that risks immediate property damage or life safety. This includes a burst pipe emergency repair, a major sewer backup repair, a gas line plumbing emergency, or a flooded bathroom emergency. If you cannot shut off the water source, you should who to call for plumbing emergency—contact us immediately for same day plumbing repair.</p>
            </div>
            <div style="border-bottom: 2px solid #f3f4f6; padding-bottom: 2.5rem;">
              <p style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem;">2. Who to call for burst pipe in Lake County, IL?</p>
              <p style="color: #4b5563; font-size: 1.2rem; line-height: 2;">You should call a licensed emergency plumber waukegan residents have trusted since 2016. We specialize in burst pipe repair near me, providing technical engineering reports required by Illinois insurance carriers. Our same-day plumbing service ensures that your property is stabilized against hydraulic damage. We are the best emergency plumber waukegan il for high-pressure failures.</p>
            </div>
            <div style="border-bottom: 2px solid #f3f4f6; padding-bottom: 2.5rem;">
              <p style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem;">3. Is water heater leak an emergency during Midwest winters?</p>
              <p style="color: #4b5563; font-size: 1.2rem; line-height: 2;">Yes, especially if the tank is weeping from the bottom. An emergency water heater repair or emergency water heater replacement is vital because a structural tank failure can release 50 or more gallons of boiling water in seconds. During Midwest winters, losing hot water also risks frozen pipes in unheated areas. Call for same day emergency plumber services instantly.</p>
            </div>
            <div>
              <p style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem;">4. Signs you need emergency plumbing service near me?</p>
              <p style="color: #4b5563; font-size: 1.2rem; line-height: 2;">Look for sudden low water pressure, gurgling in your drains, unexplained moisture on drywall, or a spinning water meter when no taps are open. These indicate that you need an emergency plumbing service near me right away. Additionally, the smell of rotten eggs is a sign of a gas line plumbing emergency that requires immediate evacuation.</p>
            </div>
          </div>
          <div style="text-align: center; margin-top: 6rem;">
            <p style="font-size: 1.8rem; font-weight: 900; color: #1e3a8a; margin-bottom: 2rem;">STILL IN A CRISIS? DON'T WAIT.</p>
            <a href="tel:${BUSINESS_INFO.phone}" style="display: inline-block; background-color: #dc2626; color: white; padding: 2rem 5rem; border-radius: 1.5rem; font-size: 2rem; font-weight: 900; text-decoration: none; text-transform: uppercase; box-shadow: 0 15px 30px rgba(220, 38, 38, 0.4);">Call Emergency Dispatch Now</a>
          </div>
        </section>
      </div>
    `
  }
};
