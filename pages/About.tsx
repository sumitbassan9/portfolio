
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES, EDUCATION } from '../constants';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-black font-heading mb-6">About <span className="gradient-text">Me</span></h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Over 6 years of experience in crafting high-end web experiences. I blend technical prowess 
          with creative design thinking.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Experience Timeline */}
        <div className="space-y-8">
          <div className="flex items-center space-x-4 mb-10">
            <div className="p-3 bg-blue-600 rounded-xl">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Experience</h3>
          </div>
          
          <div className="space-y-12 relative border-l border-gray-800 ml-6 pl-10">
            {EXPERIENCES.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[3.15rem] top-1 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                <span className="text-blue-400 text-sm font-bold block mb-1">{exp.period}</span>
                <h4 className="text-xl font-bold mb-1">{exp.role}</h4>
                <p className="text-gray-500 mb-4">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start">
                      <span className="mr-2 text-blue-500">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Awards */}
        <div className="space-y-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4 mb-10">
              <div className="p-3 bg-purple-600 rounded-xl">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-8">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="glass-card p-6 rounded-2xl">
                  <span className="text-purple-400 text-sm font-bold">{edu.period}</span>
                  <h4 className="text-lg font-bold mt-1">{edu.degree}</h4>
                  <p className="text-gray-500">{edu.school}</p>
                  <p className="text-gray-400 text-sm mt-4 italic">{edu.achievements}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
             <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-pink-600 rounded-xl">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Key Strengths</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Creative UI', 'WebGL/Canvas', 'Performant JS', 'Team Lead'].map((s) => (
                <div key={s} className="glass-card px-4 py-3 rounded-xl text-center text-sm font-medium">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
