import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const primaryCity = illinoisCities[0].city;

export const SERVICES_DATA: Record<string, { title: string, content: string, image: string, intro: string }> = {
  "emergency-repairs": {
    title: "24/7 Professional Urgent Plumbing Response",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80",
    intro: `Searching for emergency plumbing in waukegan? At ${BUSINESS_INFO.name}, we provide the rapid emergency plumbing service waukegan il homeowners trust. Whether it is a burst pipe emergency repair or a same day plumbing repair, our emergency plumber waukegan il team is available 24/7 to handle any plumbing emergency in Lake County, IL.`,
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; gap: 0; font-family: sans-serif; color: #374151;">
        
        <section style="padding: 60px 10%; background-color: #ffffff; text-align: center;">
          <h2 style="font-size: 2.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 25px; text-transform: uppercase;">Top-Rated Emergency Plumbing Service in Waukegan, IL</h2>
          <p style="line-height: 1.9; font-size: 1.2rem; margin: 0 auto 35px auto; max-width: 1050px; text-align: center;">
            When a plumbing emergency strikes, you need an emergency plumber near me open now who can arrive within the hour to mitigate property damage. As a premier emergency plumbing company in Illinois, our team specializes in same-day plumbing service and 24 hour plumbing repair. We have established a reputation as the best emergency plumber waukegan il residents rely on during a crisis since our founding in 2016. We provide urgent plumbing repair and emergency plumbing services across the entire region, including Beach Park, Zion, and Park City.
          </p>
          <div style="display: flex; justify-content: center;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 20px 45px; border-radius: 12px; font-size: 1.5rem; font-weight: 800; text-decoration: none; text-transform: uppercase; box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3);">Call Emergency Plumber Now</a>
          </div>
        </section>

        <section style="padding: 60px 10%; background-color: #f8fafc; display: flex; flex-wrap: wrap; gap: 50px; align-items: center; border-top: 1px solid #eee; border-bottom: 1px solid #eee;">
          <div style="flex: 1; min-width: 350px;">
            <h3 style="font-size: 2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 20px; text-transform: uppercase;">Metallurgy & Burst Pipe Emergency Repair</h3>
            <p style="margin-bottom: 20px; line-height: 1.8; font-size: 1.15rem;">
              In Illinois winters, emergency pipe burst repair is common as frozen water expands by nearly 9%. Our emergency plumbing waukegan team handles burst pipe emergency repair and emergency pipe burst repair with surgical precision. We use induction for emergency plumbing leak repair, preserving metallurgy and preventing future leaking pipe emergency situations.
            </p>
            <p style="margin-bottom: 30px; line-height: 1.8; font-size: 1.15rem;">
              Whether it is a water leak emergency plumber need or emergency water leak repair, our same day emergency plumber response secures your property. We specialize in emergency pipe repair and flooded bathroom emergency mitigation to prevent structural wood rot and foundation erosion.
            </p>
            <div style="display: flex; justify-content: center; lg:justify-content: flex-start;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #1e3a8a; color: white; padding: 16px 35px; border-radius: 8px; font-size: 1.1rem; font-weight: 700; text-decoration: none; text-transform: uppercase;">Request Urgent Pipe Repair</a>
            </div>
          </div>
          <div style="flex: 1; min-width: 350px;">
            <img src="https://images.unsplash.com/photo-1517646281694-22d63636788a?auto=format&fit=crop&q=80" alt="Burst Pipe Emergency Repair" style="width: 100%; height: auto; border-radius: 20px; box-shadow: 0 15px 35px rgba(0,0,0,0.15);" />
          </div>
        </section>

        <section style="padding: 80px 10%; background-color: #ffffff;">
          <h3 style="font-weight: 800; font-size: 2.5rem; margin-bottom: 50px; text-transform: uppercase; color: #1e3a8a; text-align: center;">Waukegan Premier Crisis Response Infrastructure</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px;">
            <div style="padding: 40px; border-radius: 20px; background: #f9fafb; border: 1px solid #e5e7eb; text-align: center;">
              <h4 style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 15px; text-transform: uppercase;">Forensic Moisture Audit</h4>
              <p style="color: #666; line-height: 1.7; font-size: 1.1rem;">We find moisture behind drywall to prevent mold after a flooded bathroom emergency or emergency water damage plumbing event.</p>
            </div>
            <div style="padding: 40px; border-radius: 20px; background: #f9fafb; border: 1px solid #e5e7eb; text-align: center;">
              <h4 style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 15px; text-transform: uppercase;">2026-Spec Extraction</h4>
              <p style="color: #666; line-height: 1.7; font-size: 1.1rem;">Our industrial gear handles emergency drain backup and emergency sewer backup repair 5x faster than standard gear.</p>
            </div>
            <div style="padding: 40px; border-radius: 20px; background: #f9fafb; border: 1px solid #e5e7eb; text-align: center;">
              <h4 style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 15px; text-transform: uppercase;">Full Compliance</h4>
              <p style="color: #666; line-height: 1.7; font-size: 1.1rem;">Licensed emergency plumber waukegan experts providing documentation for emergency plumbing repair near me claims.</p>
            </div>
          </div>
          <div style="display: flex; justify-content: center; margin-top: 60px;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #f97316; color: white; padding: 22px 50px; border-radius: 12px; font-size: 1.5rem; font-weight: 900; text-decoration: none; text-transform: uppercase; box-shadow: 0 10px 25px rgba(249, 115, 22, 0.3);">Talk To A Licensed Expert Now</a>
          </div>
        </section>

        <section style="padding: 80px 10%; background-color: #1e3a8a; color: white;">
          <div style="max-width: 1100px; margin: 0 auto; text-align: center;">
            <h2 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 30px; text-transform: uppercase;">Industrial-Grade Residential & Commercial Solutions</h2>
            <p style="line-height: 1.9; font-size: 1.3rem; margin: 0 auto 50px auto; text-align: center; max-width: 1000px;">
              We offer residential emergency plumbing and commercial emergency plumbing. From emergency plumbing for homes to industrial plumbing emergency repair for businesses, our 24/7 team is ready. If you are searching for emergency plumbing illinois experts or an emergency plumber illinois company, we deploy immediately to secure your facility.
            </p>
            <div style="overflow-x: auto; margin-bottom: 40px;">
              <table style="width: 100%; max-width: 900px; margin: 0 auto; background: white; color: #111827; border-radius: 15px; overflow: hidden; border-collapse: collapse;">
                <thead>
                  <tr style="background-color: #f97316; color: white;">
                    <th style="padding: 25px; text-align: left; text-transform: uppercase;">Target Location</th>
                    <th style="padding: 25px; text-align: left; text-transform: uppercase;">Avg. Response</th>
                    <th style="padding: 25px; text-align: left; text-transform: uppercase;">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 25px; font-weight: 700;">emergency plumber waukegan il</td>
                    <td style="padding: 25px;">20 Mins</td>
                    <td style="padding: 25px; color: #16a34a; font-weight: 900;">IMMEDIATE</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #eee; background-color: #f9fafb;">
                    <td style="padding: 25px; font-weight: 700;">emergency plumbing lake county il</td>
                    <td style="padding: 25px;">30 Mins</td>
                    <td style="padding: 25px; color: #16a34a; font-weight: 900;">ACTIVE</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a href="tel:${BUSINESS_INFO.phone}" style="display: inline-block; background-color: #ffffff; color: #1e3a8a; padding: 20px 50px; border-radius: 10px; font-size: 1.4rem; font-weight: 900; text-decoration: none; text-transform: uppercase;">Call Commercial Dispatch Now</a>
          </div>
        </section>

        <section style="padding: 100px 10%; background-color: #ffffff;">
          <h2 style="font-size: 3rem; font-weight: 900; color: #1e3a8a; margin-bottom: 60px; text-align: center; text-transform: uppercase; letter-spacing: -2px;">Emergency Plumbing Knowledge Hub</h2>
          <div style="max-width: 1100px; margin: 0 auto; display: grid; gap: 40px;">
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.6rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">1. What is considered a plumbing emergency?</h4>
              <p style="color: #4b5563; font-size: 1.2rem; line-height: 1.9;">A plumbing emergency risks immediate property damage or life safety. This includes a burst pipe emergency repair, a major sewer backup repair, a gas line plumbing emergency, or a total flooded bathroom emergency. contact us for same day plumbing repair.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.6rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">2. Who to call for burst pipe in Waukegan, IL?</h4>
              <p style="color: #4b5563; font-size: 1.2rem; line-height: 1.9;">Call a licensed emergency plumber waukegan residents have trusted since our founding in 2016. We specialize in burst pipe repair near me, providing technical reports for insurance claims.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.6rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">3. Is a plumbing leak an emergency?</h4>
              <p style="color: #4b5563; font-size: 1.2rem; line-height: 1.9;">If the leak is behind a wall or under a slab, it is a high-intent emergency. A leaking pipe emergency can wash away foundation soil, leading to structural shifts. Call for emergency plumbing leak repair immediately.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.6rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">4. Is a clogged drain an emergency?</h4>
              <p style="color: #4b5563; font-size: 1.2rem; line-height: 1.9;">If the clog causes raw sewage to backup into your home, it is an emergency clogged drain and a health biohazard. Call for an emergency sewer backup repair instantly.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.6rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">5. Is a water heater leak an emergency?</h4>
              <p style="color: #4b5563; font-size: 1.2rem; line-height: 1.9;">Yes. An emergency water heater repair or emergency water heater replacement is vital if the tank fails, as it can release 50+ gallons of boiling water in seconds.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.6rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">6. How fast should an emergency plumber respond?</h4>
              <p style="color: #4b5563; font-size: 1.2rem; line-height: 1.9;">In Lake County, an urgent plumbing repair response should be under 60 minutes. We strive for a 30-minute window for all emergency plumbing in waukegan il calls.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.6rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">7. What to do in a plumbing emergency before help arrives?</h4>
              <p style="color: #4b5563; font-size: 1.2rem; line-height: 1.9;">Locate your main water shut-off and turn it clockwise. Then, shut off the power to your water heater and call emergency plumber now at our hotline.</p>
            </div>
            <div>
              <h4 style="font-size: 1.6rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">8. Signs you need emergency plumbing service near me?</h4>
              <p style="color: #4b5563; font-size: 1.2rem; line-height: 1.9;">Look for sudden low pressure, gurgling drains, moisture on drywall, or a spinning meter when taps are closed. Call for an emergency plumbing service near me right away.</p>
            </div>
          </div>
          
          <div style="margin-top: 80px; background: #fff5f5; padding: 70px 5%; border-radius: 40px; border: 3px dashed #f56565; text-align: center;">
            <p style="font-size: 2.2rem; font-weight: 900; color: #c53030; margin-bottom: 30px; text-transform: uppercase;">Instant Crisis Dispatch Available Now</p>
            <div style="display: flex; justify-content: center;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #c53030; color: white; padding: 25px 70px; border-radius: 15px; font-size: 2.2rem; font-weight: 900; text-decoration: none; text-transform: uppercase; box-shadow: 0 10px 30px rgba(197, 48, 48, 0.4);">Call Dispatch Now</a>
            </div>
          </div>
        </section>
      </div>
    `
  }
};
