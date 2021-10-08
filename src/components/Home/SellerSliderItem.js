import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Rating} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../theme/Colors';
import Font from '../../theme/Font';

function SellerSliderItem() {
  const ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
  };

  return (
    <View style={styles.card}>
      <View style={styles.rowCard}>
        <View style={{marginHorizontal: 3}}>
          <Text style={styles.brandName}>AS</Text>
          <Image
            style={{width: 44, height: 38.79}}
            source={require('../../assets/icons/shoe-icon.png')}
          />
        </View>
        <View style={{marginHorizontal: 3}}>
          <View>
            <Text style={styles.shopName}>Awesome Shop</Text>
          </View>
          <View>
            <View>
              <Rating
                imageSize={15}
                tintColor={Colors.peru}
                onFinishRating={ratingCompleted}
                style={{paddingVertical: 10}}
              />
            </View>
          </View>
          <View>
            <Text style={styles.detail}>1.0 Miles</Text>
          </View>
          <View>
            <Text style={styles.detail}>Casual Shoes</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: wp('45%'),
    height: hp('20%'),
    backgroundColor: Colors.peru,
    borderRadius: 5,
    marginHorizontal: 3,
    padding: 20,
  },
  rowCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  brandName: {
    fontFamily: Font.RobotoBold,
    color: Colors.white,
    fontSize: 30,
    fontWeight: 'bold',
  },
  shopName: {
    fontFamily: Font.RobotoBold,
    color: Colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
  detail: {
    fontFamily: Font.RobotoBold,
    color: Colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default SellerSliderItem;
