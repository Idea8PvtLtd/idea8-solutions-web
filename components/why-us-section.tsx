"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ProjectModal } from "./project-modal";
import { aboutProjects as projects } from "../data/home";

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
      <section id="about" ref={ref} className="section-padding bg-background">
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
                <video
                  src="/videos/intro_video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-[600px] lg:h-screen object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl flex flex-col justify-end p-6 group-hover:from-black/70 transition-all duration-300">
                  <div className="heading-h3 text-white transform group-hover:translate-y-[-10px] transition-transform duration-300">
                    Twin
                    <br />
                    Robotic Arm Solution
                    <br />
                    for Smart
                    <br />
                    T-Shirt Handling
                  </div>
                  <div className="mt-3 text-white/80 text-sm font-medium">
                    Click to learn more →
                  </div>
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
                    src="/images/project_2.jpg"
                    alt="MTG Card Sorting Machine"
                    className="w-full h-[400px] object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl flex flex-col justify-end p-6 group-hover:from-black/80 transition-all duration-300">
                    <h3 className="heading-h4 mb-2 text-white transform group-hover:translate-y-[-5px] transition-transform duration-300">
                      MTG
                    </h3>
                    <p className="heading-h4 text-white/80 transform group-hover:translate-y-[-5px] transition-transform duration-300">
                      Card Sorting Machine
                      <br />
                      Saves Time In
                      <br />
                      Bulk Sorting
                    </p>
                    <div className="mt-3 text-white/80 text-sm font-medium">
                      Click to learn more →
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl relative overflow-hidden cursor-pointer group"
                  onClick={(e) => handleProjectHover(projects[2], e)}
                >
                  <img
                    src="/images/project_3.jpg"
                    alt="Medical sensors"
                    className="w-full h-[400px] object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl flex flex-col justify-end p-6 group-hover:from-black/80 transition-all duration-300">
                    <h3 className="heading-h4 mb-2 text-white transform group-hover:translate-y-[-5px] transition-transform duration-300">
                      IoT-based
                    </h3>
                    <p className="heading-h4 text-white/80 transform group-hover:translate-y-[-5px] transition-transform duration-300">
                      Weather &
                      <br />
                      Earthquake
                      <br />
                      Monitoring
                      <br />
                      System
                    </p>
                    <div className="mt-3 text-white/80 text-sm font-medium">
                      Click to learn more →
                    </div>
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
