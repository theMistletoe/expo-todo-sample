import React from 'react';
import Home from './pages/Home';
import Detail from './pages/Detail';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// (1) StackNavigatorを生成する
const Stack = createStackNavigator();

export default function App() {

  return (
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
  );
}
