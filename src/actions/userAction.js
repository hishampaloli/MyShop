import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  ALL_USERS_FAIL,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  DELETE_USER,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
} from "../constants/userConstant";
import axios from "axios";
import { CART_PRODUCT_RESET } from "../constants/cartConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
    // localStorage.removeItem("userInfo");
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/register",
      { name, email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
    // localStorage.removeItem("userInfo");
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGOUT,
    });

    dispatch({
      type: CART_PRODUCT_RESET,
    });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cartItems");
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const allUsers = (keyword = '') => async (dispatch) => {

  try {
    dispatch({
      type: ALL_USERS_REQUEST,
    });

    const token = JSON.parse(localStorage.getItem('userInfo'));


    const { data } = await axios.get(`/api/users/allusers?keyword=${keyword}` , { headers: {"Authorization" : `Bearer ${token.token}`} });

    console.log(data);

    dispatch({
      type: ALL_USERS_SUCCESS,
      payload: data,
    });


    // localStorage.removeItem("userInfo");
  } catch (error) {
    dispatch({
      type: ALL_USERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};




export const deleteUsers = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_USER,
    });

    const token = JSON.parse(localStorage.getItem('userInfo'));


    const { message } = await axios.delete(`/api/users/${id}` , { headers: {"Authorization" : `Bearer ${token.token}`} });
    const { data } = await axios.get("/api/users/allusers" , { headers: {"Authorization" : `Bearer ${token.token}`} });

    console.log(message);

    dispatch({
      type: ALL_USERS_SUCCESS,
      payload: data,
    });


  } catch (error) {
    dispatch({
      type: ALL_USERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};





export const userProfile = (id) => async (dispatch) => {

  try {
    dispatch({
      type: USER_PROFILE_REQUEST,
    });

    const token = JSON.parse(localStorage.getItem('userInfo'));


    const { data } = await axios.get(`/api/users/profile/${id}` , { headers: {"Authorization" : `Bearer ${token.token}`} });

    // console.log(data);

    dispatch({
      type: USER_PROFILE_SUCCESS,
      payload: data,
    });


    // localStorage.removeItem("userInfo");
  } catch (error) {
    dispatch({
      type: USER_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};




export const userProfileUpdate = (id,user) => async (dispatch) => {
console.log(user);
  try {
    dispatch({
      type: USER_PROFILE_REQUEST,
    });

    const token = JSON.parse(localStorage.getItem('userInfo'));


    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token.token}`,
      },
    };


    const { data } = await axios.put(`/api/users/edit/${id}` ,user, config );

    console.log(data);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });


    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

