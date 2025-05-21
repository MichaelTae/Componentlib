import React from 'react';

export const FormHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={className} ref={ref} {...props} />
));
FormHeader.displayName = 'FormHeader';
export const FormContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={className} ref={ref} {...props} />
));
FormContent.displayName = 'FormContent';

export const FormFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={className} ref={ref} {...props} />
));
FormFooter.displayName = 'FormFooter';
