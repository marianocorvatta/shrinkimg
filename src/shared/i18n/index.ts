import enStrings from './en';
import esStrings from './es';

export type TranslationKey = keyof typeof enStrings;
export type TranslationStrings = Record<TranslationKey, string>;
export type Locale = 'en' | 'es';

export const supportedLocales: Locale[] = ['en', 'es'];

let currentLocale: Locale = 'en';
let currentStrings: TranslationStrings = enStrings as TranslationStrings;

const stringsMap: Record<Locale, TranslationStrings> = {
  en: enStrings as TranslationStrings,
  es: esStrings as TranslationStrings,
};

export function getStrings(locale: Locale): TranslationStrings {
  return stringsMap[locale];
}

export function initI18n(locale: Locale, strings?: TranslationStrings): void {
  currentLocale = locale;
  currentStrings = strings || stringsMap[locale];
}

export function t(key: TranslationKey): string {
  return currentStrings[key] || (enStrings as TranslationStrings)[key] || key;
}

export function getLocale(): Locale {
  return currentLocale;
}
