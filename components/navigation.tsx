"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, User } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

const serviceCategories = {
  Design: [
    "Industrial Design",
    "Brand Design",
    "Packaging Design",
    "UX Design",
  ],
  Hardware: [
    "Mechanical Engineering",
    "NPI & Product",
    "Electrical Engineering",
  ],
  Strategy: ["Innovation Strategy", "Design Strategy", "User Research"],
};

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <div className="sticky top-0 left-0 right-0 z-50 wrapper pb-5">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-background backdrop-blur-md rounded-b-2xl shadow-lg border-r border-l border-b border-border"
      >
        <div className="wrapper">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
              <Link href="/">
                <img
                  src="/logo-light.png"
                  alt="Idea8 Solutions"
                  className="h-8 w-auto dark:hidden"
                />
                <img
                  src="/logo-dark.png"
                  alt="Idea8 Solutions"
                  className="h-8 w-auto hidden dark:block"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
              <div className="flex items-baseline space-x-10">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onMouseEnter={() =>
                      item.name === "Services" && setShowServices(true)
                    }
                    onMouseLeave={() =>
                      item.name === "Services" && setShowServices(false)
                    }
                    className="text-primary hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors duration-200 text-lg relative"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              {/* <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button> */}
              <Link href="#contact">
                <Button variant="outline" size="rounded">
                  Hire Us
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Services Dropdown */}
        <AnimatePresence>
          {showServices && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-background backdrop-blur-md border border-border rounded-2xl shadow-lg mt-1.5"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <div className="wrapper py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {Object.entries(serviceCategories).map(
                        ([category, services]) => (
                          <div key={category}>
                            <h3 className="text-sm font-medium text-muted-foreground mb-4">
                              {category}
                            </h3>
                            <ul className="space-y-2">
                              {services.map((service) => (
                                <li key={service}>
                                  <a
                                    href="#"
                                    className="font-lg text-foreground hover:text-primary transition-colors duration-200"
                                  >
                                    {service}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src="/images/header.jpg"
                      alt="Design showcase"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background backdrop-blur-md border border-border rounded-b-xl shadow-lg"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-3 py-2 space-y-2">
                  {/* <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Account
                  </Button> */}
                  <Link href="#contact">
                    <Button
                      size="sm"
                      className="w-full bg-foreground text-background hover:bg-foreground/90"
                    >
                      Hire Us
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
