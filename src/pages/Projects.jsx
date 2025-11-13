import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-950"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(79,70,229,0.16),_transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            Selected Projects
          </motion.h2>
          <motion.p
            className="mt-4 text-base text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            A snapshot of products and experiments that explore user experience, realtime data, and collaborative tooling.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2" data-aos="fade-up" data-aos-delay="120">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        {/* Optional: Drop in a Framer Motion modal here for detailed case studies per project */}
      </div>
    </section>
  );
};

export default Projects;
