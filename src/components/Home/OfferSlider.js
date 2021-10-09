import React from 'react';
import {FlatList, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import OfferSliderItem from './OfferSliderItem';

function OfferSlider() {
  const offers = [
    {
      id: 'offer-slider-item-one',
      backgroundColor: 'rgba(225,131,69,0.7)',
    },
    {
      id: 'offer-slider-item-two',
      backgroundColor: 'rgba(110, 99, 53, 0.7)',
    },
    {
      id: 'offer-slider-item-three',
      backgroundColor: 'rgba(236, 79, 60, 0.7)',
    },
    {
      id: 'offer-slider-item-four',
      backgroundColor: 'rgba(225,131,69,0.7)',
    },
    {
      id: 'offer-slider-item-five',
      backgroundColor: 'rgba(110, 99, 53, 0.7)',
    },
    {
      id: 'offer-slider-item-six',
      backgroundColor: 'rgba(236, 79, 60, 0.7)',
    },
  ];

  const renderItem = ({item}) => <OfferSliderItem item={item} />;
  return (
    <>
      {offers && (
        <View>
          <FlatList
            style={{width: wp('95%')}}
            showsHorizontalScrollIndicator={false}
            initialNumToRender={3}
            horizontal={true}
            keyExtractor={item => item?.id?.toString()}
            data={offers}
            renderItem={renderItem}
          />
        </View>
      )}
    </>
  );
}

export default OfferSlider;
