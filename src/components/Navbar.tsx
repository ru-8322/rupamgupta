'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'skills', 'projects', 'about', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleMobileNavClick = (id: any) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed w-full transition-all duration-300 z-50 ${scrolled
          ? 'bg-white shadow-md py-4'
          : 'bg-white bg-opacity-90 py-6'
        }`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="#home" className="flex items-center cursor-pointer">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <span className="text-2xl font-bold text-blue-600">Rupam</span>
                <span className="text-2xl font-bold text-gray-800">Gupta</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className={`relative px-3 py-2 transition-colors duration-300 ${activeSection == item.id
                        ? 'text-blue-600 font-medium'
                        : 'text-gray-700 hover:text-blue-500'
                      }`}
                  >
                    {item.name}
                    {activeSection == item.id && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block"
            >
              <Link
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-300"
              >
                Get Started
              </Link>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden text-gray-700 focus:outline-none cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 bg-white shadow-lg z-40 md:hidden"
          >
            <ul className="flex flex-col space-y-4 p-6">
              {navItems.map((item) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 * navItems.indexOf(item) }}
                >
                  <button
                    onClick={() => handleMobileNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-md transition-colors ${activeSection === item.id
                        ? 'bg-blue-50 text-blue-600 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    {item.name}
                  </button>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.1 * navItems.length }}
              >
                <button
                  onClick={() => handleMobileNavClick('contact')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md font-medium transition-colors"
                >
                  Get Started
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}