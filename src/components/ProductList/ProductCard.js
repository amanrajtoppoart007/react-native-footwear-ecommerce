import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../theme/Colors';
import Font from '../../theme/Font';
import StarRating from '../StarRating';
import {useNavigation} from '@react-navigation/native';

function ProductCard({item, isLiked = false}) {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(false);
  return (
    <View style={styles.card}>
      <View style={styles.imageSection}>
        <View style={styles.likeSection}>
          <Icon
            onPress={() => setLiked(!liked)}
            type={'font-awesome'}
            name={isLiked ? 'heart' : liked ? 'heart' : 'heart-o'}
            color={isLiked ? '#E4CB6F' : liked ? '#E4CB6F' : '#7D7B7C'}
            size={30}
          />
        </View>
        <Pressable onPress={() => navigation.navigate('Product')}>
          <Image
            style={styles.productImg}
            resizeMode={'contain'}
            source={item?.image}
          />
        </Pressable>
      </View>
      <View style={styles.commonVerticalMargin}>
        <Pressable onPress={() => navigation.navigate('Product')}>
          <Text style={styles.title}>{item?.title}</Text>
        </Pressable>
        <View style={styles.priceSection}>
          <Icon
            type={'font-awesome'}
            name={'dollar'}
            size={15}
            color={'#4C2E89'}
          />
          <Text style={styles.price}>{item?.price?.toFixed(2)}</Text>
        </View>
        <View style={styles.ratingSection}>
          <StarRating rating={item?.rating} />
          <View style={styles.commonHorizontalMargin}>
            <Text style={styles.rating}>({item?.rating?.toFixed(1)})</Text>
          </View>
        </View>
        <View style={styles.resellerSection}>
          <View>
            <Icon
              type={'font-awesome'}
              name={'user'}
              size={13}
              color={'#686667'}
            />
          </View>
          <View style={styles.commonHorizontalMargin}>
            <Text style={styles.resellerHelper}>Reseller</Text>
          </View>
          <View>
            <Text style={styles.reseller}>{item?.reseller}</Text>
          </View>
        </View>
        <View style={styles.distanceSection}>
          <View>
            <Icon
              type={'feather'}
              name={'map-pin'}
              size={13}
              color={'#686667'}
            />
          </View>
          <View style={styles.commonHorizontalMargin}>
            <Text style={styles.reseller}>{item?.distance} Miles</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  commonHorizontalMargin: {
    marginHorizontal: 5,
  },
  commonVerticalMargin: {
    marginVertical: 5,
  },
  resellerSection: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 5,
  },
  productImg: {width: 100, height: 100},
  card: {
    width: wp('48%'),
    height: hp('50%'),
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 1,
  },
  imageSection: {
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    fontFamily: Font.PoppinsMedium,
    fontSize: 15,
    color: '#686667',
  },
  price: {
    fontFamily: Font.PoppinsMedium,
    fontSize: 25,
    color: '#4C2E89',
    marginHorizontal: 5,
  },
  rating: {
    fontFamily: Font.PoppinsMedium,
    fontSize: 12,
    color: '#686667',
  },
  resellerHelper: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 13,
    color: '#686667',
  },
  reseller: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 13,
    color: '#686667',
  },
  likeSection: {
    marginVertical: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 5,
  },
  ratingSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  distanceSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 5,
  },
  priceSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default ProductCard;
