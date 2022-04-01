import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../theme/Colors';
import Font from '../../theme/Font';
import {Icon, withBadge} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
function Header() {
  const navigation = useNavigation();
  const badgeOptions = {
    badgeStyle: {backgroundColor: Colors.background},
    textStyle: {color: Colors.primary},
  };
  const CartBadgedIcon = withBadge(0, badgeOptions)(Icon);
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={Colors.black}
        StatusBarStyle={'dark-content'}
      />
      <View style={styles.card}>
        <View style={styles.rowFlexStart}>
          <View>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Icon name={'menu'} type={'material-community-icon'} size={25} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.brand}>Shüe</Text>
          </View>
          <View>
            <Pressable onPress={() => navigation.navigate('Cart')}>
              <CartBadgedIcon
                name={'shopping-cart'}
                type={'font-awesome-5'}
                size={35}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: wp('100%'),
    height: 60,
    backgroundColor: Colors.background,
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },

  rowFlexStart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brand: {
    fontFamily: Font.PoppinsMedium,
    fontSize: 30,
    color: Colors.black,
  },
});

export default Header;
