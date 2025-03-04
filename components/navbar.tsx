'use client';

import { FloatingDock } from './ui';
import { ModeToggle } from './mode-toggle';
import resume from '@/content/resume';

export const Navbar = () => {
  const navItems = [...resume.navbar, { title: 'Theme', icon: <ModeToggle /> }];

  return (
    <nav className="fixed right-8 bottom-4 z-50 flex max-h-max origin-bottom items-center justify-center md:right-auto">
      <FloatingDock className="border shadow" mobileClassName="-translate-y-10" items={navItems} />
    </nav>
  );
};
