"use client"

import { Calculator } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'

export function FloatingCTA() {
  const { t } = useLanguage()

  const scrollToCalculator = () => {
    const element = document.getElementById('calculator')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 z-40">
      <Button
        size="lg"
        onClick={scrollToCalculator}
        className="rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all animate-pulse hover:animate-none gap-2"
      >
        <Calculator className="w-5 h-5" />
        <span className="hidden sm:inline">{t('nav.calculate')}</span>
      </Button>
    </div>
  )
}
