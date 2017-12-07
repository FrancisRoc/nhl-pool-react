import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Root, { store } from './Root';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import './index.css';

addLocaleData(en);
addLocaleData(fr);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
