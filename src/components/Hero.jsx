"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "A FULL-STACK DEVELOPER";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText('');
        setIndex(0);
      }, 2500);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section id="home" className="relative min-h-screen pt-40 pb-20 flex items-center overflow-hidden bg-[#030712] bg-dot-pattern">
      {/* Background patterns and glowing meshes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3 z-0 animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-secondary/5 blur-[120px] rounded-full translate-y-1/3 -translate-x-1/3 z-0" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-accent/10 to-accent-secondary/10 border border-white/5 text-accent text-[9px] font-heading font-black tracking-[0.25em] rounded-lg mb-6 uppercase">
                Welcome to my space
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7.5xl font-heading font-black text-white tracking-tighter mb-4 leading-none uppercase">
                HEY! I'M <span className="text-gradient-neon">SEWMINI</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-black text-white mb-8 h-[1.2em] tracking-tight">
                {text}<span className="cursor-blink text-accent-secondary">|</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                A Full-Stack Developer focused on clean architecture, scalable systems, and modern web experiences, crafting premium and high-performance digital products.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="relative overflow-hidden px-10 py-4 bg-gradient-to-r from-accent to-accent-secondary text-white text-xs font-heading font-black tracking-widest rounded-full transition-all shadow-xl shadow-accent/20 hover:scale-105 active:scale-95 cursor-pointer group"
                >
                  <span className="relative z-10">GET IN TOUCH</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>

                <div className="flex items-center gap-4">
                  <SocialIcon href="https://github.com/sewminiwijesiri" icon={<Github size={18} />} />
                  <SocialIcon href="https://www.linkedin.com/in/sewmini-wijesiri/" icon={<Linkedin size={18} />} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Profile Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex-1 relative"
          >
            <div className="relative w-[300px] h-[300px] md:w-[460px] md:h-[460px] mx-auto flex items-center justify-center">
              {/* Glow mesh backdrop */}
              <div className="absolute inset-4 bg-gradient-to-tr from-accent/10 to-accent-secondary/10 rounded-[3rem] blur-3xl" />

              {/* Orbital rings */}
              <div className="absolute inset-0 border border-white/5 rounded-[3.5rem] animate-spin-slow" />
              <div className="absolute inset-12 border border-dashed border-accent/20 rounded-[3rem] animate-reverse-spin" />

              {/* Floating Skill Badge 1 */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05 }}
                className="absolute top-10 -left-6 bg-[#030712]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center gap-3 shadow-2xl z-20 cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent/20 to-accent-secondary/20 flex items-center justify-center text-accent">
                  <span className="font-bold text-sm">⚛️</span>
                </div>
                <div className="text-left">
                  <h4 className="text-white text-[9px] font-heading font-black tracking-wider uppercase">Frontend</h4>
                  <p className="text-slate-400 text-[8px] font-bold">React / Next.js</p>
                </div>
              </motion.div>

              {/* Floating Skill Badge 2 */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileHover={{ scale: 1.05 }}
                className="absolute bottom-10 -right-6 bg-[#030712]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center gap-3 shadow-2xl z-20 cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-secondary/20 to-accent/20 flex items-center justify-center text-accent-secondary">
                  <span className="font-bold text-sm">💻</span>
                </div>
                <div className="text-left">
                  <h4 className="text-white text-[9px] font-heading font-black tracking-wider uppercase">Backend</h4>
                  <p className="text-slate-400 text-[8px] font-bold">Node.js / Express</p>
                </div>
              </motion.div>

              {/* Main Image frame */}
              <div className="relative w-[75%] h-[75%] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(14,165,233,0.15)] flex items-center justify-center z-10 bg-[#070a13] group">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-transparent to-transparent opacity-40 z-10 pointer-events-none" />

                <Image
                  src="/images/Me.jpeg"
                  alt="Sewmini Wijesiri"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 flex items-center justify-center bg-white/[0.02] border border-white/10 rounded-full text-slate-400 hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-300 shadow-md shadow-black/20 hover:scale-110 active:scale-95"
  >
    {icon}
  </a>
);

export default Hero;

