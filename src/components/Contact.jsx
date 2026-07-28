"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-28 bg-[#030712] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-4xl mx-auto p-10 md:p-20 bg-white/[0.02] border border-white/5 rounded-[3rem] backdrop-blur-xl relative overflow-hidden">
          {/* Inner card glowing highlights */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 blur-[100px] rounded-full pointer-events-none animate-pulse-glow" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-secondary/5 blur-[100px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-accent/10 to-accent-secondary/10 border border-white/5 text-accent text-[10px] font-black tracking-widest rounded-lg mb-6 uppercase">
              GET IN TOUCH
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6 leading-tight uppercase">
              LET'S BUILD SOMETHING <span className="text-gradient-neon">EXCEPTIONAL</span> TOGETHER.
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-14 max-w-xl mx-auto">
              I'm always open to new opportunities and collaborations. Whether you have a specific project in mind or just want to chat about technology, feel free to reach out.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
              <ContactInfo icon={<Mail size={22} />} label="Email Me" value="sewminiwijesir5@gmail.com" />
              <ContactInfo icon={<MapPin size={22} />} label="Location" value="Sri Lanka" />
            </div>

            <motion.div
              className="mt-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <a
                href="mailto:sewminiwijesir5@gmail.com"
                className="inline-flex items-center px-12 py-4.5 bg-gradient-to-r from-accent to-accent-secondary hover:brightness-110 text-white text-xs font-black tracking-[0.25em] uppercase rounded-full hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-accent/25 cursor-pointer"
              >
                Start a Conversation
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, label, value }) => (
  <div className="flex items-center gap-5 group text-left">
    <div className="w-12 h-12 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-gradient-to-tr group-hover:from-accent group-hover:to-accent-secondary group-hover:border-transparent group-hover:text-white transition-all duration-500 shadow-md">
      {icon}
    </div>
    <div>
      <h4 className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-0.5">{label}</h4>
      <p className="text-white font-bold tracking-tight text-sm md:text-base group-hover:text-accent transition-colors duration-300">{value}</p>
    </div>
  </div>
);

export default Contact;

