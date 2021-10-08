import React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import VideoSliderItem from './VideoSliderItem';
import Colors from '../../theme/Colors';

function VideoSlider() {
  const videos = [
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
      <Image
        style={{width: '100%', height: '100%'}}
        source={require('../../assets/images/temp/video-image.png')}
      />
    </View>
  );
  return (
    <>
      {videos && (
        <View style={{marginVertical: 10}}>
          <FlatList
            style={{width: wp('95%'), height: hp('30%')}}
            showsHorizontalScrollIndicator={false}
            initialNumToRender={3}
            horizontal={true}
            keyExtractor={item => item?.id?.toString()}
            data={videos}
            renderItem={renderItem}
          />
        </View>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  card: {
    width: wp('95%'),
    height: hp('30%'),
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 3,
  },
});

export default VideoSlider;
