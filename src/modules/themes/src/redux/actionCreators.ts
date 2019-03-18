import { IThemeActionCreators, IThemeActionTypes } from '../../index';

export const actionTypes: IThemeActionTypes = {
  TOGGLE_THEME: 'THEME:TOGGLE_THEME',
};

const actionCreators: IThemeActionCreators = {
  toggleTheme: () => ({
    type: actionTypes.TOGGLE_THEME,
  }),
};

export default actionCreators;
