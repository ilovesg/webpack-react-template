import {
  put,
  takeEvery,
  call,
  all,
} from '@redux-saga/core/effects';
import { FETCH_CUSTOMERS, addCustomerAction } from '../store/customersReducer';

const fetchCustomersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users');

function* customersWorker() {
  const response = yield call(fetchCustomersFromApi);
  const json = yield call(() => Promise.resolve(response.json()));

  yield all(json.map((customer) => put(addCustomerAction(customer))));
}

export default function* customersWatcher() {
  yield takeEvery(FETCH_CUSTOMERS, customersWorker);
}
