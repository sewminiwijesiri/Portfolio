"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Navbar, Footer } from '@/components';

const allProjects = [
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
  }
];

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-[#020617]">
      <Navbar />

      <section className="pt-40 pb-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-accent text-xs font-black tracking-widest uppercase mb-8 hover:translate-x-[-5px] transition-transform"
            >
              <ArrowLeft size={16} /> BACK TO HOME
            </Link>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 uppercase">
              ALL <span className="text-accent underline decoration-accent/30 underline-offset-10">PROJECTS</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              A deeper look into my technical journey and digital craftsmanship. Each project represents a unique challenge and solution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
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
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProjectsPage;

