import * as React from 'react';
import { makeStyles, Toolbar, Typography } from '@material-ui/core';
// import '@material/mwc-switch';
const useStyles = makeStyles((theme) => ({
  toolbar: {
    position: 'fixed',
    bottom: 0,
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
  },
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <Toolbar className={classes.toolbar}>
      <Typography variant={'body2'}>&#169; Roche 2020</Typography>
      {/* <mwc-switch></mwc-switch> */}
    </Toolbar>
  );
};
// declare global {
//   // eslint-disable-next-line @typescript-eslint/no-namespace
//   namespace JSX {
//     interface IntrinsicElements {
//       'mwc-switch': any;
//     }
//   }
// }
