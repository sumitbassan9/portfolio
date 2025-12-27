
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  const categories = ['Frontend', 'Backend', 'Tools'];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-black font-heading mb-6">My <span className="gradient-text">Skills</span></h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A blend of modern technologies and industry standards that I've mastered over the years.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {categories.map((category) => (
          <div key={category} className="space-y-6">
            <h3 className="text-2xl font-bold border-b border-gray-800 pb-4 mb-8">{category}</h3>
            <div className="space-y-8">
              {SKILLS.filter(s => s.category === category).map((skill, index) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-lg font-medium text-gray-200">{skill.name}</span>
                    <span className="text-blue-400 font-mono text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-900 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1, ease: "circOut" }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-blue-600 to-purple-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-8 glass-card rounded-3xl text-center">
        <h4 className="text-2xl font-bold mb-4">Always Learning</h4>
        <p className="text-gray-400 max-w-xl mx-auto">
          Currently exploring WebGPU, advanced Shader programming, and distributed systems architecture 
           to keep pushing the boundaries of web possibilities.
        </p>
      </div>
    </div>
  );
};
