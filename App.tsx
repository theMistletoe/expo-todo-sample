import React from 'react';
import Home from './pages/Home';
import Detail from './pages/Detail';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import configureStore from './redux/store'
import { Provider } from 'react-redux'
import rootSaga from './redux/Todo/sagas';

// (1) StackNavigatorを生成する
const Stack = createStackNavigator();

const store = configureStore()
store.runSaga(rootSaga)

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* (1) 画面遷移対象のアプリケーションコード */}
        <Stack.Navigator initialRouteName="Home">
          {/* (2) StackNavigator用の画面を定義する */}
          <Stack.Screen
            name="Home"
            component={Home} />
          <Stack.Screen
            name="Detail"
            component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
