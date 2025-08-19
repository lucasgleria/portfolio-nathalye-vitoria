"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Cpu, Zap, Wrench, Bot, Eye, Award, Link as LinkIcon } from "lucide-react"
import Link from "next/link"
import { projects } from "@/data/ProjectsData"
import { certifications } from "@/data/CertificationsData"
import { ProjectModal } from "@/components/project-modal"
import { getCertificationsForProject } from "@/lib/data-utils"

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Meus Projetos
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma coleção de projetos acadêmicos e pessoais desenvolvidos durante 
            minha formação em Mecatrônica e Eletricidade de Manutenção.
          </p>
        </div>

        {/* All Projects Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
            Todos os Projetos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const projectCertifications = getCertificationsForProject(project.id)
              
              return (
                <Card 
                  key={project.id} 
                  className="hover:shadow-lg transition-all duration-300 border-purple-200 hover:border-purple-300 dark:border-purple-800 dark:hover:border-purple-700 group cursor-pointer"
                  onClick={() => openProjectModal(project)}
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        Ver Detalhes
                      </div>
                    </div>
                    {projectCertifications.length > 0 && (
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-purple-600 text-white text-xs">
                          {projectCertifications.length} certificação{projectCertifications.length > 1 ? 'ões' : ''}
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-lg line-clamp-2">
                      {project.name}
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          asChild 
                          className="border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950/20"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a href={`https://github.com/nathalyevitoria/${project.id}`} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 text-purple-600" />
                          </a>
                        </Button>
                      </div>
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      {project.linkedCertifications.map((cert) => (
                        <Badge 
                          key={cert} 
                          variant="secondary" 
                          className="text-xs bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300"
                        >
                          {cert}
                        </Badge>
                      ))}
                      <Badge 
                        variant="outline" 
                        className="text-xs border-purple-200 text-purple-600 dark:border-purple-800 dark:text-purple-300"
                      >
                        {project.media.length} mídias
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Project Categories */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
            Áreas de Projetos
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Card className="text-center hover:shadow-lg transition-shadow border-purple-200 hover:border-purple-300 dark:border-purple-800 dark:hover:border-purple-700">
              <CardContent className="p-6">
                <Cpu className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <h3 className="font-semibold text-purple-600">Automação</h3>
                <p className="text-sm text-muted-foreground">CLP, SCADA, IHM</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-blue-200 hover:border-blue-300 dark:border-blue-800 dark:hover:border-blue-700">
              <CardContent className="p-6">
                <Bot className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold text-blue-600">Robótica</h3>
                <p className="text-sm text-muted-foreground">Arduino, Servos, Controle</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-pink-200 hover:border-pink-300 dark:border-pink-800 dark:hover:border-pink-700">
              <CardContent className="p-6">
                <Zap className="h-12 w-12 mx-auto mb-4 text-pink-600" />
                <h3 className="font-semibold text-pink-600">Eletroeletrônica</h3>
                <p className="text-sm text-muted-foreground">Circuitos, Sensores, Atuadores</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-indigo-200 hover:border-indigo-300 dark:border-indigo-800 dark:hover:border-indigo-700">
              <CardContent className="p-6">
                <Wrench className="h-12 w-12 mx-auto mb-4 text-indigo-600" />
                <h3 className="font-semibold text-indigo-600">Manutenção</h3>
                <p className="text-sm text-muted-foreground">Industrial, Preventiva, Corretiva</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
        onProjectClick={(project) => {
          setSelectedProject(project)
        }}
      />
    </div>
  )
}