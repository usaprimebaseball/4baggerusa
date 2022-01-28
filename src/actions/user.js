import { UPDATE } from '../constants/actionTypes';
import * as api from '../api/index.js';

// Update info
export const updatedirector = (id, userInfo) => async (dispatch) => {
    try {
      const { data } = await api.updateDirector(id, userInfo);


      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const updateteam = (id, userInfo) => async (dispatch) => {
    try {
      const { data } = await api.updateTeam(id, userInfo);

      console.log(id, data)

      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const updateplayer = (id, userInfo) => async (dispatch) => {
    try {
      const { data } = await api.updatePlayer(id, userInfo);

      console.log(id, data)

      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const updateuser = (id, userInfo) => async (dispatch) => {
    try {
      const { data } = await api.updateOther(id, userInfo);

      console.log(id, data)

      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };