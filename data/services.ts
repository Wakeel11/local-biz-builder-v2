import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const primaryCity = illinoisCities[0].city;

export const SERVICES_DATA: Record<string, { title: string, content: string, image: string, intro: string }> = {
  "emergency-repairs": {
    // Short title to stop doubling in Hero UI
    title: "24/7 Professional Urgent Response",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80",
    intro: `Searching for emergency plumbing in waukegan? At ${BUSINESS_INFO.name}, we provide a rapid emergency plumbing service waukegan il homeowners trust. Whether it is a burst pipe emergency repair or a same day plumbing repair, our licensed technicians are available 24/7 to handle any plumbing emergency in Lake County, IL. We are the go-to experts for emergency plumbing illinois residents rely on during critical infrastructure failures.`,
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; gap: 0; font-family: 'Inter', sans-serif;">
        
        <section style="width: 100%; padding: 8rem 5%; background-color: #ffffff; text-align: center;">
          <h3 style="font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 900; color: #1e3a8a; margin-bottom: 2rem; text-transform: uppercase; line-height: 1; letter-spacing: -3px;">Waukegan Premier Critical Crisis Mitigation Protocol</h3>
          <p style="margin: 0 auto 3rem auto; line-height: 2.2; font-size: 1.4rem; color: #374151; max-width: 1100px;">
            Plumbing emergencies in the Midwest are more than just an inconvenience; they are existential threats to your property structural foundation. A single burst pipe emergency repair can release over 750 gallons of water per hour, saturating floor joists and compromising concrete slabs within a 24-hour window. Since 2016, our emergency plumbing company has refined a Rapid Stabilization system that focuses on immediate pressure neutralization and forensic diagnostics.
          </p>
          <a href="tel:${BUSINESS_INFO.phone}" style="display: inline-block; background-color: #22c55e; color: white; padding: 2rem 4rem; border-radius: 1.5rem; font-size: 1.8rem; font-weight: 900; text-decoration: none; text-transform: uppercase; transition: all 0.3s ease; box-shadow: 0 15px 30px rgba(34, 197, 94, 0.4);">Call The Emergency Plumber Now</a>
        </section>

        <section style="width: 100%; display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); min-height: 800px; background-color: #f8fafc;">
          <div style="padding: 8rem 10%; display: flex; flex-direction: column; justify-content: center;">
            <h4 style="font-size: 2.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 2.5rem; text-transform: uppercase; line-height: 1.2;">The Thermodynamics and Metallurgy of Midwest Pipe Fractures</h4>
            <p style="margin-bottom: 1.5rem; line-height: 2; color: #4b5563; font-size: 1.2rem;">
              In Illinois winters, emergency pipe burst repair becomes a mathematical certainty for uninsulated lines. When water inside a copper or PEX pipe drops below freezing, it undergoes a molecular expansion of nearly 9%. This creates internal pressures exceeding 3,500 PSI, which is nearly 10 times the rated capacity of residential plumbing. Most emergency plumbing waukegan calls originate from this specific physical phenomenon.
            </p>
            <p style="margin-bottom: 3rem; line-height: 2; color: #4b5563; font-size: 1.2rem;">
              Our mitigation involves high-precision Electronic Pipe Thawing (EPT). Unlike competitors who use open-flame torches—a major fire hazard in historic Waukegan attics—we use controlled induction to safely liquefy ice without thermal shock. This preserves your pipe metallurgy and prevents the micro-fractures that lead to emergency plumbing leak repair later in the season.
            </p>
            <a href="tel:${BUSINESS_INFO.phone}" style="align-self: flex-start; background-color: #1e3a8a; color: white; padding: 1.5rem 3rem; border-radius: 1rem; font-size: 1.4rem; font-weight: 800; text-decoration: none; text-transform: uppercase; box-shadow: 0 10px 20px rgba(30, 58, 138, 0.2);">Request Urgent Pipe Repair Now</a>
          </div>
          <div style="min-height: 600px; background: url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80') center/cover no-repeat; border-radius: 0;"></div>
        </section>

        <section style="width: 100%; padding: 8rem 10%; background-color: #ffffff;">
          <h4 style="font-weight: 900; font-size: 3rem; margin-bottom: 5rem; text-transform: uppercase; color: #1e3a8a; text-align: center; letter-spacing: -1px;">Why We Are Waukegan Best Emergency Plumber</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 4rem;">
            <div style="padding: 4rem 3rem; border-radius: 3rem; background: #ffffff; border: 1px solid #e5e7eb; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.08); transition: transform 0.3s ease;">
              <div style="width: 60px; height: 60px; background: #f97316; border-radius: 1rem; margin-bottom: 2rem;"></div>
              <p style="font-size: 1.6rem; font-weight: 900; color: #1e3a8a; margin-bottom: 1.5rem;">Forensic Moisture Audit</p>
              <p style="color: #4b5563; line-height: 2; font-size: 1.1rem;">We use high-grade infrared sensors to ensure no hidden water pockets remain behind your drywall or under your slab, preventing expensive black mold growth and structural decay common in emergency plumbing lake county il calls.</p>
            </div>
            <div style="padding: 4rem 3rem; border-radius: 3rem; background: #ffffff; border: 1px solid #e5e7eb; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.08);">
              <div style="width: 60px; height: 60px; background: #1e3a8a; border-radius: 1rem; margin-bottom: 2rem;"></div>
              <p style="font-size: 1.6rem; font-weight: 900; color: #1e3a8a; margin-bottom: 1.5rem;">2026-Spec Rapid Extraction</p>
              <p style="color: #4b5563; line-height: 2; font-size: 1.1rem;">Our trucks carry industrial-grade vacuums that clear a flooded bathroom emergency or a basement surcharge 5x faster than standard gear, minimizing the time water has to penetrate your foundation.</p>
            </div>
            <div style="padding: 4rem 3rem; border-radius: 3rem; background: #ffffff; border: 1px solid #e5e7eb; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.08);">
              <div style="width: 60px; height: 60px; background: #22c55e; border-radius: 1rem; margin-bottom: 2rem;"></div>
              <p style="font-size: 1.6rem; font-weight: 900; color: #1e3a8a; margin-bottom: 1.5rem;">Full Insurance Compliance</p>
              <p style="color: #4b5563; line-height: 2; font-size: 1.1rem;">We provide high-resolution forensic photos and engineering reports to maximize your emergency water damage plumbing claim, speaking the language of adjusters to ensure you are covered.</p>
            </div>
          </div>
          <div style="text-align: center; margin-top: 6rem;">
            <a href="tel:${BUSINESS_INFO.phone}" style="display: inline-block; background-color: #f97316; color: white; padding: 2rem 5rem; border-radius: 1.5rem; font-size: 2rem; font-weight: 900; text-decoration: none; text-transform: uppercase; box-shadow: 0 15px 30px rgba(249, 115, 22, 0.4);">Speak To A Licensed Expert Now</a>
          </div>
        </section>

        <section style="width: 100%; padding: 8rem 10%; background-color: #1e3a8a; color: white;">
          <div style="max-width: 1200px; margin: 0 auto; text-align: center; margin-bottom: 5rem;">
            <h3 style="font-size: 3rem; font-weight: 900; margin-bottom: 2.5rem; text-transform: uppercase; line-height: 1.1;">Industrial-Grade Residential & Commercial Solutions</h3>
            <p style="line-height: 2.2; font-size: 1.3rem; color: #d1d5db;">
              We provide a clear distinction between residential emergency plumbing and commercial emergency plumbing. We understand that emergency plumbing for businesses requires a different logistical response, often involving industrial plumbing emergency repair to prevent expensive downtime and safety code violations. Whether you need a licensed emergency plumber waukegan for a high-traffic retail space or emergency plumbing for homes in North Chicago or Beach Park, our fleet is ready to deploy.
            </p>
          </div>

          <table style="width: 100%; border-collapse: separate; border-spacing: 0; border-radius: 2.5rem; overflow: hidden; background: white; color: #111827; box-shadow: 0 30px 60px rgba(0,0,0,0.3);">
            <thead>
              <tr style="background-color: #f97316; color: white;">
                <th style="padding: 35px; text-align: left; font-size: 1.4rem; text-transform: uppercase;">Service Target Zone</th>
                <th style="padding: 35px; text-align: left; font-size: 1.4rem; text-transform: uppercase;">Average Response</th>
                <th style="padding: 35px; text-align: left; font-size: 1.4rem; text-transform: uppercase;">Dispatch Status</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 35px; font-weight: 800; font-size: 1.2rem;">emergency plumber waukegan il</td>
                <td style="padding: 35px; font-size: 1.2rem; color: #4b5563;">15 - 20 Minutes</td>
                <td style="padding: 35px; color: #16a34a; font-weight: 900; font-size: 1.2rem;">IMMEDIATE</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb; background-color: #f9fafb;">
                <td style="padding: 35px; font-weight: 800; font-size: 1.2rem;">emergency plumbing lake county il</td>
                <td style="padding: 35px; font-size: 1.2rem; color: #4b5563;">25 - 30 Minutes</td>
                <td style="padding: 35px; color: #16a34a; font-weight: 900; font-size: 1.2rem;">ACTIVE</td>
              </tr>
              <tr>
                <td style="padding: 35px; font-weight: 800; font-size: 1.2rem;">emergency plumber illinois</td>
                <td style="padding: 35px; font-size: 1.2rem; color: #4b5563;">Regional Response</td>
                <td style="padding: 35px; color: #16a34a; font-weight: 900; font-size: 1.2rem;">OPEN 24/7</td>
              </tr>
            </tbody>
          </table>
          <div style="text-align: center; margin-top: 5rem;">
            <a href="tel:${BUSINESS_INFO.phone}" style="display: inline-block; background-color: #ffffff; color: #1e3a8a; padding: 2rem 5rem; border-radius: 1.5rem; font-size: 1.8rem; font-weight: 900; text-decoration: none; text-transform: uppercase; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">Connect With Commercial Dispatch</a>
          </div>
        </section>

        <section style="width: 100%; padding: 10rem 10%; background-color: #ffffff;">
          <h4 style="font-size: 3.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 6rem; text-transform: uppercase; text-align: center; letter-spacing: -2px;">Complete Emergency Knowledge Hub</h4>
          <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); gap: 5rem;">
            <div>
              <p style="font-size: 1.6rem; font-weight: 900; color: #1e3a8a; margin-bottom: 1.5rem; line-height: 1.1;">1. What is considered a plumbing emergency in Waukegan?</p>
              <p style="color: #4b5563; font-size: 1.2rem; line-height: 2;">A plumbing emergency is any situation that risks immediate property damage or life safety. This includes a burst pipe emergency repair, a major sewer backup repair, a gas line plumbing emergency, or a flooded bathroom emergency. If you cannot shut off the water source or if there is a risk of structural shift, you should who to call for plumbing emergency—contact our technicians immediately for same day plumbing repair.</p>
            </div>
            <div>
              <p style="font-size: 1.6rem; font-weight: 900; color: #1e3a8a; margin-bottom: 1.5rem; line-height: 1.1;">2. Who to call for burst pipe in Lake County, IL?</p>
              <p style="color: #4b5563; font-size: 1.2rem; line-height: 2;">You should call a licensed emergency plumber waukegan residents have trusted since our establishment. We specialize in burst pipe repair near me, providing technical engineering reports required by Illinois insurance carriers to secure your restoration claim. Our same-day plumbing service ensures your property is stabilized against high-pressure hydraulic failure instantly.</p>
            </div>
            <div>
              <p style="font-size: 1.6rem; font-weight: 900; color: #1e3a8a; margin-bottom: 1.5rem; line-height: 1.1;">3. Is a water heater leak an emergency during winters?</p>
              <p style="color: #4b5563; font-size: 1.2rem; line-height: 2;">Yes, especially if the tank is weeping from the bottom. An emergency water heater repair or emergency water heater replacement is vital because a structural tank failure can release 50 or more gallons of boiling water in seconds, destroying your flooring. During Midwest winters, losing hot water also risks frozen pipes in unheated crawlspaces.</p>
            </div>
            <div>
              <p style="font-size: 1.6rem; font-weight: 900; color: #1e3a8a; margin-bottom: 1.5rem; line-height: 1.1;">4. What are the signs you need emergency plumbing service?</p>
              <p style="color: #4b5563; font-size: 1.2rem; line-height: 2;">Look for sudden low water pressure, gurgling in your drains, unexplained moisture on drywall, or a spinning water meter when no taps are open. These indicate that you need an emergency plumbing service near me right away. Additionally, the smell of rotten eggs is a sign of a gas line plumbing emergency that requires immediate evacuation and dispatch.</p>
            </div>
          </div>
          <div style="text-align: center; margin-top: 8rem; background: #fef2f2; padding: 6rem 5%; border-radius: 4rem; border: 2px dashed #dc2626;">
            <p style="font-size: 2.5rem; font-weight: 900; color: #991b1b; margin-bottom: 2rem; text-transform: uppercase;">Instant Crisis Dispatch Available</p>
            <p style="font-size: 1.4rem; color: #b91c1c; margin-bottom: 3rem; font-weight: 600;">Technicians are currently on standby for Waukegan, Beach Park, and Zion.</p>
            <a href="tel:${BUSINESS_INFO.phone}" style="display: inline-block; background-color: #dc2626; color: white; padding: 2.5rem 6rem; border-radius: 2rem; font-size: 2.2rem; font-weight: 900; text-decoration: none; text-transform: uppercase; box-shadow: 0 20px 40px rgba(220, 38, 38, 0.4);">Call Dispatch Now</a>
          </div>
        </section>
      </div>
    `
  }
};
