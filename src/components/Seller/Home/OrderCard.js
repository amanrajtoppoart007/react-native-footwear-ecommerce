import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Colors from '../../../theme/Colors';
import commonStyle from '../../../theme/Style';
import Font from '../../../theme/Font';

function OrderCard() {
  const details = [
    {
      title: 'Order Id',
      value: '#124',
    },
    {
      title: 'Item Name',
      value: 'Spark Shoes',
    },
    {
      title: 'SKU',
      value: '#5345345',
    },
    {
      title: 'Color',
      value: 'Green',
    },
    {
      title: 'Size',
      value: '32',
    },
    {
      title: 'Price',
      value: 'USD $120.00',
    },
    {
      title: 'Date',
      value: 'Dec,12-2021',
    },
  ];
  return (
    <View style={styles.card}>
      <View style={styles.cardImageSection}>
        <View style={styles.round}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/shoes/shoe-product-one.png')}
          />
        </View>
      </View>
      <View style={styles.cardSection}>
        {details &&
          details.map((item, index) => {
            return (
              <View key={index} style={styles.section}>
                <View style={commonStyle.width('50%')}>
                  <Text style={styles.dataTitle}>{item.title}</Text>
                </View>
                <View style={commonStyle.width('50%')}>
                  <Text style={styles.dataText}>{item.value}</Text>
                </View>
              </View>
            );
          })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: heightPercentageToDP('25%'),
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopColor: Colors.border,
    borderBottomColor: Colors.border,
    ...commonStyle.rowFlexStart,
  },
  cardImageSection: {
    width: '50%',
    height: heightPercentageToDP('25%'),
    ...commonStyle.center,
  },
  cardSection: {
    width: '50%',
    height: heightPercentageToDP('25%'),
    ...commonStyle.center,
  },
  section: {
    ...commonStyle.rowFlexStart,
    flexWrap: 'wrap',
  },
  image: {
    width: 180,
    height: 180,
    marginTop: 15,
    marginLeft: 20,
  },
  round: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 10,
    borderColor: Colors.border,
    ...commonStyle.center,
    alignSelf: 'center',
  },
  dataTitle: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 11,
    color: Colors.black,
  },
  dataText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 11,
    color: Colors.black,
  },
});

export default OrderCard;
