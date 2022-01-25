import { useAppDispatch } from '@hooks';
import { bindActionCreators } from 'redux';

import { getAllCoins, getCoinById } from '@app/features/coins/actions';
import { setCoinsSearchKey } from '@app/features/coins';

const useActions = () => {
  const dispatch = useAppDispatch();

  return bindActionCreators({ getAllCoins, getCoinById, setCoinsSearchKey }, dispatch);
};

export default useActions;
