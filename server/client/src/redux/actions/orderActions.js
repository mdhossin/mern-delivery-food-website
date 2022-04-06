import axios from "axios";
import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_RESET,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_FAIL,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
} from "../constants/orderConstants";

// create product action
export const createOrders = (order, navigate, toast) => async (dispatch) => {
  // console.log(product, "product");
  try {
    dispatch({
      type: CREATE_ORDER_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("/api/orders", order, config);
    console.log(data, "order action");

    dispatch({
      type: CREATE_ORDER_SUCCESS,
      payload: data,
    });
    toast.success(data?.message);

    navigate("/dashboard/myorders");
    dispatch({ type: CREATE_ORDER_RESET });
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Get USER orders
export const getUserOrders =
  ({ email }) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_ORDER_REQUEST });

      const { data } = await axios.get(`/api/orders/${email}`);

      dispatch({
        type: GET_ORDER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ORDER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
