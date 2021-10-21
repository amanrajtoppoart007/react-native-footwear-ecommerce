import React from 'react';
import Login from '../screens/Login';
import Register from '../screens/Register';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={'Login'}
      component={Login}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={'Register'}
      component={Register}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
