import { createAction } from '@reduxjs/toolkit';
import { GetCoinByIdRequest } from '@services';

export const getAllCoins = createAction('getAllCoins');
export const getCoinById = createAction<GetCoinByIdRequest>('getCoinById');
