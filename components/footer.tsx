"use client";

import { motion } from "framer-motion";

const footerSections = {
  Locations: ["San Jose, CA", "San Francisco, CA", "New York, NY"],
  Navigate: ["Projects", "Journal", "Services", "Sectors"],
  Company: ["About", "Careers", "FAQ"],
  Follow: ["Medium", "Instagram", "Twitter", "LinkedIn"],
};

export function Footer() {
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white py-16">
      <div className="wrapper">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerSections).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <h3 className="text-slate-400 text-lg font-medium mb-4">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white hover:text-slate-300 transition-colors duration-200 text-lg"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-700"
        >
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-lg font-bold font-mono">
              Idea8<span className="text-slate-400">Solutions</span>
            </span>
          </div>
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Idea8 Solutions. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
