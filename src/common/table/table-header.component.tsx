import * as React from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';

interface FTETableHeaderProps {
  colNames: string[];
}

export const FTETableHeader: React.FC<FTETableHeaderProps> = (
  props: FTETableHeaderProps
) => (
  <TableHead>
    <TableRow>
      {props.colNames.map((col, i) => (
        <TableCell key={`col-${i}`}>{col}</TableCell>
      ))}
    </TableRow>
  </TableHead>
);
