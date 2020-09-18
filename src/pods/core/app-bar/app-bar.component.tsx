import * as React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
}));

interface ApplicationAppbarProps {
  handleDrawerOpen: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  open: boolean;
}

export const ApplicationAppbar = (props: ApplicationAppbarProps) => {
  const classes = useStyles();
  const { handleDrawerOpen, open } = props;
  return (
    <AppBar
      position="absolute"
      className={`${classes.appBar} ${open && classes.appBarShift}`}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={`${classes.menuButton} ${open && classes.menuButtonHidden}
            `}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Dashboard
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
