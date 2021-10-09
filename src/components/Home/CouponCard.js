import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import Colors from '../../theme/Colors';
import Font from '../../theme/Font';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

function CouponCard() {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ImageBackground
        style={styles.bgImage}
        imageStyle={{borderRadius: 10}}
        source={require('../../assets/images/temp/bgImage.png')}>
        <View style={styles.card}>
          <View style={styles.cardBody}>
            <View>
              <View style={styles.rowSection}>
                <View style={{marginHorizontal: 5}}>
                  <View style={styles.rectangle}>
                    <Image
                      style={{width: 100, height: 100}}
                      source={require('../../assets/images/shoes/box-shoe.png')}
                    />
                  </View>
                </View>
                <View style={{marginHorizontal: 10}}>
                  <Text style={styles.brandName}>NIKE</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginVertical: 5,
                    }}>
                    <View style={{marginHorizontal: 5}}>
                      <Image
                        style={{width: 15, height: 15}}
                        source={require('../../assets/icons/category.png')}
                      />
                    </View>
                    <View style={{marginHorizontal: 5}}>
                      <Text style={styles.text}>Casual Shoes</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={{marginHorizontal: 5}}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={{marginVertical: 4}}>
                  <Text style={styles.helperText}>Use Coupon Code</Text>
                </View>
                <View style={{marginVertical: 4}}>
                  <View style={styles.couponButton}>
                    <Text style={styles.couponButtonText}>NIKE123</Text>
                  </View>
                </View>
                <View style={{marginVertical: 4}}>
                  <Text style={styles.offerText}>50% OFF</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    width: wp('95%'),
    height: hp('22%'),
    marginHorizontal: 3,
  },
  card: {
    width: wp('95%'),
    height: hp('22%'),
    backgroundColor: 'rgba(225,131,69,0.7)',
    borderRadius: 10,
    padding: 15,
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  rowSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    borderWidth: 1,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    height: '75%',
  },
  rectangle: {
    width: 60,
    height: 75,
    borderWidth: 1.5,
    borderColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandName: {
    fontFamily: Font.PoppinsMedium,
    color: Colors.white,
    fontSize: 30,
  },
  text: {
    fontFamily: Font.PoppinsMedium,
    color: Colors.white,
    fontSize: 10,
  },
  offerText: {
    fontFamily: Font.PoppinsMedium,
    color: Colors.white,
    fontSize: 15,
  },
  helperText: {
    fontFamily: Font.PoppinsMedium,
    color: Colors.white,
    fontSize: 12,
  },
  couponButton: {
    width: 100,
    height: 30,
    borderWidth: 2,
    borderColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  couponButtonText: {
    fontFamily: Font.PoppinsMedium,
    color: Colors.white,
    fontSize: 15,
  },
});

export default CouponCard;
