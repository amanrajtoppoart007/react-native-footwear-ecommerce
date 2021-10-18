import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Colors from '../theme/Colors';
import Font from '../theme/Font';
import {Icon, withBadge} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
function NavBar({pageTitle}) {
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
            <Icon
              onPress={() => navigation.goBack()}
              name={'ios-arrow-back-outline'}
              type={'ionicon'}
              size={35}
              color={Colors.black}
            />
          </View>
          <View>
            <Text style={styles.brand}>{pageTitle}</Text>
          </View>
          <View>
            <CartBadgedIcon
              onPress={() => navigation.navigate('Cart')}
              name={'cart-outline'}
              type={'ionicon'}
              size={35}
              color={Colors.black}
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: wp('100%'),
    height: 50,
    backgroundColor: Colors.background,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  rowFlexStart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brand: {
    fontFamily: Font.PoppinsMedium,
    fontSize: 25,
    color: Colors.black,
  },
});

export default NavBar;
