export interface Skill {
  name: string;
  icon: string;
  category: 'Backend' | 'Frontend' | 'Database' | 'Cloud & DevOps' | 'Metodologias Ágeis' | 'Gestão' | 'Tools' | 'Testing';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: 'certification' | 'award';
}