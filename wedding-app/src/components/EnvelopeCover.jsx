import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function EnvelopeCover({ onOpen }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpen = () => {
    setIsAnimating(true);
    // The animation takes about 2.5s to complete
    setTimeout(() => {
      if (onOpen) onOpen();
    }, 2800);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#2B2321] overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: isAnimating ? 0 : 1 }}
      transition={{ duration: 1, delay: 2.2 }}
    >
      {/* Background ambient particles */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wedding-gold/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-wedding-lightgold/20 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="relative w-[350px] md:w-[600px] h-[250px] md:h-[400px] perspective-1000"
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* The Envelope Body */}
        <div className="absolute inset-0 bg-[#F4EFEB] rounded-md shadow-2xl overflow-visible border border-wedding-gold/30">
          
          {/* Back of Envelope (Where card slides out of) */}
          <div className="absolute inset-0 bg-[#E8dfd8] rounded-md"></div>

          {/* The Card inside */}
          <motion.div
            className="absolute left-4 right-4 bottom-4 top-4 bg-white rounded shadow-sm flex flex-col items-center justify-center text-center p-6 border border-wedding-gold/20"
            initial={{ y: 0 }}
            animate={isAnimating ? { y: -300, opacity: [1, 1, 0] } : { y: 0 }}
            transition={{ duration: 1.5, delay: 0.8, ease: 'easeInOut' }}
          >
            <h2 className="font-cursive text-3xl md:text-5xl text-wedding-gold mb-2">Mahlet & Zenaneh</h2>
            <p className="font-serif text-sm tracking-widest text-wedding-text uppercase mt-2">Wedding Invitation</p>
          </motion.div>

          {/* Envelope Bottom/Sides Flaps (Creates the pocket) */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Left triangle */}
            <div 
              className="absolute top-0 bottom-0 left-0 right-1/2 bg-[#F4EFEB] border-r border-wedding-gold/20 shadow-[2px_0_10px_rgba(0,0,0,0.05)]"
              style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
            ></div>
            {/* Right triangle */}
            <div 
              className="absolute top-0 bottom-0 left-1/2 right-0 bg-[#F4EFEB] border-l border-wedding-gold/20 shadow-[-2px_0_10px_rgba(0,0,0,0.05)]"
              style={{ clipPath: 'polygon(100% 0, 0 50%, 100% 100%)' }}
            ></div>
            {/* Bottom triangle */}
            <div 
              className="absolute top-1/2 bottom-0 left-0 right-0 bg-[#Fdfaf8] border-t border-wedding-gold/30 shadow-[0_-2px_10px_rgba(0,0,0,0.08)] z-10"
              style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}
            >
              {/* Optional Habesha pattern at the bottom border */}
              <div className="absolute bottom-2 left-1/4 right-1/4 h-1 border-b border-t border-dotted border-wedding-gold/50"></div>
            </div>
          </div>

          {/* Envelope Top Flap */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[60%] bg-[#F4EFEB] shadow-[0_4px_10px_rgba(0,0,0,0.1)] border-b border-wedding-gold/30 z-20 origin-top"
            style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
            initial={{ rotateX: 0 }}
            animate={isAnimating ? { rotateX: 180, zIndex: 0 } : { rotateX: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            {/* Wax Seal */}
            {!isAnimating && (
              <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 translate-y-[-10px] w-12 h-12 bg-wedding-gold rounded-full shadow-md flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="font-serif text-white text-lg">MZ</span>
              </div>
            )}
          </motion.div>
        </div>

        {/* Floating Open Button */}
        {!isAnimating && (
          <motion.div 
            className="absolute -bottom-24 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <button
              onClick={handleOpen}
              className="px-8 py-3 bg-wedding-gold hover:bg-wedding-gold/80 text-white font-serif tracking-widest uppercase rounded shadow-lg transition-colors overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative">Open Invitation</span>
            </button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
