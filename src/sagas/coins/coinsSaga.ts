import { coinsSlice } from '@app/features/coins';
import { put, takeLatest, call, CallEffect, PutEffect } from 'redux-saga/effects';
import { getAllCoins, GetAllCoinsResponse, getCoinById, GetCoinByIdResponse, GetCoinByIdRequest } from '@services';
import { AnyAction } from '@reduxjs/toolkit';
import * as actions from '@app/features/coins/actions';

function* fetchCoins(): Generator<CallEffect<GetAllCoinsResponse> | PutEffect<AnyAction>, void, GetAllCoinsResponse> {
  try {
    yield put(coinsSlice.actions.coinsRequest());
    const coins = yield call(getAllCoins);
    yield put(coinsSlice.actions.coinsSucceed(coins.data));
  } catch (error) {
    yield put(coinsSlice.actions.coinsFailed(`${error}`));
  }
}

function* fetchCoinById(
  action: ReturnType<typeof actions.getCoinById>,
): Generator<CallEffect<GetCoinByIdResponse> | PutEffect<AnyAction>, void, GetCoinByIdResponse> {
  try {
    yield put(coinsSlice.actions.coinDetailRequest());
    const {
      payload: { id },
    } = action;

    const coin = yield call(getCoinById, { id });
    yield put(coinsSlice.actions.coinDetailSucceed(coin[0]));
  } catch (error) {
    yield put(coinsSlice.actions.coinDetailFailed(`${error}`));
  }
}

function* coinsSaga() {
  yield takeLatest(actions.getAllCoins.type, fetchCoins);
  yield takeLatest(actions.getCoinById.type, fetchCoinById);
}

export default coinsSaga;
