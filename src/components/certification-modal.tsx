"use client"

import { ExternalLink, Award, Calendar, MapPin, Building, Clock, Star, Link as LinkIcon, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Modal } from "@/components/ui/modal"
import { getProjectsForCertification, getRelatedCertifications, getSkillsForCertification } from "@/lib/data-utils"
import Link from "next/link"

interface CertificationModalProps {
  isOpen: boolean
  onClose: () => void
  certification: any
  onCertificationClick?: (certification: any) => void
}

export function CertificationModal({ isOpen, onClose, certification, onCertificationClick }: CertificationModalProps) {
  if (!certification) return null

  const handleCertificationClick = (clickedCertification: any) => {
    if (onCertificationClick) {
      onCertificationClick(clickedCertification)
    }
  }

  const handleProjectClick = (project: any) => {
    onClose()
    // Navigate to projects page with project modal open
    window.location.href = `/projects#${project.id}`
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={certification.name}
      className="max-w-5xl"
    >
      <div className="space-y-8">
        {/* Certification Header Image */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={certification.image}
            alt={certification.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <Badge className="bg-purple-600 text-white mb-2">
              {certification.date}
            </Badge>
            <h2 className="text-white text-xl font-bold">{certification.name}</h2>
          </div>
        </div>

        {/* Certification Information Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Basic Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-600">Informações da Certificação</h3>
            
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-2 text-sm">
                <Building className="h-4 w-4 text-purple-600" />
                <span className="font-medium">Emissor:</span>
                <span className="text-muted-foreground">{certification.issuer}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-purple-600" />
                <span className="font-medium">Data:</span>
                <span className="text-muted-foreground">{certification.date}</span>
              </div>
              
              {certification.duration && (
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-purple-600" />
                  <span className="font-medium">Duração:</span>
                  <span className="text-muted-foreground">{certification.duration}</span>
                </div>
              )}
              
              {certification.location && (
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-purple-600" />
                  <span className="font-medium">Local:</span>
                  <span className="text-muted-foreground">{certification.location}</span>
                </div>
              )}
              
              {certification.level && (
                <div className="flex items-center gap-2 text-sm">
                  <Star className="h-4 w-4 text-purple-600" />
                  <span className="font-medium">Nível:</span>
                  <span className="text-muted-foreground">{certification.level}</span>
                </div>
              )}
            </div>
          </div>

          {/* Skills and Topics */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-600">Competências e Tópicos</h3>
            <div className="space-y-3">
              {getSkillsForCertification(certification.id).length > 0 ? (
                <div className="space-y-2">
                  <span className="font-medium text-sm">Principais Competências:</span>
                  <div className="flex flex-wrap gap-1">
                    {getSkillsForCertification(certification.id).map((skill) => (
                      <Badge 
                        key={skill.id} 
                        variant="outline" 
                        className="border-orange-200 text-orange-600 hover:border-orange-300 dark:border-orange-800 dark:text-orange-300 dark:hover:border-orange-700 transition-colors cursor-pointer"
                        asChild
                      >
                        <Link href={`/skills#${skill.id}`}>
                          {skill.title}
                        </Link>
                      </Badge>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-sm text-muted-foreground">
                  Nenhuma competência específica mapeada.
                </div>
              )}
              
              {certification.topics && certification.topics.length > 0 ? (
                <div className="space-y-2">
                  <span className="font-medium text-sm">Tópicos Abordados:</span>
                  <div className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-3">
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {certification.topics.map((topic: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Certification Description */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-purple-600">Descrição da Certificação</h3>
          <div className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-4">
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {certification.description}
            </p>
          </div>
        </div>

        {/* Certification Details */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Requirements */}
          {certification.requirements && certification.requirements.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-600">Requisitos</h3>
              <div className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-4">
                <ul className="text-sm text-muted-foreground space-y-1">
                  {certification.requirements.map((req: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Outcomes */}
          {certification.outcomes && certification.outcomes.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-600">Resultados Esperados</h3>
              <div className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-4">
                <ul className="text-sm text-muted-foreground space-y-1">
                  {certification.outcomes.map((outcome: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <Award className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Links */}
        {certification.certificate || certification.credential || certification.moreInfo && (
          <div>
            <h3 className="text-lg font-semibold mb-3 text-purple-600">Documentos e Links</h3>
            <div className="grid md:grid-cols-3 gap-3">
              {certification.certificate && (
                <Button variant="outline" asChild className="border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950/20">
                  <a href={certification.certificate} target="_blank" rel="noopener noreferrer">
                    <Award className="h-4 w-4 mr-2" />
                    Certificado
                  </a>
                </Button>
              )}
              
              {certification.credential && (
                <Button variant="outline" asChild className="border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950/20">
                  <a href={certification.credential} target="_blank" rel="noopener noreferrer">
                    <LinkIcon className="h-4 w-4 mr-2" />
                    Credencial
                  </a>
                </Button>
              )}
              
              {certification.moreInfo && (
                <Button variant="outline" asChild className="border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950/20">
                  <a href={certification.moreInfo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Mais Informações
                  </a>
                </Button>
              )}
            </div>
          </div>
        )}

        {/* Related Projects */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-purple-600">Projetos Relacionados</h3>
          {getProjectsForCertification(certification.id).length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {getProjectsForCertification(certification.id).map((project) => (
                <Card 
                  key={project.id} 
                  className="border-indigo-200 hover:border-indigo-300 dark:border-indigo-800 dark:hover:border-indigo-700 transition-all duration-300 hover:shadow-md"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-sm font-semibold text-indigo-600 line-clamp-2">
                        {project.name}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs border-indigo-200 text-indigo-600 dark:border-indigo-800 dark:text-indigo-300 shrink-0 ml-2">
                        {project.media?.length || 0} mídias
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                      <Calendar className="h-3 w-3" />
                      <span>{project.period}</span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild 
                      className="w-full text-xs border-indigo-200 hover:bg-indigo-50 dark:border-indigo-800 dark:hover:bg-indigo-950/20"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Link href={`/projects#${project.id}`}>
                        Ver Projeto
                      </Link>
                    </Button>
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

        {/* Related Certifications */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-purple-600">Certificações Relacionadas</h3>
          {getRelatedCertifications(certification.id).length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {getRelatedCertifications(certification.id).map((relatedCertification) => (
                <Card 
                  key={relatedCertification.id} 
                  className="border-pink-200 hover:border-pink-300 dark:border-pink-800 dark:hover:border-pink-700 cursor-pointer transition-all duration-300 hover:shadow-md"
                  onClick={() => handleCertificationClick(relatedCertification)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-sm font-semibold text-pink-600 line-clamp-2">
                        {relatedCertification.name}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs border-pink-200 text-pink-600 dark:border-pink-800 dark:text-pink-300 shrink-0 ml-2">
                        {relatedCertification.date}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-muted-foreground mb-2">
                      {relatedCertification.issuer}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{relatedCertification.date}</span>
                    </div>
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

        {/* Action Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t">
          {/* LinkedIn Button */}
          <Button variant="outline" asChild className="border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950/20">
            <a href="https://www.linkedin.com/in/nathalye-vitoria-felix-17689a205" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </a>
          </Button>
          
          {/* Credential Button */}
          {certification.credentialUrl ? (
            <Button variant="outline" asChild className="border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950/20">
              <a href={certification.credentialUrl} target="_blank" rel="noopener noreferrer">
                <Award className="h-4 w-4 mr-2" />
                Credencial
              </a>
            </Button>
          ) : (
            <Button variant="outline" disabled className="border-purple-200 text-muted-foreground">
              <Award className="h-4 w-4 mr-2" />
              Credencial
            </Button>
          )}
          
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