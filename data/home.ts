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
    title: "Ground Control",
    subtitle: "Reimagining The Coffee Brewing Experience",
    image: "/images/team_2.jpg",
    description:
      "Ground Control transforms your daily coffee ritual into a precision brewing experience. Using advanced sensors and machine learning, it analyzes bean characteristics, water quality, and environmental factors to create the perfect cup every time. The intuitive interface allows both beginners and coffee enthusiasts to achieve café-quality results at home.",
    features: [
      "Precision temperature and timing control for optimal extraction",
      "Bean recognition system that adjusts brewing parameters automatically",
      "Water quality analysis with mineral content optimization",
      "Recipe library with expert-curated brewing profiles",
      "Remote brewing control via smartphone app",
      "Maintenance alerts and cleaning cycle automation",
    ],
    technologies: [
      "IoT Sensors",
      "Computer Vision",
      "Mobile Development",
      "Data Analytics",
      "Embedded Systems",
    ],
    stats: {
      duration: "12 Months",
      team: "7 People",
      status: "In Production",
    },
  },
  {
    id: 3,
    title: "Body Dynamics",
    subtitle: "Changing Physical Therapy Forever With Design",
    image: "/images/team_3.jpg",
    description:
      "Body Dynamics reimagines physical therapy through intelligent motion tracking and personalized rehabilitation programs. Using advanced sensors and AI-powered movement analysis, it provides real-time feedback to patients and therapists, making recovery more effective and engaging. The system adapts to individual progress, ensuring optimal rehabilitation outcomes.",
    features: [
      "3D motion capture and real-time movement analysis",
      "Personalized therapy programs based on injury type and progress",
      "Gamified exercises that make rehabilitation engaging",
      "Progress tracking with detailed analytics for therapists",
      "Remote monitoring capabilities for home-based therapy",
      "Integration with healthcare systems for seamless data sharing",
    ],
    technologies: [
      "Computer Vision",
      "AI/ML",
      "3D Sensors",
      "Healthcare APIs",
      "React Native",
      "Cloud Computing",
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
    overview: "Rapid Prototyping, MVPs in weeks, not months.",
    description:
      "Transform your ideas into working prototypes quickly with our agile development approach and cutting-edge fabrication capabilities.",
    details:
      "Our streamlined prototyping process includes 3D modeling, rapid manufacturing, iterative testing, and validation cycles that compress traditional development timelines from months to weeks.",
  },
  {
    id: "02",
    title: "DEEP TECH EXPERTISE",
    overview: "Deep Tech expertise in Robotics, AI, IoT, Wearables.",
    description:
      "Leverage our specialized knowledge in cutting-edge technologies to build innovative products that push the boundaries of what's possible.",
    details:
      "Our multidisciplinary team combines expertise in machine learning algorithms, embedded systems, sensor integration, robotics control systems, and wearable device engineering to deliver breakthrough solutions.",
  },
  {
    id: "03",
    title: "FULL-CYCLE DEVELOPMENT",
    overview:
      "Full-Cycle support from concept, design, hardware, firmware and scaling.",
    description:
      "End-to-end product development covering every aspect from initial concept through market-ready solutions and scalable production.",
    details:
      "Our comprehensive approach includes market research, industrial design, hardware engineering, firmware development, testing protocols, and scaling strategies to ensure your product succeeds at every stage.",
  },
  {
    id: "04",
    title: "COST-EFFECTIVE DEVELOPMENT",
    overview:
      "Save up to 50% compared to hiring in the USA, UK, or Singapore, without cutting corners",
    description:
      "Access world-class product development expertise at a fraction of the cost without compromising on quality or innovation.",
    details:
      "Our Sri Lankan base allows us to offer premium development services at competitive rates while maintaining international standards, rigorous quality control, and seamless communication with global clients.",
  },
];

export const services = [
  {
    category: "AI & Machine Learning",
    title: "Intelligent Systems Development",
    description:
      "Custom AI solutions, computer vision, and machine learning models tailored to your business needs.",
    image: "/images/team_1.jpg",
  },
  {
    category: "Robotics & Automation",
    title: "Robotic Solutions",
    description:
      "Industrial automation, service robots, and autonomous systems for various applications.",
    image: "/images/header.jpg",
  },
  {
    category: "IoT & Embedded Systems",
    title: "Connected Device Development",
    description:
      "Smart devices, sensor networks, and embedded systems with cloud connectivity.",
    image: "/images/team_4.jpg",
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
    image: "/images/team_1.jpg",
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
    image: "/images/header.jpg",
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
      "Fast project kickoff",
    ],
    image: "/images/team_4.jpg",
    popular: false,
  },
];
