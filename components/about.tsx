import resume from '@/content/resume';

export default function About() {
  return (
    <section className="relative flex h-screen w-screen flex-shrink-0 flex-col justify-between pt-40 pr-20 pb-20 pl-[4%]">
      <div className="flex max-w-[80%] flex-col gap-10">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 2xl:leading-14">
          {resume.about.heading}
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9">
          {resume.about.subheading}
        </p>
      </div>
    </section>
  );
}
