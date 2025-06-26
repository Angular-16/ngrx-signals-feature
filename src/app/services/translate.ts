import { ENGLISH_DICTIONARY, SPANISH_DICTIONARY } from '../data/dictionaries';

export function translate(key: string, language: string): string {
  return language.toLowerCase() === 'sp'
    ? SPANISH_DICTIONARY[key]
    : ENGLISH_DICTIONARY[key];
}
