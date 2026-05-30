"use client"

import { LanguageProvider } from '@/lib/language-context'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { MovingCalculator } from '@/components/moving-calculator'
import { WhyChooseSection } from '@/components/why-choose-section'
import { ServicesSection } from '@/components/services-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { ReviewsSection } from '@/components/reviews-section'
import { QuoteFormSection } from '@/components/quote-form-section'
import { FAQSection } from '@/components/faq-section'
import { Footer } from '@/components/footer'
import { MobileNav } from '@/components/mobile-nav'
import { FloatingCTA } from '@/components/floating-cta'
import { WelcomePopup } from '@/components/welcome-popup'

export default function HomePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <WelcomePopup />
        <Header />
        
        <main className="pb-16 md:pb-0">
          <HeroSection />
          <MovingCalculator />
          <WhyChooseSection />
          <ServicesSection />
          <HowItWorksSection />
          <ReviewsSection />
          <QuoteFormSection />
          <FAQSection />
        </main>
        
        <Footer />
        <MobileNav />
        <FloatingCTA />
      </div>
    </LanguageProvider>
  )
}
