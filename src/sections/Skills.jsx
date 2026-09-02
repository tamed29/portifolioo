import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { 
  SiJavascript, SiTypescript, SiPython, SiPhp, SiMysql, 
  SiReact, SiNextdotjs, SiVite, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiLaravel, 
  SiPostgresql, SiMongodb, SiFirebase, 
  SiNumpy, SiPandas, 
  SiGit, SiGithub, SiVercel, SiRender, SiRailway, SiSupabase,
  SiCplusplus
} from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa';

// Combined and curated list
const coreSkills = [
  { name: "HTML5", Icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: FaCss3Alt, color: "#1572B6" },
  { name: "C++", Icon: SiCplusplus, color: "#00599C" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "PHP", Icon: SiPhp, color: "#777BB4" },
  { name: "Java", Icon: FaJava, color: "#5382A1" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "var(--text-heading)" },
  { name: "Vite", Icon: SiVite, color: "#646CFF" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", Icon: SiExpress, color: "var(--text-heading)" },
  { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "NumPy", Icon: SiNumpy, color: "#4DABCF" },
  { name: "Pandas", Icon: SiPandas, color: "#E6005C" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "var(--text-heading)" },
  { name: "Vercel", Icon: SiVercel, color: "var(--text-heading)" },
  { name: "Render", Icon: SiRender, color: "#46E3B7" },
  { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" }
];

const Skills = () => {
  // Quadruple items to ensure seamless infinite scroll
  const scrollItems = [...coreSkills, ...coreSkills, ...coreSkills, ...coreSkills];

  return (
    <section id="skills" className="py-24 relative z-10 overflow-hidden bg-surface/30">
      {/* Section Header Container */}
      <div className="max-w-[1140px] mx-auto px-6 md:px-12 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Eyebrow Badge */}
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest text-secondary bg-secondary/10 border border-secondary/20 uppercase mb-4 shadow-sm">
            <Cpu size={14} className="text-secondary" />
            <span>Tech Stack & Skills</span>
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-textHeading tracking-tight mb-4">
            Technologies & Skills
          </h2>

          {/* Glowing Accent Line */}
          <div className="w-24 h-1.5 bg-gradient-to-r from-secondary via-primary to-secondary rounded-full shadow-[0_0_15px_rgba(124,58,237,0.5)] mb-6" />

          {/* Subtitle */}
          <p className="text-textBody text-base md:text-lg max-w-2xl leading-relaxed">
            I am highly proficient across a modern stack of languages, frameworks, and databases, allowing me to build robust, full-stack architectures and intelligent AI applications.
          </p>
        </motion.div>
      </div>

      {/* FULL WIDTH SCREEN MARQUEE TICKER (Edge to Edge across screen width) */}
      <div className="w-full relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-6">
        <div className="relative flex overflow-hidden group">
          {/* Left & Right Edge Gradient Fade Mask */}
          <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-32 md:w-48 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-32 md:w-48 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

          {/* Infinite Scroll Track */}
          <div className="flex gap-16 md:gap-24 w-max animate-scroll-left">
            {scrollItems.map((skill, idx) => {
              const { Icon, color, name } = skill;
              return (
                <div 
                  key={idx} 
                  className="flex flex-col items-center justify-center min-w-[80px] gap-3.5 transition-transform duration-300 hover:scale-110 cursor-default group/icon"
                >
                  <div className="p-3 rounded-2xl bg-surface/50 border border-white/5 group-hover/icon:border-primary/40 shadow-sm transition-all duration-300">
                    <Icon 
                      size={54} 
                      style={{ color }}
                      className="drop-shadow-sm transition-all duration-300 group-hover/icon:brightness-110" 
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-textBody group-hover/icon:text-textHeading transition-colors">{name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
