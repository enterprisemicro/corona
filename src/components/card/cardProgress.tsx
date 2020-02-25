import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Card, CardContent, Grid, Typography, Avatar, LinearProgress } from '@material-ui/core';

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
    backgroundColor: theme.palette.primary.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  progress: {
    marginTop: theme.spacing(3)
  }
}));

type CardProps = {
  title: string,
  CardIcon: React.ElementType,
  ratio: number,
}

export const ProgressCard: FunctionComponent<CardProps> = ({ title, CardIcon, ratio }) => {
  const classes = useStyles();

  const progress = (ratio < 0 ? (0 - ratio) * 100 : ratio * 100);

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
            <Typography variant="h3">{progress + '%'}</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <CardIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
        <LinearProgress
          className={classes.progress}
          value={progress}
          variant="determinate"
        />
      </CardContent>
    </Card>
  );
}