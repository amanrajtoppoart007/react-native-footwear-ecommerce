import React from 'react';
import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Colors from '../../theme/Colors';
import Font from '../../theme/Font';

function BrandSlider() {
  const brands = [
    {
      id: 'brand-slider-item-one',
      name: 'Adidas',
      image: require('../../assets/images/brand/adidas.png'),
    },
    {
      id: 'brand-slider-item-two',
      name: 'Puma',
      image: require('../../assets/images/brand/puma-logo-wallpaper.jpg'),
    },
    {
      id: 'brand-slider-item-three',
      name: 'Nike',
      image: require('../../assets/images/brand/nike.jpg'),
    },
    {
      id: 'brand-slider-item-four',
      name: 'Bata',
      image: require('../../assets/images/brand/bata-logo.jpg'),
    },
  ];

  const renderItem = ({item}) => (
    <View>
      <View style={styles.card}>
        <ImageBackground
          style={styles.image}
          imageStyle={{borderRadius: 10}}
          resizeMode={'cover'}
          source={item?.image}
        />
      </View>
      <View style={styles.titleSection}>
        <Text style={styles.title}>{item?.name}</Text>
      </View>
    </View>
  );

  return (
    <>
      {brands && (
        <View style={{marginVertical: 10}}>
          <FlatList
            style={{
              width: wp('95%'),
            }}
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

const styles = StyleSheet.create({
  card: {
    width: wp('25%'),
    height: 80,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: Colors.transparent,
  },
  image: {
    width: wp('25%'),
    height: 80,
  },
  titleSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  title: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 13,
    color: Colors.black,
  },
});

export default BrandSlider;
