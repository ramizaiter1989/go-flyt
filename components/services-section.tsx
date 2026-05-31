"use client"

import { motion } from 'framer-motion'
import { Home, Building2, Warehouse, Briefcase, Truck, Globe, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
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
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
}

export function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Home,
      titleKey: 'services.private',
      descKey: 'services.private.desc',
      color: 'bg-blue-500/10 text-blue-600',
      hoverBg: 'hover:bg-blue-500/5',
    },
    {
      icon: Building2,
      titleKey: 'services.apartment',
      descKey: 'services.apartment.desc',
      color: 'bg-green-500/10 text-green-600',
      hoverBg: 'hover:bg-green-500/5',
    },
    {
      icon: Warehouse,
      titleKey: 'services.house',
      descKey: 'services.house.desc',
      color: 'bg-amber-500/10 text-amber-600',
      hoverBg: 'hover:bg-amber-500/5',
    },
    {
      icon: Briefcase,
      titleKey: 'services.office',
      descKey: 'services.office.desc',
      color: 'bg-purple-500/10 text-purple-600',
      hoverBg: 'hover:bg-purple-500/5',
    },
    {
      icon: Truck,
      titleKey: 'services.furniture',
      descKey: 'services.furniture.desc',
      color: 'bg-rose-500/10 text-rose-600',
      hoverBg: 'hover:bg-rose-500/5',
    },
    {
      icon: Globe,
      titleKey: 'services.international',
      descKey: 'services.international.desc',
      color: 'bg-cyan-500/10 text-cyan-600',
      hoverBg: 'hover:bg-cyan-500/5',
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ff7a00' fill-opacity='1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            {t('services.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group ${service.hoverBg}`}
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${service.color}`}
              >
                <service.icon className="w-7 h-7" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {t(service.titleKey)}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t(service.descKey)}
              </p>
              <Button 
                variant="ghost" 
                className="p-0 h-auto text-primary hover:text-primary/80 group-hover:gap-3 transition-all"
              >
                {t('services.learn')}
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
