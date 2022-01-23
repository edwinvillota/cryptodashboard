import type { GetAllCoinsResponse } from './getAllCoins.types';

async function getAllCoins(): Promise<GetAllCoinsResponse> {
  try {
    const response = await fetch('https://api.coinlore.net/api/tickers/');
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Error fetching all coins');
    }
  } catch (error) {
    throw error;
  }
}

export default getAllCoins;
