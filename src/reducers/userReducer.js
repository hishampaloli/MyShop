import {
  ALL_USERS_FAIL,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_PROFILE_FAIL,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
} from "../constants/userConstant";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const AlluserReducer = (state = {users: []}, action) => {
  console.log(action);
  switch (action.type) {
    case ALL_USERS_REQUEST:
      return { loading: true };
    case ALL_USERS_SUCCESS:
      return { loading: false, users: action.payload };
    case ALL_USERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}



export const userProfileReducer = (state = {user: {}}, action) => {
  console.log(action);
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return { loading: true };
    case USER_PROFILE_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

