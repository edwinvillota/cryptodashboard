import { useAppDispatch } from '@hooks';
import { bindActionCreators } from 'redux';

import { coinsRequest } from '@app/features/coins';

const useActions = () => {
  const dispatch = useAppDispatch();

  return bindActionCreators({ coinsRequest }, dispatch);
};

export default useActions;
