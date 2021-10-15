import React from 'react';
import {FlatList, Image, Pressable, StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Colors from '../../theme/Colors';
import Font from '../../theme/Font';

function ProductSlider() {
  const images = [
    {
      id: 'image-slider-item-one',
      image: require('../../assets/images/product/green-shoe-image-one.png'),
    },
    {
      id: 'image-slider-item-two',
      image: require('../../assets/images/product/green-shoe-image-two.png'),
    },
    {
      id: 'image-slider-item-three',
      image: require('../../assets/images/product/green-shoe-image-three.png'),
    },
    {
      id: 'image-slider-item-four',
      image: require('../../assets/images/product/green-shoe-image-one.png'),
    },
    {
      id: 'image-slider-item-five',
      image: require('../../assets/images/product/green-shoe-image-two.png'),
    },
    {
      id: 'image-slider-item-six',
      image: require('../../assets/images/product/green-shoe-image-three.png'),
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Image resizeMode={'contain'} source={item?.image} style={styles.image} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {images &&
          images.map((item, index) => {
            return (
              <Pressable key={Math.random() + index} style={styles.circle} />
            );
          })}
      </View>
    </View>
  );
  return (
    <>
      {images && (
        <>
          <FlatList
            style={{width: wp('100%')}}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            showsHorizontalScrollIndicator={false}
            initialNumToRender={3}
            horizontal={true}
            keyExtractor={item => item?.id?.toString()}
            data={images}
            renderItem={renderItem}
          />
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: wp('99%'),
    height: 300,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dad5d5',
    marginHorizontal: 5,
  },
  image: {
    width: 300,
    height: 250,
  },
  name: {
    fontFamily: Font.PoppinsSemiBold,
    color: Colors.white,
    fontSize: 20,
  },
  activeCircle: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    borderColor: '#6b6969',
    backgroundColor: '#6b6969',
    marginHorizontal: 2,
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    borderColor: 'rgba(204,186,186,0.85)',
    backgroundColor: 'rgba(204,186,186,0.85)',
    marginHorizontal: 2,
  },
});

export default ProductSlider;
