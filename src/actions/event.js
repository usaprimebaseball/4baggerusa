import { CREATE, FETCH_ALL, ADD_ERROR, CLEAR_ERROR} from '../constants/actionTypes';
import * as api from '../api/index.js';

// Create event
export const createevent = (formData) => async (dispatch) => {
    try {
      const { data } = await api.createEvent(formData);
  
      dispatch({ type: CREATE, payload: data });
      dispatch({ type: CLEAR_ERROR });

      window.scroll(0,0);
    } catch (error) {
      await api.createError(error.response.data);

      dispatch({ type: ADD_ERROR, payload: error.response.data.message})  
    }
  };

// Get all events
export const getevents = () => async (dispatch) => {
  try {
    const { data } = await api.getEvents();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    await api.createError(error.response.data);

    dispatch({ type: ADD_ERROR, payload: error.response.data.message})  
  }
};
