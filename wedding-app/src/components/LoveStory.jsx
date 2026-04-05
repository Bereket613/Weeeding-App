import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Stars } from 'lucide-react';

const storyEvents = [
  {
    year: '2019',
    title: 'First Meeting',
    description: 'Our paths crossed for the first time. What started as a simple friendship quickly bloomed into something deeply special.',
    icon: <Heart size={24} className="text-wedding-gold" />,
    align: 'left'
  },
  {
    year: '2023',
    title: 'The Engagement',
    description: 'A beautiful evening filled with joy and a very special question. We promised to spend the rest of our lives together.',
    icon: <Stars size={24} className="text-wedding-gold" />,
    align: 'right'
  },
  {
    year: '2026',
    title: 'Wedding Day',
    description: 'The journey brings us to this wonderful moment, where we will celebrate our love with friends and family.',
    icon: <Heart size={24} className="text-wedding-gold" />, // Changed from Rings to Heart since we imported Heart and Stars
    align: 'left'
  }
];

export default function LoveStory() {
  return (
    <section id="story" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Habesha border top/bottom could be added here */}
      
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-cursive text-wedding-gold mb-4">Our Love Story</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-wedding-gold to-transparent mx-auto mb-6"></div>
          <p className="text-wedding-text/80 max-w-2xl mx-auto font-serif tracking-wide">
            Every love story is beautiful, but ours is our favorite. Here are a few milestones of our journey together.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-px bg-gradient-to-b from-wedding-gold/20 via-wedding-gold to-wedding-gold/20 hidden md:block"></div>

          <div className="flex flex-col gap-16 md:gap-0">
            {storyEvents.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: event.align === 'right' ? 50 : -50, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row items-center md:mb-24 last:mb-0 ${
                  event.align === 'right' ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-16 w-full z-10 group">
                  <div className={`w-full p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow border border-wedding-beige ${event.align === 'right' ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-wedding-gold font-cursive text-3xl mb-2 block">{event.year}</span>
                    <h3 className="text-2xl font-serif text-wedding-text mb-4 uppercase tracking-widest">{event.title}</h3>
                    <p className="text-wedding-text/70 font-light leading-relaxed">{event.description}</p>
                  </div>
                </div>

                {/* Icon Marker */}
                <motion.div 
                  className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-wedding-beige border border-wedding-gold shadow-[0_0_15px_rgba(212,175,55,0.4)] z-20 hidden md:flex"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  {event.icon}
                </motion.div>

                {/* Mobile Icon */}
                <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-wedding-beige border border-wedding-gold shadow-lg z-20 my-6">
                  {event.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
