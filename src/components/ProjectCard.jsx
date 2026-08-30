import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-surface rounded-xl p-6 border border-white/5 hover:border-primary/50 transition-all duration-300 group flex flex-col h-full hover:shadow-[0_0_30px_-5px_rgba(0,217,255,0.15)] relative overflow-hidden"
    >
      {/* Subtle background glow effect on hover */}
      <div className="absolute -inset-px bg-gradient-to-r from-primary/0 via-secondary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl -z-10"></div>
      
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-textHeading group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <span className="text-xs font-semibold px-2 py-1 bg-secondary/20 text-secondary rounded-full whitespace-nowrap ml-4 border border-secondary/20">
          {project.status}
        </span>
      </div>
      
      <p className="text-textBody text-sm mb-6 flex-grow">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t, i) => (
          <span key={i} className="text-xs bg-background px-2 py-1 rounded text-textBody border border-white/5">
            {t}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4 mt-auto">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-textBody hover:text-textHeading transition-colors"
          >
            <FaGithub size={16} /> Source Code
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
