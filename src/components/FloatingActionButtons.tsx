import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export const FloatingActionButtons: React.FC = () => {
  return (
    <>
      {/* Mobile Floating Action Buttons (compact, bottom corners to avoid covering Goddess Durga artwork) */}
      <div className="md:hidden fixed bottom-3 inset-x-3 z-40 flex items-center justify-between pointer-events-none">
        {/* Call button on bottom left */}
        <a
          href="tel:+919951597968"
          className="pointer-events-auto flex items-center gap-1.5 bg-[#3A0710]/95 border border-[#D4A84F] text-[#F2C766] px-3.5 py-2 rounded-full shadow-2xl backdrop-blur-md active:scale-95 transition-transform"
          aria-label="Call Now"
        >
          <Phone className="w-4 h-4 text-[#F2C766]" />
          <span className="font-bold text-[11px]">Call</span>
        </a>

        {/* WhatsApp button on bottom right */}
        <a
          href="https://wa.me/919951597968"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-3.5 py-2 rounded-full shadow-2xl active:scale-95 transition-transform"
          aria-label="WhatsApp Us"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span className="font-bold text-[11px]">WhatsApp</span>
        </a>
      </div>

      {/* Desktop Floating Action Buttons (>= 768px - 100% untouched) */}
      <div className="hidden md:flex fixed bottom-5 right-5 z-40 flex-col gap-3">
        <a
          href="tel:+919951597968"
          className="flex items-center gap-2 bg-[#3A0710] border-2 border-[#D4A84F] text-[#F2C766] px-3.5 py-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
          aria-label="Call Now"
        >
          <Phone className="w-6 h-6 text-[#F2C766] group-hover:rotate-12 transition-transform" />
          <span className="font-bold text-xs pr-1">Call Now</span>
        </a>

        <a
          href="https://wa.me/919951597968"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-3.5 py-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
          aria-label="WhatsApp Us"
        >
          <MessageCircle className="w-6 h-6 fill-white group-hover:rotate-12 transition-transform" />
          <span className="font-bold text-xs pr-1">WhatsApp</span>
        </a>
      </div>
    </>
  );
};
