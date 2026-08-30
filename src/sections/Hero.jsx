import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { profile } from '../data/profile';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative flex flex-col justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] animate-glow" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="max-w-[1140px] mx-auto px-6 md:px-12 lg:px-24 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/80 backdrop-blur border border-primary/20 w-fit shadow-[0_0_15px_rgba(0,217,255,0.15)]">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide text-primary uppercase">Open to Opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight">
            <span className="block text-textHeading mb-2">Tamirat</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-secondary pb-2">
              Dereje.
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-textHeading font-bold tracking-tight mt-2">
            Software Engineer <br className="hidden md:block" />
            <span className="text-textBody font-medium text-xl md:text-2xl">Specializing in AI & Full-Stack Architecture</span>
          </h2>
          
          <p className="text-textBody text-lg max-w-xl leading-relaxed mt-4">
            I engineer robust, scalable software solutions and integrate advanced artificial intelligence capabilities to drive business value. Focused on delivering production-ready, high-performance systems.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-6">
            <Link 
              to="projects" 
              smooth={true} 
              duration={500} 
              offset={-80}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold tracking-wide text-sm cursor-pointer hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-all transform hover:-translate-y-1"
            >
              VIEW PROJECTS
            </Link>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500}
              offset={-80} 
              className="px-8 py-4 rounded-xl bg-surface/50 backdrop-blur text-textHeading border border-white/10 font-bold tracking-wide text-sm cursor-pointer hover:border-primary/50 hover:bg-surface transition-all transform hover:-translate-y-1"
            >
              CONTACT ME
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center items-center w-full hidden md:flex"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative w-[320px] h-[420px] lg:w-[420px] lg:h-[520px] group"
          >
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-secondary opacity-20 blur-3xl rounded-[3rem] transition-opacity duration-500 group-hover:opacity-40"></div>
            
            {/* Image Container */}
            <div className="relative w-full h-full bg-surface rounded-[2.5rem] p-2 shadow-2xl border border-white/10 z-10">
              <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-[#0a0e17]">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-70"></div>
                <img 
                  src="/src/assets/profile-neon.png.jpg" 
                  alt="Tamirat Dereje" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = 'flex';
                    }
                  }}
                />
                <div className="hidden absolute inset-0 items-center justify-center text-textBody z-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
