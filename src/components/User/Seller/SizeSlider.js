import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Font from '../../../theme/Font';
import Colors from '../../../theme/Colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

function SizeSlider() {
  const categories = [
    {
      id: 'category-slider-item-one',
      image: require('../../../assets/images/size/image-one.png'),
      title: 'Formal Shoes',
    },
    {
      id: 'category-slider-item-two',
      image: require('../../../assets/images/size/image-two.png'),
      title: 'Casual Shoes',
    },
    {
      id: 'category-slider-item-three',
      image: require('../../../assets/images/size/image-three.png'),
      title: 'Sport Shoes',
    },
    {
      id: 'category-slider-item-four',
      image: require('../../../assets/images/size/image-one.png'),
      title: 'Formal Shoes',
    },
    {
      id: 'category-slider-item-five',
      image: require('../../../assets/images/size/image-two.png'),
      title: 'Formal Shoes',
    },
    {
      id: 'category-slider-item-six',
      image: require('../../../assets/images/size/image-three.png'),
      title: 'Formal Shoes',
    },
  ];

  const renderItem = ({item}) => (
    <View style={{marginHorizontal: 8}}>
      <View style={styles.card}>
        <View style={{marginVertical: 5}}>
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={item?.image}
          />
        </View>
        <View style={{marginVertical: 5}}>
          <Text style={styles.title}>{item?.title}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <>
      {categories && (
        <View style={{marginVertical: 10}}>
          <FlatList
            style={{width: wp('95%'), height: 119}}
            showsHorizontalScrollIndicator={false}
            initialNumToRender={3}
            horizontal={true}
            keyExtractor={item => item?.id?.toString()}
            data={categories}
            renderItem={renderItem}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 122,
    height: 119,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Colors.border,
    backgroundColor: '#DBEBF8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 94,
    height: 46,
  },
  title: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 13,
    color: Colors.black,
  },
});

export default SizeSlider;
