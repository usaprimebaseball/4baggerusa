import { UPDATE, FETCH_ALL, FETCH_ONE, ACTIVITY } from '../constants/actionTypes';
import * as api from '../api/index.js';

// Get users
export const getusers = () => async (dispatch) => {
  try {
    const { data } = await api.getUsers();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getuser = (id) => async (dispatch) => {
    try {
      const { data } = await api.getUser(id);

      dispatch({ type: FETCH_ONE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  // Update Info
  export const updatedirector = (id, userInfo) => async (dispatch) => {
    try {
      const { data } = await api.updateDirector(id, userInfo);

      dispatch({ type: UPDATE, payload: data });
      setTimeout(await window.location.reload(), 4000);
    } catch (error) {
      console.log(error.message);
    }
  };

  export const updateteam = (id, userInfo) => async (dispatch) => {
    try {
      const { data } = await api.updateTeam(id, userInfo);


      dispatch({ type: UPDATE, payload: data });
      // setTimeout(await window.location.reload(), 4000);
    } catch (error) {
      console.log(error.message);
    }
  };
  export const updateplayer = (id, userInfo) => async (dispatch) => {
    try {
      const { data } = await api.updatePlayer(id, userInfo);

      dispatch({ type: UPDATE, payload: data });
      setTimeout(await window.location.reload(), 4000);
    } catch (error) {
      console.log(error.message);
    }
  };
  export const updateuser = (id, userInfo) => async (dispatch) => {
    try {
      const { data } = await api.updateOther(id, userInfo);

      dispatch({ type: UPDATE, payload: data });
      setTimeout(await window.location.reload(), 4000);
    } catch (error) {
      console.log(error.message);
    }
  };

  export const updateadmin = (id, userInfo) => async (dispatch) => {
    try {
      const { data } = await api.updateAdmin(id, userInfo);

      dispatch({ type: UPDATE, payload: data });
      setTimeout(await window.location.reload(), 4000);
    } catch (error) {
      console.log(error.message);
    }
  };

  export const updateactivity = (userRole, id, active) => async (dispatch) => {
    try {
      const { data } = await api.updateActivity(userRole, id, active);
      dispatch({ type: ACTIVITY, payload: data });
      setTimeout(await window.location.reload(), 4000);
    } catch (error) {
      console.log(error.message);
    }
  };