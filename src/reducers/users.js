import  *  as actionType from '../constants/actionTypes';

const usersReducer = (users = [], action) => {
  switch (action.type) {
    case actionType.FETCH_ALL:
      return action.payload;
    case actionType.FETCH_ONE_USER:
      localStorage.setItem('selectedUser', JSON.stringify({ ...action?.payload }));
      return users.map((user) => (user._id === action.payload._id ? user : user));
      case actionType.ACTIVITY:
        return users.map((user) => (user._id === action.payload._id ? action.payload : user));
      case actionType.UPDATE:
        localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
        return users.map((user) => (user._id === action.payload._id ? action.payload : user));
    default:
      return users;
  }
};

export default usersReducer