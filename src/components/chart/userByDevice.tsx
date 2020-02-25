import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import {
  colors,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Divider,
  Typography
} from '@material-ui/core';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import RefreshIcon from '@material-ui/icons/Refresh';
import TabletMacIcon from '@material-ui/icons/TabletMac';

import { PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const useStyles = makeStyles((theme : Theme) => ({
  root: {
    height: '100%'
  },
  chartContainer: {
    position: 'relative',
    height: '295px'
  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  device: {
    textAlign: 'center',
    padding: theme.spacing(1)
  },
  deviceIcon: {
    color: colors.blueGrey[600],
  }
}));

const data02 = [
    {
      "name": "Desktop",
      "value": 63
    },
    {
      "name": "Tablet",
      "value": 15
    },
    {
      "name": "Mobile",
      "value": 23
    }
  ];

export const UserByDeviceChart: FunctionComponent = () => {

  const classes = useStyles();
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [63, 15, 22],
        backgroundColor: [
          theme.palette.primary.main,
          theme.palette.error.main,
          theme.palette.warning.main
        ],
        borderWidth: 8,
        borderColor: '#FFFFFF',
        hoverBorderColor: '#FFFFFF'
      }
    ],
    labels: ['Desktop', 'Tablet', 'Mobile']
  };

  const options = {
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      borderWidth: 1,
      borderColor: theme.palette.divider,
      backgroundColor: '#FFFFFF',
      titleFontColor: theme.palette.text.primary,
      bodyFontColor: theme.palette.text.secondary,
      footerFontColor: theme.palette.text.secondary
    }
  };

  const devices = [
    {
      title: 'Desktop',
      value: '63',
      icon: <LaptopMacIcon />,
      color: theme.palette.primary.main
    },
    {
      title: 'Tablet',
      value: '15',
      icon: <TabletMacIcon />,
      color: theme.palette.error.main
    },
    {
      title: 'Mobile',
      value: '23',
      icon: <PhoneIphoneIcon />,
      color: theme.palette.warning.main
    }
  ];

  const COLORS = [theme.palette.primary.main, theme.palette.error.main, theme.palette.warning.main];

  return (
    <Card
      className={clsx(classes.root)}
    >
      <CardHeader
        action={
          <IconButton size="small">
            <RefreshIcon />
          </IconButton>
        }
        title="Users By Device"
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
        <ResponsiveContainer>
        <PieChart>
            <Pie data={data02} dataKey="value" nameKey="name" paddingAngle={2} innerRadius={90} outerRadius={110} fill="#82ca9d" label={false}>
            {
            data02.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
            </Pie>
            <Tooltip />
        </PieChart>
        </ResponsiveContainer>
        </div>
        <div className={classes.stats}>
          {devices.map(device => (
            <div
              className={classes.device}
              key={device.title}
            >
              <span className={classes.deviceIcon}>{device.icon}</span>
              <Typography variant="body1" style={{ fontSize: 14 }}>{device.title}</Typography>
              <Typography variant="h2"
                style={{ color: device.color, fontSize: 29, fontWeight : 500, lineHeight: "32px" }}
              >
                {device.value}%
              </Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};