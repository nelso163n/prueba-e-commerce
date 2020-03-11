import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AppBar from '@material-ui/core/AppBar';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link, NavLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkNav: {
    color: 'inherit',
    textDecoration: 'inherit'
  }
}));


const HeaderApp = () => {
  const classes = useStyles();

  return(
    <AppBar position="static">
      <Toolbar>
        <Link className={classes.linkNav} to='/cart'>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <ShoppingCartIcon className={classes.icon} />
          </IconButton>
        </Link>
        <Typography variant="h6" className={classes.title} href="/">
          <Link className={classes.linkNav} to='/'>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              E-commerce
            </IconButton>
          </Link>
        </Typography>
        <NavLink activeClassName="active" to="/cart" className={classes.linkNav}>
          <Button color="inherit">Ver Carrito</Button>
        </NavLink>
      </Toolbar>
    </AppBar>

  );
}

export default HeaderApp;
