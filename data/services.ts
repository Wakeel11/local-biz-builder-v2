import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const primaryCity = illinoisCities[0].city;

export const SERVICES_DATA: Record<string, { title: string, content: string, image: string, intro: string }> = {
  
  // 1. EMERGENCY REPAIRS (Matching: /services/emergency-repairs)
  "emergency-repairs": {
    title: "24/7 Professional Urgent Plumbing Response",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80",
    intro: `Searching for emergency plumbing in waukegan? At ${BUSINESS_INFO.name}, we provide the rapid emergency plumbing service waukegan il homeowners trust. Our emergency plumber waukegan il team is available 24/7.`,
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; gap: 0; font-family: sans-serif; color: #374151;">
        <section style="padding: 60px 10%; background-color: #ffffff; text-align: center;">
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 25px; text-transform: uppercase;">Top-Rated Emergency Plumbing Service in Waukegan, IL</h2>
          <p style="line-height: 1.8; font-size: 1.2rem; margin: 0 auto 30px auto; max-width: 1000px;">
            When a plumbing emergency strikes, you need an emergency plumber near me open now who can arrive within the hour. As a premier emergency plumbing company in Illinois, we specialize in same-day plumbing service and 24 hour plumbing repair. We have established a reputation as the best <a href="/#/" style="color: #1e3a8a; text-decoration: underline;">emergency plumbing in waukegan</a> residents trust since 2016.
          </p>
          <div style="display: flex; justify-content: center;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 18px 40px; border-radius: 12px; font-size: 1.3rem; font-weight: 800; text-decoration: none; text-transform: uppercase; box-shadow: 0 4px 15px rgba(34,197,94,0.2);">Call Emergency Plumber</a>
          </div>
        </section>
        </div>
    `
  },

  // 2. DRAIN CLEANING (Matching: /services/drain-sewer-cleaning)
  "drain-sewer-cleaning": {
    title: "Drain & Sewer Cleaning Waukegan IL",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80",
    intro: `Looking for professional drain cleaning service waukegan il? We provide the sewer cleaning waukegan residents trust for 24/7 stability.`,
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; gap: 0; font-family: sans-serif; color: #374151;">
        <section style="padding: 60px 10%; background-color: #ffffff; text-align: center;">
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 25px; text-transform: uppercase;">Professional Drain Cleaning Service in Waukegan, IL</h2>
          <p style="line-height: 1.8; font-size: 1.2rem; margin: 0 auto 35px auto; max-width: 1000px;">
            Clogged drains indicate a waste management failure. As the top <a href="/#/" style="color: #1e3a8a; text-decoration: underline;">drain cleaning waukegan il</a> provider, we handle everything from backed up drain repair to main sewer line cleaning. Since 2016, we have focused on the sewer cleaning waukegan residents rely on.
          </p>
          <div style="display: flex; justify-content: center;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 18px 40px; border-radius: 12px; font-size: 1.3rem; font-weight: 800; text-decoration: none; text-transform: uppercase;">Call Drain Experts</a>
          </div>
        </section>
      </div>
    `
  },

  // 3. WATER HEATER (Matching: /services/water-heater-services)
  "water-heater-services": {
    title: "Water Heater Repair Waukegan IL",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80",
    intro: `Need water heater repair waukegan il? We provide 24/7 hot water heater repair near me.`,
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; gap: 0; font-family: sans-serif; color: #374151;">
        <section style="padding: 60px 10%; background-color: #ffffff; text-align: center;">
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 25px; text-transform: uppercase;">Professional Water Heater Services in Waukegan, IL</h2>
          <p style="line-height: 1.8; font-size: 1.2rem; margin: 0 auto 35px auto; max-width: 1000px;">
            Losing hot water disrupts your entire household. As experts in <a href="/#/" style="color: #1e3a8a; text-decoration: underline;">water heater services waukegan</a>, we handle installation and emergency repair.
          </p>
          <div style="display: flex; justify-content: center;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 18px 40px; border-radius: 12px; font-size: 1.3rem; font-weight: 800; text-decoration: none; text-transform: uppercase;">Call Now</a>
          </div>
        </section>
      </div>
    `
  },

  // 4. SUMP PUMP (Matching: /services/sump-pump-protection)
  "sump-pump-protection": {
    title: "Sump Pump Installation Waukegan IL",
    image: "https://images.unsplash.com/photo-1517646281694-22d63636788a?auto=format&fit=crop&q=80",
    intro: `Sump pump installation waukegan il for storm safety.`,
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; gap: 0; font-family: sans-serif; color: #374151;">
        <section style="padding: 60px 10%; background-color: #ffffff; text-align: center;">
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 25px; text-transform: uppercase;">Sump Pump Services in Waukegan</h2>
          <p style="line-height: 1.8; font-size: 1.2rem; margin: 0 auto 35px auto; max-width: 1000px;">
            We specialize in <a href="/#/" style="color: #1e3a8a; text-decoration: underline;">sump pump installation waukegan il</a> and battery backups to prevent flooding.
          </p>
          <div style="display: flex; justify-content: center;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 18px 40px; border-radius: 12px; font-size: 1.3rem; font-weight: 800; text-decoration: none; text-transform: uppercase;">Call Now</a>
          </div>
        </section>
      </div>
    `
  },

  // 5. LEAK DETECTION (Matching: /services/advanced-leak-detection)
  "advanced-leak-detection": {
    title: "Leak Detection Services Waukegan IL",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
    intro: `Advanced leak detection services waukegan il.`,
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; gap: 0; font-family: sans-serif; color: #374151;">
        <section style="padding: 60px 10%; background-color: #ffffff; text-align: center;">
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 25px; text-transform: uppercase;">Leak Detection in Waukegan</h2>
          <p style="line-height: 1.8; font-size: 1.2rem; margin: 0 auto 35px auto; max-width: 1000px;">
            We use thermal imaging for <a href="/#/" style="color: #1e3a8a; text-decoration: underline;">leak detection services waukegan il</a>.
          </p>
          <div style="display: flex; justify-content: center;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 18px 40px; border-radius: 12px; font-size: 1.3rem; font-weight: 800; text-decoration: none; text-transform: uppercase;">Call Now</a>
          </div>
        </section>
      </div>
    `
  },

  // 6. GAS LINE (Matching: /services/gas-line-services)
  "gas-line-services": {
    title: "Gas Line Repair Waukegan IL",
    image: "https://images.unsplash.com/photo-1521207418485-99c705420785?auto=format&fit=crop&q=80",
    intro: `Certified gas line repair waukegan il.`,
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; gap: 0; font-family: sans-serif; color: #374151;">
        <section style="padding: 60px 10%; background-color: #ffffff; text-align: center;">
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 25px; text-transform: uppercase;">Gas Line Services in Waukegan</h2>
          <p style="line-height: 1.8; font-size: 1.2rem; margin: 0 auto 35px auto; max-width: 1000px;">
            Certified experts for <a href="/#/" style="color: #1e3a8a; text-decoration: underline;">gas line repair waukegan il</a>.
          </p>
          <div style="display: flex; justify-content: center;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 18px 40px; border-radius: 12px; font-size: 1.3rem; font-weight: 800; text-decoration: none; text-transform: uppercase;">Call Now</a>
          </div>
        </section>
      </div>
    `
  }
};
