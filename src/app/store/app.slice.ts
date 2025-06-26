export interface AppSlice {
  readonly selectedLanguage: string;
  readonly possibleLanguages: string[];
}

export const initialState: AppSlice = {
  selectedLanguage: '',
  possibleLanguages: [],
};
