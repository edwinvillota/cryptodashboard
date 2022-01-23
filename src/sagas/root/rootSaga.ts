import { all } from 'redux-saga/effects';
import { coinsSaga } from '../coins';

export default function* rootSaga() {
  yield all([coinsSaga()]);
}
