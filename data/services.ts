import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const primaryCity = illinoisCities[0].city;

export const SERVICES_DATA: Record<string, { title: string, content: string, image: string, intro: string }> = {
  "emergency-repairs": {
    // Title clean rakha hai taake Hero mein doubling na ho
    title: "24/7 Professional Crisis Response",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80",
    intro: `Looking for emergency plumbing in waukegan? At ${BUSINESS_INFO.name}, we offer the emergency plumbing service waukegan il homeowners trust. Whether you face a burst pipe emergency repair or need same day plumbing repair, our emergency plumber waukegan il team is available 24/7 for any plumbing emergency in Lake County, IL.`,
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; font-family: sans-serif; overflow-x: hidden;">
        
        <section style="width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; padding: 60px 10%; background: #ffffff; text-align: center;">
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 20px; text-transform: uppercase;">Top-Rated Emergency Plumbing Service in Waukegan, IL</h2>
          <p style="margin: 0 auto 30px auto; line-height: 1.8; font-size: 1.15rem; color: #374151; max-width: 900px;">
            When a plumbing emergency strikes, you need an emergency plumber near me open now who can arrive within the hour. As a premier emergency plumbing company in Illinois, we specialize in same-day plumbing service and 24 hour plumbing repair. We are the best emergency plumber waukegan il residents rely on. We are not just emergency plumbing contractors; we are local experts for urgent plumbing repair and emergency plumbing services across Lake County, IL.
          </p>
          <div style="display: flex; justify-content: center;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 16px 35px; border-radius: 10px; font-size: 1.2rem; font-weight: 800; text-decoration: none; text-transform: uppercase; box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);">Call Emergency Plumber Now</a>
          </div>
        </section>

        <section style="width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; display: flex; flex-wrap: wrap; background-color: #f8fafc; border-top: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb;">
          <div style="flex: 1; min-width: 320px; padding: 60px 10%; display: flex; flex-direction: column; justify-content: center;">
            <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a; margin-bottom: 20px; text-transform: uppercase;">Metallurgy & Thermodynamics of Pipe Fractures</h3>
            <p style="margin-bottom: 15px; line-height: 1.7; color: #4b5563; font-size: 1.1rem;">
              In Illinois winters, emergency pipe burst repair is common as water expands by 9% when frozen, creating 3,500 PSI of internal pressure. Our emergency plumbing waukegan team handles burst pipe emergency repair and emergency pipe burst repair with surgical precision.
            </p>
            <p style="margin-bottom: 25px; line-height: 1.7; color: #4b5563; font-size: 1.1rem;">
              We use induction for emergency plumbing leak repair, preserving metallurgy. Whether it is a water leak emergency plumber need or emergency water leak repair, our same day emergency plumber response secures your property.
            </p>
            <a href="tel:${BUSINESS_INFO.phone}" style="width: fit-content; background-color: #1e3a8a; color: white; padding: 14px 28px; border-radius: 8px; font-size: 1rem; font-weight: 700; text-decoration: none;">Request Urgent Pipe Repair</a>
          </div>
          <div style="flex: 1; min-width: 320px; min-height: 450px; background: url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80') center/cover no-repeat;"></div>
        </section>

        <section style="width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; padding: 60px 10%; background-color: #ffffff;">
          <h3 style="font-weight: 800; font-size: 2.2rem; margin-bottom: 40px; text-transform: uppercase; color: #1e3a8a; text-align: center;">Why We Are Waukegan's Leading Service</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px;">
            <div style="padding: 30px; border-radius: 15px; background: #f9fafb; border: 1px solid #e5e7eb; text-align: center;">
              <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 15px;">Forensic Moisture Audit</h4>
              <p style="color: #4b5563; line-height: 1.6;">We find moisture behind drywall to prevent mold after a flooded bathroom emergency or emergency water damage plumbing event.</p>
            </div>
            <div style="padding: 30px; border-radius: 15px; background: #f9fafb; border: 1px solid #e5e7eb; text-align: center;">
              <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 15px;">2026-Spec Extraction</h4>
              <p style="color: #4b5563; line-height: 1.6;">Our industrial gear handles emergency drain backup and emergency sewer backup repair 5x faster than competitors.</p>
            </div>
            <div style="padding: 30px; border-radius: 15px; background: #f9fafb; border: 1px solid #e5e7eb; text-align: center;">
              <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 15px;">Full Compliance</h4>
              <p style="color: #4b5563; line-height: 1.6;">Licensed emergency plumber waukegan experts providing documentation for emergency plumbing repair near me needs.</p>
            </div>
          </div>
        </section>

        <section style="width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; padding: 60px 10%; background-color: #1e3a8a; color: white;">
          <h3 style="font-size: 2rem; font-weight: 800; margin-bottom: 20px; text-transform: uppercase; text-align: center;">Residential & Commercial Emergency Plumbing</h3>
          <p style="line-height: 1.8; font-size: 1.1rem; margin-bottom: 40px; text-align: center; max-width: 900px; margin-left: auto; margin-right: auto;">
            We offer residential emergency plumbing and commercial emergency plumbing. From emergency plumbing for homes to industrial plumbing emergency repair for emergency plumbing for businesses, our 24/7 emergency plumber near me team is ready.
          </p>
          <div style="max-width: 800px; margin: 0 auto;">
            <table style="width: 100%; border-collapse: collapse; background: white; color: #111827; border-radius: 10px; overflow: hidden;">
              <thead>
                <tr style="background-color: #f97316; color: white;">
                  <th style="padding: 15px; text-align: left;">Location Keyword</th>
                  <th style="padding: 15px; text-align: left;">Response Time</th>
                  <th style="padding: 15px; text-align: left;">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 15px;">emergency plumber waukegan</td>
                  <td style="padding: 15px;">20 Mins</td>
                  <td style="padding: 15px; color: #16a34a; font-weight: 800;">ACTIVE</td>
                </tr>
                <tr>
                  <td style="padding: 15px;">emergency plumbing lake county il</td>
                  <td style="padding: 15px;">30 Mins</td>
                  <td style="padding: 15px; color: #16a34a; font-weight: 800;">ACTIVE</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="display: flex; justify-content: center; margin-top: 40px;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #ffffff; color: #1e3a8a; padding: 15px 40px; border-radius: 8px; font-size: 1.2rem; font-weight: 800; text-decoration: none;">CALL COMMERCIAL DISPATCH</a>
          </div>
        </section>

        <section style="width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; padding: 80px 10%; background: #ffffff;">
          <h3 style="font-size: 2.2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 50px; text-align: center; text-transform: uppercase;">Emergency Plumbing Knowledge Base</h3>
          <div style="max-width: 1000px; margin: 0 auto; display: grid; gap: 40px;">
            <div>
              <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px;">1. What is considered a plumbing emergency?</h4>
              <p style="line-height: 1.8; color: #4b5563;">A plumbing emergency risks property or safety. This includes burst pipe repair near me, gas line plumbing emergency, or emergency clogged drain. Who to call for plumbing emergency? Contact us for same day plumbing repair.</p>
            </div>
            <div>
              <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px;">2. Who to call for burst pipe in Waukegan, IL?</h4>
              <p style="line-height: 1.8; color: #4b5563;">Call a licensed emergency plumber waukegan residents trust. We handle emergency pipe repair and emergency plumbing repair service with 24/7 emergency plumbing availability.</p>
            </div>
            <div>
              <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px;">3. Is water heater leak an emergency?</h4>
              <p style="line-height: 1.8; color: #4b5563;">Yes. Emergency water heater repair or emergency water heater replacement is critical for an emergency water heater leaking. Call for a same day emergency plumber.</p>
            </div>
            <div>
              <h4 style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px;">4. Signs you need emergency plumbing service?</h4>
              <p style="line-height: 1.8; color: #4b5563;">Signs include toilet overflow, sink overflow, or gurgling drains. Call emergency plumber now for urgent plumbing repair.</p>
            </div>
          </div>
          
          <div style="margin-top: 60px; text-align: center; background: #fef2f2; padding: 40px; border-radius: 20px; border: 2px dashed #dc2626;">
            <p style="font-size: 1.8rem; font-weight: 900; color: #991b1b; margin-bottom: 20px;">NEED HELP NOW?</p>
            <a href="tel:${BUSINESS_INFO.phone}" style="display: inline-block; background-color: #dc2626; color: white; padding: 18px 50px; border-radius: 10px; font-size: 1.5rem; font-weight: 800; text-decoration: none;">CALL DISPATCH NOW</a>
          </div>
        </section>
      </div>
    `
  }
};
