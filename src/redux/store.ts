import { configureStore } from '@reduxjs/toolkit';
import bannerReducer from './banner/bannerSlice';
import productReducer from './product/productSlice';

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    product: productReducer,
    // auth: authReducer — додамо пізніше
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
