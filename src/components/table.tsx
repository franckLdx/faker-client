import * as React from 'react'
import { DataTable } from 'grommet/components/DataTable';

export interface TableProps {
  columns: any,
  data: any
}

export const Table: React.SFC<TableProps> = ({ columns, data }) => (
  <DataTable
    columns={columns}
    data={data}
    sortable={true}
    size="medium"
  />);