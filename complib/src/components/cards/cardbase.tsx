import { ReactNode } from 'react';

interface CardBaseProps {
  componentName: string;
  children?: ReactNode;
  onSelect: (componentName: string) => void;
}

export const CardBase = ({
  componentName,
  children,
  onSelect,
}: CardBaseProps) => {
  return (
    <div
      data-card-name={componentName}
      className='w-full h-full border
       border-neon-blue bg-gray-600 shadow-sm shadow-neon-blue rounded-lg overflow-hidden px-4 grid'
      onClick={() => onSelect(componentName)}
    >
      {children}
    </div>
  );
};
