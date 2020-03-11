import React from 'react';
import { useDispatch } from 'react-redux'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { addCart } from '../store/cart/action';
import { orange } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingLeft: "56.25%",
    paddingTop: "56.25%", // 16:9,
    marginTop: "20px",
    "background-size": "contain",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
});

const Product = (props) => {
  console.log('props:', props);
  const {product} = props;
  const classes = useStyles();
  const dispatch = useDispatch()
  return (
    <Grid item key={product.tail} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={product.image}
          title={product.name}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography>
            <b>Series: </b> {product.amiiboSeries}
          </Typography>
          <Typography>
            <b>Tipo: </b> {product.type}
          </Typography>
        </CardContent>
        <CardActions>
          <ThemeProvider theme={theme}>
            <Button size="small" color="primary" onClick={()=>dispatch(addCart(product))}>
              Add to cart
            </Button>
          </ThemeProvider>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Product;
