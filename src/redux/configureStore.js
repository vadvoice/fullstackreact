import { createStore } from 'redux';
import { rootReducer, initialState } from './reducers';

export default createStore(rootReducer);
