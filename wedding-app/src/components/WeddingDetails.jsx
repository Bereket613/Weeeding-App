import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

const details = [
  {
    icon: <Calendar size={28} />,
    title: 'The Date',
    info: '11 / 08 / 2018 E.C',
    desc: 'We look forward to beginning our forever on this beautiful day.'
  },
  {
    icon: <Clock size={28} />,
    title: 'The Time',
    info: '9:00 AM',
    desc: 'Ceremony begins promptly. Please arrive a bit early.'
  },
  {
    icon: <MapPin size={28} />,
    title: 'The Location',
    info: 'Merhabete, Alemketema',
    desc: 'Alemketema 03, Ethiopia.'
  }
];

export default function WeddingDetails() {
  return (
    <section id="details" className="py-24 bg-wedding-blush/30 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-wedding-text mb-4">When & Where</h2>
          <div className="w-16 h-1 bg-wedding-gold mx-auto mb-6"></div>
          <p className="text-wedding-text/70 max-w-2xl mx-auto font-light">
            We can't wait to celebrate with you. Here are the details for our special day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {details.map((detail, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-md border border-wedding-gold/10 flex flex-col items-center text-center group transition-colors hover:border-wedding-gold/30"
            >
              <div className="w-16 h-16 rounded-full bg-wedding-blush flex items-center justify-center mb-6 text-wedding-gold group-hover:scale-110 transition-transform duration-300 mx-auto">
                {detail.icon}
              </div>
              <div>
                <h3 className="text-2xl font-serif text-wedding-text mb-2">{detail.title}</h3>
                <p className="text-xl text-wedding-gold font-medium mb-1 tracking-wider">{detail.info}</p>
                <p className="text-wedding-text/70 font-light">
                  {detail.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map Container */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.6 }}
           className="mt-20 relative px-4 md:px-0"
        >
          {/* Decorative Corner Borders */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-wedding-gold/60 hidden md:block"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-wedding-gold/60 hidden md:block"></div>

          <div className="w-full h-[450px] bg-white rounded-2xl shadow-xl overflow-hidden relative group group-hover:shadow-2xl transition-all duration-700">
            {/* Interactive Map Iframe */}
            <iframe 
              src="https://maps.google.com/maps?q=10.054947,38.991724&hl=en&z=15&output=embed" 
              className="w-full h-full border-0 grayscale-[80%] hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Floating Navigation Button */}
            <div className="absolute bottom-6 right-6 z-10">
                <a 
                  href="https://www.google.com/maps?q=10.054947,38.991724" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-5 py-3 bg-white/90 backdrop-blur-md text-wedding-gold border border-wedding-gold/30 font-serif tracking-widest uppercase rounded shadow-lg hover:bg-wedding-gold hover:text-white transition-all duration-300"
                >
                  <MapPin size={18} />
                  <span className="text-sm font-medium">Get Directions</span>
                </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
