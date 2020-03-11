import { ADD_PRODUCT, DISCOUNT_PRODUCT } from "./constants";

export const addCart = (product) => (dispatch, getState) => {
  let found = false;
  const state = getState().cartReducer;
  console.log('state', state)
  let data = state.selectedProducts.map(element => {
    if(element.head==product.head && element.tail==product.tail) {
      found = true;
      return {...element, quantity: ++element.quantity};
    }
    return element;
  });

  if (!found) {
    data = [...state.selectedProducts, {...product, quantity: 1}];
  }

  
  dispatch({
    type: ADD_PRODUCT,
    payload: data
  });
}

export const discountProduct = (product) => (dispatch, getState) => {
  const state = getState().cartReducer;
  const data = state.selectedProducts.filter(element => {
    if(element.head==product.head && element.tail==product.tail) {
      if (element.quantity-1) {
        return {...element, quantity: --element.quantity};
      }
    } else {
      return element;
    } 
  });

  dispatch({
    type: DISCOUNT_PRODUCT,
    payload: data
  });
}
