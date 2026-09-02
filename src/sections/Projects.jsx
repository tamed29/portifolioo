import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, FolderGit2 } from 'lucide-react';
import { profile } from '../data/profile';
import ProjectCard from '../components/ProjectCard';
import ProjectDetailModal from '../components/ProjectDetailModal';

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const displayedProjects = isExpanded
    ? profile.projects
    : profile.projects.slice(0, 3);

  return (
    <section id="projects" className="py-24 relative z-10 bg-surface/30">
      <div className="max-w-[1140px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Styled Professional Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          {/* Eyebrow Badge */}
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest text-primary bg-primary/10 border border-primary/20 uppercase mb-4 shadow-sm">
            <FolderGit2 size={14} className="text-primary" />
            <span>Featured Works</span>
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-textHeading tracking-tight mb-4">
            Some of My Projects
          </h2>

          {/* Glowing Accent Line */}
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-full shadow-[0_0_15px_rgba(0,217,255,0.5)] mb-6" />

          {/* Subtitle */}
          <p className="text-textBody text-base md:text-lg max-w-2xl leading-relaxed">
            A selection of real-world web applications and management platforms I've architected, built, and deployed to production.
          </p>
        </motion.div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="sync">
            {displayedProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onSelectProject={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More / Show Less Toggle Button */}
        {profile.projects.length > 3 && (
          <motion.div
            layout
            className="mt-12 flex justify-center"
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="py-3 px-8 rounded-full bg-surface border border-primary/30 hover:border-primary text-textHeading hover:text-primary font-bold text-sm flex items-center gap-2.5 shadow-[0_0_20px_-5px_rgba(0,217,255,0.2)] hover:shadow-[0_0_25px_rgba(0,217,255,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>{isExpanded ? "Show Less" : "View More Projects"}</span>
              {isExpanded ? (
                <ChevronUp size={18} className="text-primary" />
              ) : (
                <ChevronDown size={18} className="text-primary" />
              )}
            </button>
          </motion.div>
        )}
      </div>

      {/* Detail View Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
