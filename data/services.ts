import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const primaryCity = illinoisCities[0].city;

export const SERVICES_DATA: Record<string, { title: string, content: string, image: string, intro: string }> = {
  // 1. EMERGENCY PLUMBING (Original)
  "emergency-repairs": {
    title: "24/7 Professional Urgent Plumbing Response",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80",
    intro: `Searching for emergency plumbing in waukegan? At ${BUSINESS_INFO.name}, we provide the rapid emergency plumbing service waukegan il homeowners trust. Our emergency plumber waukegan il team is available 24/7 to handle any plumbing emergency in Lake County, IL.`,
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; gap: 0; font-family: sans-serif; color: #374151;">
        <section style="padding: 60px 10%; background-color: #ffffff; text-align: center;">
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 25px; text-transform: uppercase;">Top-Rated Emergency Plumbing Service in Waukegan, IL</h2>
          <p style="line-height: 1.9; font-size: 1.2rem; margin: 0 auto 35px auto; max-width: 1050px;">
            When a plumbing emergency strikes your property, you need an emergency plumber near me open now who can arrive within the hour to mitigate damage. As a premier emergency plumbing company in Illinois, our team specializes in same-day plumbing service and 24 hour plumbing repair. We have established a reputation as the best <a href="/#/" style="color: #1e3a8a; text-decoration: underline;">emergency plumbing in waukegan</a> residents can rely on since our founding in 2016. We are not just emergency plumbing contractors; we are local experts who understand the unique structural demands of Northern Illinois properties. Whether you face a leaking pipe emergency or need a water leak emergency plumber, we provide urgent plumbing repair across the entire Lake County region.
          </p>
          <div style="display: flex; justify-content: center;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 18px 40px; border-radius: 12px; font-size: 1.3rem; font-weight: 800; text-decoration: none; text-transform: uppercase; box-shadow: 0 4px 15px rgba(34, 197, 94, 0.2);">Call Emergency Plumber Now</a>
          </div>
        </section>
        <section style="padding: 60px 10%; background-color: #f8fafc; display: flex; flex-wrap: wrap; gap: 40px; align-items: center; border-top: 1px solid #eee; border-bottom: 1px solid #eee;">
          <div style="flex: 1; min-width: 350px;">
            <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a; margin-bottom: 20px; text-transform: uppercase;">Metallurgy & Burst Pipe Emergency Repair</h3>
            <p style="margin-bottom: 20px; line-height: 1.7; font-size: 1.1rem;">
              In Illinois winters, emergency pipe burst repair is common as water expands by 9% when frozen, creating internal pressures exceeding 3,500 PSI. Our emergency plumbing waukegan team handles burst pipe emergency repair and emergency pipe burst repair with surgical precision. We use induction for emergency plumbing leak repair, preserving metallurgy and preventing future leaking pipe emergency needs. Whether it is a water leak emergency plumber need or emergency water leak repair, our same day emergency plumber response secures your property instantly.
            </p>
            <div style="display: flex; justify-content: center; lg:justify-content: flex-start;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #1e3a8a; color: white; padding: 15px 35px; border-radius: 8px; font-size: 1.1rem; font-weight: 700; text-decoration: none; text-transform: uppercase;">Request Urgent Pipe Repair</a>
            </div>
          </div>
          <div style="flex: 1; min-width: 350px;">
            <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" alt="Repair Service" style="width: 100%; height: auto; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);" />
          </div>
        </section>
        <section style="padding: 100px 10%; background-color: #ffffff;">
          <h2 style="font-size: 2.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 50px; text-align: center; text-transform: uppercase;">Emergency Plumbing Knowledge Base</h2>
          <div style="max-width: 1000px; margin: 0 auto; display: grid; gap: 40px;">
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">1. What is considered a plumbing emergency?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">A plumbing emergency risks property damage or safety. This includes burst pipe emergency repair, a major sewer backup repair, or a gas line plumbing emergency. contact us for same day plumbing repair immediately.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">2. Who to call for burst pipe in Waukegan, IL?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">Call a licensed emergency plumber waukegan residents trust. We specialize in burst pipe repair near me, providing technical reports required by Illinois insurance carriers to secure your restoration claim instantly.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">3. Is a plumbing leak an emergency?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">If the leak is behind a wall or under a slab, it is a high-intent emergency. A leaking pipe emergency can wash away foundation soil, leading to structural shifts. Call for emergency plumbing leak repair immediately.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">4. Is a clogged drain an emergency?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">If raw sewage backs up into your home or commercial kitchen, it is an emergency clogged drain. Call for an emergency sewer backup repair instantly to restore sanitation.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">5. Is water heater leak an emergency?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">Yes. An emergency water heater repair or replacement is vital if the tank is leaking from the bottom, as it can release 50+ gallons of hot water in seconds.</p>
            </div>
            <div>
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">6. How fast should an emergency plumber respond?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">In Lake County, an urgent plumbing repair response should be under 60 minutes. We strive for a 30-minute window for all emergency plumbing in waukegan il calls.</p>
            </div>
          </div>
          <div style="margin-top: 80px; background: #fff5f5; padding: 60px; border-radius: 40px; border: 3px dashed #f56565; text-align: center;">
            <p style="font-size: 2.2rem; font-weight: 900; color: #c53030; margin-bottom: 25px; text-transform: uppercase;">Emergency Dispatch Available Now</p>
            <div style="display: flex; justify-content: center;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #c53030; color: white; padding: 22px 65px; border-radius: 15px; font-size: 2rem; font-weight: 900; text-decoration: none; text-transform: uppercase; box-shadow: 0 10px 30px rgba(197, 48, 48, 0.4);">Call Dispatch Now</a>
            </div>
          </div>
        </section>
      </div>
    `
  },

  // 2. DRAIN & SEWER CLEANING
  "drain-sewer-cleaning": {
    title: "Drain & Sewer Cleaning Waukegan IL",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80",
    intro: `Looking for professional drain cleaning service waukegan il? At ${BUSINESS_INFO.name}, we provide the sewer cleaning waukegan residents trust for 24/7 waste management stability.`,
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; gap: 0; font-family: sans-serif; color: #374151;">
        <section style="padding: 60px 10%; background-color: #ffffff; text-align: center;">
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 25px; text-transform: uppercase;">Professional Drain Cleaning Service in Waukegan, IL</h2>
          <p style="line-height: 1.8; font-size: 1.2rem; margin: 0 auto 35px auto; max-width: 1000px;">
            Clogged drains are more than just an inconvenience; they indicate a waste management failure. When you need a professional drain cleaning service or a comprehensive sewer line cleaning service, our technicians utilize industrial equipment to restore flow. As the top <a href="/#/" style="color: #1e3a8a; text-decoration: underline;">drain cleaning waukegan il</a> provider, we handle everything from backed up drain repair to main sewer line cleaning. Since 2016, we have focused on providing the drain and sewer cleaning waukegan residents rely on for long-term home sanitation.
          </p>
          <div style="display: flex; justify-content: center;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 18px 40px; border-radius: 12px; font-size: 1.3rem; font-weight: 800; text-decoration: none; text-transform: uppercase;">Call Drain Experts Now</a>
          </div>
        </section>
        <section style="padding: 60px 10%; background-color: #f8fafc; display: flex; flex-wrap: wrap; gap: 40px; align-items: center; border-top: 1px solid #eee; border-bottom: 1px solid #eee;">
          <div style="flex: 1; min-width: 350px;">
            <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a; margin-bottom: 20px; text-transform: uppercase;">Hydro Jetting & Video Pipe Inspection</h3>
            <p style="margin-bottom: 30px; line-height: 1.8; font-size: 1.15rem;">
              Traditional snaking often fails. For a permanent solution, we utilize hydro jetting service technology. Hydro jet drain cleaning uses high-pressure water to scrub pipe walls of grease and root systems. To ensure line integrity, we provide a sewer camera inspection service. This video pipe inspection allows our plumbers to identify collapses in real-time. If you face a clogged sewer line emergency, our camera sewer inspection service provides the visual evidence needed for repair planning.
            </p>
            <div style="display: flex; justify-content: center;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #1e3a8a; color: white; padding: 15px 35px; border-radius: 8px; font-size: 1.1rem; font-weight: 700; text-decoration: none; text-transform: uppercase;">Book Sewer Inspection</a>
            </div>
          </div>
          <div style="flex: 1; min-width: 350px;">
            <img src="https://images.unsplash.com/photo-1543674892-7d64d45df18b?auto=format&fit=crop&q=80" alt="Drain Service" style="width: 100%; height: auto; border-radius: 20px;" />
          </div>
        </section>
        <section style="padding: 100px 10%; background-color: #ffffff;">
          <h2 style="font-size: 2.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 50px; text-align: center; text-transform: uppercase;">Sewer Cleaning Knowledge Base</h2>
          <div style="max-width: 1000px; margin: 0 auto; display: grid; gap: 40px;">
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px;">1. What are the signs of a clogged sewer line emergency?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">Multiple backed up drains and sewage smells indicate you should call for emergency drain cleaning immediately.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px;">2. How often should I schedule sewer cleaning waukegan?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">A sewer line cleaning service is recommended every 18-24 months to prevent root growth in historic Lake County pipes.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px;">3. Is hydro jetting safe for older pipes?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">Yes, provided a sewer camera inspection service is performed first to verify pipe structural integrity.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px;">4. Why is my drain backed up after a storm?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">Heavy rain overwhelmed lines often require emergency sewer cleaning near me to clear debris washed in during a surcharge.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px;">5. What happens during a video pipe inspection?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">We insert a waterproof camera to pinpoint blocks, roots, or collapses with GPS precision.</p>
            </div>
          </div>
          <div style="margin-top: 80px; background: #fef2f2; padding: 60px; border-radius: 40px; border: 3px dashed #dc2626; text-align: center;">
            <p style="font-size: 2rem; font-weight: 900; color: #991b1b; margin-bottom: 25px; text-transform: uppercase;">Sewer Backup Emergency? Call Now</p>
            <div style="display: flex; justify-content: center;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #dc2626; color: white; padding: 22px 60px; border-radius: 12px; font-size: 1.8rem; font-weight: 900; text-decoration: none; text-transform: uppercase;">Call Sewer Dispatch</a>
            </div>
          </div>
        </section>
      </div>
    `
  },

  // 3. WATER HEATER SERVICES
  "water-heater-services": {
    title: "Water Heater Repair Waukegan IL",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80",
    intro: `Need water heater repair waukegan il? From water heater installation waukegan to emergency water heater repair, our licensed technicians provide 24/7 hot water heater repair near me.`,
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; gap: 0; font-family: sans-serif; color: #374151;">
        <section style="padding: 60px 10%; background-color: #ffffff; text-align: center;">
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 25px; text-transform: uppercase;">Professional Water Heater Services in Waukegan, IL</h2>
          <p style="line-height: 1.8; font-size: 1.2rem; margin: 0 auto 35px auto; max-width: 1000px;">
            Losing hot water disrupts your entire household or business. Whether you need immediate water heater repair waukegan il or a full water heater replacement service, our technicians restore peak efficiency. As experts in <a href="/#/" style="color: #1e3a8a; text-decoration: underline;">water heater services waukegan</a>, we handle water heater leaking emergency calls with rapid response. Since 2016, we have specialized in water heater installation waukegan for high-efficiency gas and electric units across Lake County.
          </p>
          <div style="display: flex; justify-content: center;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 18px 40px; border-radius: 12px; font-size: 1.3rem; font-weight: 800; text-decoration: none; text-transform: uppercase;">Call For Hot Water Now</a>
          </div>
        </section>
        <section style="padding: 60px 10%; background-color: #f8fafc; display: flex; flex-wrap: wrap; gap: 40px; align-items: center; border-top: 1px solid #eee; border-bottom: 1px solid #eee;">
          <div style="flex: 1; min-width: 350px;">
            <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a; margin-bottom: 20px; text-transform: uppercase;">Tankless & Emergency Recovery Protocol</h3>
            <p style="margin-bottom: 30px; line-height: 1.8; font-size: 1.15rem;">
              We provide specialized tankless water heater installation and tankless water heater repair for endless hot water. If you face a water heater burst repair or need water heater pilot light repair, our same day water heater replacement waukegan il service is active. We service gas water heater repair and electric water heater repair systems with precision. Contact our no hot water plumber team for 24 hour water heater repair waukegan availability.
            </p>
            <div style="display: flex; justify-content: center;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #1e3a8a; color: white; padding: 15px 35px; border-radius: 8px; font-size: 1.1rem; font-weight: 700; text-decoration: none; text-transform: uppercase;">Schedule Tankless Service</a>
            </div>
          </div>
          <div style="flex: 1; min-width: 350px;">
            <img src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80" alt="Water Heater" style="width: 100%; height: auto; border-radius: 20px;" />
          </div>
        </section>
        <section style="padding: 100px 10%; background-color: #ffffff;">
          <h2 style="font-size: 2.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 50px; text-align: center; text-transform: uppercase;">Water Heater Knowledge Hub</h2>
          <div style="max-width: 1000px; margin: 0 auto; display: grid; gap: 40px;">
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">1. Is a water heater leak an emergency?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">Yes, a water heater leaking emergency can release 50+ gallons of hot water, causing catastrophic flood damage instantly.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">2. Why do I have no hot water?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">Common causes include a failed heating element, thermostat failure, or water heater pilot light repair needs. Contact a no hot water plumber.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">3. What is the benefit of tankless units?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">Tankless water heater installation provides unlimited hot water and lower energy bills compared to standard tank units.</p>
            </div>
          </div>
          <div style="margin-top: 80px; background: #fff5f5; padding: 60px; border-radius: 40px; border: 3px dashed #f56565; text-align: center;">
            <p style="font-size: 2rem; font-weight: 900; color: #c53030; margin-bottom: 25px; text-transform: uppercase;">Water Heater Burst? Call Now</p>
            <div style="display: flex; justify-content: center;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #c53030; color: white; padding: 22px 60px; border-radius: 12px; font-size: 1.8rem; font-weight: 900; text-decoration: none; text-transform: uppercase;">Call Water Heater Team</a>
            </div>
          </div>
        </section>
      </div>
    `
  },

  // 4. SUMP PUMP PROTECTION
  "sump-pump-protection": {
    title: "Sump Pump Installation Waukegan IL",
    image: "https://images.unsplash.com/photo-1517646281694-22d63636788a?auto=format&fit=crop&q=80",
    intro: `Looking for sump pump installation waukegan il? Our sump pump repair waukegan team offers basement flood protection waukegan homeowners trust for storm safety.`,
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; gap: 0; font-family: sans-serif; color: #374151;">
        <section style="padding: 60px 10%; background-color: #ffffff; text-align: center;">
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 25px; text-transform: uppercase;">Waukegan Basement Flood Protection & Sump Pump Services</h2>
          <p style="line-height: 1.8; font-size: 1.2rem; margin: 0 auto 35px auto; max-width: 1000px;">
            In Lake County, a functional sump pump is your primary defense against groundwater surcharges. Whether you need a basement sump pump installation or an emergency sump pump repair, we are ready. As a top <a href="/#/" style="color: #1e3a8a; text-decoration: underline;">sump pump installation waukegan il</a> provider, we specialize in flood prevention sump pump strategies that protect your foundation. Since 2016, we have performed the sump pump services waukegan families rely on during the Midwest rainy season.
          </p>
          <div style="display: flex; justify-content: center;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 18px 40px; border-radius: 12px; font-size: 1.3rem; font-weight: 800; text-decoration: none; text-transform: uppercase;">Protect Your Basement</a>
          </div>
        </section>
        <section style="padding: 60px 10%; background-color: #f8fafc; border-top: 1px solid #eee; border-bottom: 1px solid #eee; display: flex; flex-wrap: wrap; gap: 40px; align-items: center;">
          <div style="flex: 1; min-width: 350px;">
            <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a; margin-bottom: 20px; text-transform: uppercase;">Battery Backup & Seasonal Mitigation</h3>
            <p style="margin-bottom: 30px; line-height: 1.8; font-size: 1.15rem;">
              Power outages often occur during flooding storms. We provide battery backup sump pump installation and backup sump pump system maintenance to ensure your pit never overflows. If you face a sump pump not working emergency or need a flooded basement pump repair, our sump pump installers waukegan il technicians provide rapid stabilization and sump pump replacement service.
            </p>
            <div style="display: flex; justify-content: center;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #1e3a8a; color: white; padding: 15px 35px; border-radius: 8px; font-size: 1.1rem; font-weight: 700; text-decoration: none; text-transform: uppercase;">Get Backup Quote</a>
            </div>
          </div>
          <div style="flex: 1; min-width: 350px;">
            <img src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80" alt="Sump Pump" style="width: 100%; height: auto; border-radius: 20px;" />
          </div>
        </section>
        <section style="padding: 100px 10%; background-color: #ffffff;">
          <h2 style="font-size: 2.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 50px; text-align: center; text-transform: uppercase;">Flood Protection Knowledge Base</h2>
          <div style="max-width: 1000px; margin: 0 auto; display: grid; gap: 40px;">
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">1. Why is my sump pump failing?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">Common causes include float switch failure or debris in the impeller requiring emergency sump pump repair.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">2. Do I need a backup pump?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">Yes, a battery backup sump pump ensures protection during storms when power outages are likely.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">3. What is maintenance service?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">Sump pump maintenance service involves cleaning the pit and testing the check valve for operational safety.</p>
            </div>
          </div>
          <div style="margin-top: 80px; background: #fff5f5; padding: 60px; border-radius: 40px; border: 3px dashed #f56565; text-align: center;">
            <p style="font-size: 2.2rem; font-weight: 900; color: #c53030; margin-bottom: 25px; text-transform: uppercase;">Pump Not Working? Call Now</p>
            <div style="display: flex; justify-content: center;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #c53030; color: white; padding: 22px 60px; border-radius: 12px; font-size: 2rem; font-weight: 900; text-decoration: none; text-transform: uppercase;">Dispatch Pump Team</a>
            </div>
          </div>
        </section>
      </div>
    `
  },

  // 5. ADVANCED LEAK DETECTION
  "advanced-leak-detection": {
    title: "Leak Detection Services Waukegan IL",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
    intro: `Searching for leak detection services waukegan il? Our advanced leak detection service utilizes electronic leak detection and thermal imaging to find hidden water leak detection points.`,
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; gap: 0; font-family: sans-serif; color: #374151;">
        <section style="padding: 60px 10%; background-color: #ffffff; text-align: center;">
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 25px; text-transform: uppercase;">High-Precision Leak Detection Services in Waukegan, IL</h2>
          <p style="line-height: 1.8; font-size: 1.2rem; margin: 0 auto 35px auto; max-width: 1000px;">
            A silent leak can destroy your property's structural integrity. Whether you need underground leak detection or a slab leak detection service, we provide non-invasive solutions. As experts in <a href="/#/" style="color: #1e3a8a; text-decoration: underline;">leak detection services waukegan il</a>, we use thermal imaging to solve hidden water leak detection challenges that others miss. Since 2016, we have protected Waukegan homes from foundation rot using plumbing leak detection waukegan protocols.
          </p>
          <div style="display: flex; justify-content: center;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 18px 40px; border-radius: 12px; font-size: 1.3rem; font-weight: 800; text-decoration: none; text-transform: uppercase;">Find Your Leak Now</a>
          </div>
        </section>
        <section style="padding: 60px 10%; background-color: #f8fafc; border-top: 1px solid #eee; border-bottom: 1px solid #eee; display: flex; flex-wrap: wrap; gap: 40px; align-items: center;">
          <div style="flex: 1; min-width: 350px;">
            <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a; margin-bottom: 20px; text-transform: uppercase;">Thermal Imaging & Non-Invasive Diagnostics</h3>
            <p style="margin-bottom: 30px; line-height: 1.8; font-size: 1.15rem;">
              We utilize electronic leak detection to hear escaping water and pipe leak detection without damage technology to preserve your flooring. Our water leak detection service ensures that hidden leaks behind walls are found instantly. If you have an emergency leak detection plumber need, our team provides 24/7 water leak detection waukegan il response for Lake County residents.
            </p>
            <div style="display: flex; justify-content: center;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #1e3a8a; color: white; padding: 15px 35px; border-radius: 8px; font-size: 1.1rem; font-weight: 700; text-decoration: none; text-transform: uppercase;">Request Thermal Scan</a>
            </div>
          </div>
          <div style="flex: 1; min-width: 350px;">
            <img src="https://images.unsplash.com/photo-1517646281694-22d63636788a?auto=format&fit=crop&q=80" alt="Leak Detection" style="width: 100%; height: auto; border-radius: 20px;" />
          </div>
        </section>
        <section style="padding: 100px 10%; background-color: #ffffff;">
          <h2 style="font-size: 2.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 50px; text-align: center; text-transform: uppercase;">Leak Detection Knowledge Base</h2>
          <div style="max-width: 1000px; margin: 0 auto; display: grid; gap: 40px;">
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">1. Is electronic leak detection accurate?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">Yes, it pinpoint failures to within a few inches, even through concrete or drywall.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">2. Why use thermal imaging?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">It detects temperature changes caused by moisture, revealing silent leaks instantly.</p>
            </div>
          </div>
          <div style="margin-top: 80px; background: #fff5f5; padding: 60px; border-radius: 40px; border: 3px dashed #f56565; text-align: center;">
            <p style="font-size: 2.2rem; font-weight: 900; color: #c53030; margin-bottom: 25px; text-transform: uppercase;">Hidden Leak? Call Now</p>
            <div style="display: flex; justify-content: center;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #c53030; color: white; padding: 22px 60px; border-radius: 12px; font-size: 2rem; font-weight: 900; text-decoration: none; text-transform: uppercase;">Dispatch Leak Team</a>
            </div>
          </div>
        </section>
      </div>
    `
  },

  // 6. GAS LINE SERVICES
  "gas-line-services": {
    title: "Gas Line Repair Waukegan IL",
    image: "https://images.unsplash.com/photo-1521207418485-99c705420785?auto=format&fit=crop&q=80",
    intro: `Looking for gas line repair waukegan il? Our certified gas line plumber team provides emergency gas line repair and gas leak repair service 24/7.`,
    content: `
      <div style="width: 100%; display: flex; flex-direction: column; gap: 0; font-family: sans-serif; color: #374151;">
        <section style="padding: 60px 10%; background-color: #ffffff; text-align: center;">
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #1e3a8a; margin-bottom: 25px; text-transform: uppercase;">Waukegan Certified Gas Line Repair & Installation</h2>
          <p style="line-height: 1.8; font-size: 1.2rem; margin: 0 auto 35px auto; max-width: 1000px;">
            A gas leak is a life-safety crisis. Whether you need emergency gas line repair or a gas line installation waukegan for a new stove, safety is our priority. As a premier <a href="/#/" style="color: #1e3a8a; text-decoration: underline;">gas line repair waukegan il</a> company, we provide certified gas line plumber expertise to secure natural gas or propane systems. Since 2016, we have performed the gas line services waukegan families trust for total peace of mind in Lake County.
          </p>
          <div style="display: flex; justify-content: center;">
            <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #22c55e; color: white; padding: 18px 40px; border-radius: 12px; font-size: 1.3rem; font-weight: 800; text-decoration: none; text-transform: uppercase;">Call Certified Plumber Now</a>
          </div>
        </section>
        <section style="padding: 60px 10%; background-color: #f8fafc; border-top: 1px solid #eee; border-bottom: 1px solid #eee; display: flex; flex-wrap: wrap; gap: 40px; align-items: center;">
          <div style="flex: 1; min-width: 350px;">
            <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a; margin-bottom: 20px; text-transform: uppercase;">Gas Leak Emergency Protocol & Safety</h3>
            <p style="margin-bottom: 30px; line-height: 1.8; font-size: 1.15rem;">
              If you smell gas call plumber immediately. We provide high-spec gas leak repair service and propane gas line repair using certified testing. Our gas line inspection service ensures all joints meet Illinois safety codes. Whether you need natural gas line repair or a 24/7 gas line repair service, we find gas line leak repair near me points instantly. Contact our licensed gas line contractor waukegan team for immediate dispatch.
            </p>
            <div style="display: flex; justify-content: center;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #1e3a8a; color: white; padding: 15px 35px; border-radius: 8px; font-size: 1.1rem; font-weight: 700; text-decoration: none; text-transform: uppercase;">Book Safety Check</a>
            </div>
          </div>
          <div style="flex: 1; min-width: 350px;">
            <img src="https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80" alt="Gas Line" style="width: 100%; height: auto; border-radius: 20px;" />
          </div>
        </section>
        <section style="padding: 100px 10%; background-color: #ffffff;">
          <h2 style="font-size: 2.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 50px; text-align: center; text-transform: uppercase;">Gas Safety Knowledge Base</h2>
          <div style="max-width: 1000px; margin: 0 auto; display: grid; gap: 40px;">
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">1. What if I smell rotten eggs?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">Evacuate your home and call for a gas leak emergency plumber immediately from a safe distance.</p>
            </div>
            <div style="border-bottom: 1px solid #f3f4f6; padding-bottom: 25px;">
              <h4 style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a; margin-bottom: 10px; text-transform: uppercase;">2. Are you licensed gas contractors?</h4>
              <p style="color: #4b5563; font-size: 1.15rem; line-height: 1.8;">Yes, we are licensed gas line contractor waukegan professionals for natural gas and propane.</p>
            </div>
          </div>
          <div style="margin-top: 80px; background: #fff5f5; padding: 60px; border-radius: 40px; border: 3px dashed #f56565; text-align: center;">
            <p style="font-size: 2.2rem; font-weight: 900; color: #c53030; margin-bottom: 25px; text-transform: uppercase;">Smell Gas? Call Now</p>
            <div style="display: flex; justify-content: center;">
              <a href="tel:${BUSINESS_INFO.phone}" style="background-color: #c53030; color: white; padding: 22px 60px; border-radius: 12px; font-size: 2rem; font-weight: 900; text-decoration: none; text-transform: uppercase;">Dispatch Gas Team</a>
            </div>
          </div>
        </section>
      </div>
    `
  }
};
