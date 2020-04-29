import 'react-native-gesture-handler';
import React, { useRef } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import axios from 'axios';

import storeConfig from '#/store/storeConfig';

import RootStackNavigator from '#/navigation/RootStackNavigator';

import { API_URL } from '#/config/api';
import COLORS from '#/utils/colors';

axios.defaults.baseURL = API_URL;

const App = () => {
  const store = storeConfig();
  const statusBarRef = useRef();

  return (
    <Provider store={store}>
      <StatusBar
        ref={statusBarRef}
        backgroundColor={COLORS.primary}
        barStyle='light-content'
      />
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
