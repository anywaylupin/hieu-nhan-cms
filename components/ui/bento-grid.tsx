import { cn } from '@/lib/utils';

export const BentoGrid = ({ className, children, ...rest }: React.ComponentProps<'div'>) => {
  return (
    <div className={cn('mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 xl:max-w-7xl', className)} {...rest}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  ...rest
}: React.ComponentProps<'div'> & {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'group/bento shadow-input bg-card row-span-1 flex flex-col justify-between space-y-4 rounded-xl border p-4 shadow-md transition duration-200 hover:shadow-xl dark:shadow-none',
        className
      )}
      {...rest}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="text-muted-foreground mt-2 mb-2 font-sans font-bold">{title}</div>
        <div className="text-muted-foreground font-sans text-xs font-normal">{description}</div>
      </div>
    </div>
  );
};
