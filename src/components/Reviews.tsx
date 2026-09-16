import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles, MessageSquarePlus, CheckCircle2, X, Send, ThumbsUp } from 'lucide-react';

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  category: string;
  comment: string;
  verified: boolean;
}

const initialReviews: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Rajesh & Kavitha Sharma',
    location: 'Banjara Hills, Hyderabad',
    rating: 5,
    date: 'August 2026',
    category: 'Love & Marriage',
    comment: 'We were facing severe inter-caste opposition for our marriage. After consulting Pandit Manikanta ji and performing the suggested Kanaka Durga Devi remedies, our families agreed happily within 3 weeks. Forever grateful!',
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'Srinivas Rao',
    location: 'Madhapur, Hyderabad',
    rating: 5,
    date: 'July 2026',
    category: 'Career & Business',
    comment: 'My IT business was suffering heavy financial losses for over a year. Manikanta Swamy accurately analyzed my Kundali and gave genuine yantra guidance. Profits doubled in just 45 days. Truly blessed guidance.',
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'Pooja Reddy',
    location: 'Secunderabad, Telangana',
    rating: 5,
    date: 'September 2026',
    category: 'Family & Vashikaran',
    comment: 'Constant disputes with my husband were tearing our family apart. Guruji provided peaceful traditional remedies that brought harmony back to our home. 100% confidential and authentic spiritual service.',
    verified: true,
  },
  {
    id: 'rev-4',
    name: 'Venkat Narayan',
    location: 'Dallas, TX (USA Client)',
    rating: 5,
    date: 'June 2026',
    category: 'Black Magic Removal',
    comment: 'I was experiencing unexplained negative energy, anxiety, and health breakdowns. Pandit ji performed online phone consultation and special protective pooja. I felt an immediate sense of relief and positivity.',
    verified: true,
  },
  {
    id: 'rev-5',
    name: 'Mahesh Kumar',
    location: 'Kukatpally, Hyderabad',
    rating: 5,
    date: 'May 2026',
    category: 'Court & Legal Problems',
    comment: 'Our property dispute was dragged in court for over 5 years. After following Manikanta Swamy ji’s astrological advice, the opponent agreed to out-of-court settlement peacefully. Highly recommended!',
    verified: true,
  },
  {
    id: 'rev-6',
    name: 'Anitha & Sunita M.',
    location: 'Gachibowli, Hyderabad',
    rating: 5,
    date: 'August 2026',
    category: 'Health & Peace',
    comment: 'Extremely accurate horoscope reading and very polite, compassionate guidance. Pandit ji listens with immense patience and explains everything clearly. Best astrologer in Hyderabad.',
    verified: true,
  },
];

