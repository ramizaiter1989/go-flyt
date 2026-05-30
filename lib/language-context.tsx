"use client"

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

type Language = 'da' | 'en'

interface Translations {
  [key: string]: {
    da: string
    en: string
  }
}

const translations: Translations = {
  // Navigation
  'nav.home': { da: 'Hjem', en: 'Home' },
  'nav.services': { da: 'Ydelser', en: 'Services' },
  'nav.about': { da: 'Om os', en: 'About' },
  'nav.contact': { da: 'Kontakt', en: 'Contact' },
  'nav.calculate': { da: 'Beregn Pris', en: 'Calculate Price' },
  
  // Hero
  'hero.headline': { da: 'Flyt nemt og sikkert med GoFLyt', en: 'Move Easily and Safely with GoFLyt' },
  'hero.subheadline': { da: 'Hurtig, pålidelig og overkommelig flytteservice i hele Danmark. Få en gratis prisberegning på få minutter.', en: 'Fast, reliable, and affordable moving services across Denmark. Get a free price estimate in minutes.' },
  'hero.cta.primary': { da: 'Beregn Pris', en: 'Calculate Price' },
  'hero.cta.secondary': { da: 'Få Tilbud', en: 'Get Quote' },
  
  // Calculator
  'calc.title': { da: 'Beregn Din Flyttepris', en: 'Calculate Your Moving Price' },
  'calc.subtitle': { da: 'Få et øjeblikkeligt prisestimat for din flytning', en: 'Get an instant price estimate for your move' },
  'calc.from': { da: 'Flyt fra', en: 'Move From' },
  'calc.to': { da: 'Flyt til', en: 'Move To' },
  'calc.from.placeholder': { da: 'Indtast adresse...', en: 'Enter address...' },
  'calc.to.placeholder': { da: 'Indtast destination...', en: 'Enter destination...' },
  'calc.property': { da: 'Boligtype', en: 'Property Type' },
  'calc.rooms': { da: 'Antal værelser', en: 'Number of Rooms' },
  'calc.floor': { da: 'Etage', en: 'Floor Level' },
  'calc.elevator': { da: 'Elevator tilgængelig?', en: 'Elevator Available?' },
  'calc.date': { da: 'Flyttedato', en: 'Move Date' },
  'calc.estimate': { da: 'Estimeret Pris', en: 'Estimated Price' },
  'calc.distance': { da: 'Estimeret afstand', en: 'Estimated distance' },
  'calc.cta': { da: 'Få Endeligt Tilbud', en: 'Get Final Quote' },
  'calc.yes': { da: 'Ja', en: 'Yes' },
  'calc.no': { da: 'Nej', en: 'No' },
  
  // Property types
  'property.apartment': { da: 'Lejlighed', en: 'Apartment' },
  'property.house': { da: 'Hus', en: 'House' },
  'property.villa': { da: 'Villa', en: 'Villa' },
  'property.room': { da: 'Værelse', en: 'Room' },
  'property.office': { da: 'Kontor', en: 'Office' },
  
  // Why Choose
  'why.title': { da: 'Hvorfor Vælge GoFLyt?', en: 'Why Choose GoFLyt?' },
  'why.subtitle': { da: 'Vi gør din flytning enkel og problemfri', en: 'We make your move simple and hassle-free' },
  'why.licensed': { da: 'Licenserede Flyttefolk', en: 'Licensed Movers' },
  'why.licensed.desc': { da: 'Alle vores flyttefolk er fuldt uddannede og certificerede', en: 'All our movers are fully trained and certified' },
  'why.insured': { da: 'Forsikret Transport', en: 'Insured Transportation' },
  'why.insured.desc': { da: 'Dine ejendele er fuldt forsikret under hele flytningen', en: 'Your belongings are fully insured throughout the move' },
  'why.fast': { da: 'Hurtig Booking', en: 'Fast Booking' },
  'why.fast.desc': { da: 'Book din flytning online på få minutter', en: 'Book your move online in just minutes' },
  'why.transparent': { da: 'Gennemsigtige Priser', en: 'Transparent Pricing' },
  'why.transparent.desc': { da: 'Ingen skjulte gebyrer - det du ser er det du betaler', en: 'No hidden fees - what you see is what you pay' },
  'why.support': { da: 'Kundesupport', en: 'Customer Support' },
  'why.support.desc': { da: 'Vi er her for dig før, under og efter din flytning', en: 'We are here for you before, during, and after your move' },
  
  // Services
  'services.title': { da: 'Vores Ydelser', en: 'Our Services' },
  'services.subtitle': { da: 'Professionelle flytteløsninger til alle behov', en: 'Professional moving solutions for every need' },
  'services.private': { da: 'Privatflytning', en: 'Private Moving' },
  'services.private.desc': { da: 'Skræddersyet flytning til private kunder', en: 'Tailored moving for private customers' },
  'services.apartment': { da: 'Lejlighedsflytning', en: 'Apartment Moving' },
  'services.apartment.desc': { da: 'Specialiseret i lejlighedsflytninger', en: 'Specialized in apartment relocations' },
  'services.house': { da: 'Husflytning', en: 'House Moving' },
  'services.house.desc': { da: 'Komplet husflytning med omsorg', en: 'Complete house moving with care' },
  'services.office': { da: 'Kontorflytning', en: 'Office Relocation' },
  'services.office.desc': { da: 'Effektiv erhvervsflytning med minimal nedetid', en: 'Efficient business moving with minimal downtime' },
  'services.furniture': { da: 'Møbeltransport', en: 'Furniture Transport' },
  'services.furniture.desc': { da: 'Sikker transport af enkelte møbler', en: 'Safe transport of individual furniture' },
  'services.international': { da: 'International Flytning', en: 'International Moving' },
  'services.international.desc': { da: 'Flytning på tværs af grænser', en: 'Moving across borders' },
  'services.learn': { da: 'Læs mere', en: 'Learn more' },
  
  // How it works
  'how.title': { da: 'Sådan Fungerer Det', en: 'How It Works' },
  'how.subtitle': { da: 'Tre enkle trin til din stressfrie flytning', en: 'Three simple steps to your stress-free move' },
  'how.step1.title': { da: 'Beregn Din Pris', en: 'Calculate Your Price' },
  'how.step1.desc': { da: 'Brug vores online beregner til at få et øjeblikkeligt prisestimat', en: 'Use our online calculator to get an instant price estimate' },
  'how.step2.title': { da: 'Modtag Tilbud', en: 'Receive Quote' },
  'how.step2.desc': { da: 'Vi sender dig et detaljeret og bindende tilbud', en: 'We send you a detailed and binding quote' },
  'how.step3.title': { da: 'Flyt Stressfrit', en: 'Move Stress-Free' },
  'how.step3.desc': { da: 'Vi tager os af alt - du skal bare slappe af', en: 'We take care of everything - you just relax' },
  
  // Reviews
  'reviews.title': { da: 'Hvad Vores Kunder Siger', en: 'What Our Customers Say' },
  'reviews.subtitle': { da: 'Læs anmeldelser fra tilfredse kunder', en: 'Read reviews from satisfied customers' },
  
  // Quote Form
  'quote.title': { da: 'Få Et Gratis Tilbud', en: 'Get A Free Quote' },
  'quote.subtitle': { da: 'Udfyld formularen, og vi kontakter dig inden for 24 timer', en: 'Fill out the form and we will contact you within 24 hours' },
  'quote.name': { da: 'Navn', en: 'Name' },
  'quote.phone': { da: 'Telefon', en: 'Phone' },
  'quote.email': { da: 'Email', en: 'Email' },
  'quote.pickup': { da: 'Afhentningsadresse', en: 'Pickup Address' },
  'quote.destination': { da: 'Leveringsadresse', en: 'Destination Address' },
  'quote.date': { da: 'Ønsket flyttedato', en: 'Preferred Move Date' },
  'quote.notes': { da: 'Yderligere bemærkninger', en: 'Additional Notes' },
  'quote.submit': { da: 'Send Forespørgsel', en: 'Submit Request' },
  'quote.success': { da: 'Tak! Vi kontakter dig snart.', en: 'Thank you! We will contact you soon.' },
  
  // FAQ
  'faq.title': { da: 'Ofte Stillede Spørgsmål', en: 'Frequently Asked Questions' },
  'faq.subtitle': { da: 'Find svar på de mest almindelige spørgsmål', en: 'Find answers to the most common questions' },
  'faq.q1': { da: 'Hvor langt i forvejen skal jeg booke?', en: 'How far in advance should I book?' },
  'faq.a1': { da: 'Vi anbefaler at booke mindst 2-4 uger før din ønskede flyttedato. I spidsbelastningsperioder som månedsafslutning kan det være en fordel at booke endnu tidligere.', en: 'We recommend booking at least 2-4 weeks before your desired move date. During peak periods like month-end, it may be beneficial to book even earlier.' },
  'faq.q2': { da: 'Er mine ejendele forsikret under flytningen?', en: 'Are my belongings insured during the move?' },
  'faq.a2': { da: 'Ja, alle flytninger med GoFLyt er dækket af vores omfattende flytteforsikring. Vi dækker eventuelle skader der måtte opstå under transporten.', en: 'Yes, all moves with GoFLyt are covered by our comprehensive moving insurance. We cover any damages that may occur during transport.' },
  'faq.q3': { da: 'Tilbyder I pakningsmaterialer?', en: 'Do you offer packing materials?' },
  'faq.a3': { da: 'Ja, vi tilbyder et komplet sortiment af pakningsmaterialer inklusiv flyttekasser, bobleplast, tape og beskyttelsesmaterialer. Disse kan tilkøbes eller lejes.', en: 'Yes, we offer a complete range of packing materials including moving boxes, bubble wrap, tape, and protective materials. These can be purchased or rented.' },
  'faq.q4': { da: 'Kan I flytte klaverer og andre tunge genstande?', en: 'Can you move pianos and other heavy items?' },
  'faq.a4': { da: 'Absolut! Vi har specialudstyr og erfarne folk til at håndtere tunge og skrøbelige genstande som klaverer, pengeskabe og kunstværker.', en: 'Absolutely! We have specialized equipment and experienced staff to handle heavy and fragile items such as pianos, safes, and artwork.' },
  'faq.q5': { da: 'Hvad er jeres afbestillingspolitik?', en: 'What is your cancellation policy?' },
  'faq.a5': { da: 'Du kan afbestille gratis op til 48 timer før den planlagte flytning. Ved senere afbestilling opkræves et gebyr på 25% af det aftalte beløb.', en: 'You can cancel for free up to 48 hours before the scheduled move. For later cancellations, a fee of 25% of the agreed amount is charged.' },
  
  // Footer
  'footer.description': { da: 'GoFLyt er Danmarks foretrukne flytteservice. Vi tilbyder professionel, forsikret og pålidelig flytning til konkurrencedygtige priser.', en: 'GoFLyt is Denmark\'s preferred moving service. We offer professional, insured, and reliable moving at competitive prices.' },
  'footer.quicklinks': { da: 'Hurtige Links', en: 'Quick Links' },
  'footer.contact': { da: 'Kontakt', en: 'Contact' },
  'footer.follow': { da: 'Følg Os', en: 'Follow Us' },
  'footer.privacy': { da: 'Privatlivspolitik', en: 'Privacy Policy' },
  'footer.terms': { da: 'Handelsbetingelser', en: 'Terms of Service' },
  'footer.rights': { da: 'Alle rettigheder forbeholdes.', en: 'All rights reserved.' },
  
  // Trust badges
  'trust.moves': { da: 'Gennemførte Flytninger', en: 'Completed Moves' },
  'trust.rating': { da: 'Kundetilfredshed', en: 'Customer Satisfaction' },
  'trust.years': { da: 'Års Erfaring', en: 'Years Experience' },
  'trust.insured': { da: 'Fuldt Forsikret', en: 'Fully Insured' },
  
  // Mobile nav
  'mobile.home': { da: 'Hjem', en: 'Home' },
  'mobile.calc': { da: 'Beregn', en: 'Calculate' },
  'mobile.services': { da: 'Ydelser', en: 'Services' },
  'mobile.quote': { da: 'Tilbud', en: 'Quote' },
  
  // Welcome Popup
  'popup.title': { da: 'Velkommen til GoFLyt!', en: 'Welcome to GoFLyt!' },
  'popup.subtitle': { da: 'Lad os hjælpe dig med din næste flytning', en: 'Let us help you with your next move' },
  'popup.message': { da: 'Udfyld formularen nedenfor, og vores team kontakter dig inden for få minutter med et personligt tilbud.', en: 'Fill out the form below, and our team will contact you within minutes with a personalized quote.' },
  'popup.cta': { da: 'Få Gratis Tilbud Nu', en: 'Get Free Quote Now' },
  'popup.close': { da: 'Måske senere', en: 'Maybe later' },
  'popup.promise': { da: 'Vi svarer inden for få minutter!', en: 'We reply within minutes!' },
  'popup.team': { da: 'Dit tilbud bliver personligt gennemgået af vores erfarne team', en: 'Your quote will be personally reviewed by our experienced team' },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('da')
  
  const t = useCallback((key: string): string => {
    const translation = translations[key]
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`)
      return key
    }
    return translation[language]
  }, [language])
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
