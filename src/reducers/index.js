import { combineReducers } from 'redux';

import auth from './auth';
import users from './users';
import events from './events';
import errors from './errors';
import invoices from './invoices';

export const reducers = combineReducers({ auth, users, events, errors, invoices });