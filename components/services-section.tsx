"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
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

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={ref}
      className="section-padding bg-slate-800 dark:bg-slate-900 text-white"
    >
      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-16"
        >
          <h2 className="heading-h1">Services</h2>
          <ChevronDown className="h-8 w-8 text-slate-400" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.article
              key={service.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="bg-slate-700/50 rounded-2xl overflow-hidden hover:bg-slate-700 transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-sm text-white/80 mb-1">
                    {service.category}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="heading-h4 text-white mb-3 group-hover:text-slate-200 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
