'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Gustavo Almeida
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Desenvolvedor Backend especializado em .NET e Python, 
              criando soluções escaláveis e seguras para sistemas financeiros.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/gustavoalmeida"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
              >
                <Github className="text-muted-foreground group-hover:text-primary-foreground" size={18} />
              </a>
              <a
                href="https://linkedin.com/in/gustavoalmeida"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
              >
                <Linkedin className="text-muted-foreground group-hover:text-primary-foreground" size={18} />
              </a>
              <a
                href="mailto:gustavo.almeida@email.com"
                className="w-10 h-10 bg-card rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
              >
                <Mail className="text-muted-foreground group-hover:text-primary-foreground" size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {[
                { name: 'About Me', href: '#about' },
                { name: 'Technical Skills', href: '#skills' },
                { name: 'Certifications', href: '#certifications' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Contato
            </h4>
            <div className="space-y-2 text-muted-foreground">
              <p>gustavo.almeida@email.com</p>
              <p>+55 (11) 99999-9999</p>
              <p>São Paulo, Brasil</p>
            </div>
            <div className="mt-6">
              <button
                onClick={scrollToTop}
                className="bg-primary hover:bg-primary/80 text-primary-foreground px-4 py-2 rounded-lg transition-colors duration-300"
              >
                Voltar ao Topo
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border mt-12 pt-8 text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center space-x-2">
            <span>© {currentYear} Gustavo Almeida. Feito com</span>
            <Heart className="text-primary" size={16} fill="currentColor" />
            <span>e muito código.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;