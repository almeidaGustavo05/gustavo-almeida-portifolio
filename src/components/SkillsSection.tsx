'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '@/data/portfolio';
import { Icon } from '@iconify/react';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getIcon = (iconName: string) => {
    return <Icon icon={iconName} width={24} height={24} />;
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
    <section id="skills" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            The technologies and tools I use to build robust backend systems
          </p>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
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
                className="bg-card rounded-xl p-8 border border-border"
              >
                <h3 className="text-2xl font-semibold text-foreground mb-6">{category}</h3>

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
                      className="bg-background p-4 rounded-lg border border-border hover:border-primary transition-all duration-200 cursor-pointer group"
                    >
                      <div className="flex flex-col items-center space-y-3">
                        <div className="text-primary group-hover:text-primary/80 transition-colors duration-200">
                          {getIcon(skill.icon)}
                        </div>
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-200 text-center">
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
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-lg">
            Sempre aprendendo e explorando novas tecnologias para entregar as melhores soluções.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;