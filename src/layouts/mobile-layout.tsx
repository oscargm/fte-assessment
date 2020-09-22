import * as React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header } from '../pods/core/header';
import { ApplicationMenu } from 'pods/core/app-menu';

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

export const MobileLayout: React.FC = ({ children }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        handleDrawerOpen={handleDrawerOpen}
        open={open}
        isDesktop={false}
      />
      <ApplicationMenu
        open={open}
        handleDrawerClose={handleDrawerClose}
        isDesktop={false}
      />
      <main className={classes.content} data-testid={'content'}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth={false} className={classes.container}>
          {children}
        </Container>
      </main>
      {/* //TODO: create footer  */}
    </div>
  );
};
