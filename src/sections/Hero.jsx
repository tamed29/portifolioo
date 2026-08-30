import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { profile } from '../data/profile';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ChevronDown } from 'lucide-react';
import profileImg from '../assets/profile-neon.png.jpg';

const ProfileImage = ({ className }) => (
  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className={`relative group ${className}`}
  >
    {/* Gradient Glow Border */}
    <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-secondary rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="absolute -inset-3 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

    {/* Image Container - Perfect Circle */}
    <div className="relative w-full h-full bg-surface rounded-full p-1.5 shadow-2xl z-10 overflow-hidden">
      <div className="w-full h-full rounded-full overflow-hidden relative bg-background">
        <img
          src={profileImg}
          alt="Tamirat Dereje"
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
            if (e.target.nextSibling) {
              e.target.nextSibling.style.display = 'flex';
            }
          }}
        />
        <div className="hidden absolute inset-0 items-center justify-center text-textBody z-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
        </div>
      </div>
    </div>
  </motion.div>
);

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative flex flex-col justify-center overflow-hidden pt-20 lg:pt-0">
      {/* Subtle Background Elements for depth in both themes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[50%] bg-primary/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[50%] bg-secondary/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-[1140px] mx-auto px-6 md:px-12 lg:px-24 w-full flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 pt-10 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-primary/30 w-fit shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide text-primary uppercase">Open to Opportunities</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight">
            <span className="block text-2xl md:text-3xl font-medium text-textBody mb-2 tracking-normal">Hi, I'm</span>
            <span className="block text-textHeading mb-2">Tamirat</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-secondary pb-2">
              Dereje.
            </span>
          </h1>

          {/* Mobile Profile Image - Appears under the name, only on small screens */}
          <div className="flex lg:hidden my-2">
            <ProfileImage className="w-40 h-40 md:w-56 md:h-56" />
          </div>

          <div className="flex flex-col items-center lg:items-start gap-3 mt-4">
            <h2 className="text-2xl md:text-3xl text-textHeading font-bold tracking-tight text-center lg:text-left">
              Software Engineer <br className="hidden md:block" />
              <span className="text-textBody font-medium text-xl md:text-2xl">Specializing in AI & Full-Stack Architecture</span>
            </h2>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 text-sm text-textBody font-semibold">
              <span className="flex items-center gap-2 bg-surface px-3 py-1.5 rounded-md border border-textBody/10">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                10+ Projects Shipped
              </span>
              <span className="flex items-center gap-2 bg-surface px-3 py-1.5 rounded-md border border-textBody/10">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                4th-Year SE Student
              </span>
            </div>
          </div>

          <p className="text-textBody text-lg max-w-xl leading-relaxed mt-2 text-center lg:text-left">
            I engineer robust, scalable software solutions and integrate advanced artificial intelligence capabilities to drive business value. Focused on delivering production-ready, high-performance systems.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold tracking-wide text-sm cursor-pointer hover:shadow-[0_0_25px_rgba(0,217,255,0.4)] transition-all transform hover:-translate-y-1"
            >
              VIEW PROJECTS
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-8 py-4 rounded-xl bg-transparent text-textHeading border-2 border-primary/50 font-bold tracking-wide text-sm cursor-pointer hover:bg-primary/10 hover:border-primary transition-all transform hover:-translate-y-1"
            >
              CONTACT ME
            </Link>

            <div className="flex items-center gap-3 ml-2 mt-4 sm:mt-0">
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-surface border border-textBody/20 text-textHeading hover:text-[#24292e] dark:hover:text-white hover:border-[#24292e] dark:hover:border-white transition-all transform hover:-translate-y-1"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-surface border border-textBody/20 text-textHeading hover:text-[#0077b5] hover:border-[#0077b5] transition-all transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Desktop Profile Image - Appears on the right side, only on large screens */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:flex justify-center items-center w-full"
        >
          <ProfileImage className="w-[360px] h-[360px]" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <Link
        to="about"
        smooth={true}
        duration={500}
        offset={-80}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-textBody hover:text-primary transition-colors z-20"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </Link>
    </section>
  );
};

export default Hero;
