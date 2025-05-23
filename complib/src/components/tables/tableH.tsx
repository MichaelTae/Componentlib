import { ITableBaseProps } from './tableBase';

interface ITableHProps extends ITableBaseProps {
  children: React.ReactNode;
  className?: string;
  onSelect?: (componentName: string) => void;
  componentName?: string;
  removeBaseClass?: boolean;
}

export const TableH: React.FC<ITableHProps> = ({
  children,
  className = '',
  onSelect,
  componentName,
  removeBaseClass,
}) => {
  return (
    <th
      className={
        removeBaseClass
          ? className
          : ` flex w-full h-full py-1 pl-1.5 first:border-l-0 border-l border-neon-blue ${className} `
      }
      onClick={() => {
        if (onSelect && componentName) onSelect(componentName);
      }}
    >
      {children}
    </th>
  );
};
