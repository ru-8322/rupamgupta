import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <FiMail className="text-xl sm:text-2xl text-blue-500" />,
      title: "Email Me",
      info: "guptarupam.1020@gmail.com",
      action: "mailto:guptarupam.1020@gmail.com"
    },
    {
      icon: <FiPhone className="text-xl sm:text-2xl text-blue-500" />,
      title: "Call Me",
      info: "+91 8460980143",
      action: "tel:+918460980143"
    },
    {
      icon: <FiMapPin className="text-xl sm:text-2xl text-blue-500" />,
      title: "Location",
      info: "Lucknow, India",
      action: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin className="text-lg sm:text-xl" />, href: "https://linkedin.com/in/mr-rupam-gupta" },
    { icon: <FaGithub className="text-lg sm:text-xl" />, href: "https://github.com/programmingyatra" },
    { icon: <FaTwitter className="text-lg sm:text-xl" />, href: "https://twitter.com/mrrupamgupta" },
    { icon: <FaEnvelope className="text-lg sm:text-xl" />, href: 'mailto:guptarupam.1020@gmail.com' },
  ];

  return (
    <section id="contact" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out through any of these channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 md:space-y-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0 p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">
                      {method.title}
                    </h3>
                    <a
                      href={method.action}
                      className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {method.info}
                    </a>
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="pt-4 md:pt-6">
                <h4 className="text-base sm:text-lg font-medium text-gray-800 dark:text-gray-100 mb-3 sm:mb-4">Follow Me</h4>
                <div className="flex gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                      aria-label="social link"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4 sm:mb-6">Send a Message</h3>

            {submitSuccess && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 dark:bg-green-900/40 text-sm sm:text-base text-green-700 dark:text-green-300 rounded-lg">
                Thank you! Your message has been sent successfully. I'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg text-white font-medium cursor-pointer transition-colors ${isSubmitting
                        ? 'bg-blue-400 dark:bg-blue-500'
                        : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
                      }`}
                  >
                    {isSubmitting ? 'Sending...' : (<><FiSend className="mr-2" /> Send Message</>)}
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
