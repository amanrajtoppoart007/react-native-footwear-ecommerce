import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../../theme/Colors';
import Font from '../../../theme/Font';
import {Icon} from 'react-native-elements';
import StarRating from '../StarRating';

const TopSellerSlider = () => {
  const sellerList = [
    {
      id: 'seller-slider-item-one',
    },
    {
      id: 'seller-slider-item-two',
    },
    {
      id: 'seller-slider-item-three',
    },
    {
      id: 'seller-slider-item-four',
    },
    {
      id: 'seller-slider-item-five',
    },
    {
      id: 'seller-slider-item-six',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <View style={styles.rowCenter}>
        <View>
          <View style={styles.brandSection}>
            <Image
              style={{width: 40, height: 40}}
              source={require('../../../assets/icons/check.png')}
            />
            <Text style={styles.brandName}>RC</Text>
          </View>
          <View />
        </View>
        <View>
          <Text style={styles.shopName}>Right Choice</Text>
          <Text style={styles.shopNameHelper}>Shop</Text>
          <StarRating rating={3} />
          <View style={styles.rowFlexStart}>
            <View>
              <Icon
                type={'feather'}
                name={'map-pin'}
                size={10}
                color={Colors.white}
              />
            </View>
            <View style={{marginHorizontal: 5}}>
              <Text style={styles.locationText}>1.0 Miles</Text>
            </View>
          </View>
          <View style={styles.rowFlexStart}>
            <View>
              <Image
                style={{width: 9, height: 9}}
                source={require('../../../assets/icons/category.png')}
              />
            </View>
            <View style={{marginHorizontal: 5}}>
              <Text style={styles.category}>Casual Shoes</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
  return (
    <>
      {sellerList && (
        <View>
          <FlatList
            style={{width: wp('95%'), height: hp('25%')}}
            showsHorizontalScrollIndicator={false}
            initialNumToRender={1}
            horizontal={true}
            keyExtractor={item => item?.id?.toString()}
            data={sellerList}
            renderItem={renderItem}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rowFlexStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  card: {
    width: wp('95%'),
    height: hp('25%'),
    backgroundColor: Colors.dirtBrown,
    borderRadius: 10,
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 20,
    justifyContent: 'center',
  },
  brandName: {
    fontFamily: Font.PoppinsBold,
    color: Colors.white,
    fontSize: 55,
  },
  brandSection: {
    width: 150,
    height: 120,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 22,
  },
  shopName: {
    fontFamily: Font.PoppinsMedium,
    color: Colors.white,
    fontSize: 20,
  },
  shopNameHelper: {
    fontFamily: Font.PoppinsRegular,
    color: Colors.white,
    fontSize: 17,
  },
  locationText: {
    fontFamily: Font.PoppinsMedium,
    fontSize: 12,
    color: Colors.white,
  },
  category: {
    fontFamily: Font.PoppinsMedium,
    fontSize: 12,
    color: Colors.white,
  },
});

export default TopSellerSlider;
