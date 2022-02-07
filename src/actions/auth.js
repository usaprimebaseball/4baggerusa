import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });
    router.push(`/account/${data.result.role === 'other' ? 'user':data.result.role}/${data.result._id}`);
    window.scroll(0,0);
  } catch (error) {
    console.log(error);
  }
};

export const adminsignin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.adminSignin(formData);

    dispatch({ type: AUTH, data });
    router.push(`/account/admin/${data.result._id}`);
    window.scroll(0,0);
  } catch (error) {
    console.log(error);
  }
};

export const directorsignup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.directorSignUp(formData);

    dispatch({ type: AUTH, data });

    router.push(`/account/director/${data.result._id}`);
    window.scroll(0,0);
  } catch (error) {
    console.log(error)
  }
};


export const playersignup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.playerSignUp(formData);

    dispatch({ type: AUTH, data });

    router.push(`/account/player/${data.result._id}`);
    window.scroll(0,0);
  } catch (error) {
    alert(error);
  }
};

export const teamsignup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.teamSignUp(formData);

    dispatch({ type: AUTH, data });

    router.push(`/account/team/${data.result.teamName}`);
    window.scroll(0,0);
  } catch (error) {
    console.log(error)
  }
};

export const othersignup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.otherSignUp(formData);

    dispatch({ type: AUTH, data });

    router.push(`/account/user/${data.result._id}`);
    window.scroll(0,0);
  } catch (error) {
    console.log(error.message)
  }
};

export const adminsignup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.adminSignUp(formData);

    dispatch({ type: AUTH, data });

    router.push(`/account/admin/${data.result._id}`);
    window.scroll(0,0);
  } catch (error) {
    console.log(error.message)
  }
};


