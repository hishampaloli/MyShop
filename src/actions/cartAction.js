import {
  CART_PRODUCT_SUCCESS,
  CART_PRODUCT_REMOVE,
  CART_PRODUCT_RESET,
} from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  // const product = await Product.findById(id);

  const { data } = await axios.get(`/api/products/${id}`);
  console.log(data);
  if (data) {
    dispatch({
      type: CART_PRODUCT_SUCCESS,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  }
};


export const deleteFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_PRODUCT_REMOVE,
        payload: id
    })

    localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cart.cartItems)
      );
}