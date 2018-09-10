import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import Icon from '@material-ui/core/Icon';

const styles = {
  root: {
    width: '100%',
    maxWidth: 800,
    margin: 'auto',
  },
  rubyIcon: {
    color: red[600],
  },
  pythonIcon: {
    color: blue[600],
  },
  droneIcon: {
    color: blue[200],
  },
  outdoorIcon: {
    color: green[600],
  },
  media: {
    height: 0,
    paddingTop: '50%',
  },
};

const Profile = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://avatars3.githubusercontent.com/u/13548704"
          title="@arakawamoriyuki"
          alt="@arakawamoriyuki"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            新川 盛幸 (
            <a href="https://github.com/arakawamoriyuki">
              @arakawamoriyuki
            </a>
            )
          </Typography>
          <Typography component="p">
            沖縄で働く駆け出しwebプログラマー
          </Typography>
          <Grid container className={classes.root} spacing={16}>
            <Grid item xs={6}>
              <List
                className={classes.langList}
                component="nav"
                subheader={(
                  <ListSubheader component="div">
                    おもなげんご
                  </ListSubheader>
                )}
              >
                <ListItem>
                  <Avatar>
                    <Icon className={classes.rubyIcon}>
                      favorite
                    </Icon>
                  </Avatar>
                  <ListItemText
                    primary="ruby"
                    secondary="Ruby on Rails"
                  />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <Icon className={classes.pythonIcon}>
                      favorite
                    </Icon>
                  </Avatar>
                  <ListItemText
                    primary="python"
                    secondary="Bottle, Tensorflow, Keras"
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6}>
              <List
                className={classes.otherList}
                component="nav"
                subheader={(
                  <ListSubheader component="div">
                    すきなもの
                  </ListSubheader>
                )}
              >
                <ListItem>
                  <Avatar>
                    <Icon className={classes.droneIcon}>
                      favorite
                    </Icon>
                  </Avatar>
                  <ListItemText
                    primary="Drone"
                    secondary="Phantom, cx-of"
                  />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <Icon className={classes.outdoorIcon}>
                      favorite
                    </Icon>
                  </Avatar>
                  <ListItemText
                    primary="アウトドア"
                    secondary="焚き火, 燻製"
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href="mailto:arakawamoriyuki@gmail.com">
            Contact
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

Profile.propTypes = {
  classes: PropTypes.shape().isRequired,
};

Profile.defaultProp = {
  classes: {},
};

export default hot(module)(withStyles(styles)(Profile));
