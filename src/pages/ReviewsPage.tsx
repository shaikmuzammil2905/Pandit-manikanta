import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { Reviews } from '../components/Reviews';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { Footer } from '../components/Footer';
import { FloatingActionButtons } from '../components/FloatingActionButtons';
import { Popups } from '../components/Popups';

export const ReviewsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#210308] text-[#FFF8E8] relative selection:bg-[#D4A84F] selection:text-[#210308]">
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