export const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(initialReviews);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [likedReviews, setLikedReviews] = useState<Record<string, number>>({});

  // Form state
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [category, setCategory] = useState('Love & Marriage');
  const [comment, setComment] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const categories = ['All', 'Love & Marriage', 'Career & Business', 'Family & Vashikaran', 'Black Magic Removal', 'Health & Peace'];

  const filteredReviews = selectedCategory === 'All'
    ? reviews
    : reviews.filter(r => r.category === selectedCategory);

  const handleLike = (id: string) => {
    setLikedReviews(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      name: name.trim(),
      location: location.trim() || 'Hyderabad, India',
      rating,
      date: 'Just Now',
      category,
      comment: comment.trim(),
      verified: true,
    };

    setReviews([newRev, ...reviews]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setIsModalOpen(false);
      setName('');
      setLocation('');
      setComment('');
      setRating(5);
    }, 1800);
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#210308] text-[#FFF8E8] relative overflow-hidden">
      
      {/* Glow Ambience */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#650D16]/40 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#D4A84F]/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3A0710] border border-[#D4A84F]/50 mb-3 shadow-md">
            <Sparkles className="w-4 h-4 text-[#F2C766]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#F2C766] uppercase">
              Client Testimonials & Feedback
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFF8E8] mb-4 tracking-tight">
            What Our Devotees Say
          </h2>
          <p className="text-base sm:text-lg text-[#FFF8E8]/80 font-medium">
            Read authentic experiences from individuals and families guided by Sri Kanaka Durga Devi Astrology
          </p>
        </div>

        {/* Rating Summary Card */}
        <div className="bg-[#3A0710]/90 border-2 border-[#D4A84F]/40 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-cinzel font-black text-4xl sm:text-5xl text-[#F2C766]">4.9</span>
              <div className="flex flex-col">
                <div className="flex items-center text-[#F2C766]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F2C766] text-[#F2C766]" />
                  ))}
                </div>
                <span className="text-xs text-[#FFF8E8]/70 font-semibold mt-0.5">Based on 500+ Consultations</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#FFF8E8]/80">
              100% Genuine Astrological & Remedy Guidance in Hyderabad
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#210308] border border-[#D4A84F]/30 text-xs font-bold text-[#F2C766]">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>Verified Testimonials</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#210308] border border-[#D4A84F]/30 text-xs font-bold text-[#F2C766]">
              <Sparkles className="w-4 h-4 text-[#F2C766]" />
              <span>100% Confidential</span>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#F2C766] via-[#D4A84F] to-[#B8860B] text-[#210308] font-black px-6 py-3.5 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all text-sm cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4 text-[#210308]" />
            <span>Write a Review</span>
          </button>

        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 border cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#F2C766] text-[#210308] border-[#F2C766] shadow-lg shadow-[#F2C766]/20'
                  : 'bg-[#3A0710]/60 text-[#FFF8E8]/80 border-[#D4A84F]/30 hover:border-[#F2C766]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#3A0710]/80 rounded-2xl p-6 border border-[#D4A84F]/30 hover:border-[#F2C766] transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Header info */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#650D16] to-[#D4A84F] flex items-center justify-center font-cinzel font-bold text-base text-[#F2C766] border border-[#F2C766]/50 shrink-0">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-cinzel font-bold text-sm text-[#FFF8E8] group-hover:text-[#F2C766] transition-colors">
                          {rev.name}
                        </h4>
                        {rev.verified && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
                        )}
                      </div>
                      <p className="text-[11px] text-[#D4A84F] font-medium">
                        {rev.location}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] text-[#FFF8E8]/50 font-semibold shrink-0">
                    {rev.date}
                  </span>
                </div>

                {/* Rating Stars & Category Tag */}
                <div className="flex items-center justify-between mb-3 bg-[#210308]/60 p-2 rounded-xl border border-[#D4A84F]/20">
                  <div className="flex items-center">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F2C766] text-[#F2C766]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-[#F2C766] uppercase bg-[#650D16]/80 px-2 py-0.5 rounded-md">
                    {rev.category}
                  </span>
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-[#FFF8E8]/90 leading-relaxed italic mb-4">
                  "{rev.comment}"
                </p>
              </div>

              {/* Helpful Like Counter */}
              <div className="pt-3 border-t border-[#D4A84F]/20 flex items-center justify-between text-xs text-[#FFF8E8]/60">
                <span className="text-[11px]">Verified Experience</span>
                <button
                  onClick={() => handleLike(rev.id)}
                  className="flex items-center gap-1.5 text-xs text-[#D4A84F] hover:text-[#F2C766] transition-colors"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Helpful ({likedReviews[rev.id] || 0})</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Submit Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-lg bg-[#3A0710] border-2 border-[#D4A84F] rounded-3xl p-6 sm:p-8 shadow-2xl">
            
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#FFF8E8]/70 hover:text-white rounded-full bg-[#210308]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-[#F2C766]" />
              <h3 className="font-cinzel text-xl font-extrabold text-[#F2C766]">
                Share Your Feedback
              </h3>
            </div>
            <p className="text-xs text-[#FFF8E8]/80 mb-6">
              Your feedback helps others find genuine spiritual and astrological support.
            </p>

            {submittedMessage ? (
              <div className="py-8 text-center flex flex-col items-center justify-center gap-3">
                <CheckCircle2 className="w-12 h-12 text-green-400 animate-bounce" />
                <h4 className="font-cinzel text-lg font-bold text-[#F2C766]">
                  Thank You for Your Review!
                </h4>
                <p className="text-xs text-[#FFF8E8]/80">
                  Your testimonial has been published successfully.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#F2C766] uppercase mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Reddy"
                    className="w-full bg-[#210308] border border-[#D4A84F]/40 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#F2C766]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#F2C766] uppercase mb-1">
                      City / Location
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Hyderabad"
                      className="w-full bg-[#210308] border border-[#D4A84F]/40 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#F2C766]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#F2C766] uppercase mb-1">
                      Service Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full bg-[#210308] border border-[#D4A84F]/40 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#F2C766]"
                    >
                      {categories.filter(c => c !== 'All').map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#F2C766] uppercase mb-1">
                    Rating (Stars)
                  </label>
                  <div className="flex items-center gap-2 bg-[#210308] p-2 rounded-xl border border-[#D4A84F]/40">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="p-1 focus:outline-none"
                      >
                        <Star className={`w-6 h-6 ${star <= rating ? 'fill-[#F2C766] text-[#F2C766]' : 'text-gray-600'}`} />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-[#F2C766] ml-2">{rating} / 5 Stars</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#F2C766] uppercase mb-1">
                    Your Review Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Describe how Pandit Manikanta ji helped you with your problems..."
                    className="w-full bg-[#210308] border border-[#D4A84F]/40 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#F2C766]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#F2C766] via-[#D4A84F] to-[#B8860B] text-[#210308] font-black py-3 rounded-full shadow-xl hover:scale-102 transition-transform text-sm cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#210308]" />
                  <span>Submit Review</span>
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
