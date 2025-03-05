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

const components: Options['components'] = {
  h1: ({ children, ...rest }) => <TypographyH1 {...rest}>{children}</TypographyH1>,
  h2: ({ children, ...rest }) => <TypographyH2 {...rest}>{children}</TypographyH2>,
  h3: ({ children, ...rest }) => <TypographyH3 {...rest}>{children}</TypographyH3>,
  h4: ({ children, ...rest }) => <TypographyH4 {...rest}>{children}</TypographyH4>,
  p: ({ node, children, ...rest }) => {
    const el = node?.children[0];

    if (el?.type === 'element' && el.tagName === 'img') {
      return (
        <div className="mt-3 flex justify-center" {...rest}>
          <Image
            className="rounded-xs shadow"
            src={`${el.properties.src}`}
            alt={`${el.properties.alt}`}
            width="600"
            height="300"
          />
        </div>
      );
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
