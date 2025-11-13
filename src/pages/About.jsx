import { motion } from 'framer-motion';
import SkillCard from '../components/SkillCard';
import { skills } from '../data/skills';

const About = () => {
  const highlights = [
    {
      title: 'Human-Centered UI',
      copy: 'Designing accessible and intuitive interfaces that feel delightful on any device.',
    },
    {
      title: 'Team Collaboration',
      copy: 'Thrives in agile teams, sharing knowledge, pairing, and shipping incremental value.',
    },
    {
      title: 'Continuous Learning',
      copy: 'Always iterating with new frameworks, dev tooling, and community workshops.',
    },
  ];

  const focusedSkillIds = ['react', 'javascript', 'tailwind', 'nextjs'];
  const featuredSkills = skills.filter((skill) => focusedSkillIds.includes(skill.id));

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 text-slate-900 dark:bg-slate-950 dark:text-slate-100"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(79,70,229,0.12),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.1),_transparent_50%)]" />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-16 px-6 text-center sm:px-8 lg:text-left">
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold uppercase tracking-[0.1em] text-indigo-500 sm:text-5xl">
              About Me
            </h1>
            <h2 className="mt-4 text-2xl font-semibold leading-snug sm:text-3xl">
              Tamirat Dereje — 3rd-year Software Engineering student at AMU, dedicated to crafting purposeful digital
              experiences.
            </h2>
            <p className="mt-6 text-base text-slate-600 dark:text-slate-300">
              I am a curious builder who loves turning ambitious ideas into scalable web applications. From ideation to
              deployment, I obsess over clean architecture, expressive UI, and maintainable codebases. I am passionate
              about empowering my community through workshops, mentorship, and open-source collaboration.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 text-left shadow-lg shadow-indigo-500/10 transition hover:-translate-y-1 hover:border-indigo-400 dark:border-slate-800/60 dark:bg-slate-900/60"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.copy}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-4xl font-bold uppercase tracking-[0.1em] text-indigo-500 dark:text-indigo-400 text-center sm:text-5xl">
              Focused Skills
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featuredSkills.map((skill, index) => (
                <SkillCard key={skill.id} skill={skill} index={index} />
              ))}
            </div>
            {/* Swap out the sliced skills above if you want a different subset highlighted */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
