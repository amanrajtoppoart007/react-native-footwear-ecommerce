import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SideBar from '../components/SideBar';
import HomeNavigator from './HomeNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <SideBar {...props} />}>
      <Drawer.Screen name="HomeSection" component={HomeNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
