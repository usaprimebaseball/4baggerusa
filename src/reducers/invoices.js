import  *  as actionType from '../constants/actionTypes';

const invoicesReducer = (invoices = [], action) => {
  switch (action.type) {
    case actionType.FETCH_ALL:
      return action.payload;
    case actionType.CREATE:
      return [...invoices, action.payload];
    case actionType.FETCH_ONE_INVOICE:
      localStorage.setItem('invoice', JSON.stringify({ ...action?.payload }));
      return invoices.map((invoice) => (invoice._id === action.payload._id ? invoice : invoices));
    default:
      return invoices;
  }
};

export default invoicesReducer