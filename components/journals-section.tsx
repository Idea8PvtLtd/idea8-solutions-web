"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const journalEntries = [
  {
    date: "2.4.25",
    title: "How To Choose An Industrial And Product Design Company",
    image: "/industrial-design-sketches-and-tools.png",
  },
  {
    date: "10.4.24",
    title:
      "Cultural Influences On Product Design, Part 4: Uncertainty Avoidance",
    image: "/cultural-design-elements-and-balance-scales.png",
  },
  {
    date: "6.3.24",
    title: "Deep Dive: What Is Human Centered Design",
    image: "/human-centered-design-process-and-user-research.png",
  },
];

export function JournalsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="journal"
      ref={ref}
      className="py-20 bg-slate-800 dark:bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-16"
        >
          <h2 className="text-5xl font-bold">Journals</h2>
          <ChevronDown className="h-8 w-8 text-slate-400" />
        </motion.div>

        <div className="space-y-8 mb-16">
          {journalEntries.map((entry, index) => (
            <motion.article
              key={entry.date}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ x: 10 }}
              className="flex items-center justify-between p-6 bg-slate-700/50 rounded-2xl hover:bg-slate-700 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex-1">
                <p className="text-slate-400 text-sm mb-2">{entry.date}</p>
                <h3 className="text-xl font-semibold group-hover:text-slate-200 transition-colors">
                  {entry.title}
                </h3>
              </div>
              <div className="ml-8">
                <img
                  src={entry.image || "/placeholder.svg"}
                  alt={entry.title}
                  className="w-24 h-16 object-cover rounded-lg"
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Contact and Follow Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Contact Us Card */}
          <div className="bg-slate-200 text-slate-800 rounded-2xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-slate-500 text-sm mb-2">Contact Us</p>
              <h3 className="text-2xl font-bold mb-6 text-balance">
                Let Us Know
                <br />
                How We Can
                <br />
                Help You
              </h3>
              <Button
                variant="outline"
                className="bg-transparent border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white"
              >
                Lets Talk
              </Button>
            </div>
            <div className="absolute bottom-0 right-0">
              <img
                src="/business-cards-and-design-materials.png"
                alt="Contact materials"
                className="w-48 h-32 object-cover"
              />
            </div>
          </div>

          {/* Follow Us Card */}
          <div className="bg-slate-300 text-slate-800 rounded-2xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-slate-600 text-sm mb-2">Follow Us</p>
              <h3 className="text-2xl font-bold mb-6 text-balance">
                Stay Up To
                <br />
                Date With
                <br />
                Speck Design
              </h3>
              <Button
                variant="outline"
                className="bg-transparent border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white"
              >
                Subscribe
              </Button>
            </div>
            <div className="absolute bottom-0 right-0">
              <img
                src="/modern-office-equipment-and-calculator.png"
                alt="Office equipment"
                className="w-48 h-32 object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
