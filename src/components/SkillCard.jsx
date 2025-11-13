import { motion } from 'framer-motion';

const SkillCard = ({ skill, index }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      className="glass-card group flex h-full flex-col justify-between rounded-3xl p-6 transition-transform duration-300"
      data-aos="fade-up"
      data-aos-delay={index * 60}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-2xl text-indigo-500 transition-colors group-hover:bg-indigo-500 group-hover:text-white dark:bg-indigo-500/20">
          <Icon />
        </span>
        <div>
          <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{skill.name}</h4>
          <p className="text-sm font-medium uppercase tracking-wide text-indigo-500">{skill.level}</p>
        </div>
      </div>
      <p className="mt-5 text-sm text-slate-500 dark:text-slate-300">
        {skill.description}
      </p>
      {/* Swap the motion variants above if you prefer fade/scale effects on hover */}
    </motion.div>
  );
};

export default SkillCard;
