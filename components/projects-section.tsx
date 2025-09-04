"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
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

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-20 bg-muted/30">
      <div className="wrapper">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-16"
        >
          <h2 className="heading-h1 text-foreground">Projects</h2>
          <ChevronDown className="hidden lg:block h-28 w-28 text-primary" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Completed"
                        ? "bg-green-500 text-white"
                        : project.status === "In Development"
                        ? "bg-blue-500 text-white"
                        : project.status === "Prototype"
                        ? "bg-yellow-500 text-black"
                        : "bg-orange-500 text-white"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Category and Year */}
                <div className="absolute bottom-4 left-4">
                  <p className="text-white/80 text-sm mb-1">
                    {project.category}
                  </p>
                  <p className="text-white/60 text-xs">{project.year}</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="heading-h4 text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
