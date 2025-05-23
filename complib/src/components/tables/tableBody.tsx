import { ITableBaseProps } from './tableBase';

interface ITableBodyProps extends ITableBaseProps {
  children: React.ReactNode;
  className?: string;
  onSelect?: (componentName: string) => void;
  componentName?: string;
  removeBaseClass?: boolean;
}

export const TableBody: React.FC<ITableBodyProps> = ({
  children,
  className = '',
  onSelect,
  componentName,
  removeBaseClass,
}) => {
  return (
    <tbody
      className={
        removeBaseClass
          ? className
          : ` w-full h-full border border-neon-blue  ${className} `
      }
      onClick={() => {
        if (onSelect && componentName) onSelect(componentName);
      }}
    >
      {children}
    </tbody>
  );
};
