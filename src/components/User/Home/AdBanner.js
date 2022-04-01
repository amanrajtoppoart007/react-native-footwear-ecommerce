import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../../theme/Colors';
import Font from '../../../theme/Font';

function AdBanner() {
  return (
    <View style={styles.introBanner}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <View style={{marginVertical: 5}}>
            <Text
              style={{
                fontFamily: Font.PoppinsRegular,
                color: Colors.textColor,
                fontSize: 12,
              }}>
              Casual Shoe
            </Text>
          </View>
          <View style={{marginVertical: 3}}>
            <Text
              style={{
                fontFamily: Font.PoppinsMedium,
                color: Colors.white,
                fontSize: 17,
              }}>
              Adidas Shoes
            </Text>
          </View>
          <View style={{marginVertical: 3}}>
            <TouchableOpacity
              style={{
                width: 120,
                height: 35,
                backgroundColor: Colors.textColor,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <Text
                style={{
                  fontFamily: Font.PoppinsMedium,
                  color: Colors.black,
                  fontSize: 10,
                }}>
                Get an E-Locker
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View>
            <Text
              style={{
                fontFamily: Font.PoppinsSemiBold,
                color: Colors.white,
                fontSize: 10,
              }}>
              Upto
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: Font.PoppinsSemiBold,
                color: Colors.white,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              70%
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: Font.PoppinsSemiBold,
                color: Colors.white,
                fontSize: 10,
              }}>
              off
            </Text>
          </View>
        </View>
        <View>
          <Image
            style={{width: 116, height: 58}}
            source={require('../../../assets/images/temp/shoes/shoes.png')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  introBanner: {
    width: wp('95%'),
    height: hp('20%'),
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 15,
  },
  offerBanner: {
    width: wp('95%'),
    height: hp('25%'),
    backgroundColor: Colors.peru,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default AdBanner;
