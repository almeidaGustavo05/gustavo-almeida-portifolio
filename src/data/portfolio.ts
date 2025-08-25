import { Skill, Project, Experience, Certification } from '@/types';

export const skills: Skill[] = [
  { name: 'C#', icon: 'mdi:language-csharp', category: 'Backend' },
  { name: '.NET Core', icon: 'simple-icons:dotnet', category: 'Backend' },
  { name: 'ASP.NET', icon: 'simple-icons:dotnet', category: 'Backend' },
  { name: 'Go', icon: 'mdi:language-go', category: 'Backend' },
  { name: 'NestJS', icon: 'devicon-plain:nestjs', category: 'Backend' },

  { name: 'Next.js', icon: 'teenyicons:nextjs-outline', category: 'Frontend' },
  { name: 'React', icon: 'mdi:react', category: 'Frontend' },
  { name: 'Vue.js', icon: 'mdi:vuejs', category: 'Frontend'},

  { name: 'SQL Server', icon: 'simple-icons:microsoftsqlserver', category: 'Database' },
  { name: 'PostgreSQL', icon: 'mdi:database', category: 'Database' },
  { name: 'Redis', icon: 'devicon-plain:redis', category: 'Database' },

  { name: 'Docker', icon: 'mdi:docker', category: 'Cloud & DevOps' },
  { name: 'Kubernetes', icon: 'mdi:kubernetes', category: 'Cloud & DevOps' },
  { name: 'Jenkins', icon: 'fa-brands:jenkins', category: 'Cloud & DevOps' },

  { name: 'Scrum', icon: 'material-symbols:groups', category: 'Metodologias Ágeis' },
  { name: 'Sprints', icon: 'material-symbols:speed', category: 'Metodologias Ágeis' },
  { name: 'OKRs', icon: 'material-symbols:track-changes', category: 'Metodologias Ágeis' },

  { name: 'Azure DevOps', icon: 'simple-icons:azuredevops', category: 'Gestão' },

  { name: 'Visual Studio', icon: 'mdi:microsoft-visual-studio', category: 'Tools' },
  { name: 'VS Code', icon: 'mdi:visual-studio-code', category: 'Tools' },
  { name: 'Git', icon: 'mdi:git', category: 'Tools' },
  { name: 'Postman', icon: 'simple-icons:postman', category: 'Tools' },
  { name: 'ApiDog', icon: 'material-symbols:api', category: 'Tools' },

  { name: 'xUnit', icon: 'mdi:test-tube', category: 'Testing' },
];

export const experiences: Experience[] = [
  {
    id: '1',
    position: 'Mid-Level Backend Developer',
    company: 'Empresa Atual',
    period: 'Jan/2025 - presente',
    description: 'Liderando desenvolvimento backend para projeto de integração Mastercard com cartões de crédito BANESE, focando em desenvolvimento de APIs seguras e integração de sistemas financeiros.',
    technologies: ['C#', '.NET', 'Redis']
  },
  {
    id: '2',
    position: 'Mid-Level Developer',
    company: 'Empresa Anterior',
    period: 'Mar/2024 - Jan/2025',
    description: 'Desenvolvi ambiente de automação centralizado usando modelo agente-servidor com Python e .NET, do conceito à implementação.',
    technologies: ['Python', 'C#', '.NET']
  },
  {
    id: '3',
    position: 'Junior Developer',
    company: 'Empresa',
    period: 'Sep/2023 - Feb/2024',
    description: 'Desenvolvi automações Python para processos bancários usando Selenium e PyAutoGUI, otimizando tarefas repetitivas e aumentando eficiência operacional.',
    technologies: ['Python', 'Selenium', 'PyAutoGUI']
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Sistema de Integração Financeira',
    description: 'Sistema robusto para integração com APIs de pagamento e processamento de transações financeiras. Desenvolvido com arquitetura de microsserviços, implementando padrões de segurança financeira e alta disponibilidade.',
    technologies: ['C#', '.NET Core', 'SQL Server', 'Redis', 'Docker'],
    github: 'https://github.com/gustavoalmeida',
    link: 'https://demo-financial-system.com'
  },
  {
    id: '2',
    title: 'Plataforma de Automação',
    description: 'Ambiente centralizado de automação com arquitetura agente-servidor para otimização de processos. Sistema distribuído que permite execução de tarefas automatizadas em múltiplos ambientes.',
    technologies: ['Python', '.NET', 'Docker', 'PostgreSQL', 'Kubernetes'],
    github: 'https://github.com/gustavoalmeida',
    link: 'https://automation-platform-demo.com'
  },
  {
    id: '3',
    title: 'API Gateway Microservices',
    description: 'Gateway de APIs desenvolvido para gerenciar comunicação entre microsserviços, implementando autenticação, rate limiting, logging e monitoramento em tempo real.',
    technologies: ['Go', 'Redis', 'Docker', 'Kubernetes', 'Prometheus'],
    github: 'https://github.com/gustavoalmeida'
  }
];

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Google Cloud Certification',
    issuer: 'Google',
    date: '2024',
    type: 'certification'
  },
  {
    id: '2',
    title: '.NET Certification',
    issuer: 'Microsoft',
    date: '2024',
    type: 'certification'
  },
  {
    id: '3',
    title: 'NASA Space Apps Winner',
    issuer: 'NASA',
    date: '2023 & 2024',
    type: 'award'
  }
];