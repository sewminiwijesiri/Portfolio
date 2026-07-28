"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-accent-secondary/5 blur-[100px] rounded-full -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="relative max-w-md mx-auto aspect-square animate-float">
              {/* Abstract decorative backgrounds */}
              <div className="absolute inset-4 bg-gradient-to-tr from-accent/10 to-accent-secondary/5 rounded-[4rem] -rotate-3 blur-md" />
              <div className="absolute inset-10 bg-gradient-to-br from-accent-secondary/10 to-accent/5 rounded-[5rem] rotate-6 blur-lg" />

              <div className="relative h-full w-full flex items-center justify-center p-8 z-10">
                <Image
                  src="/images/animated_dev.png"
                  alt="Developer Illustration"
                  fill
                  className="object-contain transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>

              {/* Floating ambient indicators */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 w-16 h-16 bg-accent/10 rounded-2xl blur-xl"
              />
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 left-10 w-24 h-24 bg-accent-secondary/10 rounded-full blur-2xl"
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-accent/10 to-accent-secondary/10 border border-white/5 text-accent text-[10px] font-black tracking-widest rounded-lg mb-4 uppercase">
                ABOUT ME
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-6 leading-tight">
                I AM AVAILABLE FOR <span className="text-gradient-neon">WEBSITE DEVELOPMENT</span> PROJECTS
              </h2>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                I’m Sewmini Wijesiri, a full-stack developer based in Sri Lanka with a strong interest in building scalable, production-ready web applications. I work across the entire stack using React, Next.js, Node.js, and MongoDB, focusing on clean code, maintainable architecture, and real-world usability.
                <br /><br />
                I enjoy designing both intuitive user interfaces and reliable backend systems, turning concepts into functional, high-performance products.
              </p>

              {/* Modernized Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-10 p-5 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-md">
                <StatItem number="10+" label="Technologies" />
                <StatItem number="8+" label="Projects" />
                <StatItem number="100%" label="Commitment" />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-accent to-accent-secondary hover:brightness-110 text-white text-[10px] font-black tracking-widest rounded-full transition-all shadow-xl shadow-accent/25 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  GET IN TOUCH
                </button>
                <a
                  href="/resume.pdf"
                  download="resume.pdf"
                  className="w-full sm:w-auto px-8 py-3.5 border border-white/10 bg-white/5 hover:bg-white/10 text-white text-[10px] font-black tracking-widest rounded-full transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
                >
                  DOWNLOAD RESUME
                </a>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const StatItem = ({ number, label }) => (
  <div className="text-center sm:text-left">
    <h4 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent mb-1">{number}</h4>
    <p className="text-gray-500 text-[9px] font-black tracking-widest uppercase">{label}</p>
  </div>
);

export default About;


