import { createSlice } from '@reduxjs/toolkit';
import { fetchBanners } from './operations';

export interface Banner {
  _id: string;
  title: {
    ua: string;
    en: string;
    cz: string;
  };
  description: {
    ua: string;
    en: string;
    cz: string;
  };
  urlImg: string;
  link: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  displayOrder: number;
  type: string;
}

interface BannerState {
  items: Banner[];
  loading: boolean;
  error: string | null;
}

const initialState: BannerState = {
  items: [],
  loading: false,
  error: null,
};

const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchBanners.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBanners.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchBanners.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ?? 'Помилка при завантаженні банерів';
      });
  },
});

export default bannerSlice.reducer;
