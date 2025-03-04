'use client';

import resume from '@/content/resume';
import { Button } from './ui';

export default function Hero() {
  return (
    <section className="relative flex h-screen w-screen flex-shrink-0 flex-col py-20 pl-30">
      <p className="absolute text-lg">Portfolio Preview — 2023</p>

      <div className="my-auto flex flex-col items-start">
        <h1 className="mt-4 text-5xl font-bold">I'm {resume.shortname}</h1>
        <h2 className="mt-2 text-2xl">{resume.title}</h2>
        <Button className="mt-6 flex items-center gap-2 rounded bg-black px-6 py-2 text-white">Start →</Button>
      </div>

      <p className="absolute right-8 bottom-8 text-sm text-gray-600">
        Press the <strong>N</strong> key or your keyboard arrow keys to move to the next frame
        <br />
        <span className="text-xs">(Shift + N to go backwards)</span>
      </p>
    </section>
  );
}
