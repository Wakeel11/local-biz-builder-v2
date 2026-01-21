// src/data/services.ts
import { BUSINESS_INFO } from '../constants';

export const SERVICES_DATA: Record<string, { title: string, content: string }> = {
  "emergency-repairs": {
    title: `24/7 Emergency Plumbing Repairs in ${BUSINESS_INFO.serviceArea}`,
    content: `
      <p>Plumbing disasters don't wait for convenient hours. Whether it's a burst pipe in the freezing winter or a major sewer backup, ${BUSINESS_INFO.name} has been the trusted authority since ${BUSINESS_INFO.established}. Serving the Illinois, Wisconsin, and Indiana tri-state area, our emergency response teams are strategically stationed to ensure a 30-minute arrival time.</p>
      
      <h3>Why Rapid Emergency Response Matters</h3>
      <p>Water damage can escalate from a minor leak to a structural catastrophe in minutes. Our expert technicians, serving the community since 2016, utilize high-velocity hydro-jetting and thermal imaging to stop the crisis at its source. We prioritize your home's integrity above all else. In areas like Beach Park and Waukegan, seasonal temperature shifts often lead to pipe expansion and contraction, making emergency maintenance a critical necessity for local homeowners.</p>
      
      <h3>Comprehensive Emergency Services</h3>
      <ul>
        <li><strong>Burst Pipe Repair:</strong> Critical for Illinois winters to prevent flooding.</li>
        <li><strong>Sewer Line Backups:</strong> Protecting your family's health and your basement's finish.</li>
        <li><strong>Gas Line Leaks:</strong> We follow certified safety protocols strictly for immediate mitigation.</li>
        <li><strong>Water Heater Failures:</strong> Immediate replacement and repair to restore your comfort.</li>
      </ul>

      <p>At ${BUSINESS_INFO.name}, we believe in transparency. Even in high-pressure emergency situations, we provide upfront pricing. Our legacy since ${BUSINESS_INFO.established} is built on trust, integrity, and local expertise. We understand the specific plumbing architecture of Waukegan and surrounding Lake County areas, allowing for faster diagnostics and lasting repairs.</p>
    `
  },
  "drain-cleaning": {
    title: "Professional Drain & Sewer Cleaning Services",
    content: `
      <p>Stubborn clogs and slow-moving drains are more than just a nuisance; they are often a symptom of deeper issues within your home's waste management system. Our professional drain cleaning services go beyond a simple snake tool. We utilize high-definition fiber-optic cameras to inspect the interior of your pipes, identifying root intrusions, grease buildup, or structural collapses.</p>

      <h3>Advanced Hydro-Jetting Technology</h3>
      <p>For the toughest blockages, we use hydro-jetting—a high-pressure water treatment that scours the inside of your pipes, removing years of debris and restoring them to like-new condition. Since ${BUSINESS_INFO.established}, we have cleared thousands of main sewer lines across Illinois and Wisconsin, preventing costly backups and structural damage.</p>

      <h3>When to Call a Drain Specialist?</h3>
      <ul>
        <li>Multiple drains clogging at the same time.</li>
        <li>Persistent sewage odors coming from sinks or tubs.</li>
        <li>Gurgling noises in the pipes after flushing.</li>
        <li>Frequent backups despite using retail drain cleaners.</li>
      </ul>

      <p>Our commitment to local service in areas like North Chicago and Gurnee ensures that we arrive with the right equipment for your specific drainage system. We prioritize non-invasive methods to keep your home clean while resolving the issue permanently.</p>
    `
  },
  "water-heaters": {
    title: "Expert Water Heater Installation & Repair",
    content: `
      <p>Hot water is essential for your comfort, especially during the cold months. Since ${BUSINESS_INFO.established}, we have specialized in both traditional tank-style and modern tankless water heater systems. Our comprehensive services include flushing sediment, replacing anode rods, and performing full system upgrades to ensure you never have a cold shower again.</p>

      <h3>Tankless vs. Traditional Systems</h3>
      <p>Many homeowners in ${BUSINESS_INFO.serviceArea} are switching to tankless water heaters for their energy efficiency and endless hot water supply. We help you choose the model that fits your family's usage and your budget. Proper maintenance is essential for the longevity of your system, especially in areas with hard water conditions common across Illinois.</p>

      <p>If your unit is more than 10 years old, leaking from the bottom, or making loud popping noises, it's time for a professional inspection. We provide energy-efficient solutions that save you money on monthly utilities while complying with all local building codes.</p>
    `
  },
  "sump-pumps": {
    title: "Reliable Sump Pump & Basement Protection",
    content: `
      <p>In the Midwest, a functional sump pump is not a luxury—it is a necessity. With heavy seasonal rains and varying water tables in the Illinois and Wisconsin region, basement flooding can cause catastrophic damage. We specialize in the installation and repair of high-efficiency primary pumps and battery-backup systems.</p>

      <h3>Why Battery Backups are Crucial</h3>
      <p>Power outages often happen during heavy storms—exactly when you need your sump pump most. Since ${BUSINESS_INFO.established}, we have protected thousands of homes by installing reliable backup systems that kick in the moment the primary pump fails or the power goes out. Our technicians ensure that your discharge lines are clear and that your basin is free of debris for maximum performance.</p>

      <p>Don't wait for a flood to find out your pump is dead. We offer annual maintenance checks to ensure your basement stays dry all year round, even in the most severe weather conditions.</p>
    `
  },
  "leak-detection": {
    title: "Non-Invasive Electronic Leak Detection",
    content: `
      <p>Hidden leaks are the silent killers of property value. Since ${BUSINESS_INFO.established}, ${BUSINESS_INFO.name} has utilized non-invasive technology to pinpoint water loss behind walls, under slab foundations, and beneath yards. This precision saves you from unnecessary demolition and expensive repairs.</p>

      <h3>Signs of a Hidden Water Leak</h3>
      <ul>
        <li>Unexplained spikes in your monthly water bill.</li>
        <li>The sound of running water when all faucets are off.</li>
        <li>Mildew or mold growth in unexpected places.</li>
        <li>Cracks in the foundation or damp spots on floors.</li>
      </ul>

      <p>Using acoustic sensors and thermal imaging cameras, our team identifies the exact source of a leak within inches. Whether you are in Beach Park or Waukegan, our local expertise ensures we find and fix the problem before it compromises your home's structural integrity.</p>
    `
  },
  "gas-lines": {
    title: "Certified Gas Line Repair & Installation",
    content: `
      <p>Gas leaks are among the most dangerous plumbing emergencies. Safety is our absolute priority at ${BUSINESS_INFO.name}. Since ${BUSINESS_INFO.established}, we have adhered to the strictest local building codes in Illinois and Indiana to ensure your family's protection from gas-related hazards.</p>

      <h3>Our Gas Line Expertise</h3>
      <p>We handle everything from emergency shutoffs and leak repairs to new line installations for stoves, fireplaces, and outdoor grills. Our licensed technicians use advanced "gas sniffers" to detect even the smallest leaks. If you smell rotten eggs or hear a hissing sound near your gas meter, call us immediately for emergency mitigation.</p>

      <p>Regular inspections of your gas lines can prevent dangerous situations. We provide comprehensive safety checks for older homes across the tri-state area, ensuring all fittings are secure and compliant with modern safety standards.</p>
    `
  }
};
