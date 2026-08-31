import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Mail, Phone, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from 'react-icons/fa';

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus(null), 5000);
    e.target.reset(); // clear form
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-surface/30">
      <div className="max-w-[1140px] mx-auto px-6 md:px-12 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-textHeading mb-6">Contact</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-8"></div>
          
          <p className="text-textBody text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed text-left md:text-center">
            I'm currently open to {profile.openTo.replace(/\.$/, '')}.
            <br className="hidden md:block" />
            <span className="inline-block mt-2">
              Whether you have a question, a project proposal, or just want to say hi, I'd love to hear from you. My inbox is always open!
            </span>
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto bg-surface/80 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 shadow-[0_0_30px_-10px_rgba(0,217,255,0.2)] mb-16"
        >
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {formStatus === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/10 border border-green-500/30 text-green-400 p-4 rounded-lg text-sm font-medium text-center shadow-sm"
              >
                Thank you for reaching out! Your message has been sent successfully, and I will reply as soon as possible.
              </motion.div>
            )}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-bold text-textBody tracking-widest uppercase">Name</label>
              <input 
                type="text" 
                id="name"
                required
                placeholder="Your name" 
                className="bg-background border border-white/10 rounded-lg px-4 py-3 text-textHeading placeholder:text-textBody/50 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-bold text-textBody tracking-widest uppercase">Email</label>
              <input 
                type="email" 
                id="email"
                required
                placeholder="your@email.com" 
                className="bg-background border border-white/10 rounded-lg px-4 py-3 text-textHeading placeholder:text-textBody/50 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-bold text-textBody tracking-widest uppercase">Message</label>
              <textarea 
                id="message"
                required
                rows="4"
                placeholder="Tell me about your idea, timeline, and goals..." 
                className="bg-background border border-white/10 rounded-lg px-4 py-3 text-textHeading placeholder:text-textBody/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(0,217,255,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all transform hover:-translate-y-1"
            >
              SEND MESSAGE
            </button>
          </form>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-6">
          <motion.a 
            href="mailto:tamiratdereje53@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="flex items-center gap-3 px-6 py-4 bg-surface border border-white/5 rounded-xl hover:border-primary/50 hover:shadow-[0_0_20px_-5px_rgba(0,217,255,0.3)] transition-all group"
          >
            <Mail className="text-primary group-hover:scale-110 transition-transform" />
            <span className="text-textHeading">tamiratdereje53@gmail.com</span>
          </motion.a>
          <motion.a 
            href={`tel:${profile.contact.phone.replace(/\s+/g, '')}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3 px-6 py-4 bg-surface border border-white/5 rounded-xl hover:border-primary/50 hover:shadow-[0_0_20px_-5px_rgba(0,217,255,0.3)] transition-all group"
          >
            <Phone className="text-primary group-hover:scale-110 transition-transform" />
            <span className="text-textHeading">{profile.contact.phone}</span>
          </motion.a>
          
          <motion.a 
            href={`https://t.me/${profile.contact.telegram.replace('@', '')}`}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 px-6 py-4 bg-surface border border-white/5 rounded-xl hover:border-primary/50 hover:shadow-[0_0_20px_-5px_rgba(0,217,255,0.3)] transition-all group"
          >
            <FaTelegram className="text-primary group-hover:scale-110 transition-transform" />
            <span className="text-textHeading">Telegram</span>
          </motion.a>
          
          <motion.a 
            href={profile.contact.github}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 px-6 py-4 bg-surface border border-white/5 rounded-xl hover:border-primary/50 hover:shadow-[0_0_20px_-5px_rgba(0,217,255,0.3)] transition-all group"
          >
            <FaGithub className="text-primary group-hover:scale-110 transition-transform" />
            <span className="text-textHeading">GitHub</span>
          </motion.a>
          
          <motion.a 
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 px-6 py-4 bg-surface border border-white/5 rounded-xl hover:border-primary/50 hover:shadow-[0_0_20px_-5px_rgba(0,217,255,0.3)] transition-all group"
          >
            <FaLinkedin className="text-primary group-hover:scale-110 transition-transform" />
            <span className="text-textHeading">LinkedIn</span>
          </motion.a>

          <motion.a 
            href={`https://instagram.com/${profile.contact.instagram.replace('@', '')}`}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3 px-6 py-4 bg-surface border border-white/5 rounded-xl hover:border-primary/50 hover:shadow-[0_0_20px_-5px_rgba(0,217,255,0.3)] transition-all group"
          >
            <FaInstagram className="text-primary group-hover:scale-110 transition-transform" />
            <span className="text-textHeading">Instagram</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
