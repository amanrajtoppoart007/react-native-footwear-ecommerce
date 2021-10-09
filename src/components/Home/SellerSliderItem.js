import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../theme/Colors';
import Font from '../../theme/Font';
import StarRating from '../StarRating';

const SellerSliderItem = props => {
  const {item} = props;
  return (
    <ImageBackground
      imageStyle={{borderRadius: 5}}
      style={styles.bgImage}
      source={require('../../assets/images/temp/bgImage.png')}>
      <View style={[styles.card, {backgroundColor: item?.backgroundColor}]}>
        <View style={styles.rowCard}>
          <View style={{width: '30%', marginRight: 5}}>
            <Text style={styles.brandName}>AS</Text>
            <Image
              style={{width: 44, height: 38.79}}
              source={require('../../assets/icons/shoe-icon.png')}
            />
          </View>
          <View style={{width: '70%', marginLeft: 5}}>
            <View>
              <Text style={styles.shopName}>Awesome</Text>
              <Text style={styles.shopHelperText}>Shop</Text>
            </View>
            <View>
              <View>
                <StarRating rating={3} />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginVertical: 5,
              }}>
              <View>
                <Icon
                  type={'feather'}
                  name={'map-pin'}
                  size={12}
                  color={Colors.white}
                />
              </View>
              <View style={{marginHorizontal: 8}}>
                <Text style={styles.detail}>1.0 Miles</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <View>
                <Image
                  style={{width: 8, height: 8}}
                  source={require('../../assets/icons/category.png')}
                />
              </View>
              <View style={{marginHorizontal: 8}}>
                <Text style={styles.detail}>Casual Shoes</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    width: wp('48%'),
    height: hp('20%'),
    marginHorizontal: 2,
  },
  card: {
    width: wp('48%'),
    height: hp('20%'),
    backgroundColor: Colors.peru,
    borderRadius: 5,
    padding: 20,
  },
  rowCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  brandName: {
    fontFamily: Font.PoppinsMedium,
    color: Colors.white,
    fontSize: 35,
  },
  shopName: {
    fontFamily: Font.PoppinsMedium,
    color: Colors.white,
    fontSize: 15,
  },
  shopHelperText: {
    fontFamily: Font.PoppinsLight,
    color: Colors.white,
    fontSize: 15,
  },
  detail: {
    fontFamily: Font.PoppinsRegular,
    color: Colors.white,
    fontSize: 12,
  },
});

export default SellerSliderItem;
