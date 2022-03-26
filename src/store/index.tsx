import React, { ReactNode } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import rootReducer from './features';

const { NODE_ENV } = process.env;

const store = configureStore({
  reducer: rootReducer,

  devTools: NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function StoreProvider(props: { children: ReactNode }) {
  return <Provider store={store} {...props} />;
}
