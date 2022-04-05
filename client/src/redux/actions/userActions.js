import {
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
} from "../constants/userConstants";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";

import { auth, provierGoogle } from "../../firebase";

export const register = (email, password, name) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const res = await createUserWithEmailAndPassword(auth, email, password);

    // display name pauar jonno use korsi
    await updateProfile(res.user, {
      displayName: name,
    });

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: res.user,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const res = await signInWithEmailAndPassword(auth, email, password);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res.user,
    });
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
export const logOut = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGOUT_REQUEST,
    });

    const res = await signOut(auth);
    console.log(res, "logut action");

    dispatch({
      type: USER_LOGOUT_SUCCESS,
      //   payload: res.user,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGOUT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const googleSignin = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_GOOGLE_SIGN_IN_REQUEST,
    });

    const res = await signInWithPopup(auth, provierGoogle);

    dispatch({
      type: USER_GOOGLE_SIGN_IN_SUCCESS,
      payload: res.user,
    });
  } catch (error) {
    dispatch({
      type: USER_GOOGLE_SIGN_IN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
