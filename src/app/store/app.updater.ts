import { PartialStateUpdater } from '@ngrx/signals';
import { AppSlice } from './app.slice';

export function changeLanguageUpdater(
  languages: string[]
): PartialStateUpdater<AppSlice> {
  return (state) => {
    const indexOfCurrentLanguage =
      languages.indexOf(state.selectedLanguage) ?? -1;
    const indexOfNextLanguage = (indexOfCurrentLanguage + 1) % languages.length;
    const nextLanguage = languages[indexOfNextLanguage];

    return {
      ...state,
      selectedLanguage: nextLanguage,
    };
  };
}
