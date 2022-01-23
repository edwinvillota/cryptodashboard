import { Coin } from '@models';

export type GetAllCoinsResponse = {
  data: Coin[];
  info: {
    coins_num: number;
    time: number;
  };
};
