import { createAsyncThunk } from '@reduxjs/toolkit';
import { BannerResponse } from '../../types/heroBanner';
import { api } from '../../api/axios';

export const fetchBanners = createAsyncThunk<BannerResponse[]>(
  'banner/fetchBanners',
  async (_, thunkAPI) => {
    try {
      const res = await api.get<BannerResponse[]>('/banners');
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
