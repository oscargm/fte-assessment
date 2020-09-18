import { makeStyles, Paper, Tabs } from '@material-ui/core';
import * as React from 'react';
import { LinkTab, TabPanel } from '../common/tabs';
import { ConfigurationTable } from '../pods/configuration';
import { Patients } from '../pods/patients';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export const MainScene = () => {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = React.useState<number>(0);

  const handleTabChange = (
    event: React.ChangeEvent<null>,
    newTabIndex: number
  ) => {
    setTabIndex(newTabIndex);
  };
  return (
    <Paper className={classes.root}>
      <div>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <LinkTab label="Hospital patients" />
          <LinkTab label="Configuration" />
        </Tabs>
      </div>
      <div>
        <TabPanel value={tabIndex} index={0}>
          <Patients />
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          <ConfigurationTable />
        </TabPanel>
      </div>
    </Paper>
  );
};
