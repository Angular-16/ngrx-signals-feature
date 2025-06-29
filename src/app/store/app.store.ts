import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { initialState } from './app.slice';
import { computed, inject } from '@angular/core';
import { DICTIONARIES_TOKEN } from '../tokens/dictionaries.token';
import { changeLanguageUpdater, resetLanguagesUpdater } from './app.updater';
import { getDictionary } from './app.helper';

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withProps((_) => {
    const _dictionaries = inject(DICTIONARIES_TOKEN);
    const _languages = Object.keys(_dictionaries);

    return {
      _dictionaries,
      _languages,
    };
  }),
  withComputed((store) => ({
    selectedDictionary: computed(() =>
      getDictionary(store.selectedLanguage(), store._dictionaries)
    ),
  })),
  withMethods((store) => ({
    changeLanguage: () =>
      patchState(store, changeLanguageUpdater(store._languages)),
    _resetLanguages: () =>
      patchState(store, resetLanguagesUpdater(store._languages)),
  })),
  withHooks((store) => ({
    // Инициализируем хранилище через Injection Token
    onInit: () => {
      store._resetLanguages();
    },
  }))
);
