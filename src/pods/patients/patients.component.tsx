import * as React from 'react';
import {
  createStyles,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  Table,
  TableContainer,
  Theme,
  Typography,
} from '@material-ui/core';
import { NumberOfRecords, Patient } from './model';
import { getPatients } from './api';
import { FTETableHeader, FTETableBody } from 'pods/core/table';
import { mapPatientsToDomain } from './mappers';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 650,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  })
);

export const Patients: React.FC = () => {
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  const [patients, setPatients] = React.useState<Patient[]>([]);
  const [recordsToLoad, setRecordsToLoad] = React.useState<NumberOfRecords>(
    NumberOfRecords.TEN
  );

  const load = (callback: () => void) =>
    getPatients(recordsToLoad).then((response) => {
      setPatients(mapPatientsToDomain(response));
      callback();
    });

  React.useEffect(() => {
    load(() => setIsLoaded(true));
  }, []);
  React.useEffect(() => {
    setPatients([]);
    setIsLoaded(false);
    load(() => setIsLoaded(true));
  }, [recordsToLoad]);

  const classes = useStyles();
  return patients && patients.length > 0 ? (
    <>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="RowSelectorLabel">Rows to show</InputLabel>
        <Select
          labelId="row-selector"
          id="rowSelector"
          value={recordsToLoad}
          onChange={(
            event: React.ChangeEvent<{ value: typeof recordsToLoad }>
          ) => {
            setRecordsToLoad(event.target.value);
          }}
          label="Rows to show"
        >
          <MenuItem value={NumberOfRecords.TEN}>{NumberOfRecords.TEN}</MenuItem>
          <MenuItem value={NumberOfRecords.FIVETEEN}>
            {NumberOfRecords.FIVETEEN}
          </MenuItem>
          <MenuItem value={NumberOfRecords.TWENTY_FIVE}>
            {NumberOfRecords.TWENTY_FIVE}
          </MenuItem>
          <MenuItem value={NumberOfRecords.FIFTY}>
            {NumberOfRecords.FIFTY}
          </MenuItem>
          <MenuItem value={NumberOfRecords.HUNDRED}>
            {NumberOfRecords.HUNDRED}
          </MenuItem>
        </Select>
      </FormControl>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <FTETableHeader colNames={Object.keys(patients[0])} />
          <FTETableBody data={patients} />
        </Table>
      </TableContainer>
    </>
  ) : isLoaded ? (
    <Typography variant={'body1'}> No data to display</Typography>
  ) : (
    <Typography variant={'body1'}> Loading data...</Typography>
  );
};
