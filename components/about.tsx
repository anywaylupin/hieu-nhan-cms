'use client';

import resume from '@/content/resume';
import { TwoColumn } from './common';
import Image from 'next/image';

export default function About() {
  return (
    <TwoColumn>
      <div className="flex flex-col gap-10 px-30 pt-40">
        <h2 className="text-5xl leading-14">{resume.about.heading}</h2>
        <p className="text-2xl leading-9">{resume.about.subheading}</p>
      </div>

      <div className="bg-accent relative flex items-center justify-center">
        <Image className="max-h-full max-w-full" src={resume.about.image} alt="me" fill sizes="" priority />
      </div>
    </TwoColumn>
  );
}
