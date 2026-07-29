"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Smartphone, Server, Globe } from 'lucide-react';

const services = [
  { name: 'Frontend Development', items: 'React, Next.js, Tailwind', icon: <Layout size={32} /> },
  { name: 'Backend Development', items: 'Node.js, Express, Java', icon: <Server size={32} /> },
  { name: 'Database Management', items: 'MongoDB, MySQL', icon: <Database size={32} /> },
  { name: 'Mobile App Development', items: 'Kotlin, Android SDK', icon: <Smartphone size={32} /> },
  { name: 'UI/UX Design Tools', items: 'Figma, Git', icon: <Code2 size={32} /> },
  { name: 'Web Services & API', items: 'Stripe, REST APIs', icon: <Globe size={32} /> },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-[#030712] overflow-hidden bg-dot-pattern">
      {/* Background glowing elements */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-accent/10 to-accent-secondary/10 border border-white/5 text-accent text-[9px] font-heading font-black tracking-widest rounded-lg mb-4 uppercase">
            SERVICES & EXPERTISE
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-white tracking-tighter mb-4 leading-tight uppercase">
            TECHNICAL <span className="text-gradient-neon">SOLUTIONS</span> I DELIVER
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.08 }}
              className="glass-card p-8 rounded-[2rem] group relative overflow-hidden cursor-pointer"
            >
              {/* Card Inner Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="w-12 h-12 bg-gradient-to-tr from-accent/10 to-accent-secondary/5 border border-white/10 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-gradient-to-tr group-hover:from-accent group-hover:to-accent-secondary group-hover:text-white transition-all duration-500">
                {React.cloneElement(service.icon, { size: 24 })}
              </div>
              <h4 className="text-lg font-heading font-black text-white mb-2 uppercase tracking-tighter group-hover:text-accent transition-colors duration-300">{service.name}</h4>
              <p className="text-slate-400 text-xs font-semibold leading-relaxed">
                {service.items}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
