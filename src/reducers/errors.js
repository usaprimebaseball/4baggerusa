import  *  as actionType from '../constants/actionTypes';

const errorsReducer = (errors = [], action) => {
  switch (action.type) {
    case actionType.ADD_ERROR:
      errors.push(action.payload);
    case actionType.GET_ERROR:
      return action.payload;
    default:
      return errors;
  }
};

export default errorsReducer