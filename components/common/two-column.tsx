import { cn } from '@/lib/utils';

export const TwoColumn = ({ children, className, ...rest }: React.ComponentProps<'section'>) => (
  <section className={cn('relative grid h-screen w-screen flex-shrink-0 grid-cols-2 grid-rows-1', className)} {...rest}>
    {children}
  </section>
);
