import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageCircle, Sparkles } from 'lucide-react';

export const Popups: React.FC = () => {
  const [showEngagementPopup, setShowEngagementPopup] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    // 1. Engagement Popup after 12 seconds
    const hasSeenEngagement = sessionStorage.getItem('hasSeenEngagementPopup');
    if (!hasSeenEngagement) {
      const timer = setTimeout(() => {
        setShowEngagementPopup(true);
      }, 12000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // 2. Exit Intent Popup (Desktop only)
    const hasSeenExit = sessionStorage.getItem('hasSeenExitPopup');
    if (!hasSeenExit && window.innerWidth >= 1024) {
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 5) {
          setShowExitPopup(true);
          sessionStorage.setItem('hasSeenExitPopup', 'true');
        }
      };
      document.addEventListener('mouseleave', handleMouseLeave);
      return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, []);

  const closeEngagement = () => {
    setShowEngagementPopup(false);
    sessionStorage.setItem('hasSeenEngagementPopup', 'true');
  };

  const closeExit = () => {
    setShowExitPopup(false);
    sessionStorage.setItem('hasSeenExitPopup', 'true');
  };

  return (
    <>
      {/* 1. Engagement Consultation Popup */}
      <AnimatePresence>
        {showEngagementPopup && !showExitPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#210308]/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-md bg-[#3A0710] border-2 border-[#D4A84F] p-6 sm:p-8 rounded-3xl text-center text-[#FFF8E8] shadow-2xl gold-glow"
            >
              <button
                onClick={closeEngagement}
                className="absolute top-3 right-3 p-2 text-[#D4A84F] hover:text-white"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-12 h-12 rounded-full bg-[#650D16] border border-[#D4A84F] flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-[#F2C766]" />
              </div>

              <h3 className="font-cinzel text-2xl font-bold text-[#F2C766] mb-2">
                Need Guidance?
              </h3>

              <p className="text-sm text-[#FFF8E8]/85 mb-6">
                Connect directly with Sri Kanaka Durga Devi Astrology for personal guidance on your concerns.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/919951597968"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeEngagement}
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 rounded-xl shadow-md hover:bg-[#20ba5a]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Us (+91 9951597968)</span>
                </a>

                <a
                  href="tel:+919951597968"
                  onClick={closeEngagement}
                  className="flex items-center justify-center gap-2 border border-[#D4A84F] text-[#F2C766] font-bold py-3 rounded-xl hover:bg-[#D4A84F]/10"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. Desktop Exit Intent Popup */}
      <AnimatePresence>
        {showExitPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#210308]/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="relative w-full max-w-lg bg-[#210308] border-2 border-[#F2C766] p-8 rounded-3xl text-center text-[#FFF8E8] shadow-2xl gold-glow"
            >
              <button
                onClick={closeExit}
                className="absolute top-4 right-4 p-2 text-[#D4A84F] hover:text-white"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              <span className="text-xs font-bold text-[#F2C766] tracking-widest uppercase block mb-2">
                Before You Go
              </span>

              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#FFF8E8] mb-3">
                Would You Like to Discuss Your Concern?
              </h3>

              <p className="text-sm text-[#FFF8E8]/80 mb-6">
                Our 15 years of experience in Hyderabad is available to provide clarity and spiritual direction.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/919951597968"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeExit}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3.5 rounded-xl shadow-md hover:bg-[#20ba5a]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Us</span>
                </a>

                <button
                  onClick={closeExit}
                  className="px-5 py-3.5 text-xs text-[#FFF8E8]/70 hover:text-white uppercase font-bold tracking-wider"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
