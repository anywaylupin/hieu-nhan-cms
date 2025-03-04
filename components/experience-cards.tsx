import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui';
import Link from 'next/link';

import resume from '@/content/resume';

import { IconBrandLinkedin, IconWorld } from './icons';

export const ExperienceCards = () => (
  <ul className="relative left-4 gap-4 divide-y divide-dashed border-l">
    {resume.experience.map(({ title, company, color, logo, dates, description, linkedin }, idx) => (
      <li key={`${title}-${company}-${idx}`} className="relative">
        <Avatar className="border-border bg-background absolute top-2 -left-6 flex size-12 items-center justify-center overflow-hidden rounded-full border">
          <AvatarImage src={logo} alt={company} className="object-contain" />
          <AvatarFallback>{company[0]}</AvatarFallback>
        </Avatar>

        <div className="flex flex-1 flex-col justify-start gap-1 py-4 pl-10">
          <h2 className="text-base leading-none font-semibold">{title}</h2>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-medium">
              @ <span style={{ color }}>{company}</span>
            </h3>
            <Link href={linkedin}>
              <IconWorld className="size-4" />
            </Link>
            <Link href={linkedin}>
              <IconBrandLinkedin className="size-4" />
            </Link>
          </div>
          <time className="text-muted-foreground text-xs">{dates}</time>
          <span className="prose dark:prose-invert text-muted-foreground text-sm">{description}</span>
        </div>
      </li>
    ))}
  </ul>
);
