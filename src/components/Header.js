import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Colors from '../theme/Colors';
import Font from '../theme/Font';
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
        backgroundColor={Colors.primary}
        StatusBarStyle={'light-content'}
      />
      <View style={styles.card}>
        <View style={styles.rowFlexStart}>
          <View>
            <Icon
              onPress={() => navigation.toggleDrawer()}
              name={'menu'}
              type={'ionicon'}
              size={35}
              color={Colors.black}
            />
          </View>
          <View>
            <Text style={styles.brand}>Shüe</Text>
          </View>
          <View>
            <CartBadgedIcon
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
  },
  rowFlexStart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brand: {
    fontFamily: Font.PoppinsMedium,
    fontSize: 35,
    color: Colors.black,
  },
});

export default Header;
