import { combineReducers } from 'redux';
import app from './app';
import wallet from './wallet';

export default combineReducers({
  app,
  wallet,
});
