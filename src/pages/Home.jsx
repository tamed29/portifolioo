import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Particles from "@tsparticles/react";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import portrait from '../assets/images/image.png';

// 3D Shape Component
const AnimatedShape = () => {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });
  return (
    <mesh ref={meshRef}>
      <Icosahedron args={[1, 1]} scale={2.5}>
        <MeshDistortMaterial
          color="#4f46e5"
          attach="material"
          distort={0.4}
          speed={2}
          wireframe
        />
      </Icosahedron>
    </mesh>
  );
};

const heroVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const Home = () => {
  const [initParticles, setInitParticles] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    loadSlim(tsParticles).then(() => setInitParticles(true));
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="hero-gradient relative flex min-h-screen items-center overflow-hidden py-28 text-slate-900 transition-colors duration-500 dark:text-slate-100"
    >
      {/* Particles Background */}
      {initParticles && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0"
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
              },
              modes: { repulse: { distance: 100, duration: 0.4 } },
            },
            particles: {
              color: { value: "#6366f1" },
              links: { color: "#6366f1", distance: 150, enable: true, opacity: 0.2, width: 1 },
              move: { enable: true, speed: 1 },
              number: { density: { enable: true, area: 800 }, value: 80 },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      )}

      <motion.div 
        style={{ y: yParallax, x: mousePos.x, y: mousePos.y }}
        className="relative mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-16 px-6 text-center lg:flex-row lg:items-start lg:justify-between lg:px-8 lg:text-left z-10"
      >
        <motion.div
          className="max-w-3xl space-y-6"
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.span
            className="inline-flex items-center rounded-full border border-slate-900/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-700 shadow-lg shadow-slate-900/5 dark:border-white/20 dark:bg-white/10 dark:text-white dark:shadow-none"
            variants={heroVariants}
          >
            3rd-year Software Engineering Student @ AMU
          </motion.span>
          
          <motion.h1
            className="text-[2.5rem] font-semibold leading-tight sm:text-[2.9rem] xl:text-[3.4rem] min-h-[140px]"
            variants={heroVariants}
          >
            Tamirat Dereje — <br/>
            <TypeAnimation
              sequence={[
                'building human-centered software',
                1500,
                'crafting clean UX experiences',
                1500,
              ]}
              wrapper="span"
              speed={50}
              className="text-indigo-600 dark:text-indigo-400"
              repeat={Infinity}
            />
          </motion.h1>
          
          <motion.p
            className="text-base text-slate-600 sm:text-lg dark:text-slate-200/90"
            variants={heroVariants}
          >
            Enthusiastic about modern web technologies, design systems, and sharing knowledge with the tech community. I
            love translating complex problems into elegant solutions powered by React, Tailwind CSS, and robust tooling.
          </motion.p>
          
          <motion.div
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-start"
            variants={heroVariants}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-xl shadow-indigo-500/30 transition hover:-translate-y-1 hover:bg-indigo-600"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-900/40 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 transition hover:-translate-y-1 hover:border-slate-900 hover:bg-white dark:border-white/30 dark:text-white dark:hover:border-white dark:hover:bg-white/10"
            >
              Contact Me
            </motion.a>
          </motion.div>
          
          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.3em] text-slate-500 sm:justify-start dark:text-slate-200/70"
            variants={heroVariants}
          >
            <span>React</span>
            <span>Tailwind CSS</span>
            <span>Three.js</span>
            <span>Framer Motion</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
        >
          {/* 3D Canvas Background */}
          <div className="absolute inset-0 -z-10 w-full h-full scale-[1.5]">
             <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <AnimatedShape />
             </Canvas>
          </div>
          
          {/* Glowing Border Animation Image */}
          <motion.div 
            animate={{ 
              boxShadow: ["0px 0px 20px rgba(99,102,241,0.4)", "0px 0px 60px rgba(99,102,241,0.8)", "0px 0px 20px rgba(99,102,241,0.4)"]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex h-72 w-72 items-center justify-center rounded-full bg-white/10 p-3 ring-4 ring-white/10 backdrop-blur-xl sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem]"
          >
            <div className="absolute inset-3 rounded-full bg-gradient-to-br from-indigo-400 via-blue-500 to-sky-500 opacity-80 blur-3xl" />
            <img
              src={portrait}
              alt="Tamirat Dereje portrait"
              className="relative h-full w-full rounded-full border-[6px] border-white/70 object-cover shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
