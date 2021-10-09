import React from 'react';
import {FlatList, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SellerSliderItem from './SellerSliderItem';

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
            renderItem={SellerSliderItem}
          />
        </View>
      )}
    </>
  );
}

export default SellerSlider;
