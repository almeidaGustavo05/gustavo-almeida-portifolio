'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="about" className="py-20 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Minha jornada, expertise e paixão pelo desenvolvimento backend
            </h3>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Desenvolvedor backend especializado em APIs escaláveis e microsserviços, 
                com expertise em .NET e Python. Contribuindo ativamente para a integração 
                da Mastercard aos cartões de crédito BANESE, projetando sistemas seguros 
                e compatitivos usando ferramentas modernas como Docker, Kubernetes e Jenkins.
              </p>
              
              <p>
                Focado em entregar arquiteturas resilientes alinhadas com padrões 
                financeiros. Meu trabalho combina princípios de engenharia de software 
                com metodologias ágeis (Scrum), respaldado por certificações em Google 
                Cloud, .NET e Docker.
              </p>
              
              <p>
                Vencedor duas vezes da NASA Space Apps Brasil (2023 e 2024), enfrentando 
                desafios através de soluções inovadoras. Atualmente aprofundando meu 
                conhecimento em Go (Golang) para aprimorar expertise em sistemas distribuídos.
              </p>
              
              <p>
                Quando não estou codificando, exploro otimização de banco de dados, 
                segurança de aplicações e tecnologias emergentes para construir sistemas 
                preparados para o futuro.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-background p-8 rounded-xl border border-border">
              <h4 className="text-xl font-semibold text-foreground mb-6">Destaques Profissionais</h4>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Integração Mastercard - BANESE</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Arquiteturas de Microsserviços</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Sistemas Financeiros Seguros</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Automação de Processos</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-background p-6 rounded-xl border border-border text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">2x</div>
                <div className="text-sm text-muted-foreground">NASA Space Apps Winner</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-background p-6 rounded-xl border border-border text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-background p-6 rounded-xl border border-border text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Certificações</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-background p-6 rounded-xl border border-border text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Projetos Entregues</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;