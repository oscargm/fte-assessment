import * as React from 'react';
import {
  makeStyles,
  Paper,
  Table,
  TableContainer,
  Typography,
} from '@material-ui/core';
import { Configuration } from './model';
import { getConfigurations } from './api';
import { FTETableHeader, FTETableBody } from '../../common/table';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const ConfigurationTable: React.FC = () => {
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  const [configurations, setConfigurations] = React.useState<Configuration[]>(
    []
  );
  React.useEffect(() => {
    getConfigurations().then((response) => {
      setConfigurations(response);
      setIsLoaded(true);
    });
  }, []);

  const classes = useStyles();
  return configurations && configurations.length > 0 ? (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <FTETableHeader colNames={Object.keys(configurations[0])} />
        <FTETableBody data={configurations} />
      </Table>
    </TableContainer>
  ) : isLoaded ? (
    <Typography variant={'body1'}> No data to display</Typography>
  ) : (
    <Typography variant={'body1'}> Loading data...</Typography>
  );
};
