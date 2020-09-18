import * as React from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  makeStyles,
} from "@material-ui/core";
import { mainListItems, secondaryListItems } from "./list-items";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
}));

interface ApplicationMenuProps {
  open: boolean;
  handleDrawerClose: () => void;
}

export const ApplicationMenu = (props: ApplicationMenuProps) => {
  const classes = useStyles();
  const { open, handleDrawerClose } = props;
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: `${classes.drawerPaper} ${!open && classes.drawerPaperClose}`,
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{mainListItems}</List>
      <Divider />
      <List>{secondaryListItems}</List>
    </Drawer>
  );
};
