import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.module.css';
import AppTheme from './AppTheme';
import { Provider } from 'react-redux';
import store from './redux/store';

let root = document.getElementById('root');
let Root = () => (
  <Provider store={store}>
    <AppTheme />
  </Provider>
);

if (root?.hasChildNodes()) {
  hydrate(<Root />, root);
} else {
  render(<Root />, root);
}
