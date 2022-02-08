import { combineReducers } from 'redux';

import authReducer from './AuthReducer';

export type DispatchPayloadType = {
  type: string;
  payload?: any;
};

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
