import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import WishList from '../screens/WishList';
import Search from '../screens/Search';
import OrderList from '../screens/OrderList';
import {Icon} from 'react-native-elements';
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        tabBarShowLabel={false}
        options={{
          headerShown: false,
          title: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => (
            <Icon name={'home'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          title: 'Search',
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => (
            <Icon name={'search'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="WishList"
        component={WishList}
        options={{
          headerShown: false,
          title: 'WishList',
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              type={'font-awesome'}
              name={'heart-o'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="OrderList"
        component={OrderList}
        options={{
          headerShown: false,
          title: 'Orders',
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              type={'octicon'}
              name={'checklist'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              type={'font-awesome'}
              name={'user-o'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
