import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Code2, CheckCircle2, Sparkles, Layers, Hammer } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { getProjectImage } from '../utils/projectImages';

const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) return null;

  const projectImg = getProjectImage(project.imageKey);

  // Lock body scroll on mount, unlock on unmount + Escape key listener
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8 pt-20 md:pt-24 pb-8 overflow-y-auto bg-background/85 backdrop-blur-lg">
        {/* Backdrop click listener */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 -z-10 bg-slate-950/70"
          onClick={onClose}
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="bg-surface w-full max-w-3xl rounded-2xl border border-primary/30 shadow-[0_0_50px_-5px_rgba(0,217,255,0.25)] overflow-hidden my-auto relative flex flex-col max-h-[85vh]"
        >
          {/* Top Header Bar with Back Button */}
          <div className="px-5 py-3.5 bg-surface/95 border-b border-white/10 flex justify-between items-center sticky top-0 z-30 backdrop-blur-md">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-textHeading hover:text-primary transition-all py-1.5 px-3.5 rounded-xl bg-background/80 hover:bg-primary/10 border border-white/10 hover:border-primary/40 shadow-sm"
            >
              <ArrowLeft size={16} className="text-primary" />
              <span>Back to Projects</span>
            </button>

            <span className="text-xs font-semibold px-3 py-1 bg-secondary/20 text-secondary border border-secondary/30 rounded-full">
              {project.status}
            </span>
          </div>

          {/* Scrollable Content Container */}
          <div className="overflow-y-auto custom-scrollbar flex-grow">
            {/* Header Screenshot Image Banner */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-slate-950 overflow-hidden">
              <img 
                src={projectImg} 
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
            </div>

            {/* Content Body */}
            <div className="p-5 sm:p-8 space-y-6">
              {/* Full Project Name & Category */}
              <div>
                <span className="text-xs font-extrabold tracking-widest text-primary uppercase">
                  {project.category || "PROJECT DETAIL"}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-textHeading leading-tight mt-1">
                  {project.title}
                </h3>
              </div>

              {/* Active Development Notice for Abbay Bus */}
              {project.title.toLowerCase().includes("abbay") && (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-start gap-3 text-sm font-medium shadow-sm">
                  <Hammer size={20} className="shrink-0 mt-0.5 text-amber-400" />
                  <div>
                    <span className="font-bold block mb-0.5">Active Project Status</span>
                    I am still actively working on this project — the web platform & trip operations are live, and the mobile app build is currently ongoing!
                  </div>
                </div>
              )}

              {/* Full Detailed Description */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                  <Sparkles size={14} />
                  <span>Overview & Purpose</span>
                </h4>
                <p className="text-textBody text-base sm:text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Key Features & Highlights */}
              {project.features && project.features.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                    <Layers size={14} />
                    <span>Key Features & Capabilities</span>
                  </h4>
                  <div className="grid gap-2.5">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-background/60 border border-white/5 text-sm text-textBody">
                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack Labeled Badges */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                  <Code2 size={14} />
                  <span>Technologies & Tech Stack</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-lg bg-background border border-white/10 text-textHeading shadow-sm hover:border-primary/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 min-w-[160px] py-3.5 px-6 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,217,255,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 min-w-[160px] py-3.5 px-6 rounded-xl bg-background border border-white/15 text-textHeading font-bold text-sm flex items-center justify-center gap-2 hover:border-primary/50 hover:bg-surface hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <FaGithub size={18} />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
