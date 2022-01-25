import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@app/store';
import type { Coin } from '@models';

interface CoinsState {
  data: Coin[];
  searchKey?: string;
  searchProps: Array<keyof Coin>;
  filteredData: Coin[];
  detail?: Coin;
  isLoading: boolean;
  isError?: boolean;
  error?: string;
}

const initialState: CoinsState = {
  data: [],
  searchProps: ['name', 'symbol'],
  filteredData: [],
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
    setCoinsSearchKey: (state, action: PayloadAction<string>) => {
      state.searchKey = action.payload;

      const regExp = new RegExp(`(${action.payload})`, 'gmi');

      state.filteredData = state.data.filter((coin) => {
        for (let prop of state.searchProps) {
          if (regExp.test(`${coin[prop]}`)) {
            return coin;
          }
        }
      });
    },
  },
});

export const {
  coinsRequest,
  coinsSucceed,
  coinsFailed,
  coinDetailRequest,
  coinDetailSucceed,
  coinDetailFailed,
  setCoinsSearchKey,
} = coinsSlice.actions;

export const selectCoinsState = (state: RootState) => state.coins;

export default coinsSlice.reducer;
