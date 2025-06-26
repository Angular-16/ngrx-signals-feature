import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { initialState } from './app.slice';
import { computed, inject } from '@angular/core';
import { DICTIONARIES_TOKEN } from '../tokens/dictionaries.token';
import { changeLanguageUpdater } from './app.updater';
import { getDictionary } from './app.helper';

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => {
    const dictionaries = inject(DICTIONARIES_TOKEN);

    return {
      selectedDictionary: computed(() =>
        getDictionary(store.selectedLanguage(), dictionaries)
      ),
    };
  }),
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
