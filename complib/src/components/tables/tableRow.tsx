import { ITableBaseProps } from './tableBase';

interface ITableRowProps extends ITableBaseProps {
  children: React.ReactNode;
  className?: string;
  onSelect?: (componentName: string) => void;
  componentName?: string;
  removeBaseClass?: boolean;
}

export const TableRow: React.FC<ITableRowProps> = ({
  children,
  className = '',
  onSelect,
  componentName,
  removeBaseClass,
}) => {
  return (
    <tr
      className={
        removeBaseClass
          ? className
          : ` flex w-full justify-around   ${className} `
      }
      onClick={() => {
        if (onSelect && componentName) onSelect(componentName);
      }}
    >
      {children}
    </tr>
  );
};
