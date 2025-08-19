export interface FetchProductsArgs {
  page: number;
  limit: number;
}

export interface Seo {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  metaH1: string;
}

export interface Variants {
  _id: string;
  sku: string;
  color: string;
  size: string;
  stock: number;
}

export interface Product {
  _id: string;
  seo: Seo;
  weeklySale: boolean;
  saleStart: string;
  saleEnd: string;
  name: string;
  description: string;
  price: number;
  oldPrice: number | null;
  finalPrice: number;
  category: string;
  sku: string;
  discount: number;
  brand: string;
  images: string[];
  variants: Variants[];
  stock: number;
  availability: 'in_stock' | 'out_of_stock' | 'preorder';
  adminName: string;
  role: string;
}

export interface ProductState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

export const initialStateProduct: ProductState = {
  items: [],
  loading: false,
  error: null,
};

export type ProductResponse = Product;
