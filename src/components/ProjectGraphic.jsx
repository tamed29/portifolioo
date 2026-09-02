import React from 'react';
import { 
  Bus, 
  HeartHandshake, 
  Hotel, 
  ShieldCheck, 
  QrCode, 
  Globe, 
  Layers 
} from 'lucide-react';
import { FaReact, FaNodeJs, FaPhp } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiMongodb, SiPostgresql } from 'react-icons/si';

const graphicsConfig = [
  {
    // Abbay Bus
    bgGradient: "from-[#021329] via-[#081b33] to-[#040914]",
    accentGlow: "bg-cyan-500/20",
    borderGlow: "border-cyan-500/30",
    IconComponent: Bus,
    accentColor: "text-cyan-400",
    pattern: (
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-0" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M0 32V0h32" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-400" />
            <circle cx="16" cy="16" r="2" fill="currentColor" className="text-cyan-300" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-0)" />
        <path d="M-50 100 Q 150 -30 350 120 T 600 50" stroke="#00d9ff" strokeWidth="2" strokeDasharray="6 6" fill="none" opacity="0.4" />
      </svg>
    ),
    techIcons: [<SiNextdotjs key="1" />, <FaReact key="2" />, <SiPostgresql key="3" />, <FaPhp key="4" />]
  },
  {
    // Wubet AMHA
    bgGradient: "from-[#11052c] via-[#1a0b36] to-[#060312]",
    accentGlow: "bg-purple-500/20",
    borderGlow: "border-purple-500/30",
    IconComponent: HeartHandshake,
    accentColor: "text-purple-400",
    pattern: (
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hex-1" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M20 0 L40 11.5 L40 34.5 L20 46 L0 34.5 L0 11.5 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-purple-400" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-1)" />
        <circle cx="50%" cy="50%" r="90" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4 8" opacity="0.5" />
      </svg>
    ),
    techIcons: [<FaReact key="1" />, <SiTailwindcss key="2" />, <FaNodeJs key="3" />, <SiFirebase key="4" />]
  },
  {
    // Aethelgard Boutique Hotel
    bgGradient: "from-[#081826] via-[#0c2338] to-[#030a12]",
    accentGlow: "bg-sky-500/20",
    borderGlow: "border-sky-500/30",
    IconComponent: Hotel,
    accentColor: "text-sky-300",
    pattern: (
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="diamonds-2" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M15 0 L30 15 L15 30 L0 15 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-sky-300" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diamonds-2)" />
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="#0284c7" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
    techIcons: [<SiNextdotjs key="1" />, <FaReact key="2" />, <SiMongodb key="3" />, <FaNodeJs key="4" />]
  },
  {
    // AMUSecure
    bgGradient: "from-[#021b29] via-[#06283d] to-[#010c14]",
    accentGlow: "bg-teal-500/20",
    borderGlow: "border-teal-500/30",
    IconComponent: ShieldCheck,
    accentColor: "text-teal-300",
    pattern: (
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit-3" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M0 24 h16 l8 -8 h16 m-24 16 l8 8 h16" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-teal-400" />
            <circle cx="24" cy="16" r="3" fill="currentColor" className="text-teal-300" />
            <circle cx="24" cy="32" r="3" fill="currentColor" className="text-teal-300" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-3)" />
      </svg>
    ),
    techIcons: [<FaReact key="1" />, <FaNodeJs key="2" />, <SiFirebase key="3" />, <Globe key="4" />]
  },
  {
    // Digital Hotel QR Menu
    bgGradient: "from-[#1c0826] via-[#260e36] to-[#0c0312]",
    accentGlow: "bg-fuchsia-500/20",
    borderGlow: "border-fuchsia-500/30",
    IconComponent: QrCode,
    accentColor: "text-fuchsia-400",
    pattern: (
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots-4" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="12" cy="12" r="2.5" fill="currentColor" className="text-fuchsia-400" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-4)" />
        <rect x="25%" y="20%" width="50%" height="60%" fill="none" stroke="#d946ef" strokeWidth="1" strokeDasharray="5 5" opacity="0.3" rx="8" />
      </svg>
    ),
    techIcons: [<SiNextdotjs key="1" />, <FaReact key="2" />, <SiFirebase key="3" />, <Layers key="4" />]
  }
];

const ProjectGraphic = ({ index = 0, className = "h-48 md:h-52" }) => {
  const config = graphicsConfig[index % graphicsConfig.length];
  const MainIcon = config.IconComponent;

  return (
    <div className={`relative w-full aspect-[16/9] ${className} rounded-t-xl overflow-hidden bg-gradient-to-br ${config.bgGradient} flex items-center justify-center transition-all duration-500`}>
      {/* Background SVG Pattern */}
      {config.pattern}

      {/* Radial Gradient Glow Center */}
      <div className={`absolute w-40 h-40 rounded-full blur-3xl ${config.accentGlow} pointer-events-none transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`} />

      {/* Central Large Icon Emblem */}
      <div className="relative z-10 flex flex-col items-center justify-center p-4">
        <div className={`p-4 rounded-2xl bg-slate-950/60 backdrop-blur-md border ${config.borderGlow} shadow-[0_0_25px_rgba(0,0,0,0.5)] transform group-hover:scale-110 transition-transform duration-500`}>
          <MainIcon className={`w-10 h-10 md:w-12 md:h-12 ${config.accentColor}`} />
        </div>
      </div>

      {/* Floating Faint Tech Icons Background */}
      <div className="absolute inset-0 z-0 flex justify-between items-center px-8 opacity-25 group-hover:opacity-45 transition-opacity duration-500 pointer-events-none">
        <div className="flex gap-4 text-2xl text-slate-300 transform -rotate-12">
          {config.techIcons.slice(0, 2)}
        </div>
        <div className="flex gap-4 text-2xl text-slate-300 transform rotate-12">
          {config.techIcons.slice(2, 4)}
        </div>
      </div>

      {/* Bottom Gradient Fade Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-surface to-transparent z-10 opacity-90" />
    </div>
  );
};

export default ProjectGraphic;
