import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../theme/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Font from '../../theme/Font';
import {Icon} from 'react-native-elements';

function Banner() {
  return (
    <LinearGradient
      start={{x: 0, y: 0.6}}
      end={{x: 0, y: 1}}
      locations={[0, 0]}
      colors={['#D5A986', '#535D5F']}
      style={styles.canvas}>
      <View style={styles.bannerHeader}>
        <View>
          <Text style={styles.helperTextFirst}>Exclusive</Text>
          <Text style={styles.helperTextSecond}>Footwear</Text>
          <Text style={styles.helperTextThird}>Limited Edition</Text>
        </View>
        <View>
          <View style={styles.rectangle}>
            <Image
              style={styles.image}
              source={require('../../assets/images/banner/banner-shoe.png')}
            />
          </View>
        </View>
      </View>
      <View style={[styles.center, {marginVertical: 5}]}>
        <View style={styles.brandWrapper}>
          <Text style={styles.brandTitle}>AS</Text>
        </View>
      </View>
      <View>
        <View style={styles.rowCenter}>
          <View>
            <Text style={styles.shopName}>Awesome Shop</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={[styles.shopName, {marginHorizontal: 5}]}>4.0</Text>
            <Icon
              type={'font-awesome'}
              name={'star-o'}
              size={12}
              color={Colors.white}
              style={styles.shopName}
            />
          </View>
        </View>
        <View style={styles.rowCenter}>
          <View>
            <Icon
              type={'feather'}
              name={'map-pin'}
              size={12}
              color={Colors.white}
            />
          </View>
          <View style={{marginHorizontal: 5}}>
            <Text style={styles.location}>1.0 Miles</Text>
          </View>
        </View>
        <View style={styles.rowCenter}>
          <View>
            <Image
              style={{width: 12, height: 12}}
              source={require('../../assets/icons/certification-badge.png')}
            />
          </View>
          <View style={{marginHorizontal: 5}}>
            <Text style={styles.location}>Certified Reseller</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  canvas: {
    width: wp('100%'),
    height: hp('45%'),
    backgroundColor: Colors.transparent,
  },
  bannerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 20,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  helperTextFirst: {
    fontFamily: Font.PoppinsMedium,
    fontSize: 17,
    color: Colors.white,
  },
  helperTextSecond: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 30,
    color: Colors.white,
  },
  helperTextThird: {
    fontFamily: Font.PoppinsLight,
    fontSize: 15,
    color: Colors.white,
  },
  image: {
    width: 160,
    height: 98,
  },
  rectangle: {
    width: 142,
    height: 101,
    borderWidth: 2,
    borderColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandWrapper: {
    marginTop: hp('45%') * 0.09,
    width: 67,
    height: 61,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandTitle: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 35,
    color: Colors.black,
  },
  shopName: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 17,
    color: Colors.white,
  },
  location: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 15,
    color: Colors.white,
  },
  authenticity: {
    fontFamily: Font.PoppinsMedium,
    fontSize: 15,
    color: Colors.white,
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 5,
  },
});

export default Banner;
