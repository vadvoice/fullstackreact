import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';

import { loggingMiddleware } from  './middlewares/loggining'
import { apiMiddleware } from  './middlewares/api'

export default createStore(
	rootReducer,
	applyMiddleware(
		loggingMiddleware,
		apiMiddleware
		)
	);
