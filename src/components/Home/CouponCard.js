import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
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
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <View>
            <View style={styles.rowSection}>
              <View style={{marginHorizontal: 5}}>
                <View style={styles.rectangle}>
                  <Image
                    style={{width: 100, height: 100}}
                    source={require('../../assets/images/shoes/shoe-img-one.png')}
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
                <Text
                  style={{
                    fontFamily: Font.RobotoBold,
                    color: Colors.white,
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  Use Coupon Code
                </Text>
              </View>
              <View style={{marginVertical: 4}}>
                <View style={styles.couponButton}>
                  <Text style={styles.couponButtonText}>NIKE123</Text>
                </View>
              </View>
              <View style={{marginVertical: 4}}>
                <Text
                  style={{
                    fontFamily: Font.RobotoBold,
                    color: Colors.white,
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  50% OFF
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: wp('95%'),
    height: hp('25%'),
    backgroundColor: Colors.peru,
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
    height: 80,
    borderWidth: 2,
    borderColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandName: {
    fontFamily: Font.RobotoBold,
    color: Colors.white,
    fontSize: 25,
    fontWeight: 'bold',
  },
  text: {
    fontFamily: Font.RobotoBold,
    color: Colors.white,
    fontSize: 15,
    fontWeight: 'bold',
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
    fontFamily: Font.RobotoBold,
    color: Colors.white,
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default CouponCard;
