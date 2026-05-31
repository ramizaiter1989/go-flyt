"use client"

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Home, Layers, Calendar, ArrowRight, Calculator, Building2, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { useLanguage } from '@/lib/language-context'

export function MovingCalculator() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    fromAddress: '',
    toAddress: '',
    propertyType: '',
    rooms: '',
    floor: '',
    hasElevator: false,
    moveDate: '',
  })

  const estimatedPrice = useMemo(() => {
    if (!formData.propertyType || !formData.rooms) return null

    const basePrices: Record<string, number> = {
      room: 1500,
      apartment: 3500,
      house: 6500,
      villa: 9500,
      office: 8000,
    }

    const roomMultiplier = parseInt(formData.rooms) * 800
    const floorCost = formData.hasElevator ? 0 : (parseInt(formData.floor) || 0) * 500
    const total = (basePrices[formData.propertyType] || 3500) + roomMultiplier + floorCost

    return total
  }, [formData])

  const estimatedDistance = useMemo(() => {
    if (!formData.fromAddress || !formData.toAddress) return null
    return Math.floor(Math.random() * 100) + 10
  }, [formData.fromAddress, formData.toAddress])

  const scrollToQuote = () => {
    const element = document.getElementById('quote')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="calculator" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff7a00' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Animated orbs */}
      <motion.div 
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" as const }}
        className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ 
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }}
        className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" 
      />

      <div className="container mx-auto px-4 relative z-10">
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
            <Calculator className="w-4 h-4" />
            <span className="text-sm font-medium">{t('calc.title')}</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t('calc.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t('calc.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-xl shadow-muted/20"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* From Address */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-2"
              >
                <Label className="flex items-center gap-2 text-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  {t('calc.from')}
                </Label>
                <Input
                  placeholder={t('calc.from.placeholder')}
                  value={formData.fromAddress}
                  onChange={(e) => setFormData({ ...formData, fromAddress: e.target.value })}
                  className="rounded-xl h-12 transition-all focus:ring-2 focus:ring-primary/20"
                />
              </motion.div>

              {/* To Address */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-2"
              >
                <Label className="flex items-center gap-2 text-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  {t('calc.to')}
                </Label>
                <Input
                  placeholder={t('calc.to.placeholder')}
                  value={formData.toAddress}
                  onChange={(e) => setFormData({ ...formData, toAddress: e.target.value })}
                  className="rounded-xl h-12 transition-all focus:ring-2 focus:ring-primary/20"
                />
              </motion.div>

              {/* Property Type */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <Label className="flex items-center gap-2 text-foreground">
                  <Home className="w-4 h-4 text-primary" />
                  {t('calc.property')}
                </Label>
                <Select
                  value={formData.propertyType}
                  onValueChange={(value) => setFormData({ ...formData, propertyType: value })}
                >
                  <SelectTrigger className="rounded-xl h-12">
                    <SelectValue placeholder={t('calc.property')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="room">{t('property.room')}</SelectItem>
                    <SelectItem value="apartment">{t('property.apartment')}</SelectItem>
                    <SelectItem value="house">{t('property.house')}</SelectItem>
                    <SelectItem value="villa">{t('property.villa')}</SelectItem>
                    <SelectItem value="office">{t('property.office')}</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              {/* Number of Rooms */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-2"
              >
                <Label className="flex items-center gap-2 text-foreground">
                  <Building2 className="w-4 h-4 text-primary" />
                  {t('calc.rooms')}
                </Label>
                <Select
                  value={formData.rooms}
                  onValueChange={(value) => setFormData({ ...formData, rooms: value })}
                >
                  <SelectTrigger className="rounded-xl h-12">
                    <SelectValue placeholder={t('calc.rooms')} />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? 'vaerelse' : 'vaerelser'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </motion.div>

              {/* Floor Level */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="space-y-2"
              >
                <Label className="flex items-center gap-2 text-foreground">
                  <Layers className="w-4 h-4 text-primary" />
                  {t('calc.floor')}
                </Label>
                <Select
                  value={formData.floor}
                  onValueChange={(value) => setFormData({ ...formData, floor: value })}
                >
                  <SelectTrigger className="rounded-xl h-12">
                    <SelectValue placeholder={t('calc.floor')} />
                  </SelectTrigger>
                  <SelectContent>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num === 0 ? 'Stue' : `${num}. sal`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </motion.div>

              {/* Move Date */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="space-y-2"
              >
                <Label className="flex items-center gap-2 text-foreground">
                  <Calendar className="w-4 h-4 text-primary" />
                  {t('calc.date')}
                </Label>
                <Input
                  type="date"
                  value={formData.moveDate}
                  onChange={(e) => setFormData({ ...formData, moveDate: e.target.value })}
                  className="rounded-xl h-12 transition-all focus:ring-2 focus:ring-primary/20"
                />
              </motion.div>

              {/* Elevator */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="md:col-span-2 flex items-center justify-between bg-muted/50 rounded-xl p-4"
              >
                <Label className="flex items-center gap-2 text-foreground cursor-pointer">
                  {t('calc.elevator')}
                </Label>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">
                    {formData.hasElevator ? t('calc.yes') : t('calc.no')}
                  </span>
                  <Switch
                    checked={formData.hasElevator}
                    onCheckedChange={(checked) => setFormData({ ...formData, hasElevator: checked })}
                  />
                </div>
              </motion.div>
            </div>

            {/* Results */}
            <AnimatePresence>
              {estimatedPrice && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-2xl overflow-hidden"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center md:text-left">
                      <p className="text-sm text-muted-foreground mb-1 flex items-center gap-2 justify-center md:justify-start">
                        <Sparkles className="w-4 h-4 text-primary" />
                        {t('calc.estimate')}
                      </p>
                      <motion.p 
                        key={estimatedPrice}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-4xl md:text-5xl font-bold text-primary"
                      >
                        {estimatedPrice.toLocaleString('da-DK')} kr
                      </motion.p>
                    </div>
                    {estimatedDistance && (
                      <div className="text-center md:text-right">
                        <p className="text-sm text-muted-foreground mb-1">{t('calc.distance')}</p>
                        <motion.p 
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="text-2xl md:text-3xl font-semibold text-foreground"
                        >
                          ~{estimatedDistance} km
                        </motion.p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex justify-center"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  size="lg" 
                  onClick={scrollToQuote}
                  className="rounded-full px-10 py-6 text-lg gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all group"
                >
                  {t('calc.cta')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
