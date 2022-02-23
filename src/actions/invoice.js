import { CREATE, FETCH_ALL, ADD_ERROR, CLEAR_ERROR, FETCH_ONE_INVOICE} from '../constants/actionTypes';
import * as api from '../api/index.js';

// Create event
export const createteaminvoice = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.createTeamInvoice(formData);
  
      dispatch({ type: CREATE, payload: data });
      dispatch({ type: CLEAR_ERROR });

      localStorage.setItem('invoice', JSON.stringify({ ...data }));
      router.push(`/Events/tournaments/:eventName/invoice`)

    } catch (error) {
      await api.createError(error.response.data);

      dispatch({ type: ADD_ERROR, payload: error.response.data.message});

    }
  };

// Get all events
export const getinvoices = () => async (dispatch) => {
  try {
    const { data } = await api.getInvoices();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    await api.createError(error.response.data);

    dispatch({ type: ADD_ERROR, payload: error.response.data.message})  
  }
};

export const getinvoice = (id, router) => async (dispatch) => {
  try {
    const { data } = await api.getInvoice(id);

    router.push(`/account/admin/invoices/${id}`)
    
    dispatch({ type: FETCH_ONE_INVOICE, payload: data });
    
    dispatch({ type: CLEAR_ERROR });

  } catch (error) {
    await api.createError(error.response.data);

    dispatch({ type: ADD_ERROR, payload: error.response.data.message});
  }
};
