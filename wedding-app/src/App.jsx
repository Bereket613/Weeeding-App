import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import LoveStory from './components/LoveStory';
import WeddingDetails from './components/WeddingDetails';
import Gallery from './components/Gallery';
import Schedule from './components/Schedule';
import RSVP from './components/RSVP';
import BlessingMessage from './components/BlessingMessage';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import EnvelopeCover from './components/EnvelopeCover';
import FloatingPetals from './components/FloatingPetals';
import audioFile from './assets/amaarenyaa_yaszarege_zafanoce_amharic_wedding_songs_tsagaayee_es.m4a';

function App() {
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleUserClick = () => {
    // Play immediately on user click (synchronously)
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(e => console.log('Audio play failed', e));
    }
  };

  const handleOpenInvitation = () => {
    setIsInvitationOpened(true);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log('Audio play failed', e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-wedding-beige font-sans text-wedding-text overflow-x-hidden relative min-h-screen">
      {/* Audio element remains mounted at the top level */}
      <audio ref={audioRef} src={audioFile} loop />

      <AnimatePresence>
        {!isInvitationOpened && (
          <EnvelopeCover key="envelope" onOpen={handleOpenInvitation} onPlayAudio={handleUserClick} />
        )}
      </AnimatePresence>

      {/* Render main site immediately to preload, but hide it until opened */}
      {isInvitationOpened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <FloatingPetals count={25} />
          <Navigation isPlaying={isPlaying} toggleAudio={toggleAudio} />
          <main>
            <Hero />
            <LoveStory />
            <WeddingDetails />
            <Gallery />
            <Schedule />
            <RSVP />
            <BlessingMessage />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
