import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Tilt } from 'react-tilt';

const SkillCard = ({ skill, index }) => {
  const Icon = skill.icon;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  const progressMap = {
    'Beginner': 40,
    'Intermediate': 70,
    'Advanced': 95,
  };
  const percentage = progressMap[skill.level] || 75;
  const circumference = 2 * Math.PI * 20; 
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <Tilt options={{ max: 15, scale: 1.05, speed: 400, glare: true, 'max-glare': 0.1 }}>
      <motion.div
        ref={ref}
        className="glass-card group relative flex h-full flex-col justify-between rounded-3xl p-6 transition-colors hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-2xl text-indigo-500 transition-colors group-hover:bg-indigo-500 group-hover:text-white dark:bg-indigo-500/20">
              <Icon />
            </span>
            <div>
              <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{skill.name}</h4>
              <p className="text-sm font-medium uppercase tracking-wide text-indigo-500">{skill.level}</p>
            </div>
          </div>
          
          {/* Animated SVG Progress Ring */}
          <div className="relative h-12 w-12 shrink-0">
            <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="20" className="fill-none stroke-slate-200 dark:stroke-slate-700/50" strokeWidth="4" />
              <motion.circle
                cx="24" cy="24" r="20"
                className="fill-none stroke-indigo-500"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ strokeDashoffset: circumference }}
                animate={isInView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
                transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 + 0.2 }}
                style={{ strokeDasharray: circumference }}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-slate-600 dark:text-slate-300">
              {percentage}%
            </span>
          </div>
        </div>
        <p className="mt-5 text-sm text-slate-500 dark:text-slate-300">
          {skill.description}
        </p>
      </motion.div>
    </Tilt>
  );
};

export default SkillCard;
