import { createStore, applyMiddleware } from 'redux';
import Reducers from './reducers';
import thunk from 'redux-thunk';

let createStoreWithMiddleware = applyMiddleware(
  thunk,
)(createStore);
const store = createStoreWithMiddleware(Reducers);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
