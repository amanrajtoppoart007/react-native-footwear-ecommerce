import React from 'react';
import {FlatList, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import OfferSliderItem from './OfferSliderItem';

function OfferSlider() {
  const offers = [
    {
      id: 'offer-slider-item-one',
    },
    {
      id: 'offer-slider-item-two',
    },
    {
      id: 'offer-slider-item-three',
    },
    {
      id: 'offer-slider-item-four',
    },
    {
      id: 'offer-slider-item-five',
    },
    {
      id: 'offer-slider-item-six',
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
