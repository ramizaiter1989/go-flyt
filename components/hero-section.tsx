"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Calculator } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
}

const floatAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
}

export function HeroSection() {
  const { t } = useLanguage()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden">
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff7a00' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Animated background gradient */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" 
      />
      
      {/* Decorative floating elements */}
      <motion.div 
        animate={floatAnimation}
        className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 1 } }}
        className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 2 } }}
        className="absolute top-1/3 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl" 
      />
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Trust badge */}
          <motion.div variants={item}>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8 shadow-sm"
            >
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-500 rounded-full" 
              />
              <span className="text-sm text-muted-foreground">
                4.9/5 {t('trust.rating')} | 10,000+ {t('trust.moves')}
              </span>
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight"
          >
            {t('hero.headline')}
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={item}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty"
          >
            {t('hero.subheadline')}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg"
                onClick={() => scrollToSection('calculator')}
                className="rounded-full px-8 py-6 text-lg gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                <Calculator className="w-5 h-5" />
                {t('hero.cta.primary')}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('quote')}
                className="rounded-full px-8 py-6 text-lg gap-2 border-2 hover:bg-accent transition-all group"
              >
                {t('hero.cta.secondary')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust elements */}
          <motion.div 
            variants={item}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              { value: '10,000+', labelKey: 'trust.moves' },
              { value: '4.9/5', labelKey: 'trust.rating' },
              { value: '15+', labelKey: 'trust.years' },
              { value: '100%', labelKey: 'trust.insured' },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-4 md:p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                  className="text-2xl md:text-3xl font-bold text-primary mb-1"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground">{t(stat.labelKey)}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
