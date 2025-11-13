import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { MdOutlineMail } from 'react-icons/md';
import { FaGithub, FaInstagram, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';

const contactLinks = [
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:tamiratdereje53@gmail.com',
    icon: MdOutlineMail,
  },
  {
    id: 'telegram',
    label: 'Telegram (@will_n0t)',
    href: 'https://t.me/will_n0t',
    icon: FaTelegramPlane,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tamirat-dereje',
    icon: FaLinkedin,
  },
  {
    id: 'instagram',
    label: 'Instagram (@tame_d29)',
    href: 'https://www.instagram.com/tame_d29',
    icon: FaInstagram,
  },
  {
    id: 'github',
    label: 'GitHub (@tamed29)',
    href: 'https://github.com/tamed29',
    icon: FaGithub,
  },
];

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, message: '' });

    try {
      const templateParams = {
        ...formData,
        to_email: 'tamiratdereje53@gmail.com',
        reply_to: formData.email,
      };
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setFormData({ name: '', email: '', message: '' });
      setStatus({ loading: false, message: 'Message sent! Thank you for reaching out.' });
    } catch (error) {
      setStatus({
        loading: false,
        message: 'Something went wrong. Please try again or use another contact method.',
      });
      console.error('Email JS error', error);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.16),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(14,165,233,0.18),_transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            Let's Connect
          </motion.h2>
          <motion.p
            className="mt-4 text-base text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Share a project idea, collaborate on community initiatives, or simply say hello. I will get back to you soon.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="rounded-3xl border border-indigo-200/60 bg-white/70 p-8 shadow-xl shadow-indigo-500/10 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-900/30"
              data-aos="fade-up"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Direct Contact</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                Prefer a faster response? Reach out via any of the channels below. I'm quick to reply on Telegram and LinkedIn.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {contactLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.id} className="group flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-500 transition group-hover:bg-indigo-500 group-hover:text-white dark:bg-indigo-500/20">
                        <Icon className="text-xl" />
                      </span>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                        className="flex items-center gap-2 font-medium text-slate-700 transition hover:text-indigo-500 dark:text-slate-200 dark:hover:text-indigo-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* Swap the block above with individual cards if you want more granular analytics per channel */}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="glass-card rounded-3xl p-8 shadow-xl shadow-indigo-500/10"
            data-aos="fade-up"
            data-aos-delay="120"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold uppercase tracking-[0.25em] text-indigo-500">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-indigo-500 dark:focus:ring-indigo-500/40"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold uppercase tracking-[0.25em] text-indigo-500">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="your@email.com"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-indigo-500 dark:focus:ring-indigo-500/40"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold uppercase tracking-[0.25em] text-indigo-500"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your idea, timeline, and goals..."
                  rows={6}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-indigo-500 dark:focus:ring-indigo-500/40"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-1 hover:bg-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 disabled:cursor-not-allowed disabled:opacity-75"
                disabled={status.loading}
              >
                {status.loading ? 'Sending...' : 'Send Message'}
              </button>
              {status.message && (
                <p className="text-center text-sm text-indigo-600 dark:text-indigo-300">{status.message}</p>
              )}
            </div>
            {/* Replace the EmailJS IDs above with your real credentials to fully activate the form */}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
