import { combineReducers } from 'redux';

import auth from './auth';
import users from './users';
import events from './events';
import errors from './errors';

export const reducers = combineReducers({ auth, users, events, errors });