import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const primaryCity = illinoisCities[0].city;

export const SERVICES_DATA: Record<string, { title: string, content: string, image: string, intro: string }> = {
  "emergency-repairs": {
    // Generic title to stop doubling in Hero UI
    title: "24/7 Professional Urgent Response",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80",
    intro: `Searching for emergency plumbing in waukegan? At ${BUSINESS_INFO.name}, we provide a rapid emergency plumbing service waukegan il homeowners trust. Whether it is a burst pipe emergency repair or a same day plumbing repair, our licensed technicians are available 24/7 to handle any plumbing emergency in Lake County, IL.`,
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; overflow-x: hidden; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #374151;">
        
        <section style="width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; padding: 60px 10%; background: #ffffff; text-align: center;">
          <h2 style="font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 800; color: #1e3a8a; margin-bottom: 25px; text-transform: uppercase; line-height: 1.2;">Top-Rated Emergency Plumbing Service in Waukegan, IL</h2>
          <p style="margin: 0 auto 35px auto; line-height: 2; font-size: 1.2rem; color: #374151; max-width: 1000px; text-align: center;">
            When a plumbing emergency strikes your property, you don't have time to wait for standard business hours. You need an emergency plumber near me open now who can arrive within the hour to mitigate property damage. As a premier emergency plumbing company in Illinois, our team specializes in same-day plumbing service and 24 hour plumbing repair. We have established a reputation as the best emergency plumber waukegan il residents can rely on during a crisis. We are not just emergency plumbing contractors; we are local experts who understand the unique structural demands of Northern Illinois properties. Whether you are facing a leaking pipe emergency or require a water leak emergency plumber, we provide urgent plumbing repair across the entire Lake County region.
          </p>
          <div style="display: flex; justify-content: center;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 18px 40px; border-radius: 10px; font-size: 1.3rem; font-weight: 800; text-decoration: none; text-transform: uppercase; box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3);">Call Emergency Plumber Now</a>
          </div>
        </section>

        <section style="width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; display: flex; flex-wrap: wrap; background-color: #f8fafc; border-top: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb;">
          <div style="flex: 1; min-width: 320px; padding: 60px 10%; display: flex; flex-direction: column; justify-content: center;">
            <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a; margin-bottom: 20px; text-transform: uppercase;">Midwest Metallurgy & Burst Pipe Emergency Repair</h3>
            <p style="margin-bottom: 15px; line-height: 1.8; color: #4b5563; font-size: 1.15rem;">
              In Illinois winters, emergency pipe burst repair becomes a mathematical certainty for uninsulated lines. When water inside a copper or PEX pipe drops below freezing, it undergoes a molecular expansion of nearly 9%. This creates internal pressures exceeding 3,500 PSI, which is nearly 10 times the rated capacity of residential plumbing. Most emergency plumbing waukegan calls originate from this physical phenomenon where metal fails under load.
            </p>
            <p style="margin-bottom: 30px; line-height: 1.8; color: #4b5563; font-size: 1.15rem;">
              Our mitigation involves high-precision Electronic Pipe Thawing (EPT). Unlike competitors who use open-flame torches, we use controlled induction to safely liquefy ice without thermal shock. This preserves your pipe metallurgy and prevents future emergency plumbing leak repair needs. If you are experiencing an emergency pipe repair, our same-day emergency plumber response will secure your system instantly.
            </p>
            <div style="display: flex; justify-content: flex-start;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #1e3a8a; color: white; padding: 14px 30px; border-radius: 8px; font-size: 1rem; font-weight: 700; text-decoration: none; text-transform: uppercase;">Request Urgent Pipe Repair</a>
            </div>
          </div>
          <div style="flex: 1; min-width: 320px; min-height: 450px; background: url('https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80') center/cover no-repeat;"></div>
        </section>

        <section style="width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; padding: 60px 10%; background-color: #ffffff;">
          <h3 style="font-weight: 800; font-size: 2.2rem; margin-bottom: 40px; text-transform: uppercase; color: #1e3a8a; text-align: center;">Waukegan Premier Crisis Response Infrastructure</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
            <div style="padding: 35px; border-radius: 20px; background: #f9fafb; border: 1px solid #e5e7eb; text-align: center;">
              <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 15px; text-transform: uppercase;">Forensic Moisture Audit</h4>
              <p style="color: #4b5563; line-height: 1.7; font-size: 1.1rem;">We use high-grade infrared sensors to ensure no hidden water pockets remain behind drywall, preventing black mold common in emergency plumbing lake county il calls.</p>
            </div>
            <div style="padding: 35px; border-radius: 20px; background: #f9fafb; border: 1px solid #e5e7eb; text-align: center;">
              <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 15px; text-transform: uppercase;">2026-Spec Extraction</h4>
              <p style="color: #4b5563; line-height: 1.7; font-size: 1.1rem;">Our trucks carry industrial vacuums that clear a flooded bathroom emergency 5x faster than standard gear, minimizing time water has to penetrate your foundation.</p>
            </div>
            <div style="padding: 35px; border-radius: 20px; background: #f9fafb; border: 1px solid #e5e7eb; text-align: center;">
              <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 15px; text-transform: uppercase;">Insurance Compliance</h4>
              <p style="color: #4b5563; line-height: 1.7; font-size: 1.1rem;">We provide high-resolution forensic photos and engineering reports to maximize your emergency water damage plumbing claim, speaking the language of adjusters since 2016.</p>
            </div>
          </div>
          <div style="display: flex; justify-content: center; margin-top: 50px;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #f97316; color: white; padding: 18px 45px; border-radius: 12px; font-size: 1.4rem; font-weight: 900; text-decoration: none; text-transform: uppercase; box-shadow: 0 4px 15px rgba(249, 115, 22, 0.3);">Get A Licensed Expert Now</a>
          </div>
        </section>

        <section style="width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; padding: 80px 10%; background-color: #1e3a8a; color: white;">
          <div style="max-width: 1100px; margin: 0 auto; text-align: center;">
            <h2 style="font-size: 2.2rem; font-weight: 800; margin-bottom: 25px; text-transform: uppercase;">Industrial-Grade Residential & Commercial Solutions</h2>
            <p style="line-height: 1.9; font-size: 1.2rem; color: #d1d5db; margin-bottom: 40px;">
              We provide a clear distinction between residential emergency plumbing and commercial emergency plumbing. Emergency plumbing for businesses requires industrial plumbing emergency repair to prevent expensive downtime. Whether you need a licensed emergency plumber waukegan for a retail space or emergency plumbing for homes, our fleet is ready to call emergency plumber now and deploy.
            </p>
            
            <div style="overflow-x: auto; margin-bottom: 40px;">
              <table style="width: 100%; border-collapse: collapse; background: white; color: #111827; border-radius: 15px; overflow: hidden;">
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
                  <tr>
                    <td style="padding: 20px; font-weight: 700;">emergency plumber illinois</td>
                    <td style="padding: 20px;">Regional</td>
                    <td style="padding: 20px; color: #16a34a; font-weight: 900;">OPEN 24/7</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a href="tel:${BUSINESS_INFO.phone}" style="display: inline-block; background-color: #ffffff; color: #1e3a8a; padding: 18px 45px; border-radius: 10px; font-size: 1.3rem; font-weight: 900; text-decoration: none; text-transform: uppercase;">Call Commercial Dispatch Now</a>
          </div>
        </section>

        <section style="width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; padding: 80px 10%; background-color: #ffffff;">
          <h2 style="font-size: 2.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 50px; text-align: center; text-transform: uppercase;">Emergency Plumbing Knowledge Base</h2>
          <div style="max-width: 1000px; margin: 0 auto; display: grid; gap: 40px;">
            <div>
              <h4 style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px;">1. What is considered a plumbing emergency in Illinois?</h4>
              <p style="color: #4b5563; font-size: 1.1rem; line-height: 1.8;">A plumbing emergency is any situation that risks property damage or life safety. This includes a burst pipe emergency repair, a major sewer backup repair, a gas line plumbing emergency, or a flooded bathroom emergency. If you cannot shut off the source, contact our technicians for same day plumbing repair immediately.</p>
            </div>
            <div>
              <h4 style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px;">2. Who to call for burst pipe in Lake County, IL?</h4>
              <p style="color: #4b5563; font-size: 1.1rem; line-height: 1.8;">Call a licensed emergency plumber waukegan residents have trusted since 2016. We specialize in burst pipe repair near me, providing technical reports required by Illinois insurance carriers to secure your restoration claim. Our same-day plumbing service ensures your property is stabilized instantly.</p>
            </div>
            <div>
              <h4 style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px;">3. Is water heater leak an emergency during winters?</h4>
              <p style="color: #4b5563; font-size: 1.1rem; line-height: 1.8;">Yes, especially if the tank is weeping from the bottom. An emergency water heater repair or emergency water heater replacement is vital because a structural failure can release 50+ gallons of boiling water in seconds, destroying your flooring. Call for same day emergency plumber services instantly.</p>
            </div>
            <div>
              <h4 style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px;">4. Signs you need emergency plumbing service near me?</h4>
              <p style="color: #4b5563; font-size: 1.1rem; line-height: 1.8;">Look for sudden low water pressure, gurgling in your drains, unexplained moisture on drywall, or a spinning water meter when no taps are open. These indicate that you need an emergency plumbing service near me right away. Additionally, the smell of rotten eggs is a sign of a gas line plumbing emergency.</p>
            </div>
          </div>
          
          <div style="margin-top: 80px; background: #fef2f2; padding: 60px; border-radius: 30px; border: 3px dashed #dc2626; text-align: center;">
            <p style="font-size: 2rem; font-weight: 900; color: #991b1b; margin-bottom: 25px; text-transform: uppercase;">Instant Crisis Dispatch Available</p>
            <p style="font-size: 1.3rem; color: #b91c1c; margin-bottom: 35px; font-weight: 600;">Licensed technicians are currently on standby for Waukegan, Beach Park, and Zion.</p>
            <div style="display: flex; justify-content: center;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #dc2626; color: white; padding: 22px 60px; border-radius: 12px; font-size: 1.8rem; font-weight: 900; text-decoration: none; text-transform: uppercase; box-shadow: 0 10px 25px rgba(220, 38, 38, 0.4);">Call Dispatch Now</a>
            </div>
          </div>
        </section>
      </div>
    `
  }
};
