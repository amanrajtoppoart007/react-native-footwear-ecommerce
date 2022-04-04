import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Colors from '../../theme/Colors';
import Header from '../../components/User/Header';
import Font from '../../theme/Font';
import {ListItem, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {setAuthUser} from '../../slices/Auth.slice';
import {useDispatch} from 'react-redux';
import {removeToken, setToken} from '../../services/storage';

function Settings() {
  const dispatch = useDispatch();
  const menus = [
    {
      key: 'menu-item-one',
      title: 'My Cart',
      icon: 'shopping-cart',
      iconType: 'entypo',
      route: 'Cart',
    },
    {
      key: 'menu-item-five',
      title: 'Log Out',
      icon: 'logout-variant',
      iconType: 'material-community',
      route: 'LogOut',
    },
  ];

  const navigation = useNavigation();

  const logout = async () => {
    dispatch(setAuthUser(null));
    await removeToken();
  };

  const renderItem = ({item}) => (
    <ListItem
      containerStyle={styles.menuContainerStyle}
      onPress={() =>
        item.route === 'LogOut' ? logout() : navigation.navigate(item.route)
      }
      bottomDivider>
      <Icon
        iconStyle={styles.menuIconStyle}
        containerStyle={styles.menuIconContainerStyle}
        name={item.icon}
        type={item.iconType}
      />
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron style={{color: Colors.black}} />
    </ListItem>
  );

  const keyExtractor = item => item.key.toString();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentWrapper}>
          <View style={styles.content}>
            <View style={styles.profileSection}>
              <View>
                <Image
                  style={styles.image}
                  source={require('../../assets/images/icons/profile.png')}
                />
              </View>
              <View style={{marginHorizontal: 10}}>
                <Text style={styles.name}>Darrel Schmeler</Text>
                <Text style={styles.email}>demouser@gmail.com</Text>
              </View>
            </View>
            <View style={styles.menuSection}>
              <Text style={styles.menu}>Settings</Text>
            </View>
            <View>
              <FlatList
                keyExtractor={keyExtractor}
                data={menus}
                renderItem={renderItem}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
  },
  profileSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  image: {
    width: 70,
    height: 70,
  },
  name: {
    fontFamily: Font.PoppinsBold,
    fontSize: 20,
    color: Colors.black,
  },
  email: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 15,
    color: Colors.grayText,
  },
  menuSection: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(194,193,193,0.58)',
    paddingHorizontal: 20,
    marginVertical: 20,
    justifyContent: 'center',
  },
  menu: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 20,
    color: Colors.black,
  },

  wrapper: {
    margin: 10,
    borderColor: Colors.border,
    borderWidth: 0.5,
    borderRadius: 5,
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainerStyle: {
    height: 'auto',
    backgroundColor: '#F3FDF6',
  },
  menuIconStyle: {
    fontSize: 20,
    color: Colors.primary,
  },
  menuIconContainerStyle: {
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Settings;
