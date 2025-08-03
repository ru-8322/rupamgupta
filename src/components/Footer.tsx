import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { SiUpwork, SiFiverr } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: 'Web Development', href: '#skills' },
    { name: 'Mobile Apps', href: '#skills' },
    { name: 'Cloud Solutions', href: '#skills' },
    { name: 'Desktop Apps', href: '#skills' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <FaGithub className="text-xl" />, href: 'https://github.com/programmingyatra' },
    { icon: <FaLinkedin className="text-xl" />, href: 'https://linkedin.com/in/mr-rupam-gupta' },
    { icon: <FaTwitter className="text-xl" />, href: 'https://twitter.com/mrrupamgupta' },
    { icon: <FaEnvelope className="text-xl" />, href: 'mailto:guptarupam@gmail.com' },
    // { icon: <SiUpwork className="text-xl" />, href: 'https://upwork.com/freelancers/yourprofile' },
    // { icon: <SiFiverr className="text-xl" />, href: 'https://fiverr.com/yourprofile' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-blue-400">Rupam</span>
              <span className="text-2xl font-bold text-white">Gupta</span>
            </div>
            <p className="mb-6 text-gray-400">
              Delivering high-quality software solutions with cutting-edge technologies 
              to help businesses thrive in the digital world.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link 
                  key={index} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-600 text-white p-3 rounded-full transition-colors duration-300"
                  aria-label={`${social.icon.type.displayName} profile`}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Skills</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Rupam Gupta. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            {/* <Link 
              href="/privacy-policy" 
              className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300"
            >
              Terms of Service
            </Link> */}
            {/* <Link 
              href="#contact" 
              className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300"
            >
              Contact Us
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}