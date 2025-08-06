import { motion } from 'framer-motion';
import { FiArrowRight, FiMail, FiPhone } from 'react-icons/fi';

export default function CallToAction() {
  return (
    <section id="about" className="relative py-12 md:py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 md:left-20 w-32 h-32 md:w-40 md:h-40 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 md:bottom-40 md:right-40 w-48 h-48 md:w-60 md:h-60 bg-purple-400 rounded-full filter blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.03]"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Bring Your Ideas to Life?</h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 sm:mb-10 px-2 sm:px-0">
            Whether you have a project in mind or just want to explore possibilities, I'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base"
            >
              Get Started <FiArrowRight className="ml-2" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:guptarupam.1020@gmail.com"
              className="flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 hover:bg-opacity-10 transition-all duration-300 text-sm sm:text-base"
            >
              <FiMail className="mr-2" /> Email Me
            </motion.a>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <div className="flex items-center gap-2">
              <FiPhone className="text-blue-300 text-sm sm:text-base" />
              <span className="text-blue-100 text-sm sm:text-base">+91 8460980143</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-blue-400"></div>
            <div className="flex items-center gap-2">
              <FiMail className="text-blue-300 text-sm sm:text-base" />
              <span className="text-blue-100 text-sm sm:text-base">guptarupam.1020@gmail.com</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-4 sm:left-10 w-8 h-8 sm:w-12 sm:h-12 bg-white bg-opacity-10 rounded-full"
      ></motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute bottom-1/3 right-4 sm:right-16 w-6 h-6 sm:w-10 sm:h-10 bg-white bg-opacity-10 rounded-full"
      ></motion.div>
    </section>
  );
}