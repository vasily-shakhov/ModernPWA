import { Container } from 'inversify';
import { ReducersMapObject } from 'redux';

import { TYPES } from './TYPES';
import { IComponents } from 'src/ioc/interfaces';

// implementations
import themes from 'src/modules/themes/src/client';
import { IThemeActionCreators } from 'src/modules/themes';
import auth from 'src/modules/auth/src/client';
import chat from 'src/modules/chat/src/client';

const reducers = {
  theme: themes.reducer,
};

export type IAppActionCreators = IThemeActionCreators;

const actionCreators = {
  ...themes.actionCreators,
};

const appComponents: IComponents = {
  auth: auth.components,
  chat: chat.components,
};

// bindings
const clientContainer = new Container();

clientContainer.bind<ReducersMapObject>(TYPES.AppReducers).toConstantValue(reducers);
clientContainer.bind<IAppActionCreators>(TYPES.ActionCreators).toConstantValue(actionCreators);
clientContainer.bind<IComponents>(TYPES.Components).toConstantValue(appComponents);

// entities to get typed bindings
export const entities = {
  get appReducers() {
    return clientContainer.get<ReducersMapObject>(TYPES.AppReducers);
  },
  get appActionCreators() {
    return clientContainer.get<IAppActionCreators>(TYPES.ActionCreators);
  },
  get components() {
    return clientContainer.get<IComponents>(TYPES.Components);
  },
};

export default clientContainer;
