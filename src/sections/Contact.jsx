import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Mail, Phone, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from 'react-icons/fa';

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setFormStatus('loading');
    
    setTimeout(() => {
      setFormStatus('success');
      form.reset();
      setTimeout(() => setFormStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-surface/30">
      <div className="max-w-[1140px] mx-auto px-6 md:px-12 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          {/* Eyebrow Badge */}
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest text-primary bg-primary/10 border border-primary/20 uppercase mb-4 shadow-sm">
            <Mail size={14} className="text-primary" />
            <span>Get In Touch</span>
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-textHeading tracking-tight mb-4">
            Contact Me
          </h2>

          {/* Glowing Accent Line */}
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-full shadow-[0_0_15px_rgba(0,217,255,0.5)] mx-auto mb-6"></div>
          
          <p className="text-textBody text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed text-center">
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
              disabled={formStatus === 'loading'}
              className="w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(0,217,255,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center gap-3"
            >
              {formStatus === 'loading' ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  SENDING...
                </>
              ) : (
                'SEND MESSAGE'
              )}
            </button>
          </form>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
          <motion.a 
            href="mailto:tamiratdereje53@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="flex items-center justify-center gap-3 px-5 py-3.5 bg-surface/80 dark:bg-surface/80 border border-slate-200 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 rounded-full shadow-sm hover:shadow-[0_0_20px_-3px_rgba(0,217,255,0.3)] hover:-translate-y-1 transition-all duration-300 group"
          >
            <Mail className="text-[#EA4335] group-hover:scale-110 group-hover:brightness-125 transition-all duration-300" size={18} />
            <span className="text-textHeading text-sm font-semibold">Email</span>
          </motion.a>

          <motion.a 
            href={`tel:${profile.contact.phone.replace(/\s+/g, '')}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-3 px-5 py-3.5 bg-surface/80 dark:bg-surface/80 border border-slate-200 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 rounded-full shadow-sm hover:shadow-[0_0_20px_-3px_rgba(0,217,255,0.3)] hover:-translate-y-1 transition-all duration-300 group"
          >
            <Phone className="text-[#10B981] group-hover:scale-110 group-hover:brightness-125 transition-all duration-300" size={18} />
            <span className="text-textHeading text-sm font-semibold">Phone</span>
          </motion.a>
          
          <motion.a 
            href={`https://t.me/${profile.contact.telegram.replace('@', '')}`}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-3 px-5 py-3.5 bg-surface/80 dark:bg-surface/80 border border-slate-200 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 rounded-full shadow-sm hover:shadow-[0_0_20px_-3px_rgba(0,217,255,0.3)] hover:-translate-y-1 transition-all duration-300 group"
          >
            <FaTelegram className="text-[#229ED9] group-hover:scale-110 group-hover:brightness-125 transition-all duration-300" size={18} />
            <span className="text-textHeading text-sm font-semibold">Telegram</span>
          </motion.a>
          
          <motion.a 
            href={profile.contact.github}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-3 px-5 py-3.5 bg-surface/80 dark:bg-surface/80 border border-slate-200 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 rounded-full shadow-sm hover:shadow-[0_0_20px_-3px_rgba(0,217,255,0.3)] hover:-translate-y-1 transition-all duration-300 group"
          >
            <FaGithub className="text-[#181717] dark:text-white group-hover:scale-110 group-hover:brightness-125 transition-all duration-300" size={18} />
            <span className="text-textHeading text-sm font-semibold">GitHub</span>
          </motion.a>
          
          <motion.a 
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-3 px-5 py-3.5 bg-surface/80 dark:bg-surface/80 border border-slate-200 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 rounded-full shadow-sm hover:shadow-[0_0_20px_-3px_rgba(0,217,255,0.3)] hover:-translate-y-1 transition-all duration-300 group"
          >
            <FaLinkedin className="text-[#0A66C2] group-hover:scale-110 group-hover:brightness-125 transition-all duration-300" size={18} />
            <span className="text-textHeading text-sm font-semibold">LinkedIn</span>
          </motion.a>

          <motion.a 
            href={`https://instagram.com/${profile.contact.instagram.replace('@', '')}`}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-3 px-5 py-3.5 bg-surface/80 dark:bg-surface/80 border border-slate-200 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 rounded-full shadow-sm hover:shadow-[0_0_20px_-3px_rgba(0,217,255,0.3)] hover:-translate-y-1 transition-all duration-300 group"
          >
            <FaInstagram className="text-[#E4405F] group-hover:scale-110 group-hover:brightness-125 transition-all duration-300" size={18} />
            <span className="text-textHeading text-sm font-semibold">Instagram</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
