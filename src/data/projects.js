// Projetos em ordem cronológica (do mais antigo ao mais recente).
// Para trocar a imagem de um projeto, coloque um .png/.gif em public/projects/ e atualize `image`.
export const projects = [
  {
    year: '2024',
    name: 'Desafio Acme — Agentes de IA',
    description: {
      pt: 'Desafio técnico para vaga de desenvolvedor: CRUD completo de agentes de IA, com API REST em FastAPI e front-end em React consumindo a API.',
      en: 'Technical challenge for a developer position: full CRUD of AI agents, with a FastAPI REST API and a React front-end consuming it.',
    },
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'React', 'Axios'],
    repo: 'https://github.com/renan3098/Desafio-Acme-',
    image: '/projects/acme.svg',
  },
  {
    year: '2026',
    name: 'Candidatos TSE',
    description: {
      pt: 'Aplicação web que consulta e exibe dados de candidatos a partir das bases públicas do Tribunal Superior Eleitoral.',
      en: 'Web application that queries and displays candidate data from the Brazilian Superior Electoral Court public datasets.',
    },
    tech: ['Java', 'Spring Boot', 'Thymeleaf', 'CSS'],
    repo: 'https://github.com/renan3098/diaw/tree/main/candidatos-tse',
    image: '/projects/tse.svg',
  },
  {
    year: '2026',
    name: 'Clima API',
    description: {
      pt: 'API de previsão do tempo construída com Spring Boot, integrando um serviço externo de meteorologia.',
      en: 'Weather forecast API built with Spring Boot, integrating an external weather service.',
    },
    tech: ['Java', 'Spring Boot', 'REST', 'Maven'],
    repo: 'https://github.com/renan3098/diaw/tree/main/climaapi',
    image: '/projects/clima.svg',
  },
  {
    year: '2026',
    name: 'Aurora Login',
    description: {
      pt: 'Sistema de autenticação com cadastro, login e recuperação de senha por e-mail, usando Spring Security e páginas em Thymeleaf.',
      en: 'Authentication system with sign-up, login and password recovery via e-mail, built with Spring Security and Thymeleaf pages.',
    },
    tech: ['Java', 'Spring Boot', 'Spring Security', 'Thymeleaf', 'JavaScript'],
    repo: 'https://github.com/renan3098/diaw/tree/main/aurora-login',
    image: '/projects/aurora.svg',
  },
  {
    year: '2026',
    name: 'Portfólio Profissional',
    description: {
      pt: 'Este site! Portfólio bilíngue e responsivo com animações, linha do tempo de projetos e formulário de contato com envio por e-mail.',
      en: 'This website! A bilingual, responsive portfolio with animations, a project timeline and a contact form that sends e-mails.',
    },
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Hook Form', 'EmailJS'],
    repo: 'https://github.com/renan3098/portfolio',
    image: '/projects/portfolio.svg',
  },
]
