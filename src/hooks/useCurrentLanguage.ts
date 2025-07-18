import { useTranslation } from 'react-i18next';

const supportedLanguages = ['uk', 'en', 'cs'] as const;
type SupportedLanguage = (typeof supportedLanguages)[number];

export const useCurrentLanguage = (): SupportedLanguage => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const isSupported = (lang: string): lang is SupportedLanguage =>
    supportedLanguages.includes(lang as SupportedLanguage);

  return isSupported(lang) ? lang : 'cs';
};
