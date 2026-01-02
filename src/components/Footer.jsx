"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-[#020617] border-t border-white/10 pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="col-span-1 lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shadow-lg shadow-accent/20 group-hover:rotate-6 transition-transform">
                <span className="text-white font-black text-xl">S</span>
              </div>
              <span className="text-white font-black tracking-widest text-xl uppercase">SEWMINI</span>
            </Link>
            <p className="text-gray-400 max-w-sm leading-relaxed text-sm">
              Crafting modern digital experiences with a focus on clean code, performance, and user-centric design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black tracking-[0.2em] text-white uppercase opacity-50">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/#${item.toLowerCase().replace(' ', '')}`}
                    className="text-gray-400 hover:text-accent transition-colors text-xs font-bold tracking-widest uppercase"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black tracking-[0.2em] text-white uppercase opacity-50">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <Github size={18} />, href: "https://github.com/sewminiwijesiri" },
                { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/sewmini-wijesiri/" },
                
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
            © {new Date().getFullYear()} Sewmini Wijesiri. Built with passion.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-bold tracking-widest text-gray-500 uppercase hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] font-bold tracking-widest text-gray-500 uppercase hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

