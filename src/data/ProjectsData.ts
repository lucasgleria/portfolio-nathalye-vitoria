export const projects = [
  {
    id: "relogio",
    name: "Relógio Digital – Projeto de Eletrônica Digital (SENAI)",
    description:
      "Este relógio digital foi desenvolvido como parte da disciplina de Eletrônica Digital no curso de Aprendizagem Industrial de Eletricista de Manutenção Eletroeletrônica do SENAI. O projeto teve como objetivo aplicar os conhecimentos teóricos na prática, utilizando circuitos lógicos, displays de 7 segmentos e contadores digitais para mostrar as horas de forma precisa. Com uma montagem funcional e visual limpa, o relógio demonstra o domínio de conceitos como temporização, decodificação e controle de sinais, sendo um exemplo prático de automação e eletrônica aplicada.",
    image: "/projects/post1/relogio1.jpeg",
    media: [
      { type: "image", src: "/projects/post1/relogio4.jpeg" },
      { type: "image", src: "/projects/post1/relogio2.jpeg" },
      { type: "image", src: "/projects/post1/relogio3.jpeg" },
      { type: "video", src: "/projects/post1/relogiov.mp4" },
    ],
    period: "2024 - 2025",
    location: "SENAI - São Paulo",
    team: "Individual",
    technologies: ["Eletrônica Digital", "Circuitos Lógicos", "Displays 7 Segmentos", "Contadores Digitais"],
    github: "https://github.com/nathalye-vitoria/relogio-digital",
    live: "",
    documentation: "https://github.com/nathalye-vitoria/relogio-digital/blob/main/README.md",
    achievements: [
      "Aplicação bem-sucedida de conceitos de eletrônica digital",
      "Montagem funcional com precisão de temporização",
      "Demonstração prática de automação e controle de sinais"
    ],
    linkedCertifications: ["eletronica_basica"],
    linkedSkills: [
      "manutencao_motores",
      "medicoes",
      "documentacao_tecnica"
    ]
  },
  {
    id: "painel",
    name: "Painel de Comando com Partida Direta – Projeto em Máquinas Elétricas II (SENAI)",
    description: `Desenvolvido na disciplina de Máquinas Elétricas II (SENAI), este painel comanda a partida direta de um motor trifásico 220V, ligado em configuração triângulo. O sistema utiliza contatores, disjuntores, relés térmicos e fonte de alimentação, seguindo todas as normas de segurança elétrica.
    O projeto reforçou conceitos de comandos elétricos, integração eletromecânica e práticas de montagem profissional de painéis.
    - Motor trifásico 220V (ligação em triângulo/delta)
    - Partida direta
    - Montagem em placa metálica com canaletas
    - Fiação com identificadores e terminais
    - Aplicação prática de normas NR10 e NR12
    - Dispositivos de proteção 
    - Testes de isolação com megômetro`,
    image: "/projects/post2/painel.jpeg",
    media: [
      { type: "image", src: "/projects/post2/painel.jpeg" },
      { type: "image", src: "/projects/post2/painel1.jpeg" },
      { type: "image", src: "/projects/post2/painel2.jpeg" },
      { type: "image", src: "/projects/post2/painel3.jpeg" },
      { type: "image", src: "/projects/post2/painel4.jpeg" },
      { type: "video", src: "/projects/post2/painelv.mp4" },
    ],
    period: "2025",
    location: "SENAI - São Paulo",
    team: "Equipe de 2 pessoas",
    technologies: ["Comandos Elétricos", "Contatores", "Relés Térmicos", "Normas NR10/NR12", "Motor Trifásico"],
    github: "https://github.com/nathalye-vitoria/painel-comando",
    live: "",
    documentation: "https://github.com/nathalye-vitoria/painel-comando/blob/main/README.md",
    achievements: [
      "Montagem profissional seguindo normas de segurança",
      "Integração bem-sucedida de componentes eletromecânicos",
      "Aplicação prática de NR10 e NR12"
    ],
    linkedCertifications: ["mecatronica"],
    linkedSkills: [
      "manutencao_motores",
      "montagem_paineis",
      "medicoes",
      "nr_10_12",
      "boas_praticas"
    ]
  },
  {
    id: "fonte",
    name: "Fonte de Alimentação Linear 5V – Projeto de Bancada",
    description: `Esta fonte linear foi desenvolvida para fornecer uma tensão de +5V DC estabilizada, adequada para alimentar circuitos digitais, microcontroladores e demais dispositivos que operam em baixa tensão.
    O circuito utiliza um transformador 12V-0-12V / 1A, seguido por um estágio de retificação em ponte, filtragem com capacitor eletrolítico e regulação de tensão através do regulador linear 7805, garantindo uma saída estável e protegida contra sobrecargas térmicas e de corrente. O layout da placa inclui dissipadores de calor para os reguladores, bornes de fácil conexão e LED indicador de funcionamento.
    Características técnicas:
    Tensão de entrada: 12V AC (via transformador)
    Tensão de saída: +5V DC
    Corrente máxima: até 1A
    Regulação com CI 7805
    Filtragem com capacitor de 2200 µF
    Proteção térmica e contra curto-circuito
    Indicador visual de operação (LED)`,
    image: "/projects/post3/fonte1.jpeg",
    media: [
      { type: "image", src: "/projects/post3/fonte.jpeg" },
      { type: "image", src: "/projects/post3/fonte1.jpeg" },
      { type: "image", src: "/projects/post3/fonte2.jpeg" },
      
    ],
    period: "2025",
    location: "Laboratório de Eletrônica",
    team: "Individual",
    technologies: ["Eletrônica Analógica", "Reguladores de Tensão", "Retificação", "Filtragem", "CI 7805"],
    github: "https://github.com/nathalye-vitoria/fonte-linear-5v",
    live: "",
    documentation: "https://github.com/nathalye-vitoria/fonte-linear-5v/blob/main/README.md",
    achievements: [
      "Projeto funcional com saída estável de 5V",
      "Implementação de proteções térmicas e contra curto-circuito",
      "Layout profissional com bornes de conexão"
    ],
    linkedCertifications: ["developer"],
    linkedSkills: [
      "manutencao_motores",
      "medicoes",
      "documentacao_tecnica"
    ]
  },
  {
    id: "batman",
    name: "BATMAN Usinado Em Uma Frezadora CNC - MILLING MACHiNE",
    description: `Este projeto consiste na usinagem do logo do Batman em uma placa de alumínio utilizando uma fresadora CNC. O processo envolveu a programação das coordenadas, seleção das ferramentas adequadas, definição dos parâmetros de corte e execução da usinagem com precisão milimétrica.
    O resultado final demonstra o domínio de técnicas de programação CNC, operação de máquinas-ferramenta computadorizadas e capacidade de transformar designs digitais em produtos físicos com alta qualidade de acabamento.`,
    image: "/projects/post4/project-sample.jpg",
    media: [
      { type: "image", src: "/projects/post4/project-sample.jpg" },
      { type: "image", src: "/projects/post4/project-sample.jpg" },
      { type: "image", src: "/projects/post4/project-sample.jpg" },
      { type: "video", src: "/projects/post4/bat-vd.mp4" },
    ],
    period: "2025",
    location: "Oficina de Usinagem CNC",
    team: "Individual",
    technologies: ["Programação CNC", "Fresadora CNC", "Usinagem de Alumínio", "CAD/CAM", "Controle Numérico"],
    github: "https://github.com/nathalye-vitoria/batman-cnc",
    live: "",
    documentation: "https://github.com/nathalye-vitoria/batman-cnc/blob/main/README.md",
    achievements: [
      "Usinagem com precisão milimétrica",
      "Domínio de técnicas de programação CNC",
      "Alta qualidade de acabamento superficial"
    ],
    linkedCertifications: ["developer"],
    linkedSkills: [
      "cnc",
      "torno_fresadora",
      "desenho_cad",
      "documentacao_tecnica",
      "raciocinio_logico"
    ]
  }
]