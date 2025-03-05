import ReactMarkdown, { Options } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyBlockquote,
  TypographyList,
  TypographyInlineCode
} from '@/components/typography';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const components: Options['components'] = {
  h1: ({ children, ...rest }) => <TypographyH1 {...rest}>{children}</TypographyH1>,
  h2: ({ children, ...rest }) => <TypographyH2 {...rest}>{children}</TypographyH2>,
  h3: ({ children, ...rest }) => <TypographyH3 {...rest}>{children}</TypographyH3>,
  h4: ({ children, ...rest }) => <TypographyH4 {...rest}>{children}</TypographyH4>,
  p: ({ node, children, ...rest }) => {
    const el = node?.children[0];

    if (el?.type === 'element') {
      switch (el.tagName) {
        case 'img':
          return (
            <div className="mt-3 flex w-full justify-center" {...rest}>
              <Image
                className="rounded-xs shadow"
                src={`${el.properties.src}`}
                alt={`${el.properties.alt}`}
                width="768"
                height="768"
              />
            </div>
          );
        case 'a': {
          const href = el.properties.href as string;

          const googleDriveMatch = RegExp(/drive\.google\.com\/file\/d\/([^/]+)\//).exec(href);

          if (googleDriveMatch) {
            const id = googleDriveMatch[1];

            return (
              <div className="mt-3 flex w-full justify-center" {...rest}>
                <iframe
                  title={id}
                  className="rounded-md shadow"
                  width="768"
                  height="432"
                  src={`https://drive.google.com/file/d/${id}/preview`}
                  allow="autoplay"
                  allowFullScreen
                />
              </div>
            );
          }

          return (
            <div className="mt-3 flex w-full justify-center" {...rest}>
              <Link href={href}>{children}</Link>
            </div>
          );
        }
      }
    }
    return <TypographyP {...rest}>{children}</TypographyP>;
  },
  blockquote: ({ children, ...rest }) => <TypographyBlockquote {...rest}>{children}</TypographyBlockquote>,
  ul: ({ children, ...rest }) => <TypographyList {...rest}>{children}</TypographyList>,
  ol: ({ children, ...rest }) => <TypographyList {...rest}>{children}</TypographyList>,
  code: ({ children, ...rest }) => <TypographyInlineCode {...rest}>{children}</TypographyInlineCode>
};

export const Article = ({ children, className, ...rest }: React.ComponentProps<'article'> & { children?: string }) => {
  return (
    <article className={cn('prose prose-lg dark:prose-invert mx-auto max-w-3xl', className)} {...rest}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {children}
      </ReactMarkdown>
    </article>
  );
};
