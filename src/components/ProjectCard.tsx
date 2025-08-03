import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiFlutter } from 'react-icons/si';
import { JSX } from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
  features: string[];
  tags?: string[];
  liveUrl?: string;
  codeUrl?: string;
  imageUrl?: string;
};

const techIcons: Record<string, JSX.Element> = {
  react: <FaReact className="text-blue-500" />,
  node: <FaNodeJs className="text-green-600" />,
  typescript: <SiTypescript className="text-blue-600" />,
  nextjs: <SiNextdotjs className="text-black" />,
  flutter: <SiFlutter className="text-blue-400" />,
  aws: <FaAws className="text-orange-500" />,
};

export default function ProjectCard({ 
  title, 
  description, 
  features, 
  tags = [], 
  liveUrl, 
  codeUrl,
  imageUrl 
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100"
    >
      {/* Project Image */}
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
      )}
      
      {/* Project Content */}
      <div className="p-6">
        {/* Title and Tech Stack */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
          <div className="flex space-x-2">
            {tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 mb-4">{description}</p>
        
        {/* Features */}
        {features && features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        {/* Tech Stack Icons */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-6">
            {tags.map(tag => (
              <div key={tag} className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                {techIcons[tag.toLowerCase()] || (
                  <span className="text-xs font-medium text-gray-500">{tag.charAt(0)}</span>
                )}
              </div>
            ))}
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="flex space-x-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <FiExternalLink className="mr-2" />
              Live Demo
            </a>
          )}
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <FiGithub className="mr-2" />
              View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}