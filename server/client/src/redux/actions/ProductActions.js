import axios from "axios";
import {
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
} from "../constants/productConstants";

// create product action
export const createProduct = (product, navigate) => async (dispatch) => {
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
    // console.log(data, access_token, "logout action");

    dispatch({
      type: CREATE_PRODUCT_SUCCESS,
      payload: data,
    });
    navigate("/");
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
