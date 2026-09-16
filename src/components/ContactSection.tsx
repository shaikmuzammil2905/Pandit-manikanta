import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Mail, Send, CheckCircle } from 'lucide-react';
import { ConsultationFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    phone: '',
    dob: '',
    tob: '',
    pob: '',
    service: '',
    concern: '',
  });

  const [errors, setErrors] = useState<Partial<ConsultationFormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const servicesList = [
    'Vasikaranam',
    'Health Problems',
    'Love Problems',
    'Marriage Problems',
    'Court Problems',
    'Black Magic Removal',
    'Wife and Husband Problems',
  ];

  const validate = () => {
    const errs: Partial<ConsultationFormData> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.phone.trim()) errs.phone = 'Phone / WhatsApp is required';
    if (!formData.service) errs.service = 'Please select a service';
    if (!formData.concern.trim()) errs.concern = 'Please describe your concern';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build formatted WhatsApp message
    const message = `Hello Sri Kanaka Durga Devi Astrology,

Name: ${formData.fullName}
Phone: ${formData.phone}
Service: ${formData.service}
Date of Birth: ${formData.dob || 'N/A'}
Time of Birth: ${formData.tob || 'N/A'}
Place of Birth: ${formData.pob || 'N/A'}

Concern:
${formData.concern}

I would like to discuss my concern.`;

    const encodedMsg = encodeURIComponent(message);
    const waUrl = `https://wa.me/919951597968?text=${encodedMsg}`;

    setSubmitted(true);

    // Redirect to WhatsApp
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 400);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FFF8E8] text-[#210308] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Get in Touch Contact Details (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <div className="mb-8">
              <span className="text-xs font-bold text-[#650D16] uppercase tracking-widest block mb-1">
                Reach Out
              </span>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#3A0710] mb-3">
                Get in Touch
              </h2>
              <p className="text-base text-[#210308]/80">
                We are here to help you find clarity and peace in your life.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-6 w-full mb-10">
              
              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#D4A84F]/30 shadow-sm">
                <div className="p-3 rounded-full bg-[#FFF8E8] text-[#650D16] shrink-0 border border-[#D4A84F]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#650D16] uppercase block">Location</span>
                  <span className="text-base font-bold text-[#3A0710]">Hyderabad, Telangana, India</span>
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:+919951597968"
                className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#D4A84F]/30 shadow-sm hover:border-[#650D16] transition-colors group"
              >
                <div className="p-3 rounded-full bg-[#FFF8E8] text-[#650D16] shrink-0 border border-[#D4A84F] group-hover:bg-[#3A0710] group-hover:text-[#F2C766] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#650D16] uppercase block">Phone / Call</span>
                  <span className="text-base font-bold text-[#3A0710] group-hover:text-[#650D16] transition-colors">
                    +91 9951597968
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919951597968"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#D4A84F]/30 shadow-sm hover:border-[#25D366] transition-colors group"
              >
                <div className="p-3 rounded-full bg-[#25D366]/10 text-[#25D366] shrink-0 border border-[#25D366]/40 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#25D366] uppercase block">WhatsApp</span>
                  <span className="text-base font-bold text-[#3A0710] group-hover:text-[#25D366] transition-colors">
                    +91 9951597968
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:manikantaraju049@gmail.com"
                className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#D4A84F]/30 shadow-sm hover:border-[#650D16] transition-colors group"
              >
                <div className="p-3 rounded-full bg-[#FFF8E8] text-[#650D16] shrink-0 border border-[#D4A84F] group-hover:bg-[#3A0710] group-hover:text-[#F2C766] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="break-all">
                  <span className="text-xs font-semibold text-[#650D16] uppercase block">Email Address</span>
                  <span className="text-base font-bold text-[#3A0710] group-hover:text-[#650D16] transition-colors">
                    manikantaraju049@gmail.com
                  </span>
                </div>
              </a>

            </div>

            {/* Bottom Emblem Brand Line Art */}
            <div className="mt-auto w-full pt-6 border-t border-[#D4A84F]/40 flex flex-col items-center text-center">
              <img src="/assets/logo.png" alt="Emblem" className="w-12 h-12 mb-2 rounded-full border border-[#D4A84F]" />
              <span className="font-cinzel font-bold text-base text-[#3A0710]">
                Sri Kanaka Durga Devi Astrology
              </span>
              <span className="text-xs text-[#210308]/70">
                15 Years of Guidance • Hyderabad
              </span>
            </div>

          </motion.div>

          {/* Right Column: Request a Consultation Form (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#D4A84F]/40 shadow-xl"
          >
            <div className="mb-6">
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#3A0710] mb-1">
                Request a Consultation
              </h3>
              <p className="text-xs sm:text-sm text-[#210308]/70">
                Fill in your details and we will get back to you promptly.
              </p>
            </div>

            {submitted ? (
              <div className="bg-[#FFF8E8] border-2 border-[#D4A84F] p-6 rounded-2xl text-center space-y-3 my-6 animate-in fade-in">
                <CheckCircle className="w-12 h-12 text-[#25D366] mx-auto" />
                <h4 className="font-cinzel font-bold text-xl text-[#3A0710]">
                  Consultation Request Sent!
                </h4>
                <p className="text-sm text-[#210308]/80">
                  Opening WhatsApp to finalize your consultation message with Sri Kanaka Durga Devi Astrology...
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-bold text-[#650D16] underline"
                >
                  Submit Another Consultation Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-[#3A0710] uppercase mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A84F] ${
                      errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50/50'
                    }`}
                  />
                  {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-bold text-[#3A0710] uppercase mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A84F] ${
                      errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50/50'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>

                {/* DOB & TOB Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#3A0710] uppercase mb-1">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A84F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3A0710] uppercase mb-1">
                      Time of Birth
                    </label>
                    <input
                      type="time"
                      value={formData.tob}
                      onChange={(e) => setFormData({ ...formData, tob: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A84F]"
                    />
                  </div>
                </div>

                {/* Place of Birth */}
                <div>
                  <label className="block text-xs font-bold text-[#3A0710] uppercase mb-1">
                    Place of Birth
                  </label>
                  <input
                    type="text"
                    placeholder="City, State"
                    value={formData.pob}
                    onChange={(e) => setFormData({ ...formData, pob: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A84F]"
                  />
                </div>

                {/* Service Required */}
                <div>
                  <label className="block text-xs font-bold text-[#3A0710] uppercase mb-1">
                    Service Required *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A84F] ${
                      errors.service ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50/50'
                    }`}
                  >
                    <option value="">Select a service</option>
                    {servicesList.map((svc) => (
                      <option key={svc} value={svc}>
                        {svc}
                      </option>
                    ))}
                  </select>
                  {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service}</p>}
                </div>

                {/* Your Concern */}
                <div>
                  <label className="block text-xs font-bold text-[#3A0710] uppercase mb-1">
                    Your Concern *
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your concern..."
                    value={formData.concern}
                    onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A84F] ${
                      errors.concern ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50/50'
                    }`}
                  />
                  {errors.concern && <p className="text-xs text-red-500 mt-1">{errors.concern}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#3A0710] hover:bg-[#650D16] text-[#F2C766] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-base"
                >
                  <Send className="w-5 h-5 text-[#F2C766]" />
                  <span>Submit Consultation Request</span>
                </button>

              </form>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
};
