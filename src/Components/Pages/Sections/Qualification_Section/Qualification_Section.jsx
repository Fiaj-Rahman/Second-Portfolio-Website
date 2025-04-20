import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { LiaSchoolSolid } from "react-icons/lia";

const Qualification_Section = () => {
  const qualifications = [
    {
      year: "2020 - 2023",
      title: "Bachelor of Science in CSE",
      institution: "Daffodil International University",
      description: "Specialized in Software Engineering with a focus on modern web technologies. Graduated with honors (CGPA: 3.75/4.00).",
      icon: <FaGraduationCap className="text-2xl" />,
      color: "from-indigo-500 to-purple-600"
    },
    {
      year: "2016 - 2018",
      title: "Higher Secondary Certificate",
      institution: "Karnafuly Government College",
      description: "",
      icon: <FaSchool className="text-2xl" />,
      color: "from-emerald-500 to-teal-600"
    },
    {
      year: "2014 - 2016",
      title: "Secondary School Certificate",
      institution: "Bangladesh Noubahini School & College",
      description: "Science Group with outstanding academic performance. Achieved GPA: 5.00/5.00.",
      icon: <LiaSchoolSolid className="text-2xl" />,
      color: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <section id="education" className="relative bg-black py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-300 to-emerald-300 bg-clip-text text-transparent mb-3">
            Academic Journey
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            My educational qualifications and academic achievements throughout the years
          </p>
        </motion.div>

        {/* Responsive Timeline */}
        <div className="relative">
          {/* Timeline Line (Visible only on md+) */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5 }}
            className="hidden md:block absolute left-1/2 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-emerald-500 h-full rounded-full shadow-lg -translate-x-1/2"
          />

          <div className="space-y-8 md:space-y-0">
            {qualifications.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
                className="w-full md:w-1/2 md:px-4"
                style={{
                  marginLeft: index % 2 === 0 ? "auto" : "0",
                  paddingLeft: index % 2 === 0 ? "2rem" : "0",
                  paddingRight: index % 2 === 0 ? "0" : "2rem"
                }}
              >
                {/* Timeline Card - Full width on mobile */}
                <div className={`relative p-6 sm:p-7 rounded-2xl bg-gray-800/70 backdrop-blur-sm border border-gray-700/30 hover:border-gray-700/50 transition-all duration-300 group overflow-hidden w-full`}>
                  {/* Gradient Background (Hover Effect) */}
                  <div className={`absolute inset-0  opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`} />
                  
                  {/* Icon Container - Position changes based on screen size */}
                  <div className={`absolute top-6 left-4 md:${index % 2 === 0 ? '-left-4' : '-right-4'} w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white shadow-lg border border-gray-700/30`}>
                    
                  </div>

                  {/* Content - Adjust padding for icon space */}
                  <div className="space-y-3 pl-12 md:pl-0">
                    <span className="text-xs sm:text-sm font-medium text-indigo-400">{item.year}</span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{item.title}</h3>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-300">{item.institution}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                  </div>

                  {/* Connector Line (Mobile) - Always on left */}
                  <div className="md:hidden absolute top-8 -left-4 w-4 h-0.5 bg-gray-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          {/* Floating Gradient Orbs */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute rounded-full filter blur-3xl opacity-20"
              animate={{
                opacity: [0, 0.1, 0],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 5
              }}
              style={{
                background: i % 2 === 0 
                  ? "linear-gradient(90deg, #6366f1, #a855f7)" 
                  : "linear-gradient(90deg, #10b981, #3b82f6)",
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Qualification_Section;