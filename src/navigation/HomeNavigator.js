import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Seller from '../screens/User/Seller';
import ProductList from '../screens/User/ProductList';
import Product from '../screens/User/Product';
import TabNavigator from './TabNavigator';
import Cart from '../screens/User/Cart';
import OrderList from '../screens/User/OrderList';

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeStack"
      component={TabNavigator}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Seller"
      component={Seller}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="SellerList"
      component={Seller}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="ProductList"
      component={ProductList}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Product"
      component={Product}
      options={{headerShown: false}}
    />
    <Stack.Screen name="Cart" component={Cart} options={{headerShown: false}} />
    <Stack.Screen
      name="OrderList"
      component={OrderList}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default HomeNavigator;
