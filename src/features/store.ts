import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

const reducer = combineReducers(reducers);

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
