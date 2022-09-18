import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productReducer,
  getProductDetails,
} from "./reducers/productsReducer.js";
import { cartReducer } from "./reducers/cartReducer.js";
import { AlluserReducer, userLoginReducer,userProfileReducer } from "./reducers/userReducer.js";


const reducer = combineReducers({
  productList: productReducer,
  productDetails: getProductDetails,
  cart: cartReducer,
  Login: userLoginReducer,
  Users: AlluserReducer,
  userProfile: userProfileReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

  const initialState = {
    cart: {
      cartItems: cartItemsFromStorage,
      // shippingAddress: shippingAddressFromStorage,
    },
    Login: { userInfo: userInfoFromStorage },
  }


const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
