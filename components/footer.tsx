"use client";

import { motion } from "framer-motion";

const footerSections = {
  Location: [
    "Kottawa, Sri Lanka",
    "contact@idea8.solutions",
    "+94 71 377 9680",
  ],
  Navigate: ["Projects", "Journal", "Services", "Sectors"],
  Company: ["About", "Careers", "FAQ"],
  Follow: ["Medium", "Instagram", "Twitter", "LinkedIn"],
};

export function Footer() {
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white py-16">
      <div className="wrapper">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Idea8 Solutions Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2">
              <img
                src="/logo-dark.png"
                alt="Idea8 Solutions"
                className="h-8 w-auto"
              />
            </div>
          </motion.div>

          {/* Footer Sections */}
          {Object.entries(footerSections).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
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

        {/* Centered Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center items-center pt-8 border-t border-slate-700"
        >
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Idea8 Solutions. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
