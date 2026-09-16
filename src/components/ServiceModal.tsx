import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageCircle, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#210308]/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-xl bg-[#3A0710] border-2 border-[#D4A84F] rounded-2xl p-6 sm:p-8 text-[#FFF8E8] shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto gold-glow"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-[#F2C766] hover:bg-[#650D16] transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Header */}
          <div className="mb-6">
            <span className="text-xs font-semibold text-[#D4A84F] uppercase tracking-widest block mb-1">
              Astrological Service Detail
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#F2C766]">
              {service.title}
            </h3>
          </div>

          {/* Short Explanation */}
          <p className="text-base text-[#FFF8E8]/90 font-medium mb-4 italic bg-[#650D16]/50 p-3.5 rounded-xl border-l-4 border-[#F2C766]">
            "{service.shortDesc}"
          </p>

          {/* Full Description */}
          <p className="text-sm sm:text-base text-[#FFF8E8]/80 leading-relaxed mb-6">
            {service.fullDesc}
          </p>

          {/* Key Aspects / Benefits */}
          <div className="mb-8">
            <h4 className="text-sm font-bold text-[#F2C766] uppercase tracking-wider mb-3 font-cinzel">
              What We Offer in This Consultation:
            </h4>
            <ul className="space-y-2.5">
              {service.benefits.map((b, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#FFF8E8]/90">
                  <CheckCircle2 className="w-4 h-4 text-[#F2C766] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Actions */}
          <div className="pt-4 border-t border-[#D4A84F]/30 flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+919951597968"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#F2C766] to-[#D4A84F] text-[#210308] font-bold py-3 rounded-xl shadow-md hover:scale-102 transition-transform text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>

            <a
              href={`https://wa.me/919951597968?text=${encodeURIComponent(`Hello Sri Kanaka Durga Devi Astrology, I would like to inquire about ${service.title}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 rounded-xl shadow-md hover:scale-102 transition-transform text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Now</span>
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
