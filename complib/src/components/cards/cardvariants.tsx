import React from 'react';

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={className} ref={ref} {...props} />
));
CardHeader.displayName = 'CardHeader';

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={className} ref={ref} {...props} />
));
CardContent.displayName = 'CardContent';

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={className} ref={ref} {...props} />
));

export const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={className} ref={ref} {...props} />
));
CardTitle.displayName = 'CardTitle';

export const CardIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement> & { children?: React.ReactNode }
>(({ className, children, ...props }, ref) => (
  <svg
    className={className}
    ref={ref}
    width={24}
    height={24}
    fill='none'
    stroke='currentColor'
    strokeWidth={2}
    viewBox='0 0 24 24'
    {...props}
  >
    {children ? children : <circle cx='12' cy='12' r='10' />}
  </svg>
));
CardIcon.displayName = 'CardIcon';
