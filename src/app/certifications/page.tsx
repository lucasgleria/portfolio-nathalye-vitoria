"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Award, Calendar, Zap, Cpu, Wrench, Bot, Eye, Link as LinkIcon } from "lucide-react"
import Link from "next/link"
import { certifications } from "@/data/CertificationsData"
import { projects } from "@/data/ProjectsData"
import { CertificationModal } from "@/components/certification-modal"
import { getProjectsForCertification } from "@/lib/data-utils"

export default function CertificationsPage() {
  const [selectedCertification, setSelectedCertification] = useState<typeof certifications[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openCertificationModal = (certification: typeof certifications[0]) => {
    setSelectedCertification(certification)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCertification(null)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Certificações
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Certificações e cursos de qualificação profissional que comprovam 
            minha expertise nas áreas de mecatrônica, eletroeletrônica e automação industrial.
          </p>
        </div>

        {/* All Certifications Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
            Todas as Certificações
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((certification, index) => {
              const certificationProjects = getProjectsForCertification(certification.id)
              
              return (
                <Card 
                  key={certification.id} 
                  className="hover:shadow-lg transition-all duration-300 border-purple-200 hover:border-purple-300 dark:border-purple-800 dark:hover:border-purple-700 group cursor-pointer"
                  onClick={() => openCertificationModal(certification)}
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 relative overflow-hidden">
                    <img
                      src={certification.image}
                      alt={certification.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        Ver Detalhes
                      </div>
                    </div>
                    {certificationProjects.length > 0 && (
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-purple-600 text-white text-xs">
                          {certificationProjects.length} projeto{certificationProjects.length > 1 ? 's' : ''}
                        </Badge>
                      </div>
                    )}
                    <div className="absolute top-2 right-2">
                      <Badge variant="outline" className="text-xs border-white text-white bg-black/20">
                        {certification.year}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-lg line-clamp-2">
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-purple-600" />
                        {certification.name}
                      </div>
                    </CardTitle>
                    <CardDescription className="text-sm font-medium text-foreground">
                      {certification.institution}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                      {certification.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <Badge 
                        variant="outline" 
                        className="text-xs border-purple-200 text-purple-600 dark:border-purple-800 dark:text-purple-300"
                      >
                        {certification.media.length} mídias
                      </Badge>
                      {certificationProjects.length > 0 && (
                        <Badge 
                          variant="outline" 
                          className="text-xs border-blue-200 text-blue-600 dark:border-blue-800 dark:text-blue-300"
                        >
                          {certificationProjects.length} projeto{certificationProjects.length > 1 ? 's' : ''}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Certification Categories */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
            Áreas de Certificação
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow border-purple-200 hover:border-purple-300 dark:border-purple-800 dark:hover:border-purple-700">
              <CardContent className="p-6">
                <Zap className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <h3 className="font-semibold text-purple-600 mb-2">Eletroeletrônica</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Certificações em instalações elétricas, manutenção e segurança
                </p>
                <div className="flex justify-center">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300">
                    2 certificações
                  </Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow border-blue-200 hover:border-blue-300 dark:border-blue-800 dark:hover:border-blue-700">
              <CardContent className="p-6">
                <Cpu className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold text-blue-600 mb-2">Desenvolvimento</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Programação web e desenvolvimento de sistemas
                </p>
                <div className="flex justify-center">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300">
                    1 certificação
                  </Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow border-pink-200 hover:border-pink-300 dark:border-pink-800 dark:hover:border-pink-700">
              <CardContent className="p-6">
                <Wrench className="h-12 w-12 mx-auto mb-4 text-pink-600" />
                <h3 className="font-semibold text-pink-600 mb-2">Segurança</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Proteção de dados e segurança da informação
                </p>
                <div className="flex justify-center">
                  <Badge variant="secondary" className="bg-pink-100 text-pink-800 hover:bg-pink-200 dark:bg-pink-900/30 dark:text-pink-300">
                    1 certificação
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* Certification Modal */}
      <CertificationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        certification={selectedCertification}
        onCertificationClick={(certification) => {
          setSelectedCertification(certification)
        }}
      />
    </div>
  )
}