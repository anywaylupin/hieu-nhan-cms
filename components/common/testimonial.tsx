import { cn } from '@/lib/utils';

export const Testimonial = ({ children, className, ...rest }: React.ComponentProps<'div'>) => (
  <div
    className={cn(
      'bg-card relative flex h-full max-w-[486px] flex-col items-center justify-evenly px-12 shadow-md',
      className
    )}
    {...rest}
  >
    <span className="absolute -top-5 mx-auto">
      <svg width="52" height="40" viewBox="0 0 52 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_1359_9301)">
          <path
            d="M1 1.63599L48.0333 1.63599L44.6127 6.01864L48.0333 10.4013L44.6127 14.7839L48.0333 19.1666L44.6127 23.5492L48.0333 27.9319L44.6127 32.3145L48.0333 36.6972L1 36.6972L4.4206 32.3145L1 27.9319L4.4206 23.5492L1 19.1666L4.4206 14.7839L1 10.4013L4.4206 6.01864L1 1.63599Z"
            fill="#D1D1D1"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1359_9301"
            x="0"
            y="0.635986"
            width="51.0332"
            height="39.0612"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.0345182 0 0 0 0 0.123925 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1359_9301" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1359_9301" result="shape" />
          </filter>
        </defs>
      </svg>
    </span>

    <div className="flex w-full flex-col">
      <span className="text-8xl leading-[0.5] font-black">“</span>
      <p className="text-xl leading-normal font-medium">{children}</p>
    </div>

    <div className="flex w-full items-center gap-3">
      <span className="bg-muted flex size-24 h-24 w-24 items-center justify-center rounded-full">Photo</span>
      <div>
        <p className="text-lg font-medium">First Name, Last Name</p>
        <p className="text-base font-semibold">Company & Role</p>
      </div>
    </div>
  </div>
);
