
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Download } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'sumitbassan9@gmail.com', link: 'mailto:sumitbassan9@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Chandigarh, India', link: '#' },
    { icon: Phone, label: 'Let\'s Chat', value: '+91 (Contact me via Email)', link: 'mailto:sumitbassan9@gmail.com' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-black font-heading mb-6">Get in <span className="gradient-text">Touch</span></h2>
        <p className="text-gray-400 text-lg max-w-2xl">
          Have a project in mind or just want to say hi? I'm always open to new opportunities 
          and interesting collaborations.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="space-y-8">
            {contactInfo.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center space-x-6 group p-4 rounded-2xl transition-colors hover:bg-white/5"
              >
                <div className="p-4 bg-blue-600/10 text-blue-400 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <item.icon size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-widest">{item.label}</p>
                  <p className="text-xl font-bold text-gray-200">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="space-y-6 pt-10 border-t border-gray-800">
            <h4 className="text-lg font-bold">Follow Me</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/sumitbassan9" target="_blank" rel="noopener noreferrer" className="p-4 glass-card rounded-2xl hover:text-blue-400 hover:scale-110 transition-all">
                <Github size={24} />
              </a>
              <a href="#" className="p-4 glass-card rounded-2xl hover:text-blue-400 hover:scale-110 transition-all">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-4 glass-card rounded-2xl hover:text-blue-400 hover:scale-110 transition-all">
                <Twitter size={24} />
              </a>
            </div>
            
            <button className="flex items-center space-x-3 w-full justify-center py-4 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-all mt-6">
              <Download size={20} />
              <span>Download Full Resume</span>
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden">
          {submitted ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-10"
            >
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                <Send size={40} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
              <p className="text-gray-400 mb-8">Thanks for reaching out, Sumit will get back to you shortly.</p>
              <button onClick={() => setSubmitted(false)} className="text-blue-400 font-bold hover:underline">
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400 ml-1">Your Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400 ml-1">Email Address</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400 ml-1">Subject</label>
                <input
                  required
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400 ml-1">Your Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-all resize-none"
                />
              </div>
              <button
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center space-x-3"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
