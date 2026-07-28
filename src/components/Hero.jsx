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
    <section id="home" className="relative min-h-screen pt-36 pb-20 flex items-center overflow-hidden bg-[#030712]">
      {/* Background patterns and glowing meshes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3 z-0 animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-secondary/10 blur-[120px] rounded-full translate-y-1/3 -translate-x-1/3 z-0" />
      <div className="absolute inset-0 bg-hero-pattern opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-accent/10 to-accent-secondary/10 border border-white/10 text-accent text-[10px] font-black tracking-[0.2em] rounded-lg mb-6 uppercase">
                Welcome to my space
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-4 leading-none">
                HEY! I'M <span className="text-gradient-neon">SEWMINI</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-8 h-[1.2em] tracking-tight">
                {text}<span className="cursor-blink text-accent-secondary">|</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                A Full-Stack Developer focused on clean architecture, scalable systems, and modern web experiences, crafting premium and high-performance digital products.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-4 bg-gradient-to-r from-accent to-accent-secondary hover:brightness-110 text-white text-xs font-black tracking-widest rounded-full transition-all shadow-xl shadow-accent/25 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  GET IN TOUCH
                </button>

                <div className="flex items-center gap-4">
                  <SocialIcon href="https://github.com/sewminiwijesiri" icon={<Github size={18} />} />
                  <SocialIcon href="https://www.linkedin.com/in/sewmini-wijesiri/" icon={<Linkedin size={18} />} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Modern Styled Profile Image with Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex-1 relative"
          >
            <div className="relative w-[300px] h-[300px] md:w-[460px] md:h-[460px] mx-auto flex items-center justify-center">
              {/* Decorative elements and glowing backgrounds */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-accent-secondary/10 rounded-[3rem] blur-3xl animate-pulse-glow" />
              <div className="absolute inset-0 border border-white/5 rounded-[3rem] animate-spin-slow" />
              <div className="absolute inset-[8%] border border-dashed border-accent/25 rounded-[2.5rem] animate-reverse-spin" />

              {/* Floating Skill Badge 1 */}
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-6 bg-[#0c111d]/85 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-3 shadow-2xl z-20"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center text-accent">
                  <span className="font-bold text-sm">⚛️</span>
                </div>
                <div className="text-left">
                  <h4 className="text-white text-[9px] font-black tracking-wider uppercase">Frontend</h4>
                  <p className="text-gray-400 text-[8px] font-bold">React / Next.js</p>
                </div>
              </motion.div>

              {/* Floating Skill Badge 2 */}
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute bottom-10 -right-6 bg-[#0c111d]/85 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-3 shadow-2xl z-20"
              >
                <div className="w-8 h-8 rounded-lg bg-accent-secondary/15 flex items-center justify-center text-accent-secondary">
                  <span className="font-bold text-sm">💻</span>
                </div>
                <div className="text-left">
                  <h4 className="text-white text-[9px] font-black tracking-wider uppercase">Backend</h4>
                  <p className="text-gray-400 text-[8px] font-bold">Node.js / Express</p>
                </div>
              </motion.div>

              {/* Main Image Container */}
              <div className="relative w-[75%] h-[75%] rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(56,189,248,0.15)] flex items-center justify-center z-10 bg-[#070a13]">
                {/* Background Pattern behind image */}
                <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-transparent to-transparent opacity-60" />

                <Image
                  src="/images/Me.jpeg"
                  alt="Sewmini Wijesiri"
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-105"
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
    className="w-11 h-11 flex items-center justify-center border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-300 shadow-md shadow-black/20"
  >
    {icon}
  </a>
);

export default Hero;

