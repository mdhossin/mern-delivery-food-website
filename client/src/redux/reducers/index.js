import { combineReducers } from "redux";
// import { createProductReducer } from "./productReduers";
import { userReducer } from "./userReducer";

export default combineReducers({
  user: userReducer,
  //   createProduct: createProductReducer,
});
