interface ModalBaseProps {
  children: React.ReactNode;
  className?: string;
  onSelect?: (componentName: string) => void;
  componentName?: string;
  removeBaseClass?: boolean;
}

export const ModalBase: React.FC<ModalBaseProps> = ({
  children,
  className = '',
  onSelect,
  componentName,
  removeBaseClass,
}) => {
  return (
    <div
      className={
        removeBaseClass
          ? className
          : `flex flex-col w-full h-full  border border-neon-blue bg-gray-700 shadow-sm shadow-neon-blue rounded-lg px-4 ${className} `
      }
      onClick={() => {
        if (onSelect && componentName) onSelect(componentName);
      }}
    >
      {children}
    </div>
  );
};
