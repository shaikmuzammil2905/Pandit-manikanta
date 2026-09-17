import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { Footer } from '../components/Footer';
import { FloatingActionButtons } from '../components/FloatingActionButtons';
import { Popups } from '../components/Popups';
import { SEO } from '../components/SEO';

export const WhyChooseUsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#210308] text-[#FFF8E8] relative selection:bg-[#D4A84F] selection:text-[#210308]">
      <SEO 
        title="Why Choose Sri Kanaka Durga Devi Astrology | Hyderabad Astrologer"
        description="Learn why Astrologer Manikanta is the trusted spiritual guide for people in Hyderabad seeking solutions for life's difficult moments."
        url="/why-choose-us"
      />
      <Header />
      <main className="pt-20 sm:pt-24">
        <WhyChooseUs />
        <ConsultationCTA />
      </main>
      <Footer />
      <FloatingActionButtons />
      <Popups />
    </div>
  );
};

export default WhyChooseUsPage;
