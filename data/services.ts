import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const primaryCity = illinoisCities[0].city;

export const SERVICES_DATA: Record<string, { title: string, content: string, image: string, intro: string }> = {
  
  // 1. URL: /services/emergency-repairs
  "emergency-repairs": {
    title: "24/7 Professional Urgent Plumbing Response",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80",
    intro: `Searching for emergency plumbing in waukegan? At ${BUSINESS_INFO.name}, we provide the rapid emergency plumbing service waukegan il homeowners trust. Our emergency plumber waukegan il team is available 24/7.`,
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; gap: 0; font-family: sans-serif; color: #374151;">
        <section style="padding: 60px 10%; background-color: #ffffff; text-align: center;">
          <h2 style="font-size: 2.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 25px; text-transform: uppercase;">Top-Rated Emergency Plumbing Service in Waukegan, IL</h2>
          <p style="line-height: 1.9; font-size: 1.25rem; margin: 0 auto 35px auto; max-width: 1050px;">
            When a plumbing emergency strikes, you need an emergency plumber near me open now who can arrive within the hour to mitigate damage. As a premier emergency plumbing company in Illinois, our team specializes in same-day plumbing service and 24 hour plumbing repair. We have established a reputation as the best <a href="/#/" style="color: #1e3a8a; text-decoration: underline;">emergency plumbing in waukegan</a> residents can rely on since 2016. Whether you face a leaking pipe emergency or need a water leak emergency plumber, we provide urgent plumbing repair across Lake County.
          </p>
          <div style="display: flex; justify-content: center;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 20px 50px; border-radius: 12px; font-size: 1.5rem; font-weight: 800; text-decoration: none; text-transform: uppercase;">Call Emergency Plumber</a>
          </div>
        </section>
        <section style="padding: 60px 10%; background-color: #f8fafc; display: flex; flex-wrap: wrap; gap: 50px; align-items: center; border-top: 1px solid #eee;">
          <div style="flex: 1; min-width: 350px;">
            <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a; margin-bottom: 20px; text-transform: uppercase;">Metallurgy & Burst Pipe Emergency Repair</h3>
            <p style="margin-bottom: 20px; line-height: 1.8; font-size: 1.15rem;">
              Illinois winters make emergency pipe burst repair a common necessity. When water inside copper pipes freezes, it expands by 9%, creating 3,500 PSI of internal pressure. Our emergency plumbing waukegan team handles burst pipe emergency repair with surgical precision. Most emergency plumbers near me lack the specialized induction tools for safe electronic pipe thawing.
            </p>
            <div style="display: flex; justify-content: center; lg:justify-content: flex-start;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #1e3a8a; color: white; padding: 15px 35px; border-radius: 8px; font-size: 1.1rem; font-weight: 700; text-decoration: none; text-transform: uppercase;">Request Urgent Pipe Repair</a>
            </div>
          </div>
          <div style="flex: 1; min-width: 350px;">
            <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" alt="Repair" style="width: 100%; height: auto; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);" />
          </div>
        </section>
      </div>
    `
  },

  // 2. URL: /services/drain-sewer-cleaning
  "drain-sewer-cleaning": {
    title: "Drain & Sewer Cleaning Waukegan IL",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80",
    intro: `Professional drain cleaning service waukegan il. At ${BUSINESS_INFO.name}, we provide the sewer cleaning waukegan residents trust for 24/7 waste management stability.`,
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; gap: 0; font-family: sans-serif; color: #374151;">
        <section style="padding: 60px 10%; background-color: #ffffff; text-align: center;">
          <h2 style="font-size: 2.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 25px; text-transform: uppercase;">Professional Drain Cleaning Service in Waukegan, IL</h2>
          <p style="line-height: 1.9; font-size: 1.25rem; margin: 0 auto 35px auto; max-width: 1050px;">
            Clogged drains indicate a waste management failure that risks your home sanitation. When you need a professional drain cleaning service or a comprehensive sewer line cleaning service, our technicians utilize industrial equipment. As a premier <a href="/#/" style="color: #1e3a8a; text-decoration: underline;">drain cleaning waukegan il</a> provider, we handle everything from backed up drain repair to main sewer line cleaning. Since 2016, we have focused on providing the sewer cleaning waukegan residents rely on for long-term pipe health.
          </p>
          <div style="display: flex; justify-content: center;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 20px 50px; border-radius: 12px; font-size: 1.5rem; font-weight: 800; text-decoration: none; text-transform: uppercase;">Call Drain Experts</a>
          </div>
        </section>
        <section style="padding: 60px 10%; background-color: #f8fafc; display: flex; flex-wrap: wrap; gap: 50px; align-items: center; border-top: 1px solid #eee;">
          <div style="flex: 1; min-width: 350px;">
            <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a; margin-bottom: 20px; text-transform: uppercase;">Hydro Jetting & Camera Sewer Inspection</h3>
            <p style="margin-bottom: 20px; line-height: 1.8; font-size: 1.15rem;">
              Hydro jet drain cleaning uses high-pressure water to scrub pipe walls of grease and root systems. To ensure integrity, we provide a sewer camera inspection service. This video pipe inspection allows our plumbers to identify collapses in real-time. If you face a clogged sewer line emergency, our camera sewer inspection service provides the visual evidence needed for repair planning.
            </p>
            <div style="display: flex; justify-content: center; lg:justify-content: flex-start;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #1e3a8a; color: white; padding: 15px 35px; border-radius: 8px; font-size: 1.1rem; font-weight: 700; text-decoration: none; text-transform: uppercase;">Book Sewer Inspection</a>
            </div>
          </div>
          <div style="flex: 1; min-width: 350px;">
            <img src="https://images.unsplash.com/photo-1543674892-7d64d45df18b?auto=format&fit=crop&q=80" alt="Drain Service" style="width: 100%; height: auto; border-radius: 20px;" />
          </div>
        </section>
      </div>
    `
  },

  // 3. URL: /services/water-heater-services
  "water-heater-services": {
    title: "Water Heater Repair Waukegan IL",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80",
    intro: `Need water heater repair waukegan il? From water heater installation waukegan to emergency water heater repair.`,
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; gap: 0; font-family: sans-serif; color: #374151;">
        <section style="padding: 60px 10%; background-color: #ffffff; text-align: center;">
          <h2 style="font-size: 2.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 25px; text-transform: uppercase;">Professional Water Heater Services in Waukegan, IL</h2>
          <p style="line-height: 1.9; font-size: 1.25rem; margin: 0 auto 35px auto; max-width: 1050px;">
            Losing hot water disrupts your entire household. Whether you need water heater repair waukegan il or a water heater replacement service, our technicians restore efficiency. As experts in <a href="/#/" style="color: #1e3a8a; text-decoration: underline;">water heater services waukegan</a>, we handle water heater leaking emergency calls with rapid response. We specialize in water heater installation waukegan for high-efficiency gas and electric units across Lake County.
          </p>
          <div style="display: flex; justify-content: center;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 20px 50px; border-radius: 12px; font-size: 1.5rem; font-weight: 800; text-decoration: none; text-transform: uppercase;">Call Now</a>
          </div>
        </section>
        <section style="padding: 60px 10%; background-color: #f8fafc; border-top: 1px solid #eee; display: flex; flex-wrap: wrap; gap: 50px; align-items: center;">
          <div style="flex: 1; min-width: 350px;">
             <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a; margin-bottom: 20px; text-transform: uppercase;">Tankless & Emergency Recovery</h3>
             <p style="line-height: 1.8; font-size: 1.15rem; margin-bottom: 20px;">We offer tankless water heater installation and tankless water heater repair for endless hot water. If you face a water heater burst repair, our same day replacement service is active.</p>
             <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #1e3a8a; color: white; padding: 15px 35px; border-radius: 8px; font-size: 1.1rem; font-weight: 700; text-decoration: none;">Book Repair</a>
          </div>
          <div style="flex: 1; min-width: 350px;">
            <img src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80" alt="Heater" style="width: 100%; height: auto; border-radius: 20px;" />
          </div>
        </section>
      </div>
    `
  },

  // 4. URL: /services/sump-pump-protection
  "sump-pump-protection": {
    title: "Sump Pump Installation Waukegan IL",
    image: "https://images.unsplash.com/photo-1517646281694-22d63636788a?auto=format&fit=crop&q=80",
    intro: `Looking for sump pump installation waukegan il? Our sump pump repair waukegan team offers basement flood protection.`,
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; gap: 0; font-family: sans-serif; color: #374151;">
        <section style="padding: 60px 10%; background-color: #ffffff; text-align: center;">
          <h2 style="font-size: 2.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 25px; text-transform: uppercase;">Waukegan Basement Flood Protection & Sump Pump Services</h2>
          <p style="line-height: 1.9; font-size: 1.25rem; margin: 0 auto 35px auto; max-width: 1050px;">
            In Lake County, a functional sump pump is your primary defense. Whether you need a basement sump pump installation or an emergency sump pump repair, we are ready. As a top <a href="/#/" style="color: #1e3a8a; text-decoration: underline;">sump pump installation waukegan il</a> provider, we specialize in flood prevention strategies. Since 2016, we have performed the sump pump services waukegan families rely on.
          </p>
          <div style="display: flex; justify-content: center;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 20px 50px; border-radius: 12px; font-size: 1.5rem; font-weight: 800; text-decoration: none; text-transform: uppercase;">Protect Basement Now</a>
          </div>
        </section>
      </div>
    `
  },

  // 5. URL: /services/advanced-leak-detection
  "advanced-leak-detection": {
    title: "Leak Detection Services Waukegan IL",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
    intro: `Advanced leak detection services waukegan il utilizing electronic leak detection.`,
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; gap: 0; font-family: sans-serif; color: #374151;">
        <section style="padding: 60px 10%; background-color: #ffffff; text-align: center;">
          <h2 style="font-size: 2.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 25px; text-transform: uppercase;">High-Precision Leak Detection Services in Waukegan, IL</h2>
          <p style="line-height: 1.9; font-size: 1.25rem; margin: 0 auto 35px auto; max-width: 1050px;">
            A silent leak can destroy your structural integrity. Whether you need underground leak detection or a slab leak detection service, we provide non-invasive solutions. As experts in <a href="/#/" style="color: #1e3a8a; text-decoration: underline;">leak detection services waukegan il</a>, we use thermal imaging to find hidden leaks that others miss.
          </p>
          <div style="display: flex; justify-content: center;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 20px 50px; border-radius: 12px; font-size: 1.5rem; font-weight: 800; text-decoration: none; text-transform: uppercase;">Find Your Leak</a>
          </div>
        </section>
      </div>
    `
  },

  // 6. URL: /services/gas-line-services
  "gas-line-services": {
    title: "Gas Line Repair Waukegan IL",
    image: "https://images.unsplash.com/photo-1521207418485-99c705420785?auto=format&fit=crop&q=80",
    intro: `Certified gas line repair waukegan il. Our certified gas line plumber team provides emergency gas line repair.`,
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; gap: 0; font-family: sans-serif; color: #374151;">
        <section style="padding: 60px 10%; background-color: #ffffff; text-align: center;">
          <h2 style="font-size: 2.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 25px; text-transform: uppercase;">Waukegan Certified Gas Line Repair & Installation</h2>
          <p style="line-height: 1.9; font-size: 1.25rem; margin: 0 auto 35px auto; max-width: 1050px;">
            A gas leak is a life-safety crisis. Whether you need emergency gas line repair or gas line installation waukegan, safety is our priority. As a premier <a href="/#/" style="color: #1e3a8a; text-decoration: underline;">gas line repair waukegan il</a> company, we provide certified expertise. Since 2016, we have performed the gas line services waukegan families trust.
          </p>
          <div style="display: flex; justify-content: center;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 20px 50px; border-radius: 12px; font-size: 1.5rem; font-weight: 800; text-decoration: none; text-transform: uppercase;">Call Certified Plumber</a>
          </div>
        </section>
      </div>
    `
  }
};
