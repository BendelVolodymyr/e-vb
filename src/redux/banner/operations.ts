import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Banner } from './bannerSlice';

axios.defaults.baseURL = 'http://localhost:3001/api';

export const fetchBanners = createAsyncThunk<Banner[]>(
  'banner/fetchBanners',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get<Banner[]>('/banners'); // ✅ без /api
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
