import React from 'react';
import { makeStyles, createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Fab from '@material-ui/core/Fab';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { orange } from '@material-ui/core/colors';

import MenuCart from "./menuCart";

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    right: theme.spacing(2),
    top: theme.spacing(9),
  },
  popoverCart: {
    minWidth: '16px'
  },
  headingCart: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10)
  },
  footerCart: {
    paddingLeft: theme.spacing(2)
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
});


const ButtonCart = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Fab color="primary" aria-label="add" className={classes.fab} onClick={handleClick}>
          <ShoppingCartIcon/>
        </Fab>
      </ThemeProvider>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuCart />
      </Popover>
    </div>
  );
}

export default ButtonCart;
