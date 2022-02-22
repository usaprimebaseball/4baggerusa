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

export const directorsignup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.directorSignUp(formData);

    dispatch({ type: AUTH, data });

    router.push(`/account/${data.result._id}`);
    window.scroll(0,0);
    dispatch({ type: CLEAR_ERROR });

  } catch (error) {
    await api.createError(error.response.data);

    dispatch({ type: ADD_ERROR, payload: error.response.data.message})
  }
};


export const playersignup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.playerSignUp(formData);

    dispatch({ type: AUTH, data });

    router.push(`/account/${data.result._id}`);
    window.scroll(0,0);
    dispatch({ type: CLEAR_ERROR });

  } catch (error) {
    await api.createError(error.response.data);

    dispatch({ type: ADD_ERROR, payload: error.response.data.message})  
  }
};

export const teamsignup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.teamSignUp(formData);

    dispatch({ type: AUTH, data });

    router.push(`/account/${data.result._id}`);
    window.scroll(0,0);
    dispatch({ type: CLEAR_ERROR });

  } catch (error) {
    await api.createError(error.response.data);

    dispatch({ type: ADD_ERROR, payload: error.response.data.message})
  }
};

export const othersignup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.otherSignUp(formData);

    dispatch({ type: AUTH, data });

    router.push(`/account/${data.result._id}`);
    window.scroll(0,0);
    dispatch({ type: CLEAR_ERROR });

  } catch (error) {
    await api.createError(error.response.data);

    dispatch({ type: ADD_ERROR, payload: error.response.data.message})
  }
};

export const adminsignup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.adminSignUp(formData);

    dispatch({ type: AUTH, data });

    router.push(`/account/${data.result._id}`);
    window.scroll(0,0);
    dispatch({ type: CLEAR_ERROR });

  } catch (error) {
    await api.createError(error.response.data);

    dispatch({ type: ADD_ERROR, payload: error.response.data.message})  
  }
};


