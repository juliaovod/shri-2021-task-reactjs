import { combineReducers, createStore as createReduxStore, Store } from 'redux';

const createStore = (): Store => {
  const reducers = {};

  const combinedReducers = combineReducers(reducers);

  return createReduxStore(combinedReducers);
};

export default createStore;
