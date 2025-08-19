'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Cpu, Zap, Wrench } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "nathalye277@gmail.com",
      href: "mailto:nathalye277@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Telefone",
      value: "(11) 95319-2603",
      href: "tel:11953192603"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Localização",
      value: "Guarulhos, SP - Brasil",
      href: null
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/nathalyevitoria"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nathalye-vitoria-felix-17689a205"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "WhatsApp",
      href: "https://api.whatsapp.com/send?phone=5511953192603&text=Ol%C3%A1!%20acessei%20seu%20site%20portfolio%20e%20gostaria%20de%20falar%20com%20voc%C3%AA!"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2">
              <Cpu className="h-8 w-8 text-primary" />
              <Zap className="h-8 w-8 text-primary" />
              <Wrench className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tem um projeto em mente ou quer colaborar? Adoraria conversar com você. 
            Fique à vontade para entrar em contato através das minhas redes sociais ou informações de contato.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Informações de Contato</CardTitle>
              <CardDescription>
                Aqui estão as melhores formas de me contatar diretamente.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-primary">{info.icon}</div>
                  <div className="flex-1">
                    <p className="font-medium">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card>
            <CardHeader>
              <CardTitle>Conecte-se Comigo</CardTitle>
              <CardDescription>
                Siga-me nas redes sociais para atualizações e networking.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social, index) => (
                  <Button key={index} variant="outline" className="w-full" asChild>
                    <a 
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      {social.icon}
                      <span className="text-sm">{social.label}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Availability */}
          <Card>
            <CardHeader>
              <CardTitle>Disponibilidade Atual</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Estágio em Mecatrônica</span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300">Disponível</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Projetos Acadêmicos</span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300">Disponível</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Freelas em Manutenção</span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300">Disponível</Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Atualmente estou disponível para estágios na área de mecatrônica, 
                projetos acadêmicos e serviços de manutenção eletroeletrônica. 
                Tempo médio de resposta: 24-48 horas.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}