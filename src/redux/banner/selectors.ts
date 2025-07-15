import { RootState } from '../store';

export const selectBanners = (state: RootState) => state.banner.items;
export const selectIsLoading = (state: RootState) => state.banner.loading;
export const selectError = (state: RootState) => state.banner.error;
