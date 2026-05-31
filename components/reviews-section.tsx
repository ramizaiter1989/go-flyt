"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'

const reviews = [
  {
    id: 1,
    name: 'Mette Hansen',
    location: 'Kobenhavn',
    rating: 5,
    text: {
      da: 'Fantastisk service! Holdet var professionelt, hurtigt og behandlede alle vores ejendele med stor omhu. Vil klart anbefale GoFLyt til alle.',
      en: 'Fantastic service! The team was professional, fast, and treated all our belongings with great care. Would definitely recommend GoFLyt to everyone.',
    },
    date: '2024-01',
  },
  {
    id: 2,
    name: 'Lars Petersen',
    location: 'Aarhus',
    rating: 5,
    text: {
      da: 'Bedste flytteoplevelse jeg har haft. Prisen var praecis som estimeret, ingen overraskelser. Saerligt imponeret over hvor forsigtige de var med vores klaver.',
      en: 'Best moving experience I have had. The price was exactly as estimated, no surprises. Especially impressed by how careful they were with our piano.',
    },
    date: '2024-02',
  },
  {
    id: 3,
    name: 'Sofia Andersen',
    location: 'Odense',
    rating: 5,
    text: {
      da: 'Jeg var nervos for min flytning, men GoFLyt gjorde hele processen stressfri. Fra booking til aflaesning var alt perfekt. Tak!',
      en: 'I was nervous about my move, but GoFLyt made the whole process stress-free. From booking to unloading, everything was perfect. Thank you!',
    },
    date: '2024-01',
  },
  {
    id: 4,
    name: 'Thomas Nielsen',
    location: 'Aalborg',
    rating: 5,
    text: {
      da: 'Flyttede mit kontor med GoFLyt. De var utroligt effektive og sorgede for minimal nedetid for min virksomhed. Professionelt fra start til slut.',
      en: 'Moved my office with GoFLyt. They were incredibly efficient and ensured minimal downtime for my business. Professional from start to finish.',
    },
    date: '2024-03',
  },
  {
    id: 5,
    name: 'Anna Christensen',
    location: 'Esbjerg',
    rating: 5,
    text: {
      da: 'Tredje gang jeg bruger GoFLyt, og de skuffer aldrig. Palidelige, venlige og altid til tiden. Min go-to flytteservice!',
      en: 'Third time using GoFLyt, and they never disappoint. Reliable, friendly, and always on time. My go-to moving service!',
    },
    date: '2024-02',
  },
]

export function ReviewsSection() {
  const { language, t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextReview = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length],
  ]

  return (
    <section className="py-16 md:py-24 bg-secondary text-secondary-foreground overflow-hidden relative">
      {/* Animated background elements */}
      <motion.div 
        animate={{ 
          rotate: [0, 360],
        }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" as const }}
        className="absolute top-1/4 -left-32 w-64 h-64 border border-secondary-foreground/10 rounded-full" 
      />
      <motion.div 
        animate={{ 
          rotate: [360, 0],
        }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" as const }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 border border-secondary-foreground/10 rounded-full" 
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            {t('reviews.title')}
          </h2>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto text-pretty">
            {t('reviews.subtitle')}
          </p>
        </motion.div>

        {/* Mobile: Single review */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-card text-card-foreground rounded-3xl p-6 shadow-xl"
            >
              <Quote className="w-10 h-10 text-primary mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">
                {reviews[currentIndex].text[language]}
              </p>
              <div className="flex items-center gap-4">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"
                >
                  <span className="text-primary font-semibold text-lg">
                    {reviews[currentIndex].name.charAt(0)}
                  </span>
                </motion.div>
                <div>
                  <p className="font-semibold text-foreground">{reviews[currentIndex].name}</p>
                  <p className="text-sm text-muted-foreground">{reviews[currentIndex].location}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <Star className="w-4 h-4 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-6">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={prevReview}
                className="rounded-full bg-card border-border text-foreground hover:bg-accent"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </motion.div>
            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-6' : 'bg-secondary-foreground/30 w-2'
                  }`}
                />
              ))}
            </div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={nextReview}
                className="rounded-full bg-card border-border text-foreground hover:bg-accent"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Desktop: Multiple reviews */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-3 gap-6">
            {visibleReviews.map((review, index) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: index === 1 ? 1.02 : 1.05, y: -5 }}
                className={`bg-card text-card-foreground rounded-3xl p-6 shadow-xl transition-all duration-500 ${
                  index === 1 ? 'scale-105 shadow-2xl' : 'opacity-90'
                }`}
              >
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-foreground mb-6 leading-relaxed line-clamp-4">
                  {review.text[language]}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-lg">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mt-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-10">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={prevReview}
                className="rounded-full bg-card border-border text-foreground hover:bg-accent"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </motion.div>
            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-6' : 'bg-secondary-foreground/30 w-2'
                  }`}
                />
              ))}
            </div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={nextReview}
                className="rounded-full bg-card border-border text-foreground hover:bg-accent"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
