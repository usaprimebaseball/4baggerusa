import  *  as actionType from '../constants/actionTypes';

const errorsReducer = (errors = [], action) => {
  switch (action.type) {
    case actionType.ADD_ERROR:
      return [...errors, action.payload];
    case actionType.CLEAR_ERROR:
      return errors = [];
    default:
      return errors;
  }
};

export default errorsReducer