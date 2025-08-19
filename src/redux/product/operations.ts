import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchProductsArgs, ProductResponse } from '../../types/product';
import { api } from '../../api/axios';

export const fetchProduct = createAsyncThunk<
  ProductResponse[],
  FetchProductsArgs
>('product/fetchProducts', async ({ page = 1, limit = 4 }, thunkAPI) => {
  try {
    const res = await api.get<ProductResponse[]>(
      `/products?page=${page}&limit=${limit}`
    );
    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
