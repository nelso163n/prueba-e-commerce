import React from "react";
import {Route, Switch} from "react-router-dom";
import NotFound from "./notFound";
import Productos from "../containers/products";

import MenuCart from "./menuCart";


const Router = () => (
  <Switch>
    <Route exact path="/" component={Productos} />
    <Route path="/cart" component={MenuCart} />
    <Route component={NotFound} />
  </Switch>
);

export default Router;