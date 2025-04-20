import React from "react";
import { motion } from "framer-motion";

const About_Me_Section = () => {
  return (
    <section id="about" className="min-h-screen bg-black text-white py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400">Get to know me better</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold mb-6">
              So, Who am I?
              <span className="ml-4 animate-wave inline-block">👋</span>
            </h3>
            
            <p className="text-lg leading-relaxed text-gray-300">
              Hi! I'm <span className="text-blue-400 font-medium">Fiaj Rahman</span>, a passionate web designer and developer. With a creative flair and a knack for problem-solving, I thrive on crafting beautiful and functional websites that leave a lasting impression.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-300">
              My journey into the world of web development began with a curiosity for technology and love for creativity. Over the years, I've honed my skills in various programming languages, design tools, and development frameworks to bring ideas to life on the digital canvas.
            </p>

            <div className="mt-8">
              <a 
                href="#contact" 
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Let's Collaborate
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-2xl"
          >
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300">
                <div className="text-blue-400 text-3xl mb-4">🎨</div>
                <h4 className="text-xl font-semibold mb-2">UI/UX Design</h4>
                <p className="text-gray-400">Crafting intuitive and beautiful user experiences</p>
              </div>
              
              <div className="p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300">
                <div className="text-purple-400 text-3xl mb-4">💻</div>
                <h4 className="text-xl font-semibold mb-2">Web Development</h4>
                <p className="text-gray-400">Building robust and scalable web applications</p>
              </div>

              <div className="p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300">
                <div className="text-green-400 text-3xl mb-4">📱</div>
                <h4 className="text-xl font-semibold mb-2">Responsive Design</h4>
                <p className="text-gray-400">Perfect display on all devices</p>
              </div>

              <div className="p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300">
                <div className="text-yellow-400 text-3xl mb-4">⚡</div>
                <h4 className="text-xl font-semibold mb-2">Performance</h4>
                <p className="text-gray-400">Lightning-fast loading speeds</p>
              </div>
            </div>

            <p className="text-lg text-gray-300 mt-8">
              Whether it's designing intuitive interfaces, coding responsive layouts, or optimizing performance, I'm dedicated to delivering high-quality solutions tailored to your needs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About_Me_Section;