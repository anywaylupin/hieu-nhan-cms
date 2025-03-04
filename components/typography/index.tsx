export const TypographyH1 = ({ children }: { children: React.ReactNode }) => (
  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{children}</h1>
);

export const TypographyH2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">{children}</h2>
);

export const TypographyH3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{children}</h3>
);

export const TypographyH4 = ({ children }: { children: React.ReactNode }) => (
  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{children}</h4>
);

export const TypographyP = ({ children }: { children: React.ReactNode }) => (
  <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
);

export const TypographyBlockquote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
);

export const TypographyInlineCode = ({ children }: { children: React.ReactNode }) => (
  <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">{children}</code>
);

export const TypographyLead = ({ children }: { children: React.ReactNode }) => (
  <p className="text-muted-foreground text-xl">{children}</p>
);

export const TypographyLarge = ({ children }: { children: React.ReactNode }) => (
  <div className="text-lg font-semibold">{children}</div>
);

export const TypographySmall = ({ children }: { children: React.ReactNode }) => (
  <small className="text-sm leading-none font-medium">{children}</small>
);

export const TypographyMuted = ({ children }: { children: React.ReactNode }) => (
  <p className="text-muted-foreground text-sm">{children}</p>
);
