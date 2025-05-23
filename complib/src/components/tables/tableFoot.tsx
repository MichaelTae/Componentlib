import { ITableBaseProps } from './tableBase';

interface ITableFootProps extends ITableBaseProps {
  children: React.ReactNode;
  className?: string;
  onSelect?: (componentName: string) => void;
  componentName?: string;
  removeBaseClass?: boolean;
}

export const Tablefoot: React.FC<ITableFootProps> = ({
  children,
  className = '',
  onSelect,
  componentName,
  removeBaseClass,
}) => {
  return (
    <tfoot
      className={
        removeBaseClass
          ? className
          : ` w-full border-t border-neon-blue ${className} `
      }
      onClick={() => {
        if (onSelect && componentName) onSelect(componentName);
      }}
    >
      {children}
    </tfoot>
  );
};
