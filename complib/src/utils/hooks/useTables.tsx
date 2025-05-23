import { TableBase } from '../../components/tables/tableBase';
import React from 'react';
import { TableHead } from '../../components/tables/tableHead';
import { TableRow } from '../../components/tables/tableRow';
import { TableH } from '../../components/tables/tableH';
import { TableBody } from '../../components/tables/tableBody';
import { TableD } from '../../components/tables/tableD';
import { Tablefoot } from '../../components/tables/tableFoot';
import { TablePagination } from '../../components/tables/tablePagination';

export function useTables() {
  const [selectedComponentName, setSelectedComponentName] = React.useState<
    string | null
  >(null);

  const components = [
    <TableBase
      key='t1'
      componentName='Table 1'
      onSelect={() => setSelectedComponentName('Table 1')}
    >
      <TableHead>
        <TableRow>
          <TableH>Header 1</TableH>
          <TableH>Header 2</TableH>
          <TableH>Header 3</TableH>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableD>Row 1, Cell 1</TableD>
          <TableD>Row 1, Cell 2</TableD>
          <TableD>Row 1, Cell 3</TableD>
        </TableRow>
        <TableRow>
          <TableD>Row 2, Cell 1</TableD>
          <TableD>Row 2, Cell 2</TableD>
          <TableD>Row 2, Cell 3</TableD>
        </TableRow>
      </TableBody>
      <Tablefoot>
        <TableRow>
          <TableD className='flex justify-center'>
            <TablePagination>...</TablePagination>
          </TableD>
        </TableRow>
      </Tablefoot>
    </TableBase>,
  ];

  const selectedComponent = components.find(
    (comp) => (comp.props as any).componentName === selectedComponentName
  );
  return { components, selectedComponent, selectedComponentName };
}
