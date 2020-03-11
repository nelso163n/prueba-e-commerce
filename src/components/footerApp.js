import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  }
}));

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        nelso163n
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const FooterApp = () => {
  const classes = useStyles();

  return(
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Nelson Javier Gonzalez Gonzalez
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        <b>Correo:</b> nelso163n@gmail.com
      </Typography>
      <Copyright />
    </footer>
  );
}

export default FooterApp;