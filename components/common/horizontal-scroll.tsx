'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { forwardRef, useRef, useEffect } from 'react';
import { Button, ButtonProps } from '../ui';

export const HorizontalScroll = forwardRef<HTMLDivElement, React.PropsWithChildren<{ className?: string }>>(
  ({ className, children }, ref) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleWheel = (event: WheelEvent) => {
        event.preventDefault();
        scrollRef.current?.scrollTo({
          left: scrollRef.current.scrollLeft + event.deltaY * (window.innerWidth / 200),
          behavior: 'smooth'
        });
      };

      const container = scrollRef.current;
      container?.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        container?.removeEventListener('wheel', handleWheel);
      };
    }, []);

    useEffect(() => {
      if (ref) {
        (ref as React.RefObject<HTMLDivElement>).current = scrollRef.current!;
      }
    }, [ref]);

    return (
      <div ref={scrollRef} className={cn('flex h-screen w-screen items-center overflow-hidden', className)}>
        <motion.div className="flex h-screen w-full" drag="x" dragConstraints={{ left: -window.innerWidth, right: 0 }}>
          {children}
        </motion.div>
      </div>
    );
  }
);

HorizontalScroll.displayName = 'HorizontalScroll';

interface ScrollButtonProps extends ButtonProps {
  direction: 'left' | 'right';
  scrollRef: React.RefObject<HTMLDivElement | null>;
}

export const ScrollButton = ({ direction, scrollRef, className, children, ...rest }: ScrollButtonProps) => {
  const handleScroll = () => {
    const scrollAmount = direction === 'right' ? window.innerWidth : -window.innerWidth;
    scrollRef.current?.scrollTo({ left: scrollRef.current.scrollLeft + scrollAmount, behavior: 'smooth' });
  };

  return (
    <Button className={className} onClick={handleScroll} {...rest}>
      {children}
    </Button>
  );
};
