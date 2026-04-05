import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react';

import photo1 from '../assets/3Y2A9181.JPG';
import photo2 from '../assets/photo_2026-04-05_01-59-12.jpg';
import photo3 from '../assets/photo_2026-04-05_02-00-48.jpg';
import photo4 from '../assets/3Y2A9361.JPG';
import photo5 from '../assets/3Y2A9363.JPG';
import photo6 from '../assets/3Y2A9368.JPG';
import photo7 from '../assets/3Y2A9375.JPG';
import photo8 from '../assets/3Y2A9501 (1).JPG';

const photos = [
  { id: 1, src: photo1, alt: 'Mahlet and Zenaneh 1' },
  { id: 2, src: photo4, alt: 'Mahlet and Zenaneh 2' },
  { id: 3, src: photo5, alt: 'Mahlet and Zenaneh 3' },
  { id: 4, src: photo6, alt: 'Mahlet and Zenaneh 4' },
  { id: 5, src: photo7, alt: 'Mahlet and Zenaneh 5' },
  { id: 6, src: photo8, alt: 'Mahlet and Zenaneh 6' },
  { id: 7, src: photo2, alt: 'Mahlet and Zenaneh 7' },
  { id: 8, src: photo3, alt: 'Mahlet and Zenaneh 8' },
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (selectedPhoto) return; // Pause auto-slide if lightbox is open
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [selectedPhoto, currentIndex]);

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-wedding-text mb-4">Captured Moments</h2>
          <div className="w-16 h-1 bg-wedding-gold mx-auto mb-6"></div>
          <p className="text-wedding-text/70 max-w-2xl mx-auto font-light">
            A glimpse into our favorite memories together. Each photograph holds a special place in our hearts.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/3] md:aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl group bg-wedding-beige border border-wedding-gold/20"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-1000"
              onClick={() => setSelectedPhoto(photos[currentIndex])}
            />
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute inset-0 bg-black/opacity-0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
          
          <button
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-wedding-gold transition-all duration-300 opacity-0 group-hover:opacity-100 z-10 border border-white/50"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-wedding-gold transition-all duration-300 opacity-0 group-hover:opacity-100 z-10 border border-white/50"
          >
            <ChevronRight size={24} />
          </button>

          {/* Center Expand Icon */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white/30 backdrop-blur-sm p-4 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/40 scale-75 group-hover:scale-100 hidden md:flex">
              <Expand size={32} />
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {photos.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                className={`transition-all duration-500 rounded-full ${
                  idx === currentIndex 
                    ? 'w-8 h-2 bg-wedding-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]' 
                    : 'w-2 h-2 bg-white/60 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedPhoto(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedPhoto(null)}
            >
              <X size={36} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
