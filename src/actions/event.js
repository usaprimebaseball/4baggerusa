import { CREATE, FETCH_ALL, ADD_ERROR, CLEAR_ERROR, FETCH_ONE_EVENT, UPDATE_EVENT_TEAMS} from '../constants/actionTypes';
import * as api from '../api/index.js';

// Create event
export const createevent = (formData) => async (dispatch) => {
    try {
      const { data } = await api.createEvent(formData);
  
      dispatch({ type: CREATE, payload: data });

      dispatch({ type: CLEAR_ERROR });
      setInterval(await window.location.reload(), 20000);
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
    
    dispatch({ type: CLEAR_ERROR });
  } catch (error) {
    await api.createError(error.response.data);

    dispatch({ type: ADD_ERROR, payload: error.response.data.message})  
  }
};

export const getevent = (id, router) => async (dispatch) => {
  try {
    const { data } = await api.getEvent(id);

    dispatch({ type: FETCH_ONE_EVENT, payload: data });
    router.push(`/Events/tournaments/${data.eventName}`);

    dispatch({ type: CLEAR_ERROR });

  } catch (error) {
    await api.createError(error.response.data);

    dispatch({ type: ADD_ERROR, payload: error.response.data.message});
  }
};

export const updateevent = (id, info) => async (dispatch) => {
  try {
    const { data } = await api.updateEvent(id, info);
    dispatch({ type: UPDATE_EVENT_TEAMS, payload: data });
    window.scroll(0, 0);
    dispatch({ type: CLEAR_ERROR });  

  } catch (error) {
    await api.createError(error.response.data);

    dispatch({ type: ADD_ERROR, payload: error.response.data.message});
  }
};