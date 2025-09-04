"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function ProjectModal({ project, isOpen, onClose, mousePosition }: any) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              x: mousePosition.x - window.innerWidth / 2,
              y: mousePosition.y - window.innerHeight / 2,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              x: mousePosition.x - window.innerWidth / 2,
              y: mousePosition.y - window.innerHeight / 2,
            }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
              duration: 0.4,
            }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-4xl max-h-[90vh] px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-background rounded-2xl shadow-2xl border border-border/10 overflow-hidden max-h-[90vh] overflow-y-auto scrollbar-hide">
              {/* Header */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-sm rounded-full text-white hover:bg-black/40 transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="heading-h2 text-white mb-2"
                  >
                    {project.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="heading-h4 text-white/80"
                  >
                    {project.subtitle}
                  </motion.p>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 md:p-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-6 sm:space-y-8"
                >
                  {/* Description */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                      About the Project
                    </h3>
                    <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 gap-3 sm:gap-4">
                      {project.features.map((feature: any, index: any) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="flex items-start space-x-3 p-3 sm:p-4 bg-muted/30 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-foreground/80">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {project.technologies.map((tech: any, index: any) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + index * 0.05 }}
                          className="px-2 py-1 sm:px-3 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-border/20">
                    <div className="text-center p-3 sm:p-0">
                      <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">
                        {project.stats.duration}
                      </div>
                      <div className="text-xs sm:text-sm text-foreground/60">
                        Development Time
                      </div>
                    </div>
                    <div className="text-center p-3 sm:p-0">
                      <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">
                        {project.stats.team}
                      </div>
                      <div className="text-xs sm:text-sm text-foreground/60">
                        Team Members
                      </div>
                    </div>
                    <div className="text-center p-3 sm:p-0">
                      <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">
                        {project.stats.status}
                      </div>
                      <div className="text-xs sm:text-sm text-foreground/60">
                        Project Status
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
