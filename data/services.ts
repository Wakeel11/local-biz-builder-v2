import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const primaryCity = illinoisCities[0].city;

export const SERVICES_DATA: Record<string, { title: string, content: string, image: string, intro: string }> = {
  "emergency-repairs": {
    title: "Professional 24/7 Crisis Response",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80",
    intro: `Searching for emergency plumbing in waukegan? At ${BUSINESS_INFO.name}, we provide a rapid emergency plumbing service waukegan il homeowners trust. Whether it is a burst pipe emergency repair or a same day plumbing repair, our licensed technicians are available 24/7 to handle any plumbing emergency in Lake County, IL.`,
    content: `
      <div style="width: 100%; font-family: sans-serif; color: #333; overflow-x: hidden;">
        
        <div style="width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; background: #ffffff; padding: 50px 0;">
          <div style="max-width: 1100px; margin: 0 auto; padding: 0 20px; text-align: center;">
            <h2 style="font-size: 2.2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 20px; text-transform: uppercase;">Top-Rated Emergency Plumbing Service in Waukegan, IL</h2>
            <p style="line-height: 1.8; font-size: 1.15rem; margin-bottom: 30px; text-align: center;">
              When a plumbing emergency strikes your property, you don't have time to wait for standard business hours. You need an emergency plumber near me open now who can arrive within the hour to mitigate property damage. As a premier emergency plumbing company in Illinois, our team specializes in same-day plumbing service and 24 hour plumbing repair. We have established a reputation as the best emergency plumber waukegan il residents can rely on during a crisis. We are local experts who understand the unique structural demands of Northern Illinois properties. Whether you are facing a leaking pipe emergency or require a water leak emergency plumber, we provide urgent plumbing repair across the entire Lake County region.
            </p>
            <div style="display: flex; justify-content: center;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 16px 40px; border-radius: 8px; font-size: 1.3rem; font-weight: 800; text-decoration: none; text-transform: uppercase; box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3);">Call Emergency Plumber Now</a>
            </div>
          </div>
        </div>

        <div style="width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; background: #f9fafb; padding: 50px 0; border-top: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb;">
          <div style="max-width: 1100px; margin: 0 auto; padding: 0 20px; display: flex; flex-wrap: wrap; gap: 40px; align-items: center;">
            <div style="flex: 1; min-width: 320px;">
              <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a; margin-bottom: 20px; text-transform: uppercase;">Metallurgy & Burst Pipe Emergency Repair</h3>
              <p style="margin-bottom: 15px; line-height: 1.7; font-size: 1.1rem;">
                In Illinois winters, emergency pipe burst repair becomes a mathematical certainty for uninsulated lines. When water inside a copper or PEX pipe drops below freezing, it undergoes a molecular expansion of nearly 9%. This creates internal pressures exceeding 3,500 PSI, which is nearly 10 times the rated capacity of residential plumbing. Most emergency plumbing waukegan calls originate from this specific physical phenomenon where metal fails under load.
              </p>
              <p style="margin-bottom: 25px; line-height: 1.7; font-size: 1.1rem;">
                Our mitigation involves high-precision Electronic Pipe Thawing (EPT). Unlike competitors who use open-flame torches, we use controlled induction to safely liquefy ice without thermal shock. This preserves your pipe metallurgy and prevents future emergency plumbing leak repair needs. If you are experiencing an emergency pipe repair, our same-day emergency plumber response will secure your system.
              </p>
              <div style="display: flex; justify-content: flex-start;">
                <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #1e3a8a; color: white; padding: 14px 30px; border-radius: 6px; font-size: 1rem; font-weight: 700; text-decoration: none; text-transform: uppercase;">Request Urgent Pipe Repair</a>
              </div>
            </div>
            <div style="flex: 1; min-width: 320px;">
              <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" alt="Repair Service" style="width: 100%; height: auto; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);" />
            </div>
          </div>
        </div>

        <div style="width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; background: #ffffff; padding: 60px 0;">
          <div style="max-width: 1100px; margin: 0 auto; padding: 0 20px;">
            <h3 style="font-weight: 800; font-size: 2.2rem; margin-bottom: 40px; text-transform: uppercase; color: #1e3a8a; text-align: center;">Waukegan Premier Crisis Response Infrastructure</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
              <div style="padding: 30px; border-radius: 15px; background: #f9fafb; border: 1px solid #e5e7eb; text-align: center;">
                <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 15px; text-transform: uppercase;">Forensic Moisture Audit</h4>
                <p style="color: #666; line-height: 1.6; font-size: 1.1rem;">We use infrared sensors to find hidden moisture behind drywall, preventing black mold common in emergency plumbing lake county il calls.</p>
              </div>
              <div style="padding: 30px; border-radius: 15px; background: #f9fafb; border: 1px solid #e5e7eb; text-align: center;">
                <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 15px; text-transform: uppercase;">2026-Spec Extraction</h4>
                <p style="color: #666; line-height: 1.6; font-size: 1.1rem;">Our trucks carry industrial vacuums that clear a flooded bathroom emergency 5x faster than standard gear, protecting your foundation.</p>
              </div>
              <div style="padding: 30px; border-radius: 15px; background: #f9fafb; border: 1px solid #e5e7eb; text-align: center;">
                <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 15px; text-transform: uppercase;">Full Compliance</h4>
                <p style="color: #666; line-height: 1.6; font-size: 1.1rem;">We provide forensic photos and reports to maximize your emergency water damage plumbing claim with Illinois carriers.</p>
              </div>
            </div>
            <div style="display: flex; justify-content: center; margin-top: 50px;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #f97316; color: white; padding: 18px 45px; border-radius: 12px; font-size: 1.4rem; font-weight: 900; text-decoration: none; text-transform: uppercase; box-shadow: 0 4px 15px rgba(249, 115, 22, 0.3);">Get A Licensed Expert Now</a>
            </div>
          </div>
        </div>

        <div style="width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; background: #1e3a8a; color: white; padding: 60px 0;">
          <div style="max-width: 1100px; margin: 0 auto; padding: 0 20px; text-align: center;">
            <h2 style="font-size: 2.2rem; font-weight: 800; margin-bottom: 25px; text-transform: uppercase;">Industrial-Grade Residential & Commercial Solutions</h2>
            <p style="line-height: 1.9; font-size: 1.25rem; margin-bottom: 40px; max-width: 900px; margin-left: auto; margin-right: auto;">
              We provide a clear distinction between residential emergency plumbing and commercial emergency plumbing. Emergency plumbing for businesses requires industrial plumbing emergency repair to prevent expensive downtime and safety code violations. Whether you need a licensed emergency plumber waukegan for a high-traffic retail space or emergency plumbing for homes, our fleet is ready to call emergency plumber now and deploy.
            </p>
            
            <div style="overflow-x: auto; margin-bottom: 40px;">
              <table style="width: 100%; background: white; color: #111827; border-radius: 15px; overflow: hidden; border-collapse: collapse;">
                <thead>
                  <tr style="background-color: #f97316; color: white;">
                    <th style="padding: 20px; text-align: left; text-transform: uppercase;">Service Target Zone</th>
                    <th style="padding: 20px; text-align: left; text-transform: uppercase;">Response Time</th>
                    <th style="padding: 20px; text-align: left; text-transform: uppercase;">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 20px; font-weight: 700;">emergency plumber waukegan il</td>
                    <td style="padding: 20px;">20 Mins</td>
                    <td style="padding: 20px; color: #16a34a; font-weight: 900;">IMMEDIATE</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #eee; background-color: #f9fafb;">
                    <td style="padding: 20px; font-weight: 700;">emergency plumbing lake county il</td>
                    <td style="padding: 20px;">30 Mins</td>
                    <td style="padding: 20px; color: #16a34a; font-weight: 900;">ACTIVE</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a href="tel:${BUSINESS_INFO.phone}" style="display: inline-block; background-color: #ffffff; color: #1e3a8a; padding: 18px 45px; border-radius: 10px; font-size: 1.3rem; font-weight: 900; text-decoration: none; text-transform: uppercase;">Call Commercial Dispatch Now</a>
          </div>
        </div>

        <div style="width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; background: #ffffff; padding: 80px 0;">
          <div style="max-width: 1000px; margin: 0 auto; padding: 0 20px;">
            <h2 style="font-size: 2.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 50px; text-align: center; text-transform: uppercase;">Emergency Plumbing Knowledge Base</h2>
            <div style="display: grid; gap: 40px;">
              <div>
                <h4 style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">1. What is considered a plumbing emergency?</h4>
                <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">A plumbing emergency is any situation that risks immediate property damage or life safety. This includes a burst pipe emergency repair, a major sewer backup repair, a gas line plumbing emergency, or a flooded bathroom emergency. contact our technicians for same day plumbing repair immediately.</p>
              </div>
              <div>
                <h4 style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">2. Who to call for burst pipe in Lake County, IL?</h4>
                <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">Call a licensed emergency plumber waukegan residents have trusted since 2016. We specialize in burst pipe repair near me, providing technical reports required by Illinois insurance carriers to secure your restoration claim instantly.</p>
              </div>
            </div>
            
            <div style="margin-top: 80px; background: #fef2f2; padding: 50px; border-radius: 30px; border: 3px dashed #dc2626; text-align: center;">
              <p style="font-size: 2rem; font-weight: 900; color: #991b1b; margin-bottom: 25px; text-transform: uppercase;">Instant Crisis Dispatch Available</p>
              <div style="display: flex; justify-content: center;">
                <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #dc2626; color: white; padding: 22px 60px; border-radius: 12px; font-size: 1.8rem; font-weight: 900; text-decoration: none; text-transform: uppercase; box-shadow: 0 10px 25px rgba(220, 38, 38, 0.4);">Call Dispatch Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
};
