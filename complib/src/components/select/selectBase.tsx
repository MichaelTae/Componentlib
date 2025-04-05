import React from 'react';

export const SelectBase = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, ...props }, ref) => (
  <select className={className} ref={ref} {...props} />
));

SelectBase.displayName = 'SelectBase';
