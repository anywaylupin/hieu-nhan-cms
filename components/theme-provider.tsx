'use client';

import { IconMoon, IconSun } from './icons';
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';
import { Button } from './ui';

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className="cursor-pointer"
      variant="ghost"
      size="icon"
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <IconSun />
      <IconMoon />
    </Button>
  );
};

export const ThemeProvider = ({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) => (
  <NextThemesProvider {...props}>{children}</NextThemesProvider>
);
