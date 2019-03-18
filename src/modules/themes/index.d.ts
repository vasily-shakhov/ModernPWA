import { ActionCreator, AnyAction } from 'redux';

export interface ITheme {
  backgroundColor: string;
  textColor: string;
}

export interface IProvidedThemes {
  whiteTheme: ITheme;
  blackTheme: ITheme;
}

export interface IThemeReduxState {
  selectedTheme: ITheme;
}

export interface IThemeActionTypes {
  TOGGLE_THEME: string;
}

export interface IThemeActionCreators {
  toggleTheme: ActionCreator<AnyAction>;
}
