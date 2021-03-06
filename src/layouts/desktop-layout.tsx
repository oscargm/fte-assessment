import * as React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header } from '../pods/core/header';
import { ApplicationMenu } from '../pods/core/app-menu';
import { Footer } from '../pods/core/footer';

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
  const [open] = React.useState(true);

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Header handleDrawerOpen={null} open={open} isDesktop={true} />
        <ApplicationMenu
          open={open}
          handleDrawerClose={null}
          isDesktop={true}
        />
        <main className={classes.content} data-testid={'content'}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth={false} className={classes.container}>
            {children}
          </Container>
        </main>
        <Footer />
      </div>
    </>
  );
};
