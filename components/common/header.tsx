import { AvatarFallback } from '@radix-ui/react-avatar';

import resume from '@/content/resume';
import { BLUR_FADE_DELAY } from '@/lib/constants';

import { Avatar, AvatarImage, BlurFade } from '../ui';

export const Header = () => {
  return (
    <header id="hero" className="flex w-full max-w-2xl items-center justify-between gap-2 px-6 pt-12 sm:pt-24">
      <div className="flex flex-1 flex-col gap-1.5">
        <BlurFade className="max-w-[600px] text-sm md:text-xl" delay={BLUR_FADE_DELAY}>
          {resume.greetings}
        </BlurFade>
      </div>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Avatar className="flex size-28 items-center justify-center border">
          <AvatarImage src={resume.avatar} alt={resume.name} />
          <AvatarFallback>{resume.initials}</AvatarFallback>
        </Avatar>
      </BlurFade>
    </header>
  );
};
