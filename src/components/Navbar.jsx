"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT ME", href: "/#about" },
  { name: "PROJECTS", href: "/#projects" },
  { name: "SERVICES", href: "/#services" },
  { name: "CONTACT", href: "/#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      } else {
        setScrollProgress(0);
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -30% 0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const sections = ["home", "about", "projects", "services", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-accent-secondary to-accent z-50 origin-left transition-transform duration-100" 
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <nav
        className={`fixed z-50 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl transition-all duration-500 rounded-full border border-white/5 shadow-2xl ${
          isScrolled
            ? "top-4 bg-[#030712]/75 backdrop-blur-2xl py-3.5 px-6 shadow-black/40"
            : "top-6 bg-[#030712]/45 backdrop-blur-lg py-5 px-8"
        }`}
      >
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-gradient-to-tr from-accent to-accent-secondary rounded-full flex items-center justify-center shadow-lg shadow-accent/20 group-hover:rotate-12 transition-transform duration-300 overflow-hidden relative">
              <Image 
                src="/icon.png" 
                alt="SW Logo" 
                width={36} 
                height={36} 
                className="object-cover"
              />
            </div>
            <span className="text-white font-heading font-black tracking-[0.25em] text-xs md:text-sm transition-colors group-hover:text-accent">
              SEWMINI WIJESIRI
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("/#", "").replace("/", "home");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`nav-link text-[10px] font-heading font-bold tracking-[0.2em] transition-colors hover:text-white ${
                    isActive ? "text-accent active" : "text-gray-400"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="relative overflow-hidden px-6 py-2.5 bg-gradient-to-r from-accent to-accent-secondary text-white text-[9px] font-heading font-black tracking-widest rounded-full transition-all shadow-lg shadow-accent/15 hover:scale-105 active:scale-95 cursor-pointer group"
            >
              <span className="relative z-10">LET'S TALK</span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-accent transition-colors"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-[calc(100%+12px)] left-0 right-0 mx-0 p-6 bg-[#030712]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl lg:hidden"
            >
              <div className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xs font-heading font-bold tracking-[0.2em] text-gray-300 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="relative overflow-hidden w-full py-3.5 bg-gradient-to-r from-accent to-accent-secondary text-white text-[10px] font-heading font-black tracking-widest rounded-xl shadow-lg shadow-accent/20 cursor-pointer group"
                >
                  <span className="relative z-10">LET'S TALK</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
