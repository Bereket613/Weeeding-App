import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroBg from '../assets/3Y2A9181.JPG';

const FloatingHearts = () => {
  const hearts = Array.from({ length: 15 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-wedding-gold/40 text-2xl"
          initial={{
            y: "110vh",
            x: Math.random() * 100 + "vw",
            opacity: 0,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: "-10vh",
            opacity: [0, 1, 0],
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
        >
          ❤
        </motion.div>
      ))}
    </div>
  );
};

const Countdown = () => {
  const targetDate = new Date('2026-04-19T00:00:00'); // Approx date for 11/08/2018 EC
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 md:gap-8 justify-center mt-12 z-20">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="bg-white/20 backdrop-blur-md rounded-lg p-3 md:p-6 shadow-lg min-w-[70px] md:min-w-[100px] border border-white/30 text-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-br from-wedding-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="text-3xl md:text-5xl font-serif text-white block mb-1">
              {value.toString().padStart(2, '0')}
            </span>
            <span className="text-xs md:text-sm uppercase tracking-widest text-white/80 font-sans">
              {unit}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityFade = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(${heroBg})`, 
          backgroundPosition: 'center 20%',
          y: y1,
          scale: 1.05
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay to make text readable */}
      </motion.div>

      <FloatingHearts />

      {/* Main Content */}
      <motion.div 
        className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center"
        style={{ opacity: opacityFade }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-white/90 font-serif md:text-xl tracking-[0.3em] uppercase mb-8"
        >
          Together with their families
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h1 className="text-6xl md:text-9xl font-cursive text-white mb-2 leading-tight drop-shadow-2xl">
            Mahlet
          </h1>
          <span className="text-wedding-gold block my-1 font-cursive text-5xl md:text-7xl">&amp;</span>
          <h1 className="text-6xl md:text-9xl font-cursive text-white mb-6 leading-tight drop-shadow-2xl">
            Zenaneh
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="text-wedding-lightgold text-sm md:text-lg tracking-wider mb-2 mt-4 max-w-xl font-serif italic"
        >
          invite you to celebrate their wedding
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <Countdown />
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator overlay */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs uppercase tracking-widest mb-2 opacity-70">Scroll Down</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/70 to-transparent"></div>
      </motion.div>
    </section>
  );
}
