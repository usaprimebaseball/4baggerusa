import { UPDATE, FETCH_ALL, FETCH_ONE, ACTIVITY, ADD_ERROR, CLEAR_ERROR } from '../constants/actionTypes';
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

export const getuser = (id) => async (dispatch) => {
    try {
      const { data } = await api.getUser(id);

      dispatch({ type: FETCH_ONE, payload: data });
      dispatch({ type: CLEAR_ERROR });

    } catch (error) {
      await api.createError(error.response.data);

      dispatch({ type: ADD_ERROR, payload: error.response.data.message});
    }
  };

  // Update Info
  export const updateuser = (role, id, userInfo) => async (dispatch) => {
    try {
      const { data } = await api.updateUser(role, id, userInfo);

      dispatch({ type: UPDATE, payload: data });

      setInterval(await window.location.reload(), 20000);

      dispatch({ type: CLEAR_ERROR });
    } catch (error) {
      await api.createError(error.response.data);
      console.log(error.response.data)

      dispatch({ type: ADD_ERROR, payload: error.response.data.message});
    }
  };

  export const updateadmin = (id, userInfo) => async (dispatch) => {
    try {
      const { data } = await api.updateAdmin(id, userInfo);

      dispatch({ type: UPDATE, payload: data });
      setTimeout(await window.location.reload(), 4000);
      dispatch({ type: CLEAR_ERROR });

    } catch (error) {
      await api.createError(error.response.data);

      dispatch({ type: ADD_ERROR, payload: error.response.data.message});
    }
  };

  export const updateactivity = (userRole, id, active) => async (dispatch) => {
    try {
      const { data } = await api.updateActivity(userRole, id, active);
      dispatch({ type: ACTIVITY, payload: data });
      setTimeout(await window.location.reload(), 4000);
      dispatch({ type: CLEAR_ERROR });

    } catch (error) {
      await api.createError(error.response.data);

      dispatch({ type: ADD_ERROR, payload: error.response.data.message});
    }
  };