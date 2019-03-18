import { IAuthActionCreators, IAuthActionTypes } from '../../index';

export const actionTypes: IAuthActionTypes = {
  AUTH_LOGIN: 'AUTH: AUTH_LOGIN',
  AUTH_LOGIN_ERROR: 'AUTH: AUTH_LOGIN_ERROR',
  AUTH_LOGIN_SUCCESS: 'AUTH: AUTH_LOGIN_SUCCESS',
};

const actionCreators: IAuthActionCreators = {
  login: (data) => ({
    type: actionTypes.AUTH_LOGIN,
    data,
  }),
};

export default actionCreators;
