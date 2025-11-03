export const certifications = [
  {
    id: "eletronica_basica",
    name: "Eletrônica Básica – SENAI",
    description:
      `Certificação obtida após conclusão do curso de Eletrônica Básica no SENAI, abordando fundamentos de circuitos, componentes e montagem prática. O curso proporcionou uma base sólida em eletrônica analógica e digital, com ênfase em aplicações práticas e segurança.`,
    image: "/certifications/post1/certificate-sample.jpg",
    media: [ // remover
      { type: "image", src: "/certifications/post1/certificate-sample.jpg" },
      { type: "image", src: "/certifications/post1/certificate-sample.jpg" }
    ],
    issuer: "SENAI",
    date: "2022",
    credentialUrl: "https://example.com/certificate/eletronica-basica",
    duration: "6 meses",
    location: "SENAI - São Paulo",
    level: "Básico",
    skills: [
      "manutencao_motores",
      "medicoes",
      "documentacao_tecnica",
      "nr_10_12"
    ],
    topics: [
      "Teoria dos semicondutores e diodos",
      "Transistores bipolares e MOSFET",
      "Circuitos amplificadores e osciladores",
      "Fontes de alimentação lineares e reguladas",
      "Circuitos lógicos combinacionais e sequenciais",
      "Famílias lógicas TTL e CMOS",
      "Multímetros e osciloscópios",
      "Técnicas de soldagem e dessoldagem",
      "Interpretação de diagramas elétricos",
      "Normas de segurança NR10"
    ],
    requirements: [
      "Ensino médio completo",
      "Conhecimentos básicos de matemática",
      "Idade mínima de 16 anos"
    ],
    outcomes: [
      "Capacidade de montar e analisar circuitos eletrônicos básicos",
      "Habilidade na utilização de instrumentos de medição",
      "Compreensão dos princípios de funcionamento de componentes",
      "Aplicação de normas de segurança em trabalhos elétricos"
    ],
    linkedProjects: ["relogio"]
  },
  {
    id: "mecatronica",
    name: "Privacidade e Proteção de Dados",
    description:
      `Certificação obtida após conclusão do curso rápido de Proteção de Dados, abordando fundamentos de segurança, dados e legislações sobre proteção de dados, com a lei LGPD. O curso focou na aplicação prática da LGPD em ambientes corporativos e na proteção de informações sensíveis.`,
    image: "/certifications/post2/certificate-sample.jpg",
    media: [
      { type: "image", src: "/certifications/post2/certificate-sample.jpg" },
      { type: "image", src: "/certifications/post2/certificate-sample.jpg" }
    ],
    issuer: "SENAI",
    date: "2025",
    credentialUrl: "https://example.com/certificate/protecao-dados",
    duration: "40 horas",
    location: "Online",
    level: "Intermediário",
    skills: [
      "documentacao_tecnica",
      "organizacao",
      "raciocinio_logico"
    ],
    topics: [
      "Fundamentos da Lei Geral de Proteção de Dados (LGPD)",
      "Conceitos de dados pessoais e sensíveis",
      "Direitos dos titulares de dados",
      "Obrigações dos controladores e operadores",
      "Planos de governança em privacidade",
      "Relatórios de impacto à proteção de dados",
      "Incidentes de segurança e notificação",
      "Transferência internacional de dados",
      "Boas práticas em segurança da informação",
      "Aspectos legais e penalidades"
    ],
    requirements: [
      "Ensino superior em andamento ou completo",
      "Conhecimentos básicos de TI",
      "Experiência em ambiente corporativo"
    ],
    outcomes: [
      "Capacidade de implementar programas de compliance com LGPD",
      "Habilidade na elaboração de documentos de privacidade",
      "Compreensão dos riscos associados ao tratamento de dados",
      "Capacidade de responder a incidentes de segurança"
    ],
    linkedProjects: ["painel"]
  },
  {
    id: "developer",
    name: "Desenvolvedora Full Stack - Lucas Leria Institution",
    description:
      `Certificação obtida após conclusão do curso intensivo de Desenvolvimento Full Stack, abordando fundamentos de programação para web, desenvolvimento frontend e backend, bancos de dados e todas as suas dificuldades. O curso proporcionou experiência prática em projetos reais e metodologias ágeis.`,
    image: "/certifications/post3/certificate-sample.jpg",
    media: [
      { type: "image", src: "/certifications/post3/certificate-sample.jpg" },
      { type: "image", src: "/certifications/post3/certificate-sample.jpg" }
    ],
    issuer: "Lucas Leria Institution",
    date: "2025",
    credentialUrl: "https://example.com/certificate/desenvolvedora",
    duration: "12 meses",
    location: "Híbrido (Online e Presencial)",
    level: "Avançado",
    skills: [
      "raciocinio_logico",
      "organizacao",
      "adaptabilidade",
      "documentacao_tecnica"
    ],
    topics: [
      "Fundamentos de programação e algoritmos",
      "Desenvolvimento frontend com React e TypeScript",
      "Estado global e gerenciamento de aplicações",
      "API RESTful e desenvolvimento backend com Node.js",
      "Bancos de dados relacionais (PostgreSQL, MySQL)",
      "Bancos de dados NoSQL (MongoDB, Redis)",
      "Autenticação e autorização (JWT, OAuth)",
      "Testes automatizados e TDD",
      "CI/CD e DevOps",
      "Deploy em nuvem (AWS, Vercel)",
      "Metodologias ágeis (Scrum, Kanban)",
      "Versionamento de código com Git",
      "Containerização com Docker",
      "Segurança em aplicações web"
    ],
    requirements: [
      "Lógica de programação",
      "Conhecimentos básicos de web",
      "Inglês técnico",
      "Dedicação integral (40 horas/semana)"
    ],
    outcomes: [
      "Capacidade de desenvolver aplicações web completas",
      "Habilidade na criação de APIs RESTful robustas",
      "Experiência em bancos de dados relacionais e NoSQL",
      "Domínio de ferramentas de deploy e DevOps",
      "Capacidade de trabalhar em equipes ágeis"
    ],
    linkedProjects: ["fonte", "batman"]
  }
]