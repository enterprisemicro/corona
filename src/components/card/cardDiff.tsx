import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles((theme : Theme) => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.error.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  errorDifferenceIcon: {
    color: theme.palette.error.dark
  },
  errorDifferenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  },
  successDifferenceIcon: {
    color: theme.palette.success.dark
  },
  successDifferenceValue: {
    color: theme.palette.success.dark,
    marginRight: theme.spacing(1)
  }
}));

type CardProps = {
  title: string,
  paragraph: string,
  CardIcon: React.ElementType,
  ratio: number,
  caption: string,
}

export const DiffCard: FunctionComponent<CardProps> = ({ title, paragraph, CardIcon, ratio, caption }) => {
  const classes = useStyles();

  const diff = (ratio < 0 ? (0 - ratio) * 100 : ratio * 100) + "%";
  const differenceIcon = ratio < 0 ? classes.errorDifferenceIcon : classes.successDifferenceIcon;
  const differenceValue = ratio < 0 ? classes.errorDifferenceValue : classes.successDifferenceValue;
  return (
    <Card
      className={clsx(classes.root)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              {title}
            </Typography>
            <Typography variant="h3">{paragraph}</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <CardIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
        <div className={classes.difference}>
          { (ratio < 0) ? <ArrowDownwardIcon className={differenceIcon} /> : <ArrowUpwardIcon className={differenceIcon} />}
          <Typography
            className={differenceValue}
            variant="body2"
          >
            { diff }
          </Typography>
          <Typography
            variant="caption"
          >
            {caption}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}