import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-wedding-text text-wedding-beige py-16 relative overflow-hidden">
      {/* Decorative Habesha border style Top */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGwyMCAxMEw0MCAwSDB6IiBmaWxsPSIjRDNBRjM3IiBmaWxsLW9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==')]"></div>

      <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <Heart size={32} className="text-wedding-gold" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Mahlet & Zenaneh</h2>
          
          <p className="text-wedding-beige/70 text-lg uppercase tracking-[0.2em] mb-12">
            We look forward to celebrating with you
          </p>

          <div className="w-24 h-px bg-wedding-gold/30 mx-auto mb-12"></div>

          <div className="text-wedding-beige/50 text-sm font-light flex flex-col gap-2">
             <p>11 / 08 / 2018 E.C | Merhabete, Alemketema</p>
             <p className="mt-4 text-xs">Built with ❤️ for Mahlet & Zenaneh</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
