import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const primaryCity = illinoisCities[0].city;

export const SERVICES_DATA: Record<string, { title: string, content: string, image: string, intro: string }> = {
  "emergency-repairs": {
    // Title clean rakha hai taake Hero mein doubling na ho
    title: "24/7 Professional Urgent Response",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80",
    intro: `Searching for emergency plumbing in waukegan? At ${BUSINESS_INFO.name}, we provide the emergency plumbing service waukegan il homeowners trust. Whether you face a burst pipe emergency repair or need same day plumbing repair, our emergency plumber waukegan il team is available 24/7 for any plumbing emergency in Lake County, IL.`,
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; font-family: sans-serif; color: #374151;">
        
        <section style="padding: 40px 20px; text-align: center; border-bottom: 1px solid #f3f4f6;">
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 20px; text-transform: uppercase;">Top-Rated Emergency Plumbing Service in Waukegan, IL</h2>
          <p style="line-height: 1.8; font-size: 1.15rem; margin: 0 auto 30px auto; max-width: 1000px;">
            When a plumbing emergency strikes, you don't have time to browse through average contractors. You need an emergency plumber near me open now who can arrive within the hour to mitigate property damage. As a premier emergency plumbing company in Illinois, we specialize in same-day plumbing service and 24 hour plumbing repair. We have established a reputation as the best emergency plumber waukegan il residents rely on during a crisis. We are local experts providing urgent plumbing repair and emergency plumbing services across the entire Lake County region.
          </p>
          <div style="display: flex; justify-content: center;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 18px 40px; border-radius: 12px; font-size: 1.3rem; font-weight: 800; text-decoration: none; text-transform: uppercase; box-shadow: 0 4px 15px rgba(34, 197, 94, 0.2);">Call Emergency Plumber Now</a>
          </div>
        </section>

        <section style="padding: 50px 20px; background-color: #f8fafc; display: flex; flex-wrap: wrap; gap: 40px; align-items: center; border-radius: 20px;">
          <div style="flex: 1; min-width: 320px;">
            <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a; margin-bottom: 20px; text-transform: uppercase;">Metallurgy & Burst Pipe Emergency Repair</h3>
            <p style="margin-bottom: 15px; line-height: 1.7; font-size: 1.1rem;">
              In Illinois winters, emergency pipe burst repair becomes a mathematical certainty for uninsulated lines. When water inside a copper or PEX pipe drops below freezing, it undergoes a molecular expansion of nearly 9%. This creates internal pressures exceeding 3,500 PSI, which is nearly 10 times the rated capacity of residential plumbing. Most emergency plumbing waukegan calls originate from this physical phenomenon where metal fails under load.
            </p>
            <p style="margin-bottom: 30px; line-height: 1.7; font-size: 1.1rem;">
              Our mitigation involves high-precision Electronic Pipe Thawing (EPT). Unlike competitors who use open-flame torches—a fire hazard in historic Waukegan attics—we use controlled induction to safely liquefy ice without thermal shock. This preserves your pipe metallurgy and prevents future emergency plumbing leak repair needs. If you are facing a leaking pipe emergency, our same day emergency plumber response will secure your system.
            </p>
            <div style="display: flex; justify-content: center;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #1e3a8a; color: white; padding: 15px 35px; border-radius: 8px; font-size: 1.1rem; font-weight: 700; text-decoration: none; text-transform: uppercase;">Request Urgent Pipe Repair</a>
            </div>
          </div>
          <div style="flex: 1; min-width: 320px;">
            <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" alt="Plumbing Service" style="width: 100%; height: auto; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);" />
          </div>
        </section>

        <section style="padding: 60px 20px;">
          <h3 style="font-weight: 800; font-size: 2rem; margin-bottom: 40px; text-transform: uppercase; color: #1e3a8a; text-align: center;">Waukegan Premier Crisis Response Infrastructure</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px;">
            <div style="padding: 30px; border-radius: 15px; background: #ffffff; border: 1px solid #e5e7eb; text-align: center; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
              <h4 style="font-size: 1.3rem; font-weight: 800; color: #1e3a8a; margin-bottom: 15px; text-transform: uppercase;">Forensic Moisture Audit</h4>
              <p style="color: #4b5563; line-height: 1.6; font-size: 1.05rem;">We use infrared sensors to ensure no hidden water pockets remain behind drywall, preventing mold common in emergency plumbing lake county il calls.</p>
            </div>
            <div style="padding: 30px; border-radius: 15px; background: #ffffff; border: 1px solid #e5e7eb; text-align: center; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
              <h4 style="font-size: 1.3rem; font-weight: 800; color: #1e3a8a; margin-bottom: 15px; text-transform: uppercase;">2026-Spec Extraction</h4>
              <p style="color: #4b5563; line-height: 1.6; font-size: 1.05rem;">Our trucks carry industrial vacuums that clear a flooded bathroom emergency 5x faster than standard gear, protecting your foundation.</p>
            </div>
            <div style="padding: 30px; border-radius: 15px; background: #ffffff; border: 1px solid #e5e7eb; text-align: center; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
              <h4 style="font-size: 1.3rem; font-weight: 800; color: #1e3a8a; margin-bottom: 15px; text-transform: uppercase;">Full Compliance</h4>
              <p style="color: #4b5563; line-height: 1.6; font-size: 1.05rem;">We provide technical engineering reports to maximize your emergency water damage plumbing claim with all Illinois insurance carriers.</p>
            </div>
          </div>
          <div style="display: flex; justify-content: center; margin-top: 50px;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #f97316; color: white; padding: 18px 45px; border-radius: 12px; font-size: 1.4rem; font-weight: 900; text-decoration: none; text-transform: uppercase;">Get A Licensed Expert Now</a>
          </div>
        </section>

        <section style="padding: 60px 20px; background-color: #1e3a8a; color: white; border-radius: 25px; margin-bottom: 40px;">
          <h2 style="font-size: 2rem; font-weight: 800; margin-bottom: 25px; text-transform: uppercase; text-align: center;">Industrial-Grade Residential & Commercial Solutions</h2>
          <p style="line-height: 1.8; font-size: 1.2rem; margin: 0 auto 40px auto; text-align: center; max-width: 900px;">
            We provide a clear distinction between residential emergency plumbing and commercial emergency plumbing. Emergency plumbing for businesses requires a different logistical response, often involving industrial plumbing emergency repair to prevent downtime. Whether you need a licensed emergency plumber waukegan for a retail space or emergency plumbing for homes, our fleet is ready to call emergency plumber now and deploy.
          </p>
          <div style="overflow-x: auto; margin-bottom: 40px;">
            <table style="width: 100%; max-width: 800px; margin: 0 auto; background: white; color: #111827; border-radius: 15px; overflow: hidden; border-collapse: collapse;">
              <thead>
                <tr style="background-color: #f97316; color: white;">
                  <th style="padding: 20px; text-align: left; text-transform: uppercase;">Service Target Zone</th>
                  <th style="padding: 20px; text-align: left; text-transform: uppercase;">Arrival Time</th>
                  <th style="padding: 20px; text-align: left; text-transform: uppercase;">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 20px; font-weight: 700;">emergency plumber waukegan il</td>
                  <td style="padding: 20px;">20 Mins</td>
                  <td style="padding: 20px; color: #16a34a; font-weight: 900;">IMMEDIATE</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 20px; font-weight: 700;">emergency plumbing lake county il</td>
                  <td style="padding: 20px;">30 Mins</td>
                  <td style="padding: 20px; color: #16a34a; font-weight: 900;">ACTIVE</td>
                </tr>
                <tr>
                  <td style="padding: 20px; font-weight: 700;">emergency plumbing illinois</td>
                  <td style="padding: 20px;">Regional</td>
                  <td style="padding: 20px; color: #16a34a; font-weight: 900;">OPEN 24/7</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="display: flex; justify-content: center;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #ffffff; color: #1e3a8a; padding: 18px 45px; border-radius: 10px; font-size: 1.3rem; font-weight: 900; text-decoration: none; text-transform: uppercase;">Call Commercial Dispatch Now</a>
          </div>
        </section>

        <section style="padding: 60px 20px;">
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 40px; text-align: center; text-transform: uppercase;">Emergency Plumbing Knowledge Base</h2>
          <div style="max-width: 900px; margin: 0 auto; display: grid; gap: 30px;">
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 20px;">
              <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">1. What is considered a plumbing emergency?</h4>
              <p style="color: #4b5563; font-size: 1.1rem; line-height: 1.8;">A plumbing emergency is any situation that risks immediate property damage or life safety. This includes a burst pipe emergency repair, a major sewer backup repair, a gas line plumbing emergency, or a flooded bathroom emergency. If you cannot shut off the source, contact our technicians for same day plumbing repair immediately.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 20px;">
              <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">2. Who to call for burst pipe in Lake County, IL?</h4>
              <p style="color: #4b5563; font-size: 1.1rem; line-height: 1.8;">Call a licensed emergency plumber waukegan residents have trusted since our founding. We specialize in burst pipe repair near me, providing forensic engineering reports required by Illinois insurance carriers to secure your restoration claim instantly.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 20px;">
              <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">3. Is water heater leak an emergency during winters?</h4>
              <p style="color: #4b5563; font-size: 1.1rem; line-height: 1.8;">Yes, especially if the tank is weeping from the bottom. An emergency water heater repair or emergency water heater replacement is vital because a structural failure can release 50+ gallons of boiling water in seconds, destroying your flooring. Call for same day emergency plumber services instantly.</p>
            </div>
            <div style="padding-bottom: 20px;">
              <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">4. Signs you need emergency plumbing service near me?</h4>
              <p style="color: #4b5563; font-size: 1.1rem; line-height: 1.8;">Look for sudden low water pressure, gurgling in your drains, unexplained moisture on drywall, or a spinning water meter when no taps are open. These indicate that you need an emergency plumbing service near me right away. Additionally, the smell of rotten eggs is a sign of a gas line plumbing emergency.</p>
            </div>
          </div>
          
          <div style="margin-top: 60px; background: #fef2f2; padding: 50px; border-radius: 30px; border: 3px dashed #dc2626; text-align: center;">
            <p style="font-size: 2rem; font-weight: 900; color: #991b1b; margin-bottom: 25px; text-transform: uppercase;">Instant Crisis Dispatch Available</p>
            <div style="display: flex; justify-content: center;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #dc2626; color: white; padding: 22px 60px; border-radius: 12px; font-size: 1.8rem; font-weight: 900; text-decoration: none; text-transform: uppercase; box-shadow: 0 10px 25px rgba(220, 38, 38, 0.4);">Call Dispatch Now</a>
            </div>
          </div>
        </section>
      </div>
    `
  }
};
