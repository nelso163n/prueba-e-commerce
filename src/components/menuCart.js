import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { addCart, discountProduct } from "../store/cart/action";
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  cardMenuCart: {
    display: 'flex',
    marginBlockEnd: '5px'
  },
  cardMedia: {
    width: '11%',
    marginTop: "20px",
    "background-size": "contain",
  },
  cardContent: {
    flexGrow: 1,
    paddingBlockStart: '1px',
  },
  headingCart: {
    paddingTop: theme.spacing(0),
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    paddingBottom: theme.spacing(0)
  },
  footerCart: {
    paddingLeft: theme.spacing(2)
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const MenuCart = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const productsSelected = useSelector(state=>state.cartReducer.selectedProducts);
  console.log('vacio: ', productsSelected);

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography gutterBottom align="center" className={classes.headingCart} color="primary">
                <b>Productos Agregados</b>
              </Typography>
              <hr/>
              {!productsSelected.length && (<Typography variant="caption" display="block" align="center" gutterBottom>Sin Productos</Typography>)}
              {productsSelected.map(productSelected=>(
                    <Card key={productSelected.tail} className={classes.cardMenuCart}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={productSelected.image}
                        title={productSelected.name}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h6" >
                          {productSelected.name}
                        </Typography>
                        <Typography>
                          <b>Series: </b> {productSelected.amiiboSeries}
                        </Typography>
                        <Grid
                          justify="space-between"
                          container 
                          spacing={1}
                        >
                          <Grid item><b>Tipo: </b> {productSelected.type}</Grid>
                          <Grid item>
                            <ButtonGroup
                              size="small"
                              aria-label="small outlined button group"
                            >
                              <Button disabled>{productSelected.quantity || 0}</Button>
                              <Button onClick={()=>dispatch(addCart(productSelected))}>
                                <AddIcon/>
                              </Button>
                              <Button onClick={()=>dispatch(discountProduct(productSelected, productsSelected))}>
                                <RemoveIcon/>
                              </Button>
                            </ButtonGroup>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                ))}
              <hr/>
              <Typography variant="subtitle1" className={classes.footerCart}>
                Productos Diferentes: {productsSelected.length}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default MenuCart;
