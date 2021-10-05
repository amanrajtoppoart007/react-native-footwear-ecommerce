import React from 'react';
import {FlatList, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import VideoSliderItem from './VideoSliderItem';

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
            renderItem={VideoSliderItem}
          />
        </View>
      )}
    </>
  );
}

export default VideoSlider;
