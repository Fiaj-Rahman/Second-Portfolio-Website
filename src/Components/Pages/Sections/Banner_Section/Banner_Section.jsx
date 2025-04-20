import React from "react";
// import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import developerImage from "/person01.png"; // Update with your image path

const Banner_Section = () => {
    
  return (
    <section id="home" className=" sm: mt-20 relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Tech Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full [mask-image:radial-gradient(ellipse_at_center,white,transparent)] bg-[url('/binary-pattern.svg')] bg-repeat opacity-20"></div>
        <div className="absolute w-64 h-64 bg-emerald-500 rounded-full blur-[150px] -top-32 -left-32 mix-blend-overlay opacity-15"></div>
        <div className="absolute w-64 h-64 bg-blue-600 rounded-full blur-[150px] bottom-0 right-0 mix-blend-overlay opacity-15"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            <div className="mb-6">
              <span className="text-sm font-medium tracking-wider text-blue-400">MERN STACK DEVELOPER</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
                Full Stack Solutions with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">MERN Expertise</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
                I architect and build scalable full-stack applications using MongoDB, Express, React, and Node.js. 
                From database design to pixel-perfect UIs, I deliver complete digital solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white rounded-lg font-medium flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
              >
                {/* <ArrowDownTrayIcon className="h-5 w-5" /> */}
                Download CV
              </motion.button>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="px-8 py-3.5 border border-gray-700 hover:border-blue-400 text-white hover:text-blue-400 rounded-lg font-medium transition-all hover:bg-gray-900/50"
              >
                Discuss Your Project
              </motion.a>
            </div>

            {/* Tech Stack Badges */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-3">
              {['MongoDB', 'Express', 'React', 'Node.js', 'Firebase', 'Tailwind Css'].map((tech) => (
                <motion.div 
                  key={tech}
                  whileHover={{ y: -2 }}
                  className="px-3 py-1.5 bg-gray-900 border border-gray-800 rounded-full text-xs font-medium text-blue-400"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Developer Image with Code Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative group mt-12 lg:mt-0 flex justify-center"
          >
            <div className="relative z-10">
              {/* Code snippet floating elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-blue-500/10 blur-xl animate-float"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-emerald-500/10 blur-xl animate-float-delay"></div>
              
              {/* Main image with code overlay */}
              <div className="relative overflow-hidden rounded-xl border border-gray-800 shadow-2xl bg-gray-900">
                <img
                  src={developerImage}
                  alt="MERN Stack Developer"
                  className="w-full max-w-md object-cover transform transition-all duration-500 group-hover:scale-105"
                />
                
                {/* Code snippet overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gray-900/90 p-4 text-sm font-mono">
                  <div className="text-blue-400">// MERN Stack Developer</div>
                  <div className="text-gray-400">const project = new FullStackApp(</div>
                  <div className="text-emerald-400 ml-4">database: "MongoDB",</div>
                  <div className="text-emerald-400 ml-4">backend: "Express/Node",</div>
                  <div className="text-emerald-400 ml-4">frontend: "React"</div>
                  <div className="text-gray-400">);</div>
                </div>
              </div>
              
              {/* Experience badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-br from-blue-500 to-blue-700 text-white px-4 py-2 rounded-lg shadow-lg font-medium text-sm"
              >
                Full Stack Solutions
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tech Inspired Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-xs text-gray-500 mb-2 tracking-widest">EXPLORE</span>
          <div className="h-8 w-5 rounded-full border-2 border-gray-600 flex justify-center">
            <motion.div 
              animate={{ y: [0, 5, 0], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-2 w-1 bg-blue-400 mt-1 rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 7s ease-in-out infinite 1s; }
      `}</style>
    </section>
  );
};

export default Banner_Section;