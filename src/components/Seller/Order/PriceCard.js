import React from 'react';
import commonStyle from '../../../theme/Style';
import {StyleSheet, Text, View} from 'react-native';
import Font from '../../../theme/Font';
import Colors from '../../../theme/Colors';

function PriceCard({label, value}) {
  return (
    <View style={commonStyle.rowSpaceBetween}>
      <View style={commonStyle.width('10%')} />
      <View style={commonStyle.width('30%')}>
        <Text style={styles.attributeTitle}>{label}</Text>
      </View>
      <View style={commonStyle.width('40%')} />
      <View style={commonStyle.width('20%')}>
        <Text style={styles.attributeText}>${value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemPriceSection: {
    width: '60%',
  },
  attributeTitle: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 14,
    color: Colors.black,
  },
  attributeText: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 14,
    color: Colors.black,
  },
});

export default PriceCard;
