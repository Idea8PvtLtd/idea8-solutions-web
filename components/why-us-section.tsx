"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ProjectModal } from "./project-modal";

// Project data
const projects = [
  {
    id: 1,
    title: "IRice",
    subtitle: "A Smart Charger For Modern Lifestyles",
    image: "/images/team_1.jpg",
    description:
      "IRice revolutionizes the way we think about device charging with intelligent power management and sleek design. This smart charger adapts to your device's needs, providing optimal charging speeds while maintaining battery health. With built-in AI algorithms, it learns your usage patterns and optimizes charging cycles to extend your device's lifespan.",
    features: [
      "Adaptive charging technology that learns your usage patterns",
      "Multi-device compatibility with universal charging protocols",
      "Energy-efficient design that reduces power consumption by 30%",
      "Real-time charging analytics and battery health monitoring",
      "Wireless and wired charging capabilities in one sleek device",
      "Smart scheduling to charge during off-peak energy hours",
    ],
    technologies: [
      "IoT",
      "Machine Learning",
      "Power Management",
      "Mobile App",
      "Cloud Analytics",
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

export function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleProjectHover = (project: any, event: any) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section id="about" ref={ref} className="pt-40 pb-20 bg-background">
        <div className="wrapper">
          <div className="grid grid-cols-1 gap-8 lg:gap-16 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <h2 className="heading-h1 text-foreground">Why Us</h2>
                <p className="paragraph-normal">
                  We're not just a product development company — we're your
                  end-to-end innovation partner. From initial concept validation
                  to market-ready prototypes, we bridge the gap between
                  brilliant ideas and real-world solutions.
                </p>
              </div>
            </motion.div>

            {/* Right Content - Product Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Main Product Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
                onClick={(e) => handleProjectHover(projects[0], e)}
              >
                <img
                  src="/images/team_1.jpg"
                  alt="Smart device interaction"
                  className="w-full h-[600px] lg:h-screen object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl flex flex-col justify-end p-6 group-hover:from-black/70 transition-all duration-300">
                  <div className="heading-h3 text-white transform group-hover:translate-y-[-10px] transition-transform duration-300">
                    IRice
                    <br />A Smart Charger
                    <br />
                    For Modern
                    <br />
                    Lifestyles
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="mt-4 text-white/80 text-sm font-medium"
                  >
                    Click to learn more →
                  </motion.div>
                </div>
              </motion.div>

              {/* Bottom Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl relative overflow-hidden cursor-pointer group"
                  onClick={(e) => handleProjectHover(projects[1], e)}
                >
                  <img
                    src="/images/team_2.jpg"
                    alt="Coffee brewing interface"
                    className="w-full h-[400px] object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl flex flex-col justify-end p-6 group-hover:from-black/80 transition-all duration-300">
                    <h3 className="heading-h4 mb-2 text-white transform group-hover:translate-y-[-5px] transition-transform duration-300">
                      Ground Control
                    </h3>
                    <p className="heading-h4 text-white/80 transform group-hover:translate-y-[-5px] transition-transform duration-300">
                      Reimagining The
                      <br />
                      Coffee Brewing
                      <br />
                      Experience
                    </p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="mt-3 text-white/80 text-sm font-medium"
                    >
                      Click to learn more →
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl relative overflow-hidden cursor-pointer group"
                  onClick={(e) => handleProjectHover(projects[2], e)}
                >
                  <img
                    src="/images/team_3.jpg"
                    alt="Medical sensors"
                    className="w-full h-[400px] object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl flex flex-col justify-end p-6 group-hover:from-black/80 transition-all duration-300">
                    <h3 className="heading-h4 mb-2 text-white transform group-hover:translate-y-[-5px] transition-transform duration-300">
                      Body Dynamics
                    </h3>
                    <p className="heading-h4 text-white/80 transform group-hover:translate-y-[-5px] transition-transform duration-300">
                      Changing
                      <br />
                      Physical Therapy
                      <br />
                      Forever With
                      <br />
                      Design
                    </p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="mt-3 text-white/80 text-sm font-medium"
                    >
                      Click to learn more →
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        mousePosition={mousePosition}
      />
    </>
  );
}
