import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { entities } from 'src/ioc/client';

const appReducers = entities.appReducers;

export default () => {
  const history = createHistory();
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    combineReducers({
      router: connectRouter(history),
      ...appReducers,
    }),
    {},
    composeEnhancers(applyMiddleware(routerMiddleware(history)))
  );

  return { store, history };
};
