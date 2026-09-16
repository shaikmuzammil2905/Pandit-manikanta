import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#210308] text-[#FFF8E8] border-t border-[#D4A84F]/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/assets/logo.png" alt="Logo" className="w-10 h-10 rounded-full border border-[#D4A84F]" />
              <div className="flex flex-col">
                <span className="font-cinzel font-bold text-lg text-[#F2C766]">
                  Sri Kanaka Durga Devi
                </span>
                <span className="text-[10px] text-[#D4A84F] tracking-widest uppercase">
                  — Astrology —
                </span>
              </div>
            </div>
            <p className="text-sm text-[#FFF8E8]/75 leading-relaxed">
              15 Years of Spiritual Guidance in Hyderabad. Providing clarity and support through life's difficult moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel font-bold text-base text-[#F2C766] uppercase mb-4 tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-[#FFF8E8]/80 hover:text-[#F2C766] transition-colors">Home Page</Link>
              </li>
              <li>
                <Link to="/about" className="text-[#FFF8E8]/80 hover:text-[#F2C766] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-[#FFF8E8]/80 hover:text-[#F2C766] transition-colors">All Services</Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="text-[#FFF8E8]/80 hover:text-[#F2C766] transition-colors">Why Choose Us</Link>
              </li>
              <li>
                <Link to="/reviews" className="text-[#FFF8E8]/80 hover:text-[#F2C766] transition-colors">Devotee Reviews</Link>
              </li>
              <li>
                <Link to="/astrologer" className="text-[#FFF8E8]/80 hover:text-[#F2C766] transition-colors">Astrologer Manikanta</Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#FFF8E8]/80 hover:text-[#F2C766] transition-colors">Contact & Consultation</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-cinzel font-bold text-base text-[#F2C766] uppercase mb-4 tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4A84F]" />
                <a href="tel:+919951597968" className="hover:text-[#F2C766] transition-colors">+91 9951597968</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />
                <a href="https://wa.me/919951597968" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">+91 9951597968</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4A84F]" />
                <a href="mailto:manikantaraju049@gmail.com" className="hover:text-[#F2C766] transition-colors break-all">manikantaraju049@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Direct Action Buttons */}
          <div>
            <h4 className="font-cinzel font-bold text-base text-[#F2C766] uppercase mb-4 tracking-wider">
              Instant Guidance
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/919951597968"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-2.5 rounded-xl font-semibold text-sm shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Consultation</span>
              </a>

              <a
                href="tel:+919951597968"
                className="flex items-center justify-center gap-2 border border-[#D4A84F] text-[#F2C766] hover:bg-[#D4A84F]/10 py-2.5 rounded-xl font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Line */}
        <div className="pt-8 border-t border-[#D4A84F]/20 text-center text-xs text-[#FFF8E8]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Sri Kanaka Durga Devi Astrology. All rights reserved.</p>
          <p className="text-[#D4A84F]/80 font-cinzel">Hyderabad, Telangana, India</p>
        </div>

      </div>
    </footer>
  );
};
