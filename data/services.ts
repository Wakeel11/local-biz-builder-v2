// src/data/services.ts
import { BUSINESS_INFO } from '../constants';

export const SERVICES_DATA: Record<string, { title: string, content: string }> = {
  "drain-cleaning": {
    title: `Professional Drain & Sewer Cleaning Services since ${BUSINESS_INFO.established}`,
    content: `
      <h3>Professional Drain Restoration & Debris Removal</h3>
      <p>Persistent clogs are more than just a nuisance; they are often a precursor to major structural damage. Since ${BUSINESS_INFO.established}, our certified team has specialized in industrial-grade drain cleaning solutions across the tri-state area.</p>
      
      <ul>
        <li><strong>Hydro-Jetting Technology:</strong> We use 4000 PSI water pressure to scour pipe walls clean.</li>
        <li><strong>Main Line Descaling:</strong> Removal of calcium and root intrusion for permanent flow.</li>
        <li><strong>Camera Inspections:</strong> Fiber-optic diagnostics to see exactly what is blocking your pipes.</li>
      </ul>

      <h3>Why Choose Licensed Experts?</h3>
      <p>Store-bought chemicals often corrode older pipes found in Illinois homes. Our non-invasive mechanical methods protect your plumbing architecture while resolving the issue for good.</p>
    `
  },
  "gas-lines": {
    title: `Certified Gas Line Repair & Safety Inspections`,
    content: `
      <h3>Safety First: Certified Gas Fitting Solutions</h3>
      <p>A gas leak is an absolute emergency. At ${BUSINESS_INFO.name}, we follow the strictest Illinois building codes to ensure your home's gas lines are 100% secure and leak-free.</p>

      <ul>
        <li><strong>Emergency Leak Repair:</strong> Using advanced gas sniffers to pinpoint micro-leaks.</li>
        <li><strong>Appliance Hookups:</strong> Certified installation for stoves, fireplaces, and outdoor grills.</li>
        <li><strong>Corrosion Inspection:</strong> Pre-emptive checking of old lines to prevent failures.</li>
      </ul>

      <h3>Local Industry Standards</h3>
      <p>Since ${BUSINESS_INFO.established}, our vision has always been to prioritize life safety. We adhere to the highest certification standards across Illinois, Indiana, and Wisconsin.</p>
    `
  }
};
