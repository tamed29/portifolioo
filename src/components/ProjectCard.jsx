import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import VanillaTilt from 'vanilla-tilt';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const tiltOptions = {
  max: 12,
  speed: 400,
  glare: true,
  'max-glare': 0.3,
  perspective: 900,
  scale: 1.02,
};

const ProjectCard = ({ project, index = 0 }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return undefined;

    VanillaTilt.init(cardRef.current, tiltOptions);

    return () => {
      cardRef.current?.vanillaTilt?.destroy();
    };
  }, []);

  return (
    <motion.article
      ref={cardRef}
      className="tilt-card group relative h-full rounded-3xl border border-slate-200/70 bg-white/80 p-7 text-left shadow-xl shadow-slate-500/10 transition-colors duration-300 hover:border-indigo-400 dark:border-slate-700/70 dark:bg-slate-900/70 dark:shadow-slate-900/30"
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-offset="150"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-indigo-200/70 px-3 py-1 text-xs font-medium uppercase tracking-wide text-indigo-600 transition group-hover:bg-indigo-500 group-hover:text-white dark:border-indigo-500/30 dark:text-indigo-300 dark:group-hover:bg-indigo-500/80"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 pt-4 text-sm font-medium">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-transparent bg-indigo-500 px-4 py-2 text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-1 hover:bg-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            <FiExternalLink />
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition hover:-translate-y-1 hover:border-indigo-300 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-200 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
          >
            <FiGithub />
            GitHub
          </a>
        </div>
      </div>
      {/* Optional: Hook up a modal with more screenshots/details here */}
    </motion.article>
  );
};

export default ProjectCard;
