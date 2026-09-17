import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { Services } from '../components/Services';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { Footer } from '../components/Footer';
import { FloatingActionButtons } from '../components/FloatingActionButtons';
import { Popups } from '../components/Popups';
import { SEO } from '../components/SEO';

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#210308] text-[#FFF8E8] relative selection:bg-[#D4A84F] selection:text-[#210308]">
      <SEO 
        title="Astrology Services in Hyderabad | Sri Kanaka Durga Devi Astrology"
        description="Explore our traditional astrology services in Hyderabad including Vasikaranam, Love, Marriage, Health, and Court problem solutions by Astrologer Manikanta."
        url="/services"
      />
      <Header />
      <main className="pt-20 sm:pt-24">
        <Services />
        <ConsultationCTA />
      </main>
      <Footer />
      <FloatingActionButtons />
      <Popups />
    </div>
  );
};

export default ServicesPage;
