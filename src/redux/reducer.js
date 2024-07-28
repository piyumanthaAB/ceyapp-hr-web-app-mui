/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './auth';

const reducer = combineReducers({
  authReducer
});

export default reducer;
