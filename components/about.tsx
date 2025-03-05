import resume from '@/content/resume';

export default function About() {
  return (
    <section className="relative flex h-screen w-screen flex-shrink-0 flex-col justify-between pt-40 pr-20 pb-20 pl-30">
      <div className="flex max-w-[80%] flex-col gap-10">
        <h2 className="text-5xl leading-14">{resume.about.heading}</h2>
        <p className="text-2xl leading-9">{resume.about.subheading}</p>
      </div>
    </section>
  );
}
