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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    <nav
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled
          ? "top-4 left-4 right-4 md:left-8 md:right-8 bg-[#030712]/80 backdrop-blur-lg border border-white/5 py-4 rounded-2xl shadow-2xl shadow-black/40"
          : "top-0 left-0 right-0 bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-tr from-accent to-accent-secondary rounded-xl flex items-center justify-center shadow-lg shadow-accent/20 group-hover:rotate-6 transition-transform duration-300 overflow-hidden">
            <Image 
              src="/icon.png" 
              alt="SW Logo" 
              width={40} 
              height={40} 
              className="object-cover"
            />
          </div>
          <span className="text-white font-black tracking-[0.25em] text-sm md:text-base transition-colors group-hover:text-accent">
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
                className={`nav-link text-[11px] font-bold tracking-[0.2em] transition-colors hover:text-white ${
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
            className="px-8 py-3 bg-gradient-to-r from-accent to-accent-secondary hover:brightness-110 text-white text-[10px] font-black tracking-widest rounded-full transition-all shadow-lg shadow-accent/20 hover:scale-105 active:scale-95 cursor-pointer"
          >
            LET'S TALK
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:text-accent transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="absolute top-[calc(100%+12px)] left-0 right-0 mx-4 p-6 bg-[#030712]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs font-bold tracking-[0.2em] text-gray-300 hover:text-accent transition-colors"
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
                className="w-full py-3.5 bg-gradient-to-r from-accent to-accent-secondary text-white text-[10px] font-black tracking-widest rounded-xl shadow-lg shadow-accent/20 cursor-pointer"
              >
                LET'S TALK
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
