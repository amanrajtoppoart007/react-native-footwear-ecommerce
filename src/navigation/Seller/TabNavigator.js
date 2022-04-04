import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import TabBar from '../../components/Seller/TabBar';

import Home from '../../screens/Seller/Home';
import Create from '../../screens/Seller/Product/Create';
import OrderList from '../../screens/Seller/OrderList';

import RequestList from '../../screens/Seller/Requests/RequestList';
import BuyProductList from '../../screens/Seller/Buy/BuyProductList';

function TabNavigator() {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="RequestList"
        component={RequestList}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Create"
        component={Create}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="OrderList"
        component={OrderList}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="BuyProductList"
        component={BuyProductList}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
