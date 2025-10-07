import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiMysql, SiLeaflet, SiStripe, SiAngular } from 'react-icons/si';
import { IoMdGitNetwork } from 'react-icons/io';
import { BsFillGeoAltFill } from 'react-icons/bs';
import { JSX } from 'react';

type Project = {
  id: string;
  title: string;
  description: string;
  features: string[];
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
};

const projects: Project[] = [
  {
    id: 'bidzilla',
    title: 'Bidzilla – Bidding System',
    description: 'A full-stack MEAN application to manage online auctions and real-time bidding with admin dashboard.',
    features: [
      'Real-time bidding with WebSockets',
      'Role-based access control',
      'Payment gateway integration',
      'Bid history analytics'
    ],
    tags: ['Angular', 'Node.js', 'MongoDB', 'Express', 'AWS', 'Tailwind'],
    liveUrl: 'https://bidzilla.in/',
    // codeUrl: '#'
  },
  {
    id: 'rch-mahoba',
    title: 'RCH Call Analysis',
    description: 'Backend service to capture incoming call triggers and log data to MongoDB with automated reporting.',
    features: [
      'REST API with Express.js',
      'MongoDB database management',
      'Automated PDF report generation',
      'High availability architecture'
    ],
    tags: ['Node.js', 'MongoDB', 'Express', 'AWS'],
    liveUrl: 'https://rch.mahoba.brainpan.in/'
  },
  {
    id: 'gis-bharat',
    title: 'GIS Bharat',
    description: 'Geo-tracking solution to mark locations and draw convex hulls for municipal boundary mapping.',
    features: [
      'Interactive maps with Leaflet.js',
      'Convex hull computation',
      'Mobile App for get the Current location of the User',
      'Mobile-responsive design Admin'
    ],
    tags: ['Angular', 'Leaflet', 'Algorithms', 'Tailwind'],
    liveUrl: 'https://gisbharat.com/'
  },
  {
    id: 'interactive-dashboard',
    title: 'Interactive Dashboard',
    description: 'A dynamic and responsive dashboard that provides real-time insights, user management, and secure payment integration.',
    features: [
      'Real-time data visualization',
      'Responsive design',
      'RESTful API integration',
    ],
    tags: ['Angular', 'Node.js', 'Express', 'Tailwind', 'NextAuth', 'Stripe'],
    // liveUrl: '#', 
    // codeUrl: '#'  
  }
  ,
  // {
  //   id: 'dukaan-clone',
  //   title: 'Dukaan Clone',
  //   description: 'E-commerce platform for small businesses with inventory management and order processing.',
  //   features: [
  //     'Seller dashboard',
  //     'Product catalog management',
  //     'Order tracking system',
  //     'Mobile-first design'
  //   ],
  //   tags: ['Angular', 'Socket.io', 'Node.js', 'MongoDB', 'Express', 'Next.js'],
  //   // liveUrl: 'https://dukaan-buddy-explore.vercel.app/'
  // },
  {
    id: 'safai-setu',
    title: 'Safai Setu',
    description: 'Smart sanitation management platform for municipalities, integrating workforce tracking, attendance, and reporting in one system.',
    features: [
      'Interactive admin panel for task assignment',
      'Geo-tagged worker locations',
      'Reporting dashboard',
    ],
    tags: ['Angular', 'Node.js', 'MongoDB', 'Express', 'TailwindCSS'],
    // liveUrl: '' // Add production URL here when ready
  },
  {
    id: 'ayush-app',
    title: 'Ayush App',
    description: 'Healthcare management app built with Flutter for patient registration, attendance tracking, and health monitoring.',
    features: [
      'Mark attendance with photo upload',
      'Add new patients with details',
      'View and manage patient list',
      'Interactive dashboard for doctors and staff',
    ],
    tags: ['Flutter', 'Node.js', 'Express', 'MongoDB'],
    // liveUrl: '' // Add production URL here when ready
  },
  {
    id: 'kitesuite',
    title: 'KiteSuite PMS Tool',
    description: 'Project Management System to streamline team collaboration, task tracking, and resource management for enterprises.',
    features: [
      'Project & task lifecycle management',
      'Team collaboration with role-based access',
      'Real-time progress tracking dashboard',
      'Reports & analytics for managers',
    ],
    tags: ['Angular', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS'],
    liveUrl: 'https://kitesuite.com/'
  }

  ,
  {
    id: 'wind-farm',
    title: 'Wind Farm',
    description: 'Smart wind energy management platform with real-time turbine monitoring, energy analytics, and sensor-driven insights.',
    features: [
      'Energy production and consumption dashboard',
      'Sensor data integration',
      'Interactive admin and analytics dashboard',
    ],
    tags: ['Angular', 'Node.js', 'Express', 'MongoDB', 'IoT', 'TailwindCSS'],
    liveUrl: 'https://windfarm.brainpan.in/'
  },
  {
    id: 'portfolio',
    title: 'Rupam Gupta Portfolio',
    description: 'Current iteration of my personal portfolio with interactive elements.',
    features: [
      'Framer Motion animations',
      // 'Dark/light mode toggle',
      'Project showcase',
      'Contact form'
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer'],
    liveUrl: '#',
    // codeUrl: '#'
  }
];

const techIcons: Record<string, JSX.Element> = {
  'react': <FaReact className="text-blue-500" />,
  'angular': <SiAngular className="text-red-600" />,
  'node.js': <FaNodeJs className="text-green-600" />,
  'mongodb': <SiMongodb className="text-green-500" />,
  'next.js': <SiNextdotjs className="text-black dark:text-white" />,
  'socket.io': <IoMdGitNetwork className="text-black dark:text-white" />,
  'mysql': <SiMysql className="text-blue-600" />,
  'aws': <FaAws className="text-orange-500" />,
  'leaflet': <SiLeaflet className="text-green-600" />,
  'gis': <BsFillGeoAltFill className="text-blue-600" />,
  'stripe': <SiStripe className="text-purple-500" />,
  'typescript': <SiNextdotjs className="text-blue-600" />,
  'tailwind': <SiNextdotjs className="text-cyan-400" />,
  'express': <FaNodeJs className="text-gray-600" />,
  'algorithms': <SiNextdotjs className="text-yellow-500" />,
  'framer': <SiNextdotjs className="text-purple-600" />
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">My Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my featured projects. Each one solved unique challenges and helped me grow as a developer.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                {/* Project Header */}
                <div className="p-6 pb-0">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                </div>

                {/* Project Features */}
                <div className="px-6 flex-grow">
                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="px-6 pb-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      >
                        {techIcons[tag.toLowerCase()] && (
                          <span className="mr-1.5">
                            {techIcons[tag.toLowerCase()]}
                          </span>
                        )}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Footer */}
                <div className="px-6 pb-6 pt-2 bg-gray-50 dark:bg-gray-700 rounded-b-xl">
                  <div className="flex space-x-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors text-sm"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 transition-colors duration-500"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Want to see more? Check out my GitHub or contact me for details.
          </p>

          <div className="flex justify-center space-x-4">
            {/* GitHub Button */}
            <a
              href="https://github.com/programmingyatra"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300 rounded-lg shadow transition-all duration-300 flex items-center font-medium"
            >
              View GitHub
            </a>

            {/* Contact Button */}
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-gray-800 text-gray-800 hover:bg-gray-100 
                 dark:border-gray-200 dark:text-gray-200 dark:hover:bg-gray-700 
                 rounded-lg font-medium transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}