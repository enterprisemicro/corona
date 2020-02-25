import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Copyright from '../components/common/copyright';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(6, 0, 3),
    },
  }),
);

export default function NotFound() {
    const classes = useStyles();
    return (
        <Container>
            <Box maxWidth="sm">
            <Typography className={classes.root} color="textSecondary" align="center">
                <Box fontWeight="fontWeightBold" fontSize="h6.fontSize">
                Not Found :-)
                </Box>
            </Typography>
            </Box>
            <Box my={5}>
            <Copyright />
            </Box>
        </Container>  
    );
}