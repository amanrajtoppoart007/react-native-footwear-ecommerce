import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../theme/Colors';
import Font from '../../theme/Font';

function OfferSliderItem() {
  return (
    <ImageBackground
      style={styles.imageBg}
      imageStyle={{borderRadius: 10}}
      source={require('../../assets/images/temp/bgImage.png')}>
      <View style={styles.offerBanner}>
        <View style={styles.card}>
          <View>
            <View style={styles.rectangle}>
              <Image
                source={require('../../assets/images/shoes/running-shoe.png')}
              />
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={{marginVertical: 5}}>
              <Text style={styles.category}>Casual Shoe</Text>
            </View>
            <View style={{marginVertical: 3}}>
              <Text style={styles.name}>Air Max 2090</Text>
            </View>
            <View style={{marginVertical: 5}}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>30% off</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBg: {
    width: wp('95%'),
    height: hp('25%'),
    marginHorizontal: 3,
  },
  offerBanner: {
    width: wp('95%'),
    height: hp('25%'),
    backgroundColor: 'rgba(225,131,69,0.7)',
    borderRadius: 10,
    padding: 20,
    paddingHorizontal: 35,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rectangle: {
    width: 152,
    height: 108,
    borderWidth: 2,
    borderColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontFamily: Font.PoppinsSemiBold,
    color: Colors.white,
    fontSize: 20,
  },
  button: {
    width: 86,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
  },
  buttonText: {
    fontFamily: Font.PoppinsMedium,
    color: Colors.white,
    fontSize: 13,
  },
  category: {
    fontFamily: Font.PoppinsMedium,
    color: Colors.white,
    fontSize: 15,
  },
});

export default OfferSliderItem;
