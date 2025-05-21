interface FormBaseProps {
  children: React.ReactNode;
  className?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLFormElement>) => void;
  onReset?: (event: React.FormEvent<HTMLFormElement>) => void;
  onInvalid?: (event: React.FormEvent<HTMLFormElement>) => void;
  onInput?: (event: React.FormEvent<HTMLFormElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLFormElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLFormElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLFormElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLFormElement>) => void;
  onContextMenu?: (event: React.MouseEvent<HTMLFormElement>) => void;
  isLoading?: boolean;
  isDisabled?: boolean;
  isValid?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  componentName?: string;
  onSelect?: (componentName: string) => void;
}

export const FormBase: React.FC<FormBaseProps> = ({
  children,
  className = '',
  onSubmit,
  onChange,
  onReset,
  onInvalid,
  onInput,
  onKeyDown,
  onKeyUp,
  onFocus,
  onBlur,
  onContextMenu,
  isLoading = false,
  isDisabled = false,
  isValid = false,
  isInvalid = false,
  isRequired = false,
  componentName,
  onSelect,
}) => {
  return (
    <form
      className={`flex flex-col  w-full h-full border
       border-neon-blue bg-gray-700 shadow-sm shadow-neon-blue rounded-lg  px-4 ${className}`}
      onSubmit={(e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(e);
      }}
      onClick={() => {
        if (onSelect && componentName) onSelect(componentName);
      }}
      onChange={onChange}
      onReset={onReset}
      onInvalid={onInvalid}
      onInput={onInput}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onFocus={onFocus}
      onBlur={onBlur}
      onContextMenu={onContextMenu}
    >
      {children}
    </form>
  );
};
