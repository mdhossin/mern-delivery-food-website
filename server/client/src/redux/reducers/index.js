import { combineReducers } from "redux";
import {
  allOrderReducer,
  createOrderReducer,
  orderDeleteReducer,
  userOrderReducer,
} from "./orderReducer";
import {
  createProductReducer,
  productByIdReducer,
  productReducer,
} from "./productReducer";

import { userReducer } from "./userReducer";

export default combineReducers({
  user: userReducer,
  createProduct: createProductReducer,
  allProducts: productReducer,
  productById: productByIdReducer,
  createOrder: createOrderReducer,
  userOrders: userOrderReducer,
  deleteOrder: orderDeleteReducer,
  allOrders: allOrderReducer,
});
