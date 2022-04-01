import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import commonStyle from '../../../theme/Style';
import Colors from '../../../theme/Colors';
import Font from '../../../theme/Font';

function PriceCard({item}) {
  const {name, image, price, brand} = item;
  return (
    <View style={styles.card}>
      <View style={[commonStyle.width('25%')]}>
        <View style={styles.round}>
          <Image style={styles.boxImage} source={image} />
        </View>
      </View>
      <View style={[commonStyle.width('55%')]}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.brand}>{brand}</Text>
      </View>
      <View style={[commonStyle.width('20%')]}>
        <Text style={styles.price}>${price?.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: heightPercentageToDP('10%'),
    borderRadius: 8,
    padding: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#c8c7c7',
    ...commonStyle.rowFlexStart,
  },
  boxImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  round: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 6,
    borderColor: Colors.border,
    ...commonStyle.center,
    alignSelf: 'center',
  },
  name: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 12,
    color: Colors.black,
  },
  brand: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 11,
    color: Colors.black,
  },
  price: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 12,
    color: Colors.secondary,
  },
});

export default PriceCard;
