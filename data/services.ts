import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const primaryCity = illinoisCities[0].city;

export const SERVICES_DATA: Record<string, { title: string, content: string, image: string, intro: string }> = {
  "emergency-repairs": {
    title: "Emergency Plumbing Service in Waukegan, IL | 24/7 Response",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80",
    intro: `Searching for emergency plumbing in waukegan? At ${BUSINESS_INFO.name}, we provide the emergency plumbing service waukegan il homeowners trust. Whether it is a burst pipe emergency repair or a same day plumbing repair, our emergency plumber waukegan il team is available 24/7 to handle any plumbing emergency in Lake County, IL.`,
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; gap: 0; font-family: 'Inter', sans-serif;">
        
        <section style="width: 100%; padding: 80px 10%; background-color: #ffffff; text-align: center;">
          <h2 style="font-size: clamp(2.2rem, 5vw, 3.5rem); font-weight: 900; color: #1e3a8a; margin-bottom: 30px; text-transform: uppercase; line-height: 1.1;">Top-Rated Emergency Plumbing Service in Waukegan, IL</h2>
          <p style="margin: 0 auto 40px auto; line-height: 2.2; font-size: 1.3rem; color: #374151; max-width: 1100px; text-align: justify;">
            When a plumbing emergency strikes, you don't have time to wait for standard business hours. You need an emergency plumber near me open now who can arrive within the hour to mitigate property damage. As a premier emergency plumbing company in Illinois, our team specializes in same-day plumbing service and 24 hour plumbing repair. We have established a reputation as the best emergency plumber waukegan il residents can rely on during a crisis. We are not just emergency plumbing contractors; we are local experts who understand the unique structural demands of Northern Illinois properties. Whether you are facing a leaking pipe emergency or water leak emergency plumber needs, we provide urgent plumbing repair across the entire Lake County region.
          </p>
          <div style="display: flex; justify-content: center;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 22px 45px; border-radius: 12px; font-size: 1.6rem; font-weight: 900; text-decoration: none; text-transform: uppercase; box-shadow: 0 10px 25px rgba(34, 197, 94, 0.4);">Call The Emergency Plumber Now</a>
          </div>
        </section>

        <section style="width: 100%; display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); background-color: #f8fafc; border-top: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb;">
          <div style="padding: 80px 10%; display: flex; flex-direction: column; justify-content: center;">
            <h3 style="font-size: 2.2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 25px; text-transform: uppercase; line-height: 1.2;">Metallurgy & Thermodynamics of Midwest Pipe Fractures</h3>
            <p style="margin-bottom: 20px; line-height: 1.9; color: #4b5563; font-size: 1.15rem;">
              In Illinois winters, emergency pipe burst repair becomes a mathematical certainty for uninsulated lines. When water inside a copper or PEX pipe drops below freezing, it undergoes a molecular expansion of nearly 9%. This creates internal pressures exceeding 3,500 PSI, which is nearly 10 times the rated capacity of residential plumbing. Most emergency plumbing waukegan calls originate from this specific physical phenomenon.
            </p>
            <p style="margin-bottom: 35px; line-height: 1.9; color: #4b5563; font-size: 1.15rem;">
              Our mitigation involves high-precision Electronic Pipe Thawing (EPT). Unlike competitors who use open-flame torches, we use controlled induction to safely liquefy ice without thermal shock. This preserves your pipe metallurgy and prevents future emergency plumbing leak repair needs. If you are experiencing an emergency pipe repair situation, our same-day emergency plumber response will secure your system and prevent structural moisture saturation.
            </p>
            <div style="display: flex; justify-content: flex-start;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #1e3a8a; color: white; padding: 18px 35px; border-radius: 8px; font-size: 1.2rem; font-weight: 700; text-decoration: none; text-transform: uppercase;">Request Urgent Pipe Repair</a>
            </div>
          </div>
          <div style="min-height: 600px; background: url('https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80') center/cover no-repeat;"></div>
        </section>

        <section style="width: 100%; padding: 80px 10%; background-color: #ffffff;">
          <h3 style="font-weight: 900; font-size: 2.8rem; margin-bottom: 50px; text-transform: uppercase; color: #1e3a8a; text-align: center;">Waukegan's Premier Emergency Plumbing Infrastructure</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px;">
            <div style="padding: 45px 35px; border-radius: 25px; background: #f9fafb; border: 1px solid #e2e8f0; box-shadow: 0 15px 30px rgba(0,0,0,0.05); text-align: center;">
              <h4 style="font-size: 1.6rem; font-weight: 900; color: #1e3a8a; margin-bottom: 20px; text-transform: uppercase;">Forensic Moisture Audit</h4>
              <p style="color: #4b5563; line-height: 2; font-size: 1.1rem;">We use high-grade infrared sensors to ensure no hidden water pockets remain behind your drywall or under your slab, preventing expensive black mold common in emergency plumbing lake county il calls.</p>
            </div>
            <div style="padding: 45px 35px; border-radius: 25px; background: #f9fafb; border: 1px solid #e2e8f0; box-shadow: 0 15px 30px rgba(0,0,0,0.05); text-align: center;">
              <h4 style="font-size: 1.6rem; font-weight: 900; color: #1e3a8a; margin-bottom: 20px; text-transform: uppercase;">2026-Spec Extraction</h4>
              <p style="color: #4b5563; line-height: 2; font-size: 1.1rem;">Our trucks carry industrial-grade vacuums that clear a flooded bathroom emergency 5x faster than standard gear, minimizing the time water has to penetrate your structural foundation.</p>
            </div>
            <div style="padding: 45px 35px; border-radius: 25px; background: #f9fafb; border: 1px solid #e2e8f0; box-shadow: 0 15px 30px rgba(0,0,0,0.05); text-align: center;">
              <h4 style="font-size: 1.6rem; font-weight: 900; color: #1e3a8a; margin-bottom: 20px; text-transform: uppercase;">Full Compliance</h4>
              <p style="color: #4b5563; line-height: 2; font-size: 1.1rem;">We provide high-resolution forensic photos and technical reports to maximize your emergency water damage plumbing claim, speaking the language of adjusters since our founding in 2016.</p>
            </div>
          </div>
          <div style="display: flex; justify-content: center; margin-top: 60px;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #f97316; color: white; padding: 20px 50px; border-radius: 15px; font-size: 1.5rem; font-weight: 900; text-decoration: none; text-transform: uppercase; box-shadow: 0 10px 20px rgba(249, 115, 22, 0.3);">Talk To A Licensed Expert Now</a>
          </div>
        </section>

        <section style="width: 100%; padding: 100px 10%; background-color: #1e3a8a; color: white;">
          <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
            <h2 style="font-size: 2.8rem; font-weight: 900; margin-bottom: 30px; text-transform: uppercase; line-height: 1.1;">Industrial-Grade Residential & Commercial Solutions</h2>
            <p style="line-height: 2.2; font-size: 1.3rem; color: #d1d5db; margin-bottom: 60px;">
              We provide a clear distinction between residential emergency plumbing and commercial emergency plumbing. We recognize that emergency plumbing for businesses requires a different logistical response, often involving industrial plumbing emergency repair to prevent operational downtime. Whether you need a licensed emergency plumber waukegan for a high-traffic retail space or emergency plumbing for homes in North Chicago, our fleet is ready to deploy and execute a emergency plumbing repair service with pinpoint precision.
            </p>
            
            <div style="overflow-x: auto; margin-bottom: 60px;">
              <table style="width: 100%; border-collapse: separate; border-spacing: 0; border-radius: 20px; overflow: hidden; background: white; color: #111827;">
                <thead>
                  <tr style="background-color: #f97316; color: white;">
                    <th style="padding: 30px; text-align: left; font-size: 1.3rem; text-transform: uppercase;">Service Target Zone</th>
                    <th style="padding: 30px; text-align: left; font-size: 1.3rem; text-transform: uppercase;">Average Response</th>
                    <th style="padding: 30px; text-align: left; font-size: 1.3rem; text-transform: uppercase;">Dispatch Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid #e5e7eb;">
                    <td style="padding: 30px; font-weight: 800; font-size: 1.2rem;">emergency plumber waukegan il</td>
                    <td style="padding: 30px; font-size: 1.2rem; color: #4b5563;">15 - 20 Minutes</td>
                    <td style="padding: 30px; color: #16a34a; font-weight: 900;">IMMEDIATE</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e5e7eb; background-color: #f9fafb;">
                    <td style="padding: 30px; font-weight: 800; font-size: 1.2rem;">emergency plumbing lake county il</td>
                    <td style="padding: 30px; font-size: 1.2rem; color: #4b5563;">25 - 30 Minutes</td>
                    <td style="padding: 30px; color: #16a34a; font-weight: 900;">ACTIVE</td>
                  </tr>
                  <tr>
                    <td style="padding: 30px; font-weight: 800; font-size: 1.2rem;">emergency plumbing illinois</td>
                    <td style="padding: 30px; font-size: 1.2rem; color: #4b5563;">Regional Response</td>
                    <td style="padding: 30px; color: #16a34a; font-weight: 900;">OPEN 24/7</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div style="display: flex; justify-content: center;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #ffffff; color: #1e3a8a; padding: 22px 55px; border-radius: 12px; font-size: 1.5rem; font-weight: 900; text-decoration: none; text-transform: uppercase; box-shadow: 0 15px 35px rgba(0,0,0,0.3);">Call Commercial Dispatch Now</a>
            </div>
          </div>
        </section>

        <section style="width: 100%; padding: 100px 10%; background-color: #ffffff;">
          <h2 style="font-size: 3rem; font-weight: 900; color: #1e3a8a; margin-bottom: 60px; text-transform: uppercase; text-align: center; letter-spacing: -2px;">Complete Emergency Plumbing Knowledge Base</h2>
          <div style="max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); gap: 50px;">
            <div>
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 15px; line-height: 1.2;">1. What is considered a plumbing emergency in Waukegan?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.9;">A plumbing emergency is any situation that risks immediate property damage or life safety. This includes a burst pipe emergency repair, a major sewer backup repair, a gas line plumbing emergency, or a flooded bathroom emergency. If you cannot shut off the water source or if there is a risk of structural shift, you should who to call for plumbing emergency—contact our technicians immediately for same day plumbing repair.</p>
            </div>
            <div>
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 15px; line-height: 1.2;">2. Who to call for burst pipe in Lake County, IL?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.9;">You should call a licensed emergency plumber waukegan residents have trusted since our establishment in 2016. We specialize in burst pipe repair near me, providing technical engineering reports required by Illinois insurance carriers to secure your restoration claim. Our same-day plumbing service ensures your property is stabilized against high-pressure hydraulic failure instantly.</p>
            </div>
            <div>
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 15px; line-height: 1.2;">3. Is water heater leak an emergency during winters?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.9;">Yes, especially if the tank is weeping from the bottom. An emergency water heater repair or emergency water heater replacement is vital because a structural tank failure can release 50 or more gallons of boiling water in seconds, destroying your flooring. During Midwest winters, losing hot water also risks frozen pipes in unheated crawlspaces. Call for same day emergency plumber services instantly.</p>
            </div>
            <div>
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 15px; line-height: 1.2;">4. Signs you need emergency plumbing service near me?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.9;">Look for sudden low water pressure, gurgling in your drains, unexplained moisture on drywall, or a spinning water meter when no taps are open. These indicate that you need an emergency plumbing service near me right away. Additionally, the smell of rotten eggs is a sign of a gas line plumbing emergency that requires immediate evacuation and dispatch.</p>
            </div>
          </div>
          
          <div style="margin-top: 100px; background: #fef2f2; padding: 70px 5%; border-radius: 40px; border: 4px dashed #dc2626; text-align: center;">
            <p style="font-size: 2.2rem; font-weight: 900; color: #991b1b; margin-bottom: 25px; text-transform: uppercase;">Instant Crisis Dispatch Available</p>
            <p style="font-size: 1.4rem; color: #b91c1c; margin-bottom: 40px; font-weight: 600;">Licensed technicians are currently on standby for Waukegan, Beach Park, and Zion.</p>
            <div style="display: flex; justify-content: center;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #dc2626; color: white; padding: 25px 70px; border-radius: 20px; font-size: 2.2rem; font-weight: 900; text-decoration: none; text-transform: uppercase; box-shadow: 0 20px 45px rgba(220, 38, 38, 0.4);">Call Dispatch Now</a>
            </div>
          </div>
        </section>
      </div>
    `
  }
};
