import React, { useState } from 'react';
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

function App() {
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);
  const [shouldPlayAudio, setShouldPlayAudio] = useState(false);

  const handleOpenInvitation = () => {
    setIsInvitationOpened(true);
    setShouldPlayAudio(true); // Signal to Navigation to start audio
  };

  return (
    <div className="bg-wedding-beige font-sans text-wedding-text overflow-x-hidden relative min-h-screen">
      <AnimatePresence>
        {!isInvitationOpened && (
          <EnvelopeCover key="envelope" onOpen={handleOpenInvitation} />
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
          <Navigation forcePlayAudio={shouldPlayAudio} onAudioToggle={() => setShouldPlayAudio(false)} />
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
