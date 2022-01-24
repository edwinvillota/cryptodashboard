import type { GetCoinByIdResponse, GetCoinByIdRequest } from './getCoinById.types';

async function getCoinById({ id }: GetCoinByIdRequest): Promise<GetCoinByIdResponse> {
  try {
    const response = await fetch(
      `https://api.coinlore.net/api/ticker/?${new URLSearchParams({
        id,
      })}`,
    );
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`Error fetching coin id=${id} data`);
    }
  } catch (error) {
    throw error;
  }
}

export default getCoinById;
