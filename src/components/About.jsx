"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="relative py-32 bg-[#020617] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="relative max-w-lg mx-auto aspect-square animate-float">
              {/* Abstract decorative background behind the illustration */}
              <div className="absolute inset-4 bg-accent/5 rounded-[4rem] -rotate-3 blur-sm" />
              <div className="absolute inset-10 bg-accent/10 rounded-[5rem] rotate-6 blur-md" />
              
              <div className="relative h-full w-full flex items-center justify-center p-8">
                <Image
                  src="/images/animated_dev.png"
                  alt="Developer Illustration"
                  fill
                  className="object-contain transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
              
              {/* Floating decorative elements to match the illustration style */}
              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 w-16 h-16 bg-accent/10 rounded-2xl blur-xl" 
              />
              <motion.div 
                animate={{ y: [0, 20, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 left-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" 
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
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-[10px] font-black tracking-widest rounded-md mb-6 uppercase">
                ABOUT ME
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-8 leading-tight">
                I AM AVAILABLE FOR <span className="text-accent underline decoration-accent/30 underline-offset-8">WEBSITE DEVELOPMENT</span> PROJECTS
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed mb-12">
                I’m Sewmini Wijesiri, a full-stack developer based in Sri Lanka with a strong interest in building scalable, production-ready web applications. I work across the entire stack using React, Next.js, Node.js, and MongoDB, focusing on clean code, maintainable architecture, and real-world usability.

I enjoy designing both intuitive user interfaces and reliable backend systems, turning concepts into functional, high-performance products.
              </p>


             

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-10 py-4 bg-accent hover:bg-accent/90 text-white text-xs font-black tracking-widest rounded-full transition-all shadow-xl shadow-accent/20 hover:scale-105 active:scale-95"
                >
                  GET IN TOUCH →
                </button>
                <a 
                  href="/resume.pdf"
                  download="resume.pdf"
                  className="w-full sm:w-auto px-10 py-4 border border-white/10 hover:border-accent/50 hover:bg-accent/5 text-white text-xs font-black tracking-widest rounded-full transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
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
    <h4 className="text-3xl font-black text-white mb-1">{number}</h4>
    <p className="text-gray-500 text-[11px] font-bold tracking-widest uppercase">{label}</p>
  </div>
);

export default About;

