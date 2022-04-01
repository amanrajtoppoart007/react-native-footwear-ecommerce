import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../../theme/Colors';
import Font from '../../../theme/Font';
import StarRating from '../StarRating';
import {useNavigation} from '@react-navigation/native';

const ProductSliderItem = props => {
  const navigation = useNavigation();
  const {item} = props;
  const [liked, setLiked] = useState(false);
  return (
    <View style={styles.card}>
      <View style={styles.rowCard}>
        <View>
          <Text style={styles.time}>10 hrs</Text>
          <Text style={styles.date}>22 July</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Icon
              type={'font-awesome'}
              name={liked ? 'heart' : 'heart-o'}
              size={20}
              color={Colors.peru}
              onPress={() => {
                setLiked(!liked);
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Pressable onPress={() => navigation.navigate('Product')}>
          <Image
            resizeMode={'contain'}
            style={styles.image}
            source={item?.image}
          />
        </Pressable>
      </View>
      <View>
        <Pressable onPress={() => navigation.navigate('Product')}>
          <Text style={styles.title}>Adidas Shoes</Text>
        </Pressable>
      </View>
      <View>
        <View style={styles.ratingContainer}>
          <View>
            <StarRating rating={4} />
          </View>
          <View style={{marginHorizontal: 5}}>
            <Text>4.0</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View>
          <Image
            style={{width: 7, height: 7}}
            source={require('../../../assets/icons/category-inverted.png')}
          />
        </View>
        <View style={{marginHorizontal: 5}}>
          <Text style={styles.category}>Casual Shoes</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: wp('40%'),
    height: hp('35%'),
    backgroundColor: Colors.background,
    borderRadius: 10,
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 20,
  },
  rowCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    fontFamily: Font.PoppinsMedium,
    color: Colors.black,
    fontSize: 9,
    textDecorationLine: 'underline',
  },
  date: {
    fontFamily: Font.PoppinsMedium,
    color: Colors.black,
    fontSize: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontFamily: Font.PoppinsRegular,
    color: Colors.black,
    fontSize: 13,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 5,
  },
  category: {
    fontFamily: Font.PoppinsRegular,
    color: Colors.black,
    fontSize: 9,
  },
});

export default ProductSliderItem;
