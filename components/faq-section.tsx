"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useLanguage } from '@/lib/language-context'

export function FAQSection() {
  const { t } = useLanguage()

  const faqs = [
    { q: 'faq.q1', a: 'faq.a1' },
    { q: 'faq.q2', a: 'faq.a2' },
    { q: 'faq.q3', a: 'faq.a3' },
    { q: 'faq.q4', a: 'faq.a4' },
    { q: 'faq.q5', a: 'faq.a5' },
  ]

  return (
    <section id="faq" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t('faq.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground py-5 hover:no-underline">
                  {t(faq.q)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {t(faq.a)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
