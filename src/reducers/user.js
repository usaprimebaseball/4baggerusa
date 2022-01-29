import  *  as actionType from '../constants/actionTypes';

const userReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.UPDATE:
      localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
      return { ...state, authData: action.payload, loading: false, errors: null };
    default:
      return state;
  }
};

export default userReducer