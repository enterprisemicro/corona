import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import { DiffCard } from '../components/card/cardDiff';
import { ProgressCard } from '../components/card/cardProgress';
import { LatestRequestChart} from '../components/chart/latestRequest';
import { UserByDeviceChart } from '../components/chart/userByDevice';

import MoneyIcon from '@material-ui/icons/Money';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import PeopleIcon from '@material-ui/icons/People';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';

export default function HomeDashboard() {
    return (
        <Box>
        <Grid container justify="flex-start" spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <DiffCard title="COST" paragraph="$2,020" CardIcon={MoneyIcon} ratio={-0.12} caption="Since last week"/>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <DiffCard title="TOTAL VIEW" paragraph="1,600" CardIcon={EqualizerIcon} ratio={0.8} caption="Since last week" />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <DiffCard title="TOTAL USERS" paragraph="1,900" CardIcon={PeopleIcon} ratio={0.8} caption="Since last week" />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
              <ProgressCard title="TASK PROGRESS" CardIcon={InsertChartIcon} ratio={0.75} />
          </Grid>
          <Grid item xs={12} sm={6} xl={9} lg={8}>
              <LatestRequestChart title="da" />
          </Grid>
          <Grid item xs={12} md={6} xl={3} lg={4}>
              <UserByDeviceChart />
          </Grid>
        </Grid>
      </Box>
    )
}