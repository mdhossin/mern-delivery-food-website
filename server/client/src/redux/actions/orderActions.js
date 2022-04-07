import axios from "axios";
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

// create order action
export const createOrders = (order, navigate, toast) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_ORDER_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "https://yummy-food-delivery.herokuapp.com/api/orders",
      order,
      config
    );

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

// Get USER orders action
export const getUserOrders = (email) => async (dispatch) => {
  try {
    dispatch({ type: GET_ORDER_REQUEST });
    const { data } = await axios.get(
      `https://yummy-food-delivery.herokuapp.com/api/orders/${email}`
    );
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

// delete order action
export const deleteOrder = (id, toast) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ORDER_DELETE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.delete(
      `https://yummy-food-delivery.herokuapp.com/api/orders/${id}`,
      config
    );
    dispatch({
      type: GET_ORDER_DELETE_SUCCESS,
      payload: data,
    });
    toast.success(data?.message);
    dispatch({
      type: GET_ORDER_DELETE_RESET,
    });
  } catch (error) {
    dispatch({
      type: GET_ORDER_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Get all orders action
export const getAllOrders = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_ORDER_REQUEST });
    const { data } = await axios.get(
      `https://yummy-food-delivery.herokuapp.com/api/orders`
    );
    dispatch({
      type: GET_ALL_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
