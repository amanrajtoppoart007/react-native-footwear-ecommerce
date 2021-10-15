import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import WishList from '../screens/WishList';
import Search from '../screens/Search';
import OrderList from '../screens/OrderList';

import TabBar from '../components/TabBar';

function TabNavigator() {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="WishList" component={WishList} />
      <Tab.Screen name="OrderList" component={OrderList} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
