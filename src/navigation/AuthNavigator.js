import React from 'react';
import Login from '../screens/User/Login';
import Register from '../screens/User/Register';
import SellerLogin from '../screens/Seller/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenSettings from './ScreenSettings';
const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      cardOverlayEnabled: true,
      gestureEnabled: true,
      ...ScreenSettings,
    }}>
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
    <Stack.Screen
      name={'SellerLogin'}
      component={SellerLogin}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
