import { cn } from '@/lib/utils';

export const TypographyH1 = ({ className, children, ...rest }: React.ComponentProps<'h1'>) => (
  <h1 className={cn('mt-6 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)} {...rest}>
    {children}
  </h1>
);

export const TypographyH2 = ({ className, children, ...rest }: React.ComponentProps<'h2'>) => (
  <h2
    className={cn('mt-6 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0', className)}
    {...rest}
  >
    {children}
  </h2>
);

export const TypographyH3 = ({ className, children, ...rest }: React.ComponentProps<'h3'>) => (
  <h3 className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)} {...rest}>
    {children}
  </h3>
);

export const TypographyH4 = ({ className, children, ...rest }: React.ComponentProps<'h4'>) => (
  <h4 className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)} {...rest}>
    {children}
  </h4>
);

export const TypographyP = ({ className, children, ...rest }: React.ComponentProps<'p'>) => (
  <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...rest}>
    {children}
  </p>
);

export const TypographyBlockquote = ({ className, children, ...rest }: React.ComponentProps<'blockquote'>) => (
  <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)} {...rest}>
    {children}
  </blockquote>
);

export const TypographyList = ({ className, children, ...rest }: React.ComponentProps<'ul'>) => (
  <ul className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)} {...rest}>
    {children}
  </ul>
);

export const TypographyInlineCode = ({ className, children, ...rest }: React.ComponentProps<'code'>) => (
  <code
    className={cn('bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold', className)}
    {...rest}
  >
    {children}
  </code>
);

export const TypographyLead = ({ className, children, ...rest }: React.ComponentProps<'p'>) => (
  <p className={cn('text-muted-foreground text-xl', className)} {...rest}>
    {children}
  </p>
);

export const TypographyLarge = ({ className, children, ...rest }: React.ComponentProps<'div'>) => (
  <div className={cn('text-lg font-semibold', className)} {...rest}>
    {children}
  </div>
);

export const TypographySmall = ({ className, children, ...rest }: React.ComponentProps<'small'>) => (
  <small className={cn('text-sm leading-none font-medium', className)} {...rest}>
    {children}
  </small>
);

export const TypographyMuted = ({ className, children, ...rest }: React.ComponentProps<'p'>) => (
  <p className={cn('text-muted-foreground text-sm', className)} {...rest}>
    {children}
  </p>
);
