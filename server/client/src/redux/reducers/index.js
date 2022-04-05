import { combineReducers } from "redux";
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
});
