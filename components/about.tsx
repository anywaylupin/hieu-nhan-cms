'use client';

import resume from '@/content/resume';
import { TwoColumn } from './common';
import Image from 'next/image';

export default function About() {
  return (
    <TwoColumn>
      <div className="flex flex-col justify-center px-30">
        <h1 className="text-5xl leading-14">{resume.about.heading}</h1>
        <p className="mt-10 text-2xl leading-9">{resume.about.subheading}</p>

        <h2 className="mt-24 text-2xl font-bold">Who I’ve worked with</h2>
        <div className="mt-8 grid grid-cols-4 gap-4">
          {Array(8)
            .fill('Logo here')
            .map((text, index) => (
              <div key={`${text}-${index}`} className="flex items-center gap-2 text-xl">
                <span>⚙️</span>
                <span className="font-bold">{text}</span>
              </div>
            ))}
        </div>
      </div>

      <div className="bg-accent relative flex items-center justify-center">
        <Image className="max-h-full max-w-full" src={resume.about.image} alt="me" fill sizes="" priority />
      </div>
    </TwoColumn>
  );
}
