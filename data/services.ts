import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const primaryCity = illinoisCities[0].city;

export const SERVICES_DATA: Record<string, { title: string, content: string, image: string, intro: string }> = {
  "emergency-repairs": {
    // Title clean rakha hai taake Hero UI doubling na ho
    title: "24/7 Professional Urgent Plumbing Response",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
    intro: `Searching for emergency plumbing in waukegan? At ${BUSINESS_INFO.name}, we provide the rapid emergency plumbing service waukegan il homeowners trust. Whether it is a burst pipe emergency repair or a same day plumbing repair, our emergency plumber waukegan il team is available 24/7 to handle any plumbing emergency in Lake County, IL.`,
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; gap: 0; font-family: sans-serif; color: #374151;">
        
        <section style="padding: 80px 10%; background-color: #ffffff; text-align: center;">
          <h2 style="font-size: clamp(2rem, 5vw, 3rem); font-weight: 800; color: #1e3a8a; margin-bottom: 25px; text-transform: uppercase;">Top-Rated Emergency Plumbing Service in Waukegan, IL</h2>
          <p style="line-height: 1.9; font-size: 1.2rem; margin: 0 auto 35px auto; max-width: 1100px;">
            When a plumbing emergency strikes your property, you don't have time to wait for standard business hours. You need an emergency plumber near me open now who can arrive within the hour to mitigate property damage. As a premier emergency plumbing company in Illinois, our team specializes in same-day plumbing service and 24 hour plumbing repair. We have established a reputation as the best emergency plumber waukegan il residents can rely on during a crisis. We are not just emergency plumbing contractors; we are local experts for urgent plumbing repair and emergency plumbing services across Lake County, IL.
          </p>
          <div style="display: flex; justify-content: center;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 20px 45px; border-radius: 12px; font-size: 1.5rem; font-weight: 800; text-decoration: none; text-transform: uppercase; box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3);">Call Emergency Plumber Now</a>
          </div>
        </section>

        <section style="padding: 80px 10%; background-color: #f8fafc; display: flex; flex-wrap: wrap; gap: 50px; align-items: center; border-top: 1px solid #eee; border-bottom: 1px solid #eee;">
          <div style="flex: 1; min-width: 350px;">
            <h3 style="font-size: 2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 20px; text-transform: uppercase;">Metallurgy & Burst Pipe Emergency Repair</h3>
            <p style="margin-bottom: 20px; line-height: 1.8; font-size: 1.15rem;">
              In Illinois winters, emergency pipe burst repair becomes a mathematical certainty for uninsulated lines. When water inside a copper or PEX pipe drops below freezing, it expands by nearly 9%. This creates internal pressures exceeding 3,500 PSI, which is nearly 10 times the rated capacity of residential plumbing. Most emergency plumbing waukegan calls originate from this physical phenomenon.
            </p>
            <p style="margin-bottom: 30px; line-height: 1.8; font-size: 1.15rem;">
              Our emergency plumber near waukegan team handles emergency pipe repair and emergency plumbing leak repair with surgical precision. Whether it is a water leak emergency plumber need or emergency water leak repair, our same day emergency plumber response secures your system instantly. We provide the 24/7 emergency plumber near me service residents rely on for flooded bathroom emergency mitigation.
            </p>
            <div style="display: flex; justify-content: center;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #1e3a8a; color: white; padding: 18px 35px; border-radius: 8px; font-size: 1.2rem; font-weight: 700; text-decoration: none; text-transform: uppercase;">Request Urgent Pipe Repair</a>
            </div>
          </div>
          <div style="flex: 1; min-width: 350px;">
            <img src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80" alt="Plumbing Emergency Repair" style="width: 100%; height: auto; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);" />
          </div>
        </section>

        <section style="padding: 80px 10%; background-color: #ffffff;">
          <h3 style="font-weight: 800; font-size: 2.5rem; margin-bottom: 50px; text-transform: uppercase; color: #1e3a8a; text-align: center;">Waukegan Premier Crisis Response Infrastructure</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
            <div style="padding: 40px; border-radius: 20px; background: #f9fafb; border: 1px solid #e5e7eb; text-align: center;">
              <h4 style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 15px; text-transform: uppercase;">Forensic Moisture Audit</h4>
              <p style="color: #666; line-height: 1.7; font-size: 1.1rem;">We find moisture behind drywall after a flooded bathroom emergency or emergency water damage plumbing event to prevent black mold in emergency plumbing lake county il homes.</p>
            </div>
            <div style="padding: 40px; border-radius: 20px; background: #f9fafb; border: 1px solid #e5e7eb; text-align: center;">
              <h4 style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 15px; text-transform: uppercase;">2026-Spec Extraction</h4>
              <p style="color: #666; line-height: 1.7; font-size: 1.1rem;">Our industrial gear handles emergency drain backup, emergency sewer backup repair, and emergency clogged drain scenarios 5x faster than standard pumps.</p>
            </div>
            <div style="padding: 40px; border-radius: 20px; background: #f9fafb; border: 1px solid #e5e7eb; text-align: center;">
              <h4 style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 15px; text-transform: uppercase;">Full Compliance</h4>
              <p style="color: #666; line-height: 1.7; font-size: 1.1rem;">Licensed emergency plumber waukegan experts providing documentation for emergency plumbing repair near me and 24 hour plumbing repair insurance claims.</p>
            </div>
          </div>
          <div style="display: flex; justify-content: center; margin-top: 60px;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #f97316; color: white; padding: 22px 55px; border-radius: 12px; font-size: 1.6rem; font-weight: 900; text-decoration: none; text-transform: uppercase; box-shadow: 0 10px 25px rgba(249, 115, 22, 0.3);">Talk To A Licensed Expert Now</a>
          </div>
        </section>

        <section style="padding: 80px 10%; background-color: #1e3a8a; color: white;">
          <div style="max-width: 1100px; margin: 0 auto; text-align: center;">
            <h2 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 25px; text-transform: uppercase;">Industrial-Grade Residential & Commercial Solutions</h2>
            <p style="line-height: 1.9; font-size: 1.3rem; margin: 0 auto 50px auto; text-align: center; max-width: 1000px;">
              We offer residential emergency plumbing and commercial emergency plumbing. From emergency plumbing for homes to industrial plumbing emergency repair for emergency plumbing for businesses, our 24/7 emergency plumber near me team is ready. If you need emergency plumbing illinois experts or an emergency plumber illinois company, we deploy same-day emergency plumber services immediately.
            </p>
            <div style="overflow-x: auto; margin-bottom: 40px;">
              <table style="width: 100%; max-width: 900px; margin: 0 auto; background: white; color: #111827; border-radius: 15px; overflow: hidden; border-collapse: collapse;">
                <thead>
                  <tr style="background-color: #f97316; color: white;">
                    <th style="padding: 25px; text-align: left; text-transform: uppercase;">Service Keyword Target</th>
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
                  <tr>
                    <td style="padding: 25px; font-weight: 700;">24 hour plumber waukegan il</td>
                    <td style="padding: 25px;">Immediate</td>
                    <td style="padding: 25px; color: #16a34a; font-weight: 900;">OPEN 24/7</td>
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
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">1. What is considered a plumbing emergency?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">A plumbing emergency risks property damage or life safety. This includes a burst pipe emergency repair, a gas line plumbing emergency, emergency toilet repair, or a flooded bathroom emergency. contact our technicians for same day plumbing repair immediately.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">2. Who to call for burst pipe in Waukegan, IL?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">You should call a licensed emergency plumber waukegan residents trust since our founding in 2016. We specialize in burst pipe repair near me, providing forensic reports for Illinois insurance carriers to secure your restoration claim.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">3. Is a plumbing leak an emergency?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">Is a plumbing leak an emergency? If the leak is behind a wall or under a slab, it is a high-intent emergency. A leaking pipe emergency can wash away foundation soil, leading to structural shifts. Call for emergency plumbing leak repair immediately to stop silent water damage.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">4. Is a clogged drain an emergency?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">Is a clogged drain an emergency? If raw sewage backs up into your home or commercial kitchen, it is an emergency clogged drain and a biohazard. Call for an emergency sewer backup repair instantly to restore sanitation.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">5. Is water heater leak an emergency?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">Is water heater leak an emergency? Yes. An emergency water heater repair or emergency water heater replacement is vital if the tank is leaking from the bottom, as it can release 50+ gallons of hot water in seconds.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">6. How fast should an emergency plumber respond?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">In Lake County, an urgent plumbing repair response should be under 60 minutes. We strive for a 30-minute window for all emergency plumbing in waukegan il calls to ensure property security.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">7. What to do in a plumbing emergency before help arrives?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">Locate your main water shut-off valve and turn it clockwise. Then, shut off the power to your water heater or gas line and call emergency plumber now at our hotline for immediate dispatch.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">8. Signs you need emergency plumbing service near me?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">Signs you need emergency plumbing service include sudden low water pressure, gurgling drains, emergency toilet overflow, or emergency sink overflow. Call for an emergency plumbing service near me right away.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">9. Who to call for burst pipe in Beach Park?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">Call Zuniga Plumbing for burst pipe repair near me and emergency pipe burst repair. We are the local emergency plumber waukegan homeowners trust since 2016.</p>
            </div>
            <div style="padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">10. Do you provide commercial emergency plumbing?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">Yes, we offer industrial plumbing emergency repair for businesses and high-traffic facilities. We are the emergency plumbing company website for all large-scale mitigation needs.</p>
            </div>
          </div>
          
          <div style="margin-top: 80px; background: #fff5f5; padding: 70px 5%; border-radius: 40px; border: 3px dashed #f56565; text-align: center;">
            <p style="font-size: 2.2rem; font-weight: 900; color: #c53030; margin-bottom: 30px; text-transform: uppercase;">Instant Crisis Dispatch Available Now</p>
            <div style="display: flex; justify-content: center;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #c53030; color: white; padding: 22px 75px; border-radius: 15px; font-size: 2rem; font-weight: 900; text-decoration: none; text-transform: uppercase; box-shadow: 0 10px 30px rgba(197, 48, 48, 0.4);">Call Dispatch Now</a>
            </div>
          </div>
        </section>
      </div>
    `
  }
};
