import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Project_Section = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with real-time analytics and payment processing",
      image: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Project+1",
      liveLink: "#",
      clientCode: "#",
      serverCode: "#",
      tech: ["React", "Node.js", "MongoDB", "Redis", "Stripe"]
    },
    {
      title: "Enterprise SaaS Solution",
      description: "Cloud-based management platform with multi-tenant architecture",
      image: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Project+2",
      liveLink: "#",
      clientCode: "#",
      serverCode: "#",
      tech: ["Next.js", "NestJS", "PostgreSQL", "AWS", "Docker"]
    },
  ];

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-teal-400 tracking-wide uppercase">
            Technical Portfolio
          </span>
          <h2 className="mt-4 text-5xl font-bold text-white sm:text-6xl font-sans">
            Development Showcase
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="mt-4 h-1 w-24 bg-teal-500 mx-auto rounded-full"
          />
        </motion.div>

        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: "-100px" }}
              className="group relative bg-gray-900 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 ease-out overflow-hidden"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden"
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover opacity-90 group-hover:opacity-100"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </motion.div>

              <div className="p-6">
                <motion.div
                  className="flex flex-wrap gap-2 mb-4"
                  variants={staggerVariants}
                >
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      variants={techVariants}
                      className="px-3 py-1 text-xs font-medium text-teal-400 bg-teal-900 bg-opacity-50 rounded-full backdrop-blur-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.h3
                  className="text-2xl font-bold text-white mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-gray-400 mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className="flex justify-between items-center border-t border-gray-800 pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.a
                    href={project.liveLink}
                    className="flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </motion.a>
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.clientCode}
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Client code"
                      whileHover={{ scale: 1.2 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </motion.a>
                    <motion.a
                      href={project.serverCode}
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Server code"
                      whileHover={{ scale: 1.2 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Project_Section;