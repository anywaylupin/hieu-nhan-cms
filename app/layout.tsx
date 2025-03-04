import './globals.css';

import { Geist, Geist_Mono } from 'next/font/google';

import { Navbar } from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { metadata } from './metadata';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export { metadata };

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'bg-background text-primary flex min-h-screen flex-col items-center gap-10 antialiased transition',
          geistMono.variable,
          geistSans.variable,
          geistSans.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Navbar />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
