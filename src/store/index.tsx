import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

const devStage = process.env.NODE_ENV === 'development';

export default devStage
  ? createStore(rootReducer, applyMiddleware(thunk, logger))
  : createStore(rootReducer, applyMiddleware(thunk));
