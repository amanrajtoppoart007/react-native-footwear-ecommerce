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
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="WishList"
        component={WishList}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="OrderList"
        component={OrderList}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
