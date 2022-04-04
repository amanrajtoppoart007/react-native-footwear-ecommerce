import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import TabNavigator from './TabNavigator';
const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeStack"
      component={TabNavigator}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default HomeNavigator;
