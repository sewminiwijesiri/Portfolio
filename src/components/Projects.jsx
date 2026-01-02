"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
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
    title: "Medco 360",
    category: "Website Design",
    description: "Web Design, App Design",
    image: "/images/Medico 360.png",
    github: "https://github.com/Piyumal-Bandaranayake/Medico360-online-Pharmacy-.git",
  },

  
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 bg-[#020617] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-[10px] font-black tracking-widest rounded-md mb-6 uppercase">
            MY WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 leading-tight uppercase">
            RECENT <span className="text-white">PROJECT</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:bg-white/10 transition-all duration-500 shadow-2xl shadow-black/20"
            >
              <div className="p-4 h-[280px]">
                <div className="relative h-full w-full rounded-[2rem] overflow-hidden bg-white/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="px-8 pb-8 pt-2 flex items-end justify-between">
                <div>
                  <h4 className="text-xl font-black text-white mb-1 uppercase tracking-tighter">{project.title}</h4>
                  <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">
                    {project.description}
                  </p>
                </div>

                
                <div className="flex gap-3">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 hover:bg-accent border border-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg shadow-black/20"
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
                      className="w-10 h-10 bg-white/10 hover:bg-accent border border-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg shadow-black/20"
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

        {/* Carousel indicators (mockup) */}
        <div className="flex justify-center gap-2 mt-12 mb-16">
          <div className="w-2 h-2 rounded-full bg-accent" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
        </div>

        {/* Explore Button */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="flex justify-center"
        >
          <Link 
            href="/projects"
            className="px-10 py-4 bg-white/5 border border-white/10 text-white text-[11px] font-black tracking-widest rounded-full hover:bg-accent hover:text-white transition-all duration-300 shadow-xl shadow-black/20 hover:scale-105 active:scale-95"
          >
            EXPLORE OTHER PROJECTS →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

