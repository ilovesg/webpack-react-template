import { createStore, combineReducers } from 'redux';
import cashReducer from './cashReducer';
import customersReducer from './customersReducer';

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customersReducer,
});

const store = createStore(rootReducer);

export default store;
