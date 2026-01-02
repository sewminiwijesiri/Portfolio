"use client";

import React from 'react';
import { motion } from 'framer-motion';

const logos = ["LOGOIPSUM", "LOGOIPSUM", "LOGOIPSUM", "LOGOIPSUM", "LOGOIPSUM"];

const Logos = () => {
  return (
    <div className="w-full bg-accent/5 py-12 border-y border-white/5">
      <div className="container mx-auto px-6 overflow-hidden">
        <motion.div 
          animate={{ x: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex items-center justify-between gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
        >
          {logos.map((logo, idx) => (
            <span key={idx} className="text-white font-black tracking-[0.3em] text-sm whitespace-nowrap">{logo}</span>
          ))}
          {/* Duplicate for smooth scroll effect if needed */}
          {logos.map((logo, idx) => (
            <span key={`dup-${idx}`} className="text-white font-black tracking-[0.3em] text-sm whitespace-nowrap hidden lg:block">{logo}</span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Logos;
