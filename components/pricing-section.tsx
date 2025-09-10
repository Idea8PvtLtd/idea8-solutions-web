"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pricingModels } from "../data/home";

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="section-padding bg-background">
      <div className="wrapper">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-h1 text-foreground mb-6">
            Pricing that works for you!!
          </h2>
          <p className="paragraph-normal max-w-3xl mx-auto">
            No hidden clauses. No excessive markups. Just straightforward
            pricing that is:
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingModels.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`relative rounded-2xl overflow-hidden ${
                model.popular
                  ? "bg-slate-800 text-white ring-2 ring-green-500"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white"
              }`}
            >
              {/* Popular Badge */}
              {model.popular && (
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  Popular
                </div>
              )}

              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={model.image}
                  alt={model.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <p className="text-white/80 text-sm mb-1">{model.subtitle}</p>
                  <h3 className="heading-h4 text-white">{model.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    model.popular
                      ? "text-slate-300"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {model.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {model.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <Check
                        className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                          model.popular ? "text-white" : "text-green-500"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          model.popular
                            ? "text-slate-300"
                            : "text-slate-600 dark:text-slate-300"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full ${
                    model.popular
                      ? "bg-white hover:bg-white/90 text-primary"
                      : "bg-slate-800 hover:bg-slate-700 text-white dark:bg-white dark:text-slate-800 dark:hover:bg-slate-100"
                  }`}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-slate-800 dark:bg-slate-900 rounded-2xl p-8 text-white">
            <h3 className="heading-h3 mb-4">Need a Custom Solution?</h3>
            <p className="paragraph-normal text-slate-300 mb-6 max-w-2xl mx-auto">
              Every project is unique. Let's discuss your specific requirements
              and create a pricing model that works perfectly for your needs.
            </p>
            <Button
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800"
            >
              Schedule a Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
