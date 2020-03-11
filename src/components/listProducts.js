import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from "./product";

const ListProducts = ({products}) => {
  return (
    <Grid container spacing={4}>
      {products.map(product => (
        <Product key={product.tail} product={product}/>
      ))}
    </Grid>
  );
}

export default ListProducts;
