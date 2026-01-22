import { BUSINESS_INFO } from '../constants';

export const SERVICES_DATA: Record<string, { title: string, content: string, image: string, intro: string }> = {
  "emergency-repairs": {
    title: "24/7 Professional Urgent Plumbing Response",
    image: "https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?auto=format&fit=crop&q=80",
    intro: `Searching for emergency plumbing in waukegan? At ${BUSINESS_INFO.name}, we provide the rapid emergency plumbing service waukegan il homeowners trust. Our emergency plumber waukegan il team is available 24/7 to handle any plumbing emergency in Lake County, IL.`,
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; gap: 0; font-family: sans-serif; color: #374151;">
        
        <section style="padding: 60px 10%; background-color: #ffffff; text-align: center;">
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 25px; text-transform: uppercase;">Top-Rated Emergency Plumbing Service in Waukegan, IL</h2>
          <p style="line-height: 1.8; font-size: 1.15rem; margin: 0 auto 35px auto; max-width: 1000px;">
            When a plumbing emergency strikes your property, you need an emergency plumber near me open now who can arrive within the hour to mitigate property damage. As a premier emergency plumbing company in Illinois, our team specializes in same-day plumbing service and 24 hour plumbing repair. We are the best emergency plumber waukegan il residents rely on during a crisis.
          </p>
          <div style="display: flex; justify-content: center;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 18px 40px; border-radius: 12px; font-size: 1.3rem; font-weight: 800; text-decoration: none; text-transform: uppercase; box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3);">Call Emergency Plumber Now</a>
          </div>
        </section>

        <section style="padding: 60px 10%; background-color: #f8fafc; display: flex; flex-wrap: wrap; gap: 50px; align-items: center; border-top: 1px solid #eee; border-bottom: 1px solid #eee;">
          <div style="flex: 1; min-width: 350px;">
            <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a; margin-bottom: 20px; text-transform: uppercase;">Metallurgy & Burst Pipe Emergency Repair</h3>
            <p style="margin-bottom: 20px; line-height: 1.7; font-size: 1.1rem;">
              Our emergency plumbing waukegan team handles burst pipe emergency repair with surgical precision. Most emergency plumbers near me do not have the induction tools for safe thawing.
            </p>
            
            <ul style="list-style-type: disc; margin-left: 20px; margin-bottom: 30px; line-height: 2; font-size: 1.1rem; color: #374151;">
              <li style="margin-bottom: 10px;">Immediate <strong>burst pipe repair near me</strong> response in Lake County.</li>
              <li style="margin-bottom: 10px;">High-intent <strong>emergency plumbing leak repair</strong> protocol.</li>
              <li style="margin-bottom: 10px;">Forensic <strong>water leak emergency plumber</strong> diagnostics.</li>
            </ul>

            <div style="display: flex; justify-content: flex-start;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #1e3a8a; color: white; padding: 15px 35px; border-radius: 8px; font-size: 1.1rem; font-weight: 700; text-decoration: none; text-transform: uppercase;">Request Urgent Pipe Repair</a>
            </div>
          </div>
          <div style="flex: 1; min-width: 350px;">
            <img src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80" alt="Plumbing Service" style="width: 100%; height: auto; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);" />
          </div>
        </section>

        <section style="padding: 80px 10%; background-color: #ffffff;">
          <h2 style="font-size: 2.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 50px; text-align: center; text-transform: uppercase;">Emergency Plumbing Knowledge Base</h2>
          <div style="max-width: 1100px; margin: 0 auto; display: grid; gap: 40px;">
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">1. What is a plumbing emergency?</h4>
              <p style="color: #555; font-size: 1.2rem; line-height: 1.8;">This includes a burst pipe emergency repair, a major sewer backup repair, or a flooded bathroom emergency. contact us for same day plumbing repair.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">2. Who to call for burst pipe in Waukegan, IL?</h4>
              <p style="color: #555; font-size: 1.2rem; line-height: 1.8;">Call a licensed emergency plumber waukegan residents trust. We specialize in burst pipe repair near me instantly.</p>
            </div>
          </div>
          
          <div style="margin-top: 80px; background: #fff5f5; padding: 60px; border-radius: 40px; border: 3px dashed #f56565; text-align: center;">
            <p style="font-size: 2rem; font-weight: 900; color: #c53030; margin-bottom: 30px; text-transform: uppercase;">Instant Crisis Dispatch Available Now</p>
            <div style="display: flex; justify-content: center;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #c53030; color: white; padding: 20px 60px; border-radius: 15px; font-size: 1.8rem; font-weight: 900; text-decoration: none; text-transform: uppercase; box-shadow: 0 10px 30px rgba(197, 48, 48, 0.4);">Call Dispatch Now</a>
            </div>
          </div>
        </section>
      </div>
    `
  }
};
