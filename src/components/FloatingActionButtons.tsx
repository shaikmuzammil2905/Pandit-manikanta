import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export const FloatingActionButtons: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      {/* Call Floating Button */}
      <a
        href="tel:+919951597968"
        className="flex items-center gap-2 bg-[#3A0710] border-2 border-[#D4A84F] text-[#F2C766] px-3.5 py-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6 text-[#F2C766] group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline font-bold text-xs pr-1">Call Now</span>
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919951597968"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-3.5 py-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="w-6 h-6 fill-white group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline font-bold text-xs pr-1">WhatsApp</span>
      </a>
    </div>
  );
};
