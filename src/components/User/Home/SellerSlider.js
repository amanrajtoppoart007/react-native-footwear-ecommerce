import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../../theme/Colors';
import Font from '../../../theme/Font';
import StarRating from '../StarRating';
import {Icon} from 'react-native-elements';

function SellerSlider() {
  const sellerList = [
    {
      id: 'seller-slider-item-one',
      backgroundColor: 'rgba(225,131,69,0.7)',
    },
    {
      id: 'seller-slider-item-two',
      backgroundColor: 'rgba(80,71,33,0.7)',
    },
    {
      id: 'seller-slider-item-three',
      backgroundColor: 'rgba(236, 79, 60, 0.7)',
    },
    {
      id: 'seller-slider-item-four',
      backgroundColor: 'rgba(225,131,69,0.7)',
    },
    {
      id: 'seller-slider-item-five',
      backgroundColor: 'rgba(110, 99, 53, 0.7)',
    },
    {
      id: 'seller-slider-item-six',
      backgroundColor: 'rgba(236, 79, 60, 0.7)',
    },
  ];

  const _renderItem = ({item}) => (
    <ImageBackground
      imageStyle={{borderRadius: 5}}
      style={styles.bgImage}
      source={require('../../../assets/images/temp/bgImage.png')}>
      <View style={[styles.card, {backgroundColor: item?.backgroundColor}]}>
        <View style={styles.rowCard}>
          <View style={{width: '30%', marginRight: 5}}>
            <Text style={styles.brandName}>AS</Text>
            <Image
              style={{width: 44, height: 38.79}}
              source={require('../../../assets/icons/shoe-icon.png')}
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
            <View style={[styles.centerFlexStart, {marginVertical: 5}]}>
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

            <View style={styles.centerFlexStart}>
              <View>
                <Image
                  style={{width: 8, height: 8}}
                  source={require('../../../assets/icons/category.png')}
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
  return (
    <>
      {sellerList && (
        <View style={{marginVertical: 5, marginBottom: 20}}>
          <FlatList
            style={{width: wp('95%')}}
            showsHorizontalScrollIndicator={false}
            initialNumToRender={3}
            horizontal={true}
            keyExtractor={item => item?.id?.toString()}
            data={sellerList}
            renderItem={_renderItem}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    width: wp('46.5%'),
    height: 108.47,
    marginHorizontal: 2,
  },
  card: {
    width: wp('46.5%'),
    height: 108.47,
    backgroundColor: Colors.peru,
    borderRadius: 5,
    padding: 20,
  },
  centerFlexStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rowCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  brandName: {
    fontFamily: Font.PoppinsMedium,
    color: Colors.white,
    fontSize: 25,
  },
  shopName: {
    fontFamily: Font.PoppinsMedium,
    color: Colors.white,
    fontSize: 12,
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

export default SellerSlider;
