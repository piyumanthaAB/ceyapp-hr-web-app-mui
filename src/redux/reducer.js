/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './auth';
import popupReader from './popUps';
import userroleReducer from './userroles';
import employeeReducer from './employees';
import departmentReducer from './department';

const reducer = combineReducers({
  authReducer,
  departmentReducer,
  userroleReducer,
  employeeReducer,
  popupReader
});

export default reducer;
