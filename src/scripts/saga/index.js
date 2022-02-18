import { all } from '@redux-saga/core/effects';
import customersWatcher from './customers';

export default function* rootWatcher() {
  yield all([
    customersWatcher(),
  ]);
}
