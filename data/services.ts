import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const primaryCity = illinoisCities[0].city;

export const SERVICES_DATA: Record<string, { title: string, content: string, image: string, intro: string }> = {
  "emergency-repairs": {
    // Title clean rakha hai taake Hero UI doubling na ho (Image 23 fix)
    title: "24/7 Urgent Plumbing Response",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80",
    intro: `Searching for emergency plumbing in waukegan? At ${BUSINESS_INFO.name}, we provide the rapid emergency plumbing service waukegan il homeowners trust. Whether you face a burst pipe emergency repair or need same day plumbing repair, our emergency plumber waukegan il team is available 24/7 to handle any plumbing emergency in Lake County, IL.`,
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; gap: 0; font-family: sans-serif; color: #374151;">
        
        <section style="padding: 60px 10%; background-color: #ffffff; text-align: center;">
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 25px; text-transform: uppercase;">Top-Rated Emergency Plumbing Service in Waukegan, IL</h2>
          <p style="line-height: 1.8; font-size: 1.2rem; margin: 0 auto 35px auto; max-width: 1100px;">
            When a plumbing emergency strikes, you need an emergency plumber near me open now who can arrive within the hour to mitigate property damage. As a premier emergency plumbing company in Illinois, our team specializes in same-day plumbing service and 24 hour plumbing repair. We have established a reputation as the best emergency plumber waukegan il residents rely on during a crisis. We are local experts providing urgent plumbing repair and emergency plumbing services across the entire region. Whether you need an emergency plumbing company or emergency plumbing contractors, we are ready to respond.
          </p>
          <div style="display: flex; justify-content: center;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 18px 40px; border-radius: 12px; font-size: 1.4rem; font-weight: 800; text-decoration: none; text-transform: uppercase; box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3);">Call Emergency Plumber Now</a>
          </div>
        </section>

        <section style="padding: 60px 10%; background-color: #f8fafc; display: flex; flex-wrap: wrap; gap: 40px; align-items: center; border-top: 1px solid #eee; border-bottom: 1px solid #eee;">
          <div style="flex: 1; min-width: 320px;">
            <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a; margin-bottom: 20px; text-transform: uppercase;">Metallurgy & Burst Pipe Emergency Repair</h3>
            <p style="margin-bottom: 15px; line-height: 1.7; font-size: 1.1rem;">
              In Illinois winters, emergency pipe burst repair is common as water expands by 9% when frozen, creating massive internal pressure. Our emergency plumbing waukegan team handles burst pipe emergency repair and emergency pipe burst repair with surgical precision. Most emergency plumbers near me do not have the induction tools required for safe electronic pipe thawing.
            </p>
            <p style="margin-bottom: 30px; line-height: 1.7; font-size: 1.1rem;">
              Whether it is a water leak emergency plumber need or emergency water leak repair, our same day emergency plumber response secures your property. We specialize in emergency pipe repair and leaking pipe emergency mitigation to prevent structural wood rot and foundation erosion.
            </p>
            <div style="display: flex; justify-content: center; lg:justify-content: flex-start;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #1e3a8a; color: white; padding: 14px 30px; border-radius: 8px; font-size: 1.1rem; font-weight: 700; text-decoration: none; text-transform: uppercase;">Request Urgent Pipe Repair</a>
            </div>
          </div>
          <div style="flex: 1; min-width: 320px;">
            <img src="https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80" alt="Repair Service" style="width: 100%; height: auto; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);" />
          </div>
        </section>

        <section style="padding: 80px 10%; background-color: #ffffff;">
          <h3 style="font-weight: 800; font-size: 2.2rem; margin-bottom: 40px; text-transform: uppercase; color: #1e3a8a; text-align: center;">Waukegan Premier Crisis Response Infrastructure</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px;">
            <div style="padding: 35px; border-radius: 15px; background: #f9fafb; border: 1px solid #e5e7eb; text-align: center;">
              <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 15px; text-transform: uppercase;">Forensic Moisture Audit</h4>
              <p style="color: #666; line-height: 1.7; font-size: 1.1rem;">We find moisture behind drywall to prevent mold after a flooded bathroom emergency or emergency water damage plumbing events.</p>
            </div>
            <div style="padding: 35px; border-radius: 15px; background: #f9fafb; border: 1px solid #e5e7eb; text-align: center;">
              <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 15px; text-transform: uppercase;">2026-Spec Extraction</h4>
              <p style="color: #666; line-height: 1.7; font-size: 1.1rem;">Our industrial gear handles emergency drain backup and emergency sewer backup repair 5x faster than standard gear.</p>
            </div>
            <div style="padding: 35px; border-radius: 15px; background: #f9fafb; border: 1px solid #e5e7eb; text-align: center;">
              <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 15px; text-transform: uppercase;">Full Compliance</h4>
              <p style="color: #666; line-height: 1.7; font-size: 1.1rem;">Licensed emergency plumber waukegan experts providing documentation for all emergency plumbing repair near me claims.</p>
            </div>
          </div>
          <div style="display: flex; justify-content: center; margin-top: 50px;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #f97316; color: white; padding: 18px 45px; border-radius: 12px; font-size: 1.4rem; font-weight: 900; text-decoration: none; text-transform: uppercase; box-shadow: 0 4px 15px rgba(249, 115, 22, 0.3);">Get A Licensed Expert Now</a>
          </div>
        </section>

        <section style="padding: 80px 10%; background-color: #1e3a8a; color: white;">
          <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
            <h2 style="font-size: 2.2rem; font-weight: 800; margin-bottom: 25px; text-transform: uppercase;">Industrial-Grade Residential & Commercial Solutions</h2>
            <p style="line-height: 1.9; font-size: 1.2rem; margin-bottom: 40px; max-width: 900px; margin-left: auto; margin-right: auto;">
              We offer residential emergency plumbing and commercial emergency plumbing. From emergency plumbing for homes to industrial plumbing emergency repair for businesses, our 24/7 team is ready. If you are searching for emergency plumbing illinois experts or an emergency plumber illinois company, we deploy immediately.
            </p>
            <div style="overflow-x: auto; margin-bottom: 40px;">
              <table style="width: 100%; max-width: 800px; margin: 0 auto; background: white; color: #111827; border-radius: 15px; overflow: hidden; border-collapse: collapse;">
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
        </section>

        <section style="padding: 80px 10%; background-color: #ffffff;">
          <h2 style="font-size: 2.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 50px; text-align: center; text-transform: uppercase;">Emergency Plumbing Knowledge Base</h2>
          <div style="max-width: 1000px; margin: 0 auto; display: grid; gap: 40px;">
            <div>
              <h4 style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">1. What is considered a plumbing emergency?</h4>
              <p style="color: #4b5563; font-size: 1.1rem; line-height: 1.8;">A plumbing emergency is any situation that risks immediate property damage. This includes a burst pipe emergency repair, a major sewer backup repair, a gas line plumbing emergency, or a flooded bathroom emergency. contact our technicians for same day plumbing repair immediately.</p>
            </div>
            <div>
              <h4 style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">2. Who to call for burst pipe in Waukegan, IL?</h4>
              <p style="color: #4b5563; font-size: 1.1rem; line-height: 1.8;">Call a licensed emergency plumber waukegan residents have trusted since 2016. We specialize in burst pipe repair near me, providing technical reports required by Illinois insurance carriers to secure your restoration claim instantly.</p>
            </div>
            <div>
              <h4 style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">3. Is water heater leak an emergency during winters?</h4>
              <p style="color: #4b5563; font-size: 1.1rem; line-height: 1.8;">Yes, especially if the tank is weeping from the bottom. An emergency water heater repair or emergency water heater replacement is vital because a structural failure can release 50+ gallons of boiling water in seconds, destroying your flooring. Call for same day emergency plumber services instantly.</p>
            </div>
          </div>
          
          <div style="margin-top: 80px; background: #fef2f2; padding: 60px; border-radius: 30px; border: 3px dashed #dc2626; text-align: center;">
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
