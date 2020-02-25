import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { Route, Switch, Redirect } from 'react-router-dom';
import Box from '@material-ui/core/Box';

import DashboardIcon from '@material-ui/icons/Dashboard';
import DehazeIcon from '@material-ui/icons/Dehaze';
import PolymerIcon from '@material-ui/icons/Polymer';
import AppsIcon from '@material-ui/icons/Apps';

import CoronaBar from '../components/nav/coronaBar';
import CoronaDrawer from '../components/nav/coronaDrawer';
import Copyright from '../components/common/copyright';
import HomeGeneric from './homeGeneric';
import HomeCAS from './homeCAS';
import HomeAzure from './homeAzure';
import HomeDashboard from './homeDashboard';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar as CSSProperties,
    })
);

const drawerToolMenus = [
    {
        path: '/home/dashboard',
        sidebarName: 'Dashboard',
        navbarName: 'Dashboard',
        icon: DashboardIcon,
    },
    {
        path: '/home/generic',
        sidebarName: 'Generic',
        navbarName: 'Generic',
        icon: AppsIcon,
    },
    {
        path: '/home/azure',
        sidebarName: 'Azure',
        navbarName: 'Azure',
        icon: DehazeIcon,
    },
    {
        path: '/home/cas',
        sidebarName: 'CAS',
        navbarName: 'CAS',
        icon: PolymerIcon,
    }
];

export default function Home() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [search, setSearch] = React.useState('');

    const handleDrawer = () => {
      setOpen(!open);
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    return (
        <div>
        <div>
        <CoronaBar handleDrawer={handleDrawer} handleSearch={handleSearch} />
        </div>
        <div className={classes.root}>
        <CoronaDrawer open={open} toolMenus={drawerToolMenus}/>
        <main className={classes.content}>
        <div className={classes.toolbar}></div>
        <Switch>
        <Route exact path="/home/dashboard" component={HomeDashboard} />
        <Route exact path="/home/generic" render={(props) => <HomeGeneric {...props} filterKeyword={search} />} />
        <Route exact path="/home/azure" render={(props) => <HomeAzure {...props} filterKeyword={search} />} />
        <Route exact path="/home/cas" render={(props) => <HomeCAS {...props} filterKeyword={search} />} />
        <Redirect to="/home/dashboard" />
        </Switch>
        <Box my={5}>
            <Copyright />
        </Box>
        </main>
      </div>
        </div>

    );
}