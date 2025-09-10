"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, Plus, X } from "lucide-react";
import { capabilities } from "../data/home";

export function CapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedItem, setExpandedItem] = useState<string | null>("01");

  return (
    <section
      id="capabilities"
      ref={ref}
      className="section-padding bg-muted/30"
    >
      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-16"
        >
          <h2 className="heading-h1 text-foreground">Capabilities</h2>
          <ChevronDown className="hidden lg:block h-28 w-28 text-primary" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-slate-800 dark:bg-slate-900 rounded-2xl p-4 md:p-8 space-y-1"
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
                <div className="flex items-center space-x-6 heading-h3 text-white">
                  <span className="hidden md:block">{capability.id}</span>
                  <h3>{capability.title}</h3>
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
                      <h4 className="text-white font-medium mb-2">
                        What We Offer
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {capability.overview}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">
                        Why It Matters
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
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
