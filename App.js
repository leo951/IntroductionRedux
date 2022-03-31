import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './src/configs/routes';

import {Provider} from 'react-redux';
import {store} from './src/configs/routes/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
