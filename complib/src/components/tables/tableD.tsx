import { ITableBaseProps } from './tableBase';

interface ITableDProps extends ITableBaseProps {
  children: React.ReactNode;
  className?: string;
  onSelect?: (componentName: string) => void;
  componentName?: string;
  removeBaseClass?: boolean;
}

export const TableD: React.FC<ITableDProps> = ({
  children,
  className = '',
  onSelect,
  componentName,
  removeBaseClass,
}) => {
  return (
    <td
      className={
        removeBaseClass
          ? className
          : `pl-1.5 w-full h-full first:border-l-0 border-l border-b only-child:border-b-0 border-neon-blue ${className} `
      }
      onClick={() => {
        if (onSelect && componentName) onSelect(componentName);
      }}
    >
      {children}
    </td>
  );
};
