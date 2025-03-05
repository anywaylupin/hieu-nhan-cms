import './globals.css';

import { Geist } from 'next/font/google';

import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { metadata } from './metadata';

const geistSans = Geist({ subsets: ['latin'] });

export { metadata };

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('bg-background text-primary h-dvh w-dvw antialiased', geistSans.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
