import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Code2, Cpu, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-[1140px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Styled Professional Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-textHeading tracking-tight mb-4">
            About Me
          </h2>

          {/* Glowing Accent Line */}
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-full shadow-[0_0_15px_rgba(0,217,255,0.5)]" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 text-textBody text-base md:text-lg leading-relaxed space-y-6"
          >
            <p>
              I'm Tamirat Dereje, a Software Engineering student at Arba Minch University specializing in full-stack architecture and Artificial Intelligence. I am passionate about engineering high-performance web platforms and transforming complex operational workflows into clean, intuitive digital products.
            </p>
            <div className="p-5 bg-surface/50 border border-primary/20 rounded-xl">
              <p className="mb-2 font-bold text-textHeading">🎓 Education & Background:</p>
              <p className="font-semibold text-textHeading">{profile.education.institution}</p>
              <p className="text-primary font-medium">{profile.education.degree}</p>
              <p className="text-sm text-textBody mt-1">4th-Year Student | Expected Graduation: 2028</p>
              <p className="text-sm text-textBody mt-2">Specializing in Artificial Intelligence & Machine Learning</p>
            </div>
            <p>
              My work spans full-stack web development—from responsive frontend interfaces to robust backend APIs and cloud databases. Currently, I am focused on combining solid software engineering fundamentals with modern AI/ML techniques to build intelligent, data-driven applications that create measurable value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            <div className="bg-surface p-6 rounded-xl border border-white/5 flex items-center gap-4 shadow-sm hover:border-primary/30 transition-colors">
              <div className="p-3 bg-primary/10 text-primary rounded-lg">
                <Code2 size={24} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-textHeading mb-1">10+</h3>
                <p className="text-sm text-textBody">Production Projects</p>
              </div>
            </div>

            <div className="bg-surface p-6 rounded-xl border border-white/5 flex items-center gap-4 shadow-sm hover:border-secondary/30 transition-colors">
              <div className="p-3 bg-secondary/10 text-secondary rounded-lg">
                <Rocket size={24} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-textHeading mb-1">2+</h3>
                <p className="text-sm text-textBody">Years Experience</p>
              </div>
            </div>

            <div className="bg-surface p-6 rounded-xl border border-white/5 flex items-center gap-4 shadow-sm hover:border-primary/30 transition-colors">
              <div className="p-3 bg-primary/10 text-primary rounded-lg">
                <Cpu size={24} />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-textHeading">20+</h4>
                <p className="text-sm text-textBody">Technologies</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
