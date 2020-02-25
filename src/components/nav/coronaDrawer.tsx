import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Link, withRouter, useRouteMatch, useLocation } from "react-router-dom";


const drawerWidth = 180;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerPaper: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.primary.main,
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar as CSSProperties,
  }),
);

export default function CoronaDrawer(props: any) {
  const classes = useStyles();
  const theme = useTheme();

  var open = props.open;
  var toolMenus = props.toolMenus;
  const [mouseOver, setMouseOver] = React.useState(false);

  let location = useLocation();

  const isActiveRoute = (routeName : any) => {
    return location.pathname.indexOf(routeName) > -1 ? true : false;
  }

  const handleDrawerMouseEnter = () => {
    setMouseOver(true);
  };

  const handleDrawerMouseLeave = () => {
    setMouseOver(false);
  }

  return (
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open || mouseOver,
          [classes.drawerClose]: !open && !mouseOver,
        })}
        classes={{
          paper: clsx(classes.drawerPaper, {
            [classes.drawerOpen]: open || mouseOver,
            [classes.drawerClose]: !open && !mouseOver,
          }),
        }}
        onMouseEnter={handleDrawerMouseEnter}
        onMouseLeave={handleDrawerMouseLeave}
      >
        <div className={classes.toolbar}>
        </div>
        <List>
          {toolMenus.map((m : any, index : any) => (
            <Link to={m.path} style={{ textDecoration: 'none', color: theme.palette.primary.main }} key={index}>
            <ListItem button key={m.sidebarName} selected={isActiveRoute(m.path)}>
              <ListItemIcon><m.icon color="primary" /></ListItemIcon>
              <ListItemText primary={m.sidebarName} />
            </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon color="primary"/> : <MailIcon color="primary"/>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
  );
}