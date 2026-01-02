"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 bg-[#020617] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-[10px] font-black tracking-widest rounded-md mb-6 uppercase">
              GET IN TOUCH
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight uppercase">
              LET'S BUILD SOMETHING <span className="text-accent underline decoration-accent/30 underline-offset-8">EXCEPTIONAL</span> TOGETHER.
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-16 mx-auto">
              I'm always open to new opportunities and collaborations. Whether you have a specific project in mind or just want to chat about technology, feel free to reach out.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
              <ContactInfo icon={<Mail size={24} />} label="Email Me" value="sewminiwijesir5@gmail.com" />
              <ContactInfo icon={<MapPin size={24} />} label="Location" value="Sri Lanka" />
            </div>

            <motion.div 
              className="mt-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a 
                href="mailto:sewminiwijesir5@gmail.com"
                className="inline-flex items-center gap-4 px-12 py-5 bg-accent text-white text-xs font-black tracking-[0.3em] uppercase rounded-full hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-accent/20"
              >
                Start a Conversation <ArrowRight size={18} />
              </a>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

const ContactInfo = ({ icon, label, value }) => (
  <div className="flex items-center gap-6 group">
    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <div>
      <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">{label}</h4>
      <p className="text-white font-bold tracking-tight">{value}</p>
    </div>
  </div>
);

export default Contact;

