import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';

import { loggingMiddleware } from  './middlewares/loggining'

export default createStore(rootReducer, applyMiddleware(loggingMiddleware));
