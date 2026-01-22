import { BUSINESS_INFO } from '../constants';
import { illinoisCities } from '../cities';

const primaryCity = illinoisCities[0].city;

export const SERVICES_DATA: Record<string, { title: string, content: string, image: string, intro: string }> = {
  "emergency-repairs": {
    title: `24/7 Emergency ${BUSINESS_INFO.name.split(' ')[1]} & Critical Structural Mitigation`,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80",
    intro: `Plumbing emergencies in Waukegan don't follow a schedule. Since 2016, we have provided a 30-minute rapid response for all critical failures in ${primaryCity} and surrounding tri-state areas.`,
    content: `
      <h3 style="font-size: 2.2rem; font-weight: 900; color: #1e3a8a; margin-bottom: 1.5rem; text-transform: uppercase; italic; border-bottom: 6px solid #f97316; display: inline-block;">Waukegan's Leading Critical Crisis Mitigation Protocol</h3>
      <p style="margin-bottom: 1.5rem; line-height: 2.2; font-size: 1.1rem;">Plumbing emergencies in the Midwest are not merely inconveniences; they are existential threats to your property's foundation. A single main water line break can release over **750 gallons of water per hour**, saturating floor joists and compromising the concrete slab's integrity within a 24-hour window. Since 2016, Eduardo Zuniga has refined a "Rapid Stabilization" system that focuses on immediate pressure neutralization. While general plumbers in Lake County might take 4-6 hours to arrive, our fleet is strategically positioned near Green Bay Rd and Belvidere Rd to ensure we hit your doorstep in 30 minutes or less. We treat every emergency with the urgency of a life-safety event, ensuring that your home remains a safe, dry environment for your family.</p>
      
      <h4 style="font-size: 1.7rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem; text-transform: uppercase;">The Thermodynamics and Metallurgy of Frozen Pipe Fractures</h4>
      <p style="margin-bottom: 1.5rem; line-height: 1.8;">Illinois winters are unforgiving, and the physics of a pipe burst are often misunderstood by standard plumbers. When water inside a copper, PEX, or PVC pipe drops below $32^{\circ}F$, the H2O molecules rearrange into a crystalline lattice structure, expanding the volume by nearly **9%**. This expansion creates a massive hydraulic pressure surge between the ice blockage and the closed faucet, often reaching pressures exceeding **3,500 PSI**—which is nearly 10 times the rated burst capacity of residential copper tubing.</p>
      <p style="margin-bottom: 1.5rem; line-height: 1.8;">Our specialized mitigation involve high-precision **Electronic Pipe Thawing (EPT)** technology. Unlike competitors who use open-flame propane torches—a major fire hazard in historic Waukegan attics—we use controlled low-voltage induction to safely liquefy the ice blockage without subjecting the metal to thermal shock. This engineering-first approach preserves your pipe's metallurgical strength and prevents the micro-fractures that lead to secondary "pinhole" leaks once the system is pressurized again. We don't just fix the burst; we reinforce the entire line against future thermal expansion.</p>

      <div style="background-color: #f8fafc; padding: 3rem; border-radius: 2rem; border-left: 15px solid #1e3a8a; margin-bottom: 3rem; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);">
        <h4 style="font-weight: 900; font-size: 1.6rem; margin-bottom: 1.5rem; text-transform: uppercase; color: #1e3a8a;">The Zuniga Emergency Standard vs. Regional Competitors:</h4>
        <ul style="list-style-type: none; padding: 0; display: flex; flex-direction: column; gap: 1.5rem;">
          <li style="font-size: 1.1rem;"><strong>1. Structural Integrity Moisture Audit:</strong> We don't just stop the leak; we perform a full moisture map of your foundation using infrared sensors. We ensure no hidden water pockets remain under your slab or behind your drywall, which is the #1 cause of black mold growth in Lake County homes.</li>
          <li style="font-size: 1.1rem;"><strong>2. 2026-Spec Industrial Extraction:</strong> Our trucks are equipped with heavy-duty vacuums that can clear a flooded basement 5x faster than standard sub-pumps. This speed is critical to preventing wood rot in your floor joists.</li>
          <li style="font-size: 1.1rem;"><strong>3. Forensic Insurance Documentation:</strong> Every emergency fix since 2016 is documented with high-res forensic photos. We provide your insurance adjuster with a technical engineering report to ensure you receive the maximum claim value for your restoration.</li>
          <li style="font-size: 1.1rem;"><strong>4. 24/7 GPS-Dispatched Logistics:</strong> Utilizing real-time traffic data for Beach Park, Zion, and Park City to ensure our technicians bypass Midwest snow delays.</li>
        </ul>
      </div>

      <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1.5rem;">Waukegan Emergency Case Study: Sub-Zero Main Line Failure</h3>
      <p style="margin-bottom: 1.5rem; line-height: 1.8;">During the January 2025 deep freeze, a multi-family property in North Chicago suffered a total main line fracture. Standing water threatened the building's central electrical room, risking a week-long displacement for 12 families. While other services quoted a 10-hour lead time, **Zuniga Plumbing** arrived in 24 minutes. We deployed hydraulic plugs and utilized sonic mapping to find the secondary fracture hidden under the building's entry slab. We saved the property owner over **$120,000 in structural damage** and restored clean water services by 5:30 AM the same day. This is the level of authority we bring to every call.</p>

      <h4 style="font-size: 1.8rem; font-weight: 900; color: #1e3a8a; margin-bottom: 2rem; text-transform: uppercase;">Exhaustive Emergency Response FAQ:</h4>
      <div style="display: grid; gap: 2.5rem;">
        <p><strong>1. "How do I find my main water shut-off in a panic?"</strong> In 90% of Waukegan homes, the main valve is in the basement or crawlspace near the front of the house. Look for a round handle or a lever valve. Turn it clockwise. If the valve is corroded and won't budge, do not use a hammer. Call us immediately; we carry hydraulic valve tools designed to free seized gate valves without snapping the stem.</p>
        <p><strong>2. "Is standing water always an immediate health hazard?"</strong> If the leak is from a water line (Category 1), it is safe for 12 hours. If it is from a sewer backup (Category 3), it contains harmful bacteria and viruses. Do not touch it without PPE. Our emergency teams carry biohazard mitigation gear to safely extract and disinfect sewer-contaminated areas.</p>
        <p><strong>3. "How do you detect a leak behind a bathroom wall without demo?"</strong> We use **Acoustic Ultrasonic Detectors**. This technology allows us to hear the high-frequency "hiss" of escaping water through 12 inches of drywall or tile. We pinpoint the leak to within a 3-inch radius, meaning we only open a tiny access panel instead of gutting your entire bathroom.</p>
        <p><strong>4. "Why did my PEX pipe burst if it's rated for cold?"</strong> PEX is flexible, but the brass crimp fittings and elbows are rigid. In Midwest freezes, the expansion forces the fitting to crack or the pipe to pull away from the barb. We use specialized expansion-loop designs in all our emergency repairs to ensure it never happens again.</p>
        <p><strong>5. "Are Zuniga's technicians certified for Gas emergencies at night?"</strong> Yes. Every midnight responder is multi-certified for both water and natural gas mitigation. We follow the strictest IL safety standards and OSHA protocols to ensure your property is secure from both flood and explosion risks.</p>
        <p><strong>6. "Can a small pinhole leak lead to foundation 'Slab Heave'?"</strong> Yes. Constant water flow under a slab erodes the soil, causing the soil to expand and physically lift your concrete floor. If you notice "hot spots" on your floor or unexplained cracks in your tile, call for a sonic scan immediately.</p>
        <p><strong>7. "What is your arrival guarantee for Beach Park?"</strong> We guarantee a technician will be on-site within 30 minutes for any high-priority burst pipe or gas leak. Our local presence in Beach Park since 2016 allows us to outperform any corporate franchise.</p>
        <p><strong>8. "What should I do if my water heater starts leaking from the bottom?"</strong> This is usually a sign of structural tank failure. Immediately shut off the cold water supply valve on top of the heater and turn off the gas/power. A tank burst can release 50 gallons of water in seconds, causing major flooding.</p>
      </div>
    `
  },
  "drain-cleaning": {
    title: "Industrial Hydro-Jetting & Sewer Restoration Authority",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80",
    intro: `Restore original wall-to-wall flow with 4,000 PSI hydro-jetting. Serving Lake County's historic drainage systems since 2016.`,
    content: `
      <h3 style="font-size: 2.2rem; font-weight: 900; color: #1e3a8a; margin-bottom: 1.5rem; text-transform: uppercase; italic; border-bottom: 6px solid #f97316; display: inline-block;">Hydro-Jetting: The Only Permanent Solution for Sewer Performance</h3>
      <p style="margin-bottom: 1.5rem; line-height: 2.2; font-size: 1.1rem;">Traditional snaking or "rootering" is a legacy technology from the 1940s that no longer meets the needs of modern Waukegan households. A snake only punches a 2-inch hole through a 4-inch clog, leaving a thick lining of grease, hair, and mineral scale clinging to the pipe walls. Within 6 months, new waste catches on this residue, and you have another backup. At ${BUSINESS_INFO.name}, we utilize **4,000 PSI Industrial Hydro-Jetting**. This process scours the interior walls of your pipes to a surgical clean, removing years of calcified waste and returning them to their original 2016-spec flow diameter.</p>
      
      <h4 style="font-size: 1.7rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem; text-transform: uppercase;">The Science of Pipe Tuberculation & Mineral Scaling</h4>
      <p style="margin-bottom: 1.5rem; line-height: 1.8;">Older Waukegan homes with cast-iron sewer laterals suffer from a process called **Tuberculation**. This is where internal corrosion creates jagged, cave-like rust deposits inside the pipe. These deposits act like Velcro, catching solid waste and grease. Our hydro-jetting process uses specialized **Polishing Nozzles** that propel water at supersonic speeds to smooth these surfaces. This not only clears the line but extends the pipe's life by up to **25 years**, preventing the need for a total $15,000 sewer replacement. Since 2016, we have saved hundreds of local sewer lines using this precise engineering approach.</p>

      <div style="background-color: #eff6ff; padding: 3rem; border-radius: 2rem; border: 3px solid #dbeafe; margin-bottom: 3rem; box-shadow: inset 0 2px 10px rgba(0,0,0,0.05);">
        <h4 style="font-size: 1.6rem; font-weight: 900; margin-bottom: 1.5rem; text-transform: uppercase; color: #1e3a8a;">Zuniga's 5-Stage Restoration Protocol:</h4>
        <ul style="list-style-type: none; padding: 0; display: flex; flex-direction: column; gap: 1.5rem;">
          <li style="font-size: 1.1rem;"><strong>1. HD Fiber-Optic Diagnostic Pass:</strong> We map the structural health and root entry points using waterproof cameras before applying pressure, ensuring we don't damage fragile clay pipes.</li>
          <li style="font-size: 1.1rem;"><strong>2. High-Torque Mechanical De-Scaling:</strong> For heavy mineral buildup, we use carbide-tipped cutters to break the "bond" before the final jetting pass.</li>
          <li style="font-size: 1.1rem;"><strong>3. 4,000 PSI Wall-Scouring:</strong> Utilizing reverse-jet technology to strip pipe walls of grease (FOG), hair, and soap scum.</li>
          <li style="font-size: 1.1rem;"><strong>4. Biological Enzymatic Treatment:</strong> We apply industrial-grade enzyme treatments that digest organic residue, preventing grease from re-bonding to the metal.</li>
          <li style="font-size: 1.1rem;"><strong>5. Technical Post-Audit Verification:</strong> We provide you with a high-definition video of your clean sewer line, confirming authority-level performance.</li>
        </ul>
      </div>

      <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1.5rem;">Waukegan Clay Pipe Engineering Authority</h3>
      <p style="margin-bottom: 1.5rem; line-height: 1.8;">Many homes in Waukegan's central district utilize **Vitrified Clay Pipes**. These pipes are brittle and highly susceptible to "Joint Offsets" due to Illinois' seasonal soil expansion. Amateur plumbers often shatter these pipes by using a heavy metal snake. Our hydro-jetting is non-mechanical and water-based, making it the safest option for preserving 60-year-old infrastructure while achieving a total clean. We have specialized in this delicate mitigation since our founding in 2016.</p>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 3rem; border: 1px solid #e2e8f0; background: white;">
        <thead>
          <tr style="background-color: #1e3a8a; color: white;">
            <th style="padding: 15px; border: 1px solid #e2e8f0;">Service Metric</th>
            <th style="padding: 15px; border: 1px solid #e2e8f0;">Standard Rooter</th>
            <th style="padding: 15px; border: 1px solid #e2e8f0;">Zuniga Hybrid Jetting</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 15px; border: 1px solid #e2e8f0; font-weight: bold;">Grease/FOG Removal</td><td style="padding: 15px; border: 1px solid #e2e8f0;">Spreads Residue</td><td style="padding: 15px; border: 1px solid #e2e8f0; font-weight: bold;">100% Extraction</td></tr>
          <tr><td style="padding: 15px; border: 1px solid #e2e8f0; font-weight: bold;">Root Intrusion Kill</td><td style="padding: 15px; border: 1px solid #e2e8f0;">Temporary Trim</td><td style="padding: 15px; border: 1px solid #e2e8f0; font-weight: bold;">Wall-to-Wall Descaling</td></tr>
          <tr><td style="padding: 15px; border: 1px solid #e2e8f0; font-weight: bold;">Pipe Durability</td><td style="padding: 15px; border: 1px solid #e2e8f0;">No Increase</td><td style="padding: 15px; border: 1px solid #e2e8f0; font-weight: bold;">+20 Year Lifespan</td></tr>
        </tbody>
      </table>

      <h4 style="font-size: 1.8rem; font-weight: 900; color: #1e3a8a; margin-bottom: 2rem; text-transform: uppercase;">Comprehensive Drain & Sewer Authority FAQ:</h4>
      <div style="display: grid; gap: 2rem; line-height: 1.8;">
        <p><strong>1. "Why does my drain keep clogging every few months?"</strong> This is a sign of internal pipe scaling or a partial root intrusion. A snake is only making a small path for water, but the pipe walls are still restricted. You need a 4,000 PSI hydro-jet pass to remove the buildup that is catching new waste.</p>
        <p><strong>2. "Is hydro-jetting safe for historic 1950s homes?"</strong> Yes, provided a camera inspection is performed first to confirm structural stability. We use pressure-regulating valves to ensure the PSI stays within the safe threshold for aged metal while still achieving a total clean.</p>
        <p><strong>3. "Why does my basement smell like sewage after a heavy rain?"</strong> This is often a sign of a city sewer surcharge pushing sewer gases back into your lateral. We can install "Backwater Valves" that allow waste to leave your home but prevent city sewage from entering during Illinois storms.</p>
        <p><strong>4. "Are 'flushable' wipes actually safe for Waukegan pipes?"</strong> No. They do not biodegrade and are the leading cause of main-line sewer backups in Lake County. We recommend discarding them in the trash to avoid a $500 emergency call.</p>
        <p><strong>5. "How do you permanently get rid of tree roots in a sewer?"</strong> We use a combination of mechanical root cutting and hydro-jetting, followed by a chemical root-foaming treatment. This treatment kills the root structure inside the pipe without harming the tree itself.</p>
        <p><strong>6. "Can you clear a kitchen line full of grease?"</strong> Yes, we specialize in high-temperature hydro-jetting that emulsifies grease (FOG) and washes it away. This is the only way to clear a commercial or residential kitchen main line permanently.</p>
        <p><strong>7. "What is a 'Sewer Belly' and how do you fix it?"</strong> A belly is a sag in the pipe caused by soil settlement. Waste collects in this sag. While only replacement fixes the belly, regular hydro-jetting keeps it clear of the debris that leads to backups.</p>
        <p><strong>8. "What is the warranty on a hydro-jetting service?"</strong> Because we verify the clean with a camera, we offer a 1-year 'No-Clog Guarantee' on all main sewer line restorations for Waukegan residents.</p>
      </div>
    `
  },
  "water-heaters": {
    title: "High-Efficiency Tankless & Traditional Thermal Engineering",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
    intro: `Maximize your home's thermal efficiency with our certified 2026-spec water heating installations. Local authority since 2016.`,
    content: `
      <h3 style="font-size: 2.2rem; font-weight: 900; color: #1e3a8a; margin-bottom: 1.5rem; text-transform: uppercase; italic; border-bottom: 6px solid #f97316; display: inline-block;">Advanced Thermal Engineering for Midwest Winters</h3>
      <p style="margin-bottom: 1.5rem; line-height: 2.2; font-size: 1.1rem;">A water heater in Waukegan has a harder life than in almost any other region in the country. Lake County's municipal water contains high concentrations of calcium and magnesium carbonate. When this water is heated to $120^{\circ}F$, these minerals solidify into a rock-hard layer of sediment at the bottom of your tank. This layer acts as a thermal barrier, forcing the burner to run **40% hotter** to reach the water through the "mud," which leads to **Thermal Stress Fractures** in the inner glass lining. Since 2016, Eduardo Zuniga has focused on "Sediment Mitigation" to double the lifespan of local heating units.</p>
      
      <h4 style="font-size: 1.7rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem; text-transform: uppercase;">The Science of Tankless Transitions (On-Demand Heating)</h4>
      <p style="margin-bottom: 1.5rem; line-height: 1.8;">Traditional 50-gallon tanks are constantly firing to maintain temperature—even when you are sleeping or at work. In a freezing Illinois basement, this "Standby Heat Loss" accounts for nearly 25% of your monthly gas bill. Tankless systems, such as **Navien** and **Rinnai**, utilize a copper heat exchanger to flash-heat water only when a tap is turned on. This achieves a **97% Uniform Energy Factor (UEF)**, compared to just 60% for a standard tank. Since 2016, we have specialized in these high-efficiency transitions.</p>
      <p style="margin-bottom: 1.5rem; line-height: 1.8;">Our specialized technicians are factory-trained in **High-Altitude Venting** and **Acidic Condensate Management**—two critical factors for Midwest tankless installs that general plumbers often overlook. Without a proper neutralizer, the condensate from a tankless unit will eat through your cast-iron sewer line within 5 years. At Zuniga Plumbing, we ensure 100% compliance with every safety and engineering detail to protect your long-term asset value.</p>

      <div style="background-color: #f0f9ff; padding: 3.5rem; border-radius: 2.5rem; border: 3px solid #bae6fd; margin-bottom: 3.5rem; box-shadow: inset 0 2px 10px rgba(0,0,0,0.05);">
        <h4 style="font-weight: 900; font-size: 1.6rem; margin-bottom: 1.5rem; text-transform: uppercase; color: #0369a1;">Zuniga's 8-Point Installation Standards:</h4>
        <ul style="list-style-type: none; padding: 0; display: flex; flex-direction: column; gap: 1.2rem; font-weight: 600;">
          <li>✓ Expansion Tank Integration: Neutralizing hydraulic pressure surges that cause pipe stress fractures during heating cycles.</li>
          <li>✓ Brass Full-Port Ball Valves: For reliable, corrosion-free emergency isolation during future annual maintenance.</li>
          <li>✓ Dielectric Unions: Preventing galvanic corrosion where copper meets steel—the #1 cause of tank heater leaks in Waukegan.</li>
          <li>✓ Earthquake Strapping & Ventilation Audit: Exceeding local IL safety codes for total household gas protection.</li>
          <li>✓ Inline Scale Mitigation: Specialized filtration that prevents mineral buildup on high-efficiency heating elements.</li>
          <li>✓ Thermal Expansion Testing: Ensuring your entire plumbing system can handle the new heater's BTU output.</li>
          <li>✓ Gas Manifold Pressure Hold: A mandatory 24-hour test for all new installations to ensure 100% safety.</li>
          <li>✓ Full Permitting & Safety Pass: We handle all Lake County municipality coordination for your peace of mind.</li>
        </ul>
      </div>

      <h4 style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem; text-transform: uppercase;">Water Heater Maintenance ROI Analysis</h4>
      <p style="margin-bottom: 1.5rem; line-height: 1.8;">A water heater replacement in Waukegan costs between **$1,500 and $5,500**. Our annual **Hydro-Flush** service costs a fraction of that and can extend your unit's life by **10-15 years**. Since 2016, we have maintained a water hardness profile database for Beach Park and Waukegan to customize our maintenance intervals, ensuring you get the absolute maximum ROI from your thermal investment.</p>

      <h4 style="font-size: 1.8rem; font-weight: 900; color: #1e3a8a; margin-bottom: 2rem; text-transform: uppercase;">Comprehensive Water Heater Authority FAQ:</h4>
      <div style="display: grid; gap: 2rem;">
        <p><strong>1. "Why is my water heater making a loud popping or banging sound?"</strong> This is 'Kettling'. Steam bubbles are trapped under the thick sediment layer at the bottom of the tank. As they burst through the mud, they create that noise. This is a sign of extreme sediment buildup and imminent heater failure. Call for a professional flush immediately.</p>
        <p><strong>2. "What is a Sacrificial Anode Rod and why is it important?"</strong> The anode rod is a magnesium rod designed to corrode *instead* of your tank's steel body. Once the rod is gone, the tank begins to rust from the inside out. Replacing it every 3 years can add 12 years to your tank's life.</p>
        <p><strong>3. "Can a tankless heater handle my large family in Beach Park?"</strong> Yes, but it must be sized correctly based on the 'Temperature Rise' needed for Midwest winters. We perform a thermal load analysis to ensure your unit provides endless hot water for your specific household demand.</p>
        <p><strong>4. "How long does a professional water heater installation take?"</strong> A standard tank swap-out takes between 3 to 5 hours. A tankless transition takes 6 to 8 hours. We handle all Waukegan permitting and safety inspections, ensuring your home remains legal and fully insured.</p>
        <p><strong>5. "Is it normal to have a small puddle under my heater?"</strong> No. This usually indicates a failed T&P (Temperature and Pressure) valve or a structural leak in the tank. Shut off the gas/power and the water supply immediately to prevent a basement flood.</p>
        <p><strong>6. "Do I need a water softener with my new heater?"</strong> In Lake County, a softener significantly reduces mineral scaling. If you don't have one, we recommend a scale-inhibitor filter to protect your heater's heat exchanger and warranty.</p>
        <p><strong>7. "What is a Heat Pump Water Heater?"</strong> These are ultra-efficient electric units that pull heat from the surrounding air. They are excellent for Illinois basements as they also act as a dehumidifier, potentially saving you $300 a year in electricity.</p>
        <p><strong>8. "How can I tell if my heater is over 10 years old?"</strong> Look at the serial number on the manufacturer's plate. The first few digits usually indicate the month and year of production. If your unit is from 2014 or earlier, it is a ticking time bomb—schedule an audit today.</p>
      </div>
    `
  },
  "sump-pumps": {
    title: "Redundant Sump Pump Systems & Foundation Protection Authority",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80",
    intro: `Shield your foundation from Lake County's storm surges with dual-pump redundancy. Serving Beach Park since 2016.`,
    content: `
      <h3 style="font-size: 2.2rem; font-weight: 900; color: #1e3a8a; margin-bottom: 1.5rem; text-transform: uppercase; italic; border-bottom: 6px solid #f97316; display: inline-block;">Foundation Integrity & Storm Surge Engineering</h3>
      <p style="margin-bottom: 1.5rem; line-height: 2.2; font-size: 1.1rem;">Waukegan and Beach Park are built on heavy clay-based soil profiles that expand when wet. This soil holds water against your foundation walls, creating massive **Hydrostatic Pressure**. If your sump pump fails for even one hour during a Midwest storm, this pressure can push water through micro-cracks in your concrete or cause a total foundation wall collapse. At ${BUSINESS_INFO.name}, we don't just "install pumps"; we engineer flood prevention systems that handle the unique hydraulic loads of the tri-state region.</p>
      
      <h4 style="font-size: 1.7rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem; text-transform: uppercase;">Engineering a Fail-Safe Redundant System</h4>
      <p style="margin-bottom: 1.5rem; line-height: 1.8;">Most big-box retailers sell plastic 1/3 HP pumps with a 2-year lifespan. We refuse to install them. Our standard is a **1/2 HP Cast-Iron Primary Pump**. Cast-iron is essential because it dissipates motor heat through the housing into the water, preventing the motor from burning out during the 24-hour continuous operation common during Illinois spring surges. Our systems are engineered to handle **3,500 gallons per hour**, ensuring your basement stays dry even during record-breaking surges.</p>
      <p style="margin-bottom: 1.5rem; line-height: 1.8;">The true Zuniga advantage is our **Dual-Basin Redundancy**. We install a primary pump and a secondary battery-backup pump with independent vertical float switches. If your power grid fails or the primary pump suffers a mechanical failure, the secondary system kicks in, capable of pumping for 48 hours on AGM battery power alone. This is the only way to achieve 100% basement security in Lake County.</p>

      <div style="background-color: #1e293b; color: white; padding: 4rem; border-radius: 3rem; margin-bottom: 4rem; border-top: 15px solid #f97316; box-shadow: 0 30px 60px -12px rgba(0,0,0,0.5);">
        <h4 style="font-weight: 900; font-size: 1.7rem; color: #f97316; margin-bottom: 2rem; text-transform: uppercase;">Zuniga's 2016 Foundation Protection Standards:</h4>
        <ul style="list-style-type: none; padding: 0; display: flex; flex-direction: column; gap: 1.8rem;">
          <li style="font-size: 1.1rem;"><strong>• High-Cycle Vertical Floats:</strong> We avoid "tethered" floats that get stuck on basin walls—the #1 cause of floods in Beach Park.</li>
          <li><strong>• Dual-Silent Check Valves:</strong> We use industrial-grade valves that prevent water hammer and ensure zero backflow into the pit, doubling your motor's life.</li>
          <li><strong>• AGM Deep-Cycle Batteries:</strong> Our systems use Absorbent Glass Mat batteries that require zero maintenance and outlast standard lead-acid units by 3x.</li>
          <li><strong>• Wi-Fi Smart Alarms:</strong> Get a text message the second your primary pump fails or your basement water level reaches critical levels.</li>
          <li><strong>• Pedestal Motor Mounting:</strong> Keeping the motor out of the basin debris for a cleaner operational environment and 2x longer operational life.</li>
        </ul>
      </div>

      <h3 style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1.5rem;">Case Study: Gurnee Storm Resilience 2024</h3>
      <p style="margin-bottom: 1.5rem; line-height: 1.8;">A Gurnee property owner had suffered three basement floods in five years. We performed a hydraulic analysis and found their discharge line was too small for the local water table. We installed a 1/2 HP cast-iron primary and a smart battery backup. During the massive July 2024 surge, the electrical grid failed for 6 hours. Our system moved over **18,000 gallons** on battery power alone, keeping the basement 100% dry while neighboring foundations suffered over $45,000 in damages each.</p>

      <h4 style="font-size: 1.8rem; font-weight: 900; color: #1e3a8a; margin-bottom: 2rem; text-transform: uppercase;">The Exhaustive Sump Pump Authority FAQ:</h4>
      <div style="display: grid; gap: 2rem; line-height: 1.8;">
        <p><strong>1. "How do I know if my sump pump is actually working?"</strong> Slowly pour 5-8 gallons of water into the basin. The pump should trigger once the float rises and discharge all water within 15 seconds. If it hums but doesn't move water, the impeller is clogged or the check valve is broken.</p>
        <p><strong>2. "Is a water-powered backup better than battery?"</strong> Water-powered backups require high city water pressure to function. In many Waukegan neighborhoods, water pressure drops significantly during storms. Battery backups are independent and far more reliable for Midwest soil conditions.</p>
        <p><strong>3. "Why does my sump pump smell like rotten eggs?"</strong> This is stagnant water creating a breeding ground for sulfur-producing bacteria. We provide cleaning services that disinfect the basin and prevent "Iron Bacteria" from clogging your motor and discharge line.</p>
        <p><strong>4. "How often should I replace my backup battery?"</strong> Standard lead-acid batteries last 3 years; our AGM units last 5-7 years. We recommend a professional load-test every spring to ensure you are ready for the Illinois rainy season.</p>
        <p><strong>5. "Is a 'Sump Pump rider' needed on my home insurance?"</strong> Yes. Most standard Waukegan policies do not cover "Sewer and Drain Backup" unless you have a specific rider. Our certified systems often qualify homeowners for insurance premium discounts.</p>
        <p><strong>6. "Can I discharge my pump into my kitchen sink drain?"</strong> No, this is illegal in all Illinois municipalities as it taxes the sanitary sewer. It must discharge to a storm sewer or the surface. We ensure your system is 100% code-compliant to avoid fines.</p>
        <p><strong>7. "What is a 'Radon-Sealed' sump basin?"</strong> In areas like Zion and Beach Park, radon gas is a health concern. We install air-tight, gasket-sealed basin covers that allow the pump to function while preventing hazardous gases from entering your basement.</p>
        <p><strong>8. "What causes a sump pump to 'short-cycle'?"</strong> This is usually a failed check valve allowing water to fall back into the pit after every run. This burns out the motor 5x faster and should be fixed immediately to avoid total pump failure.</p>
      </div>
    `
  },
  "leak-detection": {
    title: "Non-Invasive Electronic Leak Detection & Precision Mapping",
    image: "https://images.unsplash.com/photo-1581244276891-83393a8ba321?auto=format&fit=crop&q=80",
    intro: `Stop silent water loss within inches using advanced acoustic sensors. No property damage, guaranteed accuracy since 2016.`,
    content: `
      <h3 style="font-size: 2.2rem; font-weight: 900; color: #1e3a8a; margin-bottom: 1.5rem; text-transform: uppercase; italic; border-bottom: 6px solid #f97316; display: inline-block;">Forensic Diagnostics: The End of Exploratory Demolition</h3>
      <p style="margin-bottom: 1.5rem; line-height: 2.2; font-size: 1.1rem;">A hidden leak is a property's silent killer. Whether it's a pinhole in a copper line behind a finished basement wall or a slab leak under your kitchen's heated tile floor, water loss can go undetected for months. By the time you see a damp spot, you likely have structural wood rot and black mold growth. Since 2016, Eduardo Zuniga's vision has been to replace the "hammer and guess" method with **Forensic Leak Mapping**. We use sonic technology to find water loss without touching your drywall or flooring.</p>
      
      <h4 style="font-size: 1.7rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem; text-transform: uppercase;">The Physics of Sonic Leak Mapping & Correlation</h4>
      <p style="margin-bottom: 1.5rem; line-height: 1.8;">When a pipe fractures, the water escaping at 60 PSI creates a specific high-frequency vibration. This vibration travels through the pipe material and the surrounding soil or concrete. Our electronic acoustic sensors act like a high-powered stethoscope, allowing us to filter out ambient Waukegan traffic noise and HVAC vibrations to find the exact origin of that "hiss." We pinpoint the leak within **6 inches**, meaning our repair footprint is tiny compared to a traditional plumber's 10-foot trench. This non-invasive approach saves you thousands in floor and wall restoration costs.</p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; margin-bottom: 4rem;">
        <div style="background: #f9fafb; padding: 3rem; border-radius: 2rem; border-bottom: 10px solid #f97316; box-shadow: 0 15px 30px rgba(0,0,0,0.05);">
          <h5 style="font-weight: 900; font-size: 1.4rem; color: #1e3a8a; margin-bottom: 1rem; text-transform: uppercase;">Acoustic Correlation</h5>
          <p style="font-size: 1rem; line-height: 1.8;">We place sensors at two points on a line and mathematically calculate the leak's position based on sound travel time. This is the gold standard for locating slab leaks under concrete without digging.</p>
        </div>
        <div style="background: #f9fafb; padding: 3rem; border-radius: 2rem; border-bottom: 10px solid #f97316; box-shadow: 0 15px 30px rgba(0,0,0,0.05);">
          <h5 style="font-weight: 900; font-size: 1.4rem; color: #1e3a8a; margin-bottom: 1rem; text-transform: uppercase;">Infrared Thermal Mapping</h5>
          <p style="font-size: 1rem; line-height: 1.8;">Hot water leaks under tile or behind drywall create a distinct heat plume. Our thermal cameras "see" through solid surfaces to find the moisture plume without a single scratch to your paint.</p>
        </div>
      </div>

      <h4 style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem; text-transform: uppercase;">Mitigating Foundation Erosion & Slab Heave</h4>
      <p style="margin-bottom: 1.5rem; line-height: 1.8;">In Beach Park and Waukegan, slab leaks are particularly dangerous. Constant water flow washes away the "fines" in the soil under your home, creating underground voids. Over time, the heavy concrete settles into these voids, causing foundation cracks and "Slab Heave" where your interior floors begin to buckle. Our rapid detection prevents these $25,000$ foundation repairs by catching the leak in its first 30 days. We provide full moisture mapping as part of every authority scan to ensure your home's structural longevity.</p>

      <h4 style="font-size: 1.8rem; font-weight: 900; color: #1e3a8a; margin-bottom: 2rem; text-transform: uppercase;">Exhaustive Leak Detection Authority FAQ:</h4>
      <div style="display: grid; gap: 2rem; line-height: 1.8;">
        <p><strong>1. "My water bill doubled, but I don't see any water. Is it a leak?"</strong> Almost certainly. A single running toilet flapper can waste 200 gallons a day, but a slab leak can waste 2,000. Our Waukegan experts perform a "Meter Static Test" to confirm if the leak is on your property before we deploy acoustic sensors.</p>
        <p><strong>2. "Will my insurance cover the cost of detection?"</strong> Most Lake County policies cover "Access and Detection" if there is an active claim for water damage. We provide the technical forensic reports and high-res thermal imaging your insurance adjuster needs to approve the claim instantly.</p>
        <p><strong>3. "Can you find a leak in a plastic PEX pipe?"</strong> Yes, but it is harder because plastic doesn't carry sound as well as copper. We use specialized **Tracer Gas** (a safe nitrogen-hydrogen mix) to pressurize the line and detect it at the surface with ultra-sensitive electronic sniffers.</p>
        <p><strong>4. "How much water does a pinhole leak waste?"</strong> A hole the size of a ballpoint pen tip can waste **10,000 gallons per month**. At local Waukegan water rates, that can cost you over $160 extra every single month. The detection service pays for itself in utility savings alone.</p>
        <p><strong>5. "Do I need to move my furniture for the scan?"</strong> We may ask you to clear the floor area above the suspected line path. For wall leaks, we only need a 3-foot clearance. Our goal is to perform the scan with zero impact on your daily life or property integrity.</p>
        <p><strong>6. "What is a 'Slab Leak'?"</strong> This is a break in the water line that runs underneath your home's concrete foundation. They are common in Lake County due to soil shifting during freeze-thaw cycles. If you have unexplained "Hot Spots" on your floor, call us immediately.</p>
        <p><strong>7. "Can you find leaks in an underground pool line?"</strong> Yes, we use specialized poolside acoustic microphones and pressure testing to locate fractures in PVC pool plumbing without draining your pool or destroying your deck.</p>
        <p><strong>8. "What is your accuracy rate?"</strong> Our 2026-spec equipment has a **99% accuracy rate**, allowing us to pinpoint the leak within a 6-inch radius on over 95% of residential jobs.</p>
      </div>
    `
  },
  "gas-lines": {
    title: "Certified Gas Line Engineering & Safety Compliance Repairs",
    image: "https://images.unsplash.com/photo-1543674892-7d64d45df18b?auto=format&fit=crop&q=80",
    intro: `Protect your family with certified gas safety audits and code-compliant repairs. Local authority since 2016.`,
    content: `
      <h3 style="font-size: 2.2rem; font-weight: 900; color: #1e3a8a; margin-bottom: 1.5rem; text-transform: uppercase; italic; border-bottom: 6px solid #f97316; display: inline-block;">Certified Gas Safety: Life-Safety Engineering</h3>
      <p style="margin-bottom: 1.5rem; line-height: 2.2; font-size: 1.1rem;">Gas line work is the highest-risk engineering task in the residential plumbing industry. It is not a job for a general handyman or a DIY enthusiast. At ${BUSINESS_INFO.name}, we treat every gas line installation as a life-safety project. Competitors in Waukegan often rely on old "Soap Bubble" tests to find leaks; we utilize **Electronic Gas Sniffers** that can detect natural gas concentrations as low as 10 parts per million. Since 2016, we have secured thousands of homes by following a "Zero-Tolerance" safety protocol.</p>
      
      <h4 style="font-size: 1.7rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem; text-transform: uppercase;">The Vulnerability of Historic Black Iron Piping</h4>
      <p style="margin-bottom: 1.5rem; line-height: 1.8;">Many homes in Waukegan's central district still utilize rigid black iron pipes installed 50+ years ago. These pipes are susceptible to internal rust (scaling) and joint failure during the deep-freeze cycles of Lake County foundation shifts. We specialize in upgrading these high-risk systems to modern **Corrugated Stainless Steel Tubing (CSST)**. CSST is flexible, meaning it can withstand tremors and foundation settlement without fracturing. It also requires **70% fewer joints**, which are the primary points of gas leakage in older systems.</p>

      <div style="background-color: #fef2f2; padding: 4rem; border: 4px solid #fecaca; border-radius: 3rem; margin-bottom: 4rem; box-shadow: 0 20px 40px rgba(185, 28, 28, 0.1);">
        <h4 style="color: #b91c1c; font-weight: 900; font-size: 1.7rem; text-transform: uppercase; margin-bottom: 1.5rem;">Zuniga's Critical Emergency Mitigation Standard:</h4>
        <p style="color: #7f1d1d; font-weight: 600; margin-bottom: 1.5rem; font-size: 1.1rem;">If you detect a "rotten egg" odor or a faint hissing sound near your meter or stove, follow these steps immediately:</p>
        <ul style="color: #7f1d1d; font-size: 1rem; line-height: 2; list-style: square;">
          <li>• **Evacuate All Residents & Pets:** Do not stop to open windows or grab belongings. Your life is the priority.</li>
          <li>• **Zero Electronics Policy:** Do not use light switches, cell phones, or garage door openers inside the house. A single spark from a relay can trigger an explosion.</li>
          <li>• **Call from a Safe Distance:** Only call our emergency line once you are 100 feet away from the property.</li>
          <li>• **24-Hour Pressure Verification:** We arrive within 45 minutes to perform a mandatory pressure-hold test to verify the system's integrity before restoration.</li>
        </ul>
      </div>

      <h4 style="font-size: 1.5rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem; text-transform: uppercase;">Outdoor Gourmet Gas Extensions & Appliance Hookups</h4>
      <p style="margin-bottom: 1.5rem; line-height: 1.8;">From high-efficiency furnace lines to gourmet outdoor kitchens and custom fire pits, we ensure every connection exceeds local IL and WI building codes. We handle all permitting and municipality coordination for Waukegan and Lake County departments, ensuring your project is 100% legal. Our team performs a mandatory **Gas Manifold Audit** with every installation to ensure your meter can handle the increased BTU load of new high-demand appliances like pool heaters or commercial-style ranges.</p>

      <h4 style="font-size: 1.8rem; font-weight: 900; color: #1e3a8a; margin-bottom: 2rem; text-transform: uppercase;">Certified Gas Line Authority FAQ:</h4>
      <div style="display: grid; gap: 2rem; line-height: 1.8;">
        <p><strong>1. "What is that smell in natural gas?"</strong> Natural gas is odorless. Utility companies add a chemical called **Mercaptan** specifically so that humans can detect leaks. It smells like rotten eggs or sulfur. Treat any hint of this smell as an immediate life-safety threat.</p>
        <p><strong>2. "How often should I have my gas lines inspected?"</strong> For homes older than 30 years, a professional safety audit every 5 years is recommended. We check for pipe corrosion, joint stability, and proper venting of appliances to prevent Carbon Monoxide buildup.</p>
        <p><strong>3. "Can I move my own gas line for a kitchen remodel?"</strong> No. Moving a gas line requires professional cutting, threading, and a mandatory pressure-hold test verified by a certified technician. Improperly sealed joints are the leading cause of residential gas fires in Illinois.</p>
        <p><strong>4. "What are the signs of a slow gas leak?"</strong> Besides the smell, look for dead patches of grass near your exterior gas meter, an unusually high gas bill, or feeling lightheaded/nauseous near specific appliances. Call for an electronic scan immediately.</p>
        <p><strong>5. "Is it safe to use flexible yellow gas connectors?"</strong> They are safe *only* if they are certified for the specific appliance and installed without kinks. We recommend replacing these every time you get a new appliance to ensure the internal seal is 100% fresh.</p>
        <p><strong>6. "Can Zuniga install a gas line for a backup generator?"</strong> Yes, we specialize in high-BTU gas supply lines for whole-home generators, ensuring the pressure remains stable even when the furnace and stove are running simultaneously.</p>
        <p><strong>7. "What is 'Gas Line Bonding'?"</strong> This is an electrical safety requirement where your gas line is grounded to prevent it from becoming energized during a lightning strike. We perform a bonding audit with every installation for your safety.</p>
        <p><strong>8. "What BTU meter do I need for my home?"</strong> We perform a total BTU-load calculation for your home to determine if your utility company needs to upgrade your meter to accommodate new gas appliances like pool heaters or high-output ranges.</p>
      </div>
    `
  }
};
