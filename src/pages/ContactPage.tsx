import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { FloatingActionButtons } from '../components/FloatingActionButtons';
import { Popups } from '../components/Popups';
import { SEO } from '../components/SEO';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#210308] text-[#FFF8E8] relative selection:bg-[#D4A84F] selection:text-[#210308]">
      <SEO 
        title="Contact Astrologer Manikanta in Hyderabad | Sri Kanaka Durga Devi Astrology"
        description="Get in touch with Astrologer Manikanta in Hyderabad for personalized spiritual and astrology consultations. Call or WhatsApp us today."
        url="/contact"
      />
      <Header />
      <main className="pt-20 sm:pt-24">
        <ContactSection />
      </main>
      <Footer />
      <FloatingActionButtons />
      <Popups />
    </div>
  );
};

export default ContactPage;
