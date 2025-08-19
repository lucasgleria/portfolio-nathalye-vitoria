"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Cpu, Zap, Wrench, GraduationCap, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useRef, useState } from "react"

export default function Home() {
  const skillsData = [
    {
      title: "Mecatrônica",
      description: "Integração de mecânica, eletrônica e controle para sistemas inteligentes e robótica industrial.",
      icon: <Cpu className="h-8 w-8 text-purple-600" />,
      color: "purple",
      image: "/mechatronics.jpg",
      size: "wide" // 2x1
    },
    {
      title: "Eletricidade",
      description: "Instalação e manutenção de sistemas elétricos industriais e residenciais com segurança.",
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      color: "blue",
      image: "/electricity.jpg",
      size: "small" // 1x1
    },
    {
      title: "Automação",
      description: "Desenvolvimento de sistemas automatizados para controle de processos industriais e manufatura.",
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      color: "purple",
      image: "/automation.jpg",
      size: "tall" // 1x2
    },
    {
      title: "CLP",
      description: "Programação e configuração de Controladores Lógicos Programáveis para automação industrial.",
      icon: <Cpu className="h-8 w-8 text-purple-600" />,
      color: "purple",
      image: "/plc.jpg",
      size: "small" // 1x1
    },
    {
      title: "Arduino",
      description: "Desenvolvimento de projetos eletrônicos e protótipos com plataforma Arduino e IoT.",
      icon: <Cpu className="h-8 w-8 text-blue-600" />,
      color: "blue",
      image: "/arduino.jpg",
      size: "large" // 2x2
    },
    {
      title: "Robótica",
      description: "Projeto e programação de robôs para automação e aplicações inteligentes.",
      icon: <Cpu className="h-8 w-8 text-pink-600" />,
      color: "pink",
      image: "/robotics.jpg",
      size: "tall" // 1x2
    },
    {
      title: "Teste",
      description: "Instalação e manutenção de sistemas elétricos industriais e residenciais com segurança.",
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      color: "blue",
      image: "/electricity.jpg",
      size: "small" // 1x1
    },
    {
      title: "Manutenção Eletroeletrônica",
      description: "Diagnóstico e reparo de sistemas eletrônicos e equipamentos industriais.",
      icon: <Wrench className="h-8 w-8 text-blue-600" />,
      color: "blue",
      image: "/maintenance.jpg",
      size: "wide" // 2x1
    },
    {
      title: "SolidWorks",
      description: "Modelagem 3D e projeto mecânico para simulação e manufatura de componentes.",
      icon: <Wrench className="h-8 w-8 text-blue-600" />,
      color: "blue",
      image: "/solidworks.jpg",
      size: "small" // 1x1
    }
  ]

  const educationData = [
    {
      id: 1,
      year: "2021",
      institution: "Escola Técnica Estadual",
      course: "Curso Técnico em Eletrônica",
      description: "Fundamentos de eletrônica digital e analógica, circuitos e componentes eletrônicos.",
      icon: <GraduationCap className="h-5 w-5 text-blue-600" />,
      color: "blue"
    },
    {
      id: 2,
      year: "2022",
      institution: "IFSP - Campus Guarulhos",
      course: "Técnico em Mecatrônica",
      description: "Curso técnico focado em automação industrial, robótica, sistemas de controle e integração de tecnologias.",
      icon: <Cpu className="h-5 w-5 text-purple-600" />,
      color: "purple"
    },
    {
      id: 3,
      year: "2023",
      institution: "Senai Hermenegildo Campos de Almeida",
      course: "CAI - Eletricista de Manutenção Eletroeletrônica",
      description: "Curso de qualificação adicional em manutenção eletroeletrônica, com foco em instalações industriais e sistemas de controle.",
      icon: <Zap className="h-5 w-5 text-blue-600" />,
      color: "blue"
    },
    {
      id: 4,
      year: "2026",
      institution: "Universidade Federal",
      course: "Engenharia de Controle e Automação",
      description: "Graduação superior em engenharia com foco em sistemas de controle, automação e robótica.",
      icon: <GraduationCap className="h-5 w-5 text-purple-600" />,
      color: "purple"
    },
    {
      id: 5,
      year: "2027",
      institution: "Instituto Tecnológico",
      course: "Mestrado em Robótica e Inteligência Artificial",
      description: "Pós-graduação em robótica avançada, visão computacional e sistemas inteligentes.",
      icon: <GraduationCap className="h-5 w-5 text-pink-600" />,
      color: "pink"
    },
    {
      id: 6,
      year: "2028",
      institution: "Academia Internacional",
      course: "Doutorado em Engenharia Mecatrônica",
      description: "Programa de doutorado com pesquisa em integração de sistemas mecatrônicos e indústria 4.0.",
      icon: <GraduationCap className="h-5 w-5 text-pink-600" />,
      color: "pink"
    },
    {
      id: 7,
      year: "2029",
      institution: "Centro de Pesquisa Avançada",
      course: "Pós-Doutorado em Automação Industrial",
      description: "Pesquisa avançada em automação industrial, integração de sistemas e indústria 4.0.",
      icon: <Cpu className="h-5 w-5 text-pink-600" />,
      color: "pink"
    }
  ]

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const scrollTimeline = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400 // Width of one card + gap
      const currentScroll = scrollContainerRef.current.scrollLeft
      const newScroll = direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount
      
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      })
    }
  }

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10) // 10px buffer
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-pink-950/20 rounded-3xl mb-16 overflow-hidden relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-blue-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-pink-200/30 rounded-full blur-xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-40 right-1/4 w-16 h-16 bg-purple-300/30 rounded-full blur-xl animate-pulse delay-1500"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2">
              <Cpu className="h-8 w-8 text-purple-600 animate-pulse" />
              <Zap className="h-8 w-8 text-blue-600 animate-pulse delay-300" />
              <Wrench className="h-8 w-8 text-pink-600 animate-pulse delay-700" />
            </div>
          </div>

          {/* Profile Image with Beautiful Effects */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-pulse opacity-20"></div>
              <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-white/50 dark:border-gray-800/50 shadow-2xl">
                <Image
                  src="/nathalye-vitoria.jpg"
                  alt="Nathalye Vitoria"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Olá, sou <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">Nathalye Vitoria</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground">
            Estudante de Mecatrônica e Eletricista de Manutenção
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Estudante do curso Técnico em Mecatrônica pelo IFSP - campus Guarulhos e 
            realizando o CAI de Eletricista de Manutenção Eletroeletrônica no Senai Hermenegildo Campos de Almeida.
            Apaixonada por automação, robótica e manutenção industrial.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Link href="/projects">
                Meus Projetos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Link href="/skills">Minhas Habilidades</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Formação</h2>
        
        {/* Timeline */}
        <div className="relative">
          {/* Scrollable timeline container */}
          <div className="relative">
            {/* Left blur effect */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none"></div>
            
            {/* Right blur effect */}
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none"></div>
            
            {/* Scrollable area */}
            <div 
              ref={scrollContainerRef}
              className="w-full pb-4 overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              onScroll={checkScrollPosition}
            >
              <div className="relative" style={{ width: `${educationData.length * 400}px` }}>
                {/* Timeline line */}
                <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-purple-200 via-blue-200 to-pink-200 dark:from-purple-800 dark:via-blue-800 dark:to-pink-800 rounded-full"></div>
                
                {/* Year markers positioned above cards */}
                <div className="relative mb-8">
                  <div className="flex justify-between px-40"> {/* Centered with card width consideration */}
                    {educationData.map((edu) => (
                      <div key={edu.id} className="flex flex-col items-center relative z-10">
                        <div className="w-4 h-4 bg-white dark:bg-gray-900 border-4 border-purple-400 rounded-full shadow-lg"></div>
                        <div className="mt-2 text-sm font-semibold text-purple-600 dark:text-purple-400 bg-white/80 dark:bg-gray-900/80 px-2 py-1 rounded">
                          {edu.year}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Education cards */}
                <div className="flex gap-6 px-4">
                  {educationData.map((edu) => {
                    const colorClasses = {
                      purple: "border-purple-200 hover:border-purple-300 dark:border-purple-800 dark:hover:border-purple-700",
                      blue: "border-blue-200 hover:border-blue-300 dark:border-blue-800 dark:hover:border-blue-700",
                      pink: "border-pink-200 hover:border-pink-300 dark:border-pink-800 dark:hover:border-pink-700"
                    }
                    
                    return (
                      <Card 
                        key={edu.id} 
                        className={`w-80 flex-shrink-0 hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${colorClasses[edu.color]}`}
                      >
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            {edu.icon}
                            {edu.institution}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {edu.year}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <h3 className="font-semibold mb-2 text-lg">{edu.course}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {edu.description}
                          </p>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => scrollTimeline('left')}
              disabled={!canScrollLeft}
              className="flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-4 w-4" />
              Anterior
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => scrollTimeline('right')}
              disabled={!canScrollRight}
              className="flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Próximo
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <div className="text-center mt-4">
            <p className="text-sm text-muted-foreground">
              ← Use os botões para navegar pela linha do tempo →
            </p>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">Áreas de Atuação</h2>
        
        {/* Enhanced Bento Grid - Microcontroller Puzzle */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto auto-rows-[200px] relative">
          {skillsData.map((skill, index) => {
            const colorClasses = {
              purple: "bg-transparent hover:bg-transparent dark:bg-purple-950/20 hover:dark:bg-transparent border-purple-200 hover:border-purple-300 dark:border-purple-800 dark:hover:border-purple-700",
              blue: "bg-transparent hover:bg-transparent dark:bg-blue-950/20 hover:dark:bg-transparent border-blue-200 hover:border-blue-300 dark:border-blue-800 dark:hover:border-blue-700",
              pink: "bg-transparent hover:bg-transparent dark:bg-pink-950/20 hover:dark:bg-transparent border-pink-200 hover:border-pink-300 dark:border-pink-800 dark:hover:border-pink-700"
            }
            
            const sizeClasses = {
              small: "md:col-span-1 md:row-span-1", // 1x1
              wide: "md:col-span-2 md:row-span-1", // 2x1
              tall: "md:col-span-1 md:row-span-2", // 1x2
              large: "md:col-span-2 md:row-span-2" // 2x2
            }
            
            // Calculate actual puzzle piece positions and sizes based on grid layout
            const getPuzzlePiece = (index: number) => {
              // Define the grid layout (4 columns x 3 rows for our 9 pieces)
              const gridLayout = [
                { col: 0, row: 0, width: 2, height: 1 }, // Mecatrônica (2x1)
                { col: 2, row: 0, width: 1, height: 1 }, // Eletricidade (1x1)
                { col: 3, row: 0, width: 1, height: 2 }, // Automação (1x2)
                { col: 2, row: 1, width: 1, height: 1 }, // CLP (1x1)
                { col: 0, row: 1, width: 2, height: 2 }, // Arduino (2x2)
                { col: 3, row: 2, width: 1, height: 1 }, // Robótica (1x1)
                { col: 2, row: 2, width: 1, height: 1 }, // Teste (1x1)
                { col: 0, row: 3, width: 2, height: 1 }, // Manutenção (2x1)
                { col: 3, row: 3, width: 1, height: 1 }, // SolidWorks (1x1)
              ];
              
              const piece = gridLayout[index];
              const totalCols = 4;
              const totalRows = 4;
              
              return {
                x: (piece.col / totalCols) * 100,
                y: (piece.row / totalRows) * 100,
                width: (piece.width / totalCols) * 100,
                height: (piece.height / totalRows) * 100
              };
            }
            
            const puzzlePiece = getPuzzlePiece(index);
            const isActive = activeCard === index;
            
            return (
              <Card 
                key={skill.title} 
                className={`${colorClasses[skill.color]} ${sizeClasses[skill.size]} border-2 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-lg cursor-pointer group overflow-hidden relative ${isActive ? 'z-50' : 'z-10'}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveCard(isActive ? null : index);
                }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <CardContent className="p-0 h-full flex flex-col">
                  {/* Initial State - Just Title */}
                  <div className={`flex-grow flex items-center justify-center p-6 transition-all duration-500 ${isActive ? 'opacity-0 blur-sm' : 'opacity-100'}`}>
                    <div className="text-center">
                      {/* Icon Badge at Top Right */}
                      <div className="absolute top-3 right-3 z-10">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                          {skill.icon}
                        </div>
                      </div>
                      
                      <h3 className={`text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors ${
                        skill.size === 'large' ? 'text-3xl' : 
                        skill.size === 'wide' || skill.size === 'tall' ? 'text-2xl' : 
                        'text-xl'
                      }`}>
                        {skill.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Active/Hover State - Puzzle Piece Reveal */}
                  <div className={`absolute inset-0 transition-all duration-500 flex flex-col ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    {/* Puzzle Piece Background */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url('/microcontroller.jpg')`,
                          backgroundPosition: `-${puzzlePiece.x}% -${puzzlePiece.y}%`,
                          backgroundSize: '400% 400%' // 4 columns x 4 rows
                        }}
                      />
                      {/* Overlay gradient for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/60 z-10"></div>
                      
                      {/* Puzzle piece border effect */}
                      <div className="absolute inset-0 border-2 border-white/30 rounded-lg pointer-events-none"></div>
                    </div>
                    
                    {/* Content Overlay */}
                    <div className="relative z-20 flex-grow p-4 flex flex-col justify-center bg-black/80 dark:bg-black/90 backdrop-blur-sm">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="flex-shrink-0">
                          {skill.icon}
                        </div>
                        <h3 className={`font-semibold text-white ${
                          skill.size === 'large' ? 'text-xl' : 
                          skill.size === 'wide' || skill.size === 'tall' ? 'text-lg' : 
                          'text-base'
                        }`}>
                          {skill.title}
                        </h3>
                      </div>
                      <p className={`text-gray-200 leading-relaxed ${
                        skill.size === 'large' ? 'text-base' : 
                        skill.size === 'wide' || skill.size === 'tall' ? 'text-sm' : 
                        'text-xs'
                      }`}>
                        {skill.description}
                      </p>
                      <div className="mt-4 flex justify-end">
                        <div className={`bg-gradient-to-r from-purple-400 to-blue-400 rounded-full ${
                          skill.size === 'large' ? 'w-12 h-1.5' : 
                          skill.size === 'wide' || skill.size === 'tall' ? 'w-10 h-1' : 
                          'w-8 h-0.5'
                        }`}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">Explore</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-blue-200 hover:border-blue-300 dark:border-blue-800 dark:hover:border-blue-700">
            <CardHeader>
              <CardTitle className="text-blue-600">Projetos</CardTitle>
              <CardDescription>Projetos acadêmicos e pessoais</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link href="/projects">Ver Projetos</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-blue-200 hover:border-blue-300 dark:border-blue-800 dark:hover:border-blue-700">
            <CardHeader>
              <CardTitle className="text-blue-600">Habilidades</CardTitle>
              <CardDescription>Competências técnicas</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link href="/skills">Ver Habilidades</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-blue-200 hover:border-blue-300 dark:border-blue-800 dark:hover:border-blue-700">
            <CardHeader>
              <CardTitle className="text-blue-600">Certificações</CardTitle>
              <CardDescription>Cursos e certificados</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link href="/certifications">Ver Certificações</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-blue-200 hover:border-blue-300 dark:border-blue-800 dark:hover:border-blue-700">
            <CardHeader>
              <CardTitle className="text-blue-600">Contato</CardTitle>
              <CardDescription>Entre em contato</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Contato</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}