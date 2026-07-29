"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-[#030712] overflow-hidden bg-dot-pattern">
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
              <div className="absolute inset-4 bg-gradient-to-tr from-accent/5 to-accent-secondary/5 rounded-[4rem] -rotate-3 blur-md" />
              <div className="absolute inset-10 bg-gradient-to-br from-accent-secondary/5 to-accent/5 rounded-[5rem] rotate-6 blur-lg" />

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
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-accent/10 to-accent-secondary/10 border border-white/5 text-accent text-[9px] font-heading font-black tracking-widest rounded-lg mb-4 uppercase">
                ABOUT ME
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-white tracking-tighter mb-6 leading-tight uppercase">
                I AM AVAILABLE FOR <span className="text-gradient-neon">WEBSITE DEVELOPMENT</span> PROJECTS
              </h2>

              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 font-medium">
                I’m Sewmini Wijesiri, a full-stack developer based in Sri Lanka with a strong interest in building scalable, production-ready web applications. I work across the entire stack using React, Next.js, Node.js, and MongoDB, focusing on clean code, maintainable architecture, and real-world usability.
                <br /><br />
                I enjoy designing both intuitive user interfaces and reliable backend systems, turning concepts into functional, high-performance products.
              </p>

              {/* Modernized Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                <StatItem number="10+" label="Technologies" />
                <StatItem number="8+" label="Projects" />
                <StatItem number="100%" label="Commitment" />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="relative overflow-hidden w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-accent to-accent-secondary text-white text-[10px] font-heading font-black tracking-widest rounded-full transition-all shadow-xl shadow-accent/20 hover:scale-105 active:scale-95 cursor-pointer group text-center"
                >
                  <span className="relative z-10">GET IN TOUCH</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
                <a
                  href="/Sewmini%20wijesiri.pdf"
                  download="Sewmini wijesiri.pdf"
                  className="relative overflow-hidden w-full sm:w-auto px-8 py-3.5 border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] text-white text-[10px] font-heading font-black tracking-widest rounded-full transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
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
  <div className="text-center sm:text-left p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent/20 hover:bg-white/[0.04] transition-all duration-300">
    <h4 className="text-2xl md:text-3xl font-heading font-black bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent mb-1">{number}</h4>
    <p className="text-slate-500 text-[9px] font-heading font-black tracking-widest uppercase">{label}</p>
  </div>
);

export default About;


