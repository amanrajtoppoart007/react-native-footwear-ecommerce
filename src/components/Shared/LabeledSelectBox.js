import React from 'react';
import SelectBox from './SelectBox';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../theme/Colors';
import Font from '../../theme/Font';
import commonStyle from '../../theme/Style';

function LabeledSelectBox({label, data, value, setValue}) {
  return (
    <View>
      <View style={commonStyle.marginVertical(6)}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View>
        <SelectBox
          data={data}
          value={value}
          setValue={setValue}
          style={styles.pickerStyle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pickerStyle: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    borderColor: Colors.border,
    overflow: 'hidden',
  },
  label: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 12,
    color: '#9F9F9F',
  },
});

export default LabeledSelectBox;
