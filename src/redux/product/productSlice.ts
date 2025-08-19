import { createSlice } from '@reduxjs/toolkit';
import { initialStateProduct } from '../../types/product';
import { fetchProduct } from './operations';

const productSlice = createSlice({
  name: 'product',
  initialState: initialStateProduct,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchProduct.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ?? 'Помилка при завантаженні продуктів';
      }),
});

export default productSlice.reducer;
