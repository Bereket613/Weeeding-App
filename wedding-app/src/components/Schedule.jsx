import React from 'react';
import { motion } from 'framer-motion';

const scheduleEvents = [
  { time: '9:00 AM', title: 'Wedding Ceremony', description: 'The official union and vows.' },
  { time: '12:00 PM', title: 'Lunch', description: 'A feast to celebrate together.' },
  { time: '3:00 PM', title: 'Celebration', description: 'Music, dancing, and joyous celebration.' },
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-wedding-beige relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-wedding-text mb-4">Event Schedule</h2>
          <div className="w-16 h-1 bg-wedding-gold mx-auto mb-6"></div>
          <p className="text-wedding-text/70 max-w-2xl mx-auto font-light">
            Here is what to expect on our special day. We can't wait to share these moments with you!
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 relative">
          {/* Timeline Line */}
          <div className="absolute left-[80px] md:left-1/2 top-4 bottom-4 w-px bg-wedding-gold/30 -z-10"></div>
          
          {scheduleEvents.map((event, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 * index }}
               className="flex flex-col md:flex-row items-center md:justify-between w-full relative"
             >
               {/* Time - Desktop */}
               <div className="hidden md:flex w-1/2 justify-end pr-12">
                 <div className="text-xl font-serif text-wedding-gold tracking-widest">{event.time}</div>
               </div>

               {/* Center Node */}
               <div className="absolute left-[80px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-wedding-gold shadow-md shadow-wedding-gold/20 border-4 border-wedding-beige z-10"></div>

               {/* Content - Desktop */}
               <div className="hidden md:flex w-1/2 justify-start pl-12 flex-col">
                 <h3 className="text-2xl text-wedding-text font-serif mb-1">{event.title}</h3>
                 <p className="text-wedding-text/70 font-light">{event.description}</p>
               </div>

               {/* Mobile Layout */}
               <div className="md:hidden w-full flex align-start pl-[120px] relative py-4">
                 <div className="absolute left-0 top-5 w-[70px] text-right text-wedding-gold font-serif leading-tight">
                   {event.time}
                 </div>
                 <div>
                   <h3 className="text-xl text-wedding-text font-serif mb-1">{event.title}</h3>
                   <p className="text-wedding-text/70 text-sm font-light">{event.description}</p>
                 </div>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
