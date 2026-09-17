import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { MeetAstrologer } from '../components/MeetAstrologer';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { Footer } from '../components/Footer';
import { FloatingActionButtons } from '../components/FloatingActionButtons';
import { Popups } from '../components/Popups';
import { SEO } from '../components/SEO';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#210308] text-[#FFF8E8] relative selection:bg-[#D4A84F] selection:text-[#210308]">
      <SEO 
        title="About Astrologer Manikanta | Sri Kanaka Durga Devi Astrology"
        description="Learn about Astrologer Manikanta in Hyderabad. Providing dedicated spiritual guidance, astrology consultations, and remedies with 15 years of experience."
        url="/about"
      />
      <Header />
      <main className="pt-20 sm:pt-24">
        <About />
        <MeetAstrologer />
        <ConsultationCTA />
      </main>
      <Footer />
      <FloatingActionButtons />
      <Popups />
    </div>
  );
};

export default AboutPage;
