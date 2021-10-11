import thunkMiddleware from 'redux-thunk';

import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore as createReduxStore,
  Store,
} from 'redux';

import connectSettings, { connectSettingsReducerName } from '@/store/modules/connect-settings';
import builds, { buildsReducerName } from '@/store/modules/builds';

const reducers = {
  [buildsReducerName]: builds,
  [connectSettingsReducerName]: connectSettings,
};

const combinedReducers = combineReducers(reducers);

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStore = (): Store => createReduxStore(
  combinedReducers,
  {},
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

export type RootState = ReturnType<typeof combinedReducers>

export default createStore;
