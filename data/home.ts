export const aboutProjects = [
  {
    id: 1,
    title: "Twin Robotic Arm",
    subtitle: "A Robotic Arm Solution for Smart T-Shirt Handling",
    image: "/images/robotic_arm.jpg",
    description:
      "This project introduces a dual robotic arm system designed for automated T-shirt folding. Operating under ROS 2, the two arms collaborate seamlessly: one arm picks and positions T-shirts from a pile, while the other executes precise folding.\n\nA ZED camera provides real-time vision to detect T-shirt size and color, ensuring accuracy and adaptability. The system is developed in Python, offering flexibility for customization to meet diverse client requirements.\n\nBy combining advanced robotics, vision processing, and AI-driven control, this solution significantly increases productivity, reduces manual labor, and delivers consistent results—making it highly valuable for the apparel production and retail industries.",
    features: [
      "Dual Robotic Arms – Two coordinated arms handle picking, positioning, and folding with precision.",
      "ROS 2 Integration – Ensures real-time, synchronized control and scalable system architecture.",
      "Vision-Guided Operation – ZED cameras provide depth and color data for accurate size detection and folding alignment.",
      "Adaptive Folding Logic – Automatically adjusts folding strategy based on T-shirt size, orientation, and fabric type.",
      "Python-Based Customization – Flexible programming environment for client-specific modifications and feature expansion.",
      "Productivity Boost – Automates repetitive folding tasks, reducing manual labor and operational costs.",
      "Consistency & Accuracy – Delivers neat, uniform folds with minimal errors.",
      "Scalable Design – Easily extendable to handle other garments or integrate into larger apparel production lines.",
    ],
    technologies: [
      "Robotic Arms",
      "ROS 2",
      "ZED Camera System",
      "Python",
      "Computer Vision & AI Algorithms",
      "Kinematics & Motion Planning",
      "Custom End-Effectors",
    ],
    stats: {
      duration: "8 Months",
      team: "5 People",
      status: "Launched",
    },
  },
  {
    id: 2,
    title: "MTG Card Sorting Machine",
    subtitle: "A Card Sorting Machine for MTG",
    image: "/images/project_2.jpg",
    description:
      "This project develops an automated Magic: The Gathering (MTG) card sorting machine. Using computer vision and OCR, the system identifies each card by title, set, number, and rarity, then sorts it into the correct category. The machine reduces manual sorting time and improves accuracy for collectors, retailers, and tournament organizers.",
    benefits: [
      "Saves time in bulk sorting.",
      "Reduces errors compared to manual sorting.",
      "Handles old and new MTG editions consistently.",
      "Supports collectors, retailers, and event organizers.",
      "Can be upgraded for multi-card sorting or pricing integration.",
    ],
    features: [
      "Automated Detection – Recognizes MTG cards using OCR and image matching.",
      "High Accuracy – Identifies title, set, number, and rarity, even across different card editions.",
      "Fast Sorting – Separates large batches of cards quickly and efficiently.",
      "Custom Database Integration – Matches detected cards against an internal MTG card database.",
      "Error Handling – Fallback search by title when card number is unclear.",
      "Scalability – Adaptable to sort other trading card games.",
    ],
    technologies: [
      "Cameras (Top + Bottom)",
      "OCR (Optical Character Recognition)",
      "Python",
      "Database (MySQL/CSV)",
      "Mechanical Sorting Unit",
      "Machine Learning Models",
    ],
    stats: {
      duration: "12 Months",
      team: "7 People",
      status: "In Production",
    },
  },
  {
    id: 3,
    title: "Weather & Earthquake Monitoring System",
    subtitle: "IoT-based Weather & Earthquake Monitoring System",
    image: "/images/project_3.jpg",
    description:
      "This project delivers an IoT-enabled weather and earthquake monitoring system with real-time data collection and communication. Built on a custom PCB with outdoor insulation, the system integrates Wi-Fi, GSM, LoRa, and GPS to ensure reliable data transmission from remote locations. Designed for resilience, it provides accurate monitoring and early-warning capabilities.",
    features: [
      "Multi-Mode Communication – Supports Wi-Fi, GSM, and LoRa for flexible data transmission.",
      "GPS Integration – Provides precise location tracking for sensor data.",
      "Custom PCB – Fully designed in-house with optimized power and communication circuits.",
      "Weather Monitoring – Captures environmental parameters (temperature, humidity, pressure, etc.).",
      "Earthquake Monitoring – Detects seismic activity through vibration and motion sensors.",
      "Outdoor-Ready – Encased in weatherproof housing for durability in harsh conditions.",
      "Real-Time Alerts – Sends instant notifications via cloud dashboards or mobile apps.",
    ],
    technologies: [
      "Python",
      "C++",
      "AWS",
      "GPS Positioning",
      "Low Latency Wireless Transmission",
    ],
    stats: {
      duration: "18 Months",
      team: "12 People",
      status: "Beta Testing",
    },
  },
];

