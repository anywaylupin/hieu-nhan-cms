'use client';

import { HorizontalScroll, ScrollButton } from '@/components/common';

import About from '@/components/about';
import Image from 'next/image';
import resume from '@/content/resume';
import { useRef } from 'react';
import Experience from '@/components/experience';

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <HorizontalScroll ref={scrollRef}>
      <section className="relative grid h-screen w-screen flex-shrink-0 grid-rows-1 lg:grid-cols-2">
        <div className="my-auto flex flex-col items-start pl-[4%] lg:pl-[8%]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            {resume.hero.heading}
          </h1>
          <h2 className="mt-3 text-2xl leading-normal sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            {resume.hero.subheading}
          </h2>
          <ScrollButton
            scrollRef={scrollRef}
            className="mt-8 text-xs sm:mt-10 sm:text-sm md:mt-12 md:text-base lg:mt-14 lg:text-lg xl:text-xl 2xl:text-2xl"
            size="lg"
            variant="fulbright"
            direction="right"
          >
            Start →
          </ScrollButton>
          <div className="absolute bottom-4 z-10 w-full sm:bottom-6 md:bottom-8 lg:bottom-8 lg:max-w-[352px]">
            <p className="text-primary max-w-[240px] text-xs sm:max-w-[280px] sm:text-sm md:max-w-[320px] md:text-base lg:max-w-[352px] lg:text-lg xl:text-xl 2xl:text-2xl">
              Use the <span className="bg-muted">Left</span> and <span className="bg-muted">Right</span> Arrow keys,
              mouse drag, or wheel to navigate between frames.
            </p>
          </div>
        </div>

        <div className="bg-accent relative hidden items-end lg:flex">
          <Image className="max-h-full max-w-full" src={resume.hero.image} alt="me" fill sizes="" priority />
        </div>
      </section>

      <About />
      <Experience />
    </HorizontalScroll>
  );
}
