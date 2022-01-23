import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { coinsSlice } from '@app/features';
import { rootSaga } from '@sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    coins: coinsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
