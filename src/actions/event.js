import { CREATE, FETCH_ALL } from '../constants/actionTypes';
import * as api from '../api/index.js';

// Create event
export const createevent = (formData) => async (dispatch) => {
    try {
      const { data } = await api.createEvent(formData);
  
      dispatch({ type: CREATE, payload: data });
  
      window.scroll(0,0);
    } catch (error) {
      console.log(error)
    }
  };

// Get all events
export const getevents = () => async (dispatch) => {
  try {
    const { data } = await api.getEvents();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
