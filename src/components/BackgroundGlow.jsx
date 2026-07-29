"use client";

import React from "react";
import { motion } from "framer-motion";

const BackgroundGlow = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Glow Shape 1 */}
      <motion.div
        className="absolute top-[10%] left-[10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-accent/10 blur-[130px]"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -50, 60, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Glow Shape 2 */}
      <motion.div
        className="absolute bottom-[20%] right-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-accent-secondary/8 blur-[120px]"
        animate={{
          x: [0, -60, 50, 0],
          y: [0, 80, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Glow Shape 3 */}
      <motion.div
        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[550px] h-[350px] md:h-[550px] rounded-full bg-indigo-500/5 blur-[140px]"
        animate={{
          x: [0, 40, -50, 0],
          y: [0, 50, -60, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  );
};

export default BackgroundGlow;
