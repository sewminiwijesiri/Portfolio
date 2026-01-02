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
    <section id="services" className="relative py-20 bg-[#020617] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-[10px] font-black tracking-widest rounded-md mb-4 uppercase">
            SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-4 leading-tight">
            DESIGN <span className="text-accent">SERVICES</span> I AM PROVIDING
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                {React.cloneElement(service.icon, { size: 24 })}
              </div>
              <h4 className="text-lg font-black text-white mb-2 uppercase tracking-tighter">{service.name}</h4>
              <p className="text-gray-400 text-xs font-medium leading-relaxed">
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
