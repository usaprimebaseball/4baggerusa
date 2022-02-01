import  *  as actionType from '../constants/actionTypes';

const usersReducer = (users = [], action) => {
  switch (action.type) {
    case actionType.FETCH_ALL:
      return action.payload;
    case actionType.FETCH_ONE:
      return users.map((user) => (user._id === action.payload._id ? user : user));
      // case actionType.ACTIVITY:
      //   return users.map((user) => (user._id === action.payload._id ? user : user));
    default:
      return users;
  }
};

export default usersReducer