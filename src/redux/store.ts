import { configureStore } from '@reduxjs/toolkit';
import bannerReducer from './banner/bannerSlice';

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    // auth: authReducer — додамо пізніше
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
