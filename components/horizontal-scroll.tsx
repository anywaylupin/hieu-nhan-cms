'use client';

import { motion } from 'motion/react';
import { useRef, useEffect } from 'react';

type HorizontalScrollProps = {
  children: React.ReactNode;
};

const HorizontalScroll = ({ children }: HorizontalScrollProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      scrollRef.current?.scrollTo({
        left: scrollRef.current.scrollLeft + event.deltaY * (window.innerWidth / 100),
        behavior: 'smooth'
      });
    };

    const container = scrollRef.current;
    container?.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container?.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div ref={scrollRef} className="flex h-screen w-screen items-center overflow-hidden">
      <motion.div className="flex h-screen w-full" drag="x" dragConstraints={{ left: -window.innerWidth, right: 0 }}>
        {children}
      </motion.div>
    </div>
  );
};

export default HorizontalScroll;
