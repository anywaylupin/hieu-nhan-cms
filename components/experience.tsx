import resume from '@/content/resume';
import { Avatar, AvatarImage, AvatarFallback } from './ui';

export default function Experience() {
  return (
    <section className="relative flex h-screen w-screen flex-shrink-0 flex-col justify-between pt-40 pr-20 pb-20 pl-30">
      <h3 className="text-4xl font-bold">Work experience</h3>

      <div className="grid flex-1 grid-cols-3 items-center gap-4">
        {resume.experience.list.map(({ logo, title, company, color, dates, description }, index) => (
          <div key={`${title}-${index}`} className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage src={logo} />
                <AvatarFallback>{company[0]}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-base font-semibold">{title}</span>
                <span className="text-base font-medium">
                  @ <span style={{ color }}>{company}</span>
                </span>
              </div>
            </div>
            <span className="text-muted-foreground text-xs">{dates}</span>
            <p className="text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
