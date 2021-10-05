import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ProductSliderItem from './ProductSliderItem';

function ProductSlider() {
  const products = [
    {
      id: 'product-slider-item-one',
      image: require('../../assets/images/temp/shoes/shoe-a.png'),
    },
    {
      id: 'product-slider-item-two',
      image: require('../../assets/images/temp/shoes/shoe-b.png'),
    },
    {
      id: 'product-slider-item-three',
      image: require('../../assets/images/temp/shoes/shoe-c.png'),
    },
    {
      id: 'product-slider-item-four',
      image: require('../../assets/images/temp/shoes/shoe-a.png'),
    },
    {
      id: 'product-slider-item-five',
      image: require('../../assets/images/temp/shoes/shoe-b.png'),
    },
    {
      id: 'product-slider-item-six',
      image: require('../../assets/images/temp/shoes/shoe-c.png'),
    },
  ];
  const renderItem = ({item}) => <ProductSliderItem item={item} />;
  return (
    <>
      {products && (
        <View style={{marginVertical: 10}}>
          <FlatList
            style={{width: wp('95%'), height: hp('45%')}}
            showsHorizontalScrollIndicator={false}
            initialNumToRender={3}
            horizontal={true}
            keyExtractor={item => item?.id?.toString()}
            data={products}
            renderItem={renderItem}
          />
        </View>
      )}
    </>
  );
}

export default ProductSlider;
