import { ADD_PRODUCT, DISCOUNT_PRODUCT } from "./constants";

const initalState = {
  selectedProducts: []
};

const discountProduct = (state, action) => ({...state, selectedProducts: action.payload })

const addProduct = (state, action) => ({...state, selectedProducts: action.payload })

export default (state = initalState, action) => {
 const reducerMap = {
    [ADD_PRODUCT]: addProduct,
    [DISCOUNT_PRODUCT]: discountProduct,
  };
  
  return reducerMap[action.type] ? reducerMap[action.type](state,action) : state;
};