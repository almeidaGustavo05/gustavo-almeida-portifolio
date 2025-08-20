'use client';

import { cubicBezier, motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Trophy } from 'lucide-react';
import { certifications } from '@/data/portfolio';

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: cubicBezier(0.25, 0.1, 0.25, 1)
      }
    }
  };

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Certificações & <span className="text-gradient">Conquistas</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Reconhecimentos e certificações que validam minha expertise técnica e compromisso com a excelência profissional.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {certifications.map((cert, index) => {
              const IconComponent = cert.type === 'award' ? Trophy : Award;
              
              return (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  className="group bg-card border border-border rounded-xl p-8 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-lg ${cert.type === 'award' ? 'bg-accent/10' : 'bg-primary/10'}`}>
                      <IconComponent className={`${cert.type === 'award' ? 'text-accent' : 'text-primary'}`} size={24} />
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">
                      {cert.date}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {cert.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {cert.issuer}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;