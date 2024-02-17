import { configureStore } from '@reduxjs/toolkit';
import { Reducer, combineReducers } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { persistStore, persistReducer } from 'redux-persist';

import cryptoSlice from './slices/cryptoSlice';

const reducer = combineReducers({
  crypto: cryptoSlice,
});

const makeConfiguredStore = (reducer: Reducer) =>
  configureStore({
    reducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

const makeStore = () => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return makeConfiguredStore(reducer);
  } else {
    const storage = require('redux-persist/lib/storage').default;

    const persistConfig = {
      key: 'root',
      whitelist: ['crypto'],
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, reducer);
    const store = makeConfiguredStore(persistedReducer) as any;

    store.__persistor = persistStore(store);

    return store;
  }
};

export const wrapper = createWrapper(makeStore, { debug: true });
export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
