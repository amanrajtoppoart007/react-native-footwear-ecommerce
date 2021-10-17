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
    <Pressable
      onPress={() => navigation.navigate('Product')}
      style={styles.card}>
      <View style={styles.imageSection}>
        <View
          style={{
            marginVertical: 10,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingHorizontal: 5,
          }}>
          <Icon
            onPress={() => setLiked(!liked)}
            type={'font-awesome'}
            name={isLiked ? 'heart' : liked ? 'heart' : 'heart-o'}
            color={isLiked ? '#E4CB6F' : liked ? '#E4CB6F' : '#7D7B7C'}
            size={30}
          />
        </View>
        <Image
          style={{width: 100, height: 100}}
          resizeMode={'contain'}
          source={item?.image}
        />
      </View>
      <View style={{marginVertical: 5}}>
        <Text style={styles.title}>{item?.title}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Icon
            type={'font-awesome'}
            name={'dollar'}
            size={15}
            color={'#4C2E89'}
          />
          <Text style={styles.price}>{item?.price?.toFixed(2)}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <StarRating rating={item?.rating} />
          <View style={{marginHorizontal: 5}}>
            <Text style={styles.rating}>({item?.rating?.toFixed(1)})</Text>
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
              type={'font-awesome'}
              name={'user'}
              size={13}
              color={'#686667'}
            />
          </View>
          <View style={{marginHorizontal: 5}}>
            <Text style={styles.resellerHelper}>Reseller</Text>
          </View>
          <View>
            <Text style={styles.reseller}>{item?.reseller}</Text>
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
              size={13}
              color={'#686667'}
            />
          </View>
          <View style={{marginHorizontal: 5}}>
            <Text style={styles.reseller}>{item?.distance} Miles</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: wp('48%'),
    height: hp('52%'),
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
    fontSize: 30,
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
});

export default ProductCard;
