import { ITableBaseProps } from './tableBase';

interface ITablePaginationProps extends ITableBaseProps {
  className?: string;
  onSelect?: (componentName: string) => void;
  componentName?: string;
  removeBaseClass?: boolean;
  data?: number[] | string[];
}

export const TablePagination: React.FC<ITablePaginationProps> = ({
  data,
  className = '',
  onSelect,
  componentName,
  removeBaseClass,
}) => {
  return (
    <div
      className={removeBaseClass ? className : ` flex gap-2 ${className} `}
      onClick={() => {
        if (onSelect && componentName) onSelect(componentName);
      }}
    >
      <button className='bg-blue-400 px-1'>&lArr;</button>
      {data && (
        <div className='bg-gray-800 px-2'>
          {data.length} of {data.length}
        </div>
      )}
      <button className='bg-blue-400 px-1'>&rArr;</button>
    </div>
  );
};
