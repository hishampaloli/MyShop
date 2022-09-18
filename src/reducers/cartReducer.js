import {
  CART_PRODUCT_REMOVE,
  CART_PRODUCT_REQUEST,
  CART_PRODUCT_RESET,
  CART_PRODUCT_SUCCESS,
} from "../constants/cartConstants.js";

export const cartReducer = (state = { cartItems: [], shippingAddress: {} }, action) => {
  
    switch (action.type) {
      case CART_PRODUCT_SUCCESS:
        const item = action.payload;
  
        const existItem = state.cartItems.find((x) => x.product === item.product);
        if (existItem) {
          return {
            ...state,
            cartItems: state.cartItems.map((x) =>
              x.product === existItem.product ? item : x
            ),
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, item],
          };
        }
  
      case CART_PRODUCT_REMOVE:
        return {
          ...state,
          cartItems: state.cartItems.filter((x) => x.product !== action.payload),
        };
  
      
  
          case CART_PRODUCT_RESET:
            return {
              ...state,
              cartItems: [],
            }
  
      default:
        return state;
    }
  };
  