import React from 'react';
import { motion } from 'framer-motion';

const SkillCategory = ({ category, skills, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-surface rounded-xl p-6 border border-white/5"
    >
      <h3 className="text-lg font-bold text-textHeading mb-4 border-b border-white/5 pb-2 inline-block relative">
        {category}
        <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-primary to-secondary"></span>
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <span 
            key={i} 
            className="bg-background px-3 py-1.5 rounded-lg text-sm font-medium text-textBody border border-white/5 shadow-sm hover:border-secondary/30 hover:text-textHeading transition-all"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;
