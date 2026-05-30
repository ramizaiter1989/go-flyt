"use client"

import { motion } from 'framer-motion'
import { Calculator, FileText, Truck } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export function HowItWorksSection() {
  const { t } = useLanguage()

  const steps = [
    {
      icon: Calculator,
      number: '01',
      titleKey: 'how.step1.title',
      descKey: 'how.step1.desc',
    },
    {
      icon: FileText,
      number: '02',
      titleKey: 'how.step2.title',
      descKey: 'how.step2.desc',
    },
    {
      icon: Truck,
      number: '03',
      titleKey: 'how.step3.title',
      descKey: 'how.step3.desc',
    },
  ]

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      {/* Animated background orbs */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ 
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl" 
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t('how.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t('how.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection line - hidden on mobile */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 origin-left" 
            />

            <div className="grid md:grid-cols-3 gap-8 md:gap-6">
              {steps.map((step, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative text-center"
                >
                  {/* Step number badge */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/25 relative z-10"
                  >
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </motion.div>

                  {/* Pulsing ring animation */}
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-primary/30 rounded-3xl"
                  />

                  {/* Step number */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.4 + index * 0.2 }}
                    className="inline-flex items-center justify-center w-8 h-8 bg-secondary text-secondary-foreground rounded-full text-sm font-bold mb-4"
                  >
                    {step.number}
                  </motion.div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-muted-foreground max-w-xs mx-auto">
                    {t(step.descKey)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
