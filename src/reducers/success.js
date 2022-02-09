import  *  as actionType from '../constants/actionTypes';

const successReducer = (success = [], action) => {
  switch (action.type) {
    case actionType.SUCCESS:
      return [...success, action.payload];
    case actionType.CLEAR_SUCCESS:
      return success = [];
    default:
      return success;
  }
};

export default successReducer