export const capabilities = [
  {
    id: "01",
    title: "RAPID PROTOTYPING",
    overview:
      "From idea to MVP in weeks—not months. Our in-house team accelerates product development by combining design, engineering, and manufacturing under one roof.",
    description:
      "We help you get to market 30% faster than traditional development cycles, so you can validate ideas, attract investors, and outpace competitors.",
  },
  {
    id: "02",
    title: "DEEP TECH EXPERTISE",
    overview:
      "Proven experience across Robotics, AI, IoT, and Wearables. Our engineers specialize in cutting-edge algorithms, embedded systems, and sensor integration.",
    description:
      "We don’t just follow trends—we push boundaries. Leveraging deep cross-industry expertise, we deliver breakthrough solutions that scale across domains.",
  },
  {
    id: "03",
    title: "FULL-CYCLE DEVELOPMENT",
    overview:
      "End-to-end support from concept and design, through hardware and firmware, to scaling and production.",
    description:
      "You get a single partner for the entire journey—eliminating hand-offs, reducing delays, and ensuring seamless execution. All intellectual property stays with you.",
  },
  {
    id: "04",
    title: "COST-EFFECTIVE DEVELOPMENT",
    overview:
      "High-quality engineering talent at competitive global rates, without cutting corners.",
    description:
      "Save up to 50% compared to hiring in the USA, UK, or Singapore, while still working with engineers holding Master’s-level credentials.",
  },
];

export const services = [
  {
    category: "Robotics & Automation",
    title: "Robotic Solutions",
    description:
      "Industrial automation, service robots, and autonomous systems are designed for precision and scalability.",
    services: [
      "Industrial & Service Robotics",
      "Robotic Arms with Custom Grippers",
      "Autonomous Navigation (UAVs, UGVs, AMRs)",
      "Custom Robotic Arms & End-Effectors",
      "Human–Robot Collaboration Systems",
    ],
    image: "/images/service_1.jpg",
  },
  {
    category: "IoT & Embedded Systems",
    title: "Connected Device Development",
    description:
      "Smart devices and sensor networks are integrated with reliable embedded systems and cloud connectivity",
    services: [
      "IoT Devices & Gateways",
      "Embedded System Design (MCUs, SoCs, FPGA)",
      "Wireless Communication (LoRa, BLE, GSM, Wi-Fi)",
      "Cloud & Edge Integration",
    ],
    image: "/images/service_2.jpg",
  },

  {
    category: "Mechanical & Electrical",
    title: "Hardware Engineering",
    description:
      "Robust hardware development to turn concepts into manufacturable, scalable products.",
    services: [
      "Mechanical Engineering (CAD, Simulation, Prototyping)",
      "Electrical Engineering (PCB Design, Power Systems)",
      "New Product Introduction (NPI) & Manufacturing Support",
      "Reliability & Compliance Testing",
    ],
    image: "/images/service_3.jpg",
  },
];

export const projects = [
  {
    id: "smart-irrigation",
    title: "Smart Irrigation System",
    category: "IoT & Agriculture",
    description:
      "AI-powered irrigation system that optimizes water usage based on soil moisture, weather data, and crop requirements.",
    technologies: [
      "IoT Sensors",
      "Machine Learning",
      "Cloud Analytics",
      "Mobile App",
    ],
    image: "/images/team_1.jpg",
    status: "Completed",
    year: "2024",
  },
  {
    id: "robotic-arm",
    title: "Industrial Robotic Arm",
    category: "Robotics & Automation",
    description:
      "Precision robotic arm for manufacturing assembly lines with computer vision and adaptive control systems.",
    technologies: [
      "Computer Vision",
      "ROS",
      "Industrial Control",
      "Safety Systems",
    ],
    image: "/images/header.jpg",
    status: "In Development",
    year: "2024",
  },
  {
    id: "health-monitor",
    title: "Wearable Health Monitor",
    category: "Healthcare & Wearables",
    description:
      "Advanced wearable device for continuous health monitoring with real-time alerts and data analytics.",
    technologies: [
      "Embedded Systems",
      "Biosensors",
      "BLE",
      "Mobile Integration",
    ],
    image: "/images/team_4.jpg",
    status: "Prototype",
    year: "2024",
  },
  {
    id: "autonomous-drone",
    title: "Autonomous Delivery Drone",
    category: "AI & Robotics",
    description:
      "Intelligent drone system for autonomous package delivery with obstacle avoidance and route optimization.",
    technologies: [
      "Computer Vision",
      "Path Planning",
      "GPS Navigation",
      "AI Control",
    ],
    image: "/images/team_2.jpg",
    status: "Testing",
    year: "2023",
  },
];

export const pricingModels = [
  {
    id: "milestone",
    title: "Milestone-Based",
    subtitle: "Best for Custom Projects",
    description:
      "Break the project into phases (Concept → Prototype → Testing → Final Product). Client pays per milestone (e.g., 25% upfront, 25% after prototype, etc.).",
    features: [
      "Phased project delivery",
      "Payment tied to milestones",
      "Risk mitigation for both parties",
      "Clear project progression",
      "Flexible scope adjustments",
    ],
    image: "/images/milestone_based.jpg",
    popular: false,
  },
  {
    id: "retainer",
    title: "Monthly Retainer",
    subtitle: "Best for Ongoing R&D",
    description:
      "Client pays a fixed monthly fee for your team's involvement. Scope may be flexible (e.g., R&D support, product iterations, scaling).",
    features: [
      "Fixed monthly investment",
      "Ongoing R&D support",
      "Flexible scope management",
      "Continuous innovation",
      "Priority support access",
    ],
    image: "/images/monthly_retainer.jpg",
    popular: true,
  },
  {
    id: "packages",
    title: "Fixed-Price Packages",
    subtitle: "Best for MVPs & Startups",
    description:
      "Predefined packages like: MVP Package – $10,000 for 8–10 weeks. Prototype Package – $5,000 for 6 weeks. AI/IoT Pilot Package – $7,500 fixed.",
    features: [
      "MVP Package - $10,000 (8-10 weeks)",
      "Prototype Package - $5,000 (6 weeks)",
      "AI/IoT Pilot - $7,500 fixed",
      "Predictable pricing",
      "Fast project kick off",
    ],
    image: "/images/fixed_price.jpg",
    popular: false,
  },
];
