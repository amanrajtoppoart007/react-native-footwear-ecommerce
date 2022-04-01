import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Font from '../../theme/Font';
import Colors from '../../theme/Colors';
function SelectBox({data, value, setValue, style}) {
  return (
    <View style={style}>
      <Picker
        selectedValue={value}
        style={styles.pickerStyle}
        itemStyle={styles.pickerItemStyle}
        onValueChange={setValue}>
        <Picker.Item key="select" value="" label="Select.." />
        {data?.map(item => (
          <Picker.Item
            key={item?.key}
            label={item?.label}
            value={item?.value}
          />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  pickerStyle: {
    width: '100%',
    fontFamily: Font.PoppinsRegular,
    fontSize: 12,
    color: Colors.primary,
  },
  pickerItemStyle: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 12,
    color: Colors.primary,
  },
});

export default SelectBox;
