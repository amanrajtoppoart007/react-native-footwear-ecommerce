import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import Settings from '../../screens/User/Settings';
import WishList from '../../screens/User/WishList';
import Search from '../../screens/User/Search';
import OrderList from '../../screens/User/OrderList';

import TabBar from '../../components/User/TabBar';
import Home from '../../screens/User/Home';

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
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
