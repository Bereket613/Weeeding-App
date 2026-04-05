import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function RSVP() {
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="rsvp" className="py-24 bg-white relative">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-wedding-text mb-4">RSVP</h2>
          <div className="w-16 h-1 bg-wedding-gold mx-auto mb-6"></div>
          <p className="text-wedding-text/70 font-light">
            Please let us know if you will be able to join us for our celebration.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="bg-wedding-beige/50 p-8 md:p-12 rounded-2xl shadow-sm border border-wedding-gold/20 relative overflow-hidden"
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
                  <label htmlFor="name" className="block text-sm font-serif text-wedding-text mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full px-4 py-3 bg-white border border-wedding-gold/30 rounded-lg focus:outline-none focus:border-wedding-gold focus:ring-1 focus:ring-wedding-gold transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-serif text-wedding-text mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required 
                    className="w-full px-4 py-3 bg-white border border-wedding-gold/30 rounded-lg focus:outline-none focus:border-wedding-gold focus:ring-1 focus:ring-wedding-gold transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-serif text-wedding-text mb-3">Will you attend?</label>
                  <div className="flex gap-4">
                    <label className="flex-1 cursor-pointer">
                      <input type="radio" name="attending" value="yes" className="peer sr-only" required />
                      <div className="text-center px-4 py-3 border border-wedding-gold/30 rounded-lg peer-checked:bg-wedding-gold peer-checked:text-white transition-all peer-checked:border-wedding-gold hover:bg-wedding-gold/5">
                        Yes, I will attend
                      </div>
                    </label>
                    <label className="flex-1 cursor-pointer">
                      <input type="radio" name="attending" value="no" className="peer sr-only" required />
                      <div className="text-center px-4 py-3 border border-wedding-gold/30 rounded-lg peer-checked:bg-wedding-gold peer-checked:text-white transition-all peer-checked:border-wedding-gold hover:bg-wedding-gold/5">
                        No, I can't
                      </div>
                    </label>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-4 w-full bg-wedding-text text-white font-serif tracking-wider uppercase py-4 rounded-lg hover:bg-wedding-gold transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Submitting...' : 'Send RSVP'}
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <CheckCircle2 size={64} className="text-wedding-gold mb-4" />
                <h3 className="text-2xl font-serif text-wedding-text mb-2">Thank You!</h3>
                <p className="text-wedding-text/70">Your RSVP has been received.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
