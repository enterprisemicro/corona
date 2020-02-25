import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    height: 400,
    position: 'relative'
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

type ChartProps = {
    title: string
}

const data = [
    {
      name: '1 Feb', "This Year": 4000, "Last Year": 2400,
    },
    {
      name: '2 Feb', "This Year": 3000, "Last Year": 1398,
    },
    {
      name: '3 Feb', "This Year": 2000, "Last Year": 9800,
    },
    {
      name: '4 Feb', "This Year": 2780, "Last Year": 3908,
    },
    {
      name: '5 Feb', "This Year": 1890, "Last Year": 4800,
    },
    {
      name: '6 Feb', "This Year": 2390, "Last Year": 3800,
    },
    {
      name: '7 Feb', "This Year": 3490, "Last Year": 4300,
    },
];

export const LatestRequestChart: FunctionComponent<ChartProps> = ({ title }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root)}
    >
      <CardHeader
        action={
          <Button
            size="small"
            variant="text"
          >
            Last 7 days <ArrowDropDownIcon />
          </Button>
        }
        title="Latest Request"
      />
      <Divider />
      <CardContent className={classes.chartContainer}>
      <ResponsiveContainer>
      <BarChart
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false}/>
        <XAxis dataKey="name" axisLine={false} tickLine={false}/>
        <YAxis axisLine={false} tickLine={false}/>
        <Tooltip />
        <Bar dataKey="This Year" barSize={12} fill="#8884d8" radius={[15, 15, 15, 15]}/>
        <Bar dataKey="Last Year" barSize={12} fill="#82ca9d" radius={[15, 15, 15, 15]}/>
      </BarChart>
      </ResponsiveContainer>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          Overview <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};
