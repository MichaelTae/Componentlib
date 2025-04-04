import { ReactNode } from 'react';

export const CardBase = (props?: { children: ReactNode }) => {
  return (
    <div className='card w-80 h-44 border border-neon-blue bg-gray-600 shadow-sm shadow-neon-blue rounded-lg overflow-hidden'>
      {props?.children}
    </div>
  );
};
