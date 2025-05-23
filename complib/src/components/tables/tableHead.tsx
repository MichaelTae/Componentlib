import { ITableBaseProps } from './tableBase';

interface ITableHeadProps extends ITableBaseProps {
  children: React.ReactNode;
  className?: string;
  onSelect?: (componentName: string) => void;
  componentName?: string;
  removeBaseClass?: boolean;
}

export const TableHead: React.FC<ITableHeadProps> = ({
  children,
  className = '',
  onSelect,
  componentName,
  removeBaseClass,
}) => {
  return (
    <thead
      className={
        removeBaseClass
          ? className
          : ` flex  w-full  border border-neon-blue bg-gray-700 shadow-md shadow-neon-blue/80   rounded-t-lg rounded-b-md ${className} `
      }
      onClick={() => {
        if (onSelect && componentName) onSelect(componentName);
      }}
    >
      {children}
    </thead>
  );
};
