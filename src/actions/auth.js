import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push(`/account`);
  } catch (error) {
    alert(error);
  }
};

export const directorsignup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.directorSignUp(formData);

    dispatch({ type: AUTH, data });

    router.push(`/account/${data._id}`);
    
  } catch (error) {
    console.log(error)
  }
};



export const playersignup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.playerSignUp(formData);

    dispatch({ type: AUTH, data });

    router.push(`/account/${data._id}`);
    
  } catch (error) {
    alert(error);
  }
};

export const teamsignup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.teamSignUp(formData);

    dispatch({ type: AUTH, data });

    router.push(`/account/${data._id}`);
    
  } catch (error) {
    console.log(error)
  }
};

export const othersignup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.otherSignUp(formData);

    dispatch({ type: AUTH, data });

    router.push(`/account/${data._id}`);
    
  } catch (error) {
    console.log(error.message)
  }
};

