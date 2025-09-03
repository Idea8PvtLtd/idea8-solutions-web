"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, Plus, X } from "lucide-react";

const capabilities = [
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

export function CapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedItem, setExpandedItem] = useState<string | null>("01");

  return (
    <section id="capabilities" ref={ref} className="py-20 bg-muted/30">
      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-16"
        >
          <h2 className="text-[99.2px] font-semibold tracking-tighter text-foreground">
            Capabilities
          </h2>
          <ChevronDown className="h-28 w-28 text-primary" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-slate-800 dark:bg-slate-900 rounded-2xl p-8 space-y-1"
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="border-b border-slate-700 last:border-b-0"
            >
              <button
                onClick={() =>
                  setExpandedItem(
                    expandedItem === capability.id ? null : capability.id
                  )
                }
                className="w-full py-6 flex items-center justify-between text-left hover:bg-slate-700/50 transition-colors duration-200 rounded-lg px-4"
              >
                <div className="flex items-center space-x-6 tracking-tighter">
                  <span className="text-[43.2px] font-semibold text-white">
                    {capability.id}
                  </span>
                  <h3 className="text-[43.2px] font-semibold text-white">
                    {capability.title}
                  </h3>
                </div>
                <div className="flex items-center space-x-4">
                  {expandedItem !== capability.id && (
                    <p className="text-slate-400 text-base max-w-md hidden lg:block">
                      {capability.overview}
                    </p>
                  )}
                  {expandedItem === capability.id ? (
                    <X className="h-6 w-6 text-slate-400" />
                  ) : (
                    <Plus className="h-6 w-6 text-slate-400" />
                  )}
                </div>
              </button>

              {expandedItem === capability.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
                    <div>
                      <h4 className="text-white font-medium mb-2">Overview</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {capability.overview}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">
                        What we do
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {capability.details}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
