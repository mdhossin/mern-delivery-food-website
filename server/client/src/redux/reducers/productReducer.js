import {
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_RESET,
  CREATE_PRODUCT_SUCCESS,
} from "../constants/productConstants";

export const createProductReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_PRODUCT_REQUEST:
      return {
        loading: true,
      };

    case CREATE_PRODUCT_SUCCESS:
      return {
        loading: false,

        products: action.payload,
      };

    case CREATE_PRODUCT_FAIL:
      return {
        loading: false,

        error: action.payload,
      };
    case CREATE_PRODUCT_RESET:
      return {};

    default:
      return state;
  }
};
