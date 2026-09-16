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
