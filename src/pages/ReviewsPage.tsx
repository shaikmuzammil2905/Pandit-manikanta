import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { Reviews } from '../components/Reviews';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { Footer } from '../components/Footer';
import { FloatingActionButtons } from '../components/FloatingActionButtons';
import { Popups } from '../components/Popups';
import { SEO } from '../components/SEO';

export const ReviewsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#210308] text-[#FFF8E8] relative selection:bg-[#D4A84F] selection:text-[#210308]">
      <SEO 
        title="Client Reviews & Testimonials | Sri Kanaka Durga Devi Astrology"
        description="Read what our clients say about Astrologer Manikanta. Genuine reviews from people who found clarity and solutions for their life problems."
        url="/reviews"
      />
      <Header />
      <main className="pt-20 sm:pt-24">
        <Reviews />
        <ConsultationCTA />
      </main>
      <Footer />
      <FloatingActionButtons />
      <Popups />
    </div>
  );
};

export default ReviewsPage;
