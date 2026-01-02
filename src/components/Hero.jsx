"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "I'M A DEVELOPER";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText('');
        setIndex(0);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-[#020617]">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 z-0" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 blur-[80px] rounded-full translate-y-1/3 -translate-x-1/3 z-0" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-[11px] font-black tracking-widest rounded-md mb-6 uppercase">
                Sewmini
              </span>
              <h1 className="text-5xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter mb-4 leading-tight">
                HAY! I'M <span className="text-white">SEWMINI</span>
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-accent mb-8 h-[1.2em]">
                {text}<span className="cursor-blink">|</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                A Full-Stack Developer focused on clean architecture, scalable systems, and modern web applications, with growing experience in deployment workflows.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-4 bg-accent hover:bg-accent/90 text-white text-xs font-black tracking-widest rounded-full transition-all shadow-xl shadow-accent/20 hover:scale-105 active:scale-95"
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

          {/* Right Content - Profile Image Placeholder with Design Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px] mx-auto flex items-center justify-center">
              {/* Decorative rings/lines */}
              <div className="absolute inset-0 border-[1px] border-accent/20 rounded-full animate-spin-slow" />
              <div className="absolute inset-[10%] border-[2px] border-dashed border-white/5 rounded-full animate-reverse-spin" />
              <div className="absolute inset-[10%] border-[1px] border-accent/10 rounded-full" />

              {/* Floating Spheres */}
              <div className="absolute top-10 -left-5 w-16 h-16 bg-gradient-to-br from-gray-700 to-black rounded-full shadow-2xl animate-float-slow z-20" />
              <div className="absolute bottom-20 -right-10 w-24 h-24 bg-gradient-to-br from-gray-800 to-black rounded-full shadow-2xl animate-float z-20" />

              {/* Main Image Container */}
              <div className="relative w-[80%] h-[80%] rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_50px_rgba(56,189,248,0.2)] flex items-center justify-center z-10 bg-[#0a0a0a]">
                {/* Background Pattern behind image */}
                <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-transparent opacity-50" />

                <Image
                  src="/images/Me.jpeg"
                  alt="Sewmini Wijesiri"
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-110"
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
    className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-300"
  >
    {icon}
  </a>
);

export default Hero;

