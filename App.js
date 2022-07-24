import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import Routes from './app/src/redux/Routes';
import store from './app/src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
