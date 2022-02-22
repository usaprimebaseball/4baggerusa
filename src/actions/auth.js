import { ADD_ERROR, AUTH, CLEAR_ERROR } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    router.push(`/account/${data.result._id}`);
    window.scroll(0,0);
    dispatch({ type: CLEAR_ERROR });

  } catch (error) {
    await api.createError(error.response.data);

    dispatch({ type: ADD_ERROR, payload: error.response.data.message})
  }
};

export const adminsignin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.adminSignin(formData);

    dispatch({ type: AUTH, data });
    router.push(`/account/admin/${data.result._id}`);
    window.scroll(0,0);
    dispatch({ type: CLEAR_ERROR });

  } catch (error) {
    await api.createError(error.response.data);

    dispatch({ type: ADD_ERROR, payload: error.response.data.message})
  }
};

export const usersignup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.userSignUp(formData);

    dispatch({ type: AUTH, data });

    if (data.role === "admin") {
      router.push(`/account/admin/${data.result._id}`);
    } else {
      router.push(`/account/${data.result._id}`);
    }
    window.scroll(0,0);
    dispatch({ type: CLEAR_ERROR });

  } catch (error) {
    await api.createError(error.response.data);

    dispatch({ type: ADD_ERROR, payload: error.response.data.message})
  }
};



