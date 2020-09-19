import { TableBody, TableRow, TableCell } from '@material-ui/core';
import * as React from 'react';

interface FTETableBodyProps {
  data: any[];
}

export const FTETableBody: React.FC<FTETableBodyProps> = (
  props: FTETableBodyProps
) => (
  <TableBody>
    {props.data.map((row, i) => (
      <TableRow key={`table-row-${i}`}>
        {Object.keys(row).map((col, j) => (
          <TableCell key={`table-row-${i}-col-${j}`}>{row[col]}</TableCell>
        ))}
      </TableRow>
    ))}
  </TableBody>
);
