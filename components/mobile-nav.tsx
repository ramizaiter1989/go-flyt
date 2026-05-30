"use client"

import { Home, Calculator, Briefcase, FileText } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export function MobileNav() {
  const { t } = useLanguage()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { icon: Home, label: 'mobile.home', section: 'home' },
    { icon: Calculator, label: 'mobile.calc', section: 'calculator' },
    { icon: Briefcase, label: 'mobile.services', section: 'services' },
    { icon: FileText, label: 'mobile.quote', section: 'quote' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-lg border-t border-border safe-area-inset-bottom">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(item.section)}
            className="flex flex-col items-center gap-1 px-4 py-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <item.icon className="w-5 h-5" />
            <span className="text-xs font-medium">{t(item.label)}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
