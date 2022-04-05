import axios from "axios";
import {
  ALL_PRODUCTS_FAIL,
  ALL_PRODUCTS_LOADING,
  ALL_PRODUCTS_SUCCESS,
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_RESET,
  CREATE_PRODUCT_SUCCESS,
  PRODUCT_BY_ID_FAIL,
  PRODUCT_BY_ID_REQUEST,
  PRODUCT_BY_ID_SUCCESS,
} from "../constants/productConstants";

// create product action
export const createProduct = (product, navigate, toast) => async (dispatch) => {
  // console.log(product, "product");
  try {
    dispatch({
      type: CREATE_PRODUCT_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("/api/products", product, config);

    dispatch({
      type: CREATE_PRODUCT_SUCCESS,
      payload: data,
    });
    toast.success(data?.message);

    navigate("/");
    dispatch({ type: CREATE_PRODUCT_RESET });
  } catch (error) {
    dispatch({
      type: CREATE_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Get All Products
export const getAllProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS_LOADING });

    const { data } = await axios.get("/api/products");

    dispatch({
      type: ALL_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// get product by id from DB
export const getProductById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_BY_ID_REQUEST,
    });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: PRODUCT_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    // console.log(error);
  }
};
