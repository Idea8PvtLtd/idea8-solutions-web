"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" ref={ref} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-5xl font-bold text-foreground text-balance">
              Why Us
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              As your trusted partner, Speck Design navigates the complexities
              of the manufacturing process. Our seasoned team delivers
              unparalleled support, ensuring your product remains true to its
              design, is cost-effective, and meets stringent quality standards.
            </p>
          </motion.div>

          {/* Right Content - Product Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Main Product Image */}
            <div className="relative bg-slate-100 dark:bg-slate-800 rounded-2xl p-8 overflow-hidden">
              <div className="absolute top-6 left-6 text-slate-400 text-sm font-medium">
                IRice
                <br />A Smart Charger
                <br />
                For Modern
                <br />
                Lifestyles
              </div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about_us-RSPommQ4pFlUCcokLxNa3j5YQ2Njvj.png"
                alt="Smart device interaction"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            {/* Bottom Grid */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-900 dark:bg-slate-700 rounded-2xl p-6 text-white relative overflow-hidden"
              >
                <h3 className="text-lg font-semibold mb-2">Ground Control</h3>
                <p className="text-sm text-slate-300 mb-4">
                  Reimagining The
                  <br />
                  Coffee Brewing
                  <br />
                  Experience
                </p>
                <img
                  src="/modern-coffee-machine-interface.png"
                  alt="Coffee brewing interface"
                  className="w-full h-20 object-cover rounded-lg"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-200 dark:bg-slate-600 rounded-2xl p-6 relative overflow-hidden"
              >
                <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-white">
                  Body Dynamics
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Changing
                  <br />
                  Physical Therapy
                  <br />
                  Forever With
                  <br />
                  Design
                </p>
                <img
                  src="/medical-device-sensors-on-leg.png"
                  alt="Medical sensors"
                  className="w-full h-20 object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
