import { UPDATE } from '../constants/actionTypes';
import * as api from '../api/index.js';

// Update info
export const updatedirector = (id, userInfo) => async (dispatch) => {
    try {
      const { data } = await api.updateDirector(id, userInfo);

      dispatch({ type: UPDATE, payload: data });
      setTimeout(window.location.reload(), 1500);
    } catch (error) {
      console.log(error.message);
    }
  };

  export const updateteam = (id, userInfo) => async (dispatch) => {
    try {
      const { data } = await api.updateTeam(id, userInfo);


      dispatch({ type: UPDATE, payload: data });
      window.scroll(0,0);
      setInterval(window.location.reload(), 5000);
    } catch (error) {
      console.log(error.message);
    }
  };
  export const updateplayer = (id, userInfo) => async (dispatch) => {
    try {
      const { data } = await api.updatePlayer(id, userInfo);

      dispatch({ type: UPDATE, payload: data });
      window.scroll(0,0);
      setTimeout(window.location.reload(), 1500);
    } catch (error) {
      console.log(error.message);
    }
  };
  export const updateuser = (id, userInfo) => async (dispatch) => {
    try {
      const { data } = await api.updateOther(id, userInfo);

      dispatch({ type: UPDATE, payload: data });
      window.scroll(0,0);
      setTimeout(window.location.reload(), 1500);
    } catch (error) {
      console.log(error.message);
    }
  };