import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaMobile, FaMicrosoft, FaGitAlt, FaPython } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiRedux, SiAngular, SiFlutter, SiNextdotjs, SiFirebase, SiGithubactions, SiDocker, SiTypescript, SiSpringboot, SiDart, SiPostman } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';
import { JSX } from 'react';

type SkillCategory = {
  name: string;
  icon: JSX.Element;
  skills: {
    name: string;
    level: number;
    icon?: JSX.Element;
  }[];
};

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: <FaReact className="text-blue-500" />,
    skills: [
      { name: 'React', level: 78, icon: <FaReact className="text-blue-500" /> },
      { name: 'Angular', level: 90, icon: <SiAngular className="text-red-500" /> },
      { name: 'Redux Toolkit', level: 80, icon: <SiRedux className="text-purple-500" /> },
      { name: 'Next.js', level: 82, icon: <SiNextdotjs className="text-black dark:text-white" /> },
    ]
  },
  {
    name: 'Backend',
    icon: <FaNodeJs className="text-green-600" />,
    skills: [
      { name: 'Node.js', level: 92, icon: <FaNodeJs className="text-green-600" /> },
      { name: 'Express', level: 90, icon: <SiExpress className="text-gray-800" /> },
      // { name: 'Python', level: 80, icon: <FaPython className="text-yellow-500" /> },
      { name: 'FastAPI', level: 40, icon: <FaPython className="text-teal-500" /> },
      // { name: 'Spring Boot', level: 30, icon: <SiSpringboot className="text-green-700" /> },
    ]
  },
  {
    name: 'Mobile',
    icon: <FaMobile className="text-blue-400" />,
    skills: [
      { name: 'Flutter', level: 50, icon: <SiFlutter className="text-blue-400" /> },
      { name: 'React Native', level: 30, icon: <FaReact className="text-cyan-500" /> },
      { name: 'Dart', level: 40, icon: <SiDart className="text-blue-500" /> },
    ]
  },
  {
    name: 'Databases',
    icon: <FaDatabase className="text-yellow-500" />,
    skills: [
      { name: 'MongoDB', level: 88, icon: <SiMongodb className="text-green-500" /> },
      { name: 'MySQL', level: 60, icon: <DiMysql className="text-blue-600" /> },
      { name: 'Firebase', level: 30, icon: <SiFirebase className="text-yellow-500" /> },
    ]
  },
  {
    name: 'Cloud & DevOps',
    icon: <FaAws className="text-orange-500" />,
    skills: [
      { name: 'AWS', level: 60, icon: <FaAws className="text-orange-500" /> },
      { name: 'Docker', level: 10, icon: <SiDocker className="text-blue-500" /> },
      { name: 'CI/CD', level: 20, icon: <SiGithubactions className="text-purple-500" /> },
    ]
  },
  {
    name: 'Others',
    icon: <FaMicrosoft className="text-red-500" />,
    skills: [
      { name: 'MS Office', level: 80, icon: <FaMicrosoft className="text-red-500" /> },
      { name: 'Git', level: 90, icon: <FaGitAlt className="text-orange-600" /> },
      { name: 'Postman', level: 88, icon: <SiPostman className="text-orange-600" /> },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My technical proficiency across different domains and technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all h-full p-6 border border-gray-200 dark:border-gray-700">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-gray-700 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{category.name}</h3>
                </div>

                {/* Skills List */}
                <ul className="space-y-5">
                  {category.skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center">
                          {skill.icon && (
                            <span className="mr-2 text-lg">
                              {skill.icon}
                            </span>
                          )}
                          <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="h-2 rounded-full bg-blue-600"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'TypeScript',
              'GraphQL', 'REST API', 'Vs Code', 'Postman', 'GitHub',
              'Linux', 'Nginx', 'Bootstrap', 'Electron', 'Python'
            ].map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="inline-block bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-gray-600">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}