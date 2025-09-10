"use client";

import { motion, useInView } from "framer-motion";
import { Button } from "./ui/button";
import { useRef } from "react";
import Link from "next/link";

const footerSections = {
  Location: [
    "Kottawa, Sri Lanka",
    "contact@idea8.solutions",
    "+94 71 377 9680",
  ],
  Navigate: ["Services", "Projects", "Pricing", "Contact"],
  Company: ["About", "Careers", "FAQ"],
  Follow: ["Medium", "Instagram", "Twitter", "LinkedIn"],
};

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <footer
      id="contact"
      className="bg-slate-800 dark:bg-slate-900 text-white py-16"
    >
      <div className="wrapper">
        {/* Contact and Follow Cards */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-between pb-20 pt-6"
        >
          {/* Contact Us Card */}
          <div className="bg-slate-200 text-slate-800 rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <p className="text-slate-500 heading-h3-medium mb-2">
                Contact Us
              </p>
              <h3 className="heading-h3-medium mb-24">
                Let Us Know
                <br />
                How We Can
                <br />
                Help You
              </h3>
            </div>
            <div className="relative z-10 mt-auto">
              <Button
                variant="outline"
                className="bg-transparent text-[38.4px] tracking-tighter rounded-full p-8 border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white"
              >
                Lets Talk
              </Button>
            </div>
            <div className="absolute bottom-0 right-0">
              <img
                src="/icons/contact.png"
                alt="Contact materials"
                className="w-48 h-auto object-cover"
              />
            </div>
          </div>

          {/* Follow Us Card */}
          <div className="bg-slate-300 text-slate-800 rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <p className="text-slate-600 heading-h3-medium mb-2">Follow Us</p>
              <h3 className="heading-h3-medium mb-24">
                Stay Up To
                <br />
                Date With
                <br />
                Idea8
              </h3>
            </div>
            <div className="relative z-10 mt-auto">
              <Button
                variant="outline"
                className="bg-transparent text-[38.4px] rounded-full p-8 tracking-tighter border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white"
              >
                Subscribe
              </Button>
            </div>
            <div className="absolute bottom-0 right-0">
              <img
                src="/icons/follow.png"
                alt="Office equipment"
                className="w-48 h-auto object-cover"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Idea8 Solutions Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/">
              <div className="flex items-center space-x-2">
                <img
                  src="/logo-dark.png"
                  alt="Idea8 Solutions"
                  className="h-8 w-auto"
                />
              </div>
            </Link>
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
                    <Link
                      href="#"
                      className="text-white hover:text-slate-300 transition-colors duration-200 text-lg"
                    >
                      {link}
                    </Link>
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
