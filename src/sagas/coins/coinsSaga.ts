import { coinsSlice } from '@app/features/coins';
import { put, takeLatest, call, CallEffect, PutEffect } from 'redux-saga/effects';
import { getAllCoins, GetAllCoinsResponse } from '@services';
import { AnyAction } from '@reduxjs/toolkit';

function* fetchCoins(): Generator<CallEffect<GetAllCoinsResponse> | PutEffect<AnyAction>, void, GetAllCoinsResponse> {
  try {
    const coins = yield call(getAllCoins);
    yield put(coinsSlice.actions.coinsSucceed(coins.data));
  } catch (error) {
    yield put(coinsSlice.actions.coinsFailed(`${error}`));
  }
}

function* coinsSaga() {
  yield takeLatest(coinsSlice.actions.coinsRequest.type, fetchCoins);
}

export default coinsSaga;
