import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../theme/Colors';
import Font from '../../theme/Font';

function OfferSliderItem() {
  return (
    <View style={styles.offerBanner}>
      <View style={styles.card}>
        <View>
          <Image source={require('../../assets/icons/category.png')} />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={{marginVertical: 5}}>
            <Text
              style={{
                fontFamily: Font.RobotoRegular,
                color: Colors.white,
                fontSize: 20,
              }}>
              Casual Shoe
            </Text>
          </View>
          <View style={{marginVertical: 3}}>
            <Text
              style={{
                fontFamily: Font.RobotoBold,
                color: Colors.white,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Air Max 2090
            </Text>
          </View>
          <View style={{marginVertical: 5}}>
            <TouchableOpacity
              style={{
                width: 75,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 2,
                borderColor: Colors.white,
              }}>
              <Text
                style={{
                  fontFamily: Font.RobotoBold,
                  color: Colors.white,
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                30% off
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  offerBanner: {
    width: wp('90%'),
    height: hp('25%'),
    backgroundColor: Colors.peru,
    borderRadius: 10,
    marginHorizontal: 5,
    padding: 20,
    paddingHorizontal: 30,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default OfferSliderItem;
