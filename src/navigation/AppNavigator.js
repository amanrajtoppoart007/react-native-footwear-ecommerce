import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import SideBar from '../components/SideBar';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <SideBar {...props} />}>
      <Drawer.Screen name="HomeSection" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
