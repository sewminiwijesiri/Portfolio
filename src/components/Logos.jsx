"use client";

import React from 'react';
import { motion } from 'framer-motion';

const techRow1 = ["REACT", "NEXT.JS", "NODE.JS", "EXPRESS", "MONGODB"];
const techRow2 = ["JAVA", "KOTLIN", "TAILWIND CSS", "REST APIS", "SQL"];

const Logos = () => {
  const row1Duplicated = [...techRow1, ...techRow1, ...techRow1];
  const row2Duplicated = [...techRow2, ...techRow2, ...techRow2];

  return (
    <div className="w-full bg-[#030712]/50 py-16 border-y border-white/5 overflow-hidden relative select-none flex flex-col gap-8 bg-dot-pattern">
      {/* Edge fading mask */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

      {/* Row 1: Left scrolling */}
      <div className="flex w-max">
        <motion.div
          animate={{ x: [0, "-33.33%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
          className="flex gap-16 pr-16 text-slate-500 font-heading font-black tracking-[0.25em] text-xs md:text-sm items-center whitespace-nowrap"
        >
          {row1Duplicated.map((tech, idx) => (
            <div key={`r1-${idx}`} className="flex items-center gap-4 group cursor-default">
              <span className="w-2 h-2 rounded-full bg-accent group-hover:bg-accent-secondary transition-colors duration-300" />
              <span className="hover:text-white transition-colors duration-300">{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Right scrolling */}
      <div className="flex w-max justify-end self-end">
        <motion.div
          animate={{ x: ["-33.33%", 0] }}
          transition={{
            ease: "linear",
            duration: 22,
            repeat: Infinity,
          }}
          className="flex gap-16 pr-16 text-slate-500 font-heading font-black tracking-[0.25em] text-xs md:text-sm items-center whitespace-nowrap"
        >
          {row2Duplicated.map((tech, idx) => (
            <div key={`r2-${idx}`} className="flex items-center gap-4 group cursor-default">
              <span className="w-2 h-2 rounded-full bg-accent-secondary group-hover:bg-accent transition-colors duration-300" />
              <span className="hover:text-white transition-colors duration-300">{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Logos;
