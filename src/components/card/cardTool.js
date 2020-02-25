import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    card: {
        maxWidth: "100%",
        justifySelf: "center"
    },
    media: {
        maxWidth: "100%",
        height: 200
    }
});

export default function MediaCard(_ref) {
  //const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  let toolConfigs = _ref.toolConfigs;
  return (
    <Grid container justify="center" spacing={3}>
                  {toolConfigs.map(toolConfig => (
                      <Grid key={toolConfig.keyword} item lg={3} sm={6} xs={12}>
                          <Card className={classes.card}>
                              <CardActionArea>
                                  <CardMedia
                                      className={classes.media}
                                      image={toolConfig.image}
                                      title={toolConfig.name}
                                  />
                                  <CardContent>
                                      <Typography gutterBottom variant="h5" component="h2">
                                          {toolConfig.name}
                                      </Typography>
                                      <Typography variant="body2" color="textSecondary" component="p">
                                          Lizards are a widespread group of squamate reptiles, with over 6,000
                                          species, ranging across all continents except Antarctica
                                    </Typography>
                                  </CardContent>
                              </CardActionArea>
                              <CardActions>
                                  <Button size="small" color="primary">
                                      Share
        </Button>
                                  <Button size="small" color="primary">
                                      Learn More
        </Button>
                              </CardActions>
                          </Card>
                      </Grid>
                  ))}
        </Grid>
  );
}
