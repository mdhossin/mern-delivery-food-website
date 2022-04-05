import {
  SERT_USER,
  USER_GOOGLE_SIGN_IN_FAIL,
  USER_GOOGLE_SIGN_IN_REQUEST,
  USER_GOOGLE_SIGN_IN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_RESET,
} from "../constants/userConstants";

const initialState = {
  loading: false,
  currentUser: null,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
    case USER_LOGIN_REQUEST:
    case USER_LOGOUT_REQUEST:
    case USER_GOOGLE_SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_REGISTER_SUCCESS:
    case USER_LOGIN_SUCCESS:
    case USER_GOOGLE_SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        error: null,
      };

    case SERT_USER:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case USER_REGISTER_FAIL:
    case USER_LOGIN_FAIL:
    case USER_LOGOUT_FAIL:
    case USER_GOOGLE_SIGN_IN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        currentUser: null,
      };
    case USER_RESET: {
      return {};
    }
    default:
      return state;
  }
};
