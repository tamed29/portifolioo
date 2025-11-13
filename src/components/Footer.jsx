import { FaGithub, FaInstagram, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

const socials = [
  {
    id: 'email',
    label: 'Email',
    icon: MdOutlineMail,
    href: 'mailto:tamiratdereje53@gmail.com',
  },
  {
    id: 'telegram',
    label: 'Telegram (@will_n0t)',
    icon: FaTelegramPlane,
    href: 'https://t.me/will_n0t',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/tamirat-dereje',
  },
  {
    id: 'instagram',
    label: 'Instagram (@tame_d29)',
    icon: FaInstagram,
    href: 'https://www.instagram.com/tame_d29',
  },
  {
    id: 'github',
    label: 'GitHub (@tamed29)',
    icon: FaGithub,
    href: 'https://github.com/tamed29',
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200 bg-white/70 py-10 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:px-8 lg:flex-row">
        <div>
          <p className="text-base font-medium text-slate-700 dark:text-slate-200">Tamirat Dereje</p>
          <p className="mt-1">
            &copy; {year} Crafted with React, Tailwind CSS, Framer Motion, and a passion for clean UX.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-500 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
                aria-label={item.label}
              >
                <item.icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
