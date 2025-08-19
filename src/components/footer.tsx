"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, MessageCircle, Cpu, Zap, Wrench } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 dark:from-purple-950 dark:via-blue-950 dark:to-purple-950 text-white border-t border-purple-800/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                <Cpu className="h-6 w-6 text-purple-400" />
                <Zap className="h-6 w-6 text-blue-400" />
                <Wrench className="h-6 w-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Nathalye Vitoria
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Estudante de Mecatrônica e Eletricista de Manutenção, apaixonada por automação, 
              robótica e manutenção industrial. Transformando ideias em soluções tecnológicas.
            </p>
          </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-3 text-purple-300">Conecte-se comigo</h4>
              <div className="flex gap-4">
                <Link 
                  href="https://github.com/nathalyevitoria" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-purple-800/50 hover:bg-purple-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/nathalye-vitoria-felix-17689a205" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-800/50 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link 
                  href="https://api.whatsapp.com/send?phone=5511953192603&text=Ol%C3%A1!%20acessei%20seu%20site%20portfolio%20e%20gostaria%20de%20falar%20com%20voc%C3%AA!" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-800/50 hover:bg-green-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <MessageCircle className="h-5 w-5" />
                </Link>
                <Link 
                  href="mailto:nathalye277@gmail.com" 
                  className="w-10 h-10 bg-pink-800/50 hover:bg-pink-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Navegação Rápida</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                  Início
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-pink-400 rounded-full"></span>
                  Habilidades
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-800/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Nathalye Vitoria. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Desenvolvido por</span>
              <div className="flex items-center gap-1 hover:text-white transition-colors duration-300">
                <span>Lucas Leria</span>
                <Link 
                  href="https://www.linkedin.com/in/lucasleria" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors duration-300">
                Política de Privacidade
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-300">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}