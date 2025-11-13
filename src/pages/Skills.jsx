import { motion } from 'framer-motion';
import SkillCard from '../components/SkillCard';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.12),_transparent_45%),radial-gradient(circle_at_bottom,_rgba(14,116,144,0.1),_transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            Core Technical Skills
          </motion.h2>
          <motion.p
            className="mt-4 text-base text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            A mix of front-end craftsmanship, tooling, and collaboration workflows that help me build polished
            products end-to-end.
          </motion.p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

