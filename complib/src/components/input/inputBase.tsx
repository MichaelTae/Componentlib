import React from 'react';

export const InputBase = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input className={className} ref={ref} {...props} />
));
InputBase.displayName = 'CardInput';
