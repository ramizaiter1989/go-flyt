"use client"

import { useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'da' ? 'en' : 'da')
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">G</span>
            </div>
            <span className="font-bold text-xl text-foreground">
              Go<span className="text-primary">FLyt</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('calculator')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.calculate')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.contact')}
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language === 'da' ? 'EN' : 'DA'}</span>
            </button>
            <Button 
              onClick={() => scrollToSection('calculator')}
              className="rounded-full px-6"
            >
              {t('nav.calculate')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-muted-foreground"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-medium">{language === 'da' ? 'EN' : 'DA'}</span>
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left py-2 text-foreground font-medium"
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left py-2 text-foreground font-medium"
              >
                {t('nav.services')}
              </button>
              <button 
                onClick={() => scrollToSection('calculator')}
                className="text-left py-2 text-foreground font-medium"
              >
                {t('nav.calculate')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 text-foreground font-medium"
              >
                {t('nav.contact')}
              </button>
              <Button 
                onClick={() => scrollToSection('calculator')}
                className="w-full rounded-full mt-2"
              >
                {t('hero.cta.primary')}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
