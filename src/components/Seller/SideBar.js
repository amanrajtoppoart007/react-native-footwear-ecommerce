import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Pressable,
} from 'react-native';

import {Icon, ListItem} from 'react-native-elements';
import Colors from '../../theme/Colors';
import Font from '../../theme/Font';

const SideBar = props => {
  const [menus] = useState([
    {
      key: 'menu-item-one',
      title: 'Home',
      icon: 'home',
      iconType: 'font-awesome',
      route: 'Home',
    },
    {
      key: 'menu-item-two',
      title: 'Upload Product',
      icon: 'th-list',
      iconType: 'font-awesome',
      route: 'Create',
    },
    {
      key: 'menu-item-three',
      title: 'Order List',
      icon: 'product-hunt',
      iconType: 'font-awesome',
      route: 'OrderList',
    },
  ]);

  const logout = async () => {};

  const renderItem = ({item}) => (
    <ListItem
      containerStyle={styles.menuContainerStyle}
      onPress={() =>
        item.route === 'LogOut'
          ? logout()
          : props.navigation.navigate(item.route)
      }
      bottomDivider>
      <Icon
        iconStyle={styles.menuIconStyle}
        containerStyle={styles.menuIconContainerStyle}
        name={item.icon}
        type={item.iconType}
      />
      <ListItem.Content>
        <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  const keyExtractor = item => item.key.toString();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.card}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.brandSection}>
            <Image
              source={require('../../assets/images/shue-app-logo.png')}
              style={styles.brandImage}
            />
          </View>
          <Pressable onPress={() => props.navigation.closeDrawer()}>
            <Icon
              iconStyle={[styles.menuIconStyle, {color: Colors.primary}]}
              containerStyle={[
                styles.menuIconContainerStyle,
                {backgroundColor: Colors.white},
              ]}
              name={'arrow-back'}
              type={'ionicons'}
            />
          </Pressable>
        </View>
      </View>
      <FlatList
        keyExtractor={keyExtractor}
        data={menus}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menuContainerStyle: {
    height: 60,
    backgroundColor: '#F3FDF6',
  },
  menuIconStyle: {
    fontSize: 20,
    color: Colors.white,
  },
  menuIconContainerStyle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: Colors.secondary,
    height: 200,
    justifyContent: 'center',
    padding: 20,
  },
  brandSection: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandImage: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  title: {
    fontFamily: Font.PoppinsMedium,
    fontSize: 16,
    color: Colors.primary,
  },
});
export default SideBar;
