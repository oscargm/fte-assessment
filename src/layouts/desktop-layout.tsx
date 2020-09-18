import * as React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApplicationAppbar } from '../pods/core/app-bar';
import { ApplicationMenu } from '../pods/core/app-menu';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    width: '100%',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export const DesktopLayout: React.FC = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ApplicationAppbar handleDrawerOpen={handleDrawerOpen} open={open} />
      <ApplicationMenu open={open} handleDrawerClose={handleDrawerClose} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth={false} className={classes.container}>
          <Grid container spacing={3}>
            {children}
          </Grid>
        </Container>
      </main>
    </div>
  );
};
