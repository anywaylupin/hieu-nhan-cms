import { BLUR_FADE_DELAY } from '@/lib/constants';
import { BlurFade } from '@/components/ui';
import { ExperienceCards } from '@/components/experience-cards';
import { Header } from '@/components/common';
import { SectionBlog } from '@/components/section-blog';
import resume from '@/content/resume';

const Home = () => (
  <>
    <Header />
    <main className="flex max-w-2xl flex-col gap-10 px-6 pb-12 sm:pb-24">
      <section id="about" className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <p className="prose dark:prose-invert text-muted-foreground max-w-full text-sm text-pretty">{resume.about}</p>
        </BlurFade>
      </section>

      <section id="work" className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold">Experience</h2>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 5.5}>
          <ExperienceCards />
        </BlurFade>
      </section>

      <BlurFade delay={BLUR_FADE_DELAY * 12}>
        <SectionBlog />
      </BlurFade>
    </main>
  </>
);

export default Home;
