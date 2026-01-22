import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const primaryCity = illinoisCities[0].city;

export const SERVICES_DATA: Record<string, { title: string, content: string, image: string, intro: string }> = {
  "emergency-repairs": {
    title: "24/7 Urgent Response & Crisis Mitigation",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80",
    intro: `Searching for emergency plumbing in waukegan? At ${BUSINESS_INFO.name}, we provide a rapid emergency plumbing service waukegan il homeowners trust. Whether it is a burst pipe emergency repair or a same day plumbing repair, our licensed technicians are available 24/7 to handle any plumbing emergency in Lake County, IL.`,
    content: `
      <div style="width: 100%; font-family: 'Inter', sans-serif; color: #374151;">
        
        <section style="padding: 40px 5%; background: #ffffff;">
          <h2 style="font-size: 2.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 20px; text-transform: uppercase;">Top-Rated Emergency Plumbing Service in Waukegan, IL</h2>
          <p style="line-height: 1.8; font-size: 1.15rem; margin-bottom: 25px;">
            When a plumbing emergency strikes, you don't have time to wait for business hours. You need an emergency plumber near me open now who can arrive within the hour. As a premier emergency plumbing company in Illinois, our team specializes in same-day plumbing service and 24 hour plumbing repair. Since our founding in 2016, we have established a reputation as the best emergency plumber waukegan il residents can rely on. We are local experts who understand the unique structural demands of Northern Illinois properties, providing comprehensive emergency plumbing services to Beach Park, Gurnee, and Zion.
          </p>
          <a href="tel:${BUSINESS_INFO.phone}" style="display: inline-block; background-color: #22c55e; color: white; padding: 15px 35px; border-radius: 8px; font-size: 1.2rem; font-weight: 700; text-decoration: none; box-shadow: 0 4px 10px rgba(34,197,94,0.3);">Call Emergency Plumber Now</a>
        </section>

        <section style="padding: 60px 5%; background-color: #f8fafc; display: flex; flex-wrap: wrap; gap: 40px; align-items: center;">
          <div style="flex: 1; min-width: 320px;">
            <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a; margin-bottom: 20px; text-transform: uppercase;">Metallurgy & Thermodynamics of Frozen Pipe Fractures</h3>
            <p style="line-height: 1.8; margin-bottom: 15px;">
              In Illinois winters, emergency pipe burst repair becomes a mathematical certainty for uninsulated lines. When water inside a copper or PEX pipe drops below freezing, it undergoes a molecular expansion of nearly 9%. This creates internal pressures exceeding 3,500 PSI, which is nearly 10 times the rated capacity of residential plumbing. Most emergency plumbing waukegan calls originate from this specific physical phenomenon where metal crystallization fails under extreme load.
            </p>
            <p style="line-height: 1.8; margin-bottom: 25px;">
              Our mitigation involves high-precision Electronic Pipe Thawing (EPT). Unlike competitors who use open-flame torches—a major fire hazard in historic Waukegan attics—we use controlled induction to safely liquefy ice without thermal shock. This preserves your pipe metallurgy and prevents future emergency plumbing leak repair needs.
            </p>
            <a href="tel:${BUSINESS_INFO.phone}" style="display: inline-block; background-color: #1e3a8a; color: white; padding: 12px 30px; border-radius: 6px; font-size: 1rem; font-weight: 700; text-decoration: none;">Request Urgent Pipe Repair</a>
          </div>
          <div style="flex: 1; min-width: 320px; border-radius: 15px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1);">
            <img src="https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80" alt="Burst Pipe Repair" style="width: 100%; height: auto; display: block;" />
          </div>
        </section>

        <section style="padding: 60px 5%; background: white;">
          <h3 style="font-size: 2.2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 40px; text-align: center;">Why We Are Waukegan's Best Emergency Plumber</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px;">
            <div style="padding: 30px; border-radius: 12px; background: #f9fafb; border: 1px solid #e5e7eb;">
              <h4 style="font-size: 1.3rem; font-weight: 700; color: #1e3a8a; margin-bottom: 10px;">Forensic Moisture Audit</h4>
              <p style="line-height: 1.6;">We use infrared sensors to ensure no hidden water pockets remain behind drywall, preventing mold common in emergency plumbing lake county il calls.</p>
            </div>
            <div style="padding: 30px; border-radius: 12px; background: #f9fafb; border: 1px solid #e5e7eb;">
              <h4 style="font-size: 1.3rem; font-weight: 700; color: #1e3a8a; margin-bottom: 10px;">2026-Spec Extraction</h4>
              <p style="line-height: 1.6;">Our trucks carry industrial vacuums that clear a flooded bathroom emergency 5x faster than standard gear, protecting your foundation.</p>
            </div>
            <div style="padding: 30px; border-radius: 12px; background: #f9fafb; border: 1px solid #e5e7eb;">
              <h4 style="font-size: 1.3rem; font-weight: 700; color: #1e3a8a; margin-bottom: 10px;">Full Compliance</h4>
              <p style="line-height: 1.6;">We provide high-res forensic photos and engineering reports to maximize your emergency water damage plumbing claim.</p>
            </div>
          </div>
        </section>

        <section style="padding: 60px 5%; background-color: #1e3a8a; color: white;">
          <h2 style="font-size: 2rem; font-weight: 800; margin-bottom: 25px;">Industrial-Grade Residential & Commercial Solutions</h2>
          <p style="line-height: 1.8; font-size: 1.1rem; margin-bottom: 40px; max-width: 900px;">
            We provide a clear distinction between residential emergency plumbing and commercial emergency plumbing. Emergency plumbing for businesses requires a different logistical response, often involving industrial plumbing emergency repair to prevent expensive downtime. Whether you need a licensed emergency plumber waukegan for a retail space or emergency plumbing for homes, we are ready to call emergency plumber now and deploy.
          </p>
          <table style="width: 100%; max-width: 800px; border-collapse: collapse; background: white; color: #111827; border-radius: 10px; overflow: hidden;">
            <thead>
              <tr style="background: #f97316; color: white;">
                <th style="padding: 15px; text-align: left;">Service Area</th>
                <th style="padding: 15px; text-align: left;">Response</th>
                <th style="padding: 15px; text-align: left;">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 15px; font-weight: 700;">Waukegan Central</td>
                <td style="padding: 15px;">20 Mins</td>
                <td style="padding: 15px; color: #16a34a; font-weight: 900;">ACTIVE</td>
              </tr>
              <tr>
                <td style="padding: 15px; font-weight: 700;">Lake County</td>
                <td style="padding: 15px;">30 Mins</td>
                <td style="padding: 15px; color: #16a34a; font-weight: 900;">ACTIVE</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section style="padding: 80px 5%; background: #ffffff;">
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 50px; text-align: center;">Exhaustive Emergency Plumbing Knowledge Base</h2>
          <div style="max-width: 1000px; margin: 0 auto; display: grid; gap: 40px;">
            <div>
              <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px;">1. What is considered a plumbing emergency in Illinois?</h4>
              <p style="line-height: 1.8; color: #4b5563;">A plumbing emergency is any situation that risks immediate property damage or life safety. This includes a burst pipe emergency repair, a major sewer backup repair, a gas line plumbing emergency, or a flooded bathroom emergency. If you cannot shut off the water source, you should call for same day plumbing repair immediately.</p>
            </div>
            <div>
              <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px;">2. Who to call for burst pipe in Lake County, IL?</h4>
              <p style="line-height: 1.8; color: #4b5563;">You should call a licensed emergency plumber waukegan residents have trusted since 2016. We specialize in burst pipe repair near me, providing technical engineering reports required by Illinois insurance carriers to secure your restoration claim.</p>
            </div>
            <div>
              <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px;">3. Is water heater leak an emergency during Midwest winters?</h4>
              <p style="line-height: 1.8; color: #4b5563;">Yes, especially if the tank is weeping from the bottom. An emergency water heater repair or emergency water heater replacement is vital because a structural tank failure can release 50 gallons of boiling water in seconds.</p>
            </div>
            <div>
              <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px;">4. Signs you need emergency plumbing service near me?</h4>
              <p style="line-height: 1.8; color: #4b5563;">Look for sudden low water pressure, gurgling in your drains, unexplained moisture on drywall, or a spinning water meter when no taps are open. These indicate that you need an emergency plumbing service near me right away.</p>
            </div>
            <div>
              <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px;">5. How fast should an emergency plumber respond in Waukegan?</h4>
              <p style="line-height: 1.8; color: #4b5563;">For urgent plumbing repair, response should be under 60 minutes. We strive for a 30-minute window for emergency plumbing in waukegan to minimize mitigation costs.</p>
            </div>
          </div>
          <div style="text-align: center; margin-top: 60px;">
            <a href="tel:${BUSINESS_INFO.phone}" style="display: inline-block; background-color: #dc2626; color: white; padding: 20px 50px; border-radius: 10px; font-size: 1.5rem; font-weight: 900; text-decoration: none;">DISPATCH EMERGENCY TEAM NOW</a>
          </div>
        </section>
      </div>
    `
  }
};
