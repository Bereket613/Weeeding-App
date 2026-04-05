import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PenLine, CheckCircle } from 'lucide-react';

export default function BlessingMessage() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="blessings" className="py-24 bg-wedding-blush/30 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-wedding-text mb-4">Wedding Wishes</h2>
          <div className="w-16 h-1 bg-wedding-gold mx-auto mb-6"></div>
          <p className="text-wedding-text/70 font-light">
            Leave a message, piece of advice, or a blessing for the couple.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="bg-white p-8 rounded-2xl shadow-sm border border-wedding-gold/20"
        >
          <AnimatePresence mode="wait">
            {status !== 'success' ? (
              <motion.form 
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <label htmlFor="guestName" className="block text-sm font-serif text-wedding-text mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="guestName" 
                    required 
                    className="w-full px-4 py-3 bg-wedding-beige/50 border border-wedding-gold/30 rounded-lg focus:outline-none focus:border-wedding-gold transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-serif text-wedding-text mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    required 
                    rows="5"
                    className="w-full px-4 py-3 bg-wedding-beige/50 border border-wedding-gold/30 rounded-lg focus:outline-none focus:border-wedding-gold transition-colors resize-none"
                    placeholder="Write your beautiful message here..."
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className="flex items-center gap-2 bg-wedding-gold text-white font-serif tracking-wider px-8 py-3 rounded-lg hover:bg-wedding-text transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed uppercase text-sm"
                  >
                    <PenLine size={18} />
                    {status === 'submitting' ? 'Sending...' : 'Leave Message'}
                  </button>
                </div>
              </motion.form>
            ) : (
               <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-8 text-center"
              >
                <CheckCircle size={48} className="text-wedding-gold mb-4" />
                <h3 className="text-2xl font-serif text-wedding-text mb-2">Thank you!</h3>
                <p className="text-wedding-text/70">Your beautiful wishes have been shared with the couple.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-wedding-gold hover:text-wedding-text underline decoration-wedding-gold/30 underline-offset-4 transition-colors"
                >
                  Write another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
