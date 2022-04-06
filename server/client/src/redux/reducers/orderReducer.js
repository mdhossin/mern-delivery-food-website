import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_RESET,
  CREATE_ORDER_SUCCESS,
  GET_ALL_ORDER_FAIL,
  GET_ALL_ORDER_REQUEST,
  GET_ALL_ORDER_SUCCESS,
  GET_ORDER_FAIL,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
} from "../constants/orderConstants";
import {
  GET_ORDER_DELETE_FAIL,
  GET_ORDER_DELETE_REQUEST,
  GET_ORDER_DELETE_RESET,
  GET_ORDER_DELETE_SUCCESS,
} from "../constants/productConstants";

export const createOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {
        loading: true,
      };

    case CREATE_ORDER_SUCCESS:
      return {
        loading: false,

        userOrder: action.payload,
      };

    case CREATE_ORDER_FAIL:
      return {
        loading: false,

        error: action.payload,
      };
    case CREATE_ORDER_RESET:
      return {};

    default:
      return state;
  }
};

const initState = {
  orders: [],
};

// get specific user orders
export const userOrderReducer = (state = { userOrders: [] }, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST:
      return {
        loading: true,
      };
    case GET_ORDER_SUCCESS:
      return {
        loading: false,
        userOrders: action.payload,
      };
    case GET_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orderDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ORDER_DELETE_REQUEST:
      return {
        loading: true,
      };
    case GET_ORDER_DELETE_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case GET_ORDER_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case GET_ORDER_DELETE_RESET:
      return {};

    default:
      return state;
  }
};

// get all ORDERS
export const allOrderReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_ORDER_REQUEST:
      return {
        loading: true,
      };
    case GET_ALL_ORDER_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case GET_ALL_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
