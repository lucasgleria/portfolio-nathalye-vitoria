"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Cpu, Zap, Wrench, GraduationCap, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"

export default function Home() {
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
      color: "pink"
    },
  ]

  const FIXED_CARD_WIDTH = 420 // largura fixa para todos os cards (px)
  const CARD_GAP = 24 // gap entre cards em px (gap-6 => 1.5rem => 24px)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeCard, setActiveCard] = useState<number | null>(null)

  // layout responsivo para calcular padding e largura total da linha
  const [layout, setLayout] = useState({ cardWidth: FIXED_CARD_WIDTH, padding: 16 })
  useEffect(() => {
    const handleResize = () => {
      const padding = window.innerWidth >= 1024 ? 48 : window.innerWidth >= 768 ? 32 : 16 // lg:px-12 md:px-8 px-4
      setLayout({ cardWidth: FIXED_CARD_WIDTH, padding })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const scrollTimeline = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = layout.cardWidth + CARD_GAP // usa largura fixa + gap
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

  // calcula largura total da linha com base no número de itens
  const totalLineWidth = educationData.length * layout.cardWidth + Math.max(0, educationData.length - 1) * CARD_GAP

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
            <div className="relative">
              <div 
                ref={scrollContainerRef}
                className="w-full pb-4 overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                onScroll={checkScrollPosition}
              >
                <div className="relative flex flex-nowrap gap-6 px-4 md:px-8 lg:px-12">
                  {/* Timeline line: posiciona e define largura baseada no nº de cards */}
                  <div
                    className="absolute top-8 h-1 bg-gradient-to-r from-purple-200 via-blue-200 to-pink-200 dark:from-purple-800 dark:via-blue-800 dark:to-pink-800 rounded-full"
                    style={{ left: `${layout.padding}px`, width: `${totalLineWidth}px` }}
                  ></div>
                  {educationData.map((edu) => (
                    <div key={edu.id} className="relative flex-none w-[420px] min-w-[420px] max-w-[420px]">
                      {/* Year marker */}
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                        <div className="w-4 h-4 bg-white dark:bg-gray-900 border-4 border-purple-400 rounded-full shadow-lg"></div>
                        <div className="mt-2 text-sm font-semibold text-purple-600 dark:text-purple-400 bg-white/80 dark:bg-gray-900/80 px-2 py-1 rounded">
                          {edu.year}
                        </div>
                      </div>
                      
                      {/* Education card */}
                      <Card className={`mt-16 w-full h-[300px] min-h-[300px] flex flex-col justify-between overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
                        edu.color === 'purple' ? 'border-purple-200 hover:border-purple-300 dark:border-purple-800' :
                        edu.color === 'blue' ? 'border-blue-200 hover:border-blue-300 dark:border-blue-800' :
                        'border-pink-200 hover:border-pink-300 dark:border-pink-800'
                      }`}>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-base md:text-lg lg:text-xl">
                            {edu.icon}
                            {edu.institution}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {edu.year}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                          <h3 className="font-semibold mb-2 text-base md:text-lg">{edu.course}</h3>
                          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                            {edu.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
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
    </div>
  )
}