import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { MeetAstrologer } from '../components/MeetAstrologer';
import { Services } from '../components/Services';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Reviews } from '../components/Reviews';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { FloatingActionButtons } from '../components/FloatingActionButtons';
import { Popups } from '../components/Popups';
import { SEO } from '../components/SEO';

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sri Kanaka Durga Devi Astrology",
    "image": "https://panditmanikanta.com/assets/hero-bg.jpg",
    "url": "https://panditmanikanta.com",
    "telephone": "+919951597968",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    },
    "areaServed": "Hyderabad",
    "description": "Traditional spiritual and astrological guidance for people seeking clarity through life's difficult moments in Hyderabad."
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Astrologer Manikanta",
    "url": "https://panditmanikanta.com/astrologer",
    "image": "https://panditmanikanta.com/assets/pandit-grand.jpg",
    "jobTitle": "Astrologer",
    "worksFor": {
      "@type": "Organization",
      "name": "Sri Kanaka Durga Devi Astrology"
    },
    "description": "With 15 years of experience, the practice is dedicated to helping people who are facing difficulties and seeking personal spiritual and astrological guidance in Hyderabad."
  }
];

export const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const sectionId = (location.state as any).scrollTo;
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#210308] text-[#FFF8E8] relative selection:bg-[#D4A84F] selection:text-[#210308]">
      <SEO 
        title="Astrologer in Hyderabad | Sri Kanaka Durga Devi Astrology"
        description="Consult an experienced astrologer in Hyderabad for astrology, horoscope, marriage, love, family and personal guidance. Sri Kanaka Durga Devi Astrology offers personalized consultations."
        url="/"
        schema={homeSchema}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <MeetAstrologer />
        <Services />
        <WhyChooseUs />
        <Reviews />
        <ConsultationCTA />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActionButtons />
      <Popups />
    </div>
  );
};

export default HomePage;
