import React from 'react';
import Routes from './app/config/Navigator.js';
import { Provider } from 'react-redux';
import Store from './app/redux/Store.js';

export default function App() {
  return(
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
}