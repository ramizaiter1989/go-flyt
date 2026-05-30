"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, Clock, Users, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('goflyt-popup-seen')
      if (!hasSeenPopup) {
        setIsOpen(true)
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem('goflyt-popup-seen', 'true')
  }

  const handleGetQuote = () => {
    setIsOpen(false)
    sessionStorage.setItem('goflyt-popup-seen', 'true')
    const element = document.getElementById('quote')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-secondary/60 backdrop-blur-sm z-50"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 max-w-lg mx-auto"
          >
            <div className="bg-card rounded-3xl shadow-2xl overflow-hidden border border-border">
              {/* Header with gradient */}
              <div className="relative bg-gradient-to-br from-primary via-primary to-primary/80 p-8 text-center">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                
                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", damping: 15 }}
                  className="relative z-10"
                >
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Sparkles className="w-10 h-10 text-primary" />
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl md:text-3xl font-bold text-white mb-2 relative z-10"
                >
                  {t('popup.title')}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-white/90 relative z-10"
                >
                  {t('popup.subtitle')}
                </motion.p>
              </div>

              {/* Content */}
              <div className="p-8">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-muted-foreground text-center mb-6"
                >
                  {t('popup.message')}
                </motion.p>

                {/* Trust elements */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 mb-8"
                >
                  <div className="flex items-center gap-3 flex-1 bg-accent/50 rounded-xl p-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm text-foreground font-medium">
                      {t('popup.promise')}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 flex-1 bg-accent/50 rounded-xl p-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm text-foreground font-medium">
                      {t('popup.team')}
                    </p>
                  </div>
                </motion.div>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-col gap-3"
                >
                  <Button
                    size="lg"
                    onClick={handleGetQuote}
                    className="w-full rounded-xl py-6 text-lg gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all group"
                  >
                    {t('popup.cta')}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <button
                    onClick={handleClose}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors py-2"
                  >
                    {t('popup.close')}
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
