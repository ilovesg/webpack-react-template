import { createStore, combineReducers } from 'redux';
import cashReducer from './cashReducer';

const rootReducer = combineReducers({
  cash: cashReducer,
});

const store = createStore(rootReducer);

export default store;
