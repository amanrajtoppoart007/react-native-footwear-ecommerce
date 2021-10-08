import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../../theme/Colors';
import Font from '../../../theme/Font';
import {Icon, Rating} from 'react-native-elements';

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

  const ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
  };

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <View style={styles.brandSection}>
            <Icon size={40} color={Colors.white} name={'check'} />
            <Text style={styles.brandName}>RC</Text>
          </View>
          <View />
        </View>
        <View>
          <Text style={styles.shopName}>Right Choice Shop</Text>
          <Rating
            imageSize={15}
            tintColor={Colors.dirtBrown}
            onFinishRating={ratingCompleted}
          />
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={{marginHorizontal: 5}}>
              <Icon name={'map'} size={30} color={Colors.white} />
            </View>
            <View style={{marginHorizontal: 5}}>
              <Text
                style={{
                  fontFamily: Font.RobotoBold,
                  fontSize: 15,
                  color: Colors.white,
                }}>
                1.0 Miles
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={{marginHorizontal: 5}}>
              <Image
                style={{width: 20, height: 20}}
                source={require('../../../assets/icons/category.png')}
              />
            </View>
            <View style={{marginHorizontal: 5}}>
              <Text
                style={{
                  fontFamily: Font.RobotoBold,
                  fontSize: 15,
                  color: Colors.white,
                }}>
                Casual Shoes
              </Text>
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
  card: {
    width: wp('90%'),
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
    fontFamily: Font.RobotoBold,
    color: Colors.white,
    fontSize: 25,
    fontWeight: 'bold',
  },
  brandSection: {
    width: 80,
    height: 80,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shopName: {
    fontFamily: Font.RobotoBold,
    color: Colors.white,
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default TopSellerSlider;
