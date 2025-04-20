import React, { useState, useEffect } from "react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { CodeBracketSquareIcon } from "@heroicons/react/24/solid";

const NavBars = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Education", link: "#education" },
    { name: "Skills", link: "#skills" },  
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (link) => {
    setIsMenuOpen(false);
    const section = document.querySelector(link);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? "bg-gray-900/95 backdrop-blur-md shadow-xl" : "bg-transparent"} border-b ${isScrolled ? "border-gray-800" : "border-transparent"}`}>
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="" className="h-8 w-8 text-indigo-400"/>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Fiaj Rahman
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavigation(item.link)}
                    className="text-gray-300 hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-all hover:-translate-y-[2px]"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
            <button className="ml-4 px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-sm font-semibold transition-all transform hover:scale-105">
              Download CV
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            {/* <Bars3Icon className="h-7 w-7" /> */}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`md:hidden fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-lg transition-all duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        
        {/* Close Button */}
        <div className="absolute top-6 right-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-gray-400 hover:text-indigo-400 rounded-full transition-colors"
            aria-label="Close menu"
          >
            {/* <XMarkIcon className="h-8 w-8" /> */}
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex flex-col items-center justify-center h-full p-4">
          <ul className="space-y-6 text-center">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavigation(item.link)}
                  className="text-2xl font-medium text-gray-300 hover:text-indigo-400 transition-colors"
                >
                  {item.name}
                </button>
              </li>
            ))}
            <li>
              <button className="mt-8 px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-lg font-semibold transition-all transform hover:scale-105">
                Download CV
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBars;