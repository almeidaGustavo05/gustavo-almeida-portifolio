'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { experiences } from '@/data/portfolio';

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="py-20 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Minha trajetória profissional no desenvolvimento de sistemas backend e integração de APIs
          </p>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative pl-20"
              >
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                
                <div className="bg-background p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {experience.position}
                      </h3>
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        {experience.company}
                      </h4>
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {experience.period}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {experience.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Principais Tecnologias
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-purple p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Evolução Profissional
            </h3>
            <p className="text-primary-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Minha trajetória demonstra crescimento consistente no desenvolvimento backend, 
              evoluindo de automações Python para arquiteturas complexas de microsserviços. 
              Atualmente focado em sistemas financeiros de alta segurança e integração com APIs de pagamento.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;