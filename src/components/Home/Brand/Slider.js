import React from 'react';
import {FlatList, View} from 'react-native';
import Item from './Item';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

function Slider() {
  const brands = [
    {
      id: 'brand-slider-item-one',
      name: 'Adidas',
      image: require('../../../assets/images/brand/adidas.png'),
    },
    {
      id: 'brand-slider-item-two',
      name: 'Puma',
      image: require('../../../assets/images/brand/puma-logo-wallpaper.jpg'),
    },
    {
      id: 'brand-slider-item-three',
      name: 'Nike',
      image: require('../../../assets/images/brand/nike.jpg'),
    },
    {
      id: 'brand-slider-item-four',
      name: 'Bata',
      image: require('../../../assets/images/brand/bata-logo.jpg'),
    },
  ];

  const renderItem = ({item}) => <Item item={item} />;

  return (
    <>
      {brands && (
        <View style={{marginVertical: 10}}>
          <FlatList
            style={{width: wp('95%'), height: hp('45%')}}
            showsHorizontalScrollIndicator={false}
            initialNumToRender={4}
            horizontal={true}
            keyExtractor={item => item?.id?.toString()}
            data={brands}
            renderItem={renderItem}
          />
        </View>
      )}
    </>
  );
}

export default Slider;
