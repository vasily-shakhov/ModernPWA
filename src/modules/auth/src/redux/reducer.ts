import { AnyAction } from 'redux';
import { IAuthReduxState } from '../../index';
import { actionTypes } from './actionCreators';

const INITIAL_STATE: IAuthReduxState = {
  userName: '',
  accessToken: '',
};

const reducers = {
  [actionTypes.AUTH_LOGIN_SUCCESS]: (state: IAuthReduxState, action: AnyAction) => {
    return {
      ...state,
      ...action.data,
    };
  },
};

export default (state = INITIAL_STATE, action: AnyAction): IAuthReduxState => {
  if (reducers.hasOwnProperty(action.type)) {
    return reducers[action.type](state, action);
  }

  return state;
};
