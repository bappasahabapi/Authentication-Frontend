/* eslint-disable @typescript-eslint/no-unused-vars */
import { baseApi } from './api/baseApi'
import storage from 'redux-persist/lib/storage'
import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import { persistStore, persistReducer } from 'redux-persist'
import {

  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


const persistConfig = {
  key: 'root',
  storage,
};



const persistedReducer = persistReducer(persistConfig, authSlice.reducer)

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]:baseApi.reducer,
    // auth:authSlice.reducer
    auth:persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor =persistStore(store)
