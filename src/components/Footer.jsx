import React from 'react';
import { profile } from '../data/profile';

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-white/10 bg-background text-center">
      <div className="max-w-[1140px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-textBody text-sm">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href={profile.contact.github} target="_blank" rel="noreferrer" className="text-textBody hover:text-primary transition-colors text-sm">GitHub</a>
          <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="text-textBody hover:text-primary transition-colors text-sm">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
