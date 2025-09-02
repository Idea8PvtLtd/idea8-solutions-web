"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, Plus, X } from "lucide-react";

const capabilities = [
  {
    id: "01",
    title: "PRODUCTION PLANNING",
    overview:
      "Effective production planning is crucial for a smooth, cost-effective manufacturing process.",
    description:
      "Our team strategizes production planning, optimizing timelines, costs, and resources.",
    details:
      "We design a production plan tailored to your product, considering factors such as production capacity, resources, and deadlines.",
  },
  {
    id: "02",
    title: "CONTRACT MANUFACTURING IDENTIFICATION AND MANAGEMENT",
    overview:
      "Strategic partner identification and relationship management for optimal production outcomes.",
    description:
      "We help you identify the best contract manufacturers and manage your relationship with them, ensuring a smooth production process.",
    details:
      "Our extensive network and expertise ensure you partner with manufacturers who align with your quality standards and production requirements.",
  },
  {
    id: "03",
    title: "MANUFACTURING OVERSIGHT",
    overview:
      "Comprehensive quality assurance and production monitoring throughout the manufacturing lifecycle.",
    description:
      "We provide rigorous oversight of the manufacturing process, ensuring adherence to the production plan and maintaining product integrity.",
    details:
      "Our on-site and remote monitoring systems guarantee consistent quality and timely delivery of your products.",
  },
  {
    id: "04",
    title: "SUPPLY CHAIN MANAGEMENT",
    overview:
      "End-to-end supply chain optimization for efficient product delivery and market success.",
    description:
      "We optimize your supply chain, ensuring efficient delivery of your product to the market.",
    details:
      "From sourcing raw materials to final distribution, we streamline every aspect of your supply chain for maximum efficiency and cost-effectiveness.",
  },
];

export function CapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedItem, setExpandedItem] = useState<string | null>("01");

  return (
    <section id="capabilities" ref={ref} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-16"
        >
          <h2 className="text-5xl font-bold text-foreground">Capabilities</h2>
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
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
                <div className="flex items-center space-x-6">
                  <span className="text-2xl font-bold text-white">
                    {capability.id}
                  </span>
                  <h3 className="text-xl font-semibold text-white">
                    {capability.title}
                  </h3>
                </div>
                <div className="flex items-center space-x-4">
                  {expandedItem !== capability.id && (
                    <p className="text-slate-400 text-sm max-w-md hidden lg:block">
                      {capability.overview}
                    </p>
                  )}
                  {expandedItem === capability.id ? (
                    <X className="h-5 w-5 text-slate-400" />
                  ) : (
                    <Plus className="h-5 w-5 text-slate-400" />
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
