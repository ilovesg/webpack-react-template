import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cashReducer from './cashReducer';
import customersReducer from './customersReducer';

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customersReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
