import { UPDATE, FETCH_ALL, ACTIVITY, ADD_ERROR, CLEAR_ERROR, FETCH_ONE_USER } from '../constants/actionTypes';
import * as api from '../api/index.js';

// Get users
export const getusers = () => async (dispatch) => {
  try {
    const { data } = await api.getUsers();

    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: CLEAR_ERROR });

  } catch (error) {
    await api.createError(error.response.data);

    dispatch({ type: ADD_ERROR, payload: error.response.data.message});
  }
};

export const getuser = (id, router) => async (dispatch) => {
    try {
      const { data } = await api.getUser(id);
      const user = JSON.parse(localStorage.getItem('profile'));

      dispatch({ type: FETCH_ONE_USER, payload: data });
      dispatch({ type: CLEAR_ERROR });
      
      if ( user.result.role === "admin" ){
        router.push(`/account/users/${data.firstName}`)
      } 

    } catch (error) {
      await api.createError(error.response.data);

      dispatch({ type: ADD_ERROR, payload: error.response.data.message});
    }
  };

  // Update Info
  export const updateuser = (id, userInfo) => async (dispatch) => {
    try {
      const { data } = await api.updateUser(id, userInfo);

      dispatch({ type: UPDATE, payload: data });

      // setInterval(await window.location.reload(), 20000);

      dispatch({ type: CLEAR_ERROR });
    } catch (error) {
      await api.createError(error.response.data);

      dispatch({ type: ADD_ERROR, payload: error.response.data.message});
    }
  };

  export const updateactivity = (id, active, router) => async (dispatch) => {
    try {
      const { data } = await api.updateActivity(id, active);
      dispatch({ type: ACTIVITY, payload: data });
      window.scroll(0, 0);
      dispatch({ type: CLEAR_ERROR });  
      router.push(`/account/admin/users`)

    } catch (error) {
      await api.createError(error.response.data);

      dispatch({ type: ADD_ERROR, payload: error.response.data.message});
    }
  };