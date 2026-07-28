"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Navbar, Footer } from '@/components';

const allProjects = [
  {
    title: "Uni Flow",
    category: "web App",
    description: "web App Design",
    image: "/images/uniflow.jpeg",
    github: "https://github.com/sewminiwijesiri/it3030-paf-2026-smart-KND-group11.git",
  },
  {
    title: "Ask Mate",
    category: "web App",
    description: "web App Design",
    image: "/images/askmate.jpeg",
    github: "https://github.com/sewminiwijesiri/askmate.git",
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
    description: "Web Design, App Design",
    image: "/images/Regoods.png",
    github: "https://github.com/Piyumal-Bandaranayake/ReGoods.git",
    live: "https://re-goods-c839.vercel.app/"
  },
  {
    title: "WILD-LANKA-GO",
    category: "Website Design",
    description: "Web Design, App Design",
    image: "/images/Wild Lanka.jpg",
    github: "https://github.com/Piyumal-Bandaranayake/WILD-LANKA-GO.git",
  },

  {
    title: "Medco 360",
    category: "Website Design",
    description: "Web Design, App Design",
    image: "/images/Medico 360.png",
    github: "https://github.com/Piyumal-Bandaranayake/Medico360-online-Pharmacy-.git",
  },
  {
    title: "Lumara",
    category: "UI UX Design",
    description: "UI UX Design for jewelry store",
    image: "/images/figma2.png",
    live: "https://www.figma.com/design/GrrfLDjMYC3MHTf32gggNQ/Jewelry?node-id=24-165&t=ner1D7RnUe06As9u-1"
  },
  {
    title: "Property Pro",
    category: "Website Design",
    description: "Web Design, App Design",
    image: "/images/propertypro.jpg",
    github: "https://github.com/sewminiwijesiri/propertypro.git",
  },
  {
    title: "WellTrack",
    category: "Mobile App",
    description: "Mobile App Design",
    image: "/images/welltrack.png",
    github: "https://github.com/sewminiwijesiri/WellTrack.git",
  }
];

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-[#030712]">
      <Navbar />

      <section className="pt-40 pb-24 relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-accent-secondary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-accent text-xs font-black tracking-[0.2em] uppercase mb-8 hover:-translate-x-1.5 transition-transform duration-300"
            >
              <ArrowLeft size={16} /> BACK TO HOME
            </Link>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 uppercase leading-none">
              ALL <span className="text-gradient-neon">PROJECTS</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
              A deeper look into my technical journey and digital craftsmanship. Each project represents a unique challenge and solution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className="glass-card rounded-[2.5rem] overflow-hidden group cursor-pointer relative"
              >
                {/* Image Preview Container */}
                <div className="p-4 h-[280px]">
                  <div className="relative h-full w-full rounded-[2rem] overflow-hidden bg-[#070a13] border border-white/5">
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none" />

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Details */}
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

                  {/* Links */}
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
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProjectsPage;

