import React from 'react';
import commonStyle from '../../../theme/Style';
import {Image, StyleSheet, Text, View} from 'react-native';
import Font from '../../../theme/Font';

function OrderItem({item}) {
  const {name, price, image} = item;
  return (
    <View style={styles.card}>
      <View style={commonStyle.width('20%')}>
        <Image style={styles.itemImage} source={image} />
      </View>
      <View style={commonStyle.width('60%')}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={commonStyle.width('20%')}>
        <Text style={styles.price}>${price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    ...commonStyle.rowFlexStart,
    padding: 4,
  },
  name: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 14,
    color: '#2081EA',
  },
  price: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 14,
    color: '#2081EA',
  },
  itemImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

export default OrderItem;
