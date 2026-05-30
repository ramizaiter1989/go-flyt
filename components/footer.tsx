"use client"

import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export function Footer() {
  const { t } = useLanguage()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">G</span>
              </div>
              <span className="font-bold text-xl">
                Go<span className="text-primary">FLyt</span>
              </span>
            </a>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.quicklinks')}</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  {t('nav.services')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('calculator')}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  {t('nav.calculate')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/70">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>Vesterbrogade 123, 1620 København V</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/70">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+4570123456" className="hover:text-primary transition-colors">
                  +45 70 12 34 56
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/70">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info@go-flyt.dk" className="hover:text-primary transition-colors">
                  info@go-flyt.dk
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.follow')}</h3>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary-foreground/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary-foreground/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary-foreground/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-secondary-foreground/10 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/50">
              © {new Date().getFullYear()} GoFLyt. {t('footer.rights')}
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
