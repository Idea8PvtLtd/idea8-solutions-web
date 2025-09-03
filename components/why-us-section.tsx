"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" ref={ref} className="py-20 bg-background">
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
                to market-ready prototypes, we bridge the gap between brilliant
                ideas and real-world solutions.
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
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/team_1.jpg"
                alt="Smart device interaction"
                className="w-full h-[600px] lg:h-screen object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl flex flex-col justify-end p-6">
                <div className="heading-h3 text-white">
                  IRice
                  <br />A Smart Charger
                  <br />
                  For Modern
                  <br />
                  Lifestyles
                </div>
              </div>
            </div>

            {/* Bottom Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl relative overflow-hidden"
              >
                <img
                  src="/images/team_2.jpg"
                  alt="Coffee brewing interface"
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl flex flex-col justify-end p-6">
                  <h3 className="heading-h4 mb-2 text-white">Ground Control</h3>
                  <p className="heading-h4 text-white/80">
                    Reimagining The
                    <br />
                    Coffee Brewing
                    <br />
                    Experience
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl relative overflow-hidden"
              >
                <img
                  src="/images/team_3.jpg"
                  alt="Medical sensors"
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl flex flex-col justify-end p-6">
                  <h3 className="heading-h4 mb-2 text-white">Body Dynamics</h3>
                  <p className="heading-h4 text-white/80">
                    Changing
                    <br />
                    Physical Therapy
                    <br />
                    Forever With
                    <br />
                    Design
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
