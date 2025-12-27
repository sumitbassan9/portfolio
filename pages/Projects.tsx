
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-black font-heading mb-6">Recent <span className="gradient-text">Works</span></h2>
        <p className="text-gray-400 text-lg max-w-2xl">
          A selection of projects where I've combined creative design with technical excellence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative glass-card rounded-3xl overflow-hidden flex flex-col h-full transition-all"
          >
            {/* Project Image */}
            <div className="relative h-56 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
              <div className="absolute top-4 right-4 flex space-x-3">
                <a href={project.github} className="p-2 bg-black/40 backdrop-blur-md rounded-lg text-white hover:bg-white hover:text-black transition-all">
                  <Github size={18} />
                </a>
                <a href={project.link} className="p-2 bg-black/40 backdrop-blur-md rounded-lg text-white hover:bg-white hover:text-black transition-all">
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="text-gray-500 mb-8">Looking for more? Check out my older experiments on GitHub.</p>
        <a 
          href="https://github.com/sumitbassan9" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 text-white font-bold bg-gray-900 px-8 py-4 rounded-2xl hover:bg-gray-800 transition-colors"
        >
          <Github />
          <span>Explore More Repositories</span>
        </a>
      </div>
    </div>
  );
};
