import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@app/store';
import type { Coin } from '@models';

interface CoinsState {
  data: Coin[];
  detail?: Coin;
  isLoading: boolean;
  isError?: boolean;
  error?: string;
}

const initialState: CoinsState = {
  data: [],
  isLoading: true,
};

export const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    coinsRequest: (state) => {
      state.isLoading = true;
      state.isError = undefined;
      state.error = undefined;
    },
    coinsSucceed: (state, action: PayloadAction<Coin[]>) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    coinsFailed: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
      state.data = [];
    },
    coinDetailRequest: (state) => {
      state.isError = undefined;
      state.error = undefined;
      state.detail = undefined;
    },
    coinDetailSucceed: (state, action: PayloadAction<Coin>) => {
      state.isLoading = false;
      state.detail = action.payload;
    },
    coinDetailFailed: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
      state.detail = undefined;
    },
  },
});

export const { coinsRequest, coinsSucceed, coinsFailed, coinDetailRequest, coinDetailSucceed, coinDetailFailed } =
  coinsSlice.actions;

export const selectCoinsState = (state: RootState) => state.coins;

export default coinsSlice.reducer;
