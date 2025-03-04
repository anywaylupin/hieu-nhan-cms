'use client';

import { HorizontalScroll, ScrollButton, TwoColumn } from '@/components/common';

import About from '@/components/about';
import Image from 'next/image';
import resume from '@/content/resume';
import { useRef } from 'react';

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <HorizontalScroll ref={scrollRef}>
      <TwoColumn>
        <div className="my-auto flex flex-col items-start pl-30">
          <h1 className="text-7xl">{resume.heading}</h1>
          <h2 className="mt-6 text-5xl leading-normal">{resume.subheading}</h2>

          <ScrollButton
            scrollRef={scrollRef}
            className="mt-14 text-2xl"
            size="lg"
            variant="fulbright"
            direction="right"
          >
            Start →
          </ScrollButton>

          <p className="text-primary absolute bottom-8 left-30 z-10 max-w-[352px] text-2xl">
            Use the <span className="bg-muted">Left</span> and <span className="bg-muted">Right</span> Arrow keys, mouse
            drag, or wheel to navigate between frames.
          </p>
        </div>

        <div className="bg-accent relative flex items-end">
          <Image className="max-h-full max-w-full" src="/images/me.png" alt="me" width={1080} height={1920} priority />
        </div>
      </TwoColumn>

      <About />
    </HorizontalScroll>
  );
}
