"use client"

import { motion } from 'framer-motion'
import { Award, Shield, Clock, DollarSign, Headphones } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function WhyChooseSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Award,
      titleKey: 'why.licensed',
      descKey: 'why.licensed.desc',
    },
    {
      icon: Shield,
      titleKey: 'why.insured',
      descKey: 'why.insured.desc',
    },
    {
      icon: Clock,
      titleKey: 'why.fast',
      descKey: 'why.fast.desc',
    },
    {
      icon: DollarSign,
      titleKey: 'why.transparent',
      descKey: 'why.transparent.desc',
    },
    {
      icon: Headphones,
      titleKey: 'why.support',
      descKey: 'why.support.desc',
    },
  ]

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff7a00' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
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
            {t('why.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t('why.subtitle')}
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
            >
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors"
              >
                <feature.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="font-semibold text-foreground mb-2">
                {t(feature.titleKey)}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t(feature.descKey)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
