import  *  as actionType from '../constants/actionTypes';

const eventsReducer = (events = [], action) => {
  switch (action.type) {
    case actionType.FETCH_ALL:
      return action.payload;
    case actionType.CREATE:
      return [...events, action.payload];
    case actionType.FETCH_ONE_EVENT:
      localStorage.setItem('event', JSON.stringify({ ...action?.payload }));
      return events.map((event) => (event._id === action.payload._id ? event : events));
    default:
      return events;
  }
};

export default eventsReducer