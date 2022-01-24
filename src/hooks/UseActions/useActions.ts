import { useAppDispatch } from '@hooks';
import { bindActionCreators } from 'redux';

import { getAllCoins, getCoinById } from '@app/features/coins/actions';

const useActions = () => {
  const dispatch = useAppDispatch();

  return bindActionCreators({ getAllCoins, getCoinById }, dispatch);
};

export default useActions;
