import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Cpu, Zap, Wrench, DraftingCompass, Shield, Lightbulb, Settings, Bot, ExternalLink, Award } from "lucide-react"
import Link from "next/link"
import { skillsData } from "@/data/SkillsData"
import { getProjectsForSkill, getCertificationsForSkill } from "@/lib/data-utils"

const categoryIcons = {
  maquinas_eletricas: <Zap className="h-6 w-6" />,
  automacao_industrial: <Cpu className="h-6 w-6" />,
  sistemas_mecanicos: <Wrench className="h-6 w-6" />,
  projetos_desenho: <DraftingCompass className="h-6 w-6" />,
  seguranca_normas: <Shield className="h-6 w-6" />,
  competencias_comportamentais: <Lightbulb className="h-6 w-6" />
}

const categoryColors = {
  maquinas_eletricas: {
    border: "border-purple-200 hover:border-purple-300 dark:border-purple-800 dark:hover:border-purple-700",
    icon: "text-purple-600",
    badge: "bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300",
    gradient: "from-purple-600 to-blue-600"
  },
  automacao_industrial: {
    border: "border-blue-200 hover:border-blue-300 dark:border-blue-800 dark:hover:border-blue-700",
    icon: "text-blue-600",
    badge: "bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300",
    gradient: "from-blue-600 to-pink-600"
  },
  sistemas_mecanicos: {
    border: "border-pink-200 hover:border-pink-300 dark:border-pink-800 dark:hover:border-pink-700",
    icon: "text-pink-600",
    badge: "bg-pink-100 text-pink-800 hover:bg-pink-200 dark:bg-pink-900/30 dark:text-pink-300",
    gradient: "from-pink-600 to-purple-600"
  },
  projetos_desenho: {
    border: "border-indigo-200 hover:border-indigo-300 dark:border-indigo-800 dark:hover:border-indigo-700",
    icon: "text-indigo-600",
    badge: "bg-indigo-100 text-indigo-800 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300",
    gradient: "from-indigo-600 to-blue-600"
  },
  seguranca_normas: {
    border: "border-green-200 hover:border-green-300 dark:border-green-800 dark:hover:border-green-700",
    icon: "text-green-600",
    badge: "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300",
    gradient: "from-green-600 to-blue-600"
  },
  competencias_comportamentais: {
    border: "border-orange-200 hover:border-orange-300 dark:border-orange-800 dark:hover:border-orange-700",
    icon: "text-orange-600",
    badge: "bg-orange-100 text-orange-800 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300",
    gradient: "from-orange-600 to-pink-600"
  }
}

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
            Habilidades Técnicas
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Um panorama completo das minhas competências técnicas e experiência prática 
            nas diversas áreas da mecatrônica, eletroeletrônica e automação industrial.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-12 sm:space-y-16">
          {skillsData.map((category, categoryIndex) => {
            const colors = categoryColors[category.id as keyof typeof categoryColors]
            
            return (
              <section key={categoryIndex}>
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <div className={colors.icon}>
                    {categoryIcons[category.id as keyof typeof categoryIcons]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent leading-tight`}>
                      {category.title}
                    </h2>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
                  {category.skills.map((skill, skillIndex) => {
                    const relatedProjects = getProjectsForSkill(skill.id)
                    const relatedCertifications = getCertificationsForSkill(skill.id)
                    
                    return (
                      <Card 
                        key={skillIndex} 
                        className={`hover:shadow-lg transition-shadow ${colors.border}`}
                        id={skill.id}
                      >
                        <CardHeader className="pb-3 sm:pb-4">
                          <CardTitle className="flex items-center justify-between text-base sm:text-lg leading-tight">
                            <span className="flex-1 pr-2 line-clamp-2" title={skill.title}>
                              {skill.title}
                            </span>
                            <Badge 
                              variant="secondary" 
                              className={`text-xs shrink-0 ${colors.badge}`}
                            >
                              {category.title}
                            </Badge>
                          </CardTitle>
                          <CardDescription className="text-xs sm:text-sm leading-relaxed line-clamp-3">
                            {skill.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-3 sm:pt-4 space-y-3 sm:space-y-4">
                          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                            <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>Habilidade prática com experiência industrial</span>
                          </div>
                          
                          {/* Related Projects */}
                          {relatedProjects.length > 0 && (
                            <div className="space-y-2">
                              <div className="flex items-center gap-1 text-xs sm:text-sm font-medium text-indigo-600">
                                <ExternalLink className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                <span>Projetos Relacionados:</span>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {relatedProjects.slice(0, 2).map((project) => (
                                  <Badge 
                                    key={project.id} 
                                    variant="outline" 
                                    className="text-xs border-indigo-200 text-indigo-600 hover:border-indigo-300 dark:border-indigo-800 dark:text-indigo-300 dark:hover:border-indigo-700 transition-colors cursor-pointer"
                                    asChild
                                  >
                                    <Link href={`/projects#${project.id}`}>
                                      {project.name}
                                    </Link>
                                  </Badge>
                                ))}
                                {relatedProjects.length > 2 && (
                                  <Badge variant="outline" className="text-xs border-indigo-200 text-indigo-600 dark:border-indigo-800 dark:text-indigo-300">
                                    +{relatedProjects.length - 2}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          )}
                          
                          {/* Related Certifications */}
                          {relatedCertifications.length > 0 && (
                            <div className="space-y-2">
                              <div className="flex items-center gap-1 text-xs sm:text-sm font-medium text-green-600">
                                <Award className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                <span>Certificações Relacionadas:</span>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {relatedCertifications.slice(0, 2).map((certification) => (
                                  <Badge 
                                    key={certification.id} 
                                    variant="outline" 
                                    className="text-xs border-green-200 text-green-600 hover:border-green-300 dark:border-green-800 dark:text-green-300 dark:hover:border-green-700 transition-colors cursor-pointer"
                                    asChild
                                  >
                                    <Link href={`/certifications#${certification.id}`}>
                                      {certification.name}
                                    </Link>
                                  </Badge>
                                ))}
                                {relatedCertifications.length > 2 && (
                                  <Badge variant="outline" className="text-xs border-green-200 text-green-600 dark:border-green-800 dark:text-green-300">
                                    +{relatedCertifications.length - 2}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>

        {/* Skills Summary */}
        <section className="mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Resumo da Formação
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="border-purple-200 hover:border-purple-300 dark:border-purple-800 dark:hover:border-purple-700">
              <CardHeader className="text-center p-4 sm:p-6">
                <CardTitle className="text-2xl sm:text-3xl font-bold text-purple-600">6+</CardTitle>
                <CardDescription>Categorias de Habilidades</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-blue-200 hover:border-blue-300 dark:border-blue-800 dark:hover:border-blue-700">
              <CardHeader className="text-center p-4 sm:p-6">
                <CardTitle className="text-2xl sm:text-3xl font-bold text-blue-600">20+</CardTitle>
                <CardDescription>Competências Especializadas</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-pink-200 hover:border-pink-300 dark:border-pink-800 dark:hover:border-pink-700">
              <CardHeader className="text-center p-4 sm:p-6">
                <CardTitle className="text-2xl sm:text-3xl font-bold text-pink-600">100%</CardTitle>
                <CardDescription>Foco em Prática Industrial</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Key Areas */}
        <section className="mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
            Áreas de Atuação Principal
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <Card className="text-center hover:shadow-lg transition-shadow border-purple-200 hover:border-purple-300 dark:border-purple-800 dark:hover:border-purple-700">
              <CardContent className="p-4 sm:p-6">
                <Cpu className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-purple-600" />
                <h3 className="font-semibold text-purple-600">Automação</h3>
                <p className="text-sm text-muted-foreground">CLP, SCADA, IHM</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-blue-200 hover:border-blue-300 dark:border-blue-800 dark:hover:border-blue-700">
              <CardContent className="p-4 sm:p-6">
                <Zap className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-blue-600" />
                <h3 className="font-semibold text-blue-600">Eletroeletrônica</h3>
                <p className="text-sm text-muted-foreground">Motores, Painéis, Medições</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-pink-200 hover:border-pink-300 dark:border-pink-800 dark:hover:border-pink-700">
              <CardContent className="p-4 sm:p-6">
                <Bot className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-pink-600" />
                <h3 className="font-semibold text-pink-600">Robótica</h3>
                <p className="text-sm text-muted-foreground">Sensores, Atuadores, Controle</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-indigo-200 hover:border-indigo-300 dark:border-indigo-800 dark:hover:border-indigo-700">
              <CardContent className="p-4 sm:p-6">
                <Wrench className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-indigo-600" />
                <h3 className="font-semibold text-indigo-600">Manutenção</h3>
                <p className="text-sm text-muted-foreground">Industrial, Preventiva, Corretiva</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technical Tools */}
        <section className="mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
            Ferramentas e Tecnologias
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <Card className="border-purple-200 hover:border-purple-300 dark:border-purple-800 dark:hover:border-purple-700">
              <CardContent className="p-3 sm:p-4">
                <h3 className="font-semibold text-purple-600 mb-2">Software</h3>
                <div className="space-y-1">
                  <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 mr-1 mb-1">TIA Portal</Badge>
                  <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 mr-1 mb-1">AutoCAD</Badge>
                  <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 mr-1 mb-1">SolidWorks</Badge>
                  <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 mr-1 mb-1">FluidSIM</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="border-blue-200 hover:border-blue-300 dark:border-blue-800 dark:hover:border-blue-700">
              <CardContent className="p-3 sm:p-4">
                <h3 className="font-semibold text-blue-600 mb-2">Hardware</h3>
                <div className="space-y-1">
                  <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mr-1 mb-1">CLP Siemens</Badge>
                  <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mr-1 mb-1">Arduino</Badge>
                  <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mr-1 mb-1">Inversores</Badge>
                  <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mr-1 mb-1">Sensores</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="border-pink-200 hover:border-pink-300 dark:border-pink-800 dark:hover:border-pink-700">
              <CardContent className="p-3 sm:p-4">
                <h3 className="font-semibold text-pink-600 mb-2">Normas</h3>
                <div className="space-y-1">
                  <Badge variant="secondary" className="text-xs bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 mr-1 mb-1">NR-10</Badge>
                  <Badge variant="secondary" className="text-xs bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 mr-1 mb-1">NR-12</Badge>
                  <Badge variant="secondary" className="text-xs bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 mr-1 mb-1">ABNT</Badge>
                  <Badge variant="secondary" className="text-xs bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 mr-1 mb-1">Segurança</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}