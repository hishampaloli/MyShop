import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  PRODUCTS_DETAILS_FAIL,
  PRODUCTS_DETAILS_REQUEST,
  PRODUCTS_DETAILS_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS
} from "../constants/productsConstants.js";
import axios from "axios";

export const getProducts =
  (keyword = "") =>
  async (dispatch) => {
    try {
      dispatch({
        type: GET_PRODUCTS_REQUEST,
      });

      const { data } = await axios.get(`/api/products?keyword=${keyword}`);
      console.log(data);
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_PRODUCTS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getProductsDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCTS_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`/api/products/${id}`);
    console.log(data);

    dispatch({
      type: PRODUCTS_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const AddNewProduct = (product) => async (dispatch) => {
  console.log(product);
  try {
    dispatch({
      type: ADD_PRODUCT_REQUEST,
    });

    const token = JSON.parse(localStorage.getItem("userInfo"));

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
    };

    const { data } = await axios.post(`/api/products/new`, product, config);
    console.log(data);

    dispatch({
      type: ADD_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};




export const editProduct = (id,prod ,keyword = '') => async (dispatch) => {
  console.log(prod);
  try { 
    const token = JSON.parse(localStorage.getItem("userInfo"));

console.log(token.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token.token}`,
      },
    };
    const { dlt } = await axios.put(`/api/products/${id}`,prod, config);

    const { data } = await axios.get(`/api/products?keyword=${keyword}`);

    console.log(data);
    
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
