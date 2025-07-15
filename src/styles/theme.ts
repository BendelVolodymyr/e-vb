import { BREAKPOINTS } from '../constants/devices';

export const theme = {
  light: {
    colors: {
      background_head: '#1E212C',
      background: '#FFFFFF',
      text: '#2F2F2F',
      accent: '#407BFF',
      border: '#DCDCDC',
      muted: '#F5F5F5',
      error: '#EF5050',
      link: '#5082F2',

      secondary: {
        blue: '#ECF2FF',
        red: '#EF5050',
        lightBlue: '#9EBBFF',
        orange: '#FF9D43',
        softBlue: '#D7E3FF',
        sky: '#C6D7FF',
        gray: '#F5F5F5',
      },
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    transitions: {
      fast: 'all 50ms ease-in-out',
      normal: 'all 150ms ease-in-out',
      slow: 'all 250ms ease-in-out',
    },
    breakpoints: {
      mobile: BREAKPOINTS.MOB,
      tablet: BREAKPOINTS.TAB,
      desktop: BREAKPOINTS.DESK,
    },
  },

  dark: {
    colors: {
      background_head: '#1E212C',
      background: '#1C1D26',
      text: '#D5DFF5',
      accent: '#5082F2',
      border: '#2A2D3A',
      muted: '#1B1B21',
      error: '#F16161',
      link: '#7CA6FF',

      secondary: {
        blue: '#1F2438',
        red: '#F16161',
        deepBlue: '#2F3875',
        orange: '#FFA756',
        darkerBlue: '#2A3052',
        navy: '#272E59',
        darkGray: '#1B1B21',
      },
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    transitions: {
      fast: 'all 50ms ease-in-out',
      normal: 'all 150ms ease-in-out',
      slow: 'all 250ms ease-in-out',
    },
    breakpoints: {
      mobile: BREAKPOINTS.MOB,
      tablet: BREAKPOINTS.TAB,
      desktop: BREAKPOINTS.DESK,
    },
  },
};

export type ThemeType = typeof theme.light;
