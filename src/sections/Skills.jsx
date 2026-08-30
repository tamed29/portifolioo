import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiJavascript, SiTypescript, SiPython, SiPhp, SiMysql, 
  SiReact, SiNextdotjs, SiVite, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiLaravel, 
  SiPostgresql, SiMongodb, SiFirebase, 
  SiNumpy, SiPandas, 
  SiGit, SiGithub, SiVercel, SiRender, SiRailway, SiSupabase,
  SiCplusplus
} from 'react-icons/si';
import { FaJava, FaDatabase, FaHtml5, FaCss3Alt } from 'react-icons/fa';

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
  // Quadruple the items to ensure the marquee fills the screen seamlessly
  const scrollItems = [...coreSkills, ...coreSkills, ...coreSkills, ...coreSkills];

  return (
    <section id="skills" className="py-24 relative z-10 overflow-hidden bg-surface/30">
      <div className="max-w-[1140px] mx-auto px-6 md:px-12 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textHeading mb-4">
            Technologies & Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
          <p className="text-textBody text-lg max-w-2xl leading-relaxed">
            I am highly proficient across a modern stack of languages, frameworks, and databases, allowing me to build robust, full-stack architectures. I continuously apply these tools to solve real-world problems and deliver scalable, production-ready software.
          </p>
        </motion.div>
        
        <div className="mt-16">
          <div className="relative flex overflow-hidden group py-4">
            <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
            
            <div className="flex gap-16 md:gap-24 w-max animate-scroll-left">
              {scrollItems.map((skill, idx) => {
                const { Icon, color, name } = skill;
                return (
                  <div 
                    key={idx} 
                    className="flex flex-col items-center justify-center min-w-[80px] gap-4 transition-transform hover:scale-110 cursor-default"
                  >
                    <Icon 
                      size={64} 
                      style={{ color }}
                      className="drop-shadow-sm transition-all duration-300" 
                    />
                    <span className="text-sm font-semibold text-textBody">{name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
