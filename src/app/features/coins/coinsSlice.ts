import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@app/store';
import type { Coin } from '@models';

interface CoinsState {
  data: Coin[];
  isLoading: boolean;
  isError?: boolean;
  error?: string;
}

const initialState: CoinsState = {
  data: [],
  isLoading: false,
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
  },
});

export const { coinsRequest, coinsSucceed, coinsFailed } = coinsSlice.actions;

export const selectCoinsState = (state: RootState) => state.coins;

export default coinsSlice.reducer;
