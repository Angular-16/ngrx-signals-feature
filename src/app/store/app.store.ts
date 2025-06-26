import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { initialState } from './app.slice';
import { inject } from '@angular/core';
import { DICTIONARIES_TOKEN } from '../tokens/dictionaries.token';
import { changeLanguageUpdater } from './app.updater';

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => {
    const dictionaries = inject(DICTIONARIES_TOKEN);
    const languages = Object.keys(dictionaries);

    return {
      changeLanguage: () => patchState(store, changeLanguageUpdater(languages)),
    };
  }),
  withHooks((store) => ({
    // Инициализируем хранилище через Injection Token
    onInit: () => {
      const dictionaries = inject(DICTIONARIES_TOKEN);
      const languages = Object.keys(dictionaries);

      patchState(store, {
        selectedLanguage: languages[0],
        possibleLanguages: languages,
      });
    },
  }))
);
