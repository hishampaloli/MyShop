import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  PRODUCTS_DETAILS_FAIL,
  PRODUCTS_DETAILS_REQUEST,
  PRODUCTS_DETAILS_SUCCESS,
} from "../constants/productsConstants.js";

const INIT_STATE = {
  products: [],
};

export const productReducer = (state = INIT_STATE, action) => {
//   console.log(action.payload);
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        loading: true,
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getProductDetails = (state = {product: {}}, action) => {
  switch (action.type) {
    case PRODUCTS_DETAILS_REQUEST:
      return {
        loading: true,
      };

    case PRODUCTS_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload
      };

    case PRODUCTS_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload
      };

    default:
      return {
        state
      }
  }
};

//   export default productReducer;
