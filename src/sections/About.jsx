import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Code2, Cpu, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-[1140px] mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textHeading mb-4 flex items-center gap-3">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 text-textBody text-lg leading-relaxed space-y-6"
          >
            <p>
              Hello! I'm a full-stack developer and 4th-year Software Engineering student at Arbaminch University. who loves building polished, scalable web applications. I enjoy the entire process of bringing ideas to life—from crafting intuitive interfaces to architecting robust backends that can handle real-world demands.
            </p>
            <div className="p-5 bg-surface/50 border border-primary/20 rounded-xl">
              <p className="mb-2"><strong>🎓 Education:</strong></p>
              <p className="font-semibold text-textHeading">{profile.education.institution}</p>
              <p className="text-primary">{profile.education.degree}</p>
              <p className="text-sm mt-1">{profile.education.status}</p>
              <p className="text-sm mt-2">Specializing increasingly in Artificial Intelligence & Machine Learning</p>
            </div>
            <p>
              Right now, my biggest focus is bridging the gap between traditional software development and AI. I'm actively exploring machine learning models and intelligent systems, with the goal of building smarter, data-driven applications that go beyond standard web development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            <div className="bg-surface p-6 rounded-xl border border-white/5 flex items-center gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-lg">
                <Code2 size={24} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-textHeading mb-1">10+</h3>
                <p className="text-sm text-textBody">Production Projects</p>
              </div>
            </div>

            <div className="bg-surface p-6 rounded-xl border border-white/5 flex items-center gap-4">
              <div className="p-3 bg-secondary/10 text-secondary rounded-lg">
                <Rocket size={24} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-textHeading mb-1">2+</h3>
                <p className="text-sm text-textBody">Years Experience</p>
              </div>
            </div>

            <div className="bg-surface p-6 rounded-xl border border-white/5 flex items-center gap-4">
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
