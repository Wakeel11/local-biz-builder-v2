import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const primaryCity = illinoisCities[0].city;

export const SERVICES_DATA: Record<string, { title: string, content: string, image: string, intro: string }> = {
  "emergency-repairs": {
    // Short title to prevent doubling in Hero UI
    title: "Urgent 24/7 Crisis Response",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80",
    intro: `Searching for emergency plumbing in waukegan? At ${BUSINESS_INFO.name}, we provide a rapid emergency plumbing service waukegan il homeowners trust. Whether it is a burst pipe emergency repair or a same day plumbing repair, our licensed technicians are available 24/7 to handle any plumbing emergency in Lake County, IL. We are the go-to experts for emergency plumbing illinois residents rely on during critical infrastructure failures.`,
    content: `
      <div style="position: relative; width: 100vw; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; background: #ffffff; overflow-x: hidden;">
        
        <section style="padding: 100px 10%; background: linear-gradient(to bottom, #f8fafc, #ffffff); text-align: center;">
          <h3 style="font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 900; color: #1e3a8a; margin-bottom: 30px; text-transform: uppercase; line-height: 1; letter-spacing: -2px;">Waukegan Premier Critical Crisis Mitigation Protocol</h3>
          <p style="margin: 0 auto 40px auto; line-height: 2.2; font-size: 1.4rem; color: #374151; max-width: 1100px;">
            Plumbing emergencies in the Midwest are more than just an inconvenience; they are existential threats to your property structural foundation. A single burst pipe emergency repair can release over 750 gallons of water per hour, saturating floor joists and compromising concrete slabs within a 24-hour window. Since our founding in 2016, our emergency plumbing company has refined a Rapid Stabilization system that focuses on immediate pressure neutralization and forensic diagnostics to protect Waukegan families from catastrophic loss.
          </p>
          <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 25px 50px; border-radius: 15px; font-size: 1.8rem; font-weight: 900; text-decoration: none; text-transform: uppercase; box-shadow: 0 20px 40px rgba(34, 197, 94, 0.4);">Call The Emergency Plumber Now</a>
          </div>
        </section>

        <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); background-color: #111827; color: #ffffff;">
          <div style="padding: 100px 10%; display: flex; flex-direction: column; justify-content: center;">
            <h4 style="font-size: 2.5rem; font-weight: 800; color: #3b82f6; margin-bottom: 30px; text-transform: uppercase;">Thermodynamics and Metallurgy of Midwest Pipe Fractures</h4>
            <p style="margin-bottom: 25px; line-height: 2; color: #d1d5db; font-size: 1.2rem;">
              In Illinois winters, emergency pipe burst repair becomes a mathematical certainty for uninsulated lines. When water inside a copper or PEX pipe drops below freezing, it undergoes a molecular expansion of nearly 9%. This creates internal pressures exceeding 3,500 PSI, which is nearly 10 times the rated capacity of residential plumbing. Most emergency plumbing waukegan calls originate from this specific physical phenomenon where the metal crystallization fails under extreme hydraulic load.
            </p>
            <p style="margin-bottom: 40px; line-height: 2; color: #d1d5db; font-size: 1.2rem;">
              Our mitigation involves high-precision Electronic Pipe Thawing (EPT). Unlike competitors who use open-flame torches—a major fire hazard in historic Waukegan attics—we use controlled induction to safely liquefy ice without thermal shock. This preserves your pipe metallurgy and prevents the micro-fractures that lead to emergency plumbing leak repair later in the season.
            </p>
            <a href="tel:${BUSINESS_INFO.phone}" style="width: fit-content; background-color: #ffffff; color: #111827; padding: 20px 40px; border-radius: 12px; font-size: 1.4rem; font-weight: 800; text-decoration: none; text-transform: uppercase;">Request Urgent Pipe Repair</a>
          </div>
          <div style="min-height: 600px; background: url('https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80') center/cover no-repeat;"></div>
        </section>

        <section style="padding: 100px 10%; background-color: #ffffff;">
          <h4 style="font-weight: 900; font-size: 3rem; margin-bottom: 60px; text-transform: uppercase; color: #1e3a8a; text-align: center; letter-spacing: -1px;">Why We Are Waukegan Best Emergency Plumber</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px;">
            <div style="padding: 50px 40px; border-radius: 30px; background: #f8fafc; border: 1px solid #e2e8f0; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1);">
              <p style="font-size: 1.8rem; font-weight: 900; color: #1e3a8a; margin-bottom: 20px;">Forensic Moisture Audit</p>
              <p style="color: #4b5563; line-height: 2; font-size: 1.1rem;">We use high-grade infrared sensors to ensure no hidden water pockets remain behind your drywall or under your slab, preventing expensive black mold growth and structural decay common in emergency plumbing lake county il calls.</p>
            </div>
            <div style="padding: 50px 40px; border-radius: 30px; background: #f8fafc; border: 1px solid #e2e8f0; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1);">
              <p style="font-size: 1.8rem; font-weight: 900; color: #1e3a8a; margin-bottom: 20px;">2026-Spec Extraction</p>
              <p style="color: #4b5563; line-height: 2; font-size: 1.1rem;">Our trucks carry industrial-grade vacuums that clear a flooded bathroom emergency or a basement surcharge 5x faster than standard gear, minimizing the time water has to penetrate your foundation.</p>
            </div>
            <div style="padding: 50px 40px; border-radius: 30px; background: #f8fafc; border: 1px solid #e2e8f0; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1);">
              <p style="font-size: 1.8rem; font-weight: 900; color: #1e3a8a; margin-bottom: 20px;">Insurance Documentation</p>
              <p style="color: #4b5563; line-height: 2; font-size: 1.1rem;">We provide high-resolution forensic photos and engineering reports to maximize your emergency water damage plumbing claim, speaking the language of adjusters to ensure you are covered.</p>
            </div>
          </div>
          <div style="text-align: center; margin-top: 70px;">
             <a href="tel:${BUSINESS_INFO.phone}" style="display: inline-block; background-color: #f97316; color: white; padding: 25px 60px; border-radius: 20px; font-size: 2rem; font-weight: 900; text-decoration: none; text-transform: uppercase;">Talk To A Mitigation Expert Now</a>
          </div>
        </section>

        <section style="padding: 100px 10%; background-color: #1e3a8a; color: white;">
          <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
            <h3 style="font-size: 3rem; font-weight: 900; margin-bottom: 30px; text-transform: uppercase;">Industrial-Grade Residential & Commercial Solutions</h3>
            <p style="line-height: 2.2; font-size: 1.4rem; color: #d1d5db; margin-bottom: 60px;">
              We provide a clear distinction between residential emergency plumbing and commercial emergency plumbing. We understand that emergency plumbing for businesses requires a different logistical response, often involving industrial plumbing emergency repair to prevent expensive downtime and safety code violations. Whether you need a licensed emergency plumber waukegan for a high-traffic retail space or emergency plumbing for homes in North Chicago, we are ready to deploy.
            </p>
            
            <table style="width: 100%; border-collapse: separate; border-spacing: 0; border-radius: 30px; overflow: hidden; background: white; color: #111827; box-shadow: 0 40px 80px rgba(0,0,0,0.4);">
              <thead>
                <tr style="background-color: #f97316; color: white;">
                  <th style="padding: 35px; text-align: left; font-size: 1.4rem; text-transform: uppercase;">Service Target Zone</th>
                  <th style="padding: 35px; text-align: left; font-size: 1.4rem; text-transform: uppercase;">Response Time</th>
                  <th style="padding: 35px; text-align: left; font-size: 1.4rem; text-transform: uppercase;">Dispatch Status</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid #e5e7eb;">
                  <td style="padding: 35px; font-weight: 800; font-size: 1.3rem;">emergency plumber waukegan il</td>
                  <td style="padding: 35px; font-size: 1.3rem; color: #4b5563;">15 - 20 Minutes</td>
                  <td style="padding: 35px; color: #16a34a; font-weight: 900; font-size: 1.3rem;">IMMEDIATE</td>
                </tr>
                <tr style="border-bottom: 1px solid #e5e7eb; background-color: #f9fafb;">
                  <td style="padding: 35px; font-weight: 800; font-size: 1.3rem;">emergency plumbing lake county il</td>
                  <td style="padding: 35px; font-size: 1.3rem; color: #4b5563;">25 - 30 Minutes</td>
                  <td style="padding: 35px; color: #16a34a; font-weight: 900; font-size: 1.3rem;">ACTIVE</td>
                </tr>
                <tr>
                  <td style="padding: 35px; font-weight: 800; font-size: 1.3rem;">emergency plumber illinois</td>
                  <td style="padding: 35px; font-size: 1.3rem; color: #4b5563;">Regional Response</td>
                  <td style="padding: 35px; color: #16a34a; font-weight: 900; font-size: 1.3rem;">OPEN 24/7</td>
                </tr>
              </tbody>
            </table>
            
            <div style="margin-top: 60px;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #ffffff; color: #1e3a8a; padding: 25px 60px; border-radius: 20px; font-size: 1.8rem; font-weight: 900; text-decoration: none; text-transform: uppercase;">Call Commercial Dispatch Now</a>
            </div>
          </div>
        </section>

        <section style="padding: 120px 10%; background-color: #ffffff;">
          <h4 style="font-size: 3.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 80px; text-transform: uppercase; text-align: center; letter-spacing: -2px;">Complete Emergency Knowledge Hub</h4>
          <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); gap: 60px;">
            <div>
              <p style="font-size: 1.8rem; font-weight: 900; color: #1e3a8a; margin-bottom: 20px; line-height: 1.1;">1. What is considered a plumbing emergency in Waukegan?</p>
              <p style="color: #4b5563; font-size: 1.25rem; line-height: 2;">A plumbing emergency is any situation that risks immediate property damage or life safety. This includes a burst pipe emergency repair, a major sewer backup repair, a gas line plumbing emergency, or a flooded bathroom emergency. If you cannot shut off the water source or if there is a risk of structural shift, you should who to call for plumbing emergency—contact our technicians immediately for same day plumbing repair.</p>
            </div>
            <div>
              <p style="font-size: 1.8rem; font-weight: 900; color: #1e3a8a; margin-bottom: 20px; line-height: 1.1;">2. Who to call for burst pipe in Lake County, IL?</p>
              <p style="color: #4b5563; font-size: 1.25rem; line-height: 2;">You should call a licensed emergency plumber waukegan residents have trusted since our establishment in 2016. We specialize in burst pipe repair near me, providing technical engineering reports required by Illinois insurance carriers to secure your restoration claim. Our same-day plumbing service ensures your property is stabilized against high-pressure hydraulic failure instantly.</p>
            </div>
            <div>
              <p style="font-size: 1.8rem; font-weight: 900; color: #1e3a8a; margin-bottom: 20px; line-height: 1.1;">3. Is water heater leak an emergency during winters?</p>
              <p style="color: #4b5563; font-size: 1.25rem; line-height: 2;">Yes, especially if the tank is weeping from the bottom. An emergency water heater repair or emergency water heater replacement is vital because a structural tank failure can release 50 or more gallons of boiling water in seconds, destroying your flooring. During Midwest winters, losing hot water also risks frozen pipes in unheated crawlspaces.</p>
            </div>
            <div>
              <p style="font-size: 1.8rem; font-weight: 900; color: #1e3a8a; margin-bottom: 20px; line-height: 1.1;">4. Signs you need emergency plumbing service near me?</p>
              <p style="color: #4b5563; font-size: 1.25rem; line-height: 2;">Look for sudden low water pressure, gurgling in your drains, unexplained moisture on drywall, or a spinning water meter when no taps are open. These indicate that you need an emergency plumbing service near me right away. Additionally, the smell of rotten eggs is a sign of a gas line plumbing emergency that requires immediate evacuation and dispatch.</p>
            </div>
          </div>
          
          <div style="margin-top: 100px; background: #fef2f2; padding: 80px 5%; border-radius: 50px; border: 4px dashed #dc2626; text-align: center;">
            <p style="font-size: 3rem; font-weight: 900; color: #991b1b; margin-bottom: 30px; text-transform: uppercase;">Instant Crisis Dispatch Available</p>
            <p style="font-size: 1.6rem; color: #b91c1c; margin-bottom: 40px; font-weight: 600;">Licensed technicians are currently on standby for Waukegan, Beach Park, and Zion.</p>
            <a href="tel:${BUSINESS_INFO.phone}" style="display: inline-block; background-color: #dc2626; color: white; padding: 30px 80px; border-radius: 25px; font-size: 2.5rem; font-weight: 900; text-decoration: none; text-transform: uppercase; box-shadow: 0 30px 60px rgba(220, 38, 38, 0.4);">Call Dispatch Now</a>
          </div>
        </section>
      </div>
    `
  }
};
