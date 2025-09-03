"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="wrapper">
      <div className="relative min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-6.5rem)] flex items-end overflow-hidden rounded-2xl">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/header.jpg"
            alt="3D Printer Manufacturing"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10  text-white p-8 pb-20 lg:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-7xl lg:text-[138.24px] font-medium leading-none tracking-tighter text-balance">
                Idea8
                <br />
                Products
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg leading-snug text-pretty tracking-tight font-medium">
                Access to Sri Lanka's Leading Product Development Company. From
                concept to prototype, Idea8 helps innovators and businesses to
                build world class products in AI, Robotics, IoT and Embedded
                Systems.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-white/70 hover:text-white transition-colors cursor-pointer"
            onClick={() =>
              document
                .getElementById("why-us")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
