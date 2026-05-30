"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, MapPin, Calendar, User, Phone, Mail, MessageSquare, CheckCircle2, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useLanguage } from '@/lib/language-context'

export function QuoteFormSection() {
  const { t } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickup: '',
    destination: '',
    date: '',
    notes: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const formFields = [
    { name: 'name', icon: User, type: 'text', labelKey: 'quote.name', placeholder: 'quote.name' },
    { name: 'phone', icon: Phone, type: 'tel', labelKey: 'quote.phone', placeholder: '+45 12 34 56 78' },
    { name: 'email', icon: Mail, type: 'email', labelKey: 'quote.email', placeholder: 'email@example.dk' },
    { name: 'date', icon: Calendar, type: 'date', labelKey: 'quote.date', placeholder: '' },
    { name: 'pickup', icon: MapPin, type: 'text', labelKey: 'quote.pickup', placeholder: 'quote.pickup' },
    { name: 'destination', icon: MapPin, type: 'text', labelKey: 'quote.destination', placeholder: 'quote.destination' },
  ]

  return (
    <section id="quote" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff7a00' fill-opacity='1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Animated background orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-accent/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">{t('popup.promise')}</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              {t('quote.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              {t('quote.subtitle')}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-3xl p-6 md:p-10 shadow-xl shadow-muted/20"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold text-foreground mb-2"
                  >
                    {t('quote.success')}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-muted-foreground"
                  >
                    {t('popup.team')}
                  </motion.p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {formFields.map((field, index) => (
                      <motion.div 
                        key={field.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-2"
                      >
                        <Label className="flex items-center gap-2 text-foreground">
                          <field.icon className="w-4 h-4 text-primary" />
                          {t(field.labelKey)}
                        </Label>
                        <Input
                          required
                          type={field.type}
                          placeholder={field.placeholder.startsWith('quote.') ? t(field.placeholder) : field.placeholder}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                          className="rounded-xl h-12 transition-all focus:ring-2 focus:ring-primary/20"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Notes */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="space-y-2"
                  >
                    <Label className="flex items-center gap-2 text-foreground">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      {t('quote.notes')}
                    </Label>
                    <Textarea
                      placeholder={t('quote.notes')}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="rounded-xl min-h-[120px] resize-none transition-all focus:ring-2 focus:ring-primary/20"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-full py-6 text-lg gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                    >
                      <Send className="w-5 h-5" />
                      {t('quote.submit')}
                    </Button>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
