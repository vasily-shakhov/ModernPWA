import { AnyAction } from 'redux';
import { IThemeReduxState } from 'src/modules/themes';
import themes from '../themes';
import { actionTypes } from './actionCreators';

const INITIAL_STATE: IThemeReduxState = {
  selectedTheme: themes.whiteTheme,
};

const reducers = {
  [actionTypes.TOGGLE_THEME]: (state: IThemeReduxState) => {
    const newTheme = state.selectedTheme === themes.whiteTheme ? themes.blackTheme : themes.whiteTheme;

    return {
      ...state,
      selectedTheme: newTheme,
    };
  },
};

export default (state = INITIAL_STATE, action: AnyAction): IThemeReduxState => {
  if (reducers.hasOwnProperty(action.type)) {
    return reducers[action.type](state);
  }

  return state;
};
