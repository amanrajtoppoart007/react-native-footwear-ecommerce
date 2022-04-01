import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../../theme/Colors';

function VideoSliderItem() {
  return <View style={styles.card} />;
}

const styles = StyleSheet.create({
  card: {
    width: wp('95%'),
    height: hp('30%'),
    backgroundColor: Colors.peru,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 3,
  },
});

export default VideoSliderItem;
