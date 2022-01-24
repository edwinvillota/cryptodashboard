import { Coin } from '@models';

export type GetCoinByIdResponse = Coin[];
export type GetCoinByIdRequest = {
  id: string;
};
