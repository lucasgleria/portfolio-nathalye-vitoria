'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="w-9 h-9"
        aria-label="Carregando tema"
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Carregando tema</span>
      </Button>
    )
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const IconComponent = theme === 'light' ? Moon : Sun

  return (
    <Button
      variant="ghost"
      size="icon"
      className="w-9 h-9"
      onClick={toggleTheme}
      aria-label={`Mudar para modo ${theme === 'light' ? 'escuro' : 'claro'}`}
    >
      <IconComponent className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Mudar tema: {theme === 'light' ? 'Modo escuro' : 'Modo claro'}</span>
    </Button>
  )
}