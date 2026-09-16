import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Phone, MessageCircle, Sparkles, Send } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FloatingActionButtons } from '../components/FloatingActionButtons';

export const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  const service = servicesData.find((s) => s.id === serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#210308] text-[#FFF8E8] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="font-cinzel text-3xl font-bold text-[#F2C766] mb-4">Service Not Found</h2>
        <p className="text-base text-[#FFF8E8]/80 mb-6">The requested astrological service category does not exist.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-[#3A0710] border border-[#D4A84F] text-[#F2C766] px-6 py-3 rounded-full font-bold"
        >
          Return to Home Page
        </button>
      </div>
    );
  }

  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('fullName') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    const concern = (form.elements.namedItem('concern') as HTMLTextAreaElement).value;

    const message = `Hello Sri Kanaka Durga Devi Astrology,

Service Requested: ${service.title}
Name: ${name}
Phone: ${phone}

Concern:
${concern}

I would like to schedule a personal consultation.`;

    window.open(`https://wa.me/919951597968?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#210308] text-[#FFF8E8] relative">
      <Header />

      <main className="pt-24 sm:pt-28 pb-16">
        
        {/* Back Link */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#F2C766] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Main Page</span>
          </Link>
        </div>

        {/* Hero Banner with Pictorial Representation */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="relative h-64 sm:h-96 rounded-3xl overflow-hidden border-2 border-[#D4A84F] shadow-2xl gold-glow">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#210308] via-[#210308]/60 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#650D16]/90 border border-[#F2C766] mb-3">
                <Sparkles className="w-4 h-4 text-[#F2C766]" />
                <span className="text-xs font-bold text-[#F2C766] uppercase tracking-wider">
                  Specialized Service
                </span>
              </div>
              <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F2C766] mb-2 drop-shadow-lg">
                {service.title}
              </h1>
              <p className="text-sm sm:text-lg text-[#FFF8E8] font-medium drop-shadow">
                {service.shortDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Detailed Explanation & Benefits (lg:col-span-7) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="bg-[#3A0710]/90 p-6 sm:p-8 rounded-3xl border border-[#D4A84F]/40 shadow-xl">
                <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F2C766] mb-4">
                  Astrological Overview & Guidance
                </h2>
                <p className="text-base sm:text-lg text-[#FFF8E8]/90 leading-relaxed font-normal mb-6">
                  {service.fullDesc}
                </p>

                <h3 className="font-cinzel text-xl font-bold text-[#F2C766] mb-4">
                  Key Benefits & Astrological Aspects:
                </h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base text-[#FFF8E8]">
                      <CheckCircle2 className="w-5 h-5 text-[#F2C766] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Actions */}
              <div className="bg-[#650D16]/50 p-6 rounded-3xl border border-[#D4A84F]/40 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div>
                  <h4 className="font-cinzel text-lg font-bold text-[#F2C766]">Need Immediate Assistance?</h4>
                  <p className="text-xs text-[#FFF8E8]/80">Connect directly with Astrologer Manikanta</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://wa.me/919951597968"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full font-bold text-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="tel:+919951597968"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 border border-[#D4A84F] text-[#F2C766] px-5 py-3 rounded-full font-bold text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Dedicated Consultation Form (lg:col-span-5) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 bg-white text-[#210308] p-6 sm:p-8 rounded-3xl border-2 border-[#D4A84F] shadow-2xl h-fit"
            >
              <h3 className="font-cinzel text-2xl font-bold text-[#3A0710] mb-2">
                Consult for {service.title}
              </h3>
              <p className="text-xs text-[#210308]/75 mb-6">
                Fill out the form below to receive dedicated guidance.
              </p>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#3A0710] uppercase mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#D4A84F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3A0710] uppercase mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#D4A84F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3A0710] uppercase mb-1">Your Concern *</label>
                  <textarea
                    name="concern"
                    rows={4}
                    required
                    placeholder={`Describe your concern regarding ${service.title}...`}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#D4A84F]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#3A0710] hover:bg-[#650D16] text-[#F2C766] font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4 text-[#F2C766]" />
                  <span>Request Consultation</span>
                </button>
              </form>
            </motion.div>

          </div>
        </div>

      </main>

      <Footer />
      <FloatingActionButtons />
    </div>
  );
};
