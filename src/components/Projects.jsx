"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Askmate",
    category: "Website Design",
    description: "Web Design, App Design",
    image: "/images/Askmate.jpeg",
    github: "https://github.com/sewminiwijesiri/askmate.git",
  },
  {
    title: "UniFlow",
    category: "Website Design",
    description: "App Design, Web Design",
    image: "/images/UniFlow.jpeg",
    github: "https://github.com/sewminiwijesiri/it3030-paf-2026-smart-KND-group11.git",
  },
  {
    title: "SuonTravels",
    category: "Website Design",
    description: "Web Design",
    image: "/images/Suon.png",
    github: "https://github.com/sewminiwijesiri/it3030-paf-2026-smart-KND-group11.git",
    live: "https://suontravels.com/"
  },
  {
    title: "Re Goods",
    category: "Website Design",
    image: "/images/Regoods.png",
    description: "Web Design, App Design",
    github: "https://github.com/Piyumal-Bandaranayake/ReGoods.git",
    live: "https://re-goods-c839.vercel.app/"
  },
  {
    title: "WILD-LANKA-GO",
    category: "Website Design",
    image: "/images/Wild Lanka.jpg",
    description: "Web Design, App Design",
    github: "https://github.com/Piyumal-Bandaranayake/WILD-LANKA-GO.git",
  },
  {
    title: "Medico 360",
    category: "Website Design",
    description: "Web Design, App Design",
    image: "/images/Medico 360.png",
    github: "https://github.com/Piyumal-Bandaranayake/Medico360-online-Pharmacy-.git",
  },




];

const Projects = () => {
  return (
    <section id="projects" className="relative py-28 bg-[#030712] overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-accent/10 to-accent-secondary/10 border border-white/5 text-accent text-[10px] font-black tracking-widest rounded-lg mb-4 uppercase">
            MY PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-4 leading-tight">
            FEATURED <span className="text-gradient-neon">PROJECTS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              className="glass-card rounded-[2.5rem] overflow-hidden group cursor-pointer relative"
            >
              {/* Image Preview Container */}
              <div className="p-4 h-[280px]">
                <div className="relative h-full w-full rounded-[2rem] overflow-hidden bg-[#070a13] border border-white/5">
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none" />

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Card Details */}
              <div className="px-8 pb-8 pt-2 flex items-center justify-between">
                <div>
                  <span className="inline-block px-2.5 py-0.5 bg-white/[0.04] border border-white/5 text-accent text-[8px] font-black tracking-wider rounded-md mb-2 uppercase">
                    {project.category}
                  </span>
                  <h4 className="text-lg font-black text-white mb-1 uppercase tracking-tighter group-hover:text-accent transition-colors duration-300">{project.title}</h4>
                  <p className="text-gray-400 text-[10px] font-bold tracking-wider uppercase">
                    {project.description}
                  </p>
                </div>

                {/* Interactive Action Buttons */}
                <div className="flex gap-2.5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/[0.03] hover:bg-gradient-to-tr hover:from-accent hover:to-accent-secondary border border-white/10 hover:border-transparent rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg shadow-black/25"
                      title="View Code"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/[0.03] hover:bg-gradient-to-tr hover:from-accent hover:to-accent-secondary border border-white/10 hover:border-transparent rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg shadow-black/25"
                      title="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-2 mt-12 mb-16">
          <div className="w-6 h-1.5 rounded-full bg-accent" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
        </div>

        {/* Explore Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <Link
            href="/projects"
            className="px-10 py-4 border border-white/10 bg-white/5 hover:bg-white/10 text-white text-[11px] font-black tracking-widest rounded-full transition-all shadow-xl shadow-black/30 hover:scale-105 active:scale-95 cursor-pointer"
          >
            EXPLORE OTHER PROJECTS
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

