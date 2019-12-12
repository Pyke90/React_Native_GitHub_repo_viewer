import React from 'react';
import Routes from './app/config/Routes.js';
import { Provider } from 'react-redux';
import Store from './app/redux/Store.js';

export default function App() {
  return(
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
}