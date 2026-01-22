import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const primaryCity = illinoisCities[0].city;

export const SERVICES_DATA: Record<string, { title: string, content: string, image: string, intro: string }> = {
  "emergency-repairs": {
    // Clean title to prevent Hero UI doubling "IN WAUKEGAN"
    title: "24/7 Urgent Response & Crisis Mitigation",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80",
    intro: `Searching for emergency plumbing in waukegan? At ${BUSINESS_INFO.name}, we provide a rapid emergency plumbing service waukegan il homeowners trust. Whether it is a burst pipe emergency repair or a same day plumbing repair, our licensed technicians are available 24/7 to handle any plumbing emergency in Lake County, IL.`,
    content: `
      <div style="position: relative; width: 100vw; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; background: transparent; overflow-x: hidden;">
        
        <section style="width: 100%; padding: 80px 10%; background-color: #ffffff;">
          <h2 style="font-size: clamp(2rem, 5vw, 3rem); font-weight: 800; color: #1e3a8a; margin-bottom: 25px; text-transform: uppercase; line-height: 1.2;">Top-Rated Emergency Plumbing Service in Waukegan, IL</h2>
          <p style="line-height: 2; font-size: 1.2rem; color: #374151; margin-bottom: 30px; max-width: 1000px;">
            When a plumbing emergency strikes, you don't have time to wait for business hours. You need an emergency plumber near me open now who can arrive within the hour. As a premier emergency plumbing company in Illinois, our team specializes in same-day plumbing service and 24 hour plumbing repair. Since our founding in 2016, we have established a reputation as the best emergency plumber waukegan il residents can rely on. We are local experts who understand the unique structural demands of Northern Illinois properties.
          </p>
          <a href="tel:${BUSINESS_INFO.phone}" style="display: inline-block; background-color: #22c55e; color: white; padding: 18px 40px; border-radius: 10px; font-size: 1.3rem; font-weight: 800; text-decoration: none; box-shadow: 0 10px 20px rgba(34,197,94,0.3);">Call Emergency Plumber Now</a>
        </section>

        <section style="width: 100%; display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); background-color: #f8fafc; border-top: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb;">
          <div style="padding: 80px 10%; display: flex; flex-direction: column; justify-content: center;">
            <h3 style="font-size: 2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 25px; text-transform: uppercase;">Metallurgy & Thermodynamics of Midwest Pipe Fractures</h3>
            <p style="line-height: 1.8; color: #4b5563; font-size: 1.15rem; margin-bottom: 20px;">
              In Illinois winters, emergency pipe burst repair becomes a mathematical certainty for uninsulated lines. When water inside a copper or PEX pipe drops below freezing, it undergoes a molecular expansion of nearly 9%. This creates internal pressures exceeding 3,500 PSI, which is nearly 10 times the rated capacity of residential plumbing. Most emergency plumbing waukegan calls originate from this physical phenomenon.
            </p>
            <p style="line-height: 1.8; color: #4b5563; font-size: 1.15rem; margin-bottom: 30px;">
              Our mitigation involves high-precision Electronic Pipe Thawing (EPT). Unlike competitors who use open-flame torches, we use controlled induction to safely liquefy ice without thermal shock. This preserves your pipe metallurgy and prevents future emergency plumbing leak repair needs.
            </p>
            <a href="tel:${BUSINESS_INFO.phone}" style="width: fit-content; background-color: #1e3a8a; color: white; padding: 15px 35px; border-radius: 8px; font-size: 1.1rem; font-weight: 700; text-decoration: none;">Request Urgent Pipe Repair</a>
          </div>
          <div style="min-height: 500px; background: url('https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80') center/cover no-repeat;"></div>
        </section>

        <section style="width: 100%; padding: 80px 10%; background-color: #ffffff;">
          <h3 style="font-size: 2.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 50px; text-align: center; text-transform: uppercase;">Waukegan's Best Emergency Plumber Infrastructure</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
            <div style="padding: 40px; border-radius: 20px; background: #f9fafb; border: 1px solid #e5e7eb; box-shadow: 0 10px 15px rgba(0,0,0,0.05);">
              <h4 style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 15px;">Forensic Moisture Audit</h4>
              <p style="line-height: 1.7; color: #4b5563;">We use high-grade infrared sensors to ensure no hidden water pockets remain behind drywall, preventing black mold common in emergency plumbing lake county il calls.</p>
            </div>
            <div style="padding: 40px; border-radius: 20px; background: #f9fafb; border: 1px solid #e5e7eb; box-shadow: 0 10px 15px rgba(0,0,0,0.05);">
              <h4 style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 15px;">2026-Spec Extraction</h4>
              <p style="line-height: 1.7; color: #4b5563;">Our trucks carry industrial vacuums that clear a flooded bathroom emergency 5x faster than standard gear, protecting your structural foundation.</p>
            </div>
            <div style="padding: 40px; border-radius: 20px; background: #f9fafb; border: 1px solid #e5e7eb; box-shadow: 0 10px 15px rgba(0,0,0,0.05);">
              <h4 style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 15px;">Insurance Compliance</h4>
              <p style="line-height: 1.7; color: #4b5563;">We provide high-res forensic photos and technical reports to maximize your emergency water damage plumbing claim with all major Illinois carriers.</p>
            </div>
          </div>
        </section>

        <section style="width: 100%; padding: 80px 10%; background-color: #1e3a8a; color: white;">
          <h2 style="font-size: 2.2rem; font-weight: 800; margin-bottom: 30px; text-transform: uppercase;">Industrial-Grade Residential & Commercial Solutions</h2>
          <p style="line-height: 1.8; font-size: 1.2rem; margin-bottom: 40px; max-width: 900px;">
            We provide a clear distinction between residential emergency plumbing and commercial emergency plumbing. Emergency plumbing for businesses requires industrial plumbing emergency repair to prevent expensive operational downtime.
          </p>
          <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; background: white; color: #111827; border-radius: 15px; overflow: hidden;">
              <thead>
                <tr style="background-color: #f97316; color: white;">
                  <th style="padding: 20px; text-align: left;">Service Target Zone</th>
                  <th style="padding: 20px; text-align: left;">Avg. Arrival</th>
                  <th style="padding: 20px; text-align: left;">Dispatch Status</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 20px; font-weight: 700;">emergency plumber waukegan il</td>
                  <td style="padding: 20px;">20 Mins</td>
                  <td style="padding: 20px; color: #16a34a; font-weight: 900;">IMMEDIATE</td>
                </tr>
                <tr>
                  <td style="padding: 20px; font-weight: 700;">emergency plumbing lake county il</td>
                  <td style="padding: 20px;">30 Mins</td>
                  <td style="padding: 20px; color: #16a34a; font-weight: 900;">ACTIVE</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="margin-top: 40px;">
            <a href="tel:${BUSINESS_INFO.phone}" style="display: inline-block; background-color: #ffffff; color: #1e3a8a; padding: 15px 40px; border-radius: 8px; font-size: 1.2rem; font-weight: 800; text-decoration: none;">Call Commercial Dispatch Now</a>
          </div>
        </section>

        <section style="width: 100%; padding: 100px 10%; background-color: #ffffff;">
          <h2 style="font-size: 2.8rem; font-weight: 900; color: #1e3a8a; margin-bottom: 60px; text-align: center; text-transform: uppercase;">Exhaustive Emergency Plumbing Knowledge Base</h2>
          <div style="max-width: 1100px; margin: 0 auto; display: grid; gap: 50px;">
            <div>
              <h4 style="font-size: 1.6rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px;">1. What is considered a plumbing emergency in Illinois?</h4>
              <p style="line-height: 1.9; color: #4b5563; font-size: 1.1rem;">A plumbing emergency is any situation that risks immediate property damage. This includes a burst pipe emergency repair, a major sewer backup repair, a gas line plumbing emergency, or a flooded bathroom emergency. Call us immediately for same day plumbing repair.</p>
            </div>
            <div>
              <h4 style="font-size: 1.6rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px;">2. Who to call for burst pipe in Waukegan, IL?</h4>
              <p style="line-height: 1.9; color: #4b5563; font-size: 1.1rem;">Call a licensed emergency plumber waukegan residents have trusted since 2016. We specialize in burst pipe repair near me, providing technical reports required by Illinois insurance carriers to secure your claim.</p>
            </div>
          </div>
          <div style="text-align: center; margin-top: 80px; background: #fef2f2; padding: 60px; border-radius: 30px; border: 3px dashed #dc2626;">
            <p style="font-size: 2rem; font-weight: 900; color: #991b1b; margin-bottom: 20px;">STILL IN A CRISIS? DON'T WAIT.</p>
            <a href="tel:${BUSINESS_INFO.phone}" style="display: inline-block; background-color: #dc2626; color: white; padding: 25px 60px; border-radius: 15px; font-size: 2rem; font-weight: 900; text-decoration: none; text-transform: uppercase;">Call Dispatch Now</a>
          </div>
        </section>
      </div>
    `
  }
};
