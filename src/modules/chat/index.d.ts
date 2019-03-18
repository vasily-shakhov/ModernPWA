// import { ActionCreator, AnyAction, Reducer } from 'redux';

/*export interface IAuthReduxState {
  userName: string;
  accessToken: string;
}

export interface IAuthActionTypes {
  AUTH_LOGIN: string;
  AUTH_LOGIN_SUCCESS: string;
  AUTH_LOGIN_ERROR: string;
}

export interface IAuthActionCreators {
  login: ActionCreator<AnyAction>;
}*/

export interface IChatComponents {
  Chat: React.ComponentClass;
}

export interface IChatModule {
  components: IChatComponents;
  /*actionCreators: IAuthActionCreators;
  reducer: Reducer;*/
}
