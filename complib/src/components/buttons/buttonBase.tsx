interface CustomButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  isLoading?: boolean;
  icon?: React.ReactNode;
  componentName?: string;
  onSelect?: (componentName: string) => void;
}

type ButtonBaseProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  CustomButtonProps;

export const ButtonBase: React.FC<ButtonBaseProps> = ({
  variant = 'primary',
  size = 'medium',
  className = '',
  isLoading = false,
  icon,
  children,
  componentName,
  onSelect,
  ...rest
}) => {
  const variantStyles: Record<string, string> = {
    primary: 'bg-cyan-400 text-black hover:bg-cyan-300',
    secondary: 'bg-gray-500 text-white hover:bg-gray-700',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    tertiary: 'bg-transparent text-blue-500 hover:bg-blue-100',
  };

  const sizeStyles: Record<string, string> = {
    small: 'px-2 my-8 text-sm',
    medium: 'px-4 my-7 text-base',
    large: 'px-6 my-6 text-lg',
  };

  return (
    <button
      className={`cursor-pointer rounded flex items-center justify-center gap-2 bg- ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={isLoading}
      onClick={(e) => {
        rest.onClick?.(e);
        if (onSelect && componentName) onSelect(componentName);
      }}
      {...rest}
    >
      {isLoading ? <span /> : icon}
      {children}
    </button>
  );
};
