import { motion } from 'framer-motion';
import portrait from '../assets/images/image.png';
import useWindowSize from '../hooks/useWindowSize';

const heroVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const Home = () => {
  const { width } = useWindowSize();
  const glowSize = Math.min(Math.max(width * 0.6, 320), 720);

  return (
    <section
      id="home"
      className="hero-gradient relative flex min-h-screen items-center overflow-hidden py-28 text-slate-900 transition-colors duration-500 dark:text-slate-100"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60 blur-3xl"
        style={{
          background: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.65) 0%, transparent ${glowSize * 0.8}px),
          radial-gradient(circle at 20% 20%, rgba(99,102,241,0.45) 0%, transparent ${glowSize}px),
          radial-gradient(circle at 80% 35%, rgba(56,189,248,0.45) 0%, transparent ${glowSize * 0.9}px),
          radial-gradient(circle at 50% 90%, rgba(14,165,233,0.35) 0%, transparent ${glowSize * 0.7}px)`,
        }}
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-16 px-6 text-center lg:flex-row lg:items-start lg:justify-between lg:px-8 lg:text-left">
        <motion.div
          className="max-w-3xl space-y-6"
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.span
            className="inline-flex items-center rounded-full border border-slate-900/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-700 shadow-lg shadow-slate-900/5 dark:border-white/20 dark:bg-white/10 dark:text-white dark:shadow-none"
            variants={heroVariants}
          >
            3rd-year Software Engineering Student @ AMU
          </motion.span>
          <motion.h1
            className="text-[2.5rem] font-semibold leading-tight sm:text-[2.9rem] xl:text-[3.4rem]"
            variants={heroVariants}
          >
            Tamirat Dereje — building human-centered software with clean UX and performant code.
          </motion.h1>
          <motion.p
            className="text-base text-slate-600 sm:text-lg dark:text-slate-200/90"
            variants={heroVariants}
          >
            Enthusiastic about modern web technologies, design systems, and sharing knowledge with the tech community. I
            love translating complex problems into elegant solutions powered by React, Tailwind CSS, and robust tooling.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-start"
            variants={heroVariants}
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-xl shadow-indigo-500/30 transition hover:-translate-y-1 hover:bg-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-900/40 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 transition hover:-translate-y-1 hover:border-slate-900 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200 dark:border-white/30 dark:text-white dark:hover:border-white dark:hover:bg-white/10 dark:focus-visible:ring-white/70"
            >
              Contact Me
            </a>
          </motion.div>
          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.3em] text-slate-500 sm:justify-start dark:text-slate-200/70"
            variants={heroVariants}
          >
            <span>React</span>
            <span>Tailwind CSS</span>
            <span>Framer Motion</span>
            <span>EmailJS</span>
          </motion.div>
          {/* Tip: Drop in a Lottie animation or animated illustration here for extra personality */}
        </motion.div>
        <motion.div
          className="relative flex items-center justify-center transition-transform duration-500 hover:scale-105"
          initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-white/10 p-3 shadow-2xl ring-4 ring-white/10 backdrop-blur-xl sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem]">
            <div className="absolute inset-3 rounded-full bg-gradient-to-br from-indigo-400 via-blue-500 to-sky-500 opacity-80 blur-3xl" />
            <img
              src={portrait}
              alt="Tamirat Dereje portrait"
              className="relative h-full w-full rounded-full border-[6px] border-white/70 object-cover shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
