'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { forwardRef, useRef, useEffect, useState, Children } from 'react';
import { Button, ButtonProps } from '../ui';

export const HorizontalScroll = forwardRef<HTMLDivElement, React.PropsWithChildren<{ className?: string }>>(
  ({ className, children }, ref) => {
    const length = Children.count(children) - 1;
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollWidth, setScrollWidth] = useState(0);

    useEffect(() => {
      const handleResize = () => {
        setScrollWidth(window.innerWidth * length);
      };

      setScrollWidth(window.innerWidth * length);
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [children, length]);

    useEffect(() => {
      const handleWheel = (event: WheelEvent) => {
        event.preventDefault();
        scrollRef.current?.scrollTo({
          left: scrollRef.current.scrollLeft + event.deltaY * (scrollWidth / 400),
          behavior: 'smooth'
        });
      };

      const container = scrollRef.current;
      container?.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        container?.removeEventListener('wheel', handleWheel);
      };
    }, [scrollWidth]);

    useEffect(() => {
      if (ref) {
        (ref as React.RefObject<HTMLDivElement>).current = scrollRef.current!;
      }
    }, [ref]);

    return (
      <div ref={scrollRef} className={cn('flex h-screen w-screen items-center overflow-hidden', className)}>
        <motion.div className="flex h-screen w-full" drag="x" dragConstraints={{ left: -scrollWidth, right: 0 }}>
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
