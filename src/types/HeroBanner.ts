export type TLanguage = 'uk' | 'en' | 'cs';

export interface BannerWrapperProps {
  $bgUrl: string;
}

export interface Banner {
  _id: string;
  title: {
    uk: string;
    en: string;
    cs: string;
  };
  description: {
    uk: string;
    en: string;
    cs: string;
  };
  urlImg: string;
  link: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  displayOrder: number;
  type: string;
}

export interface BannerState {
  items: Banner[];
  loading: boolean;
  error: string | null;
}

export const initialStateBanner: BannerState = {
  items: [],
  loading: false,
  error: null,
};

export type BannerResponse = Banner;
