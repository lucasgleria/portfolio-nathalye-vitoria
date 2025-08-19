"use client"

import { useState } from "react"
import { ExternalLink, Github, Calendar, MapPin, Users, Award, Link as LinkIcon, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel } from "@/components/ui/carousel"
import { Modal } from "@/components/ui/modal"
import { getRelatedProjects, getCertificationsForProject, getSkillsForProject } from "@/lib/data-utils"
import Link from "next/link"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: any
  onProjectClick?: (project: any) => void
}

export function ProjectModal({ isOpen, onClose, project, onProjectClick }: ProjectModalProps) {
  if (!project) return null

  const handleProjectClick = (clickedProject: any) => {
    if (onProjectClick) {
      onProjectClick(clickedProject)
    }
  }

  // Safety check for project data
  const safeProject = {
    ...project,
    media: project.media || [],
    period: project.period || "",
    location: project.location || "",
    team: project.team || "",
    technologies: project.technologies || [],
    github: project.github || "",
    live: project.live || "",
    documentation: project.documentation || "",
    achievements: project.achievements || [],
    description: project.description || "",
    id: project.id || ""
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={safeProject.name}
      className="max-w-6xl"
    >
      <div className="space-y-8">
        {/* Media Carousel */}
        {safeProject.media && safeProject.media.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-600">Mídia do Projeto</h3>
            <Carousel
              media={safeProject.media}
            />
          </div>
        )}

        {/* Project Information Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Basic Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-600">Informações do Projeto</h3>
            
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-purple-600" />
                <span className="font-medium">Período:</span>
                <span className="text-muted-foreground">{safeProject.period || "Não informado"}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-purple-600" />
                <span className="font-medium">Local:</span>
                <span className="text-muted-foreground">{safeProject.location || "Não informado"}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-purple-600" />
                <span className="font-medium">Equipe:</span>
                <span className="text-muted-foreground">{safeProject.team || "Não informado"}</span>
              </div>
              
              <div className="space-y-2">
                <span className="font-medium text-sm">Tecnologias:</span>
                {safeProject.technologies && safeProject.technologies.length > 0 ? (
                  <div className="flex flex-wrap gap-1">
                    {safeProject.technologies.map((tech: string, index: number) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <span className="text-muted-foreground text-sm">Não informado</span>
                )}
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-600">Links do Projeto</h3>
            <div className="space-y-3">
              {safeProject.github ? (
                <Button variant="outline" asChild className="w-full justify-start border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950/20">
                  <a href={safeProject.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Repositório GitHub
                  </a>
                </Button>
              ) : (
                <div className="text-sm text-muted-foreground p-3 border border-dashed border-purple-200 dark:border-purple-800 rounded-lg">
                  <Github className="h-4 w-4 mr-2 inline" />
                  Repositório GitHub não disponível
                </div>
              )}
              
              {safeProject.live ? (
                <Button variant="outline" asChild className="w-full justify-start border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950/20">
                  <a href={safeProject.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver Projeto Online
                  </a>
                </Button>
              ) : (
                <div className="text-sm text-muted-foreground p-3 border border-dashed border-purple-200 dark:border-purple-800 rounded-lg">
                  <ExternalLink className="h-4 w-4 mr-2 inline" />
                  Projeto online não disponível
                </div>
              )}
              
              {safeProject.documentation ? (
                <Button variant="outline" asChild className="w-full justify-start border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950/20">
                  <a href={safeProject.documentation} target="_blank" rel="noopener noreferrer">
                    <LinkIcon className="h-4 w-4 mr-2" />
                    Documentação
                  </a>
                </Button>
              ) : (
                <div className="text-sm text-muted-foreground p-3 border border-dashed border-purple-200 dark:border-purple-800 rounded-lg">
                  <LinkIcon className="h-4 w-4 mr-2 inline" />
                  Documentação não disponível
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-purple-600">Descrição do Projeto</h3>
          <div className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-4">
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {safeProject.description}
            </p>
          </div>
        </div>

        {/* Achievements */}
        {safeProject.achievements && safeProject.achievements.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-3 text-purple-600">Conquistas e Resultados</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {safeProject.achievements.map((achievement: string, index: number) => (
                <div key={index} className="flex items-start gap-2 p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                  <Award className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Skills */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-purple-600">Habilidades Relacionadas</h3>
          {getSkillsForProject(safeProject.id).length > 0 ? (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {getSkillsForProject(safeProject.id).map((skill) => (
                  <Badge 
                    key={skill.id} 
                    variant="outline" 
                    className="border-orange-200 text-orange-600 hover:border-orange-300 dark:border-orange-800 dark:text-orange-300 dark:hover:border-orange-700 transition-colors"
                  >
                    {skill.title}
                  </Badge>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <p>Não há habilidades relacionadas no momento.</p>
            </div>
          )}
        </div>

        {/* Related Certifications */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-purple-600">Certificações Relacionadas</h3>
          {getCertificationsForProject(safeProject.id).length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {getCertificationsForProject(safeProject.id).map((certification) => (
                <Card 
                  key={certification.id} 
                  className="border-green-200 hover:border-green-300 dark:border-green-800 dark:hover:border-green-700 transition-all duration-300 hover:shadow-md"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-sm font-semibold text-green-600 line-clamp-2">
                        {certification.name}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs border-green-200 text-green-600 dark:border-green-800 dark:text-green-300 shrink-0 ml-2">
                        {certification.issuer}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                      {certification.description}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                      <Calendar className="h-3 w-3" />
                      <span>{certification.date}</span>
                    </div>
                    {certification.credentialUrl && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild 
                        className="w-full text-xs border-green-200 hover:bg-green-50 dark:border-green-800 dark:hover:bg-green-950/20"
                      >
                        <a href={certification.credentialUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Ver Credencial
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <p>Não há certificações relacionadas no momento.</p>
            </div>
          )}
        </div>

        {/* Related Projects */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-purple-600">Projetos Relacionados</h3>
          {getRelatedProjects(safeProject.id).length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {getRelatedProjects(safeProject.id).map((relatedProject) => (
                <Card 
                  key={relatedProject.id} 
                  className="border-indigo-200 hover:border-indigo-300 dark:border-indigo-800 dark:hover:border-indigo-700 cursor-pointer transition-all duration-300 hover:shadow-md"
                  onClick={() => handleProjectClick(relatedProject)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-sm font-semibold text-indigo-600 line-clamp-2">
                        {relatedProject.name}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs border-indigo-200 text-indigo-600 dark:border-indigo-800 dark:text-indigo-300 shrink-0 ml-2">
                        {relatedProject.media?.length || 0} mídias
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                      {relatedProject.description}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{relatedProject.period}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <p>Não há projetos relacionados no momento.</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t">
          {/* GitHub Button */}
          {safeProject.github ? (
            <Button variant="outline" asChild className="border-gray-200 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-950/20">
              <a href={safeProject.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
          ) : (
            <Button variant="outline" disabled className="border-gray-200 text-muted-foreground">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
          )}
          
          {/* LinkedIn Button */}
          <Button variant="outline" asChild className="border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950/20">
            <a href="https://www.linkedin.com/in/nathalye-vitoria-felix-17689a205" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </a>
          </Button>
          
          {/* Back to Home Button */}
          <Button variant="outline" asChild className="border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950/20">
            <Link href="/">← Início</Link>
          </Button>
          
          {/* Close Button */}
          <Button 
            onClick={onClose}
            className="bg-purple-600 hover:bg-purple-700"
          >
            Fechar
          </Button>
        </div>
      </div>
    </Modal>
  )
}