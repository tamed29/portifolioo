import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { getProjectImage } from '../utils/projectImages';

const ProjectCard = ({ project, index, onSelectProject }) => {
  const projectImg = getProjectImage(project.imageKey);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-surface/90 dark:bg-surface/80 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-white/10 hover:border-primary/60 dark:hover:border-primary/60 transition-all duration-300 group flex flex-col h-full hover:shadow-[0_0_35px_-5px_rgba(0,217,255,0.3)] hover:-translate-y-2 relative overflow-hidden"
    >
      {/* Background ambient glow on hover */}
      <div className="absolute -inset-px bg-gradient-to-r from-primary/0 via-secondary/15 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10" />

      {/* Taller & Larger Header Screenshot Image Box */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-xl overflow-hidden bg-slate-950 shadow-md">
        <img 
          src={projectImg} 
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500"
          loading="lazy"
        />

        {/* Subtle Bottom Transition Edge Fade */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-950/70 to-transparent opacity-80 pointer-events-none" />

        {/* Status Badge ONLY (Top Right Corner) */}
        <span className="absolute top-3 right-3 text-[11px] font-bold px-2.5 py-1 bg-slate-900/85 backdrop-blur-md text-secondary border border-secondary/35 rounded-full shadow-md z-10">
          {project.status}
        </span>
      </div>

      {/* Card Bottom Area (Sleek Compact Title & Action Button) */}
      <div className="pt-4 flex flex-col flex-grow justify-between">
        {/* Decreased Compact Project Title */}
        <h3 className="text-base sm:text-lg font-bold text-textHeading group-hover:text-primary transition-colors duration-300 mb-4 line-clamp-1">
          {project.title}
        </h3>

        {/* View Project Button */}
        <button
          onClick={() => onSelectProject(project)}
          className="w-full py-2.5 px-4 rounded-xl bg-background border border-slate-200 dark:border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 text-textHeading group-hover:text-primary font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>View Project</span>
          <ArrowRight size={15} className="transform group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
