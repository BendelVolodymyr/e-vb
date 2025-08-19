import { RootState } from '../store';

export const selectProduct = (state: RootState) => state.product.items;
export const selectIsLoading = (state: RootState) => state.product.loading;
export const selectError = (state: RootState) => state.product.error;
