import { createSlice } from '@reduxjs/toolkit';
import { fetchBanners } from './operations';
import { initialStateBanner } from '../../types/heroBanner';

const bannerSlice = createSlice({
  name: 'banner',
  initialState: initialStateBanner,
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
