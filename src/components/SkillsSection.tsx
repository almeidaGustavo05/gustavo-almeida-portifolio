'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '@/data/portfolio';
import * as SiIcons from 'react-icons/si';
import * as MdIcons from 'react-icons/md';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getIcon = (iconName: string) => {
    const SiIcon = (SiIcons as Record<string, React.ComponentType<{ size: number }>>)[iconName];
    const MdIcon = (MdIcons as Record<string, React.ComponentType<{ size: number }>>)[iconName];
    
    if (SiIcon) return <SiIcon size={24} />;
    if (MdIcon) return <MdIcon size={24} />;
    return <div className="w-6 h-6 bg-gray-500 rounded"></div>;
  };

  const categories = [
    'Backend',
    'Frontend', 
    'Database',
    'Cloud & DevOps',
    'Metodologias Ágeis',
    'Gestão',
    'Tools',
    'Testing'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            As tecnologias e ferramentas que uso para construir sistemas backend robustos
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            
            if (categorySkills.length === 0) return null;
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-gray-800 rounded-xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">{category}</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-gray-900 p-4 rounded-lg border border-gray-600 hover:border-blue-500 transition-all duration-200 cursor-pointer group"
                    >
                      <div className="flex flex-col items-center space-y-3">
                        <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-200">
                          {getIcon(skill.icon)}
                        </div>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200 text-center">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Technology Stack
            </h3>
            <p className="text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Especializado em desenvolvimento backend com .NET e Python, utilizando bancos de dados SQL Server, 
              PostgreSQL e Redis. Experiência em containerização com Docker, orquestração com Kubernetes, 
              e CI/CD com Jenkins. Aplicação de metodologias ágeis e ferramentas modernas para entregar 
              soluções escaláveis e seguras.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;