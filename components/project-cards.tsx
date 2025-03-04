import Image from 'next/image';
import Link from 'next/link';

import { Badge, Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui';
import content from '@/content/resume';

import { IconWorld } from './icons';
import { HoverBorderGradient } from './ui';

export const ProjectCards = () => {
  return content.projects.map(({ title, image, description, tags, website, highlight }, id) => (
    <HoverBorderGradient key={`${title}-${id}`} className="h-full" highlight={highlight}>
      <Card className="flex h-full flex-col overflow-hidden rounded-xl border-none transition hover:shadow-md">
        <Link href={website} className="block cursor-pointer" target="_blank">
          {image && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="h-40 w-full overflow-hidden object-cover object-top"
            />
          )}
        </Link>

        <CardHeader>
          <CardTitle className="mt-1 text-start text-base">{title}</CardTitle>
          <div className="hidden text-xs underline print:visible">
            {website?.replace('https://', '').replace('www.', '').replace('/', '')}
          </div>
          <p className="prose dark:prose-invert text-muted-foreground max-w-full text-start text-xs text-pretty">
            {description}
          </p>
        </CardHeader>

        <CardContent className="mt-auto flex w-full flex-wrap gap-1">
          {tags?.map((tag) => (
            <Badge className="py-0 text-[10px]" variant="secondary" key={tag}>
              {tag}
            </Badge>
          ))}
        </CardContent>

        <CardFooter>
          <div className="flex flex-row flex-wrap items-start gap-1">
            {website && (
              <Link href={website} target="_blank">
                <Badge className="flex gap-2 py-1 text-[10px]">
                  <IconWorld className="size-4" /> Website
                </Badge>
              </Link>
            )}
          </div>
        </CardFooter>
      </Card>
    </HoverBorderGradient>
  ));
};
