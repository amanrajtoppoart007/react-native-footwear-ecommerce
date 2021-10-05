import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon, Rating} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../theme/Colors';
import Font from '../../theme/Font';

const ProductSliderItem = props => {
  const {item} = props;
  const [liked, setLiked] = useState(false);

  const ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
  };

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
        <Image
          resizeMode={'contain'}
          style={styles.image}
          source={item?.image}
        />
      </View>
      <View>
        <Text style={styles.title}>Adidas Shoes</Text>
      </View>
      <View>
        <Rating
          readOnly
          imageSize={15}
          ratingColor={'#f1c40f'}
          tintColor={Colors.white}
          ratingBackgroundColor={Colors.peru}
          onFinishRating={ratingCompleted}
          style={{paddingVertical: 10}}
        />
      </View>
      <View style={styles.footer}>
        <View style={{marginHorizontal: 3}}>
          <Image
            style={{width: 15, height: 15}}
            source={require('../../assets/icons/category-inverted.png')}
          />
        </View>
        <View style={{marginHorizontal: 3}}>
          <Text style={styles.category}>Casual Shoes</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: wp('40%'),
    height: hp('40%'),
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
    fontFamily: Font.RobotoBold,
    color: Colors.black,
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  date: {
    fontFamily: Font.RobotoBold,
    color: Colors.black,
    fontSize: 18,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontFamily: Font.RobotoBold,
    color: Colors.black,
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  category: {
    fontFamily: Font.RobotoBold,
    color: Colors.black,
    fontSize: 15,
  },
});

export default ProductSliderItem;
