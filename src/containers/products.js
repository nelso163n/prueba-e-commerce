import React, {useState, useEffect} from "react";
import { getProductsAll } from "../services/products";
import ListProducts from "../components/listProducts";
import ButtonCart from "../components/buttonCart";
import { withRouter } from "react-router";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [productsSelected, setProductsSelected] = useState([]);

  const loadProducts =  async () => {
    const {amiibo: data} = await getProductsAll();
    setProducts(data);
    console.log('data:', data);
  }

  useEffect(()=>{
    loadProducts();
  }, []);

  return(
    <div>
      <ButtonCart productsSelected={productsSelected}/>
      <ListProducts products={products}/>
    </div>
  );
}

export default withRouter(Products);
