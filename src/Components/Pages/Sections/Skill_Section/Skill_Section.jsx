import React from "react";
import { motion } from "framer-motion";
import { FiDatabase, FiServer, FiLock, FiCloud, FiCode, FiCpu, FiLayers } from "react-icons/fi";

const Skill_Section = () => {
  const skills = [
    {
      category: "Frontend Mastery",
      items: ["React.js", "Tailwind CSS", "Material-UI", "Bootstrap"],
      icon: <FiCode className="text-3xl sm:text-4xl mb-4 text-indigo-300" />,
      color: "from-indigo-600 to-indigo-800"
    },
    {
      category: "Backend Expertise",
      items: ["Node.js", "Express.js", "REST API", "JWT"],
      icon: <FiServer className="text-3xl sm:text-4xl mb-4 text-emerald-300" />,
      color: "from-emerald-600 to-emerald-800"
    },
    {
      category: "Database & Cloud",
      items: ["MongoDB", "Firebase", "Mongoose"],
      icon: <FiCloud className="text-3xl sm:text-4xl mb-4 text-amber-300" />,
      color: "from-amber-600 to-amber-800"
    },
    {
      category: "Security & Auth",
      items: ["JWT Auth", "Firebase Auth", "CORS"],
      icon: <FiLock className="text-3xl sm:text-4xl mb-4 text-rose-300" />,
      color: "from-rose-600 to-rose-800"
    }
  ];

  const techStack = [
    { name: "MERN Stack", level: 95, color: "bg-gradient-to-r from-indigo-500 to-purple-600" },
    { name: "Cloud Services", level: 90, color: "bg-gradient-to-r from-amber-500 to-orange-600" },
    { name: "Authentication", level: 92, color: "bg-gradient-to-r from-rose-500 to-pink-600" },
    { name: "API Development", level: 94, color: "bg-gradient-to-r from-emerald-500 to-teal-600" }
  ];

  const tools = [
    { name: "Git", icon: <FiCpu className="text-xl sm:text-2xl" /> },
    { name: "NPM/Yarn", icon: <FiLayers className="text-xl sm:text-2xl" /> },
    { name: "VS Code", icon: <FiCode className="text-xl sm:text-2xl" /> },
  ];

  return (
    <section id="skills" className="min-h-screen bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-indigo-300 to-emerald-300 bg-clip-text text-transparent"
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto px-4"
          >
            A comprehensive showcase of my technical skills and the tools I leverage to build exceptional digital experiences.
          </motion.p>
        </div>

        {/* Skills Grid - Responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-md" 
                   style={{ background: `linear-gradient(45deg, ${skill.color.replace('from-', '').replace('to-', '').split(' ')[0]}, ${skill.color.replace('from-', '').replace('to-', '').split(' ')[1]})` }} />
              
              <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 h-full border border-gray-700/50 group-hover:border-transparent transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/20">
                <div className={`bg-gradient-to-br ${skill.color} w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center rounded-2xl mb-4 sm:mb-6 shadow-md`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">{skill.category}</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {skill.items.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="flex items-center text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full mr-2 sm:mr-3" 
                            style={{ background: `linear-gradient(45deg, ${skill.color.replace('from-', '').replace('to-', '').split(' ')[0]}, ${skill.color.replace('from-', '').replace('to-', '').split(' ')[1]})` }} />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack and Tools - Responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16 lg:mt-20">
          {/* Core Competencies */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-700/30 hover:border-gray-700/50 transition-all duration-300 hover:shadow-xl"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 flex items-center">
              <span className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 mr-2 sm:mr-3"></span>
              Core Competencies
            </h3>
            {techStack.map((tech, i) => (
              <div key={i} className="space-y-2 sm:space-y-3">
                <div className="flex justify-between text-sm sm:text-base text-gray-300">
                  <span>{tech.name}</span>
                  <span className="font-mono">{tech.level}%</span>
                </div>
                <div className="h-1.5 sm:h-2 bg-gray-700/50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 1.2, type: "spring" }}
                    className={`h-full ${tech.color} rounded-full shadow-md`}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-700/30 hover:border-gray-700/50 transition-all duration-300 hover:shadow-xl"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 flex items-center">
              <span className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 mr-2 sm:mr-3"></span>
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {tools.map((tool, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="p-3 sm:p-4 text-center bg-gray-900/50 rounded-lg border border-gray-700/30 hover:border-indigo-500/30 transition-all group"
                >
                  <div className="w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-2 sm:mb-3 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg group-hover:from-indigo-900 group-hover:to-indigo-800 transition-all">
                    {tool.icon}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors font-medium">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Skill_Section;