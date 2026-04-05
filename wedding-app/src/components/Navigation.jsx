import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import audioFile from '../assets/amaarenyaa_yaszarege_zafanoce_amharic_wedding_songs_tsagaayee_es.m4a';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Our Story', href: '#story' },
  { name: 'Details', href: '#details' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'RSVP', href: '#rsvp' },
];

export default function Navigation({ forcePlayAudio, onAudioToggle }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Watch for forcePlayAudio
  useEffect(() => {
    if (forcePlayAudio && audioRef.current && !isPlaying) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(e => console.log('Audio play failed', e));
      if (onAudioToggle) onAudioToggle(); // consume event
    }
  }, [forcePlayAudio, isPlaying, onAudioToggle]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log('Audio play failed', e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <audio ref={audioRef} src={audioFile} loop />
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-2xl font-serif font-bold text-wedding-gold tracking-wider">
          M & Z
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-row gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                isScrolled ? 'text-wedding-text hover:text-wedding-gold' : 'text-white hover:text-wedding-gold'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleAudio}
            className={`ml-4 p-2 rounded-full transition-colors duration-300 ${
              isScrolled ? 'text-wedding-gold bg-wedding-beige/50 hover:bg-wedding-gold hover:text-white' : 'text-white bg-white/20 hover:bg-white hover:text-wedding-gold'
            }`}
            title="Music Toggle"
          >
            {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>
        </div>

        {/* Mobile Toggle & Audio */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleAudio}
            className={`p-2 rounded-full transition-colors duration-300 ${
              isScrolled ? 'text-wedding-gold hover:bg-wedding-beige' : 'text-white hover:bg-white/20'
            }`}
          >
            {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
          </button>
          <button
            className={isScrolled ? 'text-wedding-gold' : 'text-white'}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 bg-wedding-beige z-50 flex flex-col justify-center items-center"
          >
            <button
              className="absolute top-6 right-6 text-wedding-text"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-wedding-text hover:text-wedding-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
