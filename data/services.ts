import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const primaryCity = illinoisCities[0].city;

export const SERVICES_DATA: Record<string, { title: string, content: string, image: string, intro: string }> = {
  "emergency-repairs": {
    // Clean title for Hero section compatibility
    title: "24/7 Professional Urgent Response",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80",
    intro: `Searching for emergency plumbing in waukegan? At ${BUSINESS_INFO.name}, we provide a rapid emergency plumbing service waukegan il homeowners trust. Whether it is a burst pipe emergency repair or a same day plumbing repair, our licensed technicians are available 24/7 to handle any plumbing emergency in Lake County, IL.`,
    content: `
      <div style="width: 100%; font-family: sans-serif; color: #333;">
        
        <section style="padding: 40px 0; border-bottom: 1px solid #eee;">
          <h2 style="font-size: 2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 20px; text-transform: uppercase;">Top-Rated Emergency Plumbing Service in Waukegan, IL</h2>
          <p style="line-height: 1.8; font-size: 1.1rem; margin-bottom: 25px; text-align: justify;">
            When a plumbing emergency strikes your property, you don't have time to wait for standard business hours. You need an emergency plumber near me open now who can arrive within the hour to mitigate property damage. As a premier emergency plumbing company in Illinois, our team specializes in same-day plumbing service and 24 hour plumbing repair. We have established a reputation as the best emergency plumber waukegan il residents can rely on during a crisis. We are not just emergency plumbing contractors; we are local experts who understand the unique structural demands of Northern Illinois properties. Whether you are facing a leaking pipe emergency or require a water leak emergency plumber, we provide urgent plumbing repair across the entire Lake County region.
          </p>
          <div style="display: flex; justify-content: center; margin-bottom: 20px;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 15px 30px; border-radius: 8px; font-size: 1.2rem; font-weight: 700; text-decoration: none; text-transform: uppercase;">Call The Emergency Plumber Now</a>
          </div>
        </section>

        <section style="padding: 50px 0; display: flex; flex-wrap: wrap; gap: 30px; align-items: center; background-color: #f9fafb;">
          <div style="flex: 1; min-width: 300px;">
            <h3 style="font-size: 1.7rem; font-weight: 800; color: #1e3a8a; margin-bottom: 20px; text-transform: uppercase;">Metallurgy of Midwest Pipe Fractures & Burst Pipe Emergency Repair</h3>
            <p style="margin-bottom: 15px; line-height: 1.7; font-size: 1.05rem;">
              In Illinois winters, emergency pipe burst repair becomes a mathematical certainty for uninsulated lines. When water inside a copper or PEX pipe drops below freezing, it undergoes a molecular expansion of nearly 9%. This creates internal pressures exceeding 3,500 PSI, which is nearly 10 times the rated capacity of residential plumbing. Most emergency plumbing waukegan calls originate from this physical phenomenon where metal fails under load.
            </p>
            <p style="margin-bottom: 25px; line-height: 1.7; font-size: 1.05rem;">
              Our mitigation involves high-precision Electronic Pipe Thawing (EPT). Unlike competitors who use open-flame torches, we use controlled induction to safely liquefy ice without thermal shock. This preserves your pipe metallurgy and prevents future emergency plumbing leak repair needs. If you are experiencing an emergency pipe repair, our same-day emergency plumber response will secure your system.
            </p>
            <div style="display: flex; justify-content: center;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #1e3a8a; color: white; padding: 12px 25px; border-radius: 6px; font-size: 1rem; font-weight: 700; text-decoration: none;">Request Urgent Pipe Repair</a>
            </div>
          </div>
          <div style="flex: 1; min-width: 300px;">
            <img src="https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80" alt="Burst Pipe Repair Service" style="width: 100%; height: auto; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);" />
          </div>
        </section>

        <section style="padding: 60px 0;">
          <h3 style="font-weight: 800; font-size: 2rem; margin-bottom: 40px; text-transform: uppercase; color: #1e3a8a; text-align: center;">Waukegan's Best Emergency Plumber Infrastructure</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
            <div style="padding: 25px; border-radius: 15px; background: #ffffff; border: 1px solid #e5e7eb; text-align: center;">
              <h4 style="font-size: 1.3rem; font-weight: 700; color: #1e3a8a; margin-bottom: 15px; text-transform: uppercase;">Forensic Moisture Audit</h4>
              <p style="color: #666; line-height: 1.6;">We use infrared sensors to ensure no hidden water pockets remain behind drywall, preventing mold common in emergency plumbing lake county il calls.</p>
            </div>
            <div style="padding: 25px; border-radius: 15px; background: #ffffff; border: 1px solid #e5e7eb; text-align: center;">
              <h4 style="font-size: 1.3rem; font-weight: 700; color: #1e3a8a; margin-bottom: 15px; text-transform: uppercase;">2026-Spec Extraction</h4>
              <p style="color: #666; line-height: 1.6;">Our trucks carry industrial vacuums that clear a flooded bathroom emergency 5x faster than standard gear, protecting your foundation.</p>
            </div>
            <div style="padding: 25px; border-radius: 15px; background: #ffffff; border: 1px solid #e5e7eb; text-align: center;">
              <h4 style="font-size: 1.3rem; font-weight: 700; color: #1e3a8a; margin-bottom: 15px; text-transform: uppercase;">Insurance Compliance</h4>
              <p style="color: #666; line-height: 1.6;">We provide technical reports to maximize your emergency water damage plumbing claim, speaking the language of adjusters.</p>
            </div>
          </div>
        </section>

        <section style="padding: 60px 30px; background-color: #1e3a8a; color: white; border-radius: 20px; margin: 20px 0;">
          <h2 style="font-size: 1.8rem; font-weight: 800; margin-bottom: 20px; text-transform: uppercase; text-align: center;">Industrial-Grade Residential & Commercial Solutions</h2>
          <p style="line-height: 1.8; font-size: 1.1rem; margin-bottom: 35px; text-align: center; max-width: 900px; margin-left: auto; margin-right: auto;">
            We provide a clear distinction between residential emergency plumbing and commercial emergency plumbing. Emergency plumbing for businesses requires industrial plumbing emergency repair to prevent expensive downtime and safety code violations. Whether you need emergency plumbing for homes or a retail space, we are ready to deploy.
          </p>
          <div style="overflow-x: auto; margin-bottom: 30px;">
            <table style="width: 100%; background: white; color: #111827; border-radius: 10px; overflow: hidden; border-collapse: collapse;">
              <thead>
                <tr style="background-color: #f97316; color: white;">
                  <th style="padding: 15px; text-align: left;">Service Target</th>
                  <th style="padding: 15px; text-align: left;">Avg. Arrival</th>
                  <th style="padding: 15px; text-align: left;">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 15px; font-weight: 700;">emergency plumber waukegan il</td>
                  <td style="padding: 15px;">20 Mins</td>
                  <td style="padding: 15px; color: #16a34a; font-weight: 800;">IMMEDIATE</td>
                </tr>
                <tr>
                  <td style="padding: 15px; font-weight: 700;">emergency plumbing lake county il</td>
                  <td style="padding: 15px;">30 Mins</td>
                  <td style="padding: 15px; color: #16a34a; font-weight: 800;">ACTIVE</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="display: flex; justify-content: center;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: white; color: #1e3a8a; padding: 15px 35px; border-radius: 8px; font-size: 1.1rem; font-weight: 800; text-decoration: none;">Call Commercial Dispatch Now</a>
          </div>
        </section>

        <section style="padding: 60px 0;">
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 40px; text-align: center; text-transform: uppercase;">Exhaustive Emergency Plumbing Knowledge Base</h2>
          <div style="max-width: 900px; margin: 0 auto; display: grid; gap: 30px;">
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 15px;">
              <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px;">1. What is considered a plumbing emergency in Illinois?</h4>
              <p style="color: #555; font-size: 1.05rem; line-height: 1.7;">A plumbing emergency is any situation that risks immediate property damage or life safety. This includes a burst pipe emergency repair, a major sewer backup repair, a gas line plumbing emergency, or a flooded bathroom emergency. Contact our technicians immediately for same day plumbing repair.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 15px;">
              <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px;">2. Who to call for burst pipe in Lake County, IL?</h4>
              <p style="color: #555; font-size: 1.05rem; line-height: 1.7;">Call a licensed emergency plumber waukegan residents have trusted since 2016. We specialize in burst pipe repair near me, providing technical engineering reports required by Illinois insurance carriers to secure your restoration claim instantly.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 15px;">
              <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px;">3. Is water heater leak an emergency during winters?</h4>
              <p style="color: #555; font-size: 1.05rem; line-height: 1.7;">Yes, especially if the tank is weeping from the bottom. An emergency water heater repair or emergency water heater replacement is vital because a structural tank failure can release 50+ gallons of boiling water in seconds.</p>
            </div>
            <div style="padding-bottom: 15px;">
              <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px;">4. Signs you need emergency plumbing service near me?</h4>
              <p style="color: #555; font-size: 1.05rem; line-height: 1.7;">Look for sudden low water pressure, gurgling in your drains, unexplained moisture on drywall, or a spinning water meter when no taps are open. These indicate that you need an emergency plumbing service near me right away.</p>
            </div>
          </div>
          
          <div style="margin-top: 60px; background: #fff5f5; padding: 50px; border-radius: 20px; border: 2px dashed #f56565; text-align: center;">
            <p style="font-size: 1.8rem; font-weight: 900; color: #c53030; margin-bottom: 20px; text-transform: uppercase;">Still in a crisis? Don't wait.</p>
            <div style="display: flex; justify-content: center;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #c53030; color: white; padding: 18px 45px; border-radius: 12px; font-size: 1.6rem; font-weight: 900; text-decoration: none;">Call Dispatch Now</a>
            </div>
          </div>
        </section>
      </div>
    `
  }
};
