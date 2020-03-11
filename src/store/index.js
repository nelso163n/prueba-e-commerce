import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import cartReducer from "./cart/reducer";
import thunk from 'redux-thunk';

const reducers = combineReducers({
  cartReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

const store = createStore(
  reducers,
  enhancer,
);

export default store;