import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Petal = ({ index }) => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1000
  );
  const [windowHeight, setWindowHeight] = useState(
    typeof window !== 'undefined' ? window.innerHeight : 800
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Randomize falling parameters
  const initialX = Math.random() * windowWidth;
  const targetX = initialX + (Math.random() * 200 - 100);
  const duration = Math.random() * 15 + 10; // 10-25 seconds falling
  const delay = Math.random() * 20;

  return (
    <motion.div
      className="absolute pointer-events-none rounded-full"
      style={{
        width: Math.random() * 8 + 6 + 'px',
        height: Math.random() * 5 + 4 + 'px',
        backgroundColor: 'rgba(253, 232, 233, 0.7)', // blush color
         border: '1px solid rgba(212, 175, 55, 0.2)', // subtle gold edge
        filter: 'blur(0.5px)',
      }}
      initial={{
        y: -50,
        x: initialX,
        opacity: 0,
        rotate: Math.random() * 360,
      }}
      animate={{
        y: windowHeight + 100,
        x: targetX,
        opacity: [0, 1, 1, 0],
        rotate: Math.random() * 720,
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
};

export default function FloatingPetals({ count = 30 }) {
  const petals = Array.from({ length: count });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {petals.map((_, i) => (
        <Petal key={i} index={i} />
      ))}
    </div>
  );
}
