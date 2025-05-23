export interface ITableBaseProps {
  children: React.ReactNode;
  className?: string;
  onSelect?: (componentName: string) => void;
  componentName?: string;
  removeBaseClass?: boolean;
}
export const TableBase: React.FC<ITableBaseProps> = ({
  children,
  className = '',
  onSelect,
  componentName,
  removeBaseClass,
}) => {
  return (
    <table
      className={
        removeBaseClass
          ? className
          : `flex flex-col w-full h-full  border border-neon-blue bg-gray-700 shadow-sm shadow-neon-blue rounded-lg ${className} `
      }
      onClick={() => {
        if (onSelect && componentName) onSelect(componentName);
      }}
    >
      {children}
    </table>
  );
};
